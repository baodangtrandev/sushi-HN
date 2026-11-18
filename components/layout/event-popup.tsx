"use client";

import { useEffect, useState } from "react";
import { X, Phone } from "lucide-react";
import Image from "next/image";

const HOTLINE_TEL = "tel:0358290290";
const ZALO_URL = "https://zalo.me/1545361812272842393";

export function EventPopup() {
  const [visible, setVisible] = useState(false);

  /* Show popup after 5 s */
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 5000);
    return () => clearTimeout(t);
  }, []);

  /* Close on Escape */
  useEffect(() => {
    if (!visible) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setVisible(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [visible]);

  if (!visible) return null;

  const handleClose = () => setVisible(false);

  return (
    <>
      {/* Backdrop */}
      <div
        className="event-popup-backdrop"
        onClick={handleClose}
        aria-hidden="true"
      />

      {/* Modal */}
      <div
        className="event-popup-modal"
        role="dialog"
        aria-modal="true"
        aria-label="The Nhan Sessions - Sushi, Sake & Sax"
      >
        <div className="event-popup-inner">
          <button
            className="event-popup-close"
            onClick={handleClose}
            aria-label="Đóng popup"
          >
            <X size={18} strokeWidth={2.5} />
          </button>

          <div className="event-popup-image-wrapper">
            {/* >=768px (laptop / desktop / tablet): 16:9 - <768px (mobile): 9:16 */}
            <picture>
              <source
                media="(min-width: 768px)"
                srcSet="/images/16_9.png"
                width={2679}
                height={1507}
              />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/9_16.png"
                alt="The Nhan Sessions - Sushi, Sake & Sax cùng Mr. Đức Trung - Nhan Sushi Hanoi"
                width={1894}
                height={3368}
                className="event-popup-image"
                loading="eager"
                fetchPriority="high"
              />
            </picture>

            {/* CTA overlay - đặt vào vùng trống của từng ảnh */}
            <div className="event-popup-actions">
              <a
                href={HOTLINE_TEL}
                className="event-popup-cta"
                id="event-popup-call-btn"
              >
                <Phone size={14} strokeWidth={2.5} className="shrink-0" />
                <span>Đặt bàn ngay</span>
              </a>
              <a
                href={ZALO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="event-popup-cta"
                id="event-popup-zalo-btn"
              >
                <Image
                  src="/images/Logo-Zalo-Arc.webp"
                  alt="Zalo"
                  width={20}
                  height={20}
                  className="event-popup-cta-icon"
                />
                <span>Tư vấn thêm</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
