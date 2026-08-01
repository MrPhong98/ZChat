// Khai báo biến Supabase an toàn, tránh trùng biến
const SUPABASE_URL = "https://mttbznhwfedroiylqykc.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im10dGJ6bmh3ZmVkcm9peWxxeWtjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODU0NzkyMDIsImV4cCI6MjEwMTA1NTIwMn0.P7tsvdH-C3WThy81d3cWj0poQNANVsPmF4qVb1Bvruo";

if (typeof window.supabaseClient === "undefined") {
    window.supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
}
var supabase = window.supabaseClient;

/** Lưu session đồng bộ cho index / settings / profile */
function saveSession(user) {
    if (!user || !user.username) return;
    localStorage.setItem("zchat_username", user.username);
    if (user.recovery_password) {
        localStorage.setItem("zchat_recovery_password", user.recovery_password);
    }
    localStorage.setItem("zchat_user", JSON.stringify(user));
}

/** Vào app: ưu tiên hàm enterApp của main.js nếu đã load */
function enterChatApp(username) {
    if (typeof window.zchatEnterApp === "function") {
        window.zchatEnterApp(username);
        return;
    }
    document.getElementById("onboarding")?.classList.add("hidden");
    document.getElementById("recoveryModal")?.classList.add("hidden");
    const shell = document.getElementById("appShell");
    if (shell) {
        shell.classList.remove("hidden");
        shell.classList.add("md:flex");
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const onboardingForm = document.getElementById("onboardingForm");
    const loginForm = document.getElementById("loginForm");
    const usernameInput = document.getElementById("usernameInput");
    const loginUsernameInput = document.getElementById("loginUsernameInput");
    const loginRecoveryInput = document.getElementById("loginRecoveryInput");

    const switchToLoginBtn = document.getElementById("switchToLoginBtn");
    const switchToRegisterBtn = document.getElementById("switchToRegisterBtn");

    const recoveryModal = document.getElementById("recoveryModal");
    const recoveryPasswordDisplay = document.getElementById("recoveryPasswordDisplay");
    const copyRecoveryBtn = document.getElementById("copyRecoveryBtn");
    const recoveryContinueBtn = document.getElementById("recoveryContinueBtn");

    // Chuyển đổi View
    if (switchToLoginBtn) {
        switchToLoginBtn.addEventListener("click", () => {
            onboardingForm?.classList.add("hidden");
            loginForm?.classList.remove("hidden");
        });
    }
    if (switchToRegisterBtn) {
        switchToRegisterBtn.addEventListener("click", () => {
            loginForm?.classList.add("hidden");
            onboardingForm?.classList.remove("hidden");
        });
    }

    function generateRecoveryPassword() {
        const chars = "ABCDEFGHJKLMNPQRSTUVWXYZabcdefghjkmnpqrstuvwxyz23456789!@#$%&*";
        const part = (n) => {
            let s = "";
            for (let i = 0; i < n; i++) s += chars[Math.floor(Math.random() * chars.length)];
            return s;
        };
        return "zChat-" + part(4) + "-" + part(4);
    }

    // ĐĂNG KÝ
    if (onboardingForm) {
        onboardingForm.addEventListener("submit", async (e) => {
            e.preventDefault();
            e.stopImmediatePropagation();
            const username = usernameInput ? usernameInput.value.trim() : "";
            if (!username) {
                document.getElementById("usernameError")?.classList.remove("hidden");
                return;
            }
            document.getElementById("usernameError")?.classList.add("hidden");

            const recoveryPassword = generateRecoveryPassword();

            try {
                const { data, error } = await supabase
                    .from("users")
                    .insert([{ username: username, recovery_password: recoveryPassword }])
                    .select()
                    .maybeSingle();

                if (error) throw error;

                const user = data || { username, recovery_password: recoveryPassword };
                saveSession(user);

                if (recoveryPasswordDisplay) recoveryPasswordDisplay.textContent = recoveryPassword;
                if (recoveryModal) recoveryModal.classList.remove("hidden");
            } catch (err) {
                console.error("Lỗi Đăng ký:", err);
                const loginError = document.getElementById("usernameError");
                if (loginError) {
                    loginError.textContent = err.message || "Registration failed (username may already exist)";
                    loginError.classList.remove("hidden");
                }
            }
        }, true); // capture so it runs before main.js handler
    }

    // ĐĂNG NHẬP
    if (loginForm) {
        loginForm.addEventListener("submit", async (e) => {
            e.preventDefault();
            e.stopImmediatePropagation();
            const username = loginUsernameInput ? loginUsernameInput.value.trim() : "";
            const recoveryPassword = loginRecoveryInput ? loginRecoveryInput.value.trim() : "";
            const loginError = document.getElementById("loginError");

            if (!username || !recoveryPassword) {
                if (loginError) {
                    loginError.textContent = "Please enter username and recovery password.";
                    loginError.classList.remove("hidden");
                }
                return;
            }

            try {
                const { data, error } = await supabase
                    .from("users")
                    .select("*")
                    .eq("username", username)
                    .eq("recovery_password", recoveryPassword)
                    .maybeSingle();

                if (error) throw error;

                if (!data) {
                    if (loginError) {
                        loginError.textContent = "Invalid username or recovery password.";
                        loginError.classList.remove("hidden");
                    }
                    return;
                }

                if (loginError) loginError.classList.add("hidden");
                saveSession(data);
                enterChatApp(data.username);
            } catch (err) {
                console.error("Lỗi Đăng nhập:", err);
                if (loginError) {
                    loginError.textContent = "Server connection error.";
                    loginError.classList.remove("hidden");
                }
            }
        }, true);
    }

    // COPY recovery
    if (copyRecoveryBtn) {
        copyRecoveryBtn.addEventListener("click", async () => {
            const textToCopy = recoveryPasswordDisplay ? recoveryPasswordDisplay.textContent.trim() : "";
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
            const wrapper = document.getElementById("copyIconWrapper") || copyRecoveryBtn;
            const originalHTML = wrapper.innerHTML;
            wrapper.innerHTML = `
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
            `;
            setTimeout(() => { wrapper.innerHTML = originalHTML; }, 3000);
        });
    }

    // Continue after register
    if (recoveryContinueBtn) {
        recoveryContinueBtn.addEventListener("click", () => {
            const u = localStorage.getItem("zchat_username") || "";
            if (recoveryModal) recoveryModal.classList.add("hidden");
            enterChatApp(u);
        });
    }
});
