(function () {
    "use strict";

    // Multilingual Dictionary
    const i18n = {
        en: {
            title: "Settings",
            subtitle: "Manage your application preferences, privacy, and active status.",
            secPrivacy: "Privacy & Permissions",
            strangerCalls: "Allow calls from strangers",
            strangerCallsDesc: "Let people not in your contacts start voice calls with you.",
            strangerVideo: "Allow video calls from strangers",
            strangerVideoDesc: "Let non-contacts invite you to video conversations.",
            msgRequests: "Message Requests",
            msgRequestsDesc: "Filter messages from unknown users into a separate request folder.",
            secGeneral: "General & Appearance",
            language: "Language",
            languageDesc: "Select your preferred language for the application UI.",
            theme: "Theme Mode",
            themeDesc: "Choose between Light and Dark visual appearance.",
            secSecurity: "Account Security",
            recovery: "Recovery Password",
            recoveryDesc: "Use this password with your username to log in again.",
            copy: "Copy",
            copied: "Copied!",
            noRecovery: "No recovery password saved",
            save: "Save Changes",
            savedAlert: "Settings updated successfully!",
            logout: "Log out"
        },
        vi: {
            title: "Cài đặt",
            subtitle: "Quản lý tùy chọn ứng dụng, quyền riêng tư và trạng thái hoạt động.",
            secPrivacy: "Quyền riêng tư & Cuộc gọi",
            strangerCalls: "Cho phép cuộc gọi từ người lạ",
            strangerCallsDesc: "Cho phép người không có trong danh bạ thực hiện cuộc gọi thoại.",
            strangerVideo: "Cho phép cuộc gọi Video từ người lạ",
            strangerVideoDesc: "Cho phép người lạ gửi lời mời trò chuyện video.",
            msgRequests: "Tin nhắn chờ",
            msgRequestsDesc: "Lọc tin nhắn từ người lạ vào thư mục tin nhắn chờ riêng biệt.",
            secGeneral: "Chung & Giao diện",
            language: "Ngôn ngữ",
            languageDesc: "Chọn ngôn ngữ hiển thị giao diện cho ứng dụng.",
            theme: "Giao diện",
            themeDesc: "Tùy chỉnh chế độ giao diện Sáng hoặc Tối.",
            secSecurity: "Bảo mật tài khoản",
            recovery: "Mật khẩu khôi phục",
            recoveryDesc: "Dùng mật khẩu này cùng tên người dùng để đăng nhập lại.",
            copy: "Sao chép",
            copied: "Đã sao chép!",
            noRecovery: "Chưa có mật khẩu khôi phục",
            save: "Lưu thay đổi",
            savedAlert: "Cập nhật cài đặt thành công!",
            logout: "Đăng xuất"
        },
        zh: {
            title: "设置",
            subtitle: "管理您的应用偏好设置、隐私和在线状态。",
            secPrivacy: "隐私与权限",
            strangerCalls: "允许陌生人来电",
            strangerCallsDesc: "允许未保存在联系人中的人发起语音通话。",
            strangerVideo: "允许陌生人视频通话",
            strangerVideoDesc: "允许非联系人邀请您进行视频聊天。",
            msgRequests: "消息请求",
            msgRequestsDesc: "将来自陌生人的消息过滤到单独的请求文件夹中。",
            secGeneral: "通用与外观",
            language: "语言",
            languageDesc: "选择应用界面的首选语言。",
            theme: "主题模式",
            themeDesc: "选择浅色或深色外观。",
            secSecurity: "账户安全",
            recovery: "恢复密码",
            recoveryDesc: "使用此密码与用户名再次登录。",
            copy: "复制",
            copied: "已复制！",
            noRecovery: "未保存恢复密码",
            save: "保存更改",
            savedAlert: "设置更新成功！",
            logout: "退出登录"
        },
        ru: {
            title: "Настройки",
            subtitle: "Управление настройками приложения, конфиденциальностью и статусом.",
            secPrivacy: "Конфиденциальность и разрешения",
            strangerCalls: "Звонки от незнакомцев",
            strangerCallsDesc: "Разрешить пользователям не из контактов совершать аудиозвонки.",
            strangerVideo: "Видеозвонки от незнакомцев",
            strangerVideoDesc: "Разрешить пользователям не из контактов приглашать вас в видеочат.",
            msgRequests: "Запросы на переписку",
            msgRequestsDesc: "Фильтровать сообщения от неизвестных пользователей в отдельную папку.",
            secGeneral: "Общие и внешний вид",
            language: "Язык",
            languageDesc: "Выберите предпочитаемый язык интерфейса приложения.",
            theme: "Тема оформления",
            themeDesc: "Выберите светлое или темное оформление.",
            secSecurity: "Безопасность аккаунта",
            recovery: "Пароль восстановления",
            recoveryDesc: "Используйте этот пароль с именем пользователя для повторного входа.",
            copy: "Копировать",
            copied: "Скопировано!",
            noRecovery: "Пароль восстановления не сохранён",
            save: "Сохранить изменения",
            savedAlert: "Настройки успешно обновлены!",
            logout: "Выйти"
        }
    };

    const profileAvatar = document.getElementById("profileAvatar");
    const languageSelect = document.getElementById("languageSelect");
    const themeSelect = document.getElementById("themeSelect");
    const toggleCalls = document.getElementById("toggleCalls");
    const toggleVideoCalls = document.getElementById("toggleVideoCalls");
    const toggleMsgRequests = document.getElementById("toggleMsgRequests");
    const saveBtn = document.getElementById("saveBtn");
    const toast = document.getElementById("toast");
    const toastMsg = document.getElementById("toastMsg");

    let toastTimeout = null;

    function showToast(message) {
        toastMsg.textContent = message;
        toast.classList.remove("opacity-0", "translate-y-4", "pointer-events-none");
        toast.classList.add("opacity-100", "translate-y-0");

        if (toastTimeout) clearTimeout(toastTimeout);

        toastTimeout = setTimeout(() => {
            toast.classList.remove("opacity-100", "translate-y-0");
            toast.classList.add("opacity-0", "translate-y-4", "pointer-events-none");
        }, 3000);
    }

    const AVATAR_COLORS = ["#4F46E5", "#0284C7", "#16A34A", "#D97706", "#DC2626", "#9333EA", "#2563EB", "#0D9488"];
    function colorFor(seed) {
        let hash = 0;
        for (let i = 0; i < seed.length; i++) hash = seed.charCodeAt(i) + ((hash << 5) - hash);
        return AVATAR_COLORS[Math.abs(hash) % AVATAR_COLORS.length];
    }

    function initials(name) {
        return (name || "")
            .split(" ")
            .filter(Boolean)
            .slice(0, 2)
            .map((n) => n[0].toUpperCase())
            .join("");
    }

    function loadProfileData() {
        const username = localStorage.getItem("zchat_username") || "Guest";
        const avatarType = localStorage.getItem("zchat_avatar_type") || "initials";
        const avatarColor = localStorage.getItem("zchat_avatar_color") || colorFor(username);
        const avatarEmoji = localStorage.getItem("zchat_avatar_emoji") || "😀";

        if (avatarType === "emoji") {
            profileAvatar.style.backgroundColor = "var(--elevated2)";
            profileAvatar.textContent = avatarEmoji;
        } else {
            profileAvatar.style.backgroundColor = avatarColor;
            profileAvatar.style.color = "var(--avatar-text)";
            profileAvatar.textContent = initials(username);
        }
    }

    function applyLanguage(lang) {
        const dict = i18n[lang] || i18n.en;
        document.getElementById("txtTitle").textContent = dict.title;
        document.getElementById("txtSubtitle").textContent = dict.subtitle;
        document.getElementById("secPrivacyTitle").textContent = dict.secPrivacy;
        document.getElementById("lblStrangerCalls").textContent = dict.strangerCalls;
        document.getElementById("lblStrangerCallsDesc").textContent = dict.strangerCallsDesc;
        document.getElementById("lblStrangerVideo").textContent = dict.strangerVideo;
        document.getElementById("lblStrangerVideoDesc").textContent = dict.strangerVideoDesc;
        document.getElementById("lblMsgRequests").textContent = dict.msgRequests;
        document.getElementById("lblMsgRequestsDesc").textContent = dict.msgRequestsDesc;
        document.getElementById("secGeneralTitle").textContent = dict.secGeneral;
        document.getElementById("lblLanguage").textContent = dict.language;
        document.getElementById("lblLanguageDesc").textContent = dict.languageDesc;
        document.getElementById("lblTheme").textContent = dict.theme;
        document.getElementById("lblThemeDesc").textContent = dict.themeDesc;
        document.getElementById("saveBtn").textContent = dict.save;

        const secSecurityTitle = document.getElementById("secSecurityTitle");
        if (secSecurityTitle) secSecurityTitle.textContent = dict.secSecurity;
        const lblRecovery = document.getElementById("lblRecovery");
        if (lblRecovery) lblRecovery.textContent = dict.recovery;
        const lblRecoveryDesc = document.getElementById("lblRecoveryDesc");
        if (lblRecoveryDesc) lblRecoveryDesc.textContent = dict.recoveryDesc;
        const settingsCopyLabel = document.getElementById("settingsCopyLabel");
        if (settingsCopyLabel) settingsCopyLabel.textContent = dict.copy;
        const logoutBtnLabel = document.getElementById("logoutBtnLabel");
        if (logoutBtnLabel) logoutBtnLabel.textContent = dict.logout || "Log out";
    }

    function generateRecoveryPassword() {
        const chars = "ABCDEFGHJKLMNPQRSTUVWXYZabcdefghjkmnpqrstuvwxyz23456789!@#$%&*";
        const part = (len) => {
            let s = "";
            for (let i = 0; i < len; i++) s += chars[Math.floor(Math.random() * chars.length)];
            return s;
        };
        return "zChat-" + part(4) + "-" + part(4);
    }

    function loadRecoveryPassword(lang) {
        const dict = i18n[lang] || i18n.en;
        const display = document.getElementById("settingsRecoveryDisplay");
        if (!display) return;
        let recovery = localStorage.getItem("zchat_recovery_password") || "";
        if (!recovery) {
            try {
                const zu = JSON.parse(localStorage.getItem("zchat_user") || "null");
                if (zu && zu.recovery_password) {
                    recovery = zu.recovery_password;
                    localStorage.setItem("zchat_recovery_password", recovery);
                }
            } catch (_) {}
        }
        display.textContent = recovery || dict.noRecovery;
    }

    function loadSettings() {
        const savedTheme = localStorage.getItem("zchat_theme") || "dark";
        const savedLang = localStorage.getItem("zchat_lang") || "en";
        const allowCalls = localStorage.getItem("zchat_allow_calls") === "true";
        const allowVideo = localStorage.getItem("zchat_allow_video") === "true";
        const msgRequests = localStorage.getItem("zchat_msg_requests") !== "false";

        document.documentElement.setAttribute("data-theme", savedTheme);
        themeSelect.value = savedTheme;
        languageSelect.value = savedLang;
        toggleCalls.checked = allowCalls;
        toggleVideoCalls.checked = allowVideo;
        toggleMsgRequests.checked = msgRequests;

        applyLanguage(savedLang);
        loadRecoveryPassword(savedLang);
    }

    themeSelect.addEventListener("change", (e) => {
        document.documentElement.setAttribute("data-theme", e.target.value);
    });

    languageSelect.addEventListener("change", (e) => {
        applyLanguage(e.target.value);
        loadRecoveryPassword(e.target.value);
    });

    const settingsCopyRecoveryBtn = document.getElementById("settingsCopyRecoveryBtn");
    if (settingsCopyRecoveryBtn) {
        settingsCopyRecoveryBtn.addEventListener("click", async () => {
            const recovery = localStorage.getItem("zchat_recovery_password") || "";
            if (!recovery) return;
            try {
                await navigator.clipboard.writeText(recovery);
            } catch (_) {
                const ta = document.createElement("textarea");
                ta.value = recovery;
                document.body.appendChild(ta);
                ta.select();
                document.execCommand("copy");
                document.body.removeChild(ta);
            }
            const lang = languageSelect.value || "en";
            const dict = i18n[lang] || i18n.en;
            const label = document.getElementById("settingsCopyLabel");
            const icon = document.getElementById("settingsCopyIcon");
            if (label) label.textContent = dict.copied;
            if (icon) {
                icon.setAttribute("data-lucide", "check");
                if (window.lucide) window.lucide.createIcons();
            }
            setTimeout(() => {
                if (label) label.textContent = dict.copy;
                if (icon) {
                    icon.setAttribute("data-lucide", "copy");
                    if (window.lucide) window.lucide.createIcons();
                }
            }, 1500);
        });
    }

    saveBtn.addEventListener("click", () => {
        const currentLang = languageSelect.value;
        localStorage.setItem("zchat_theme", themeSelect.value);
        localStorage.setItem("zchat_lang", currentLang);
        localStorage.setItem("zchat_allow_calls", toggleCalls.checked);
        localStorage.setItem("zchat_allow_video", toggleVideoCalls.checked);
        localStorage.setItem("zchat_msg_requests", toggleMsgRequests.checked);

        showToast(i18n[currentLang].savedAlert);
    });

    const logoutBtn = document.getElementById("logoutBtn");
    if (logoutBtn) {
        logoutBtn.addEventListener("click", () => {
            // End session — keep recovery password so user can log in again
            localStorage.removeItem("zchat_username");
            localStorage.removeItem("zchat_user");
            window.location.href = "index.html";
        });
    }

    loadSettings();
    loadProfileData();
    if (window.lucide) window.lucide.createIcons();
})();
