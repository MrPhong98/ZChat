/* ============================================================
 * 18-new-chat.js
 * Xử lý tạo đoạn chat mới (tìm user, tạo/lấy conversation). Phụ thuộc: 03, 04, 07.
 * ============================================================ */
/* ============ XỬ LÝ SỰ KIỆN TẠO CHAT MỚI ============ */
newChatForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const rawName = newChatNameInput ? newChatNameInput.value.trim() : "";
    if (!rawName) return;

    const currentUser = (currentUsername || localStorage.getItem("zchat_username") || "").trim();

    if (rawName.toLowerCase() === currentUser.toLowerCase()) {
        alert("Bạn không thể tạo cuộc trò chuyện với chính mình!");
        return;
    }

    let userFound = false;
    let matchedName = rawName;
    let matchedAvatarRow = null;

    let matchedUserId = null;

    if (window.supabaseClient) {
        try {
            const { data: userData, error } = await window.supabaseClient
                .from("users")
                .select("id, username, avatar_type, avatar_color, avatar_emoji, avatar_url, is_verified")
                .ilike("username", rawName)
                .maybeSingle();

            if (error) {
                console.error("[ZChat] Lỗi query Supabase:", error);
            }

            if (userData && userData.username) {
                userFound = true;
                matchedName = userData.username;
                matchedAvatarRow = userData;
                matchedUserId = userData.id || null;
            }
        } catch (err) {
            console.error("[ZChat] Lỗi kết nối khi tìm user:", err);
        }
    }

    if (!userFound && typeof MOCK_USERS !== "undefined") {
        const foundLocal = MOCK_USERS.find(
            u => u.username.toLowerCase() === rawName.toLowerCase()
        );
        if (foundLocal) {
            userFound = true;
            matchedName = foundLocal.username;
        }
    }

    if (!userFound) {
        let errEl = document.getElementById("newChatError");
        if (!errEl) {
            errEl = document.createElement("p");
            errEl.id = "newChatError";
            errEl.className = "text-red-500 text-xs mt-1.5 font-medium";
            newChatNameInput.parentNode.appendChild(errEl);
        }
        errEl.textContent = "No User found!";
        newChatNameInput.focus();
        return;
    }

    // Phòng chat 1-1: id từ bảng conversations (user_1 + user_2 UUID)
    let targetChatId = null;
    const myId = await getMyUserId();
    if (!matchedUserId && matchedName) {
        matchedUserId = await resolveUserIdByUsername(matchedName);
    }
    if (myId && matchedUserId) {
        targetChatId = await getOrCreateConversationId(myId, matchedUserId);
        if (targetChatId) conversationOtherName[targetChatId] = matchedName;
    }
    // Fallback legacy nếu chưa có conversations / user id
    if (!targetChatId) {
        const sortedUsers = [currentUser.toLowerCase(), matchedName.toLowerCase()].sort();
        targetChatId = `chat_${sortedUsers[0]}_${sortedUsers[1]}`;
    }

    let chat = state.chats.find(
        c => c.id === targetChatId || c.participant.name.toLowerCase() === matchedName.toLowerCase()
    );

    if (!chat) {
        chat = {
            id: targetChatId,
            participant: {
                id: matchedUserId || uid("u"),
                name: matchedName,
                userId: matchedUserId || null,
                online: true,
                lastSeen: null,
            },
            unread: 0,
            disappearingTime: "off",
            blockScreenshots: false,
            messages: []
        };
        if (matchedAvatarRow) applyAvatarFields(chat.participant, matchedAvatarRow);
        state.chats.unshift(chat);
    } else {
        chat.id = targetChatId;
        if (matchedUserId) chat.participant.userId = matchedUserId;
        if (matchedAvatarRow) applyAvatarFields(chat.participant, matchedAvatarRow);
    }

    state.activeChatId = chat.id;
    newChatNameInput.value = "";
    closeNewChatModal();

    renderChatList();
    renderActiveChat();
});