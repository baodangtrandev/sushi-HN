import type React from "react";
import type { Metadata } from "next";
import { Playfair_Display, Noto_Sans } from "next/font/google";
import Script from "next/script";
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
  metadataBase: new URL("https://www.nhansushihanoi.vn"),
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
      <head>
        <Script id="gtm-head" strategy="beforeInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-KMZJB59R');`}
        </Script>
      </head>
      <body
        className={`${notoSans.variable} ${playfair.variable} font-sans antialiased`}
        suppressHydrationWarning
      >
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-KMZJB59R"
            height={0}
            width={0}
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {children}
        <FloatingActions />
        <Analytics />
      </body>
    </html>
  );
}
