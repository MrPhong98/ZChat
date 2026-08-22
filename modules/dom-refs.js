/* ============================================================
 * 04-dom-refs.js
 * Toàn bộ document.getElementById(...) tham chiếu DOM dùng chung + vài biến trạng thái UI (editingMsgId, replyingMsgId).
 * ============================================================ */
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