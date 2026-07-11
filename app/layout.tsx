import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Noto_Sans } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const playfair = Playfair_Display({ subsets: ["latin", "vietnamese"] })
const notoSans = Noto_Sans({ subsets: ["latin", "vietnamese"] })

export const metadata: Metadata = {
  title: "Nhan Sushi Hanoi - Japanese Restaurant Since 2016",
  description:
    "Nhà hàng Nhật Bản cao cấp tại Hà Nội. Sashimi, Sushi, Wagyu và các món ăn Nhật Bản chính thống từ năm 2016.",
  keywords: "sushi, sashimi, japanese food, hanoi, wagyu, nhan sushi",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="vi">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
