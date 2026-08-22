/* ============================================================
 * 14-info-search.js
 * Drawer Contact Info + tìm kiếm trong đoạn chat. Phụ thuộc: 02, 03, 04, 12.
 * ============================================================ */
function openInfoDrawer() {
    infoDrawer.classList.remove("hidden");
    icons();
    const preview = document.getElementById("safetyNumberPreview");
    const chat = state.chats.find((c) => c.id === state.activeChatId);
    if (preview) {
        preview.textContent = (!chat || isSelfNotesChat(chat))
            ? "Not available" : "Tap to verify encryption";
    }
}
function closeInfoDrawer() {
    infoDrawer.classList.add("hidden");
    closeDisappearingMenu();
}


/* ============ SEARCH IN CONVERSATION ============ */
const searchInChatBtn = document.getElementById("searchInChatBtn");
const chatSearchPanel = document.getElementById("chatSearchPanel");
const chatSearchInput = document.getElementById("chatSearchInput");
const chatSearchStatus = document.getElementById("chatSearchStatus");
const chatSearchResults = document.getElementById("chatSearchResults");
const chatSearchClose = document.getElementById("chatSearchClose");
let chatSearchHits = [];

function plainBodyFromMsg(msg) {
    let text = (msg && msg.text) || "";
    try {
        if (typeof parseReply === "function") {
            const p = parseReply(text);
            text = p.body || text;
        }
    } catch (_) {}
    if (String(text).startsWith("[IMAGE]:")) return "Photo";
    return String(text);
}

function highlightQuery(text, q) {
    const safe = escapeHtml(text);
    if (!q) return safe;
    const re = new RegExp("(" + q.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") + ")", "ig");
    return safe.replace(re, "<mark>$1</mark>");
}

function shakeMessageEl(el) {
    if (!el) return;
    el.classList.remove("msg-reply-shake");
    void el.offsetWidth;
    el.classList.add("msg-reply-shake");
    setTimeout(() => el.classList.remove("msg-reply-shake"), 600);
}

function renderChatSearchResults(q) {
    if (!chatSearchResults) return;
    chatSearchResults.innerHTML = "";
    chatSearchHits.forEach((hit, idx) => {
        const btn = document.createElement("button");
        btn.type = "button";
        btn.className = "chat-search-item";
        btn.innerHTML =
            '<div class="chat-search-item-meta">' +
            '<span class="chat-search-item-who">' + escapeHtml(hit.who) + "</span>" +
            '<span class="chat-search-item-time">' + escapeHtml(hit.time) + "</span>" +
            "</div>" +
            '<div class="chat-search-item-text">' + highlightQuery(hit.preview, q) + "</div>";
        btn.addEventListener("click", () => jumpToChatSearchHit(idx));
        chatSearchResults.appendChild(btn);
    });
}

function jumpToChatSearchHit(idx) {
    const hit = chatSearchHits[idx];
    if (!hit) return;
    let el = document.getElementById("msg-" + hit.id);
    if (!el) {
        const chat = state.chats.find((c) => c.id === state.activeChatId);
        if (chat) renderMessages(chat);
        el = document.getElementById("msg-" + hit.id);
    }
    if (!el) return;
    // nhảy thẳng tới tin + lắc (không khoanh viền)
    el.scrollIntoView({ behavior: "auto", block: "center" });
    shakeMessageEl(el);
    if (chatSearchResults) {
        chatSearchResults.querySelectorAll(".chat-search-item").forEach((n, i) => {
            n.classList.toggle("is-active", i === idx);
        });
    }
}

function runChatSearch() {
    chatSearchHits = [];
    const qRaw = (chatSearchInput && chatSearchInput.value || "").trim();
    const q = qRaw.toLowerCase();
    if (!q) {
        if (chatSearchStatus) chatSearchStatus.textContent = "Type to search messages";
        if (chatSearchResults) chatSearchResults.innerHTML = "";
        return;
    }
    const chat = state.chats.find((c) => c.id === state.activeChatId);
    if (!chat) {
        if (chatSearchStatus) chatSearchStatus.textContent = "No active chat";
        if (chatSearchResults) chatSearchResults.innerHTML = "";
        return;
    }
    for (let i = chat.messages.length - 1; i >= 0; i--) {
        const msg = chat.messages[i];
        const body = plainBodyFromMsg(msg);
        if (!body.toLowerCase().includes(q)) continue;
        const who = msg.senderId === "me" ? "You" : (chat.participant && chat.participant.name) || "User";
        const time = typeof formatTimeShort === "function" ? formatTimeShort(msg.createdAt) : "";
        let preview = body.replace(/\s+/g, " ").trim();
        if (preview.length > 120) preview = preview.slice(0, 120) + "…";
        chatSearchHits.push({ id: msg.id, who: who, time: time, preview: preview });
    }
    if (!chatSearchHits.length) {
        if (chatSearchStatus) chatSearchStatus.textContent = 'No results for "' + qRaw + '"';
        if (chatSearchResults) chatSearchResults.innerHTML = "";
        return;
    }
    if (chatSearchStatus) {
        chatSearchStatus.textContent =
            chatSearchHits.length + (chatSearchHits.length === 1 ? " result" : " results") +
            " · tap a row to jump";
    }
    renderChatSearchResults(qRaw);
}

function openChatSearch() {
    if (!chatSearchPanel) return;
    chatSearchPanel.hidden = false;
    chatSearchPanel.classList.add("is-open");
    if (chatSearchInput) {
        chatSearchInput.value = "";
        chatSearchInput.focus();
    }
    chatSearchHits = [];
    if (chatSearchStatus) chatSearchStatus.textContent = "Type to search messages";
    if (chatSearchResults) chatSearchResults.innerHTML = "";
    if (window.lucide) window.lucide.createIcons();
}

function closeChatSearch() {
    if (!chatSearchPanel) return;
    chatSearchPanel.classList.remove("is-open");
    chatSearchPanel.hidden = true;
    chatSearchHits = [];
    if (chatSearchInput) chatSearchInput.value = "";
    if (chatSearchResults) chatSearchResults.innerHTML = "";
}

if (searchInChatBtn) {
    searchInChatBtn.addEventListener("click", () => {
        if (chatSearchPanel && chatSearchPanel.classList.contains("is-open")) closeChatSearch();
        else openChatSearch();
    });
}
if (chatSearchClose) chatSearchClose.addEventListener("click", closeChatSearch);
if (chatSearchInput) {
    chatSearchInput.addEventListener("input", runChatSearch);
    chatSearchInput.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
            e.preventDefault();
            closeChatSearch();
        }
    });
}


openInfoBtn.addEventListener("click", openInfoDrawer);
closeInfoBtn.addEventListener("click", closeInfoDrawer);