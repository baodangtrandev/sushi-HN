"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { X, Volume2, VolumeX } from "lucide-react";

const VIDEO_ID = "qQTeKUWNcyk";

const FB_URL =
  "https://www.facebook.com/nhansushihanoi/posts/pfbid02RRqnj9D9Ryk7GAxjrTmSEr5pGkrH1YpZNjJsv72APnrwj7ZrXEQye386PoMUQ8Xgl";

/* ── Minimal YT types (avoids installing @types/youtube) ─────────────── */
interface YTPlayer {
  playVideo: () => void;
  pauseVideo: () => void;
  unMute: () => void;
  mute: () => void;
  isMuted: () => boolean;
  setVolume: (v: number) => void;
  destroy: () => void;
}
interface YTPlayerOptions {
  videoId: string;
  playerVars?: Record<string, string | number>;
  events?: {
    onReady?: (e: { target: YTPlayer }) => void;
    onStateChange?: (e: { data: number; target: YTPlayer }) => void;
  };
}
declare global {
  interface Window {
    YT: {
      Player: new (el: HTMLElement, opts: YTPlayerOptions) => YTPlayer;
      PlayerState: Record<string, number>;
    };
    onYouTubeIframeAPIReady?: () => void;
  }
}

export function MiniGamePopup() {
  const [visible, setVisible] = useState(false);
  const [ytReady, setYtReady] = useState(false);
  const [soundOn, setSoundOn] = useState(false);

  const playerRef    = useRef<YTPlayer | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  // Track whether user has already triggered unmute via first tap
  const unmuteTriedRef = useRef(false);

  /* ── Load YouTube IFrame API once ────────────────────────────────── */
  useEffect(() => {
    if (window.YT?.Player) {
      setYtReady(true);
      return;
    }

    const prev = window.onYouTubeIframeAPIReady;
    window.onYouTubeIframeAPIReady = () => {
      setYtReady(true);
      if (typeof prev === "function") prev();
    };

    if (
      !document.querySelector(
        'script[src="https://www.youtube.com/iframe_api"]',
      )
    ) {
      const s = document.createElement("script");
      s.src = "https://www.youtube.com/iframe_api";
      s.async = true;
      document.head.appendChild(s);
    }
  }, []);

  /* ── Show popup after 5 s ────────────────────────────────────────── */
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 5000);
    return () => clearTimeout(t);
  }, []);

  /* ── Init / destroy player when popup & API are both ready ──────── */
  useEffect(() => {
    if (!visible || !ytReady || !containerRef.current) return;
    if (playerRef.current) return;

    playerRef.current = new window.YT.Player(containerRef.current, {
      videoId: VIDEO_ID,
      playerVars: {
        autoplay:       1,
        mute:           1,   // start muted — required by all browsers
        controls:       0,
        disablekb:      1,
        loop:           1,
        playlist:       VIDEO_ID,
        rel:            0,
        modestbranding: 1,
        playsinline:    1,   // ← CRITICAL for iOS Safari inline playback
      },
      events: {
        onReady: (e) => {
          e.target.playVideo();
          // Desktop: mousemove counts as interaction → unMute often succeeds
          // Mobile: no mousemove → likely blocked, unmuteTriedRef stays false
          setTimeout(() => {
            try {
              e.target.unMute();
              e.target.setVolume(60);
              // Verify browser actually unmuted (iOS returns false even after unMute)
              if (!e.target.isMuted()) {
                setSoundOn(true);
                unmuteTriedRef.current = true;
              }
            } catch {
              /* blocked — wait for first user touch */
            }
          }, 800);
        },
      },
    });

    return () => {
      playerRef.current?.destroy();
      playerRef.current = null;
    };
  }, [visible, ytReady]);

  /* ── Unmute on first user interaction with the popup ────────────── */
  // On mobile there is no mousemove. The first tap on any popup element
  // IS a valid user gesture — we use it to unmute automatically.
  const tryUnmuteOnFirstTouch = useCallback(() => {
    if (unmuteTriedRef.current || soundOn || !playerRef.current) return;
    try {
      playerRef.current.unMute();
      playerRef.current.setVolume(60);
      if (!playerRef.current.isMuted()) {
        setSoundOn(true);
      }
    } catch {
      /* noop */
    }
    // Mark as tried regardless — don't loop
    unmuteTriedRef.current = true;
  }, [soundOn]);

  /* ── Close handler ───────────────────────────────────────────────── */
  const handleClose = () => {
    playerRef.current?.pauseVideo();
    playerRef.current?.destroy();
    playerRef.current = null;
    setSoundOn(false);
    unmuteTriedRef.current = false;
    setVisible(false);
  };

  /* ── Sound toggle ────────────────────────────────────────────────── */
  const toggleSound = () => {
    if (!playerRef.current) return;
    unmuteTriedRef.current = true; // explicit user intent
    if (soundOn) {
      playerRef.current.mute();
      setSoundOn(false);
    } else {
      playerRef.current.unMute();
      playerRef.current.setVolume(60);
      setSoundOn(true);
    }
  };

  if (!visible) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="minigame-backdrop"
        onClick={handleClose}
        aria-hidden="true"
      />

      {/* Modal */}
      <div
        className="minigame-modal"
        role="dialog"
        aria-modal="true"
        aria-label="Minigame Ngôi Vương Đông Nam Á"
        // First touch on modal outer → attempt unmute (mobile fix)
        onTouchStart={tryUnmuteOnFirstTouch}
        onClick={tryUnmuteOnFirstTouch}
      >
        {/* Hidden YouTube player — must NOT be display:none for API to work */}
        <div
          ref={containerRef}
          style={{
            position:      "absolute",
            width:         "1px",
            height:        "1px",
            opacity:       0,
            pointerEvents: "none",
            overflow:      "hidden",
          }}
          aria-hidden="true"
        />

        <div className="minigame-modal-inner">
          {/* ✕ Close — top right */}
          <button
            className="minigame-close"
            onClick={handleClose}
            aria-label="Đóng popup"
          >
            <X size={18} strokeWidth={2.5} />
          </button>

          {/* 🔊 Sound — top left */}
          <button
            className="minigame-sound"
            onClick={toggleSound}
            aria-label={soundOn ? "Tắt nhạc" : "Bật nhạc"}
            title={soundOn ? "Tắt nhạc" : "Bật nhạc"}
          >
            {soundOn ? (
              <Volume2 size={15} strokeWidth={2} />
            ) : (
              <VolumeX size={15} strokeWidth={2} />
            )}
          </button>

          {/* Responsive poster */}
          <div className="minigame-image-wrapper">
            <picture>
              <source
                media="(min-width: 1280px)"
                srcSet="/images/minigame-desktop.jpg"
                width={1200}
                height={628}
              />
              <source
                media="(min-width: 768px)"
                srcSet="/images/minigame-tablet.jpg"
                width={1200}
                height={1500}
              />
              <img
                src="/images/minigame-mobile.jpg"
                alt="Minigame Ngôi Vương Đông Nam Á – Nhan Sushi Hanoi"
                width={900}
                height={1600}
                className="minigame-image"
                loading="eager"
                fetchPriority="high"
              />
            </picture>
          </div>

          {/* CTA */}
          <a
            href={FB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="minigame-cta"
            id="minigame-cta-btn"
          >
            Tham gia ngay
          </a>
        </div>
      </div>
    </>
  );
}
