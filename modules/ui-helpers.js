/* ============================================================
 * 05-ui-helpers.js
 * Modal xác nhận, icon lucide, image lightbox, đồng bộ avatar/theme local. Phụ thuộc: 03, 04.
 * ============================================================ */
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