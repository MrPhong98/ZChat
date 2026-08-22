/* ============================================================
 * 15-safety-number.js
 * Popup Safety Number: My Code / Scan Code (E2EE, QR). Phụ thuộc: 02, 03, 04, 10.
 * ============================================================ */
/* ============ SAFETY NUMBER POPUP ============ */
const safetyNumberModal = document.getElementById("safetyNumberModal");
const openSafetyNumberBtn = document.getElementById("openSafetyNumberBtn");
const closeSafetyNumberBtn = document.getElementById("closeSafetyNumberBtn");
const safetyMarkVerifiedBtn = document.getElementById("safetyMarkVerifiedBtn");
const safetyTabMyCode = document.getElementById("safetyTabMyCode");
const safetyTabScan = document.getElementById("safetyTabScan");
const safetyPanelMyCode = document.getElementById("safetyPanelMyCode");
const safetyPanelScan = document.getElementById("safetyPanelScan");
const safetyScanFile = document.getElementById("safetyScanFile");
let _safetyPartnerId = null;
let _safetyIsVerified = false;
let _safetyNumberRaw = "";
let _html5Qr = null;
let _scanRunning = false;

function setVerifyBtnLabel(isVerified) {
    if (!safetyMarkVerifiedBtn) return;
    _safetyIsVerified = !!isVerified;
    safetyMarkVerifiedBtn.textContent = isVerified ? "Mark as unverified" : "Mark as verified";
    safetyMarkVerifiedBtn.disabled = false;
    safetyMarkVerifiedBtn.style.opacity = "1";
}

function formatSafetyGrid(numStr) {
    const parts = (numStr || "").trim().split(/\s+/).filter(Boolean);
    if (!parts.length) return "—";
    let html = "";
    for (let i = 0; i < parts.length; i += 4) {
        const row = parts.slice(i, i + 4).map((p) =>
            `<span class="inline-block w-[4.5em]">${escapeHtml(p)}</span>`
        ).join(" ");
        html += `<div>${row}</div>`;
    }
    return html;
}

function setSafetyTab(which) {
    const isMy = which === "my";
    if (safetyPanelMyCode) safetyPanelMyCode.classList.toggle("hidden", !isMy);
    if (safetyPanelScan) safetyPanelScan.classList.toggle("hidden", isMy);
    if (safetyTabMyCode) {
        safetyTabMyCode.style.backgroundColor = isMy ? "var(--ink)" : "transparent";
        safetyTabMyCode.style.color = isMy ? "var(--canvas)" : "var(--muted)";
    }
    if (safetyTabScan) {
        safetyTabScan.style.backgroundColor = !isMy ? "var(--ink)" : "transparent";
        safetyTabScan.style.color = !isMy ? "var(--canvas)" : "var(--muted)";
    }
    if (isMy) stopSafetyScanner();
    else startSafetyScanner();
}

async function renderSafetyQr(payload) {
    const canvas = document.getElementById("safetyQrCanvas");
    const img = document.getElementById("safetyQrImg");
    const data = String(payload || "").replace(/\s+/g, "");
    if (!data) return;
    const size = 192;
    const QR = window.QRCode || (typeof QRCode !== "undefined" ? QRCode : null);
    if (canvas && QR && typeof QR.toCanvas === "function") {
        try {
            canvas.classList.remove("hidden");
            if (img) img.classList.add("hidden");
            canvas.width = size;
            canvas.height = size;
            await QR.toCanvas(canvas, data, {
                width: size, margin: 3, errorCorrectionLevel: "H",
                color: { dark: "#ffffff", light: "#0a0a0a" },
            });
            return;
        } catch (e) {
            console.warn("[E2EE] toCanvas failed:", e);
        }
    }
    if (img) {
        if (canvas) canvas.classList.add("hidden");
        img.classList.remove("hidden");
        img.src = "https://api.qrserver.com/v1/create-qr-code/?size=" + size + "x" + size
            + "&margin=10&ecc=H&color=ffffff&bgcolor=0a0a0a&data=" + encodeURIComponent(data);
    }
}

async function stopSafetyScanner() {
    _scanRunning = false;
    if (_html5Qr) {
        try { if (_html5Qr.isScanning) await _html5Qr.stop(); } catch (_) {}
        try { await _html5Qr.clear(); } catch (_) {}
        _html5Qr = null;
    }
    const reader = document.getElementById("safetyScanReader");
    if (reader) reader.innerHTML = "";
}

function normalizeSafetyPayload(s) {
    return String(s || "").replace(/\s+/g, "").trim();
}

function handleScannedCode(raw) {
    const scanned = normalizeSafetyPayload(raw);
    const mine = normalizeSafetyPayload(_safetyNumberRaw);
    const resultEl = document.getElementById("safetyScanResult");
    stopSafetyScanner();
    if (!resultEl) return;
    resultEl.classList.remove("hidden");
    if (!mine) {
        resultEl.textContent = "Open My Code first so your number is ready";
        resultEl.style.color = "#f87171";
        return;
    }
    if (scanned === mine) {
        resultEl.textContent = "Match — safety numbers are identical";
        resultEl.style.color = "#34d399";
    } else {
        resultEl.textContent = "No match — numbers differ (possible MITM)";
        resultEl.style.color = "#f87171";
    }
}

function unmirrorScanPreview() {
    const root = document.getElementById("safetyScanReader");
    if (!root) return;
    root.querySelectorAll("video, canvas").forEach((el) => {
        el.style.transform = "none";
    });
}

async function startSafetyScanner() {
    const resultEl = document.getElementById("safetyScanResult");
    const reader = document.getElementById("safetyScanReader");
    if (!reader) return;
    if (resultEl) { resultEl.classList.add("hidden"); resultEl.textContent = ""; }
    await stopSafetyScanner();
    reader.innerHTML = "";

    if (typeof Html5Qrcode === "undefined") {
        if (resultEl) {
            resultEl.textContent = "Scanner library not loaded — use Upload QR image";
            resultEl.style.color = "#f87171";
            resultEl.classList.remove("hidden");
        }
        return;
    }

    _html5Qr = new Html5Qrcode("safetyScanReader", { verbose: false });
    _scanRunning = true;
    const config = {
        fps: 10,
        qrbox: (viewW, viewH) => {
            const s = Math.floor(Math.min(viewW, viewH) * 0.7);
            return { width: s, height: s };
        },
        aspectRatio: 1,
        disableFlip: true,
    };
    const onSuccess = (decodedText) => {
        if (!_scanRunning) return;
        _scanRunning = false;
        handleScannedCode(decodedText);
    };

    try {
        const cameras = await Html5Qrcode.getCameras();
        let cam = { facingMode: "environment" };
        if (cameras && cameras.length) {
            const back = cameras.find((c) => /back|rear|environment/i.test(c.label || ""));
            cam = (back || cameras[cameras.length - 1]).id;
        }
        await _html5Qr.start(cam, config, onSuccess, () => {});
        setTimeout(unmirrorScanPreview, 150);
        setTimeout(unmirrorScanPreview, 600);
    } catch (err1) {
        try {
            await _html5Qr.start({ facingMode: "user" }, config, onSuccess, () => {});
            setTimeout(unmirrorScanPreview, 150);
        } catch (err2) {
            console.warn("[E2EE] scanner:", err2);
            if (resultEl) {
                resultEl.textContent = "Camera blocked — use Upload QR image";
                resultEl.style.color = "#f87171";
                resultEl.classList.remove("hidden");
            }
        }
    }
}

async function scanFromFile(file) {
    if (!file) return;
    const resultEl = document.getElementById("safetyScanResult");
    try {
        if (typeof Html5Qrcode === "undefined") {
            if (resultEl) {
                resultEl.textContent = "Scanner library missing";
                resultEl.style.color = "#f87171";
                resultEl.classList.remove("hidden");
            }
            return;
        }
        await stopSafetyScanner();
        const reader = document.getElementById("safetyScanReader");
        if (reader) reader.innerHTML = "";
        const scanner = new Html5Qrcode("safetyScanReader", { verbose: false });
        const text = await scanner.scanFile(file, true);
        try { await scanner.clear(); } catch (_) {}
        handleScannedCode(text);
    } catch (e) {
        console.warn("[E2EE] scan file:", e);
        if (resultEl) {
            resultEl.textContent = "No QR found in image";
            resultEl.style.color = "#f87171";
            resultEl.classList.remove("hidden");
        }
    }
}

async function openSafetyNumberModal() {
    const chat = state.chats.find((c) => c.id === state.activeChatId);
    if (!safetyNumberModal || !chat) return;
    if (isSelfNotesChat(chat)) return;

    const grid = document.getElementById("safetyNumberGrid");
    const hint = document.getElementById("safetyNumberHint");
    const errEl = document.getElementById("safetyNumberError");

    safetyNumberModal.classList.remove("hidden");
    setSafetyTab("my");
    if (errEl) { errEl.classList.add("hidden"); errEl.textContent = ""; }
    if (grid) grid.textContent = "…";
    _safetyNumberRaw = "";
    if (hint) {
        hint.textContent = "To verify end-to-end encryption with "
            + chat.participant.name + ", compare numbers above with their device.";
    }
    setVerifyBtnLabel(false);
    _safetyPartnerId = null;
    icons();

    if (!window.ZChatE2EE) {
        if (grid) grid.textContent = "E2EE unavailable";
        if (errEl) {
            errEl.textContent = "Missing js/e2ee.js";
            errEl.classList.remove("hidden");
        }
        return;
    }

    try {
        const me = currentUsername || localStorage.getItem("zchat_username") || "";
        await window.ZChatE2EE.ensureUserKeys(me);
        const myPub = window.ZChatE2EE.getLocalPublicKey();
        let partnerPub = chat.participant.publicKey;
        let partnerId = chat.participant.userId;
        if (!partnerPub || !partnerId) {
            const row = await window.ZChatE2EE.fetchPublicKeyForUsername(chat.participant.name);
            if (row) {
                partnerPub = row.public_key;
                partnerId = row.id;
                chat.participant.publicKey = partnerPub;
                chat.participant.userId = partnerId;
            }
        }
        _safetyPartnerId = partnerId || null;

        if (!myPub || !partnerPub) {
            if (grid) grid.textContent = "—";
            if (errEl) {
                errEl.textContent = !myPub ? "Your keys missing — re-login" : "Partner has no public key yet";
                errEl.classList.remove("hidden");
            }
            return;
        }

        const num = await window.ZChatE2EE.generateSafetyNumber(myPub, partnerPub);
        _safetyNumberRaw = num;
        if (grid) grid.innerHTML = formatSafetyGrid(num);
        await renderSafetyQr(num);

        if (partnerId) {
            const already = await window.ZChatE2EE.hasVerifiedUser(partnerId);
            setVerifyBtnLabel(already);
        }
    } catch (err) {
        console.error("[E2EE] safety modal:", err);
        if (grid) grid.textContent = "Error";
        if (errEl) {
            errEl.textContent = err.message || "Failed to load";
            errEl.classList.remove("hidden");
        }
    }
}

function closeSafetyNumberModal() {
    stopSafetyScanner();
    if (safetyNumberModal) safetyNumberModal.classList.add("hidden");
}

if (openSafetyNumberBtn) {
    openSafetyNumberBtn.addEventListener("click", (e) => {
        e.preventDefault();
        openSafetyNumberModal();
    });
}
if (closeSafetyNumberBtn) closeSafetyNumberBtn.addEventListener("click", closeSafetyNumberModal);
if (safetyNumberModal) {
    safetyNumberModal.addEventListener("click", (e) => {
        if (e.target === safetyNumberModal) closeSafetyNumberModal();
    });
}
if (safetyTabMyCode) safetyTabMyCode.addEventListener("click", () => setSafetyTab("my"));
if (safetyTabScan) safetyTabScan.addEventListener("click", () => setSafetyTab("scan"));
if (safetyScanFile) {
    safetyScanFile.addEventListener("change", () => {
        const f = safetyScanFile.files && safetyScanFile.files[0];
        if (f) scanFromFile(f);
        safetyScanFile.value = "";
    });
}

if (safetyMarkVerifiedBtn) {
    safetyMarkVerifiedBtn.addEventListener("click", async () => {
        if (!window.ZChatE2EE) return;
        if (!_safetyPartnerId) {
            const chat = state.chats.find((c) => c.id === state.activeChatId);
            if (chat) {
                const row = await window.ZChatE2EE.fetchPublicKeyForUsername(chat.participant.name);
                if (row) {
                    _safetyPartnerId = row.id;
                    chat.participant.userId = row.id;
                }
            }
        }
        if (!_safetyPartnerId) {
            const prev = safetyMarkVerifiedBtn.textContent;
            safetyMarkVerifiedBtn.textContent = "No user id";
            setTimeout(() => { safetyMarkVerifiedBtn.textContent = prev; }, 1500);
            return;
        }
        const wasVerified = _safetyIsVerified;
        safetyMarkVerifiedBtn.textContent = "…";
        try {
            const chat = state.chats.find((c) => c.id === state.activeChatId);
            const partnerName = chat && chat.participant ? chat.participant.name : null;
            if (wasVerified) {
                await window.ZChatE2EE.unmarkUserAsVerified(_safetyPartnerId);
                setVerifyBtnLabel(false);
            } else {
                await window.ZChatE2EE.markUserAsVerified(_safetyPartnerId, null, partnerName);
                setVerifyBtnLabel(true);
            }
        } catch (err) {
            console.error("[E2EE] toggle verified:", err);
            safetyMarkVerifiedBtn.textContent = "Failed";
            setTimeout(() => setVerifyBtnLabel(wasVerified), 1500);
        }
    });
}

infoDrawer.addEventListener("click", (e) => {
    if (e.target === infoDrawer) {
        closeInfoDrawer();
    }
});