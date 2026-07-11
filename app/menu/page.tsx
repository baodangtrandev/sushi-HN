"use client"

import { useEffect, useState, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Phone, ChevronUp } from "lucide-react"

// All menu categories with their pages
const menuSections = [
  {
    id: "lunch",
    title: "Set Lunch",
    titleEn: "SET LUNCH",
    pages: [
      { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/0001-u7hFbNWEGV6NMJ6R0aQVGvc0cCohr0.jpg", alt: "Premium Lunch Set" },
      { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/0002-A5AACSVbA12AoGInWuIA2ewXmqBAB2.jpg", alt: "Sashimi & Sushi Lunch Sets" },
      { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/0003-x9o9OUMYQaALtPUfoenIKRk0i3C8oy.jpg", alt: "Ranchi Setto Lunch Menu" },
      { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/0004-JwhzC0M59ZgagemYmP8fBovSWbYxJc.jpg", alt: "Premium Lunch Selections" },
      { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/0005-378MMhuouK6CleC059VtBG61hQArCf.jpg", alt: "Salmon & Sashimi Lunch Sets" },
      { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/0006-kFqiaweUMvGC2WiI4HEr2fHEvKqFFW.jpg", alt: "Rice & Sashimi Lunch Combinations" },
      { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/0007-NDRCMljTatL6LSDxa17LrhvAgulAhF.jpg", alt: "Tempura & Seafood Lunch Sets" },
      { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/0008-C7TvMjorj8le5zIgRbIRzFoxhG6hzl.jpg", alt: "Grilled & Noodle Lunch Sets" },
      { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/0009-b8QeKvM0T1LUCeWXaOyXIDktz3FUaY.jpg", alt: "Complete Lunch Menu Sets" },
    ],
  },
  {
    id: "special",
    title: "Món Đặc Biệt",
    titleEn: "SPECIAL DISHES",
    pages: [
      { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/0001-TPlIJ8G376SKXaAz9hoBlBdKQ8D9W7.jpg", alt: "Sea & Land Harmony" },
      { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/0002-QauV5mnWn18wdB4WFkrDiWX1wLD4ba.jpg", alt: "Premium Sushi" },
      { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/0003-kFZgYbymy22RQGGpSFeqJoXJAgJd2z.jpg", alt: "Fine Dining Seafood" },
      { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/0004-Ki1k4SyuLRpmkWk5Pl9n6E5ZnU9e46.jpg", alt: "Grilled Specialties" },
      { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/0005-4J9XbzrTLJCk0o65KwmQAgACpmtLy2.jpg", alt: "Mixed Dishes" },
      { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/0006-coiw9Z6B1xLELS4lj4RJ1XNzAE0huK.jpg", alt: "Fugu Specialties" },
      { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/0007-OAvVEVWjh3wJu05MFNvscWgu8JXaU7.jpg", alt: "Wagyu Sashimi" },
      { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/0008-OPt1gKh7LD8CSlRUSdXLwy20kyY75U.jpg", alt: "Wagyu Hot Pot" },
    ],
  },
  {
    id: "appetizer",
    title: "Khai Vị",
    titleEn: "APPETIZER",
    pages: [
      { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/0009-ppAJMksIsFuYqjl7ChRuZppavvZJsH.jpg", alt: "Appetizers" },
      { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/0010-TsMpdrNazvER64T2CxxqzTsvg9jDGN.jpg", alt: "Appetizers" },
    ],
  },
  {
    id: "salad",
    title: "Salad",
    titleEn: "FRESH SALADS",
    pages: [
      { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/0011-M4d6YEZ7tefNNfB9DvPkIfWlLjoHrI.jpg", alt: "Fresh Salads" },
      { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/0012-w2SZvkn26BpebhoGoyEzosdglK2KYX.jpg", alt: "Salad" },
    ],
  },
  {
    id: "sashimi",
    title: "Sashimi",
    titleEn: "SASHIMI STYLE",
    pages: [
      { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/0013-kP0DS5KXOHCMsc6IuOUOC35uE44YAr.jpg", alt: "Sashimi" },
      { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/0014-dBHC28eXxyONeIUvOHbtw0oQqWuhmh.jpg", alt: "Sashimi" },
      { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/0015-XIvgKYRvJ64l8Dxu1sN0RMVRbbfxbT.jpg", alt: "Sashimi" },
      { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/0016-85594JkIP4GDVgGjEuxcvPTXZuqDkA.jpg", alt: "Sashimi" },
      { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/0017-0gE3Ik6uv1zK7dIsVlo7QoQhwOPoT3.jpg", alt: "Sashimi" },
      { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/0018-RUc3FBYm6PgKKGpTI8KC80yqTK9t7b.jpg", alt: "Sashimi" },
      { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/0019-9wX5bHFDYqzyXpKFbR9Y4hp6p61WfL.jpg", alt: "Sashimi" },
      { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/0020-l1PBF1ReAoYLFoXgL9BKeSOuReeJaD.jpg", alt: "Sashimi" },
      { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/0021-a0H0pRaqKc7ZlcO7sEU1bJDAQ07s8V.jpg", alt: "Salt-Grilled Fish" },
      { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/0022-cLvs6vxWr3hLHfVEUhVShuyHnla6pw.jpg", alt: "Salt-Grilled Fish" },
      { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/0023-DKsWWExRuhQNcxiN478CkdZ6fdF25l.jpg", alt: "Salt-Grilled Fish" },
      { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/0024-ZkcvGFB81liEs6Z10S6oB4jlxyHwir.jpg", alt: "Salt-Grilled Fish" },
    ],
  },
  {
    id: "grilled",
    title: "Món Nướng",
    titleEn: "GRILLED DISHES",
    pages: [
      { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/0025-DXYsfnUfnmnGYxm5XCfW3xBN6phHfQ.jpg", alt: "Grilled Crab" },
      { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/0026-yHu7QbTu2w0vYASl2iYDnaj42A4b6d.jpg", alt: "Grilled Squid" },
      { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/0027-QpArv5Z8Vaog6NRff3qXlafvRXGgfp.jpg", alt: "Grilled Fish Head" },
      { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/0028-yRi6NqfaaoWX6kdedqAwVo6Fhy8vV0.jpg", alt: "Grilled Beef" },
      { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/0029-09AMOo2CTXiVGo6SCv7Uf5kFOtz2Mt.jpg", alt: "Grilled Specialties" },
      { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/0030-1hSTKz0i5k56aZZCdbb0NVr8kvhWrh.jpg", alt: "Grilled Dishes" },
    ],
  },
  {
    id: "fried",
    title: "Món Chiên",
    titleEn: "DEEP-FRIED",
    pages: [
      { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/0031-6f6i1e2iPQSC77DpupLHafTUwnDn2W.jpg", alt: "Deep-Fried" },
      { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/0032-uf1cTVMB9S4n4SI41iHN8oWZ3EKg1g.jpg", alt: "Deep-Fried" },
    ],
  },
  {
    id: "hot-dishes",
    title: "Món Nóng",
    titleEn: "HOT DISHES",
    pages: [
      { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/0033-HdrF01MqblJ7uPulb0npKDBh6jA4Du.jpg", alt: "Hot Dishes" },
      { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/0034-jDRXiFW2HIGt660garIzkijXEkyZgO.jpg", alt: "Chawanmushi" },
    ],
  },
  {
    id: "rice",
    title: "Cơm & Mì",
    titleEn: "RICE & NOODLES",
    pages: [
      { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/0035-UX3g8OR3qCMRl7NSHEwOUzSdf5ryVz.jpg", alt: "Rice & Noodles" },
      { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/0036-AA7pRTS7XcTmegDAXowtqTFfceMeOy.jpg", alt: "Fried Rice" },
      { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/0037-EMHpbRop74vyR01HA8pk9lvhOVYf8b.jpg", alt: "Noodles" },
    ],
  },
  {
    id: "noodles",
    title: "Mì",
    titleEn: "NOODLE DISHES",
    pages: [
      { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/0038-okfrXzf6uXO1G3fOE2MtNqWIMfctFk.jpg", alt: "Udon & Ramen" },
    ],
  },
  {
    id: "rolls",
    title: "Cơm Cuộn",
    titleEn: "SUSHI ROLLS",
    pages: [
      { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/0039-pPA9klqKqpQ0lUqsjniTPJIkfC5sDY.jpg", alt: "Sushi Rolls" },
      { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/0040-lKoXk8bHjfn6a0C5lrzceEblETyzQL.jpg", alt: "Sushi Rolls" },
      { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/0041-UUCEkIyyikYwunfqAZyoyQMqRvRVXG.jpg", alt: "Sushi Rolls" },
      { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/0042-YsfE5cg7zc9o5SF657tK82AJTHpiFR.jpg", alt: "Sushi Rolls" },
    ],
  },
  {
    id: "nigiri",
    title: "Sushi",
    titleEn: "NIGIRI SUSHI",
    pages: [
      { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/0043-czZkZCGXKpLBHq1wPte3O02c9ajUJs.jpg", alt: "Nigiri Sushi" },
      { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/0044-wawY54MGrNl07fTD8PPy7uI4s2YBiv.jpg", alt: "Temaki & Sushi Sets" },
      { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/0045-sc811zh2rXUAqepjugZXFfzFMiOqiE.jpg", alt: "Nigiri Selection" },
      { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/0046-8Llb8TyCTgasDRrkcD1xO83WokOsIQ.jpg", alt: "Nigiri Selection" },
    ],
  },
  {
    id: "hotpot",
    title: "Lẩu",
    titleEn: "NABEMONO",
    pages: [
      { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/0047-vMahNpbjH7nJAsXFXUUTNzY33La3Cv.jpg", alt: "Hot Pot" },
      { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/0048-gEb4PMHqDjb1So4L7IpxsHRJWRokod.jpg", alt: "Hot Pot & Nabemono" },
    ],
  },
]

export default function MenuPage() {
  const [activeSection, setActiveSection] = useState("special")
  const [showBackToTop, setShowBackToTop] = useState(false)
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({})

  // Scroll spy - track which section is currently in view
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 150 // Offset for sticky nav

      // Show/hide back to top button
      setShowBackToTop(window.scrollY > 500)

      // Find active section
      for (const section of menuSections) {
        const element = sectionRefs.current[section.id]
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section.id)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Scroll to section
  const scrollToSection = (sectionId: string) => {
    const element = sectionRefs.current[sectionId]
    if (element) {
      const offset = 145 // Height of sticky nav + some padding
      const elementPosition = element.offsetTop - offset
      window.scrollTo({ top: elementPosition, behavior: "smooth" })
    }
  }

  // Back to top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black" />
        <div className="relative z-10 text-center px-4">
          <p className="text-primary text-sm tracking-[0.3em] uppercase mb-4">Nhan Sushi Hanoi</p>
          <h1 className="font-serif text-4xl md:text-6xl font-light mb-4">Thực Đơn</h1>
          <p className="text-white/60 max-w-md mx-auto mb-3">
            Cuộn xuống để khám phá toàn bộ thực đơn
          </p>
          <p className="text-white/40 text-xs tracking-wide max-w-md mx-auto">
            Giá niêm yết chưa bao gồm VAT
          </p>
        </div>
      </section>

      {/* Sticky Category Navigation */}
      <nav className="sticky top-20 z-40 bg-black/95 backdrop-blur-md border-y border-white/10">
        <div className="overflow-x-auto scrollbar-hide">
          <div className="flex min-w-max px-4 py-3 gap-1">
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
      </nav>

      {/* Menu Sections */}
      <main className="bg-black">
        {menuSections.map((section) => (
          <section
            key={section.id}
            id={section.id}
            ref={(el) => { sectionRefs.current[section.id] = el }}
            className="scroll-mt-36"
          >
            {/* Section Header */}
            <div className="sticky top-[141px] z-30 bg-black/90 backdrop-blur-sm border-b border-white/5">
              <div className="container mx-auto px-4 py-4">
                <div className="flex items-center gap-4">
                  <div className="w-1 h-8 bg-primary rounded-full" />
                  <div className="flex flex-col justify-center py-1">
                    <h2 className="font-serif text-2xl text-white leading-none mb-1">{section.title}</h2>
                    <p className="text-white/40 text-xs tracking-widest uppercase leading-none">{section.titleEn}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Menu Images - Direct display without zoom */}
            <div className="space-y-0">
              {section.pages.map((page, index) => (
                <div key={index} className="relative w-full">
                  <img
                    src={page.src || "/placeholder.svg"}
                    alt={page.alt}
                    className="w-full h-auto"
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

      {/* Floating Action Buttons */}
      <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-50">
        {/* Back to Top */}
        {showBackToTop && (
          <button
            onClick={scrollToTop}
            className="w-12 h-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 shadow-lg"
            aria-label="Back to top"
          >
            <ChevronUp className="w-5 h-5" />
          </button>
        )}

        {/* Call to Book */}
        <a
          href="tel:0358290290"
          className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white hover:bg-primary/90 transition-all duration-300 shadow-lg"
          aria-label="Call to book"
        >
          <Phone className="w-5 h-5" />
        </a>
      </div>

      <Footer />
    </div>
  )
}
