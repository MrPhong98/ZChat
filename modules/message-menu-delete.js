/* ============================================================
 * 11-message-menu-delete.js
 * Menu 3 chấm trên tin nhắn (Reply/Edit/Copy/Info/Delete) + xoá tin nhắn. Phụ thuộc: 02-10.
 * ============================================================ */
/* ============ MENU 3 CHẤM (Reply / Edit / Copy / Info / Delete for all) ============ */
function closeMessageActionMenu() {
    const existing = document.getElementById("zchatMsgActionMenu");
    if (existing) existing.remove();
    document.removeEventListener("click", closeMessageActionMenuOnOutsideClick, true);
}

function closeMessageActionMenuOnOutsideClick(e) {
    const menu = document.getElementById("zchatMsgActionMenu");
    if (menu && !menu.contains(e.target)) closeMessageActionMenu();
}

function openMessageActionMenu(msg, chat, isMine, clientX, clientY) {
    closeMessageActionMenu();

    const { body } = parseReply(msg.text || "");
    const isImage = body.startsWith("[IMAGE]:");

    const items = [];
    items.push({ icon: "corner-up-left", label: "Reply", action: () => startReplyMessage(msg.id) });
    if (isMine && !isImage) {
        items.push({ icon: "pencil", label: "Edit message", action: () => startEditMessage(msg.id, body) });
    }
    // Copy chỉ cho tin text — không hiện với ảnh
    if (!isImage) {
        items.push({ icon: "copy", label: "Copy message text", action: () => copyMessageText(msg) });
    }
    items.push({ icon: "info", label: "Info", action: () => showMessageInfo(msg) });
    if (isMine) {
        items.push({ icon: "trash-2", label: "Delete for all", danger: true, action: () => deleteMessage(msg.id) });
    }

    const menu = document.createElement("div");
    menu.id = "zchatMsgActionMenu";
    menu.className = "msg-action-menu fade-in";
    menu.innerHTML = items.map((item) => `
            <button type="button" class="msg-action-item ${item.danger ? "danger" : ""}" data-action="${item.label}">
                <i data-lucide="${item.icon}" class="msg-action-icon"></i>
                <span>${item.label}</span>
            </button>`).join("");

    document.body.appendChild(menu);
    icons();

    // Định vị menu ngay cạnh tin nhắn (mobile + desktop)
    const menuW = menu.offsetWidth || 200;
    const menuH = menu.offsetHeight || 180;
    const pad = 12;
    const vw = window.innerWidth;
    const vh = window.innerHeight;

    let anchorX = Number(clientX);
    let anchorY = Number(clientY);
    if (!Number.isFinite(anchorX) || !Number.isFinite(anchorY)) {
        anchorX = vw / 2;
        anchorY = vh / 2;
    }

    // Tin của mình (bên phải): neo menu về phía phải; tin người khác: neo trái
    let left = isMine ? anchorX - menuW + 32 : anchorX;
    left = Math.max(pad, Math.min(left, vw - menuW - pad));

    // Ưu tiên mở dưới điểm neo; không đủ chỗ (text box) thì mở phía trên
    const composerEl = document.querySelector("#activeChat .absolute.bottom-0");
    const limitBottom = composerEl
        ? Math.min(vh - pad, composerEl.getBoundingClientRect().top - 8)
        : vh - pad;

    let top = anchorY;
    if (top + menuH > limitBottom) {
        const above = anchorY - menuH - 8;
        top = above >= pad ? above : Math.max(pad, limitBottom - menuH);
    }

    menu.style.left = `${Math.round(left)}px`;
    menu.style.top = `${Math.round(top)}px`;

    menu.querySelectorAll(".msg-action-item").forEach((btn, idx) => {
        btn.addEventListener("click", () => {
            closeMessageActionMenu();
            items[idx].action();
        });
    });

    setTimeout(() => {
        document.addEventListener("click", closeMessageActionMenuOnOutsideClick, true);
    }, 0);
}

if (messageFeed) {
    messageFeed.addEventListener("scroll", closeMessageActionMenu, { passive: true });
}
window.addEventListener("resize", closeMessageActionMenu);

/* ============ CHỈNH SỬA & XÓA TIN NHẮN (EDIT & DELETE) ============ */
async function deleteMessage(msgId) {
    const lang = localStorage.getItem("zchat_lang") || "en";
    const dict = i18n[lang] || i18n.en;

    const confirmed = await customConfirm(
        dict.confirmDeleteTitle || "Delete Message",
        dict.confirmDelete || "Are you sure you want to delete this message?"
    );

    if (!confirmed) {
        return;
    }

    if (editingMsgId === msgId) {
        cancelEditMode();
    }

    const chat = state.chats.find((c) => c.id === state.activeChatId);
    if (chat) {
        chat.messages = chat.messages.filter((m) => m.id !== msgId);
        renderMessages(chat);
        renderChatList();
    }

    if (window.supabaseClient) {
        try {
            const { error } = await window.supabaseClient
                .from("messages")
                .delete()
                .eq("id", msgId);

            if (error) {
                console.error("[ZChat] Delete message error:", error);
            }
        } catch (err) {
            console.error("[ZChat] Delete exception:", err);
        }
    }
}