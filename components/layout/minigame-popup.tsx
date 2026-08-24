"use client";

import { useEffect, useState } from "react";
import { X } from "lucide-react";

const FB_URL =
  "https://www.facebook.com/nhansushihanoi/posts/pfbid02RRqnj9D9Ryk7GAxjrTmSEr5pGkrH1YpZNjJsv72APnrwj7ZrXEQye386PoMUQ8Xgl";

export function MiniGamePopup() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 5000);
    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="minigame-backdrop"
        onClick={() => setVisible(false)}
        aria-hidden="true"
      />

      {/* Modal */}
      <div
        className="minigame-modal"
        role="dialog"
        aria-modal="true"
        aria-label="Minigame Ngôi Vương Đông Nam Á"
      >
        {/* Close button */}
        <button
          className="minigame-close"
          onClick={() => setVisible(false)}
          aria-label="Đóng popup"
        >
          <X size={18} strokeWidth={2.5} />
        </button>

        {/* Responsive poster — browser picks the best source automatically */}
        <div className="minigame-image-wrapper">
          <picture>
            {/* Desktop / PC: landscape 1200×628 */}
            <source
              media="(min-width: 1280px)"
              srcSet="/images/minigame-desktop.jpg"
              width={1200}
              height={628}
            />
            {/* Tablet / medium screens: portrait 1200×1500 */}
            <source
              media="(min-width: 768px)"
              srcSet="/images/minigame-tablet.jpg"
              width={1200}
              height={1500}
            />
            {/* Mobile default: tall portrait 900×1600 */}
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
    </>
  );
}
