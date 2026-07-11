"use client"

import type React from "react"

import { useState } from "react"
import { ChevronLeft, ChevronRight, X, ZoomIn } from "lucide-react"

interface MenuPage {
  src: string
  alt: string
  pageNumber?: number
}

interface MenuPageGalleryProps {
  pages: MenuPage[]
  title?: string
}

export function MenuPageGallery({ pages, title }: MenuPageGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)

  const openLightbox = (index: number) => setSelectedIndex(index)
  const closeLightbox = () => setSelectedIndex(null)

  const goToPrevious = () => {
    if (selectedIndex !== null) {
      setSelectedIndex(selectedIndex === 0 ? pages.length - 1 : selectedIndex - 1)
    }
  }

  const goToNext = () => {
    if (selectedIndex !== null) {
      setSelectedIndex(selectedIndex === pages.length - 1 ? 0 : selectedIndex + 1)
    }
  }

  // Handle keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") closeLightbox()
    if (e.key === "ArrowLeft") goToPrevious()
    if (e.key === "ArrowRight") goToNext()
  }

  return (
    <>
      {/* Gallery Grid */}
      <div className="max-w-4xl mx-auto flex flex-col gap-4 md:gap-8 px-4 py-8">
        {pages.map((page, index) => (
          <div key={index} className="relative w-full cursor-pointer group overflow-hidden shadow-2xl" onClick={() => openLightbox(index)}>
            <div className="relative w-full">
              <img
                src={page.src || "/placeholder.svg"}
                alt={page.alt}
                className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-105"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ZoomIn className="w-12 h-12 text-white drop-shadow-lg" />
                </div>
              </div>
            </div>
            {page.pageNumber && (
              <div className="absolute bottom-4 right-4 bg-black/70 text-white/70 text-sm px-3 py-1 rounded">
                Trang {page.pageNumber}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {selectedIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
          onClick={closeLightbox}
          onKeyDown={handleKeyDown}
          tabIndex={0}
        >
          {/* Close button */}
          <button
            className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors z-10"
            onClick={closeLightbox}
          >
            <X className="w-8 h-8" />
          </button>

          {/* Navigation */}
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors z-10 p-2"
            onClick={(e) => {
              e.stopPropagation()
              goToPrevious()
            }}
          >
            <ChevronLeft className="w-10 h-10" />
          </button>

          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors z-10 p-2"
            onClick={(e) => {
              e.stopPropagation()
              goToNext()
            }}
          >
            <ChevronRight className="w-10 h-10" />
          </button>

          {/* Image */}
          <div className="max-w-[90vw] max-h-[90vh] relative" onClick={(e) => e.stopPropagation()}>
            <img
              src={pages[selectedIndex].src || "/placeholder.svg"}
              alt={pages[selectedIndex].alt}
              className="max-w-full max-h-[90vh] object-contain"
            />
          </div>

          {/* Page indicator */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/70 text-sm">
            {selectedIndex + 1} / {pages.length}
          </div>
        </div>
      )}
    </>
  )
}
