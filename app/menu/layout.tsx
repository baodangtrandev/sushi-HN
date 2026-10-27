import type React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "Thực Đơn | Nhan Sushi Hà Nội",
    template: "%s | Nhan Sushi Hà Nội",
  },
  description:
    "Thực đơn đầy đủ của Nhan Sushi Hà Nội: set lunch, món đặc biệt, sashimi, sushi, món nướng, món chiên, lẩu, cơm & mì, salad và khai vị.",
  alternates: {
    canonical: "/menu",
  },
  openGraph: {
    type: "website",
    siteName: "Nhan Sushi Hà Nội",
    locale: "vi_VN",
    title: "Thực Đơn | Nhan Sushi Hà Nội",
    description:
      "Thực đơn đầy đủ của Nhan Sushi Hà Nội: set lunch, món đặc biệt, sashimi, sushi, món nướng, món chiên, lẩu, cơm & mì, salad và khai vị.",
    url: "/menu",
    images: [
      {
        url: "/images/og-menu.jpg",
        width: 1200,
        height: 630,
        alt: "Thực đơn Nhan Sushi Hà Nội",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/images/og-menu.jpg"],
  },
};

export default function MenuRootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
