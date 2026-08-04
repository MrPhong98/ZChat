/**
 * Z-Chat WebRTC 1-1 Video Call client
 * ------------------------------------
 * Phụ thuộc: socket.io client (CDN), lucide (optional icons)
 * Cấu hình: window.ZCHAT_SIGNAL_URL (mặc định http://localhost:5000)
 *
 * API public:
 *   ZChatCall.init()
 *   ZChatCall.startCall(targetUsername)
 *   ZChatCall.register(username)  // gọi sau login
 */
(function () {
    "use strict";

    const SIGNAL_URL =
        window.ZCHAT_SIGNAL_URL ||
        localStorage.getItem("zchat_signal_url") ||
        "http://localhost:5000";

    const ICE_SERVERS = {
        iceServers: [
            { urls: "stun:stun.l.google.com:19302" },
            { urls: "stun:stun1.l.google.com:19302" },
        ],
    };

    let socket = null;
    let pc = null;
    let localStream = null;
    let remoteStream = null;
    let myUsername = "";
    let peerUsername = "";
    let isCaller = false;
    let callActive = false;
    let pendingOffer = null;
    let micEnabled = true;
    let camEnabled = true;

    /* ---------- DOM helpers ---------- */
    function $(id) {
        return document.getElementById(id);
    }

    function icons() {
        if (window.lucide && typeof window.lucide.createIcons === "function") {
            window.lucide.createIcons();
        }
    }

    function show(el) {
        if (el) el.classList.remove("hidden");
    }
    function hide(el) {
        if (el) el.classList.add("hidden");
    }

    function setStatus(text) {
        const el = $("zcCallStatus");
        if (el) el.textContent = text || "";
        document.querySelectorAll(".zc-incall-status").forEach((n) => {
            n.textContent = text || "";
        });
    }

    function peerInitials(name) {
        return (name || "?")
            .split(" ")
            .filter(Boolean)
            .slice(0, 2)
            .map((s) => s[0].toUpperCase())
            .join("") || "?";
    }

    function setPeerName(name) {
        const label = name || "Unknown";
        const ini = peerInitials(name);
        const el = $("zcCallPeerName");
        if (el) el.textContent = label;
        const av = $("zcCallPeerAvatar");
        if (av) av.textContent = ini;
        document.querySelectorAll(".zc-incoming-name, .zc-incall-name").forEach((n) => {
            n.textContent = label;
        });
        document.querySelectorAll(".zc-incoming-avatar").forEach((n) => {
            n.textContent = ini;
        });
        document.querySelectorAll(".zc-incall-status").forEach((n) => {
            /* giữ nguyên, status set riêng */
        });
    }

    /* ---------- Media / PeerConnection ---------- */
    async function getMedia(video) {
        if (localStream) return localStream;
        localStream = await navigator.mediaDevices.getUserMedia({
            audio: true,
            video: video
                ? { facingMode: "user", width: { ideal: 1280 }, height: { ideal: 720 } }
                : false,
        });
        const localVideo = $("zcLocalVideo");
        if (localVideo) {
            localVideo.srcObject = localStream;
            localVideo.muted = true;
            localVideo.playsInline = true;
            localVideo.play().catch(() => {});
        }
        return localStream;
    }

    function stopMedia() {
        if (localStream) {
            localStream.getTracks().forEach((t) => t.stop());
            localStream = null;
        }
        const localVideo = $("zcLocalVideo");
        if (localVideo) localVideo.srcObject = null;
        const remoteVideo = $("zcRemoteVideo");
        if (remoteVideo) remoteVideo.srcObject = null;
        remoteStream = null;
    }

    function createPeerConnection() {
        if (pc) {
            try {
                pc.close();
            } catch (_) {}
        }
        pc = new RTCPeerConnection(ICE_SERVERS);

        pc.onicecandidate = (ev) => {
            if (ev.candidate && socket && peerUsername) {
                socket.emit("ice_candidate", {
                    to: peerUsername,
                    from: myUsername,
                    candidate: ev.candidate,
                });
            }
        };

        pc.ontrack = (ev) => {
            if (!remoteStream) remoteStream = new MediaStream();
            remoteStream.addTrack(ev.track);
            const remoteVideo = $("zcRemoteVideo");
            if (remoteVideo) {
                remoteVideo.srcObject = remoteStream;
                remoteVideo.playsInline = true;
                remoteVideo.play().catch(() => {});
            }
        };

        pc.onconnectionstatechange = () => {
            const st = pc && pc.connectionState;
            if (st === "connected") {
                setStatus("Connected");
                showInCallUI();
            } else if (st === "failed" || st === "disconnected" || st === "closed") {
                if (callActive) cleanupCall(false);
            }
        };

        return pc;
    }

    async function attachLocalTracks(video) {
        const stream = await getMedia(video);
        stream.getTracks().forEach((track) => {
            if (pc) pc.addTrack(track, stream);
        });
    }

    /* ---------- UI states ---------- */
    function showOutgoingUI(name) {
        hide($("zcIncomingPanel"));
        hide($("zcInCallPanel"));
        show($("zcOutgoingPanel"));
        show($("zcCallModal"));
        setPeerName(name);
        setStatus("Calling...");
        icons();
    }

    function showIncomingUI(name) {
        hide($("zcOutgoingPanel"));
        hide($("zcInCallPanel"));
        show($("zcIncomingPanel"));
        show($("zcCallModal"));
        setPeerName(name);
        setStatus("Incoming video call");
        icons();
    }

    function showInCallUI() {
        hide($("zcOutgoingPanel"));
        hide($("zcIncomingPanel"));
        show($("zcInCallPanel"));
        show($("zcCallModal"));
        setStatus("In call");
        icons();
    }

    function hideAllCallUI() {
        hide($("zcCallModal"));
        hide($("zcOutgoingPanel"));
        hide($("zcIncomingPanel"));
        hide($("zcInCallPanel"));
        setStatus("");
    }

    /* ---------- Call lifecycle ---------- */
    function cleanupCall(notifyPeer) {
        const peer = peerUsername;
        callActive = false;
        pendingOffer = null;
        isCaller = false;

        if (pc) {
            try {
                pc.close();
            } catch (_) {}
            pc = null;
        }
        stopMedia();
        micEnabled = true;
        camEnabled = true;
        updateMicCamButtons();
        hideAllCallUI();

        if (notifyPeer && peer && socket) {
            socket.emit("end_call", {
                to: peer,
                from: myUsername,
                reason: "hangup",
            });
        }
        peerUsername = "";
    }

    async function startCall(targetUsername) {
        const target = (targetUsername || "").trim();
        if (!target) return;
        if (!myUsername) {
            alert("Please sign in first.");
            return;
        }
        if (callActive) return;
        if (target.toLowerCase() === myUsername.toLowerCase()) {
            alert("You cannot call yourself.");
            return;
        }

        peerUsername = target;
        isCaller = true;
        callActive = true;
        showOutgoingUI(target);

        try {
            createPeerConnection();
            await attachLocalTracks(true);
            const offer = await pc.createOffer({
                offerToReceiveAudio: true,
                offerToReceiveVideo: true,
            });
            await pc.setLocalDescription(offer);

            socket.emit("call_user", {
                to: target,
                from: myUsername,
                offer: { type: offer.type, sdp: offer.sdp },
                callType: "video",
            });
        } catch (err) {
            console.error("[ZChatCall] startCall error:", err);
            alert("Could not access camera/mic. Check browser permissions.");
            cleanupCall(false);
        }
    }

    async function acceptCall() {
        if (!pendingOffer || !peerUsername) return;
        callActive = true;
        isCaller = false;
        showInCallUI();

        try {
            createPeerConnection();
            await attachLocalTracks(true);
            await pc.setRemoteDescription(new RTCSessionDescription(pendingOffer));
            const answer = await pc.createAnswer();
            await pc.setLocalDescription(answer);

            socket.emit("make_answer", {
                to: peerUsername,
                from: myUsername,
                answer: { type: answer.type, sdp: answer.sdp },
            });
            pendingOffer = null;
        } catch (err) {
            console.error("[ZChatCall] acceptCall error:", err);
            alert("Could not answer the call.");
            cleanupCall(true);
        }
    }

    function rejectCall() {
        if (peerUsername && socket) {
            socket.emit("end_call", {
                to: peerUsername,
                from: myUsername,
                reason: "reject",
            });
        }
        cleanupCall(false);
    }

    function cancelOutgoing() {
        if (peerUsername && socket) {
            socket.emit("end_call", {
                to: peerUsername,
                from: myUsername,
                reason: "cancel",
            });
        }
        cleanupCall(false);
    }

    function hangup() {
        cleanupCall(true);
    }

    function toggleMic() {
        if (!localStream) return;
        micEnabled = !micEnabled;
        localStream.getAudioTracks().forEach((t) => {
            t.enabled = micEnabled;
        });
        updateMicCamButtons();
    }

    function toggleCam() {
        if (!localStream) return;
        camEnabled = !camEnabled;
        localStream.getVideoTracks().forEach((t) => {
            t.enabled = camEnabled;
        });
        updateMicCamButtons();
    }

    function updateMicCamButtons() {
        const micBtn = $("zcBtnMute");
        const camBtn = $("zcBtnCam");
        if (micBtn) {
            micBtn.classList.toggle("zc-call-btn-off", !micEnabled);
            const icon = micBtn.querySelector("[data-lucide]");
            if (icon) icon.setAttribute("data-lucide", micEnabled ? "mic" : "mic-off");
        }
        if (camBtn) {
            camBtn.classList.toggle("zc-call-btn-off", !camEnabled);
            const icon = camBtn.querySelector("[data-lucide]");
            if (icon) icon.setAttribute("data-lucide", camEnabled ? "video" : "video-off");
        }
        icons();
    }

    /* ---------- Socket ---------- */
    function connectSocket() {
        if (typeof io === "undefined") {
            console.error("[ZChatCall] socket.io client chưa load (cdn).");
            return;
        }
        if (socket) return;

        socket = io(SIGNAL_URL, {
            transports: ["websocket", "polling"],
            reconnection: true,
            reconnectionAttempts: 10,
        });

        socket.on("connect", () => {
            console.log("[ZChatCall] socket connected", SIGNAL_URL);
            if (myUsername) {
                socket.emit("register", { username: myUsername });
            }
        });

        socket.on("registered", (payload) => {
            console.log("[ZChatCall] registered", payload);
        });

        socket.on("incoming_call", async (payload) => {
            if (callActive) {
                // Đang bận → từ chối
                socket.emit("end_call", {
                    to: payload.from,
                    from: myUsername,
                    reason: "reject",
                });
                return;
            }
            peerUsername = payload.from;
            pendingOffer = payload.offer;
            callActive = true;
            isCaller = false;
            showIncomingUI(payload.from);
        });

        socket.on("call_answered", async (payload) => {
            if (!pc || !isCaller) return;
            try {
                await pc.setRemoteDescription(
                    new RTCSessionDescription(payload.answer)
                );
                setStatus("Connected");
                showInCallUI();
            } catch (err) {
                console.error("[ZChatCall] setRemoteDescription answer:", err);
                cleanupCall(true);
            }
        });

        socket.on("ice_candidate", async (payload) => {
            if (!pc || !payload.candidate) return;
            try {
                await pc.addIceCandidate(new RTCIceCandidate(payload.candidate));
            } catch (err) {
                console.warn("[ZChatCall] addIceCandidate:", err);
            }
        });

        socket.on("call_ended", () => {
            cleanupCall(false);
        });

        socket.on("call_error", (payload) => {
            console.warn("[ZChatCall] call_error", payload);
            const msg =
                payload && payload.message === "user_offline"
                    ? "User is offline."
                    : (payload && payload.message) || "Lỗi cuộc gọi";
            alert(msg);
            cleanupCall(false);
        });

        socket.on("disconnect", () => {
            console.log("[ZChatCall] socket disconnected");
        });
    }

    function register(username) {
        myUsername = (username || localStorage.getItem("zchat_username") || "").trim();
        if (!myUsername) return;
        connectSocket();
        if (socket && socket.connected) {
            socket.emit("register", { username: myUsername });
        }
    }

    function bindUI() {
        const accept = $("zcBtnAccept");
        const reject = $("zcBtnReject");
        const cancel = $("zcBtnCancel");
        const hang = $("zcBtnHangup");
        const mute = $("zcBtnMute");
        const cam = $("zcBtnCam");

        if (accept) accept.onclick = () => acceptCall();
        if (reject) reject.onclick = () => rejectCall();
        if (cancel) cancel.onclick = () => cancelOutgoing();
        if (hang) hang.onclick = () => hangup();
        if (mute) mute.onclick = () => toggleMic();
        if (cam) cam.onclick = () => toggleCam();

        // Nút video trên header chat
        const videoBtn = document.querySelector('button[aria-label="Video call"]');
        if (videoBtn && !videoBtn.dataset.zchatCallBound) {
            videoBtn.dataset.zchatCallBound = "1";
            videoBtn.addEventListener("click", () => {
                // Lấy tên đối phương từ header
                const nameEl = document.getElementById("chatHeaderName");
                const peer = nameEl ? nameEl.textContent.trim() : "";
                if (!peer || peer === "Saved Messages") {
                    alert("Open a chat with a friend to start a video call.");
                    return;
                }
                startCall(peer);
            });
        }
    }

    function init() {
        myUsername = (localStorage.getItem("zchat_username") || "").trim();
        bindUI();
        if (myUsername) register(myUsername);

        // Đồng bộ khi main.js gọi enterApp
        const prev = window.zchatEnterApp;
        window.zchatEnterApp = function (username) {
            if (typeof prev === "function") prev(username);
            register(username);
        };
    }

    // Public API
    window.ZChatCall = {
        init,
        register,
        startCall,
        hangup,
        acceptCall,
        rejectCall,
    };

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", init);
    } else {
        init();
    }
})();
