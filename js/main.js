// Hàm tạo icon tích xanh xài Path của bạn cung cấp
function getVerifiedBadge(isVerified) {
    if (!isVerified) return "";
    // 18px — to hơn một chút, vẫn sát tên
    return `<svg class="inline-block flex-shrink-0 text-blue-500" width="18" height="18" viewBox="0 0 22 22" fill="currentColor" style="margin-left:3px;vertical-align:-3px" title="Verified"><path d="M 20.396 11 c -0.018 -0.646 -0.215 -1.275 -0.57 -1.816 c -0.354 -0.54 -0.852 -0.972 -1.438 -1.246 c 0.223 -0.607 0.27 -1.264 0.14 -1.897 c -0.131 -0.634 -0.437 -1.218 -0.882 -1.687 c -0.47 -0.445 -1.053 -0.75 -1.687 -0.882 c -0.633 -0.13 -1.29 -0.083 -1.897 0.14 c -0.273 -0.587 -0.704 -1.086 -1.245 -1.44 S 11.647 1.62 11 1.604 c -0.646 0.017 -1.273 0.213 -1.813 0.568 s -0.969 0.854 -1.24 1.44 c -0.608 -0.223 -1.267 -0.272 -1.902 -0.14 c -0.635 0.13 -1.22 0.436 -1.69 0.882 c -0.445 0.47 -0.749 1.055 -0.878 1.688 c -0.13 0.633 -0.08 1.29 0.144 1.896 c -0.587 0.274 -1.087 0.705 -1.443 1.245 c -0.356 0.54 -0.555 1.17 -0.574 1.817 c 0.02 0.647 0.218 1.276 0.574 1.817 c 0.356 0.54 0.856 0.972 1.443 1.245 c -0.224 0.606 -0.274 1.263 -0.144 1.896 c 0.13 0.634 0.433 1.218 0.877 1.688 c 0.47 0.443 1.054 0.747 1.687 0.878 c 0.633 0.132 1.29 0.084 1.897 -0.136 c 0.274 0.586 0.705 1.084 1.246 1.439 c 0.54 0.354 1.17 0.551 1.816 0.569 c 0.647 -0.016 1.276 -0.213 1.817 -0.567 s 0.972 -0.854 1.245 -1.44 c 0.604 0.239 1.266 0.296 1.903 0.164 c 0.636 -0.132 1.22 -0.447 1.68 -0.907 c 0.46 -0.46 0.776 -1.044 0.908 -1.681 s 0.075 -1.299 -0.165 -1.903 c 0.586 -0.274 1.084 -0.705 1.439 -1.246 c 0.354 -0.54 0.551 -1.17 0.569 -1.816 Z M 9.662 14.85 l -3.429 -3.428 l 1.293 -1.302 l 2.072 2.072 l 4.4 -4.794 l 1.347 1.246 Z"/></svg>`;
}
(function () {
    "use strict";

    /* ============ I18N DICTIONARY (EN, VI, ZH, RU) ============ */
    const i18n = {
        en: {
            welcomeTitle: "Welcome to ZChat",
            welcomeDesc: "Private & Encrypted Messenger",
            enterUsername: "Enter username:",
            usernameErr: "Please enter a username to continue.",
            createAccount: "Create new account",
            chatTitle: "Chat",
            searchPlaceholder: "Search conversations",
            noMatch: "No conversations match your search",
            startConvTitle: "Start conversation",
            startConvDesc: "Pick a chat from the list, or start a new one.",
            newChatBtn: "New chat",
            typeMessage: "Message",
            newChatModalTitle: "New Conversation",
            newChatModalDesc: "Enter the name or username of the person you want to chat with:",
            startChatBtn: "Start Chat",
            cancelBtn: "Cancel",
            newChatInputPlaceholder: "Search or enter username...",
            infoTitle: "Contact Info",
            disappearingTitle: "Disappearing messages",
            disappearingDesc: "Auto delete after time",
            blockScreenshotsTitle: "Block Screenshots",
            blockScreenshotsDesc: "Prevent screen capture",
            optionOff: "Off",
            option10s: "10 seconds",
            option1m: "1 minute",
            option10m: "10 minutes",
            option24h: "24 hours",
            screenshotBlocked: "This conversation prohibits screenshots",
            haveAccount: "Already have an account?",
            loginLink: "Login",
            noAccount: "Don't have an account?",
            createOneLink: "Create one",
            loginUsername: "Username",
            recoveryPassword: "Recovery Password",
            enterChat: "Enter Chat",
            loginErrorEmpty: "Please enter username and recovery password.",
            loginErrorInvalid: "Invalid username or recovery password.",
            recoveryModalTitle: "Account created!",
            recoveryModalDesc: "Save your Recovery Password. You will need it to log in again.",
            recoveryModalLabel: "Recovery Password",
            recoveryModalWarn: "This password is only shown once. Store it somewhere safe.",
            recoveryContinue: "Continue to Chat",
            copied: "Copied!",
            editMsg: "Edit",
            deleteMsg: "Delete",
            editModalTitle: "Edit Message",
            saveBtn: "Save",
            confirmDelete: "Are you sure you want to delete this message?",
            editedTag: "(edited)",
            confirmDeleteTitle: "Delete Message",
            deleteBtn: "Delete"
        },
        vi: {
            welcomeTitle: "Chào mừng đến với ZChat",
            welcomeDesc: "Ứng dụng nhắn tin bảo mật & mã hóa",
            enterUsername: "Nhập tên người dùng:",
            usernameErr: "Vui lòng nhập tên người dùng để tiếp tục.",
            createAccount: "Tạo tài khoản mới",
            chatTitle: "Trò chuyện",
            searchPlaceholder: "Tìm kiếm cuộc trò chuyện",
            noMatch: "Không tìm thấy cuộc trò chuyện phù hợp",
            startConvTitle: "Bắt đầu cuộc trò chuyện",
            startConvDesc: "Chọn một đoạn chat từ danh sách hoặc tạo cuộc trò chuyện mới.",
            newChatBtn: "Tin nhắn mới",
            typeMessage: "Tin nhắn",
            newChatModalTitle: "Cuộc trò chuyện mới",
            newChatModalDesc: "Nhập tên hoặc username của người bạn muốn nhắn tin:",
            startChatBtn: "Bắt đầu chat",
            cancelBtn: "Hủy",
            newChatInputPlaceholder: "Tìm kiếm hoặc nhập username...",
            infoTitle: "Thông tin liên hệ",
            disappearingTitle: "Tin nhắn tự xóa",
            disappearingDesc: "Tự động xóa sau thời gian",
            blockScreenshotsTitle: "Chặn chụp màn hình",
            blockScreenshotsDesc: "Ngăn chụp ảnh màn hình",
            optionOff: "Tắt",
            option10s: "10 giây",
            option1m: "1 phút",
            option10m: "10 phút",
            option24h: "24 giờ",
            screenshotBlocked: "Cuộc trò chuyện này cấm chụp màn hình",
            haveAccount: "Đã có tài khoản?",
            loginLink: "Đăng nhập",
            noAccount: "Chưa có tài khoản?",
            createOneLink: "Tạo tài khoản",
            loginUsername: "Tên người dùng",
            recoveryPassword: "Mật khẩu khôi phục",
            enterChat: "Vào Chat",
            loginErrorEmpty: "Vui lòng nhập tên người dùng và mật khẩu khôi phục.",
            loginErrorInvalid: "Tên người dùng hoặc mật khẩu khôi phục không đúng.",
            recoveryModalTitle: "Tạo tài khoản thành công!",
            recoveryModalDesc: "Hãy lưu Mật khẩu khôi phục. Bạn sẽ cần nó để đăng nhập lại.",
            recoveryModalLabel: "Mật khẩu khôi phục",
            recoveryModalWarn: "Mật khẩu này chỉ hiện một lần. Hãy lưu ở nơi an toàn.",
            recoveryContinue: "Tiếp tục vào Chat",
            copied: "Đã sao chép!",
            editMsg: "Chỉnh sửa",
            deleteMsg: "Xóa",
            editModalTitle: "Chỉnh sửa tin nhắn",
            saveBtn: "Save",
            confirmDelete: "Bạn có chắc chắn muốn xóa tin nhắn này?",
            editedTag: "(đã chỉnh sửa)",
            confirmDeleteTitle: "Xóa tin nhắn",
            deleteBtn: "Xóa"
        },
        zh: {
            welcomeTitle: "欢迎使用 ZChat",
            welcomeDesc: "私密与加密即时通讯",
            enterUsername: "输入用户名：",
            usernameErr: "请输入用户名以继续。",
            createAccount: "创建新账户",
            chatTitle: "聊天",
            searchPlaceholder: "搜索对话",
            noMatch: "未找到匹配的对话",
            startConvTitle: "发起对话",
            startConvDesc: "从列表中选择一个聊天，或发起新对话。",
            newChatBtn: "新聊天",
            typeMessage: "信息",
            newChatModalTitle: "新对话",
            newChatModalDesc: "输入您想与其聊天的联系人姓名或用户名：",
            startChatBtn: "开始聊天",
            cancelBtn: "取消",
            newChatInputPlaceholder: "搜索或输入用户名...",
            infoTitle: "联系人信息",
            disappearingTitle: "阅后即焚消息",
            disappearingDesc: "定时自动删除",
            blockScreenshotsTitle: "禁止截屏",
            blockScreenshotsDesc: "防止截屏与录屏",
            optionOff: "关闭",
            option10s: "10秒",
            option1m: "1分钟",
            option10m: "1分钟",
            option10m: "10分钟",
            option24h: "24小时",
            screenshotBlocked: "此对话禁止截屏",
            haveAccount: "已有账户？",
            loginLink: "登录",
            noAccount: "还没有账户？",
            createOneLink: "创建账户",
            loginUsername: "用户名",
            recoveryPassword: "恢复密码",
            enterChat: "进入聊天",
            loginErrorEmpty: "请输入用户名和恢复密码。",
            loginErrorInvalid: "用户名或恢复密码无效。",
            recoveryModalTitle: "账户创建成功！",
            recoveryModalDesc: "请保存您的恢复密码。再次登录时需要用到。",
            recoveryModalLabel: "恢复密码",
            recoveryModalWarn: "此密码仅显示一次。请妥善保管。",
            recoveryContinue: "继续进入聊天",
            copied: "已复制！",
            editMsg: "编辑",
            deleteMsg: "删除",
            editModalTitle: "编辑消息",
            saveBtn: "保存",
            confirmDelete: "您确定要删除这条消息吗？",
            editedTag: "(已编辑)",
            confirmDeleteTitle: "删除消息",
            deleteBtn: "删除"
        },
        ru: {
            welcomeTitle: "Добро пожаловать в ZChat",
            welcomeDesc: "Зашифрованный мессенджер",
            enterUsername: "Введите имя пользователя:",
            usernameErr: "Пожалуйста, введите имя пользователя.",
            createAccount: "Создать аккаунт",
            chatTitle: "Чат",
            searchPlaceholder: "Поиск чатов",
            noMatch: "Разговоры не найдены",
            startConvTitle: "Начать разговор",
            startConvDesc: "Выберите чат из списка или нажмите новый.",
            newChatBtn: "Новый чат",
            typeMessage: "Сообщение",
            newChatModalTitle: "Новый разговор",
            newChatModalDesc: "Введите имя или имя пользователя:",
            startChatBtn: "Начать чат",
            cancelBtn: "Отмена",
            newChatInputPlaceholder: "Поиск или имя пользователя...",
            infoTitle: "Информация",
            disappearingTitle: "Исчезающие сообщения",
            disappearingDesc: "Автоудаление через время",
            blockScreenshotsTitle: "Запрет скриншотов",
            blockScreenshotsDesc: "Защита от снимков экрана",
            optionOff: "Выкл",
            option10s: "10 сек",
            option1m: "1 мин",
            option10m: "10 мин",
            option24h: "24 час",
            screenshotBlocked: "В этом чате запрещены скриншоты",
            haveAccount: "Уже есть аккаунт?",
            loginLink: "Войти",
            noAccount: "Нет аккаунта?",
            createOneLink: "Создать",
            loginUsername: "Имя пользователя",
            recoveryPassword: "Пароль восстановления",
            enterChat: "Войти в чат",
            loginErrorEmpty: "Введите имя пользователя и пароль восстановления.",
            loginErrorInvalid: "Неверное имя пользователя или пароль восстановления.",
            recoveryModalTitle: "Аккаунт создан!",
            recoveryModalDesc: "Сохраните пароль восстановления. Он понадобится для входа.",
            recoveryModalLabel: "Пароль восстановления",
            recoveryModalWarn: "Пароль показывается только один раз. Храните его в безопасном месте.",
            recoveryContinue: "Перейти в чат",
            copied: "Скопировано!",
            editMsg: "Редактировать",
            deleteMsg: "Удалить",
            editModalTitle: "Редактировать сообщение",
            saveBtn: "Сохранить",
            confirmDelete: "Вы уверены, что хотите удалить это сообщение?",
            editedTag: "(изменено)",
            confirmDeleteTitle: "Удалить сообщение",
            deleteBtn: "Удалить"
        }
    };

    function applyLanguage() {
        const lang = localStorage.getItem("zchat_lang") || "en";
        const dict = i18n[lang] || i18n.en;

        const welcomeTitle = document.getElementById("onboardingTitle") || document.querySelector("#onboarding h1");
        if (welcomeTitle) welcomeTitle.textContent = dict.welcomeTitle;
        const welcomeDesc = document.getElementById("onboardingDesc");
        if (welcomeDesc) welcomeDesc.textContent = dict.welcomeDesc;
        const labelUsername = document.getElementById("lblEnterUsername") || document.querySelector("label[for='usernameInput']");
        if (labelUsername) labelUsername.textContent = dict.enterUsername;
        if (usernameError) usernameError.textContent = dict.usernameErr;
        const submitBtn = document.getElementById("createAccountBtn") || document.querySelector("#onboardingForm button[type='submit']");
        if (submitBtn) submitBtn.textContent = dict.createAccount;

        const elHave = document.getElementById("txtHaveAccount");
        if (elHave) elHave.textContent = (dict.haveAccount || "") + " ";
        const elLoginLink = document.getElementById("switchToLoginBtn");
        if (elLoginLink) elLoginLink.textContent = dict.loginLink || "Login";
        const elNoAcc = document.getElementById("txtNoAccount");
        if (elNoAcc) elNoAcc.textContent = (dict.noAccount || "") + " ";
        const elCreateOne = document.getElementById("switchToRegisterBtn");
        if (elCreateOne) elCreateOne.textContent = dict.createOneLink || "Create one";
        const elLblLoginUser = document.getElementById("lblLoginUsername");
        if (elLblLoginUser) elLblLoginUser.textContent = dict.loginUsername || "Username";
        const elLblRecovery = document.getElementById("lblRecoveryPassword");
        if (elLblRecovery) elLblRecovery.textContent = dict.recoveryPassword || "Recovery Password";
        const elLoginBtn = document.getElementById("loginBtn");
        if (elLoginBtn) elLoginBtn.textContent = dict.enterChat || "Enter Chat";

        const elRecTitle = document.getElementById("recoveryModalTitle");
        if (elRecTitle) elRecTitle.textContent = dict.recoveryModalTitle || "Account created!";
        const elRecDesc = document.getElementById("recoveryModalDesc");
        if (elRecDesc) elRecDesc.textContent = dict.recoveryModalDesc || "";
        const elRecLabel = document.getElementById("recoveryModalLabel");
        if (elRecLabel) elRecLabel.textContent = dict.recoveryModalLabel || "Recovery Password";
        const elRecWarn = document.getElementById("recoveryModalWarn");
        if (elRecWarn) elRecWarn.textContent = dict.recoveryModalWarn || "";
        const elRecContinue = document.getElementById("recoveryContinueBtn");
        if (elRecContinue) elRecContinue.textContent = dict.recoveryContinue || "Continue to Chat";

        const chatTitle = document.querySelector("#sidebarWrap h1");
        if (chatTitle) chatTitle.textContent = dict.chatTitle;
        if (searchInput) searchInput.placeholder = dict.searchPlaceholder;
        if (messageInput) messageInput.placeholder = dict.typeMessage;

        const noMatchText = document.querySelector("#chatListEmpty p");
        if (noMatchText) noMatchText.textContent = dict.noMatch;
        const emptyTitle = document.querySelector("#emptyState h2");
        if (emptyTitle) emptyTitle.textContent = dict.startConvTitle;
        const emptyDesc = document.querySelector("#emptyState p");
        if (emptyDesc) emptyDesc.textContent = dict.startConvDesc;
        if (newChatEmptyBtn) newChatEmptyBtn.textContent = dict.newChatBtn;

        const modalTitle = document.querySelector("#newChatModal h3");
        if (modalTitle) modalTitle.textContent = dict.newChatModalTitle;
        const modalDesc = document.querySelector("#newChatModal p");
        if (modalDesc) modalDesc.textContent = dict.newChatModalDesc;
        if (newChatNameInput) newChatNameInput.placeholder = dict.newChatInputPlaceholder;
        if (cancelModalBtn) cancelModalBtn.textContent = dict.cancelBtn;
        const startChatSubmit = document.querySelector("#newChatForm button[type='submit']");
        if (startChatSubmit) startChatSubmit.textContent = dict.startChatBtn;

        const infoDrawerTitle = document.getElementById("infoDrawerTitle");
        if (infoDrawerTitle) infoDrawerTitle.textContent = dict.infoTitle;
        const disappearingTitle = document.getElementById("disappearingTitle");
        if (disappearingTitle) disappearingTitle.textContent = dict.disappearingTitle;
        const disappearingDesc = document.getElementById("disappearingDesc");
        if (disappearingDesc) disappearingDesc.textContent = dict.disappearingDesc;
        const blockScreenshotsTitle = document.getElementById("blockScreenshotsTitle");
        if (blockScreenshotsTitle) blockScreenshotsTitle.textContent = dict.blockScreenshotsTitle;
        const blockScreenshotsDesc = document.getElementById("blockScreenshotsDesc");
        if (blockScreenshotsDesc) blockScreenshotsDesc.textContent = dict.blockScreenshotsDesc;

        const optionLabels = {
            off: dict.optionOff,
            "10s": dict.option10s,
            "1m": dict.option1m,
            "10m": dict.option10m,
            "24h": dict.option24h
        };
        disappearingOptions.forEach((opt) => {
            const val = opt.getAttribute("data-value");
            const labelEl = opt.querySelector(".opt-label") || opt.querySelector("span");
            if (labelEl && optionLabels[val]) {
                labelEl.textContent = optionLabels[val];
            }
        });
        const chat = state.chats.find((c) => c.id === state.activeChatId);
        if (chat) {
            updateDisappearingUI(chat.disappearingTime || "off");
        }
    }

    window.addEventListener("storage", (e) => {
        if (e.key === "zchat_lang") {
            applyLanguage();
        }
    });

    function uid(prefix) {
        return prefix + "_" + Math.random().toString(36).slice(2, 10);
    }

    function initials(name) {
        return (name || "")
            .split(" ")
            .filter(Boolean)
            .slice(0, 2)
            .map((n) => n[0].toUpperCase())
            .join("");
    }

    function escapeHtml(str) {
        const div = document.createElement("div");
        div.textContent = str;
        return div.innerHTML;
    }

    function formatTimeShort(ts) {
        const d = new Date(ts);
        return d.toLocaleTimeString([], { hour: "numeric", minute: "2-digit" });
    }

    function formatListTimestamp(ts) {
        const now = Date.now();
        const diffMin = (now - ts) / 60000;
        const diffHr = diffMin / 60;
        const diffDay = diffHr / 24;
        const d = new Date(ts);
        if (diffMin < 1) return "now";
        if (diffHr < 1) return Math.floor(diffMin) + "m";
        if (diffDay < 1) return d.toLocaleTimeString([], { hour: "numeric", minute: "2-digit" });
        if (diffDay < 7) return d.toLocaleDateString([], { weekday: "short" });
        return d.toLocaleDateString([], { month: "short", day: "numeric" });
    }

    function formatLastSeen(ts) {
        if (!ts) return "offline";
        const diffHr = (Date.now() - ts) / 3600000;
        if (diffHr < 1) return "last seen just now";
        if (diffHr < 24) return "last seen " + Math.floor(diffHr) + "h ago";
        return "last seen " + new Date(ts).toLocaleDateString([], { month: "short", day: "numeric" });
    }

    function isSameDay(a, b) {
        const da = new Date(a), db = new Date(b);
        return da.getFullYear() === db.getFullYear() && da.getMonth() === db.getMonth() && da.getDate() === db.getDate();
    }

    function dayLabel(ts) {
        const today = Date.now();
        const yesterday = today - 86400000;
        if (isSameDay(ts, today)) return "Today";
        if (isSameDay(ts, yesterday)) return "Yesterday";
        return new Date(ts).toLocaleDateString([], { month: "long", day: "numeric" });
    }

    const AVATAR_COLORS = ["#4F46E5", "#0284C7", "#16A34A", "#D97706", "#DC2626", "#9333EA", "#2563EB", "#0D9488"];
    function colorFor(seed) {
        let hash = 0;
        for (let i = 0; i < seed.length; i++) hash = seed.charCodeAt(i) + ((hash << 5) - hash);
        return AVATAR_COLORS[Math.abs(hash) % AVATAR_COLORS.length];
    }

    /* ============ ĐỒNG BỘ AVATAR NGƯỜI CHAT CÙNG (Supabase "users") ============ */
    function applyAvatarFields(participant, row) {
        if (!participant || !row) return;
        participant.avatarType = row.avatar_type || "initials";
        participant.avatarColor = row.avatar_color || null;
        participant.avatarEmoji = row.avatar_emoji || null;
        participant.avatarUrl = row.avatar_url || null;
        participant.isVerified = !!row.is_verified;
        if (row.username && participant.name !== "Saved Messages") {
            participant.name = row.username;
        }
    }

    async function fetchAvatarForUsername(username) {
        if (!window.supabaseClient || !username) return null;
        try {
            const { data, error } = await window.supabaseClient
                .from("users")
                .select("id, username, avatar_type, avatar_color, avatar_emoji, avatar_url, is_verified")
                .ilike("username", username)
                .maybeSingle();
            if (error) {
                console.error("[ZChat] fetchAvatarForUsername error:", error);
                return null;
            }
            return data || null;
        } catch (err) {
            console.error("[ZChat] fetchAvatarForUsername exception:", err);
            return null;
        }
    }

    /* ============ CONVERSATIONS 1-1 (bảng public.conversations: user_1, user_2) ============ */
    const UUID_RE = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
    function isUuid(v) {
        return typeof v === "string" && UUID_RE.test(v);
    }

    /** Cache user id của mình + map conversationId → otherUsername */
    let myUserIdCache = localStorage.getItem("zchat_user_id") || null;
    const conversationOtherName = Object.create(null); // { [convId]: username }

    async function resolveUserIdByUsername(username) {
        if (!window.supabaseClient || !username) return null;
        try {
            const { data, error } = await window.supabaseClient
                .from("users")
                .select("id, username")
                .ilike("username", username)
                .maybeSingle();
            if (error || !data || !data.id) return null;
            return data.id;
        } catch (err) {
            console.error("[ZChat] resolveUserIdByUsername:", err);
            return null;
        }
    }

    async function getMyUserId() {
        if (myUserIdCache) return myUserIdCache;
        const me = (currentUsername || localStorage.getItem("zchat_username") || "").trim();
        if (!me) return null;
        const id = await resolveUserIdByUsername(me);
        if (id) {
            myUserIdCache = id;
            localStorage.setItem("zchat_user_id", id);
        }
        return id;
    }

    /**
     * Tạo / lấy id phòng chat 1-1 từ 2 user UUID.
     * Ưu tiên RPC get_or_create_conversation; fallback insert/select bảng conversations.
     */
    async function getOrCreateConversationId(myUserId, otherUserId) {
        if (!window.supabaseClient || !myUserId || !otherUserId) return null;
        if (myUserId === otherUserId) return null;

        // Thử RPC (nếu đã tạo function trên Supabase)
        try {
            const { data: rpcId, error: rpcErr } = await window.supabaseClient.rpc(
                "get_or_create_conversation",
                { p_user_a: myUserId, p_user_b: otherUserId }
            );
            if (!rpcErr && rpcId) return rpcId;
            if (rpcErr) console.warn("[ZChat] RPC get_or_create_conversation:", rpcErr.message || rpcErr);
        } catch (_) { /* fallback */ }

        // Fallback client: chuẩn hóa user_1 < user_2 (so text UUID)
        const u1 = myUserId < otherUserId ? myUserId : otherUserId;
        const u2 = myUserId < otherUserId ? otherUserId : myUserId;

        try {
            const { data: existing, error: selErr } = await window.supabaseClient
                .from("conversations")
                .select("id")
                .eq("user_1", u1)
                .eq("user_2", u2)
                .maybeSingle();
            if (!selErr && existing && existing.id) return existing.id;

            const { data: created, error: insErr } = await window.supabaseClient
                .from("conversations")
                .insert([{ user_1: u1, user_2: u2 }])
                .select("id")
                .maybeSingle();
            if (!insErr && created && created.id) return created.id;

            // Race: insert trùng → select lại
            if (insErr) {
                const { data: again } = await window.supabaseClient
                    .from("conversations")
                    .select("id")
                    .eq("user_1", u1)
                    .eq("user_2", u2)
                    .maybeSingle();
                if (again && again.id) return again.id;
                console.error("[ZChat] create conversation failed:", insErr);
            }
        } catch (err) {
            console.error("[ZChat] getOrCreateConversationId exception:", err);
        }
        return null;
    }

    /** Resolve username đối phương từ conversation uuid (user_1 / user_2) */
    async function resolveOtherNameFromConversationId(convId, meId) {
        if (!window.supabaseClient || !convId) return null;
        if (conversationOtherName[convId]) return conversationOtherName[convId];
        try {
            const { data: conv, error } = await window.supabaseClient
                .from("conversations")
                .select("user_1, user_2")
                .eq("id", convId)
                .maybeSingle();
            if (error || !conv) return null;
            const otherId = conv.user_1 === meId ? conv.user_2 : conv.user_1;
            if (!otherId) return null;
            const { data: user } = await window.supabaseClient
                .from("users")
                .select("username")
                .eq("id", otherId)
                .maybeSingle();
            if (user && user.username) {
                conversationOtherName[convId] = user.username;
                return user.username;
            }
        } catch (err) {
            console.error("[ZChat] resolveOtherNameFromConversationId:", err);
        }
        return null;
    }

    /* Lấy avatar cho tất cả participant hiện có trong state.chats.
       Dùng ilike (không phân biệt hoa/thường) từng tên một để tránh lệch case
       giữa tên hiển thị trong chat và username thật lưu trong bảng users. */
    async function refreshAllParticipantAvatars() {
        if (!window.supabaseClient) return;
        const names = [...new Set(
            state.chats
                .map((c) => c.participant && c.participant.name)
                .filter((n) => n && n !== "Saved Messages")
        )];
        if (!names.length) return;

        try {
            const rows = await Promise.all(names.map((n) => fetchAvatarForUsername(n)));

            let changed = false;
            state.chats.forEach((c) => {
                if (!c.participant) return;
                const idx = names.findIndex((n) => n.toLowerCase() === c.participant.name.toLowerCase());
                const row = idx > -1 ? rows[idx] : null;
                if (row) {
                    applyAvatarFields(c.participant, row);
                    changed = true;
                }
            });

            if (changed) {
                renderChatList();
                const activeChat = state.chats.find((c) => c.id === state.activeChatId);
                if (activeChat) renderActiveChat();
            }
        } catch (err) {
            console.error("[ZChat] refreshAllParticipantAvatars exception:", err);
        }
    }

    /* Nghe realtime khi user khác đổi avatar -> cập nhật ngay không cần reload */
    function subscribeToUserAvatarChanges() {
        if (!window.supabaseClient) return;

        window.supabaseClient
            .channel("zchat-users-avatar-realtime")
            .on(
                "postgres_changes",
                { event: "UPDATE", schema: "public", table: "users" },
                (payload) => {
                    try {
                        const row = payload.new;
                        if (!row || !row.username) return;

                        const chat = state.chats.find(
                            (c) => c.participant && c.participant.name && c.participant.name.toLowerCase() === row.username.toLowerCase()
                        );
                        if (!chat) return;

                        applyAvatarFields(chat.participant, row);
                        renderChatList();
                        if (state.activeChatId === chat.id) renderActiveChat();
                    } catch (err) {
                        console.error("[ZChat] Avatar realtime handler error:", err);
                    }
                }
            )
            .subscribe();
    }

    let currentUsername = localStorage.getItem("zchat_username") || "";

    const state = {
        chats: [],
        activeChatId: null,
        searchQuery: "",
    };

    // Hàm tạo hoặc đồng bộ Saved Messages theo user hiện tại
    function ensureSavedMessagesChat() {
        const user = (currentUsername || localStorage.getItem("zchat_username") || "guest").toLowerCase();
        const savedChatId = `saved_${user}`;

        let savedChat = state.chats.find((c) => c.id === savedChatId);
        if (!savedChat) {
            savedChat = {
                id: savedChatId,
                participant: { id: `u_${user}`, name: "Saved Messages", online: true, lastSeen: null },
                unread: 0,
                disappearingTime: "off",
                blockScreenshots: false,
                messages: [],
            };
            state.chats.unshift(savedChat);
        }
        if (!state.activeChatId) {
            state.activeChatId = savedChatId;
        }
        return savedChatId;
    }

    const EMOJIS = ["😀", "😂", "😍", "👍", "🙏", "🎉", "🔥", "❤️", "😢", "😮", "👏", "🙌"];

    const onboarding = document.getElementById("onboarding");
    const onboardingForm = document.getElementById("onboardingForm");
    const usernameInput = document.getElementById("usernameInput");
    const usernameError = document.getElementById("usernameError");
    const loginForm = document.getElementById("loginForm");
    const loginUsernameInput = document.getElementById("loginUsernameInput");
    const loginRecoveryInput = document.getElementById("loginRecoveryInput");
    const loginError = document.getElementById("loginError");
    const switchToLoginBtn = document.getElementById("switchToLoginBtn");
    const switchToRegisterBtn = document.getElementById("switchToRegisterBtn");
    const toggleRecoveryVisibility = document.getElementById("toggleRecoveryVisibility");
    const recoveryModal = document.getElementById("recoveryModal");
    const recoveryPasswordDisplay = document.getElementById("recoveryPasswordDisplay");
    const copyRecoveryBtn = document.getElementById("copyRecoveryBtn");
    const recoveryContinueBtn = document.getElementById("recoveryContinueBtn");

    const appShell = document.getElementById("appShell");
    const profileAvatar = document.getElementById("profileAvatar");

    const sidebarWrap = document.getElementById("sidebarWrap");
    const sidebarScrim = document.getElementById("sidebarScrim");
    const closeSidebarBtn = document.getElementById("closeSidebarBtn");
    const openSidebarBtn = document.getElementById("openSidebarBtn");
    const bottomNav = document.getElementById("bottomNav");

    const searchInput = document.getElementById("searchInput");
    const chatList = document.getElementById("chatList");
    const chatListEmpty = document.getElementById("chatListEmpty");

    const emptyState = document.getElementById("emptyState");
    const activeChatEl = document.getElementById("activeChat");
    const newChatEmptyBtn = document.getElementById("newChatEmptyBtn");
    const newChatIconBtn = document.getElementById("newChatIconBtn");

    const newChatModal = document.getElementById("newChatModal");
    const newChatForm = document.getElementById("newChatForm");
    const newChatNameInput = document.getElementById("newChatNameInput");
    const closeModalBtn = document.getElementById("closeModalBtn");
    const cancelModalBtn = document.getElementById("cancelModalBtn");

    const confirmModal = document.getElementById("confirmModal");
    const confirmModalTitle = document.getElementById("confirmModalTitle");
    const confirmModalDesc = document.getElementById("confirmModalDesc");
    const cancelConfirmBtn = document.getElementById("cancelConfirmBtn");
    const okConfirmBtn = document.getElementById("okConfirmBtn");

    const chatHeaderAvatar = document.getElementById("chatHeaderAvatar");
    const chatHeaderName = document.getElementById("chatHeaderName");
    const chatHeaderStatus = document.getElementById("chatHeaderStatus");

    const messageFeed = document.getElementById("messageFeed");
    const messageInput = document.getElementById("messageInput");
    const sendBtn = document.getElementById("sendBtn");
    const sendIcon = document.getElementById("sendIcon");
    const editBar = document.getElementById("editBar");
    const editBarPreview = document.getElementById("editBarPreview");
    const cancelEditBtn = document.getElementById("cancelEditBtn");
    const replyBar = document.getElementById("replyBar");
    const replyBarPreview = document.getElementById("replyBarPreview");
    const replyBarSender = document.getElementById("replyBarSender");
    const cancelReplyBtn = document.getElementById("cancelReplyBtn");
    const attachBtn = document.getElementById("attachBtn");
    const fileInput = document.getElementById("fileInput");
    const emojiBtn = document.getElementById("emojiBtn");
    const emojiPopover = document.getElementById("emojiPopover");

    const infoDrawer = document.getElementById("infoDrawer");
    const openInfoBtn = document.getElementById("openInfoBtn");
    const closeInfoBtn = document.getElementById("closeInfoBtn");
    const blockScreenshotsToggle = document.getElementById("blockScreenshotsToggle");

    const disappearingMenuBtn = document.getElementById("disappearingMenuBtn");
    const disappearingMenuPopup = document.getElementById("disappearingMenuPopup");
    const disappearingChevron = document.getElementById("disappearingChevron");
    const currentDisappearingLabel = document.getElementById("currentDisappearingLabel");
    const disappearingActiveIcon = document.getElementById("disappearingActiveIcon");
    const disappearingOptions = document.querySelectorAll(".disappearing-option");

    // Biến toàn cục theo dõi tin nhắn đang chỉnh sửa
    let editingMsgId = null;
    // Biến toàn cục theo dõi tin nhắn đang được reply
    let replyingMsgId = null;

    function customConfirm(title, message) {
        return new Promise((resolve) => {
            if (!confirmModal) {
                resolve(true);
                return;
            }
            if (confirmModalTitle) confirmModalTitle.textContent = title;
            if (confirmModalDesc) confirmModalDesc.textContent = message;

            confirmModal.classList.remove("hidden");
            icons();

            const handleOk = () => {
                cleanup();
                resolve(true);
            };

            const handleCancel = () => {
                cleanup();
                resolve(false);
            };

            const cleanup = () => {
                confirmModal.classList.add("hidden");
                okConfirmBtn.removeEventListener("click", handleOk);
                cancelConfirmBtn.removeEventListener("click", handleCancel);
            };

            okConfirmBtn.addEventListener("click", handleOk);
            cancelConfirmBtn.addEventListener("click", handleCancel);
        });
    }

    function icons() {
        if (window.lucide) window.lucide.createIcons();
    }

    /* ============ IMAGE LIGHTBOX (xem ảnh full-screen ngay trong trang, giống Messenger) ============ */
    function ensureImageLightbox() {
        let overlay = document.getElementById("zchatImageLightbox");
        if (overlay) return overlay;

        overlay = document.createElement("div");
        overlay.id = "zchatImageLightbox";
        overlay.className = "fixed inset-0 z-[100] hidden items-center justify-center p-4";
        overlay.style.backgroundColor = "rgba(0,0,0,0.92)";
        overlay.innerHTML = `
            <button type="button" id="zchatLightboxClose" aria-label="Close"
                class="absolute top-4 right-4 flex h-10 w-10 items-center justify-center rounded-full text-white transition-colors"
                style="background-color: rgba(255,255,255,0.12);">
                <i data-lucide="x" class="w-5 h-5"></i>
            </button>
            <img id="zchatLightboxImg" src="" alt="" class="max-h-[90vh] max-w-[92vw] rounded-lg object-contain select-none" />
        `;
        document.body.appendChild(overlay);

        const close = () => {
            overlay.classList.add("hidden");
            overlay.classList.remove("flex");
            const img = document.getElementById("zchatLightboxImg");
            if (img) img.src = "";
        };

        overlay.addEventListener("click", (e) => {
            if (e.target === overlay) close();
        });
        const closeBtn = document.getElementById("zchatLightboxClose");
        if (closeBtn) closeBtn.addEventListener("click", close);
        document.addEventListener("keydown", (e) => {
            if (e.key === "Escape" && !overlay.classList.contains("hidden")) close();
        });

        return overlay;
    }

    function openImageLightbox(url) {
        if (!url) return;
        const overlay = ensureImageLightbox();
        const img = document.getElementById("zchatLightboxImg");
        if (img) img.src = url;
        overlay.classList.remove("hidden");
        overlay.classList.add("flex");
        icons();
    }

    function applyLocalAvatarToUI() {
        const avatarType = localStorage.getItem("zchat_avatar_type") || "initials";
        const avatarColor = localStorage.getItem("zchat_avatar_color") || colorFor(currentUsername);
        const avatarEmoji = localStorage.getItem("zchat_avatar_emoji") || "😀";
        const avatarUrl = localStorage.getItem("zchat_avatar_url") || "";

        const profileAvatarMobile = document.getElementById("profileAvatarMobile");
        const targets = [profileAvatar, profileAvatarMobile].filter(Boolean);

        targets.forEach((el) => {
            if (avatarType === "photo" && avatarUrl) {
                el.style.backgroundColor = "var(--elevated2)";
                el.innerHTML = `<img src="${avatarUrl}" alt="Avatar" class="h-full w-full rounded-full object-cover" />`;
            } else if (avatarType === "emoji") {
                el.style.backgroundColor = "var(--elevated2)";
                el.textContent = avatarEmoji;
            } else {
                el.style.backgroundColor = avatarColor;
                el.style.color = "var(--avatar-text)";
                el.textContent = initials(currentUsername);
            }
        });
    }

    function syncProfileData() {
        const savedTheme = localStorage.getItem("zchat_theme") || "dark";
        document.documentElement.setAttribute("data-theme", savedTheme);
        applyLocalAvatarToUI();
    }

    /** Lấy avatar từ tài khoản trên Supabase → localStorage (đồng bộ PC / điện thoại / trình duyệt) */
    async function syncMyAvatarFromServer(username) {
        const me = (username || currentUsername || localStorage.getItem("zchat_username") || "").trim();
        if (!me || !window.supabaseClient) return;
        try {
            const { data, error } = await window.supabaseClient
                .from("users")
                .select("username, avatar_type, avatar_color, avatar_emoji, avatar_url, recovery_password")
                .ilike("username", me)
                .maybeSingle();
            if (error || !data) return;

            if (data.avatar_type || data.avatar_url || data.avatar_emoji || data.avatar_color) {
                if (data.avatar_type) localStorage.setItem("zchat_avatar_type", data.avatar_type);
                else localStorage.removeItem("zchat_avatar_type");
                if (data.avatar_color) localStorage.setItem("zchat_avatar_color", data.avatar_color);
                else localStorage.removeItem("zchat_avatar_color");
                if (data.avatar_emoji) localStorage.setItem("zchat_avatar_emoji", data.avatar_emoji);
                else localStorage.removeItem("zchat_avatar_emoji");
                if (data.avatar_url) localStorage.setItem("zchat_avatar_url", data.avatar_url);
                else localStorage.removeItem("zchat_avatar_url");
            }
            if (data.recovery_password) {
                localStorage.setItem("zchat_recovery_password", data.recovery_password);
            }
            applyLocalAvatarToUI();
        } catch (err) {
            console.error("[ZChat] syncMyAvatarFromServer error:", err);
        }
    }

    function generateRecoveryPassword() {
        const chars = "ABCDEFGHJKLMNPQRSTUVWXYZabcdefghjkmnpqrstuvwxyz23456789";
        const part = (len) => {
            let s = "";
            for (let i = 0; i < len; i++) s += chars[Math.floor(Math.random() * chars.length)];
            return s;
        };
        return "zChat-" + part(4) + "-" + part(4);
    }

    function showRegisterView() {
        onboardingForm.classList.remove("hidden");
        loginForm.classList.add("hidden");
        if (loginError) loginError.classList.add("hidden");
        usernameInput.focus();
        icons();
    }

    function showLoginView() {
        onboardingForm.classList.add("hidden");
        loginForm.classList.remove("hidden");
        if (usernameError) usernameError.classList.add("hidden");
        if (loginError) loginError.classList.add("hidden");
        loginUsernameInput.focus();
        icons();
    }

    function enterApp(username) {
        if (window.ZChatE2EE && username) {
            window.ZChatE2EE.ensureUserKeys(username).catch((e) => console.error("[E2EE] enterApp:", e));
        }

        currentUsername = username;
        localStorage.setItem("zchat_username", username);
        onboarding.classList.add("hidden");
        if (recoveryModal) recoveryModal.classList.add("hidden");
        appShell.classList.remove("hidden");
        appShell.classList.add("md:flex");

        state.chats = [];
        state.activeChatId = null;
        ensureSavedMessagesChat();

        state.searchQuery = "";
        if (searchInput) {
            searchInput.value = "";
        }

        syncProfileData();
        // Đồng bộ avatar từ tài khoản (Supabase) — mọi thiết bị / trình duyệt cùng 1 ảnh
        syncMyAvatarFromServer(username);
        applyLanguage();
        renderChatList();

        loadMessagesFromSupabase();

        renderActiveChat();
        icons();
    }

    function showRecoveryModal(password) {
        if (!recoveryModal) {
            enterApp(currentUsername);
            return;
        }
        recoveryPasswordDisplay.textContent = password;
        recoveryModal.classList.remove("hidden");
        icons();
    }

    onboardingForm.addEventListener("submit", function (e) {
        e.preventDefault();
        const val = usernameInput.value.trim();
        if (!val) {
            usernameError.classList.remove("hidden");
            usernameInput.focus();
            return;
        }
        usernameError.classList.add("hidden");

        const recovery = generateRecoveryPassword();
        localStorage.setItem("zchat_username", val);
        localStorage.setItem("zchat_recovery_password", recovery);
        currentUsername = val;
        showRecoveryModal(recovery);
    });

    if (loginForm) {
        loginForm.addEventListener("submit", function (e) {
            e.preventDefault();
            const user = (loginUsernameInput.value || "").trim();
            const pass = (loginRecoveryInput.value || "").trim();
            const lang = localStorage.getItem("zchat_lang") || "en";
            const dict = i18n[lang] || i18n.en;

            if (!user || !pass) {
                loginError.textContent = dict.loginErrorEmpty;
                loginError.classList.remove("hidden");
                return;
            }

            const storedUser = localStorage.getItem("zchat_username") || "";
            const storedPass = localStorage.getItem("zchat_recovery_password") || "";

            if (user === storedUser && pass === storedPass && storedUser) {
                loginError.classList.add("hidden");
                enterApp(user);
            } else {
                loginError.textContent = dict.loginErrorInvalid;
                loginError.classList.remove("hidden");
            }
        });
    }

    if (switchToLoginBtn) switchToLoginBtn.addEventListener("click", showLoginView);
    if (switchToRegisterBtn) switchToRegisterBtn.addEventListener("click", showRegisterView);

    if (toggleRecoveryVisibility && loginRecoveryInput) {
        toggleRecoveryVisibility.addEventListener("click", () => {
            const isPass = loginRecoveryInput.type === "password";
            loginRecoveryInput.type = isPass ? "text" : "password";
            const icon = document.getElementById("recoveryEyeIcon");
            if (icon) {
                icon.setAttribute("data-lucide", isPass ? "eye-off" : "eye");
                icons();
            }
        });
    }

    if (copyRecoveryBtn) {
        copyRecoveryBtn.addEventListener("click", async () => {
            const text = recoveryPasswordDisplay.textContent || "";
            try {
                await navigator.clipboard.writeText(text);
            } catch (_) {
                const ta = document.createElement("textarea");
                ta.value = text;
                document.body.appendChild(ta);
                ta.select();
                document.execCommand("copy");
                document.body.removeChild(ta);
            }
            const icon = document.getElementById("copyRecoveryIcon");
            if (icon) {
                icon.setAttribute("data-lucide", "check");
                icons();
                setTimeout(() => {
                    icon.setAttribute("data-lucide", "copy");
                    icons();
                }, 1500);
            }
        });
    }

    if (recoveryContinueBtn) {
        recoveryContinueBtn.addEventListener("click", () => {
            enterApp(currentUsername || localStorage.getItem("zchat_username") || "");
        });
    }

    function avatarHtml(participant, size) {
        size = size || 44;
        const isSaved = participant && (participant.id.startsWith("u_") && participant.name === "Saved Messages");

        if (isSaved) {
            const iconSize = Math.round(size * 0.48);
            return `
      <div class="relative shrink-0" style="width:${size}px;height:${size}px">
        <div class="flex h-full w-full items-center justify-center rounded-full select-none" style="background: linear-gradient(135deg, #2AABEE 0%, #229ED9 100%); color: #fff;">
          <svg width="${iconSize}" height="${iconSize}" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M6 4.5A1.5 1.5 0 0 1 7.5 3h9A1.5 1.5 0 0 1 18 4.5v15.2a.8.8 0 0 1-1.28.64L12 16.3l-4.72 4.04A.8.8 0 0 1 6 19.7V4.5Z" fill="currentColor"/>
          </svg>
        </div>
      </div>`;
        }

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

    function getFilteredSortedChats() {
        const q = state.searchQuery.trim().toLowerCase();
        return state.chats
            .filter((c) => c.participant.name.toLowerCase().includes(q))
            .slice()
            .sort((a, b) => {
                const ap = isChatPinned(a.id) ? 1 : 0;
                const bp = isChatPinned(b.id) ? 1 : 0;
                if (ap !== bp) return bp - ap;
                const at = a.messages.length ? a.messages[a.messages.length - 1].createdAt : 0;
                const bt = b.messages.length ? b.messages[b.messages.length - 1].createdAt : 0;
                return bt - at;
            });
    }

    function renderChatList() {
        const list = getFilteredSortedChats();
        chatList.innerHTML = "";

        if (list.length === 0) {
            chatListEmpty.classList.remove("hidden");
            chatListEmpty.classList.add("flex");
            icons();
            return;
        }
        chatListEmpty.classList.add("hidden");
        chatListEmpty.classList.remove("flex");

        list.forEach((chat) => {
            const last = chat.messages[chat.messages.length - 1] || null;
            const isMine = last && last.senderId === "me";
            const previewText = last ? (previewForMessage(last) || (last.attachment ? "📎 Attachment" : "")) : "No messages yet";
            const active = chat.id === state.activeChatId;
            const pinned = isChatPinned(chat.id);
            const receiptIcon =
                isMine && last
                    ? `<i data-lucide="${last.status === "read" ? "check-check" : "check"}" class="w-[14px] h-[14px] shrink-0" style="color: var(--muted);"></i>`
                    : "";
            const pinIcon = pinned
                ? `<i data-lucide="pin" class="w-[12px] h-[12px] shrink-0" style="color: var(--faint);"></i>`
                : "";

            const row = document.createElement("button");
            row.type = "button";
            row.className = `flex w-full items-center gap-3 rounded-2xl px-3 py-2.5 text-left transition-colors`;
            row.style.backgroundColor = active ? "var(--elevated)" : "transparent";
            row.onmouseover = () => { if (!active) row.style.backgroundColor = "var(--elevated)"; };
            row.onmouseout = () => { if (!active) row.style.backgroundColor = "transparent"; };

            row.dataset.chatId = chat.id;
            row.innerHTML = `
        ${avatarHtml(chat.participant)}
        <div class="min-w-0 flex-1">
          <div class="flex items-center justify-between gap-2">
            <span class="flex min-w-0 items-center gap-1.5 truncate">
              ${pinIcon}
              <span class="inline-flex min-w-0 items-center truncate text-[15px] font-bold" style="color: var(--ink);">${escapeHtml(chat.participant.name)}${getVerifiedBadge(!!chat.participant.isVerified)}</span>
            </span>
            ${last ? `<span class="shrink-0 text-xs font-medium" style="color: ${chat.unread > 0 ? "var(--ink)" : "var(--faint)"};">${formatListTimestamp(last.createdAt)}</span>` : ""}
          </div>
          <div class="mt-0.5 flex items-center justify-between gap-2">
            <span class="flex min-w-0 items-center gap-1 truncate text-[13px]" style="color: var(--muted);">
              ${receiptIcon}
              <span class="truncate font-normal">${escapeHtml(previewText)}</span>
            </span>
            ${chat.unread > 0 ? `<span class="flex h-5 min-w-[20px] items-center justify-center rounded-pill px-1.5 text-[11px] font-bold" style="background-color: var(--ink); color: var(--canvas);">${chat.unread > 99 ? "99+" : chat.unread}</span>` : ""}
          </div>
        </div>
      `;
            row.addEventListener("click", () => selectChat(chat.id));
            // Chuột phải (desktop)
            row.addEventListener("contextmenu", (e) => {
                e.preventDefault();
                openChatListMenu(chat, e.clientX, e.clientY);
            });
            // Nhấn giữ (mobile)
            let pressTimer = null;
            let longPressed = false;
            row.addEventListener("touchstart", (e) => {
                longPressed = false;
                const t = e.touches[0];
                pressTimer = setTimeout(() => {
                    longPressed = true;
                    openChatListMenu(chat, t.clientX, t.clientY);
                }, 480);
            }, { passive: true });
            row.addEventListener("touchend", (e) => {
                if (pressTimer) clearTimeout(pressTimer);
                if (longPressed) e.preventDefault();
            });
            row.addEventListener("touchmove", () => {
                if (pressTimer) clearTimeout(pressTimer);
            }, { passive: true });

            chatList.appendChild(row);
        });

        icons();
    }

    searchInput.addEventListener("input", (e) => {
        state.searchQuery = e.target.value;
        renderChatList();
    });

    function isMobileView() {
        return window.matchMedia && window.matchMedia("(max-width: 767px)").matches;
    }

    function openSidebar() {
        if (!sidebarWrap) return;
        sidebarWrap.classList.remove("-translate-x-full");
        if (sidebarScrim) sidebarScrim.classList.add("hidden");
        // Trên mobile, quay lại danh sách chat thì hiện lại bottom nav + trả lại khoảng chừa cho nó
        if (isMobileView() && bottomNav) {
            bottomNav.classList.remove("hidden");
            if (appShell) appShell.classList.add("pb-[60px]");
        }
    }
    function closeSidebar() {
        // Chỉ ẩn list trên mobile khi vào chat; desktop luôn hiện list
        if (!sidebarWrap) return;
        if (isMobileView()) {
            sidebarWrap.classList.add("-translate-x-full");
            // Ẩn bottom nav khi đang mở 1 chat trên mobile, đồng thời bỏ khoảng chừa pb-[60px] để không còn khe hở
            if (bottomNav) bottomNav.classList.add("hidden");
            if (appShell) appShell.classList.remove("pb-[60px]");
        } else {
            sidebarWrap.classList.remove("-translate-x-full");
        }
        if (sidebarScrim) sidebarScrim.classList.add("hidden");
    }
    if (openSidebarBtn) openSidebarBtn.addEventListener("click", openSidebar);
    if (closeSidebarBtn) closeSidebarBtn.addEventListener("click", closeSidebar);
    if (sidebarScrim) sidebarScrim.addEventListener("click", closeSidebar);

    // Đồng bộ lại trạng thái bottom nav khi resize qua lại giữa mobile/desktop
    window.addEventListener("resize", () => {
        if (!bottomNav) return;
        if (!isMobileView()) {
            bottomNav.classList.remove("hidden");
            if (appShell) appShell.classList.add("pb-[60px]");
        } else if (state.activeChatId && sidebarWrap && sidebarWrap.classList.contains("-translate-x-full")) {
            bottomNav.classList.add("hidden");
            if (appShell) appShell.classList.remove("pb-[60px]");
        } else {
            bottomNav.classList.remove("hidden");
            if (appShell) appShell.classList.add("pb-[60px]");
        }
    });

    function selectChat(chatId) {
        state.activeChatId = chatId;
        const chat = state.chats.find((c) => c.id === chatId);
        if (chat) chat.unread = 0;
        cancelEditMode();
        closeInfoDrawer();
        closeSidebar();
        renderChatList();
        renderActiveChat();

        loadMessagesForChat(chatId);
        markChatAsRead(chatId);
    }

    // Đánh dấu các tin nhắn của người kia trong đoạn chat này là đã xem (cho tính năng "Seen")
    async function markChatAsRead(chatId) {
        if (!window.supabaseClient || !chatId || chatId.startsWith("saved_")) return;
        const me = (currentUsername || localStorage.getItem("zchat_username") || "").trim();
        if (!me) return;
        try {
            const { error } = await window.supabaseClient
                .from("messages")
                .update({ read_at: new Date().toISOString() })
                .eq("chat_id", chatId)
                .neq("sender_username", me)
                .is("read_at", null);
            if (error) console.error("[ZChat] markChatAsRead error:", error);
        } catch (err) {
            console.error("[ZChat] markChatAsRead exception:", err);
        }
    }

    function statusIconMarkup(status) {
        if (status === "read") {
            return `<span class="text-[11px] font-medium" style="color: var(--muted);">Seen</span>`;
        }
        return "";
    }

    function renderActiveChat() {
        const chat = state.chats.find((c) => c.id === state.activeChatId);

        if (!chat) {
            emptyState.classList.remove("hidden");
            emptyState.classList.add("flex");
            activeChatEl.classList.add("hidden");
            activeChatEl.classList.remove("flex");
            return;
        }

        emptyState.classList.add("hidden");
        emptyState.classList.remove("flex");
        activeChatEl.classList.remove("hidden");
        activeChatEl.classList.add("flex");

        chatHeaderAvatar.innerHTML = avatarHtml(chat.participant, 40);
        const verifiedBadge = getVerifiedBadge(!!chat.participant.isVerified);
        chatHeaderName.innerHTML = escapeHtml(chat.participant.name) + verifiedBadge;
        chatHeaderStatus.textContent = "";

        document.getElementById("infoAvatar").innerHTML = avatarHtml(chat.participant, 64);
        const infoNameEl = document.getElementById("infoName");
        if (infoNameEl) infoNameEl.innerHTML = escapeHtml(chat.participant.name) + verifiedBadge;
        document.getElementById("infoUsername").textContent = "@" + chat.participant.name.toLowerCase().replace(/\s+/g, "");

        updateDisappearingUI(chat.disappearingTime || "off");
        blockScreenshotsToggle.checked = !!chat.blockScreenshots;

        applyScreenshotProtection(chat.blockScreenshots);

        renderMessages(chat);
        icons();
    }

    /* ============ ĐIỀU KHIỂN EDIT MODE BẰNG EDIT BAR ============ */
    function startEditMessage(msgId, currentText) {
        cancelReplyMode();
        editingMsgId = msgId;

        messageInput.value = currentText;
        messageInput.focus();
        messageInput.style.height = "auto";
        messageInput.style.height = Math.min(messageInput.scrollHeight, 160) + "px";

        if (editBar) {
            editBarPreview.textContent = currentText;
            editBar.classList.remove("hidden");
        }

        if (sendIcon) {
            sendIcon.setAttribute("data-lucide", "check");
            icons();
        }

        updateSendBtnState();
    }

    function cancelEditMode() {
        editingMsgId = null;
        messageInput.value = "";
        messageInput.style.height = "auto";

        if (editBar) {
            editBar.classList.add("hidden");
        }

        if (sendIcon) {
            sendIcon.setAttribute("data-lucide", "arrow-up");
            icons();
        }

        updateSendBtnState();
    }

    if (cancelEditBtn) {
        cancelEditBtn.addEventListener("click", cancelEditMode);
    }

    /* ============ REPLY (TRẢ LỜI TIN NHẮN) ============ */
    const REPLY_PREFIX_RE = /^\[REPLY:([^:]+):([^:]*):([^\]]*)\]([\s\S]*)$/;

    function buildReplyPrefix(replyId, replySender, replyPreview) {
        return `[REPLY:${replyId}:${encodeURIComponent(replySender)}:${encodeURIComponent(replyPreview)}]`;
    }

    // Tách phần "trả lời ai, preview gì" ra khỏi nội dung thật của tin nhắn
    function parseReply(text) {
        if (!text) return { replyId: null, replySender: "", replyPreview: "", body: text || "" };
        const match = text.match(REPLY_PREFIX_RE);
        if (!match) return { replyId: null, replySender: "", replyPreview: "", body: text };
        return {
            replyId: match[1],
            replySender: decodeURIComponent(match[2] || ""),
            replyPreview: decodeURIComponent(match[3] || ""),
            body: match[4] || "",
        };
    }

    function previewForMessage(msg) {
        if (!msg) return "";
        const { body } = parseReply(msg.text || "");
        if (body.startsWith("[IMAGE]:")) return "📷 Photo";
        if (msg.attachment) return `📎 ${msg.attachment}`;
        return body;
    }

    function startReplyMessage(msgId) {
        cancelEditMode();
        const chat = state.chats.find((c) => c.id === state.activeChatId);
        if (!chat) return;
        const msg = chat.messages.find((m) => m.id === msgId);
        if (!msg) return;

        replyingMsgId = msgId;
        const senderLabel = msg.senderId === "me" ? "yourself" : chat.participant.name;

        if (replyBarSender) replyBarSender.textContent = senderLabel;
        if (replyBarPreview) replyBarPreview.textContent = previewForMessage(msg) || "…";
        if (replyBar) replyBar.classList.remove("hidden");

        messageInput.focus();
        updateSendBtnState();
    }

    function cancelReplyMode() {
        replyingMsgId = null;
        if (replyBar) replyBar.classList.add("hidden");
    }

    if (cancelReplyBtn) {
        cancelReplyBtn.addEventListener("click", cancelReplyMode);
    }

    // Cuộn tới + highlight tin nhắn gốc khi bấm vào khối trích dẫn reply
    function scrollToMessage(msgId) {
        const el = document.getElementById(`msg-${msgId}`);
        if (!el) return;
        el.scrollIntoView({ behavior: "smooth", block: "center" });
        el.classList.add("msg-highlight-flash");
        setTimeout(() => el.classList.remove("msg-highlight-flash"), 1200);
    }

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

    function renderMessages(chat) {
        const msgs = chat.messages;
        messageFeed.innerHTML = "";

        if (msgs.length === 0) {
            messageFeed.innerHTML = `
        <div class="flex flex-1 h-full flex-col items-center justify-center gap-2 px-6 text-center">
          <p class="text-sm" style="color: var(--muted);">No messages yet.</p>
          <p class="text-sm" style="color: var(--faint);">Say hi to ${escapeHtml(chat.participant.name)} 👋</p>
        </div>`;
            return;
        }

        msgs.forEach((msg, i) => {
            const prev = msgs[i - 1];
            const next = msgs[i + 1];
            const newDay = !prev || !isSameDay(prev.createdAt, msg.createdAt);
            const showTail = !next || next.senderId !== msg.senderId || !isSameDay(next.createdAt, msg.createdAt);
            const isMine = msg.senderId === "me";

            if (newDay) {
                const sep = document.createElement("div");
                sep.className = "my-4 flex items-center justify-center";
                sep.innerHTML = `<span class="rounded-pill px-3 py-1 text-[11px] font-medium" style="background-color: var(--elevated); color: var(--muted);">${dayLabel(msg.createdAt)}</span>`;
                messageFeed.appendChild(sep);
            }

            const wrap = document.createElement("div");
            wrap.id = `msg-${msg.id}`;
            wrap.className = (showTail ? "mb-3 " : "mb-1 ") + "group relative flex w-full " + (isMine ? "justify-end" : "justify-start");

            let attachmentHtml = "";
            if (msg.attachment) {
                attachmentHtml = `
          <div class="flex items-center gap-3 rounded-bubble px-4 py-3 mb-1.5" style="background-color: var(--elevated);">
            <i data-lucide="file-text" class="w-5 h-5 shrink-0" style="color: var(--muted);"></i>
            <div class="min-w-0">
              <p class="truncate text-sm font-medium" style="color: var(--ink);">${escapeHtml(msg.attachment)}</p>
            </div>
          </div>`;
            }

            const bubbleStyle = isMine
                ? "background-color: var(--ink); color: var(--canvas);"
                : "background-color: var(--elevated); color: var(--ink);";

            // Tách phần "đang trả lời tin nhắn nào" ra khỏi nội dung thật
            const { replyId, replySender, replyPreview, body } = parseReply(msg.text || "");

            let contentHtml = "";
            let isImageMsg = false;
            if (body) {
                if (body.startsWith("[IMAGE]:")) {
                    isImageMsg = true;
                    const imgUrl = body.replace("[IMAGE]:", "");
                    contentHtml = `<img src="${imgUrl}" class="msg-image block rounded-2xl max-w-[260px] max-h-[300px] object-cover cursor-pointer hover:opacity-95 transition-opacity" data-full-src="${imgUrl}" />`;
                } else {
                    contentHtml = escapeHtml(body) + (msg.isEdited ? ` <span class="text-[10px] opacity-60 font-normal">(edited)</span>` : "");
                }
            }

            const replyQuoteHtml = replyId
                ? `<div class="msg-reply-quote flex flex-col gap-0.5 mb-1" data-reply-target="${replyId}">
                     <span class="text-[11px] font-semibold" style="color: var(--ink); opacity: .85;">${escapeHtml(replySender)}</span>
                     <span class="text-[11px] truncate opacity-70" style="color: var(--ink);">${escapeHtml(replyPreview)}</span>
                   </div>`
                : "";

            // Nút menu 3 chấm — luôn hiện (mờ), rõ hơn khi hover / touch
            const menuBtnHtml = `
                <button type="button" class="btn-msg-menu absolute top-1/2 -translate-y-1/2 ${isMine ? "-left-9" : "-right-9"} flex h-7 w-7 items-center justify-center rounded-full opacity-50 hover:opacity-100 hover:bg-elevated2 transition-all z-10" style="color: var(--muted);" title="More">
                    <i data-lucide="more-vertical" class="w-4 h-4"></i>
                </button>`;

            const bubbleInner = isImageMsg
                ? `${replyQuoteHtml}${contentHtml}`
                : `<div class="rounded-bubble px-4 py-2.5 text-[14.5px] leading-relaxed font-medium ${showTail ? (isMine ? "rounded-br-md" : "rounded-bl-md") : ""}" style="${bubbleStyle}">${replyQuoteHtml}${contentHtml}</div>`;

            const bubble = body ? `<div class="msg-bubble-pressable">${bubbleInner}</div>` : "";

            const disappearingOn = chat.disappearingTime && chat.disappearingTime !== "off";
            const timerIcon = disappearingOn
                ? `<i data-lucide="timer" class="w-[11px] h-[11px] shrink-0" style="color: var(--faint); opacity: 0.85;" title="Disappearing message"></i>`
                : "";

            const seenHtml = isMine ? statusIconMarkup(msg.status) : "";
            const metaInner = `${timerIcon}${seenHtml}`;
            const hasMetaContent = !!timerIcon || !!seenHtml;

            const meta = (showTail && hasMetaContent)
                ? `<div class="flex items-center gap-1 px-1 text-[11px]" style="color: var(--faint);">${metaInner}</div>`
                : (disappearingOn
                    ? `<div class="flex items-center gap-1 px-1 text-[11px]" style="color: var(--faint);">${timerIcon}</div>`
                    : "");

            wrap.innerHTML = `
        <div class="relative flex max-w-[72%] flex-col gap-1.5 ${isMine ? "items-end" : "items-start"}">
          ${menuBtnHtml}
          ${attachmentHtml}
          ${bubble}
          ${meta}
        </div>`;

            const btnMenu = wrap.querySelector(".btn-msg-menu");
            if (btnMenu) {
                btnMenu.addEventListener("click", (e) => {
                    e.stopPropagation();
                    const rect = btnMenu.getBoundingClientRect();
                    // Neo giữa nút 3 chấm — ổn định hơn trên mobile
                    openMessageActionMenu(
                        msg, chat, isMine,
                        rect.left + rect.width / 2,
                        rect.bottom + 6
                    );
                });
            }

            const imgEl = wrap.querySelector(".msg-image");
            if (imgEl) {
                imgEl.addEventListener("click", () => openImageLightbox(imgEl.dataset.fullSrc));
            }

            const quoteEl = wrap.querySelector(".msg-reply-quote");
            if (quoteEl) {
                quoteEl.addEventListener("click", (e) => {
                    e.stopPropagation();
                    scrollToMessage(quoteEl.dataset.replyTarget);
                });
            }

            // Nhấn giữ (long-press) trên mobile để mở menu ngay tại điểm chạm
            const pressable = wrap.querySelector(".msg-bubble-pressable");
            if (pressable) {
                let pressTimer = null;
                let pressStartX = 0, pressStartY = 0, pressMoved = false;

                const clearPress = () => {
                    if (pressTimer) clearTimeout(pressTimer);
                    pressTimer = null;
                    pressable.classList.remove("is-pressing");
                };

                pressable.addEventListener("touchstart", (e) => {
                    if (imgEl && e.target.closest(".msg-reply-quote")) return;
                    const touch = e.touches[0];
                    pressStartX = touch.clientX;
                    pressStartY = touch.clientY;
                    pressMoved = false;
                    pressTimer = setTimeout(() => {
                        pressable.classList.add("is-pressing");
                        if (navigator.vibrate) { try { navigator.vibrate(12); } catch (_) {} }
                        // Dùng tọa độ đã lưu — tránh touch object bị reset trên mobile
                        openMessageActionMenu(msg, chat, isMine, pressStartX, pressStartY);
                        clearPress();
                    }, 480);
                }, { passive: true });

                pressable.addEventListener("touchmove", (e) => {
                    const touch = e.touches[0];
                    if (Math.abs(touch.clientX - pressStartX) > 10 || Math.abs(touch.clientY - pressStartY) > 10) {
                        pressMoved = true;
                        clearPress();
                    }
                }, { passive: true });

                pressable.addEventListener("touchend", clearPress);
                pressable.addEventListener("touchcancel", clearPress);
            }

            messageFeed.appendChild(wrap);
        });

        messageFeed.scrollTop = messageFeed.scrollHeight;
        icons();
    }

    function renderTypingIndicator(chat) {
        const wrap = document.createElement("div");
        wrap.id = "typingIndicator";
        wrap.className = "flex w-full justify-start mb-3";
        wrap.innerHTML = `
      <div class="rounded-bubble rounded-bl-md px-4 py-3 flex items-center gap-1" style="background-color: var(--elevated);">
        <span class="typing-dot w-1.5 h-1.5 rounded-full inline-block" style="background-color: var(--faint);"></span>
        <span class="typing-dot w-1.5 h-1.5 rounded-full inline-block" style="background-color: var(--faint);"></span>
        <span class="typing-dot w-1.5 h-1.5 rounded-full inline-block" style="background-color: var(--faint);"></span>
      </div>`;
        messageFeed.appendChild(wrap);
        messageFeed.scrollTop = messageFeed.scrollHeight;
    }

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

    function openInfoDrawer() {
        infoDrawer.classList.remove("hidden");
        icons();
        const preview = document.getElementById("safetyNumberPreview");
        const chat = state.chats.find((c) => c.id === state.activeChatId);
        if (preview) {
            preview.textContent = (!chat || chat.participant.name === "Saved Messages")
                ? "Not available" : "Tap to verify encryption";
        }
    }
    function closeInfoDrawer() {
        infoDrawer.classList.add("hidden");
        closeDisappearingMenu();
    }

    openInfoBtn.addEventListener("click", openInfoDrawer);
    closeInfoBtn.addEventListener("click", closeInfoDrawer);

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
        if (chat.participant.name === "Saved Messages") return;

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

    function closeDisappearingMenu() {
        disappearingMenuPopup.classList.add("hidden");
        disappearingChevron.style.transform = "rotate(0deg)";
    }

    disappearingMenuBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        const isOpen = !disappearingMenuPopup.classList.contains("hidden");
        if (isOpen) {
            closeDisappearingMenu();
        } else {
            disappearingMenuPopup.classList.remove("hidden");
            disappearingChevron.style.transform = "rotate(180deg)";
            icons();
        }
    });

    document.addEventListener("click", (e) => {
        const container = document.getElementById("disappearingDropdownContainer");
        if (container && !container.contains(e.target)) {
            closeDisappearingMenu();
        }
    });

    disappearingOptions.forEach((option) => {
        option.addEventListener("click", () => {
            const val = option.getAttribute("data-value");
            updateDisappearingUI(val);

            const chat = state.chats.find((c) => c.id === state.activeChatId);
            if (chat) {
                chat.disappearingTime = val;
                if (state.activeChatId === chat.id) renderMessages(chat);
            }

            closeDisappearingMenu();
        });
    });

    function updateDisappearingUI(value) {
        const lang = localStorage.getItem("zchat_lang") || "en";
        const dict = i18n[lang] || i18n.en;
        const labels = {
            off: dict.optionOff,
            "10s": dict.option10s,
            "1m": dict.option1m,
            "10m": dict.option10m,
            "24h": dict.option24h
        };
        currentDisappearingLabel.textContent = labels[value] || dict.optionOff;

        if (value && value !== "off") {
            disappearingMenuBtn.style.backgroundColor = "rgba(27, 152, 224, 0.15)";
            disappearingMenuBtn.style.borderColor = "#1b98e0";
            disappearingMenuBtn.style.color = "#1b98e0";
            disappearingActiveIcon.style.display = "inline-block";
        } else {
            disappearingMenuBtn.style.backgroundColor = "var(--elevated)";
            disappearingMenuBtn.style.borderColor = "var(--transparent-border)";
            disappearingMenuBtn.style.color = "var(--ink)";
            disappearingActiveIcon.style.display = "none";
        }

        disappearingOptions.forEach((opt) => {
            const check = opt.querySelector(".check-icon");
            const isSelected = opt.getAttribute("data-value") === value;
            if (check) check.style.opacity = isSelected ? "1" : "0";
            opt.classList.toggle("is-selected", isSelected);
        });
    }

    blockScreenshotsToggle.addEventListener("change", (e) => {
        const chat = state.chats.find((c) => c.id === state.activeChatId);
        if (chat) {
            chat.blockScreenshots = e.target.checked;
            applyScreenshotProtection(chat.blockScreenshots);
        }
    });

    const clearConversationBtn = document.getElementById("clearConversationBtn");
    if (clearConversationBtn) {
        clearConversationBtn.addEventListener("click", async () => {
            if (!state.activeChatId) return;
            await clearConversation(state.activeChatId);
            closeInfoDrawer();
        });
    }

    function updateSendBtnState() {
        sendBtn.disabled = messageInput.value.trim().length === 0;
    }

    messageInput.addEventListener("input", () => {
        messageInput.style.height = "auto";
        messageInput.style.height = Math.min(messageInput.scrollHeight, 160) + "px";
        updateSendBtnState();
    });

    messageInput.addEventListener("keydown", (e) => {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            handleSend();
        }
    });

    sendBtn.addEventListener("click", handleSend);

    async function handleSend() {
        const text = messageInput.value.trim();
        if (!text) return;
        const chat = state.chats.find((c) => c.id === state.activeChatId);
        if (!chat) return;

        // Trường hợp đang chỉnh sửa tin nhắn cũ (Edit Mode)
        if (editingMsgId) {
            const msg = chat.messages.find((m) => m.id === editingMsgId);
            if (msg) {
                // Giữ nguyên phần "đang trả lời ai" (nếu có) khi sửa nội dung
                const { replyId, replySender, replyPreview } = parseReply(msg.text || "");
                const newText = replyId ? buildReplyPrefix(replyId, replySender, replyPreview) + text : text;

                msg.text = newText;
                msg.isEdited = true;
                renderMessages(chat);
                renderChatList();

                if (window.supabaseClient) {
                    try {
                        await window.supabaseClient
                            .from("messages")
                            .update({ content: newText })
                            .eq("id", editingMsgId);
                    } catch (err) {
                        console.error("[ZChat] Update Supabase error:", err);
                    }
                }
            }
            cancelEditMode();
            return;
        }

        // Trường hợp gửi tin nhắn mới
        let finalText = text;
        if (replyingMsgId) {
            const repliedMsg = chat.messages.find((m) => m.id === replyingMsgId);
            if (repliedMsg) {
                const me = (currentUsername || localStorage.getItem("zchat_username") || "").trim();
                const senderName = repliedMsg.senderId === "me" ? me : chat.participant.name;
                finalText = buildReplyPrefix(replyingMsgId, senderName, previewForMessage(repliedMsg)) + text;
            }
        }
        cancelReplyMode();

        // status "delivered" ngay — tránh setTimeout renderMessages 2 lần (mọi bubble bị rebuild)
        const msg = { id: uid("m"), senderId: "me", text: finalText, createdAt: Date.now(), status: "delivered" };
        chat.messages.push(msg);
        postMessageToSupabase(msg, chat.id);
        scheduleDisappearing(chat, msg);

        messageInput.value = "";
        messageInput.style.height = "auto";
        updateSendBtnState();

        renderMessages(chat);
        renderChatList();
    }

    attachBtn.addEventListener("click", () => fileInput.click());

    function renderEmojiPopover() {
        emojiPopover.innerHTML = EMOJIS.map(
            (e) => `<button type="button" class="emoji-opt text-xl leading-none p-1.5 rounded-lg hover:bg-elevated2 transition-colors">${e}</button>`
        ).join("");
        emojiPopover.querySelectorAll(".emoji-opt").forEach((btn) => {
            btn.addEventListener("click", () => {
                messageInput.value += btn.textContent;
                messageInput.dispatchEvent(new Event("input"));
                messageInput.focus();
                emojiPopover.classList.add("hidden");
            });
        });
    }
    renderEmojiPopover();

    emojiBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        emojiPopover.classList.toggle("hidden");
    });
    document.addEventListener("click", (e) => {
        if (!emojiPopover.contains(e.target) && e.target !== emojiBtn) {
            emojiPopover.classList.add("hidden");
        }
    });

    function openNewChatModal() {
        newChatModal.classList.remove("hidden");
        newChatNameInput.value = "";
        const errEl = document.getElementById("newChatError");
        if (errEl) errEl.classList.add("hidden");
        newChatNameInput.focus();
    }

    function closeNewChatModal() {
        newChatModal.classList.add("hidden");
        const errEl = document.getElementById("newChatError");
        if (errEl) errEl.classList.add("hidden");
    }

    newChatEmptyBtn.addEventListener("click", openNewChatModal);
    newChatIconBtn.addEventListener("click", openNewChatModal);
    closeModalBtn.addEventListener("click", closeModalBtn ? closeNewChatModal : () => {});
    cancelModalBtn.addEventListener("click", closeNewChatModal);

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

    /* ============ SUPABASE MESSAGES ============ */
    function makeUuid() {
        if (typeof crypto !== "undefined" && crypto.randomUUID) return crypto.randomUUID();
        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
            const r = (Math.random() * 16) | 0;
            const v = c === "x" ? r : (r & 0x3) | 0x8;
            return v.toString(16);
        });
    }

    async function loadMessagesFromSupabase() {
        if (!window.supabaseClient) {
            console.warn("[ZChat] supabaseClient missing");
            return;
        }
        try {
            const me = currentUsername || localStorage.getItem("zchat_username") || "";
            const meLower = me.toLowerCase();
            const mySavedChatId = `saved_${meLower}`;
            if (!meLower) return;

            const PREVIEW_PER_CHAT = 5;
            const myId = await getMyUserId();

            // 1) Danh sách conversation UUID của mình
            let convRows = [];
            if (myId) {
                try {
                    const { data: convs, error: convErr } = await window.supabaseClient
                        .from("conversations")
                        .select("id, user_1, user_2")
                        .or(`user_1.eq.${myId},user_2.eq.${myId}`);
                    if (convErr) {
                        console.warn("[ZChat] conversations:", convErr.message || convErr);
                    } else {
                        convRows = convs || [];
                    }
                } catch (e) {
                    console.warn("[ZChat] load conversations:", e);
                }
            }
            const convIds = convRows.map((c) => c.id).filter(Boolean);

            // Resolve username đối phương từ user_1 / user_2 (tránh hiện "Chat User")
            const otherIds = [];
            const convOtherId = Object.create(null); // convId → otherUserId
            for (const c of convRows) {
                if (!c || !c.id || !myId) continue;
                const otherId = String(c.user_1) === String(myId) ? c.user_2 : c.user_1;
                if (otherId) {
                    convOtherId[c.id] = otherId;
                    otherIds.push(otherId);
                }
            }
            const uniqueOtherIds = [...new Set(otherIds.filter(Boolean))];
            if (uniqueOtherIds.length && window.supabaseClient) {
                try {
                    const { data: userRows } = await window.supabaseClient
                        .from("users")
                        .select("id, username, avatar_type, avatar_color, avatar_emoji, avatar_url, is_verified")
                        .in("id", uniqueOtherIds);
                    const byId = Object.create(null);
                    (userRows || []).forEach((u) => {
                        if (u && u.id) byId[u.id] = u;
                    });
                    for (const c of convRows) {
                        if (!c || !c.id) continue;
                        const oid = convOtherId[c.id];
                        const u = oid ? byId[oid] : null;
                        if (u && u.username) {
                            conversationOtherName[c.id] = u.username;
                        }
                    }
                    // Gắn luôn vào state nếu chat đã tồn tại
                    state.chats.forEach((chat) => {
                        if (!isUuid(chat.id)) return;
                        const uname = conversationOtherName[chat.id];
                        if (uname && (chat.participant.name === "Chat User" || !chat.participant.name)) {
                            chat.participant.name = uname;
                            const oid = convOtherId[chat.id];
                            const u = oid ? byId[oid] : null;
                            if (u) applyAvatarFields(chat.participant, u);
                            if (oid) chat.participant.userId = oid;
                        }
                    });
                } catch (e) {
                    console.warn("[ZChat] resolve partner names:", e);
                }
            }

            // Đảm bảo có slot chat trong state (kể cả chưa có tin)
            for (const c of convRows) {
                if (!c || !c.id) continue;
                const otherId = convOtherId[c.id] || (c.user_1 === myId ? c.user_2 : c.user_1);
                const partnerName = conversationOtherName[c.id] || null;
                let chat = state.chats.find((x) => x.id === c.id);
                if (!chat) {
                    chat = {
                        id: c.id,
                        participant: {
                            id: otherId || uid("u"),
                            name: partnerName || "Chat User",
                            userId: otherId || null,
                            online: true,
                            lastSeen: null,
                        },
                        unread: 0,
                        disappearingTime: "off",
                        blockScreenshots: false,
                        messages: [],
                        _msgsFullyLoaded: false,
                    };
                    state.chats.push(chat);
                } else {
                    if (partnerName && (chat.participant.name === "Chat User" || !chat.participant.name)) {
                        chat.participant.name = partnerName;
                    }
                    if (otherId) chat.participant.userId = otherId;
                }
            }

            // 2) Tập chat_id cần preview: conversations + saved + (legacy nếu còn)
            const chatIdsToPreview = [...new Set([mySavedChatId, ...convIds])];

            // 3) Mỗi chat: lấy 5 tin mới nhất (có content) — chạy song song theo lô
            const fetchPreview = async (chatId) => {
                const { data, error } = await window.supabaseClient
                    .from("messages")
                    .select("id, chat_id, sender_username, content, created_at, read_at")
                    .eq("chat_id", chatId)
                    .order("created_at", { ascending: false })
                    .limit(PREVIEW_PER_CHAT);
                if (error) {
                    console.warn("[ZChat] preview", chatId, error.message || error);
                    return [];
                }
                return data || [];
            };

            const BATCH = 6;
            const allPreviewRows = [];
            for (let i = 0; i < chatIdsToPreview.length; i += BATCH) {
                const slice = chatIdsToPreview.slice(i, i + BATCH);
                const parts = await Promise.all(slice.map(fetchPreview));
                parts.forEach((rows) => allPreviewRows.push(...rows));
            }

            // Legacy: nếu chưa có conv, vẫn lấy vài tin chat_* gần nhất để dựng list
            if (!convIds.length) {
                const { data: legacyRows } = await window.supabaseClient
                    .from("messages")
                    .select("id, chat_id, sender_username, content, created_at, read_at")
                    .or(`chat_id.ilike.chat_${meLower}_%,chat_id.ilike.chat_%_${meLower}`)
                    .order("created_at", { ascending: false })
                    .limit(40);
                (legacyRows || []).forEach((m) => allPreviewRows.push(m));
            }

            const pendingNameResolves = [];
            // Giữ tối đa 5 tin / chat (đã limit ở query; legacy gộp thì cắt lại)
            const perChatCount = Object.create(null);

            // Mới nhất trước
            allPreviewRows.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));

            for (const m of allPreviewRows) {
                const chatId = m.chat_id;
                if (!chatId) continue;
                if (!isChatIdMine(chatId, meLower) && !(isUuid(chatId) && convIds.includes(chatId))) {
                    continue;
                }
                perChatCount[chatId] = (perChatCount[chatId] || 0) + 1;
                if (perChatCount[chatId] > PREVIEW_PER_CHAT) continue;

                let chat = state.chats.find((c) => c.id === chatId);
                if (!chat) {
                    let otherName = resolveOtherNameFromChatId(chatId, me, m.sender_username);
                    if (isUuid(chatId) && (otherName === "Chat User" || !otherName)) {
                        otherName = conversationOtherName[chatId] || otherName;
                        pendingNameResolves.push({ chatId, meId: myId });
                    }
                    chat = {
                        id: chatId,
                        participant: {
                            id: uid("u"),
                            name: otherName,
                            online: true,
                            lastSeen: null,
                        },
                        unread: 0,
                        disappearingTime: "off",
                        blockScreenshots: false,
                        messages: [],
                        _msgsFullyLoaded: false,
                    };
                    state.chats.push(chat);
                }

                if (!chat.messages.some((existing) => existing.id === m.id)) {
                    chat.messages.push({
                        id: m.id,
                        senderId: m.sender_username === me ? "me" : m.sender_username || "other",
                        text: m.content || "",
                        createdAt: new Date(m.created_at).getTime(),
                        status: m.read_at ? "read" : "delivered",
                    });
                }
                // Cập nhật tên nếu đang placeholder
                if (
                    (chat.participant.name === "Chat User" || !chat.participant.name) &&
                    m.sender_username &&
                    m.sender_username.toLowerCase() !== meLower
                ) {
                    chat.participant.name = m.sender_username;
                    conversationOtherName[chatId] = m.sender_username;
                }
            }

            await Promise.all(
                pendingNameResolves.map(async ({ chatId, meId }) => {
                    const name = await resolveOtherNameFromConversationId(chatId, meId);
                    if (!name) return;
                    const chat = state.chats.find((c) => c.id === chatId);
                    if (chat && (chat.participant.name === "Chat User" || !chat.participant.name)) {
                        chat.participant.name = name;
                    }
                })
            );

            // Bổ sung: nếu còn "Chat User" mà có tin từ người khác → lấy sender_username
            state.chats.forEach((chat) => {
                if (chat.participant.name !== "Chat User" && chat.participant.name) return;
                if (String(chat.id).startsWith("saved_")) {
                    chat.participant.name = "Saved Messages";
                    return;
                }
                const fromMsg = chat.messages.find(
                    (m) => m.senderId && m.senderId !== "me" && m.senderId !== me
                );
                if (fromMsg && fromMsg.senderId) {
                    chat.participant.name = fromMsg.senderId;
                    conversationOtherName[chat.id] = fromMsg.senderId;
                } else if (conversationOtherName[chat.id]) {
                    chat.participant.name = conversationOtherName[chat.id];
                }
            });

            state.chats.forEach((c) => {
                c.messages.sort((a, b) => a.createdAt - b.createdAt);
            });

            if (window.ZChatE2EE) {
                try {
                    await window.ZChatE2EE.ensureUserKeys(me);
                    const priv = window.ZChatE2EE.getLocalPrivateKey();
                    if (priv) {
                        const allMsgs = [];
                        state.chats.forEach((c) => c.messages.forEach((m) => allMsgs.push(m)));
                        await window.ZChatE2EE.decryptMessagesBatch(allMsgs, priv);
                    }
                } catch (e2eeErr) {
                    console.error("[E2EE] ensure keys / preview decrypt:", e2eeErr);
                }
            }

            renderChatList();
            const activeChat = state.chats.find((c) => c.id === state.activeChatId);
            if (activeChat) {
                // Mở sẵn 1 chat → load full
                await loadMessagesForChat(activeChat.id);
            }

            refreshAllParticipantAvatars();
        } catch (err) {
            console.error("[ZChat] loadMessagesFromSupabase exception:", err);
        }
    }

    async function loadMessagesForChat(chatId) {
        const chat = state.chats.find((c) => c.id === chatId);
        if (!chat || !window.supabaseClient || !chatId) {
            if (chat && state.activeChatId === chatId) renderMessages(chat);
            return;
        }
        if (chat._msgsFullyLoaded) {
            if (state.activeChatId === chatId) renderMessages(chat);
            return;
        }
        try {
            const me = currentUsername || localStorage.getItem("zchat_username") || "";
            // Load toàn bộ tin của chat (phân trang lớn; thực tế 1-1 ít khi > vài nghìn)
            const PAGE = 500;
            let offset = 0;
            let allRows = [];
            for (;;) {
                const { data, error } = await window.supabaseClient
                    .from("messages")
                    .select("id, chat_id, sender_username, content, created_at, read_at")
                    .eq("chat_id", chatId)
                    .order("created_at", { ascending: false })
                    .range(offset, offset + PAGE - 1);
                if (error) {
                    console.error("[ZChat] loadMessagesForChat:", error);
                    break;
                }
                const batch = data || [];
                allRows = allRows.concat(batch);
                if (batch.length < PAGE) break;
                offset += PAGE;
                // an toàn: tối đa ~5000 tin / chat
                if (offset >= 5000) break;
            }

            const rows = allRows.slice().reverse();
            const byId = new Map();
            chat.messages.forEach((m) => {
                if (!m._metaOnly) byId.set(m.id, m);
            });
            rows.forEach((m) => {
                if (byId.has(m.id)) return;
                byId.set(m.id, {
                    id: m.id,
                    senderId: m.sender_username === me ? "me" : m.sender_username || "other",
                    text: m.content || "",
                    createdAt: new Date(m.created_at).getTime(),
                    status: m.read_at ? "read" : "delivered",
                });
            });
            chat.messages = Array.from(byId.values()).sort((a, b) => a.createdAt - b.createdAt);
            chat._msgsFullyLoaded = true;

            if (window.ZChatE2EE) {
                try {
                    await window.ZChatE2EE.ensureUserKeys(me);
                    const priv = window.ZChatE2EE.getLocalPrivateKey();
                    if (priv) await window.ZChatE2EE.decryptMessagesBatch(chat.messages, priv);
                } catch (e2eeErr) {
                    console.error("[E2EE] chat decrypt:", e2eeErr);
                }
            }
            if (state.activeChatId === chatId) renderMessages(chat);
            renderChatList();
        } catch (err) {
            console.error("[ZChat] loadMessagesForChat exception:", err);
            if (state.activeChatId === chatId) renderMessages(chat);
        }
    }

    async function postMessageToSupabase(msgObj, chatId) {
        if (!window.supabaseClient) {
            console.warn("[ZChat] supabaseClient missing — message not saved to server");
            return;
        }
        const me = (currentUsername || localStorage.getItem("zchat_username") || "").trim();
        let currentChat = state.chats.find(c => c.id === chatId);

        let realChatId = chatId;

        const isSavedChat =
            (currentChat && currentChat.participant.name === "Saved Messages") ||
            String(chatId || "").startsWith("saved_");

        if (isSavedChat) {
            // Chỉ Saved Messages của CHÍNH mình
            realChatId = `saved_${me.toLowerCase()}`;
        } else if (isUuid(chatId)) {
            // Đã là conversations.id
            realChatId = chatId;
        } else {
            // Tạo / lấy conversation uuid từ 2 user
            const otherUser = (currentChat && currentChat.participant.name
                    ? currentChat.participant.name
                    : ""
            ).trim();
            if (!otherUser || otherUser === "Saved Messages") {
                console.error("[ZChat] postMessage: missing partner — không ghi vào saved");
                return;
            }
            const myId = await getMyUserId();
            let otherId = (currentChat && currentChat.participant.userId) || null;
            if (!otherId) otherId = await resolveUserIdByUsername(otherUser);

            if (myId && otherId) {
                const convId = await getOrCreateConversationId(myId, otherId);
                if (convId) {
                    realChatId = convId;
                    conversationOtherName[convId] = otherUser;
                    if (currentChat) {
                        if (currentChat.id !== convId) {
                            currentChat.id = convId;
                            currentChat.participant.userId = otherId;
                            if (state.activeChatId === chatId) state.activeChatId = convId;
                        }
                    }
                }
            }
            // Fallback legacy — vẫn không bao giờ dùng saved_ cho chat 1-1
            if (!isUuid(realChatId) && !String(realChatId).startsWith("saved_")) {
                const sortedUsers = [me.toLowerCase(), otherUser.toLowerCase()].sort();
                realChatId = `chat_${sortedUsers[0]}_${sortedUsers[1]}`;
                if (currentChat) {
                    currentChat.id = realChatId;
                    if (state.activeChatId === chatId) state.activeChatId = realChatId;
                }
            }
        }

        if (!realChatId) {
            console.error("[ZChat] postMessage: realChatId empty — abort");
            return;
        }

        let contentToStore = msgObj.text || msgObj.attachment || "";
        if (window.ZChatE2EE && contentToStore && currentChat && currentChat.participant.name !== "Saved Messages") {
            try {
                await window.ZChatE2EE.ensureUserKeys(me);
                const partner = await window.ZChatE2EE.fetchPublicKeyForUsername(currentChat.participant.name);
                const keysMap = {};
                const myPublic = window.ZChatE2EE.getLocalPublicKey();
                if (myPublic) keysMap[me.toLowerCase()] = myPublic;
                if (partner && partner.public_key) {
                    keysMap[String(partner.username || currentChat.participant.name).toLowerCase()] = partner.public_key;
                    currentChat.participant.publicKey = partner.public_key;
                    if (partner.id) currentChat.participant.userId = partner.id;
                }
                if (Object.keys(keysMap).length) {
                    contentToStore = await window.ZChatE2EE.encryptMessageForUsers(contentToStore, keysMap);
                }
            } catch (e2eeErr) {
                console.error("[E2EE] encrypt failed:", e2eeErr);
            }
        }

        const row = {
            id: makeUuid(),
            chat_id: realChatId,
            sender_username: msgObj.senderId === "me" ? me : String(msgObj.senderId || me),
            content: contentToStore,
            created_at: new Date(msgObj.createdAt || Date.now()).toISOString(),
        };
        try {
            const { data, error } = await window.supabaseClient
                .from("messages")
                .insert([row])
                .select("id")
                .maybeSingle();
            if (error) {
                console.error("[ZChat] insert message error:", error);
                return;
            }
            if (data && data.id) msgObj.id = data.id;
        } catch (err) {
            console.error("[ZChat] postMessageToSupabase exception:", err);
        }
    }

    /* Upload ảnh chat → Supabase Storage bucket "chat-images" (public URL) */
    async function uploadChatImage(file) {
        if (!window.supabaseClient || !file) return null;
        try {
            const me = (currentUsername || localStorage.getItem("zchat_username") || "user").trim().toLowerCase();
            const ext = (file.name && file.name.split(".").pop()) || "jpg";
            const safeExt = String(ext).replace(/[^a-zA-Z0-9]/g, "").slice(0, 8) || "jpg";
            const path = `${me}/${Date.now()}_${Math.random().toString(36).slice(2, 10)}.${safeExt}`;

            const { error: upErr } = await window.supabaseClient.storage
                .from("chat-images")
                .upload(path, file, {
                    cacheControl: "3600",
                    upsert: false,
                    contentType: file.type || "image/jpeg",
                });
            if (upErr) {
                console.error("[ZChat] uploadChatImage error:", upErr);
                return null;
            }
            const { data } = window.supabaseClient.storage.from("chat-images").getPublicUrl(path);
            return (data && data.publicUrl) || null;
        } catch (err) {
            console.error("[ZChat] uploadChatImage exception:", err);
            return null;
        }
    }

    if (fileInput) {
        fileInput.addEventListener("change", async (e) => {
            const file = e.target.files && e.target.files[0];
            if (!file) return;

            const chat = state.chats.find((c) => c.id === state.activeChatId);
            if (!chat) return;

            if (file.type.startsWith("image/")) {
                const imageUrl = await uploadChatImage(file);
                if (imageUrl) {
                    const msg = {
                        id: uid("m"),
                        senderId: "me",
                        text: `[IMAGE]:${imageUrl}`,
                        createdAt: Date.now(),
                        status: "sending"
                    };
                    chat.messages.push(msg);
                    postMessageToSupabase(msg, chat.id);
                    renderMessages(chat);
                    renderChatList();
                } else {
                    console.error("[ZChat] Image upload failed — no public URL");
                }
            } else {
                const msg = { id: uid("m"), senderId: "me", text: "", attachment: file.name, createdAt: Date.now(), status: "sending" };
                chat.messages.push(msg);
                postMessageToSupabase(msg, chat.id);
                scheduleDisappearing(chat, msg);

                renderMessages(chat);
                renderChatList();

                setTimeout(() => {
                    msg.status = "delivered";
                    if (state.activeChatId === chat.id) renderMessages(chat);
                }, 900);
            }

            fileInput.value = "";
        });
    }

    /* ============ REALTIME (phải nằm trong IIFE để dùng được state) ============ */
    /* Kiểm tra 1 chat_id có thực sự thuộc về "me" hay không, tránh việc user khác
       vô tình (hoặc realtime broadcast) làm lộ / gộp nhầm đoạn chat của 2 người khác. */
    function isChatIdMine(chatId, meLower) {
        if (!chatId || !meLower) return false;
        if (chatId.startsWith("saved_")) return chatId === `saved_${meLower}`;
        if (chatId.startsWith("chat_")) {
            const rest = chatId.slice(5);
            return rest === meLower || rest.startsWith(meLower + "_") || rest.endsWith("_" + meLower);
        }
        // Conversation uuid: chỉ khi đã biết (cache / state) — realtime sẽ verify thêm
        if (isUuid(chatId)) {
            if (conversationOtherName[chatId]) return true;
            if (state.chats.some((c) => c.id === chatId)) return true;
            return false;
        }
        return false;
    }

    async function isConversationMineAsync(chatId) {
        if (!isUuid(chatId) || !window.supabaseClient) return false;
        if (isChatIdMine(chatId, (currentUsername || "").toLowerCase())) return true;
        const myId = await getMyUserId();
        if (!myId) return false;
        try {
            const { data } = await window.supabaseClient
                .from("conversations")
                .select("id")
                .eq("id", chatId)
                .or(`user_1.eq.${myId},user_2.eq.${myId}`)
                .maybeSingle();
            return !!(data && data.id);
        } catch (_) {
            return false;
        }
    }

    function resolveOtherNameFromChatId(chatId, me, senderUsername) {
        const meL = (me || "").toLowerCase();
        if (!chatId) return senderUsername && senderUsername.toLowerCase() !== meL ? senderUsername : "Chat User";
        if (chatId.startsWith("saved_")) return "Saved Messages";
        if (chatId.startsWith("chat_")) {
            const rest = chatId.slice(5);
            if (meL && rest.startsWith(meL + "_")) return rest.slice(meL.length + 1);
            if (meL && rest.endsWith("_" + meL)) return rest.slice(0, -(meL.length + 1));
            const other = rest.split("_").find((p) => p && p !== meL);
            if (other) return other;
        }
        if (isUuid(chatId) && conversationOtherName[chatId]) {
            return conversationOtherName[chatId];
        }
        if (senderUsername && senderUsername.toLowerCase() !== meL) return senderUsername;
        return "Chat User";
    }

    function subscribeToMessages() {
        if (!window.supabaseClient) {
            console.warn("[ZChat] Realtime: supabaseClient missing");
            return;
        }

        const channel = window.supabaseClient
            .channel("zchat-messages-realtime")
            .on(
                "postgres_changes",
                { event: "INSERT", schema: "public", table: "messages" },
                async (payload) => {
                    try {
                        const newMsg = payload.new;
                        if (!newMsg) return;

                        const me = (currentUsername || localStorage.getItem("zchat_username") || "").trim();
                        const meLower = me.toLowerCase();
                        // KHÔNG fallback sang saved_ — thiếu chat_id thì bỏ qua
                        const chatId = newMsg.chat_id;
                        if (!chatId || !meLower) return;

                        // Chặn: chỉ nhận chat của mình
                        let mine = isChatIdMine(chatId, meLower);
                        if (!mine && isUuid(chatId)) {
                            mine = await isConversationMineAsync(chatId);
                        }
                        if (!mine) return;

                        // Không bao giờ nhét tin 1-1 vào Saved Messages
                        if (String(chatId).startsWith("saved_") && chatId !== `saved_${meLower}`) return;

                        let chat = state.chats.find((c) => c.id === chatId);

                        // Chưa có chat → tạo mới (không phải Saved Messages trừ khi chat_id đúng saved_me)
                        if (!chat) {
                            let otherName;
                            if (String(chatId).startsWith("saved_")) {
                                otherName = "Saved Messages";
                            } else {
                                otherName = resolveOtherNameFromChatId(chatId, me, newMsg.sender_username);
                                if (isUuid(chatId) && (otherName === "Chat User" || !otherName)) {
                                    const myId = await getMyUserId();
                                    const resolved = await resolveOtherNameFromConversationId(chatId, myId);
                                    if (resolved) otherName = resolved;
                                }
                                // Cuối cùng: dùng sender nếu không phải mình
                                if ((!otherName || otherName === "Chat User") &&
                                    newMsg.sender_username &&
                                    newMsg.sender_username.toLowerCase() !== meLower) {
                                    otherName = newMsg.sender_username;
                                }
                            }
                            chat = {
                                id: chatId,
                                participant: {
                                    id: uid("u"),
                                    name: otherName || "Chat User",
                                    online: true,
                                    lastSeen: null,
                                },
                                unread: 0,
                                disappearingTime: "off",
                                blockScreenshots: false,
                                messages: [],
                            };
                            state.chats.unshift(chat);
                            if (otherName && otherName !== "Saved Messages") {
                                fetchAvatarForUsername(otherName).then((row) => {
                                    if (row) {
                                        applyAvatarFields(chat.participant, row);
                                        if (row.id) chat.participant.userId = row.id;
                                        renderChatList();
                                        if (state.activeChatId === chat.id) renderActiveChat();
                                    }
                                });
                            }
                        }

                        // Tránh trùng theo id server
                        if (chat.messages.some((m) => m.id === newMsg.id)) return;

                        let rtText = newMsg.content || "";
                        if (window.ZChatE2EE && rtText) {
                            try {
                                const priv = window.ZChatE2EE.getLocalPrivateKey();
                                if (priv) {
                                    const plain = await window.ZChatE2EE.safeDecryptContent(rtText, priv);
                                    if (plain != null) rtText = plain;
                                }
                            } catch (_) {}
                        }

                        const ts = new Date(newMsg.created_at).getTime();
                        const isMineMsg = newMsg.sender_username === me;

                        // Tin mình vừa gửi optimistic (id local m_*) — chỉ gắn UUID server, KHÔNG push thêm / render lại
                        if (isMineMsg) {
                            const pending = [...chat.messages].reverse().find((m) =>
                                m.senderId === "me" &&
                                typeof m.id === "string" &&
                                m.id.startsWith("m_") &&
                                Math.abs((m.createdAt || 0) - ts) < 20000
                            );
                            if (pending) {
                                pending.id = newMsg.id;
                                pending.status = "read";
                                // Không gọi renderMessages — tránh chớp toàn bộ bubble
                                return;
                            }
                        }

                        chat.messages.push({
                            id: newMsg.id,
                            senderId: isMineMsg ? "me" : newMsg.sender_username || "other",
                            text: rtText,
                            createdAt: ts,
                            status: "read",
                        });
                        chat.messages.sort((a, b) => a.createdAt - b.createdAt);

                        if (state.activeChatId === chat.id) {
                            renderMessages(chat);
                            if (chatHeaderName) chatHeaderName.textContent = chat.participant.name;
                            markChatAsRead(chat.id);
                        } else if (!isMineMsg) {
                            chat.unread = (chat.unread || 0) + 1;
                        }
                        renderChatList();
                    } catch (err) {
                        console.error("[ZChat] Realtime handler error:", err);
                    }
                }
            )
            .on(
                "postgres_changes",
                { event: "UPDATE", schema: "public", table: "messages" },
                (payload) => {
                    try {
                        const updatedMsg = payload.new;
                        if (!updatedMsg) return;

                        const me = (currentUsername || localStorage.getItem("zchat_username") || "").trim();
                        const meLower = me.toLowerCase();
                        const chatId = updatedMsg.chat_id || `saved_${meLower}`;

                        // Chỉ xử lý nếu đoạn chat thực sự thuộc về mình
                        if (!meLower || !isChatIdMine(chatId, meLower)) return;

                        const chat = state.chats.find((c) => c.id === chatId);
                        if (!chat) return;

                        const msg = chat.messages.find((m) => m.id === updatedMsg.id);
                        if (!msg) return;

                        const contentChanged = (updatedMsg.content || "") !== msg.text;
                        if (contentChanged) {
                            msg.text = updatedMsg.content || "";
                            msg.isEdited = true;
                        }

                        if (updatedMsg.read_at && msg.status !== "read") {
                            msg.status = "read";
                        }

                        if (state.activeChatId === chat.id) renderMessages(chat);
                        renderChatList();
                    } catch (err) {
                        console.error("[ZChat] Realtime UPDATE handler error:", err);
                    }
                }
            )
            .on(
                "postgres_changes",
                { event: "DELETE", schema: "public", table: "messages" },
                (payload) => {
                    try {
                        // Mặc định Supabase chỉ gửi kèm "id" trong payload.old (không có chat_id),
                        // nên mình tìm trực tiếp trong state.chats — vốn đã chỉ chứa chat của MÌNH rồi,
                        // nên không lo lộ/xoá nhầm tin nhắn của người khác.
                        const deletedId = payload.old && payload.old.id;
                        if (!deletedId) return;

                        for (const chat of state.chats) {
                            const idx = chat.messages.findIndex((m) => m.id === deletedId);
                            if (idx === -1) continue;

                            chat.messages.splice(idx, 1);
                            if (state.activeChatId === chat.id) renderMessages(chat);
                            renderChatList();
                            break;
                        }
                    } catch (err) {
                        console.error("[ZChat] Realtime DELETE handler error:", err);
                    }
                }
            )
            .subscribe((status) => {
                console.log("[ZChat] Realtime status:", status);
                if (status === "SUBSCRIBED") {
                    console.log("[ZChat] Realtime OK — tin nhắn mới sẽ hiện không cần reload");
                } else if (status === "CHANNEL_ERROR" || status === "TIMED_OUT") {
                    console.error("[ZChat] Realtime FAILED. Bật Replication cho bảng messages trên Supabase.");
                }
            });

        return channel;
    }

    window.zchatEnterApp = enterApp;

    applyLanguage();
    if (currentUsername) {
        enterApp(currentUsername);
    } else {
        onboarding.classList.remove("hidden");
    }

    subscribeToMessages();
    subscribeToUserAvatarChanges();
    icons();
})();
