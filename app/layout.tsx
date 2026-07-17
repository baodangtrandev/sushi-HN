import type React from "react";
import type { Metadata } from "next";
import { Playfair_Display, Noto_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { FloatingActions } from "@/components/layout/floating-actions";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin", "vietnamese"],
  variable: "--font-playfair",
});
const notoSans = Noto_Sans({
  subsets: ["latin", "vietnamese"],
  variable: "--font-noto-sans",
});

export const metadata: Metadata = {
  title: "Nhan Sushi - Japanese Restaurant",
  description:
    "Nhà hàng Nhật Bản cao cấp tại Hà Nội. Sashimi, Sushi, Wagyu và các món ăn Nhật Bản chính thống từ năm 2016.",
  keywords: "sushi, sashimi, japanese food, hanoi, wagyu, nhan sushi",
  icons: {
    icon: "/images/nhan-sushi-logo-favicon.png",
    apple: "/images/nhan-sushi-logo-favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" suppressHydrationWarning data-scroll-behavior="smooth">
      <body
        className={`${notoSans.variable} ${playfair.variable} font-sans antialiased`}
        suppressHydrationWarning
      >
        {children}
        <FloatingActions />
        <Analytics />
      </body>
    </html>
  );
}
