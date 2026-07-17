"use client";

import { Phone } from "lucide-react";
import Image from "next/image";

/**
 * Floating action buttons that appear on every page.
 * Each button is wrapped in a container so that:
 *   - The pulse ring can overflow beyond the button boundary
 *   - The gentle bounce applies to the whole wrapper (no conflict with hover)
 *   - Hover scale/color works directly on the button
 */
export function FloatingActions() {
  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-50">
      {/* === Zalo Chat === */}
      <div
        className="relative w-12 h-12"
        style={{ animation: "gentleBounce 3s ease-in-out 2s infinite" }}
      >
        {/* Pulse ring - positioned outside button overflow */}
        <span
          className="absolute inset-0 rounded-full pointer-events-none"
          style={{
            backgroundColor: "#0068FF",
            animation: "pulseRing 2s ease-out infinite",
          }}
        />
        {/* Button */}
        <a
          href="https://zalo.me/1545361812272842393"
          target="_blank"
          rel="noopener noreferrer"
          className="group absolute inset-0 rounded-full flex items-center justify-center bg-blue-500 text-white shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-[#0068FF]/50"
          aria-label="Chat on Zalo"
        >
          <Image
            src="/images/Logo-Zalo-Arc.webp"
            alt="Zalo"
            width={48}
            height={48}
            className="w-full h-full object-contain p-2"
          />
          {/* Tooltip */}
          <span
            className="absolute right-full mr-3 px-3 py-1.5 text-white text-xs rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none shadow-lg"
            style={{ backgroundColor: "#0068FF" }}
          >
            Chat Zalo
          </span>
        </a>
      </div>

      {/* === Call to Book === */}
      <div
        className="relative w-12 h-12"
        style={{ animation: "gentleBounce 3s ease-in-out 2.5s infinite" }}
      >
        {/* Pulse ring */}
        <span
          className="absolute inset-0 rounded-full pointer-events-none"
          style={{
            backgroundColor: "var(--primary)",
            animation: "pulseRing 2s ease-out 1s infinite",
          }}
        />
        {/* Button */}
        <a
          href="tel:0358290290"
          className="group absolute inset-0 bg-primary rounded-full flex items-center justify-center text-white shadow-lg transition-all duration-300 hover:scale-110 hover:bg-primary/90 hover:shadow-primary/50"
          aria-label="Call to book"
        >
          <Phone className="w-5 h-5" />
          {/* Tooltip */}
          <span className="absolute right-full mr-3 px-3 py-1.5 bg-primary text-white text-xs rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none shadow-lg">
            035 829 0290
          </span>
        </a>
      </div>
    </div>
  );
}
