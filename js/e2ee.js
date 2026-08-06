/**
 * ZChat E2EE — RSA-OAEP 2048 + AES-GCM (hybrid)
 */
(function (global) {
    "use strict";

    const RSA_ALGO = {
        name: "RSA-OAEP",
        modulusLength: 2048,
        publicExponent: new Uint8Array([1, 0, 1]),
        hash: "SHA-256",
    };
    const AES_ALGO = { name: "AES-GCM", length: 256 };
    const E2EE_VERSION = 1;

    let _cachedPrivJwk = null, _cachedPrivKey = null;
    let _cachedPubJwk = null, _cachedPubKey = null;

    function bufToB64(buf) {
        const bytes = buf instanceof ArrayBuffer ? new Uint8Array(buf) : buf;
        let s = "";
        for (let i = 0; i < bytes.length; i++) s += String.fromCharCode(bytes[i]);
        return btoa(s);
    }
    function b64ToBuf(b64) {
        const s = atob(b64);
        const bytes = new Uint8Array(s.length);
        for (let i = 0; i < s.length; i++) bytes[i] = s.charCodeAt(i);
        return bytes.buffer;
    }
    function jwkToString(jwk) {
        return typeof jwk === "string" ? jwk : JSON.stringify(jwk);
    }
    function parseJwk(jwk) {
        if (!jwk) return null;
        if (typeof jwk === "object") return jwk;
        try { return JSON.parse(jwk); } catch { return null; }
    }
    function canonicalJwkString(jwk) {
        const o = parseJwk(jwk);
        if (!o) return "";
        const keys = ["e", "kty", "n"].filter((k) => o[k] != null).sort();
        const sorted = {};
        keys.forEach((k) => { sorted[k] = o[k]; });
        return JSON.stringify(sorted);
    }

    async function generateKeyPairJwk() {
        const keyPair = await crypto.subtle.generateKey(RSA_ALGO, true, ["encrypt", "decrypt"]);
        return {
            publicKey: JSON.stringify(await crypto.subtle.exportKey("jwk", keyPair.publicKey)),
            privateKey: JSON.stringify(await crypto.subtle.exportKey("jwk", keyPair.privateKey)),
        };
    }
    async function importPublicKey(jwk) {
        const str = jwkToString(jwk);
        if (_cachedPubJwk === str && _cachedPubKey) return _cachedPubKey;
        const obj = parseJwk(jwk);
        if (!obj) throw new Error("Invalid public key JWK");
        const key = await crypto.subtle.importKey("jwk", obj, RSA_ALGO, true, ["encrypt"]);
        _cachedPubJwk = str; _cachedPubKey = key;
        return key;
    }
    async function importPrivateKey(jwk) {
        const str = jwkToString(jwk);
        if (_cachedPrivJwk === str && _cachedPrivKey) return _cachedPrivKey;
        const obj = parseJwk(jwk);
        if (!obj) throw new Error("Invalid private key JWK");
        const key = await crypto.subtle.importKey("jwk", obj, RSA_ALGO, true, ["decrypt"]);
        _cachedPrivJwk = str; _cachedPrivKey = key;
        return key;
    }
    function cacheKeysLocally(publicKey, privateKey) {
        if (publicKey) localStorage.setItem("zchat_public_key", jwkToString(publicKey));
        if (privateKey) localStorage.setItem("zchat_private_key", jwkToString(privateKey));
        _cachedPrivJwk = _cachedPrivKey = _cachedPubJwk = _cachedPubKey = null;
    }
    function getLocalPrivateKey() { return localStorage.getItem("zchat_private_key") || ""; }
    function getLocalPublicKey() { return localStorage.getItem("zchat_public_key") || ""; }

    async function ensureUserKeys(username, existingUserRow) {
        if (!global.supabaseClient || !username) {
            return { publicKey: getLocalPublicKey(), privateKey: getLocalPrivateKey() };
        }
        let row = existingUserRow;
        if (!row) {
            const { data } = await global.supabaseClient
                .from("users").select("username, public_key, private_key, id")
                .ilike("username", username).maybeSingle();
            row = data;
        }
        if (row && row.public_key && row.private_key) {
            cacheKeysLocally(row.public_key, row.private_key);
            return { publicKey: row.public_key, privateKey: row.private_key, userId: row.id };
        }
        const pair = await generateKeyPairJwk();
        const { error } = await global.supabaseClient
            .from("users").update({ public_key: pair.publicKey, private_key: pair.privateKey })
            .ilike("username", username);
        if (error) console.error("[E2EE] save keys:", error);
        cacheKeysLocally(pair.publicKey, pair.privateKey);
        return { publicKey: pair.publicKey, privateKey: pair.privateKey, userId: row && row.id };
    }

    async function fetchPublicKeyForUsername(username) {
        if (!global.supabaseClient || !username) return null;
        const { data, error } = await global.supabaseClient
            .from("users").select("username, public_key, id")
            .ilike("username", username).maybeSingle();
        if (error || !data || !data.public_key) return null;
        return data;
    }

    function looksLikeE2eePayload(str) {
        if (!str || typeof str !== "string") return false;
        return str.startsWith("eyJ") || (str.startsWith("{") && str.includes('"alg"'));
    }

    async function encryptMessage(plainText, receiverPublicKeyJwk) {
        if (plainText == null) plainText = "";
        if (!receiverPublicKeyJwk) throw new Error("Missing receiver public key");
        const pubKey = await importPublicKey(receiverPublicKeyJwk);
        const aesKey = await crypto.subtle.generateKey(AES_ALGO, true, ["encrypt", "decrypt"]);
        const iv = crypto.getRandomValues(new Uint8Array(12));
        const cipherBuf = await crypto.subtle.encrypt(
            { name: "AES-GCM", iv }, aesKey, new TextEncoder().encode(String(plainText))
        );
        const rawAes = await crypto.subtle.exportKey("raw", aesKey);
        const wrapped = await crypto.subtle.encrypt({ name: "RSA-OAEP" }, pubKey, rawAes);
        return bufToB64(new TextEncoder().encode(JSON.stringify({
            v: E2EE_VERSION, alg: "RSA-OAEP+AES-GCM",
            iv: bufToB64(iv), c: bufToB64(cipherBuf), k: bufToB64(wrapped),
        })));
    }

    async function encryptMessageForUsers(plainText, publicKeysByUsername) {
        if (plainText == null) plainText = "";
        const entries = Object.entries(publicKeysByUsername || {}).filter(([, jwk]) => !!jwk);
        if (!entries.length) throw new Error("No public keys provided");
        const aesKey = await crypto.subtle.generateKey(AES_ALGO, true, ["encrypt", "decrypt"]);
        const iv = crypto.getRandomValues(new Uint8Array(12));
        const cipherBuf = await crypto.subtle.encrypt(
            { name: "AES-GCM", iv }, aesKey, new TextEncoder().encode(String(plainText))
        );
        const rawAes = await crypto.subtle.exportKey("raw", aesKey);
        const keys = {};
        await Promise.all(entries.map(async ([name, jwk]) => {
            const pubKey = await importPublicKey(jwk);
            const wrapped = await crypto.subtle.encrypt({ name: "RSA-OAEP" }, pubKey, rawAes);
            keys[name.toLowerCase()] = bufToB64(wrapped);
        }));
        return bufToB64(new TextEncoder().encode(JSON.stringify({
            v: E2EE_VERSION, alg: "RSA-OAEP+AES-GCM",
            iv: bufToB64(iv), c: bufToB64(cipherBuf), keys,
        })));
    }

    async function decryptMessage(encryptedBase64, myPrivateKeyJwk) {
        if (!encryptedBase64 || !myPrivateKeyJwk) return null;
        try {
            if (!looksLikeE2eePayload(encryptedBase64)) return null;
            const payload = JSON.parse(new TextDecoder().decode(b64ToBuf(encryptedBase64)));
            if (!payload || !payload.c || !payload.iv) return null;
            const privKey = await importPrivateKey(myPrivateKeyJwk);
            let wrappedB64 = payload.k || null;
            if (!wrappedB64 && payload.keys) {
                const me = (localStorage.getItem("zchat_username") || "").toLowerCase();
                wrappedB64 = payload.keys[me] || Object.values(payload.keys).find(Boolean) || null;
            }
            if (!wrappedB64) return null;
            const rawAes = await crypto.subtle.decrypt({ name: "RSA-OAEP" }, privKey, b64ToBuf(wrappedB64));
            const aesKey = await crypto.subtle.importKey("raw", rawAes, AES_ALGO, false, ["decrypt"]);
            const plainBuf = await crypto.subtle.decrypt(
                { name: "AES-GCM", iv: new Uint8Array(b64ToBuf(payload.iv)) },
                aesKey, b64ToBuf(payload.c)
            );
            return new TextDecoder().decode(plainBuf);
        } catch (err) {
            console.warn("[E2EE] decrypt failed:", err && err.message);
            return null;
        }
    }

    async function safeDecryptContent(content, privateKeyJwk) {
        if (!content) return "";
        if (!privateKeyJwk || !looksLikeE2eePayload(content)) return content;
        try {
            const plain = await decryptMessage(content, privateKeyJwk);
            return plain != null ? plain : content;
        } catch { return content; }
    }

    async function decryptMessagesBatch(messages, privateKeyJwk) {
        if (!messages || !messages.length || !privateKeyJwk) return;
        try { await importPrivateKey(privateKeyJwk); } catch { return; }
        const tasks = messages.map(async (msg) => {
            if (!msg || !msg.text || !looksLikeE2eePayload(msg.text)) return;
            const plain = await safeDecryptContent(msg.text, privateKeyJwk);
            if (plain != null) msg.text = plain;
        });
        for (let i = 0; i < tasks.length; i += 32) {
            await Promise.all(tasks.slice(i, i + 32));
        }
    }

    async function generateSafetyNumber(myPublicKeyJwk, partnerPublicKeyJwk) {
        try {
            const a = canonicalJwkString(myPublicKeyJwk);
            const b = canonicalJwkString(partnerPublicKeyJwk);
            if (!a || !b) return "";
            const [first, second] = [a, b].sort();
            const hashBuf = await crypto.subtle.digest(
                "SHA-256", new TextEncoder().encode(first + "|" + second)
            );
            const bytes = new Uint8Array(hashBuf);
            let digits = "";
            for (let i = 0; i < 30; i++) {
                digits += String(bytes[i] % 10);
                digits += String(Math.floor(bytes[i] / 10) % 10);
            }
            return (digits.slice(0, 60).match(/.{1,5}/g) || []).join(" ");
        } catch (err) {
            console.error("[E2EE] generateSafetyNumber:", err);
            return "";
        }
    }

    /** Lấy UUID + username của user hiện tại (verifier) */
    async function _resolveMyUser(myUsername) {
        const me = myUsername || localStorage.getItem("zchat_username") || "";
        const cachedId = localStorage.getItem("zchat_user_id");
        if (cachedId && me) return { me, myId: cachedId };
        if (!global.supabaseClient || !me) return { me, myId: null };
        const { data, error } = await global.supabaseClient
            .from("users").select("id, username")
            .ilike("username", me).maybeSingle();
        if (error) throw error;
        if (!data || !data.id) throw new Error("Current user not found");
        localStorage.setItem("zchat_user_id", data.id);
        return { me: data.username || me, myId: data.id };
    }

    /** Lấy username từ UUID (partner được verify) */
    async function _resolveUsernameById(userId) {
        if (!global.supabaseClient || !userId) return null;
        const { data } = await global.supabaseClient
            .from("users").select("username")
            .eq("id", userId).maybeSingle();
        return data && data.username ? data.username : null;
    }

    /**
     * Bảng verified_contacts:
     *   verifier_id, verified_user_id, verifier_username, verified_username, created_at
     */
    async function markUserAsVerified(targetUserId, myUsername, partnerUsername) {
        if (!global.supabaseClient) throw new Error("Supabase client missing");
        if (!targetUserId) throw new Error("targetUserId required");
        const { me, myId } = await _resolveMyUser(myUsername);
        if (!myId) throw new Error("Current user id missing");
        const tid = String(targetUserId);
        let verifiedName = partnerUsername || null;
        if (!verifiedName) {
            verifiedName = await _resolveUsernameById(tid);
        }
        const row = {
            verifier_id: myId,
            verified_user_id: tid,
            verifier_username: me || null,
            verified_username: verifiedName || null,
        };
        const { data, error } = await global.supabaseClient
            .from("verified_contacts")
            .upsert(row, { onConflict: "verifier_id,verified_user_id" })
            .select()
            .maybeSingle();
        if (error) throw error;
        return data;
    }

    /** Xóa dòng verify (Mark as unverified) */
    async function unmarkUserAsVerified(targetUserId, myUsername) {
        if (!global.supabaseClient) throw new Error("Supabase client missing");
        if (!targetUserId) throw new Error("targetUserId required");
        const { myId } = await _resolveMyUser(myUsername);
        if (!myId) throw new Error("Current user id missing");
        const { error } = await global.supabaseClient
            .from("verified_contacts")
            .delete()
            .eq("verifier_id", myId)
            .eq("verified_user_id", String(targetUserId));
        if (error) throw error;
        return true;
    }

    async function hasVerifiedUser(targetUserId, myUsername) {
        if (!global.supabaseClient || !targetUserId) return false;
        try {
            const { myId } = await _resolveMyUser(myUsername);
            if (!myId) return false;
            const { data, error } = await global.supabaseClient
                .from("verified_contacts")
                .select("verifier_id")
                .eq("verifier_id", myId)
                .eq("verified_user_id", String(targetUserId))
                .maybeSingle();
            if (error) return false;
            return !!data;
        } catch {
            return false;
        }
    }

    global.ZChatE2EE = {
        generateKeyPairJwk, ensureUserKeys, fetchPublicKeyForUsername,
        encryptMessage, encryptMessageForUsers, decryptMessage, safeDecryptContent,
        decryptMessagesBatch, generateSafetyNumber,
        markUserAsVerified, unmarkUserAsVerified, hasVerifiedUser,
        getLocalPrivateKey, getLocalPublicKey, cacheKeysLocally, looksLikeE2eePayload,
    };
    console.log("[E2EE] ZChatE2EE ready");
})(typeof window !== "undefined" ? window : globalThis);
