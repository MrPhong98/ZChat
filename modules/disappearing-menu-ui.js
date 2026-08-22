/* ============================================================
 * 16-disappearing-menu-ui.js
 * Dropdown chọn thời gian tự xoá tin nhắn. Phụ thuộc: 04, 13.
 * ============================================================ */
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