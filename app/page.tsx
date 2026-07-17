"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import {
  Phone,
  MapPin,
  ChevronRight,
  Star,
  Clock,
  ChevronDown,
} from "lucide-react";

const signatureDishes = [
  {
    category: "SASHIMI STYLE",
    name: "Cá Hồi Signature",
    nameEn: "Salmon Signature with Special Sauce",
    image: "/images/Menu_Nhan_2025-45.webp",
  },
  {
    category: "PREMIUM",
    name: "Sea & Land Harmony",
    nameEn: "Foie Gras, Abalone & Bluefin Tuna Belly",
    image: "/images/Menu_Nhan_2025-01.webp",
  },
  {
    category: "WAGYU A5",
    name: "Wagyu Sashimi",
    nameEn: "Japanese A5 Wagyu, thinly sliced",
    image: "/images/Menu_Nhan_2025-07.webp",
  },
];

const signatureSets = [
  {
    name: "Set Sashimi",
    nameVi: "Set Sashimi Tổng Hợp",
    price: "690.000",
    description: "Sashimi 5 loại cá cao cấp",
    href: "/menu#sashimi",
  },
  {
    name: "Set Sushi",
    nameVi: "Set Sushi 10 Miếng",
    price: "370.000",
    description: "10 miếng sushi tinh tuyển",
    href: "/menu#sushi",
  },
  {
    name: "Set Combo",
    nameVi: "Set Thịt Bò Wagyu",
    price: "890.000",
    description: "Wagyu A5 đa phong cách",
    href: "/menu#special",
  },
];

const testimonials = [
  {
    name: "Minh Anh",
    rating: 5,
    text: "Trải nghiệm tuyệt vời nhất Hà Nội. Cá tươi, cơm ngon, đầu bếp tận tâm. Không gian sang trọng, ấm cúng. Sẽ quay lại nhiều lần nữa!",
  },
  {
    name: "David N.",
    rating: 5,
    text: "The best Japanese restaurant I've found in Hanoi. Fresh fish imported directly from Japan. The chef's attention to detail is remarkable.",
  },
  {
    name: "Thu Hương",
    rating: 5,
    text: "Đã thử rất nhiều nhà hàng Nhật tại Hà Nội nhưng Nhan Sushi vẫn là số 1. Wagyu tan trong miệng, sashimi tươi ngon tuyệt đối.",
  },
  {
    name: "James L.",
    rating: 5,
    text: "Incredible dining experience. Every piece of sushi was a work of art. The Sea & Land Harmony dish was unforgettable.",
  },
  {
    name: "Linh Chi",
    rating: 5,
    text: "Không khí yên tĩnh, món ăn tinh tế. Cá nóc (Fugu) là must-try! Nhân viên phục vụ chu đáo, chuyên nghiệp.",
  },
  {
    name: "Peter T.",
    rating: 5,
    text: "Worth every penny. The freshness of the fish and the skill of the chef make this place stand out. A true gem in Hanoi.",
  },
];

const menuCategories = [
  { name: "Món Đặc Biệt", nameEn: "Special", href: "/menu#special" },
  { name: "Sashimi", nameEn: "Sashimi", href: "/menu#sashimi" },
  { name: "Sushi", nameEn: "Sushi", href: "/menu#sushi" },
  { name: "Món Nướng", nameEn: "Grilled", href: "/menu#grilled" },
  { name: "Lẩu", nameEn: "Hotpot", href: "/menu#hotpot" },
  { name: "Cơm & Mì", nameEn: "Rice & Noodles", href: "/menu#rice" },
  { name: "Nước Uống", nameEn: "Drinks", href: "/menu#drinks" },
];

export default function HomePage() {
  const [scrollY, setScrollY] = useState(0);
  const [activeTestimonial, setActiveTestimonial] = useState(0);


  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const scrollToContent = () => {
    window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Header />

      {/* Hero Section - Full Screen with Video-like Effect */}
      <section
        className="relative h-screen flex items-center justify-center overflow-hidden"
      >

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black" />

        {/* Hero Content */}
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          {/* Japanese Text */}
          <p className="text-white/60 text-sm tracking-[0.5em] mb-8 opacity-0 animate-[fadeInUp_1s_ease_0.2s_forwards]">
            寿司 • 刺身 • 日本料理
          </p>

          {/* Main Title - Staggered Animation */}
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-light tracking-wide mb-4 opacity-0 animate-[fadeInUp_1s_ease_0.4s_forwards]">
            Authentic Japanese
          </h1>
          <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl font-light tracking-wide text-white/90 mb-8 opacity-0 animate-[fadeInUp_1s_ease_0.6s_forwards]">
            Dining Experience.
          </h2>

          {/* Tagline */}
          <p className="text-white/50 text-lg md:text-xl tracking-wide max-w-xl mx-auto mb-12 opacity-0 animate-[fadeInUp_1s_ease_0.8s_forwards]">
            Since 2016 • Hà Nội
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center opacity-0 animate-[fadeInUp_1s_ease_1s_forwards]">
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white px-10 py-7 text-base tracking-wider transition-all duration-300 hover:scale-105"
            >
              <a href="tel:0358290290">Đặt Bàn Ngay</a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white/30 text-white hover:bg-white hover:text-black px-10 py-7 text-base tracking-wider bg-transparent transition-all duration-300 hover:scale-105"
            >
              <Link href="/menu">Xem Thực Đơn</Link>
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <button
          onClick={scrollToContent}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50 hover:text-white transition-colors cursor-pointer group"
        >
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <ChevronDown className="w-5 h-5 animate-bounce group-hover:animate-none" />
        </button>
      </section>

      {/* Signature Sets Section - Replaced Omakase */}
      <section className="py-32 bg-black relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <p className="text-primary text-sm tracking-[0.3em] uppercase mb-4">
              Nhan Sushi Hanoi
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-light mb-4">
              Set Menu
            </h2>
            <p className="text-white/50 max-w-xl mx-auto">
              Những set món được tuyển chọn kỹ lưỡng, mang đến trải nghiệm ẩm
              thực Nhật Bản đích thực
            </p>
          </div>

          {/* Set Menu Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-24">
            {signatureSets.map((set, index) => (
              <Link
                key={index}
                href={set.href}
                className="group text-center p-10 border border-white/10 hover:border-primary/50 transition-all duration-500 hover:-translate-y-2"
              >
                <p className="text-white/40 text-xs tracking-[0.3em] uppercase mb-3">
                  {set.name}
                </p>
                <h3 className="font-serif text-2xl mb-3 group-hover:text-primary transition-colors duration-300">
                  {set.nameVi}
                </h3>
                <p className="text-3xl font-light text-primary mb-2">
                  {set.price}
                  <span className="text-lg">đ</span>
                </p>
                <p className="text-white/50 text-sm">{set.description}</p>
              </Link>
            ))}
          </div>

          {/* Featured Dishes Header */}
          <div className="text-center mb-12">
            <p className="text-white/40 text-sm tracking-widest uppercase mb-4">
              Signature Dishes
            </p>
            <div className="w-16 h-[1px] bg-primary/50 mx-auto" />
          </div>

          {/* Featured Dishes Grid with Hover Effect */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-1 max-w-6xl mx-auto">
            {signatureDishes.map((dish, index) => (
              <div
                key={index}
                className="group relative aspect-square overflow-hidden cursor-pointer"
              >
                <Image
                  src={dish.image || "/placeholder.svg"}
                  alt={dish.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-all duration-500" />
                <div className="absolute inset-0 flex flex-col justify-end p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <p className="text-primary text-xs tracking-[0.2em] uppercase mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    {dish.category}
                  </p>
                  <h3 className="font-serif text-xl text-white mb-1">
                    {dish.name}
                  </h3>
                  <p className="text-white/60 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    {dish.nameEn}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <Button
              asChild
              variant="outline"
              className="border-white/20 text-white hover:bg-white hover:text-black bg-transparent px-8 py-6 transition-all duration-300 hover:scale-105"
            >
              <Link href="/menu" className="inline-flex items-center gap-2">
                Xem Toàn Bộ Thực Đơn
                <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Our Story Section - Parallax */}
      <section className="relative py-40 overflow-hidden">

        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black" />

        <div className="relative container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-primary text-sm tracking-[0.3em] uppercase mb-6">
              Since 2016
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-light mb-10">
              Câu Chuyện Của Chúng Tôi
            </h2>
            <div className="w-20 h-[1px] bg-primary/50 mx-auto mb-10" />
            <p className="text-white/70 text-lg leading-relaxed mb-8">
              Nhan Sushi ra đời từ niềm đam mê ẩm thực Nhật Bản truyền thống.
              Với triết lý tôn trọng nguyên liệu và kỹ thuật chế biến tinh tế,
              chúng tôi mang đến cho thực khách Hà Nội trải nghiệm sushi Edomae
              đích thực với nguyên liệu tươi ngon nhập khẩu trực tiếp từ Nhật
              Bản.
            </p>
            <p className="text-white/70 text-lg leading-relaxed">
              Mỗi miếng sushi, mỗi lát sashimi tại Nhan Sushi đều được chế biến
              với sự tỉ mỉ và tận tâm, kết hợp giữa kỹ thuật truyền thống Nhật
              Bản và sự sáng tạo của đội ngũ đầu bếp giàu kinh nghiệm.
            </p>
          </div>
        </div>
      </section>

      {/* Menu Categories - Elegant Links */}
      <section className="py-24 bg-[#080808]">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-x-16 gap-y-8">
            {menuCategories.map((cat, index) => (
              <Link
                key={index}
                href={cat.href}
                className="group text-center relative"
              >
                <span className="block font-serif text-2xl text-white group-hover:text-primary transition-colors duration-300">
                  {cat.name}
                </span>
                <span className="block text-xs text-white/40 tracking-widest uppercase mt-1">
                  {cat.nameEn}
                </span>
                {/* Underline animation */}
                <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-primary transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section - Auto-rotating */}
      <section className="py-32 bg-black overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-primary text-sm tracking-[0.3em] uppercase mb-4">
              Đánh Giá
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-light mb-4">
              Khách Hàng Nói Gì
            </h2>
            <p className="text-white/50">
              Những trải nghiệm thực tế từ thực khách của chúng tôi
            </p>
          </div>

          {/* Featured Testimonial - Large Display */}
          <div className="max-w-3xl mx-auto text-center mb-16 min-h-[200px]">
            <div className="flex items-center justify-center gap-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-primary text-primary" />
              ))}
            </div>
            <p className="text-white/80 text-xl md:text-2xl font-light leading-relaxed mb-8 italic transition-all duration-500">
              &quot;{testimonials[activeTestimonial].text}&quot;
            </p>
            <p className="text-white font-medium tracking-wider">
              {testimonials[activeTestimonial].name}
            </p>
          </div>

          {/* Testimonial Indicators */}
          <div className="flex justify-center gap-2 mb-16">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveTestimonial(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === activeTestimonial
                    ? "bg-primary w-8"
                    : "bg-white/20 hover:bg-white/40"
                }`}
              />
            ))}
          </div>

          {/* All Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`p-8 border border-white/10 transition-all duration-500 hover:border-primary/30 ${
                  index === activeTestimonial
                    ? "border-primary/50 bg-white/5"
                    : ""
                }`}
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-primary text-primary"
                    />
                  ))}
                </div>
                <p className="text-white/70 text-sm leading-relaxed mb-6">
                  &quot;{testimonial.text}&quot;
                </p>
                <p className="text-white font-medium">{testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reservation CTA */}
      <section className="py-32 relative overflow-hidden">

        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/90 to-black" />

        <div className="relative container mx-auto px-4 text-center">
          <p className="text-primary text-sm tracking-[0.3em] uppercase mb-6">
            Reservations
          </p>
          <h2 className="font-serif text-4xl md:text-6xl font-light mb-8">
            Đặt Bàn Ngay
          </h2>
          <p className="text-white/60 max-w-xl mx-auto mb-12">
            Chúng tôi khuyến khích quý khách đặt bàn trước để có trải nghiệm tốt
            nhất. Đặc biệt với các set menu cao cấp, vui lòng đặt trước ít nhất
            24 giờ.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <a
              href="tel:0358290290"
              className="inline-flex items-center gap-3 bg-primary hover:bg-primary/90 text-white px-10 py-5 text-lg transition-all duration-300 hover:scale-105"
            >
              <Phone className="w-5 h-5" />
              035 829 0290
            </a>
          </div>

          <div className="flex flex-col sm:flex-row gap-8 justify-center text-white/60 text-sm">
            <div className="flex items-center gap-2 justify-center">
              <Clock className="w-4 h-4" />
              <span>11:00 - 14:00 | 17:30 - 22:00</span>
            </div>
            <div className="flex items-center gap-2 justify-center">
              <MapPin className="w-4 h-4" />
              <span>290 Kim Mã, Ngọc Hà, Ba Đình, Hà Nội</span>
            </div>
          </div>
        </div>
      </section>

      {/* Marquee Footer - Infinite Scroll Animation */}
      <div className="py-8 bg-[#080808] border-t border-white/5 overflow-hidden">
        <div className="flex animate-marquee">
          {[...Array(20)].map((_, i) => (
            <span
              key={i}
              className="mx-8 text-3xl font-serif text-white/10 whitespace-nowrap"
            >
              NHAN SUSHI <span className="text-primary/30">人</span> HANOI
            </span>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}
