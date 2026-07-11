import { MenuLayout } from "@/components/menu/menu-layout"
import { MenuHero } from "@/components/menu/menu-hero"
import { MenuPageGallery } from "@/components/menu/menu-page-gallery"

// Sashimi Style (Pages 13-18)
const sashimiSignature = [
  {
    name: "Cá Hồi Signature",
    nameEn: "Signature Salmon",
    price: "288.000",
    image: "/images/sashimi/page13.jpg",
    badge: "best-seller" as const,
  },
  {
    name: "Cá Cam Signature",
    nameEn: "Signature Yellowtail",
    price: "298.000",
    image: "/images/sashimi/page14.jpg",
    badge: "must-try" as const,
  },
  {
    name: "Bụng Cá Ngừ Băm",
    nameEn: "Minced Tuna Belly",
    price: "358.000",
    image: "/images/sashimi/page15-1.jpg",
  },
  {
    name: "Gan Cá Chày",
    nameEn: "Fish Liver",
    price: "268.000",
    image: "/images/sashimi/page15-2.jpg",
  },
]

const sashimiStyle = [
  {
    name: "Cá Hường Cuộn",
    nameEn: "Rolled Red Snapper",
    price: "245.000",
    image: "/images/sashimi/page16.jpg",
  },
  {
    name: "Cá Bơn Sashimi",
    nameEn: "Flounder Sashimi",
    price: "268.000",
    image: "/images/sashimi/page17-1.jpg",
  },
  {
    name: "Cá Cam Sashimi",
    nameEn: "Yellowtail Sashimi",
    price: "245.000",
    image: "/images/sashimi/page17-2.jpg",
    badge: "best-seller" as const,
  },
  {
    name: "Cá Tai Sashimi",
    nameEn: "Sea Bream Sashimi",
    price: "225.000",
    image: "/images/sashimi/page17-3.jpg",
  },
  {
    name: "Cá Mắt Vàng Yuzu Miso",
    nameEn: "Goldeneye with Yuzu Miso",
    price: "298.000",
    image: "/images/sashimi/page18-1.jpg",
    badge: "must-try" as const,
  },
  {
    name: "Cá Mú Bông Sashimi",
    nameEn: "Grouper Sashimi",
    price: "328.000",
    image: "/images/sashimi/page18-2.jpg",
  },
]

// Sashimi Sets (Page 19)
const sashimiSets = [
  {
    name: "Omakase A",
    nameEn: "Chef's Choice A",
    price: "688.000",
    image: "/images/sashimi/page19-1.jpg",
    badge: "best-seller" as const,
    description: "Set sashimi cao cấp cho 1-2 người",
  },
  {
    name: "Omakase B",
    nameEn: "Chef's Choice B",
    price: "988.000",
    image: "/images/sashimi/page19-2.jpg",
    description: "Set sashimi đặc biệt cho 2-3 người",
  },
  {
    name: "Omakase C",
    nameEn: "Chef's Choice C",
    price: "1.288.000",
    image: "/images/sashimi/page19-3.jpg",
    badge: "must-try" as const,
    description: "Set sashimi thượng hạng cho 3-4 người",
  },
  {
    name: "Tổng Hợp 2-3 Khách",
    nameEn: "Mixed Sashimi 2-3 pax",
    price: "588.000",
    image: "/images/sashimi/page19-4.jpg",
  },
  {
    name: "Tổng Hợp 4-5 Khách",
    nameEn: "Mixed Sashimi 4-5 pax",
    price: "988.000",
    image: "/images/sashimi/page19-5.jpg",
  },
]

// Sashimi Menu (Pages 20-24)
const sashimiMenu = [
  {
    name: "Cá Hồi Sashimi",
    nameEn: "Salmon Sashimi",
    price: "168.000",
    image: "/images/sashimi/page20-1.jpg",
    badge: "best-seller" as const,
  },
  {
    name: "Bụng Cá Hồi",
    nameEn: "Salmon Belly",
    price: "198.000",
    image: "/images/sashimi/page20-2.jpg",
  },
  {
    name: "Cá Trích Sashimi",
    nameEn: "Herring Sashimi",
    price: "145.000",
    image: "/images/sashimi/page20-3.jpg",
  },
  {
    name: "Bạch Tuộc Sashimi",
    nameEn: "Octopus Sashimi",
    price: "168.000",
    image: "/images/sashimi/page20-4.jpg",
  },
  {
    name: "Sò Sashimi",
    nameEn: "Clam Sashimi",
    price: "185.000",
    image: "/images/sashimi/page20-5.jpg",
  },
  {
    name: "Cá Ngừ Sashimi",
    nameEn: "Tuna Sashimi",
    price: "188.000",
    image: "/images/sashimi/page21-1.jpg",
    badge: "best-seller" as const,
  },
  {
    name: "Cá Cam Sashimi",
    nameEn: "Yellowtail Sashimi",
    price: "198.000",
    image: "/images/sashimi/page21-2.jpg",
  },
  {
    name: "Bụng Cá Kiếm",
    nameEn: "Swordfish Belly",
    price: "258.000",
    image: "/images/sashimi/page21-3.jpg",
  },
  {
    name: "Cá Mắt Vàng",
    nameEn: "Goldeneye Snapper",
    price: "268.000",
    image: "/images/sashimi/page22-1.jpg",
  },
  {
    name: "Cá Bơn Sashimi",
    nameEn: "Flounder Sashimi",
    price: "245.000",
    image: "/images/sashimi/page22-2.jpg",
  },
  {
    name: "Bluefin Tuna Akami",
    nameEn: "Cá Ngừ Vây Xanh - Thịt Đỏ",
    price: "388.000",
    image: "/images/sashimi/page22-3.jpg",
    badge: "must-try" as const,
  },
  {
    name: "Bluefin Tuna Chutoro",
    nameEn: "Cá Ngừ Vây Xanh - Bụng Vừa",
    price: "588.000",
    image: "/images/sashimi/page22-4.jpg",
  },
  {
    name: "Bluefin Tuna Otoro",
    nameEn: "Cá Ngừ Vây Xanh - Bụng Béo",
    price: "888.000",
    image: "/images/sashimi/page22-5.jpg",
    badge: "best-seller" as const,
  },
  {
    name: "Tôm Ngọt Sashimi",
    nameEn: "Sweet Shrimp Sashimi",
    price: "198.000",
    image: "/images/sashimi/page23-1.jpg",
  },
  {
    name: "Cầu Gai Sashimi",
    nameEn: "Sea Urchin Sashimi",
    price: "388.000",
    image: "/images/sashimi/page23-2.jpg",
    badge: "must-try" as const,
  },
  {
    name: "Hàu Hokkaido",
    nameEn: "Hokkaido Oyster",
    price: "98.000",
    image: "/images/sashimi/page23-3.jpg",
  },
]

const sashimiPages = [
  { src: "/images/unnamed-2813-29.jpg", alt: "Sashimi Style - Cá Hồi Signature", pageNumber: 13 },
  { src: "/images/unnamed-2814-29.png", alt: "Sashimi Style - Cá Cam Signature", pageNumber: 14 },
  { src: "/images/unnamed-2815-29.jpg", alt: "Sashimi - Bụng Cá Ngừ Băm, Gan Cá Chày", pageNumber: 15 },
  { src: "/images/unnamed-2816-29.jpg", alt: "Sashimi - Cá Hường Cuộn", pageNumber: 16 },
  { src: "/images/unnamed-2817-29.png", alt: "Sashimi - Cá Bơn, Cá Cam, Cá Tai", pageNumber: 17 },
  { src: "/images/unnamed-2818-29.png", alt: "Sashimi Style - Cá Mắt Vàng, Cá Mú Bông", pageNumber: 18 },
  { src: "/images/unnamed-2819-29.jpg", alt: "Set Sashimi - Omakase", pageNumber: 19 },
  { src: "/images/unnamed-2820-29.png", alt: "Sashimi Menu - Cá Hồi, Cá Trích, Bạch Tuộc", pageNumber: 20 },
  { src: "/images/unnamed-2821-29.jpg", alt: "Sashimi Menu - Cá Ngừ, Cá Cam", pageNumber: 21 },
  { src: "/images/unnamed-2822-29.jpg", alt: "Sashimi Menu - Bluefin Tuna", pageNumber: 22 },
  { src: "/images/unnamed-2823-29.jpg", alt: "Sashimi Menu - Tôm, Cầu Gai, Hàu", pageNumber: 23 },
]

export default function SashimiPage() {
  return (
    <MenuLayout>
      <MenuHero
        title="Sashimi"
        titleEn="SASHIMI STYLE"
        image="/images/unnamed-2813-29.jpg"
        description="Cá tươi sống cao cấp được chế biến tinh tế theo phong cách Nhật Bản truyền thống"
      />

      <div className="bg-black">
        <MenuPageGallery pages={sashimiPages} />
      </div>

      <div className="bg-black py-8 text-center border-t border-white/10">
        <p className="text-white/50 italic">All prices are inclusive of VAT / Giá trên đã bao gồm VAT</p>
      </div>
    </MenuLayout>
  )
}
