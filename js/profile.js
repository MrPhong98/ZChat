(function () {
    "use strict";

    /* ============ I18N DICTIONARY (EN, VI, ZH, RU) ============ */
    const i18n = {
        en: {
            backToChat: "Back to Chat",
            editProfile: "Edit Profile",
            changeAvatar: "Change avatar",
            colorTab: "Color",
            emojiTab: "Emoji",
            username: "Username",
            usernameErr: "Username can't be empty.",
            status: "Status",
            statusPlaceholder: "e.g. Available, In a meeting...",
            statusDesc: "Shown to others alongside your name.",
            presence: "Presence",
            online: "Online",
            away: "Away",
            dnd: "Do Not Disturb",
            appearance: "Appearance",
            theme: "Theme",
            darkMode: "Dark mode",
            lightMode: "Light mode",
            saveChanges: "Save Changes",
            successToast: "Profile updated successfully!"
        },
        vi: {
            backToChat: "Quay lại Chat",
            editProfile: "Chỉnh sửa hồ sơ",
            changeAvatar: "Đổi ảnh đại diện",
            colorTab: "Màu sắc",
            emojiTab: "Biểu tượng",
            username: "Tên người dùng",
            usernameErr: "Tên người dùng không được để trống.",
            status: "Trạng thái",
            statusPlaceholder: "Ví dụ: Đang rảnh, Đang họp...",
            statusDesc: "Hiển thị cho người khác cùng với tên của bạn.",
            presence: "Trạng thái hoạt động",
            online: "Trực tuyến",
            away: "Vắng mặt",
            dnd: "Không làm phiền",
            appearance: "Giao diện",
            theme: "Chế độ nền",
            darkMode: "Chế độ tối",
            lightMode: "Chế độ sáng",
            saveChanges: "Lưu thay đổi",
            successToast: "Cập nhật hồ sơ thành công!"
        },
        zh: {
            backToChat: "返回聊天",
            editProfile: "编辑个人资料",
            changeAvatar: "更换头像",
            colorTab: "颜色",
            emojiTab: "表情",
            username: "用户名",
            usernameErr: "用户名不能为空。",
            status: "状态",
            statusPlaceholder: "例如：在线、开会中...",
            statusDesc: "与其他用户一起显示在您的名字旁。",
            presence: "在线状态",
            online: "在线",
            away: "离开",
            dnd: "请勿打扰",
            appearance: "外观",
            theme: "主题Mode",
            darkMode: "深色模式",
            lightMode: "浅色模式",
            saveChanges: "保存更改",
            successToast: "个人资料更新成功！"
        },
        ru: {
            backToChat: "Назад в чат",
            editProfile: "Редактировать профиль",
            changeAvatar: "Сменить аватар",
            colorTab: "Цвет",
            emojiTab: "Эмодзи",
            username: "Имя пользователя",
            usernameErr: "Имя пользователя не может быть пустым.",
            status: "Статус",
            statusPlaceholder: "Например: Доступен, На встрече...",
            statusDesc: "Отображается другим рядом с вашим именем.",
            presence: "Статус сети",
            online: "В сети",
            away: "Отошел",
            dnd: "Не беспокоить",
            appearance: "Внешний вид",
            theme: "Тема",
            darkMode: "Темная тема",
            lightMode: "Светлая тема",
            saveChanges: "Сохранить",
            successToast: "Профиль успешно обновлен!"
        }
    };

    function applyLanguage() {
        const lang = localStorage.getItem("zchat_lang") || "en";
        const dict = i18n[lang] || i18n.en;

        const backBtn = document.querySelector("header a");
        if (backBtn) backBtn.childNodes[2].textContent = " " + dict.backToChat;

        const headerTitle = document.querySelector("header h1");
        if (headerTitle) headerTitle.textContent = dict.editProfile;

        if (changeAvatarBtn) changeAvatarBtn.childNodes[2].textContent = " " + dict.changeAvatar;

        const tabColor = document.querySelector('.avatar-tab[data-avatar-tab="color"]');
        if (tabColor) tabColor.textContent = dict.colorTab;
        const tabEmoji = document.querySelector('.avatar-tab[data-avatar-tab="emoji"]');
        if (tabEmoji) tabEmoji.textContent = dict.emojiTab;

        const labelUsername = document.querySelector("label[for='usernameField']");
        if (labelUsername) labelUsername.textContent = dict.username;
        if (usernameError) usernameError.textContent = dict.usernameErr;

        const labelStatus = document.querySelector("label[for='bioField']");
        if (labelStatus) labelStatus.textContent = dict.status;
        if (bioField) bioField.placeholder = dict.statusPlaceholder;
        const statusDesc = document.getElementById("statusDesc");
        if (statusDesc) statusDesc.textContent = dict.statusDesc;

        const presenceLabel = document.getElementById("presenceLabel");
        if (presenceLabel) presenceLabel.textContent = dict.presence;

        const presenceTexts = document.querySelectorAll(".presence-text");
        if (presenceTexts[0]) presenceTexts[0].textContent = dict.online;
        if (presenceTexts[1]) presenceTexts[1].textContent = dict.away;
        if (presenceTexts[2]) presenceTexts[2].textContent = dict.dnd;

        const appearanceLabel = document.getElementById("appearanceLabel");
        if (appearanceLabel) appearanceLabel.textContent = dict.appearance;
        const themeTitle = document.getElementById("themeTitle");
        if (themeTitle) themeTitle.textContent = dict.theme;

        const saveBtn = document.getElementById("saveBtn");
        if (saveBtn) saveBtn.textContent = dict.saveChanges;

        renderTheme();
    }

    /* Listen for language change in other tabs */
    window.addEventListener("storage", (e) => {
        if (e.key === "zchat_lang") {
            applyLanguage();
        }
    });

    const AVATAR_COLORS = ["#3B3B3B", "#333333", "#2E2E2E", "#363636", "#303030", "#3A3A3A", "#7F96FF", "#5170FF", "#31D07C", "#F5A623", "#EF4444", "#8C6CF0"];
    const EMOJIS = ["😀", "😎", "🤖", "🐱", "🐼", "🦊", "🦁", "🐸", "🌟", "🔥", "🎧", "🎮", "🍜", "🚀", "🌈", "🌸", "⚡", "🧠"];

    function initials(name) {
        return (name || "")
            .split(" ")
            .filter(Boolean)
            .slice(0, 2)
            .map((n) => n[0].toUpperCase())
            .join("");
    }

    function colorFor(seed) {
        let hash = 0;
        for (let i = 0; i < seed.length; i++) hash = seed.charCodeAt(i) + ((hash << 5) - hash);
        return AVATAR_COLORS[Math.abs(hash) % AVATAR_COLORS.length];
    }

    function icons() {
        if (window.lucide) window.lucide.createIcons();
    }

    /* ============ GUARD: no account yet ============ */
    const savedUsername = localStorage.getItem("zchat_username");
    if (!savedUsername) {
        window.location.href = "index.html";
        return;
    }

    /* ============ LOAD SAVED STATE ============ */
    const saved = {
        username: savedUsername,
        bio: localStorage.getItem("zchat_bio") || "Available",
        presence: localStorage.getItem("zchat_presence") || "online",
        avatarType: localStorage.getItem("zchat_avatar_type") || "initials",
        avatarColor: localStorage.getItem("zchat_avatar_color") || colorFor(savedUsername),
        avatarEmoji: localStorage.getItem("zchat_avatar_emoji") || "😀",
        theme: localStorage.getItem("zchat_theme") || "dark",
    };

    const draft = Object.assign({}, saved);

    /* ============ DOM REFS ============ */
    const usernameField = document.getElementById("usernameField");
    const usernamePreview = document.getElementById("usernamePreview");
    const usernameError = document.getElementById("usernameError");
    const bioField = document.getElementById("bioField");

    const avatarPreview = document.getElementById("avatarPreview");
    const presenceDotPreview = document.getElementById("presenceDotPreview");
    const changeAvatarBtn = document.getElementById("changeAvatarBtn");
    const avatarPopover = document.getElementById("avatarPopover");
    const colorSwatches = document.getElementById("colorSwatches");
    const emojiSwatches = document.getElementById("emojiSwatches");

    const presenceBtns = document.querySelectorAll(".presence-btn");

    const themeSwitch = document.getElementById("themeSwitch");
    const themeIcon = document.getElementById("themeIcon");
    const themeLabel = document.getElementById("themeLabel");

    const form = document.getElementById("profileForm");
    const toast = document.getElementById("toast");
    const toastMsg = document.getElementById("toastMsg");

    const PRESENCE_COLORS = { online: "var(--online)", away: "var(--away)", dnd: "var(--dnd)" };

    /* ============ RENDER ============ */
    function renderAvatarPreview() {
        avatarPreview.style.backgroundColor = draft.avatarType === "emoji" ? "var(--elevated2)" : draft.avatarColor;
        avatarPreview.textContent = draft.avatarType === "emoji" ? draft.avatarEmoji : initials(draft.username || savedUsername);
        presenceDotPreview.style.backgroundColor = PRESENCE_COLORS[draft.presence] || PRESENCE_COLORS.online;
    }

    function renderPresenceButtons() {
        presenceBtns.forEach((btn) => {
            const active = btn.dataset.presence === draft.presence;
            btn.setAttribute("aria-pressed", String(active));
        });
    }

    function renderUsernamePreview() {
        const name = usernameField.value.trim() || savedUsername;
        usernamePreview.textContent = "@" + name.toLowerCase().replace(/\s+/g, "");
    }

    function renderTheme() {
        document.documentElement.setAttribute("data-theme", draft.theme);
        const isLight = draft.theme === "light";
        const lang = localStorage.getItem("zchat_lang") || "en";
        const dict = i18n[lang] || i18n.en;

        themeSwitch.setAttribute("aria-checked", String(isLight));
        themeSwitch.dataset.on = String(isLight);
        themeSwitch.querySelector(".switch-thumb").style.transform = isLight ? "translateX(20px)" : "translateX(0)";
        themeIcon.setAttribute("data-lucide", isLight ? "sun" : "moon");
        themeLabel.textContent = isLight ? dict.lightMode : dict.darkMode;
        icons();
    }

    function buildColorSwatches() {
        colorSwatches.innerHTML = AVATAR_COLORS.map((c) => `
      <button type="button" class="color-swatch h-8 w-8 rounded-full transition-transform hover:scale-110" data-color="${c}" style="background-color:${c}"></button>
    `).join("");
        colorSwatches.querySelectorAll(".color-swatch").forEach((btn) => {
            btn.addEventListener("click", () => {
                draft.avatarType = "initials";
                draft.avatarColor = btn.dataset.color;
                renderAvatarPreview();
                avatarPopover.classList.add("hidden");
            });
        });
    }

    function buildEmojiSwatches() {
        emojiSwatches.innerHTML = EMOJIS.map((e) => `
      <button type="button" class="emoji-swatch text-lg p-1.5 rounded-lg transition-colors" data-emoji="${e}">${e}</button>
    `).join("");
        emojiSwatches.querySelectorAll(".emoji-swatch").forEach((btn) => {
            btn.addEventListener("mouseover", () => (btn.style.backgroundColor = "var(--elevated2)"));
            btn.addEventListener("mouseout", () => (btn.style.backgroundColor = "transparent"));
            btn.addEventListener("click", () => {
                draft.avatarType = "emoji";
                draft.avatarEmoji = btn.dataset.emoji;
                renderAvatarPreview();
                avatarPopover.classList.add("hidden");
            });
        });
    }

    /* ============ INIT FORM VALUES ============ */
    usernameField.value = saved.username;
    bioField.value = saved.bio;
    buildColorSwatches();
    buildEmojiSwatches();
    renderAvatarPreview();
    renderPresenceButtons();
    renderUsernamePreview();
    applyLanguage();

    /* ============ EVENTS ============ */
    usernameField.addEventListener("input", () => {
        draft.username = usernameField.value;
        renderUsernamePreview();
        renderAvatarPreview();
        if (usernameField.value.trim()) usernameError.classList.add("hidden");
    });

    bioField.addEventListener("input", () => {
        draft.bio = bioField.value;
    });

    changeAvatarBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        avatarPopover.classList.toggle("hidden");
    });
    document.addEventListener("click", (e) => {
        if (!avatarPopover.contains(e.target) && e.target !== changeAvatarBtn) {
            avatarPopover.classList.add("hidden");
        }
    });

    document.querySelectorAll(".avatar-tab").forEach((tab) => {
        tab.addEventListener("click", () => {
            document.querySelectorAll(".avatar-tab").forEach((t) => {
                t.style.backgroundColor = "transparent";
                t.style.color = "var(--muted)";
            });
            tab.style.backgroundColor = "var(--ink)";
            tab.style.color = "var(--bubble-sent-text)";
            const isColor = tab.dataset.avatarTab === "color";
            colorSwatches.classList.toggle("hidden", !isColor);
            emojiSwatches.classList.toggle("hidden", isColor);
        });
    });
    document.querySelector('.avatar-tab[data-avatar-tab="' + (saved.avatarType === "emoji" ? "emoji" : "color") + '"]').click();

    presenceBtns.forEach((btn) => {
        btn.addEventListener("click", () => {
            draft.presence = btn.dataset.presence;
            renderPresenceButtons();
            renderAvatarPreview();
        });
    });

    themeSwitch.addEventListener("click", () => {
        draft.theme = draft.theme === "light" ? "dark" : "light";
        renderTheme();
    });

    let toastTimeout = null;
    function showToast(message) {
        toastMsg.textContent = message;
        toast.classList.remove("opacity-0", "translate-y-4", "pointer-events-none");
        toast.classList.add("opacity-100", "translate-y-0");
        icons();

        if (toastTimeout) clearTimeout(toastTimeout);

        toastTimeout = setTimeout(() => {
            toast.classList.remove("opacity-100", "translate-y-0");
            toast.classList.add("opacity-0", "translate-y-4", "pointer-events-none");
        }, 3000);
    }

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const name = usernameField.value.trim();
        if (!name) {
            usernameError.classList.remove("hidden");
            usernameField.focus();
            return;
        }

        localStorage.setItem("zchat_username", name);
        localStorage.setItem("zchat_bio", bioField.value.trim() || "Available");
        localStorage.setItem("zchat_presence", draft.presence);
        localStorage.setItem("zchat_avatar_type", draft.avatarType);
        localStorage.setItem("zchat_avatar_color", draft.avatarColor);
        localStorage.setItem("zchat_avatar_emoji", draft.avatarEmoji);
        localStorage.setItem("zchat_theme", draft.theme);

        saved.username = name;
        const lang = localStorage.getItem("zchat_lang") || "en";
        const dict = i18n[lang] || i18n.en;
        showToast(dict.successToast);
    });

    icons();
})();