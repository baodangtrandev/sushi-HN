import type React from "react"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"

interface MenuLayoutProps {
  children: React.ReactNode
  backgroundImage?: string
}

export function MenuLayout({ children }: MenuLayoutProps) {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <main className="pt-20">{children}</main>
      <Footer />
    </div>
  )
}
