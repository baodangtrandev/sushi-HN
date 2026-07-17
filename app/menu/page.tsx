/* eslint-disable @next/next/no-img-element */
"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";

import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { ChevronUp } from "lucide-react";

// All menu categories with their pages
const menuSections = [
  {
    id: "lunch",
    title: "Set Lunch",
    titleEn: "SET LUNCH",
    pages: [
      { src: "/images/set_lunch-01.webp", alt: "Premium Lunch Set" },
      { src: "/images/set_lunch-02.webp", alt: "Sashimi & Sushi Lunch Sets" },
      { src: "/images/set_lunch-03.webp", alt: "Ranchi Setto Lunch Menu" },
      { src: "/images/set_lunch-04.webp", alt: "Premium Lunch Selections" },
      { src: "/images/set_lunch-05.webp", alt: "Salmon & Sashimi Lunch Sets" },
      {
        src: "/images/set_lunch-06.webp",
        alt: "Rice & Sashimi Lunch Combinations",
      },
      { src: "/images/set_lunch-07.webp", alt: "Tempura & Seafood Lunch Sets" },
      { src: "/images/set_lunch-08.webp", alt: "Grilled & Noodle Lunch Sets" },
      { src: "/images/set_lunch-09.webp", alt: "Complete Lunch Menu Sets" },
    ],
  },
  {
    id: "special",
    title: "Món Đặc Biệt",
    titleEn: "SPECIAL DISHES",
    pages: [
      { src: "/images/Menu_Nhan_2025-01.webp", alt: "Sea & Land Harmony" },
      { src: "/images/Menu_Nhan_2025-02.webp", alt: "Premium Sushi" },
      { src: "/images/Menu_Nhan_2025-03.webp", alt: "Fine Dining Seafood" },
      { src: "/images/Menu_Nhan_2025-04.webp", alt: "Grilled Specialties" },
      { src: "/images/Menu_Nhan_2025-05.webp", alt: "Mixed Dishes" },
      { src: "/images/Menu_Nhan_2025-06.webp", alt: "Fugu Specialties" },
      { src: "/images/Menu_Nhan_2025-07.webp", alt: "Wagyu Sashimi" },
      { src: "/images/Menu_Nhan_2025-08.webp", alt: "Wagyu Hot Pot" },
    ],
  },
  {
    id: "appetizer",
    title: "Khai Vị",
    titleEn: "APPETIZER",
    pages: [
      { src: "/images/Menu_Nhan_2025-09.webp", alt: "Appetizers" },
      { src: "/images/Menu_Nhan_2025-10.webp", alt: "Appetizers" },
    ],
  },
  {
    id: "salad",
    title: "Salad",
    titleEn: "FRESH SALADS",
    pages: [
      { src: "/images/Menu_Nhan_2025-11.webp", alt: "Fresh Salads" },
      { src: "/images/Menu_Nhan_2025-12.webp", alt: "Salad" },
    ],
  },
  {
    id: "sashimi",
    title: "Sashimi",
    titleEn: "SASHIMI STYLE",
    pages: [
      { src: "/images/Menu_Nhan_2025-13.webp", alt: "Sashimi" },
      { src: "/images/Menu_Nhan_2025-14.webp", alt: "Sashimi" },
      { src: "/images/Menu_Nhan_2025-15.webp", alt: "Sashimi" },
      { src: "/images/Menu_Nhan_2025-16.webp", alt: "Sashimi" },
      { src: "/images/Menu_Nhan_2025-17.webp", alt: "Sashimi" },
      { src: "/images/Menu_Nhan_2025-18.webp", alt: "Sashimi" },
      { src: "/images/Menu_Nhan_2025-19.webp", alt: "Sashimi" },
      { src: "/images/Menu_Nhan_2025-20.webp", alt: "Sashimi" },
      { src: "/images/Menu_Nhan_2025-21.webp", alt: "Salt-Grilled Fish" },
      { src: "/images/Menu_Nhan_2025-22.webp", alt: "Salt-Grilled Fish" },
      { src: "/images/Menu_Nhan_2025-23.webp", alt: "Salt-Grilled Fish" },
      { src: "/images/Menu_Nhan_2025-24.webp", alt: "Salt-Grilled Fish" },
    ],
  },
  {
    id: "grilled",
    title: "Món Nướng",
    titleEn: "GRILLED DISHES",
    pages: [
      { src: "/images/Menu_Nhan_2025-25.webp", alt: "Grilled Crab" },
      { src: "/images/Menu_Nhan_2025-26.webp", alt: "Grilled Squid" },
      { src: "/images/Menu_Nhan_2025-27.webp", alt: "Grilled Fish Head" },
      { src: "/images/Menu_Nhan_2025-28.webp", alt: "Grilled Beef" },
      { src: "/images/Menu_Nhan_2025-29.webp", alt: "Grilled Specialties" },
      { src: "/images/Menu_Nhan_2025-30.webp", alt: "Grilled Dishes" },
    ],
  },
  {
    id: "fried",
    title: "Món Chiên",
    titleEn: "DEEP-FRIED",
    pages: [
      { src: "/images/Menu_Nhan_2025-31.webp", alt: "Deep-Fried" },
      { src: "/images/Menu_Nhan_2025-32.webp", alt: "Deep-Fried" },
    ],
  },
  {
    id: "hot-dishes",
    title: "Món Nóng",
    titleEn: "HOT DISHES",
    pages: [
      { src: "/images/Menu_Nhan_2025-33.webp", alt: "Hot Dishes" },
      { src: "/images/Menu_Nhan_2025-34.webp", alt: "Chawanmushi" },
    ],
  },
  {
    id: "rice",
    title: "Cơm & Mì",
    titleEn: "RICE & NOODLES",
    pages: [
      { src: "/images/Menu_Nhan_2025-35.webp", alt: "Rice & Noodles" },
      { src: "/images/Menu_Nhan_2025-36.webp", alt: "Fried Rice" },
      { src: "/images/Menu_Nhan_2025-37.webp", alt: "Noodles" },
    ],
  },
  {
    id: "noodles",
    title: "Mì",
    titleEn: "NOODLE DISHES",
    pages: [{ src: "/images/Menu_Nhan_2025-38.webp", alt: "Udon & Ramen" }],
  },
  {
    id: "rolls",
    title: "Cơm Cuộn",
    titleEn: "SUSHI ROLLS",
    pages: [
      { src: "/images/Menu_Nhan_2025-39.webp", alt: "Sushi Rolls" },
      { src: "/images/Menu_Nhan_2025-40.webp", alt: "Sushi Rolls" },
      { src: "/images/Menu_Nhan_2025-41.webp", alt: "Sushi Rolls" },
      { src: "/images/Menu_Nhan_2025-42.webp", alt: "Sushi Rolls" },
    ],
  },
  {
    id: "nigiri",
    title: "Sushi",
    titleEn: "NIGIRI SUSHI",
    pages: [
      { src: "/images/Menu_Nhan_2025-43.webp", alt: "Nigiri Sushi" },
      { src: "/images/Menu_Nhan_2025-44.webp", alt: "Temaki & Sushi Sets" },
      { src: "/images/Menu_Nhan_2025-45.webp", alt: "Nigiri Selection" },
      { src: "/images/Menu_Nhan_2025-46.webp", alt: "Nigiri Selection" },
    ],
  },
  {
    id: "hotpot",
    title: "Lẩu",
    titleEn: "NABEMONO",
    pages: [
      { src: "/images/Menu_Nhan_2025-47.webp", alt: "Hot Pot" },
      { src: "/images/Menu_Nhan_2025-48.webp", alt: "Hot Pot & Nabemono" },
    ],
  },
  {
    id: "drinks",
    title: "Nước Uống",
    titleEn: "DRINKS & BEVERAGES",
    pages: [
      { src: "/images/menu_nuoc/page-2.webp", alt: "Drinks Menu Page 2" },
      { src: "/images/menu_nuoc/page-3.webp", alt: "Drinks Menu Page 3" },
      { src: "/images/menu_nuoc/page-4.webp", alt: "Drinks Menu Page 4" },
      { src: "/images/menu_nuoc/page-5.webp", alt: "Drinks Menu Page 5" },
      { src: "/images/menu_nuoc/page-6.webp", alt: "Drinks Menu Page 6" },
      { src: "/images/menu_nuoc/page-7.webp", alt: "Drinks Menu Page 7" },
      { src: "/images/menu_nuoc/page-8.webp", alt: "Drinks Menu Page 8" },
    ],
  },
];

export default function MenuPage() {
  const [activeSection, setActiveSection] = useState("lunch");
  const [showBackToTop, setShowBackToTop] = useState(false);
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  // Scroll spy - track which section is currently in view
  useEffect(() => {
    // Force scroll to top instantly without animation
    if (typeof window !== "undefined") {
      if ("scrollRestoration" in window.history) {
        window.history.scrollRestoration = "manual";
      }
      // Temporarily disable smooth scroll from CSS
      document.documentElement.style.scrollBehavior = "auto";
      window.scrollTo(0, 0);

      // Restore smooth scroll behavior for in-page navigation
      setTimeout(() => {
        document.documentElement.style.scrollBehavior = "smooth";
      }, 50);
    }

    const handleScroll = () => {
      // Offset for sticky navs (Header + Category Nav)
      // Mobile: 80 + 61 = 141, Tablet: 96 + 61 = 157, Desktop: 112 + 61 = 173
      // Use 180 as a safe offset to trigger active state correctly
      const scrollPosition = window.scrollY + 180;

      // Show/hide back to top button
      setShowBackToTop(window.scrollY > 500);

      // Find active section
      for (const section of menuSections) {
        const element = sectionRefs.current[section.id];
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to section
  const scrollToSection = (sectionId: string) => {
    const element = sectionRefs.current[sectionId];
    if (element) {
      // Determine offset based on screen width
      const isDesktop = window.innerWidth >= 1024;
      const isTablet = window.innerWidth >= 768;
      const offset = isDesktop ? 176 : isTablet ? 160 : 144;
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({ top: elementPosition, behavior: "smooth" });
    }
  };

  // Back to top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black" />
        <div className="relative z-10 text-center px-4">
          <p className="text-primary text-sm tracking-[0.3em] uppercase mb-4">
            Nhan Sushi Hanoi
          </p>
          <h1 className="font-serif text-4xl md:text-6xl font-light mb-4">
            Thực Đơn
          </h1>
          <p className="text-white/60 max-w-md mx-auto mb-3">
            Cuộn xuống để khám phá toàn bộ thực đơn
          </p>
          <p className="text-white/40 text-xs tracking-wide max-w-md mx-auto">
            Giá niêm yết chưa bao gồm VAT
          </p>
        </div>
      </section>

      {/* Sticky Category Navigation */}
      <nav className="sticky top-20 md:top-24 lg:top-28 z-40 bg-[#0a0a0a] border-y border-white/10">
        <div className="container mx-auto">
          <div className="overflow-x-auto scrollbar-hide px-4">
            <div className="flex min-w-max py-3 gap-1">
              {menuSections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={`px-4 py-2 text-sm whitespace-nowrap transition-all duration-300 rounded-full ${
                    activeSection === section.id
                      ? "bg-primary text-white"
                      : "text-white/60 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {section.title}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Menu Sections */}
      <main className="bg-black">
        {menuSections.map((section) => (
          <section
            key={section.id}
            id={section.id}
            ref={(el) => {
              sectionRefs.current[section.id] = el;
            }}
            className="scroll-mt-36 md:scroll-mt-40 lg:scroll-mt-44"
          >
            {/* Section Header */}
            <div className="sticky top-[141px] md:top-[157px] lg:top-[173px] z-30 bg-[#0a0a0a] border-b border-white/5">
              <div className="container mx-auto px-4 py-2.5">
                <div className="flex items-center gap-3">
                  <div className="w-[3px] h-7 bg-primary rounded-full" />
                  <div className="flex flex-col justify-center">
                    <h2 className="font-serif text-xl text-white leading-none mb-1">
                      {section.title}
                    </h2>
                    <p className="text-white/40 text-[10px] tracking-[0.2em] uppercase leading-none">
                      {section.titleEn}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Menu Images - Direct display without zoom */}
            <div className="max-w-4xl mx-auto flex flex-col gap-4 md:gap-8 px-4 py-8">
              {section.pages.map((page, index) => (
                <div
                  key={index}
                  className="relative w-full overflow-hidden shadow-2xl rounded-lg aspect-[1/1.414] bg-white/5"
                >
                  <img
                    src={page.src || "/placeholder.svg"}
                    alt={page.alt}
                    className="absolute inset-0 w-full h-full object-contain"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </section>
        ))}

        {/* Footer Note */}
        <div className="py-12 text-center border-t border-white/10">
          <p className="text-white/50 italic text-sm">
            All prices are exclusive of VAT / Giá niêm yết chưa bao gồm VAT
          </p>
        </div>
      </main>

      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-[140px] right-6 z-50 w-12 h-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 shadow-lg"
          aria-label="Back to top"
        >
          <ChevronUp className="w-5 h-5" />
        </button>
      )}

      <Footer />
    </div>
  );
}
