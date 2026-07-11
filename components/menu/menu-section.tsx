import type React from "react"

interface MenuSectionProps {
  title: string
  titleEn?: string
  children: React.ReactNode
  className?: string
  bgColor?: "default" | "muted" | "dark"
}

export function MenuSection({ title, titleEn, children, className = "", bgColor = "default" }: MenuSectionProps) {
  const bgClasses = {
    default: "bg-black",
    muted: "bg-[#0d0d0d]",
    dark: "bg-[#141414]",
  }

  return (
    <section className={`py-16 ${bgClasses[bgColor]} ${className}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-white">{title}</h2>
          {titleEn && <p className="text-white/60 text-lg mt-2 tracking-wide">{titleEn}</p>}
          <div className="w-20 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mt-4" />
        </div>
        {children}
      </div>
    </section>
  )
}
