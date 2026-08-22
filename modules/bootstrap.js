/* ============================================================
 * 22-bootstrap.js
 * Khởi động app: enterApp nếu đã đăng nhập, bật Realtime. PHẢI load SAU CÙNG.
 * ============================================================ */
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