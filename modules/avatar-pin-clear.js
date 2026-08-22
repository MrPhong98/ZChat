/* ============================================================
 * 07-avatar-pin-clear.js
 * avatarHtml(), Pin conversation, Clear Conversation. Phụ thuộc: 02, 03, 04.
 * ============================================================ */
function avatarHtml(participant, size) {
    size = size || 44;
    // Self-notes: avatar thường (tên mình)

    const innerAvatar = (participant.avatarType === "photo" && participant.avatarUrl)
        ? `<img src="${participant.avatarUrl}" alt="${initials(participant.name)}" class="h-full w-full rounded-full object-cover select-none" />`
        : (participant.avatarType === "emoji" && participant.avatarEmoji)
            ? `<div class="flex h-full w-full items-center justify-center rounded-full text-sm font-semibold select-none" style="background-color: var(--elevated2);">${participant.avatarEmoji}</div>`
            : `<div class="flex h-full w-full items-center justify-center rounded-full text-sm font-semibold select-none" style="background-color:${participant.avatarColor || colorFor(participant.name)}; color: var(--avatar-text);">${initials(participant.name)}</div>`;

    return `
      <div class="relative shrink-0" style="width:${size}px;height:${size}px">
        ${innerAvatar}
      </div>
    `;
}

/* ============ PIN CONVERSATION ============ */
function loadPinnedChatIds() {
    try {
        const raw = localStorage.getItem("zchat_pinned_chats");
        const arr = raw ? JSON.parse(raw) : [];
        return Array.isArray(arr) ? arr.map(String) : [];
    } catch (_) {
        return [];
    }
}
function savePinnedChatIds(ids) {
    localStorage.setItem("zchat_pinned_chats", JSON.stringify(ids));
}
function isChatPinned(chatId) {
    return loadPinnedChatIds().includes(String(chatId));
}
function togglePinChat(chatId) {
    const id = String(chatId);
    let ids = loadPinnedChatIds();
    if (ids.includes(id)) {
        ids = ids.filter((x) => x !== id);
    } else {
        ids.unshift(id);
    }
    savePinnedChatIds(ids);
    renderChatList();
}

/* ============ CLEAR CONVERSATION (xoá toàn bộ tin nhắn trong 1 đoạn chat) ============ */
async function clearConversation(chatId) {
    const chat = state.chats.find((c) => c.id === chatId);
    if (!chat) return;

    const lang = localStorage.getItem("zchat_lang") || "en";
    const dict = i18n[lang] || i18n.en;

    const confirmed = await customConfirm(
        dict.confirmClearTitle || "Clear Conversation",
        dict.confirmClear || "Are you sure you want to delete all messages in this conversation? This cannot be undone."
    );
    if (!confirmed) return;

    chat.messages = [];
    chat.unread = 0;

    if (state.activeChatId === chat.id) renderMessages(chat);
    renderChatList();

    if (window.supabaseClient) {
        try {
            const { error } = await window.supabaseClient
                .rpc("clear_conversation", { p_chat_id: chatId });
            if (error) console.error("[ZChat] clearConversation error:", error);
        } catch (err) {
            console.error("[ZChat] clearConversation exception:", err);
        }
    }
}
function closeChatListMenu() {
    const existing = document.getElementById("zchatChatListMenu");
    if (existing) existing.remove();
    document.removeEventListener("click", closeChatListMenuOnOutside, true);
}
function closeChatListMenuOnOutside(e) {
    const menu = document.getElementById("zchatChatListMenu");
    if (menu && !menu.contains(e.target)) closeChatListMenu();
}
function openChatListMenu(chat, clientX, clientY) {
    closeChatListMenu();
    const pinned = isChatPinned(chat.id);
    const menu = document.createElement("div");
    menu.id = "zchatChatListMenu";
    menu.className = "msg-action-menu fade-in";
    menu.innerHTML = `
            <button type="button" class="msg-action-item" data-action="pin">
                <i data-lucide="${pinned ? "pin-off" : "pin"}" class="msg-action-icon"></i>
                <span>${pinned ? "Unpin conversation" : "Pin conversation"}</span>
            </button>
            <button type="button" class="msg-action-item danger" data-action="clear">
                <i data-lucide="eraser" class="msg-action-icon"></i>
                <span>Clear Conversation</span>
            </button>`;
    document.body.appendChild(menu);
    icons();

    const rect = menu.getBoundingClientRect();
    let left = clientX;
    let top = clientY;
    if (left + rect.width > window.innerWidth - 8) left = window.innerWidth - rect.width - 8;
    if (top + rect.height > window.innerHeight - 8) top = window.innerHeight - rect.height - 8;
    if (left < 8) left = 8;
    if (top < 8) top = 8;
    menu.style.left = left + "px";
    menu.style.top = top + "px";

    menu.querySelector('[data-action="pin"]').addEventListener("click", (e) => {
        e.stopPropagation();
        closeChatListMenu();
        togglePinChat(chat.id);
    });
    menu.querySelector('[data-action="clear"]').addEventListener("click", (e) => {
        e.stopPropagation();
        closeChatListMenu();
        clearConversation(chat.id);
    });
    setTimeout(() => document.addEventListener("click", closeChatListMenuOnOutside, true), 0);
}