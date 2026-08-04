/**
 * ZChat E2EE — Web Crypto API (RSA-OAEP 2048 + AES-GCM hybrid)
 * Keys: users.public_key / users.private_key (JWK string)
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
        try {
            return JSON.parse(jwk);
        } catch {
            return null;
        }
    }

    function canonicalJwkString(jwk) {
        const o = parseJwk(jwk);
        if (!o) return "";
        const keys = ["e", "kty", "n"].filter((k) => o[k] != null);
        const sorted = {};
        keys.sort().forEach((k) => {
            sorted[k] = o[k];
        });
        return JSON.stringify(sorted);
    }

    async function generateKeyPairJwk() {
        const keyPair = await crypto.subtle.generateKey(RSA_ALGO, true, [
            "encrypt",
            "decrypt",
        ]);
        const publicJwk = await crypto.subtle.exportKey("jwk", keyPair.publicKey);
        const privateJwk = await crypto.subtle.exportKey("jwk", keyPair.privateKey);
        return {
            publicKey: JSON.stringify(publicJwk),
            privateKey: JSON.stringify(privateJwk),
        };
    }

    async function importPublicKey(jwk) {
        const obj = parseJwk(jwk);
        if (!obj) throw new Error("Invalid public key JWK");
        return crypto.subtle.importKey("jwk", obj, RSA_ALGO, true, ["encrypt"]);
    }

    async function importPrivateKey(jwk) {
        const obj = parseJwk(jwk);
        if (!obj) throw new Error("Invalid private key JWK");
        return crypto.subtle.importKey("jwk", obj, RSA_ALGO, true, ["decrypt"]);
    }

    function cacheKeysLocally(publicKey, privateKey) {
        if (publicKey) localStorage.setItem("zchat_public_key", jwkToString(publicKey));
        if (privateKey) localStorage.setItem("zchat_private_key", jwkToString(privateKey));
    }

    function getLocalPrivateKey() {
        return localStorage.getItem("zchat_private_key") || "";
    }

    function getLocalPublicKey() {
        return localStorage.getItem("zchat_public_key") || "";
    }

    async function ensureUserKeys(username, existingUserRow) {
        if (!global.supabaseClient || !username) {
            return { publicKey: getLocalPublicKey(), privateKey: getLocalPrivateKey() };
        }

        let row = existingUserRow;
        if (!row) {
            const { data } = await global.supabaseClient
                .from("users")
                .select("username, public_key, private_key, id")
                .ilike("username", username)
                .maybeSingle();
            row = data;
        }

        if (row && row.public_key && row.private_key) {
            cacheKeysLocally(row.public_key, row.private_key);
            return { publicKey: row.public_key, privateKey: row.private_key, userId: row.id };
        }

        const pair = await generateKeyPairJwk();
        const { error } = await global.supabaseClient
            .from("users")
            .update({
                public_key: pair.publicKey,
                private_key: pair.privateKey,
            })
            .ilike("username", username);

        if (error) {
            console.error("[E2EE] Failed to save keys:", error);
            cacheKeysLocally(pair.publicKey, pair.privateKey);
            return { publicKey: pair.publicKey, privateKey: pair.privateKey, userId: row && row.id };
        }

        cacheKeysLocally(pair.publicKey, pair.privateKey);
        return { publicKey: pair.publicKey, privateKey: pair.privateKey, userId: row && row.id };
    }

    async function fetchPublicKeyForUsername(username) {
        if (!global.supabaseClient || !username) return null;
        const { data, error } = await global.supabaseClient
            .from("users")
            .select("username, public_key, id")
            .ilike("username", username)
            .maybeSingle();
        if (error || !data || !data.public_key) return null;
        return data;
    }

    async function encryptMessage(plainText, receiverPublicKeyJwk) {
        if (plainText == null) plainText = "";
        if (!receiverPublicKeyJwk) throw new Error("Missing receiver public key");

        try {
            const pubKey = await importPublicKey(receiverPublicKeyJwk);
            const aesKey = await crypto.subtle.generateKey(AES_ALGO, true, ["encrypt", "decrypt"]);
            const iv = crypto.getRandomValues(new Uint8Array(12));
            const encoded = new TextEncoder().encode(String(plainText));
            const cipherBuf = await crypto.subtle.encrypt({ name: "AES-GCM", iv }, aesKey, encoded);
            const rawAes = await crypto.subtle.exportKey("raw", aesKey);
            const wrapped = await crypto.subtle.encrypt({ name: "RSA-OAEP" }, pubKey, rawAes);

            const payload = {
                v: E2EE_VERSION,
                alg: "RSA-OAEP+AES-GCM",
                iv: bufToB64(iv),
                c: bufToB64(cipherBuf),
                k: bufToB64(wrapped),
            };
            return bufToB64(new TextEncoder().encode(JSON.stringify(payload)));
        } catch (err) {
            console.error("[E2EE] encryptMessage error:", err);
            throw err;
        }
    }

    async function encryptMessageForUsers(plainText, publicKeysByUsername) {
        if (plainText == null) plainText = "";
        const entries = Object.entries(publicKeysByUsername || {}).filter(([, jwk]) => !!jwk);
        if (!entries.length) throw new Error("No public keys provided");

        try {
            const aesKey = await crypto.subtle.generateKey(AES_ALGO, true, ["encrypt", "decrypt"]);
            const iv = crypto.getRandomValues(new Uint8Array(12));
            const encoded = new TextEncoder().encode(String(plainText));
            const cipherBuf = await crypto.subtle.encrypt({ name: "AES-GCM", iv }, aesKey, encoded);
            const rawAes = await crypto.subtle.exportKey("raw", aesKey);

            const keys = {};
            for (const [name, jwk] of entries) {
                const pubKey = await importPublicKey(jwk);
                const wrapped = await crypto.subtle.encrypt({ name: "RSA-OAEP" }, pubKey, rawAes);
                keys[name.toLowerCase()] = bufToB64(wrapped);
            }

            const payload = {
                v: E2EE_VERSION,
                alg: "RSA-OAEP+AES-GCM",
                iv: bufToB64(iv),
                c: bufToB64(cipherBuf),
                keys,
            };
            return bufToB64(new TextEncoder().encode(JSON.stringify(payload)));
        } catch (err) {
            console.error("[E2EE] encryptMessageForUsers error:", err);
            throw err;
        }
    }

    function looksLikeE2eePayload(str) {
        if (!str || typeof str !== "string") return false;
        if (str.startsWith("eyJ")) return true;
        if (str.startsWith("{") && str.includes('"alg"')) return true;
        return false;
    }

    async function decryptMessage(encryptedBase64, myPrivateKeyJwk) {
        if (!encryptedBase64) return "";
        if (!myPrivateKeyJwk) return null;

        try {
            if (!looksLikeE2eePayload(encryptedBase64)) return null;

            const jsonStr = new TextDecoder().decode(b64ToBuf(encryptedBase64));
            const payload = JSON.parse(jsonStr);
            if (!payload || !payload.c || !payload.iv) return null;

            const privKey = await importPrivateKey(myPrivateKeyJwk);

            let wrappedB64 = payload.k || null;
            if (!wrappedB64 && payload.keys && typeof payload.keys === "object") {
                const me = (localStorage.getItem("zchat_username") || "").toLowerCase();
                wrappedB64 = payload.keys[me] || Object.values(payload.keys).find(Boolean) || null;
            }
            if (!wrappedB64) return null;

            const rawAes = await crypto.subtle.decrypt(
                { name: "RSA-OAEP" },
                privKey,
                b64ToBuf(wrappedB64)
            );
            const aesKey = await crypto.subtle.importKey("raw", rawAes, AES_ALGO, false, ["decrypt"]);
            const plainBuf = await crypto.subtle.decrypt(
                { name: "AES-GCM", iv: new Uint8Array(b64ToBuf(payload.iv)) },
                aesKey,
                b64ToBuf(payload.c)
            );
            return new TextDecoder().decode(plainBuf);
        } catch (err) {
            console.warn("[E2EE] decryptMessage failed:", err && err.message);
            return null;
        }
    }

    async function safeDecryptContent(content, privateKeyJwk) {
        if (!content) return "";
        if (!privateKeyJwk || !looksLikeE2eePayload(content)) return content;
        try {
            const plain = await decryptMessage(content, privateKeyJwk);
            return plain != null ? plain : content;
        } catch {
            return content;
        }
    }

    async function generateSafetyNumber(myPublicKeyJwk, partnerPublicKeyJwk) {
        try {
            const a = canonicalJwkString(myPublicKeyJwk);
            const b = canonicalJwkString(partnerPublicKeyJwk);
            if (!a || !b) return "";

            const [first, second] = [a, b].sort();
            const combined = first + "|" + second;
            const hashBuf = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(combined));
            const bytes = new Uint8Array(hashBuf);

            let digits = "";
            for (let i = 0; i < 15; i++) {
                digits += String(bytes[i] % 10);
                digits += String(Math.floor(bytes[i] / 10) % 10);
            }
            digits = digits.slice(0, 30);
            const groups = digits.match(/.{1,5}/g) || [];
            return groups.join(" ");
        } catch (err) {
            console.error("[E2EE] generateSafetyNumber error:", err);
            return "";
        }
    }

    async function markUserAsVerified(targetUserId, myUsername) {
        if (!global.supabaseClient) throw new Error("Supabase client missing");
        if (!targetUserId) throw new Error("targetUserId required");

        const me = myUsername || localStorage.getItem("zchat_username") || "";
        if (!me) throw new Error("Not logged in");

        const { data: meRow, error: fetchErr } = await global.supabaseClient
            .from("users")
            .select("id, username, verified_users")
            .ilike("username", me)
            .maybeSingle();

        if (fetchErr) throw fetchErr;
        if (!meRow) throw new Error("Current user not found");

        const current = Array.isArray(meRow.verified_users) ? meRow.verified_users.slice() : [];
        const tid = String(targetUserId);
        if (!current.includes(tid)) current.push(tid);

        const { data, error } = await global.supabaseClient
            .from("users")
            .update({ verified_users: current })
            .ilike("username", me)
            .select("verified_users")
            .maybeSingle();

        if (error) throw error;
        return data && data.verified_users ? data.verified_users : current;
    }

    async function hasVerifiedUser(targetUserId, myUsername) {
        if (!global.supabaseClient || !targetUserId) return false;
        const me = myUsername || localStorage.getItem("zchat_username") || "";
        if (!me) return false;
        const { data } = await global.supabaseClient
            .from("users")
            .select("verified_users")
            .ilike("username", me)
            .maybeSingle();
        const list = (data && data.verified_users) || [];
        return list.map(String).includes(String(targetUserId));
    }

    global.ZChatE2EE = {
        generateKeyPairJwk,
        ensureUserKeys,
        fetchPublicKeyForUsername,
        encryptMessage,
        encryptMessageForUsers,
        decryptMessage,
        safeDecryptContent,
        generateSafetyNumber,
        markUserAsVerified,
        hasVerifiedUser,
        getLocalPrivateKey,
        getLocalPublicKey,
        cacheKeysLocally,
        looksLikeE2eePayload,
    };

    console.log("[E2EE] ZChatE2EE ready");
})(typeof window !== "undefined" ? window : globalThis);
