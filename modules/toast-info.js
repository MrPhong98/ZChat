/* ============================================================
 * 10-toast-info.js
 * Toast thông báo nhỏ + popup Message Info. Phụ thuộc: 02, 04.
 * ============================================================ */
function showSimpleToast(message, iconName) {
    const toast = document.getElementById("zchatToast");
    if (!toast) return;
    toast.innerHTML = `<span class="toast-icon"><i data-lucide="${iconName || "check"}" class="w-4 h-4"></i></span><span>${escapeHtml(message)}</span>`;
    if (window.lucide) window.lucide.createIcons({ nodes: [toast] });
    toast.classList.add("show");
    if (toastTimer) clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove("show"), 2400);
}

async function copyMessageText(msg) {
    const { body } = parseReply(msg.text || "");
    const textToCopy = body.startsWith("[IMAGE]:") ? body.replace("[IMAGE]:", "") : body;
    if (!textToCopy) return;
    try {
        await navigator.clipboard.writeText(textToCopy);
    } catch (err) {
        const ta = document.createElement("textarea");
        ta.value = textToCopy;
        document.body.appendChild(ta);
        ta.select();
        document.execCommand("copy");
        document.body.removeChild(ta);
    }
    showSimpleToast("Copied to clipboard", "copy-check");
}

function showMessageInfo(msg) {
    const sentDate = new Date(msg.createdAt);
    const full = sentDate.toLocaleString(undefined, {
        weekday: "long", year: "numeric", month: "long", day: "numeric",
        hour: "2-digit", minute: "2-digit",
    });

    let panel = document.getElementById("zchatMsgInfoPanel");
    if (!panel) {
        panel = document.createElement("div");
        panel.id = "zchatMsgInfoPanel";
        panel.className = "fixed inset-0 z-[200] hidden items-center justify-center p-4";
        panel.style.backgroundColor = "rgba(0,0,0,0.6)";
        document.body.appendChild(panel);
        panel.addEventListener("click", (e) => {
            if (e.target === panel) panel.classList.add("hidden");
        });
    }

    panel.innerHTML = `
            <div class="w-full max-w-xs rounded-2xl p-5 fade-in" style="background-color: var(--elevated2); border: 1px solid var(--transparent-border);">
                <div class="flex items-center justify-between mb-4">
                    <h3 class="text-sm font-bold" style="color: var(--ink);">Message Info</h3>
                    <button type="button" id="zchatMsgInfoClose" class="p-1 rounded-full hover:bg-elevated2" style="color: var(--muted);">
                        <i data-lucide="x" class="w-4 h-4"></i>
                    </button>
                </div>
                <div class="flex flex-col gap-2 text-xs" style="color: var(--muted);">
                    <div class="flex justify-between gap-3">
                        <span>Sent</span>
                        <span class="text-right font-medium" style="color: var(--ink);">${escapeHtml(full)}</span>
                    </div>
                    ${msg.isEdited ? `<div class="flex justify-between gap-3"><span>Status</span><span class="font-medium" style="color: var(--ink);">Edited</span></div>` : ""}
                </div>
            </div>`;

    panel.classList.remove("hidden");
    panel.classList.add("flex");
    icons();

    const closeBtn = document.getElementById("zchatMsgInfoClose");
    if (closeBtn) closeBtn.addEventListener("click", () => panel.classList.add("hidden"));
}