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
            typeMessage: "Write a message...",
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
            typeMessage: "Nhập tin nhắn...",
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
            typeMessage: "输入消息...",
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
            typeMessage: "Напишите сообщение...",
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
    }

    async function fetchAvatarForUsername(username) {
        if (!window.supabaseClient || !username) return null;
        try {
            const { data, error } = await window.supabaseClient
                .from("users")
                .select("username, avatar_type, avatar_color, avatar_emoji, avatar_url")
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

    /* Nghe realtime khi user khác đổi avatar / username -> cập nhật ngay */
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

                        const oldName = (payload.old && payload.old.username) || null;
                        const newName = row.username;
                        const me = (currentUsername || localStorage.getItem("zchat_username") || "").trim();
                        let touched = false;

                        state.chats.forEach((chat) => {
                            if (!chat.participant || !chat.participant.name) return;
                            const pName = chat.participant.name;
                            const pLower = pName.toLowerCase();

                            // Khớp tên cũ (đổi username) hoặc tên mới (chỉ đổi avatar)
                            const matchedOld = oldName && pLower === String(oldName).toLowerCase();
                            const matchedNew = pLower === String(newName).toLowerCase();
                            if (!matchedOld && !matchedNew) return;

                            if (matchedOld && newName && pLower !== String(newName).toLowerCase()) {
                                chat.participant.name = newName;

                                // Đồng bộ chat_id dạng chat_a_b theo tên mới
                                if (chat.id && chat.id.startsWith("chat_") && me) {
                                    const sorted = [me.toLowerCase(), newName.toLowerCase()].sort();
                                    const newId = `chat_${sorted[0]}_${sorted[1]}`;
                                    if (state.activeChatId === chat.id) state.activeChatId = newId;
                                    chat.id = newId;
                                }
                            }

                            applyAvatarFields(chat.participant, row);
                            touched = true;
                        });

                        if (touched) {
                            renderChatList();
                            const active = state.chats.find((c) => c.id === state.activeChatId);
                            if (active) renderActiveChat();
                        }
                    } catch (err) {
                        console.error("[ZChat] User profile realtime handler error:", err);
                    }
                }
            )
            .subscribe((status) => {
                if (status === "SUBSCRIBED") {
                    console.log("[ZChat] Users profile realtime OK (username/avatar)");
                }
            });
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

    function syncProfileData() {
        const savedTheme = localStorage.getItem("zchat_theme") || "dark";
        document.documentElement.setAttribute("data-theme", savedTheme);

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
        applyLanguage();
        renderChatList();

        setTimeout(() => {
            loadMessagesFromSupabase();
        }, 500);

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

        const dotSize = Math.round(size * 0.28);
        const statusDot = participant.online
            ? `<span class="absolute bottom-0 right-0 rounded-full border-2 bg-online" style="border-color: var(--surface); width:${dotSize}px;height:${dotSize}px"></span>`
            : "";

        const innerAvatar = (participant.avatarType === "photo" && participant.avatarUrl)
            ? `<img src="${participant.avatarUrl}" alt="${initials(participant.name)}" class="h-full w-full rounded-full object-cover select-none" />`
            : (participant.avatarType === "emoji" && participant.avatarEmoji)
                ? `<div class="flex h-full w-full items-center justify-center rounded-full text-sm font-semibold select-none" style="background-color: var(--elevated2);">${participant.avatarEmoji}</div>`
                : `<div class="flex h-full w-full items-center justify-center rounded-full text-sm font-semibold select-none" style="background-color:${participant.avatarColor || colorFor(participant.name)}; color: var(--avatar-text);">${initials(participant.name)}</div>`;

        return `
      <div class="relative shrink-0" style="width:${size}px;height:${size}px">
        ${innerAvatar}
        ${statusDot}
      </div>
    `;
    }

    function getFilteredSortedChats() {
        const q = state.searchQuery.trim().toLowerCase();
        return state.chats
            .filter((c) => c.participant.name.toLowerCase().includes(q))
            .slice()
            .sort((a, b) => {
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
            const previewText = last ? (last.text || (last.attachment ? "📎 Attachment" : "")) : "No messages yet";
            const active = chat.id === state.activeChatId;
            const receiptIcon =
                isMine && last
                    ? `<i data-lucide="${last.status === "read" ? "check-check" : "check"}" class="w-[14px] h-[14px] shrink-0" style="color: var(--muted);"></i>`
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
            <span class="truncate text-[15px] font-bold" style="color: var(--ink);">${escapeHtml(chat.participant.name)}</span>
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
    }

    function statusIconMarkup(status) {
        if (status === "sending") return `<i data-lucide="clock-3" class="w-[12px] h-[12px]" style="color: var(--faint);"></i>`;
        if (status === "sent") return `<i data-lucide="check" class="w-[13px] h-[13px]" style="color: var(--faint);"></i>`;
        if (status === "delivered") return `<i data-lucide="check-check" class="w-[13px] h-[13px]" style="color: var(--faint);"></i>`;
        return `<i data-lucide="check-check" class="w-[13px] h-[13px]" style="color: var(--online);"></i>`;
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
        chatHeaderName.textContent = chat.participant.name;
        chatHeaderStatus.innerHTML = chat.participant.online
            ? `<span style="color: var(--online); font-weight:600;">Online</span>`
            : escapeHtml(formatLastSeen(chat.participant.lastSeen));

        document.getElementById("infoAvatar").innerHTML = avatarHtml(chat.participant, 64);
        document.getElementById("infoName").textContent = chat.participant.name;
        document.getElementById("infoUsername").textContent = "@" + chat.participant.name.toLowerCase().replace(/\s+/g, "");

        updateDisappearingUI(chat.disappearingTime || "off");
        blockScreenshotsToggle.checked = !!chat.blockScreenshots;

        applyScreenshotProtection(chat.blockScreenshots);

        renderMessages(chat);
        icons();
    }

    /* ============ ĐIỀU KHIỂN EDIT MODE BẰNG EDIT BAR ============ */
    function startEditMessage(msgId, currentText) {
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
            sendIcon.setAttribute("data-lucide", "send-horizontal");
            icons();
        }

        updateSendBtnState();
    }

    if (cancelEditBtn) {
        cancelEditBtn.addEventListener("click", cancelEditMode);
    }

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
            wrap.className = (showTail ? "mb-3 " : "mb-1 ") + "group relative flex w-full fade-in " + (isMine ? "justify-end" : "justify-start");

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

            let contentHtml = "";
            if (msg.text) {
                if (msg.text.startsWith("[IMAGE]:")) {
                    const imgUrl = msg.text.replace("[IMAGE]:", "");
                    contentHtml = `<img src="${imgUrl}" class="rounded-2xl max-w-[260px] max-h-[300px] object-cover cursor-pointer hover:opacity-90 transition-opacity" onclick="window.open('${imgUrl}', '_blank')" />`;
                } else {
                    contentHtml = escapeHtml(msg.text) + (msg.isEdited ? ` <span class="text-[10px] opacity-60 font-normal">(edited)</span>` : "");
                }
            }

            let actionButtonsHtml = "";
            if (isMine && !msg.text?.startsWith("[IMAGE]:")) {
                actionButtonsHtml = `
                <div class="absolute top-1/2 -translate-y-1/2 -left-16 hidden group-hover:flex items-center gap-1 bg-elevated rounded-xl p-1 shadow-md border border-hairline z-10 transition-all">
                    <button type="button" class="btn-edit-msg p-1.5 hover:bg-elevated2 rounded-lg text-muted hover:text-ink transition-colors" title="Edit message">
                        <i data-lucide="pencil" class="w-3.5 h-3.5"></i>
                    </button>
                    <button type="button" class="btn-delete-msg p-1.5 hover:bg-elevated2 rounded-lg text-red-500 transition-colors" title="Delete message">
                        <i data-lucide="trash-2" class="w-3.5 h-3.5"></i>
                    </button>
                </div>`;
            } else if (isMine && msg.text?.startsWith("[IMAGE]:")) {
                actionButtonsHtml = `
                <div class="absolute top-1/2 -translate-y-1/2 -left-10 hidden group-hover:flex items-center gap-1 bg-elevated rounded-xl p-1 shadow-md border border-hairline z-10 transition-all">
                    <button type="button" class="btn-delete-msg p-1.5 hover:bg-elevated2 rounded-lg text-red-500 transition-colors" title="Delete message">
                        <i data-lucide="trash-2" class="w-3.5 h-3.5"></i>
                    </button>
                </div>`;
            }

            const bubble = msg.text
                ? `<div class="rounded-bubble px-4 py-2.5 text-[14.5px] leading-relaxed font-medium ${showTail ? (isMine ? "rounded-br-md" : "rounded-bl-md") : ""}" style="${bubbleStyle}">${contentHtml}</div>`
                : "";

            const disappearingOn = chat.disappearingTime && chat.disappearingTime !== "off";
            const timerIcon = disappearingOn
                ? `<i data-lucide="timer" class="w-[11px] h-[11px] shrink-0" style="color: var(--faint); opacity: 0.85;" title="Disappearing message"></i>`
                : "";

            const meta = showTail
                ? `<div class="flex items-center gap-1 px-1 text-[11px]" style="color: var(--faint);">
             ${timerIcon}
             <span>${formatTimeShort(msg.createdAt)}</span>
             ${isMine ? statusIconMarkup(msg.status) : ""}
           </div>`
                : (disappearingOn
                    ? `<div class="flex items-center gap-1 px-1 text-[11px]" style="color: var(--faint);">${timerIcon}</div>`
                    : "");

            wrap.innerHTML = `
        <div class="relative flex max-w-[72%] flex-col gap-1.5 ${isMine ? "items-end" : "items-start"}">
          ${actionButtonsHtml}
          ${attachmentHtml}
          ${bubble}
          ${meta}
        </div>`;

            const btnEdit = wrap.querySelector(".btn-edit-msg");
            if (btnEdit) {
                btnEdit.addEventListener("click", () => startEditMessage(msg.id, msg.text));
            }

            const btnDelete = wrap.querySelector(".btn-delete-msg");
            if (btnDelete) {
                btnDelete.addEventListener("click", () => deleteMessage(msg.id));
            }

            messageFeed.appendChild(wrap);
        });

        messageFeed.scrollTop = messageFeed.scrollHeight;
        icons();
    }

    function renderTypingIndicator(chat) {
        const wrap = document.createElement("div");
        wrap.id = "typingIndicator";
        wrap.className = "flex w-full justify-start fade-in mb-3";
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
    }
    function closeInfoDrawer() {
        infoDrawer.classList.add("hidden");
        closeDisappearingMenu();
    }

    openInfoBtn.addEventListener("click", openInfoDrawer);
    closeInfoBtn.addEventListener("click", closeInfoDrawer);

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
            disappearingMenuBtn.style.backgroundColor = "rgba(16, 185, 129, 0.15)";
            disappearingMenuBtn.style.borderColor = "#10b981";
            disappearingMenuBtn.style.color = "#10b981";
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
                msg.text = text;
                msg.isEdited = true;
                renderMessages(chat);
                renderChatList();

                if (window.supabaseClient) {
                    try {
                        await window.supabaseClient
                            .from("messages")
                            .update({ content: text })
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
        const msg = { id: uid("m"), senderId: "me", text: text, createdAt: Date.now(), status: "sending" };
        chat.messages.push(msg);
        postMessageToSupabase(msg, chat.id);
        scheduleDisappearing(chat, msg);

        messageInput.value = "";
        messageInput.style.height = "auto";
        updateSendBtnState();

        renderMessages(chat);
        renderChatList();

        // Cập nhật trạng thái gửi thành công (dấu tick)
        setTimeout(() => {
            msg.status = "sent";
            if (state.activeChatId === chat.id) renderMessages(chat);
        }, 500);

        setTimeout(() => {
            msg.status = "delivered";
            if (state.activeChatId === chat.id) renderMessages(chat);
            renderChatList();
        }, 1400);
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

        if (window.supabaseClient) {
            try {
                const { data: userData, error } = await window.supabaseClient
                    .from("users")
                    .select("username, avatar_type, avatar_color, avatar_emoji, avatar_url")
                    .ilike("username", rawName)
                    .maybeSingle();

                if (error) {
                    console.error("[ZChat] Lỗi query Supabase:", error);
                }

                if (userData && userData.username) {
                    userFound = true;
                    matchedName = userData.username;
                    matchedAvatarRow = userData;
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
                // Nếu chưa có thẻ hiển thị lỗi thì tạo nhanh một thẻ nhỏ màu đỏ dưới ô input
                errEl = document.createElement("p");
                errEl.id = "newChatError";
                errEl.className = "text-red-500 text-xs mt-1.5 font-medium";
                newChatNameInput.parentNode.appendChild(errEl);
            }
            errEl.textContent = "No User found!"; // Chuyển thành No User found cực kỳ chuyên nghiệp
            newChatNameInput.focus();
            return;
        }
        // Tạo Chat ID cố định ghép từ tên 2 người theo thứ tự bảng chữ cái (tránh bị dính c_saved hoặc id ngẫu nhiên)
        const sortedUsers = [currentUser.toLowerCase(), matchedName.toLowerCase()].sort();
        const targetChatId = `chat_${sortedUsers[0]}_${sortedUsers[1]}`;

        let chat = state.chats.find(
            c => c.id === targetChatId || c.participant.name.toLowerCase() === matchedName.toLowerCase()
        );

        if (!chat) {
            chat = {
                id: targetChatId,
                participant: { id: uid("u"), name: matchedName, online: true, lastSeen: null },
                unread: 0,
                disappearingTime: "off",
                blockScreenshots: false,
                messages: []
            };
            if (matchedAvatarRow) applyAvatarFields(chat.participant, matchedAvatarRow);
            state.chats.unshift(chat);
        } else {
            chat.id = targetChatId; // Đồng bộ chuẩn ID
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
            const mySavedChatId = `saved_${me.toLowerCase()}`;

            const { data, error } = await window.supabaseClient
                .from("messages")
                .select("*")
                .order("created_at", { ascending: true });

            if (error) {
                console.error("[ZChat] load messages error:", error.message || JSON.stringify(error));
                return;
            }
            if (!data || !data.length) return;

            data.forEach((m) => {
                const chatId = m.chat_id || mySavedChatId;

                // Tránh load tin nhắn Saved Messages của người dùng khác
                if (chatId.startsWith("saved_") && chatId !== mySavedChatId) {
                    return;
                }

                let chat = state.chats.find((c) => c.id === chatId);

                if (!chat) {
                    const otherName = resolveOtherNameFromChatId(chatId, me, m.sender_username);
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
                    };
                    state.chats.push(chat);
                }

                if (!chat.messages.some((existing) => existing.id === m.id)) {
                    chat.messages.push({
                        id: m.id,
                        senderId: m.sender_username === me ? "me" : m.sender_username || "other",
                        text: m.content || "",
                        createdAt: new Date(m.created_at).getTime(),
                        status: "read",
                    });
                }
            });

            state.chats.forEach((c) => {
                c.messages.sort((a, b) => a.createdAt - b.createdAt);
            });

            renderChatList();
            const activeChat = state.chats.find((c) => c.id === state.activeChatId);
            if (activeChat) renderMessages(activeChat);

            refreshAllParticipantAvatars();
        } catch (err) {
            console.error("[ZChat] loadMessagesFromSupabase exception:", err);
        }
    }

    async function loadMessagesForChat(chatId) {
        const chat = state.chats.find((c) => c.id === chatId);
        if (chat && state.activeChatId === chatId) {
            renderMessages(chat);
        }
    }

    async function postMessageToSupabase(msgObj, chatId) {
        if (!window.supabaseClient) {
            console.warn("[ZChat] supabaseClient missing — message not saved to server");
            return;
        }
        const me = (currentUsername || localStorage.getItem("zchat_username") || "").trim();
        const currentChat = state.chats.find(c => c.id === chatId);

        let realChatId = chatId;

        // Nếu là Saved Messages hoặc gửi cho chính mình
        if (!currentChat || currentChat.participant.name === "Saved Messages" || chatId.startsWith("saved_")) {
            realChatId = `saved_${me.toLowerCase()}`;
        } else {
            // Nếu gửi cho người dùng khác, tự động tạo/chuẩn hóa ID dạng chat_userA_userB (sắp xếp A-Z)
            const otherUser = currentChat.participant.name.trim();
            const sortedUsers = [me.toLowerCase(), otherUser.toLowerCase()].sort();
            realChatId = `chat_${sortedUsers[0]}_${sortedUsers[1]}`;
            currentChat.id = realChatId;
            state.activeChatId = realChatId;
        }

        const row = {
            id: makeUuid(),
            chat_id: realChatId,
            sender_username: msgObj.senderId === "me" ? me : String(msgObj.senderId || me),
            content: msgObj.text || msgObj.attachment || "",
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

    if (fileInput) {
        fileInput.addEventListener("change", async (e) => {
            const file = e.target.files && e.target.files[0];
            if (!file) return;

            const chat = state.chats.find((c) => c.id === state.activeChatId);
            if (!chat) return;

            if (file.type.startsWith("image/")) {
                if (typeof uploadChatImage === "function") {
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
                    }
                } else {
                    const reader = new FileReader();
                    reader.onload = function(evt) {
                        const msg = {
                            id: uid("m"),
                            senderId: "me",
                            text: `[IMAGE]:${evt.target.result}`,
                            createdAt: Date.now(),
                            status: "sending"
                        };
                        chat.messages.push(msg);
                        postMessageToSupabase(msg, chat.id);
                        renderMessages(chat);
                        renderChatList();
                    };
                    reader.readAsDataURL(file);
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
                (payload) => {
                    try {
                        const newMsg = payload.new;
                        if (!newMsg) return;

                        const me = (currentUsername || localStorage.getItem("zchat_username") || "").trim();
                        const mySavedChatId = `saved_${me.toLowerCase()}`;
                        const chatId = newMsg.chat_id || mySavedChatId;

                        // Bỏ qua Saved Messages của người khác
                        if (String(chatId).startsWith("saved_") && chatId !== mySavedChatId) return;

                        let chat = state.chats.find((c) => c.id === chatId);

                        // Chưa có chat → tạo mới (không cần reload)
                        if (!chat) {
                            const otherName = resolveOtherNameFromChatId(chatId, me, newMsg.sender_username);
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
                            };
                            state.chats.unshift(chat);
                            fetchAvatarForUsername(otherName).then((row) => {
                                if (row) {
                                    applyAvatarFields(chat.participant, row);
                                    renderChatList();
                                    if (state.activeChatId === chat.id) renderActiveChat();
                                }
                            });
                        }

                        // Tránh trùng (tin mình vừa gửi local)
                        if (chat.messages.some((m) => m.id === newMsg.id)) return;

                        chat.messages.push({
                            id: newMsg.id,
                            senderId: newMsg.sender_username === me ? "me" : newMsg.sender_username || "other",
                            text: newMsg.content || "",
                            createdAt: new Date(newMsg.created_at).getTime(),
                            status: "read",
                        });
                        chat.messages.sort((a, b) => a.createdAt - b.createdAt);

                        if (state.activeChatId === chat.id) {
                            renderMessages(chat);
                            if (chatHeaderName) chatHeaderName.textContent = chat.participant.name;
                        } else if (newMsg.sender_username !== me) {
                            chat.unread = (chat.unread || 0) + 1;
                        }
                        renderChatList();
                    } catch (err) {
                        console.error("[ZChat] Realtime handler error:", err);
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
