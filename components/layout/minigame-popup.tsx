"use client";

import { useEffect, useRef, useState } from "react";
import { X, Volume2, VolumeX, Phone } from "lucide-react";
import Image from "next/image";

const VIDEO_ID = "llcQu-XB6oE";

const HOTLINE_TEL = "tel:0358290290";
const ZALO_URL = "https://zalo.me/1545361812272842393";

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

  const playerRef = useRef<YTPlayer | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  /* ── Load YouTube IFrame API once ────────────────────────────────── */
  useEffect(() => {
    // If already loaded, flag immediately
    if (window.YT?.Player) {
      setYtReady(true);
      return;
    }

    // Chain onto any existing callback
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
    if (playerRef.current) return; // already created

    playerRef.current = new window.YT.Player(containerRef.current, {
      videoId: VIDEO_ID,
      playerVars: {
        autoplay: 1,
        mute: 1, // start muted (required for autoplay policy)
        controls: 0,
        disablekb: 1,
        loop: 1,
        playlist: VIDEO_ID,
        rel: 0,
        modestbranding: 1,
      },
      events: {
        onReady: (e) => {
          e.target.playVideo();
          // Attempt to unmute after video starts playing (user may have interacted)
          setTimeout(() => {
            try {
              e.target.unMute();
              e.target.setVolume(60);
              setSoundOn(true);
            } catch {
              // Still muted — user can click the 🔊 button to unmute
              setSoundOn(false);
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

  /* ── Handlers ────────────────────────────────────────────────────── */
  const handleClose = () => {
    playerRef.current?.pauseVideo();
    playerRef.current?.destroy();
    playerRef.current = null;
    setSoundOn(false);
    setVisible(false);
  };

  const toggleSound = () => {
    if (!playerRef.current) return;
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
      >
        {/* Hidden YouTube player — must NOT be display:none for API to work */}
        <div
          ref={containerRef}
          style={{
            position: "absolute",
            width: "1px",
            height: "1px",
            opacity: 0,
            pointerEvents: "none",
            overflow: "hidden",
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
                alt="Sax, Sushi & Her – Nhan Sushi Hanoi"
                width={900}
                height={1600}
                className="minigame-image"
                loading="eager"
                fetchPriority="high"
              />
            </picture>
          </div>

          {/* Mobile CTA (chỉ hiện trên màn hình < 768px): 2 nút stack ~50% width bo tròn */}
          <div className="minigame-actions-mobile">
            {/* Nút 1: Đặt bàn ngay trỏ tới Hotline */}
            <a
              href={HOTLINE_TEL}
              className="minigame-cta-mobile minigame-cta-mobile-call"
              id="minigame-cta-mobile-call-btn"
            >
              <Phone size={14} strokeWidth={2.5} className="shrink-0" />
              <span>Đặt bàn ngay</span>
            </a>

            {/* Nút 2: Tư vấn thêm trỏ tới Zalo OA */}
            <a
              href={ZALO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="minigame-cta-mobile minigame-cta-mobile-zalo"
              id="minigame-cta-mobile-zalo-btn"
            >
              <Image
                src="/images/Logo-Zalo-Arc.webp"
                alt="Zalo"
                width={18}
                height={18}
                className="w-4 h-4 object-contain shrink-0 rounded-sm"
              />
              <span>Tư vấn thêm</span>
            </a>
          </div>

          {/* Desktop & Tablet CTA (màn hình >= 768px): DUY NHẤT 1 NÚT 100% FULL WIDTH TRỎ VỀ ZALO OA */}
          <a
            href={ZALO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="minigame-cta-desktop"
            id="minigame-cta-desktop-btn"
          >
            <Image
              src="/images/Logo-Zalo-Arc.webp"
              alt="Zalo"
              width={30}
              height={30}
              className="w-7 h-7 sm:w-8 sm:h-8 object-contain shrink-0 rounded-md"
            />
            <span>Đặt bàn ngay</span>
          </a>
        </div>
      </div>
    </>
  );
}
