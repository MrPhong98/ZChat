/* ============================================================
 * 13-disappearing-screenshot.js
 * Tin nhắn tự xoá (disappearing) + chống chụp màn hình. Phụ thuộc: 03, 04.
 * ============================================================ */
/* ============ XỬ LÝ TIN NHẮN TỰ XÓA chuẩn UI + DB ============ */
function scheduleDisappearing(chat, msg) {
    if (!chat.disappearingTime || chat.disappearingTime === "off") return;

    let ms = 0;
    if (chat.disappearingTime === "10s") ms = 10000;
    else if (chat.disappearingTime === "1m") ms = 60000;
    else if (chat.disappearingTime === "10m") ms = 600000;
    else if (chat.disappearingTime === "24h") ms = 86400000;

    if (ms > 0) {
        setTimeout(async () => {
            const idx = chat.messages.findIndex((m) => m.id === msg.id);
            if (idx !== -1) {
                chat.messages.splice(idx, 1);
                if (state.activeChatId === chat.id) {
                    renderMessages(chat);
                }
                renderChatList();
            }

            if (window.supabaseClient && msg.id) {
                try {
                    await window.supabaseClient
                        .from("messages")
                        .delete()
                        .eq("id", msg.id);
                } catch (err) {
                    console.error("[ZChat] Error auto-deleting message:", err);
                }
            }
        }, ms);
    }
}

function applyScreenshotProtection(enable) {
    if (enable) {
        activeChatEl.classList.add("screenshot-protected");
    } else {
        activeChatEl.classList.remove("screenshot-protected");
    }
}

let toastTimer = null;
function showScreenshotBlockedToast() {
    const toast = document.getElementById("zchatToast");
    if (!toast) return;
    const lang = localStorage.getItem("zchat_lang") || "en";
    const dict = i18n[lang] || i18n.en;
    const msg = dict.screenshotBlocked || "This conversation prohibits screenshots";
    toast.innerHTML = `<span class="toast-icon"><i data-lucide="shield-alert" class="w-4 h-4"></i></span><span>${escapeHtml(msg)}</span>`;
    if (window.lucide) window.lucide.createIcons({ nodes: [toast] });
    toast.classList.add("show");
    if (toastTimer) clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove("show"), 3200);
}

window.addEventListener("keyup", (e) => {
    const chat = state.chats.find((c) => c.id === state.activeChatId);
    if (chat && chat.blockScreenshots && e.key === "PrintScreen") {
        try { navigator.clipboard.writeText(""); } catch (_) {}
        showScreenshotBlockedToast();
    }
});