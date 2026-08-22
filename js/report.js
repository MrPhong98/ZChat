(function () {
    "use strict";

    const theme = localStorage.getItem("zchat_theme") || "dark";
    document.documentElement.setAttribute("data-theme", theme === "light" ? "light" : "dark");

    // Avatar chữ cái nhỏ (giống profile nav)
    const name = (localStorage.getItem("zchat_username") || "?").trim();
    const initial = name ? name.charAt(0).toUpperCase() : "?";
    const av = document.getElementById("profileAvatar");
    if (av) {
        const url = localStorage.getItem("zchat_avatar_url") || "";
        const type = localStorage.getItem("zchat_avatar_type") || "initials";
        if (type === "photo" && url) {
            av.innerHTML = '<img src="' + url.replace(/"/g, "") + '" alt="" class="h-full w-full rounded-full object-cover" />';
        } else if (type === "emoji") {
            av.textContent = localStorage.getItem("zchat_avatar_emoji") || "😀";
            av.style.backgroundColor = "var(--elevated2)";
        } else {
            av.textContent = initial;
            av.style.backgroundColor = localStorage.getItem("zchat_avatar_color") || "var(--elevated)";
        }
    }

    if (window.lucide) window.lucide.createIcons();

    const frame = document.getElementById("tallyFrame");
    if (frame) {
        const src = frame.getAttribute("data-tally-src");
        if (src && !frame.getAttribute("src")) frame.setAttribute("src", src);
    }

    if (!window._tallyEmbedLoaded) {
        window._tallyEmbedLoaded = true;
        const s = document.createElement("script");
        s.src = "https://tally.so/widgets/embed.js";
        s.async = true;
        document.body.appendChild(s);
    }
})();
