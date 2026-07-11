"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const menuCategories = [
  { name: "Trang Chủ", href: "/" },
  { name: "Xem Thực Đơn", href: "/menu" },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-[999] transition-all duration-300 ${
          isScrolled || isMenuOpen
            ? "bg-black border-b border-white/10"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-24 lg:h-28">
            <Link href="/" className="flex items-center gap-3 group">
              <Image
                src="/images/nhan-sushi-logo-transparent.png"
                alt="Nhan Sushi Hanoi"
                width={160}
                height={96}
                className="h-16 w-auto md:h-20 lg:h-24 transition-transform group-hover:scale-105"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-2">
              <Link
                href="/menu"
                className="px-5 py-2.5 text-sm text-white/80 hover:text-white transition-colors tracking-wide border border-white/20 hover:border-white/40"
              >
                Xem Thực Đơn
              </Link>
              <a
                href="tel:0358290290"
                className="px-6 py-2.5 bg-primary hover:bg-primary/90 text-white text-sm tracking-wider transition-colors"
              >
                Đặt Bàn
              </a>
            </nav>

            {/* Contact & Mobile Menu */}
            <div className="flex items-center gap-4">
              <a
                href="tel:0358290290"
                className="hidden sm:flex lg:hidden items-center gap-2 text-white"
              >
                <Phone className="w-4 h-4 text-primary" />
                <span className="text-sm">035 829 0290</span>
              </a>

              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden text-white hover:bg-white/10"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu - Outside header for proper z-index stacking */}
      {isMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-20 z-[1000] bg-black overflow-y-auto">
          <nav className="container mx-auto px-6 py-8">
            {menuCategories.map((item, index) => (
              <Link
                key={item.name}
                href={item.href}
                className="block py-4 text-xl text-white hover:text-primary border-b border-white/10 font-light tracking-wide transition-colors"
                onClick={() => setIsMenuOpen(false)}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {item.name}
              </Link>
            ))}
            <a
              href="tel:0358290290"
              className="inline-flex items-center gap-3 mt-8 px-8 py-4 bg-primary hover:bg-primary/90 text-white transition-colors"
            >
              <Phone className="w-5 h-5" />
              <span className="tracking-wider">035 829 0290</span>
            </a>
          </nav>
        </div>
      )}
    </>
  );
}
