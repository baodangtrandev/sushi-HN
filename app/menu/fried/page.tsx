import { MenuLayout } from "@/components/menu/menu-layout"
import { MenuHero } from "@/components/menu/menu-hero"
import { MenuPageGallery } from "@/components/menu/menu-page-gallery"

const friedPages = [
  { src: "/images/Menu_Nhan_2025-31.webp", alt: "Món Chiên - Tôm Tempura", pageNumber: 31 },
  { src: "/images/Menu_Nhan_2025-32.webp", alt: "Món Chiên - Tempura, Gà Chiên", pageNumber: 32 },
  { src: "/images/Menu_Nhan_2025-33.webp", alt: "Món Nóng - Súp Bào Ngư, Súp Miso", pageNumber: 33 },
  { src: "/images/Menu_Nhan_2025-34.webp", alt: "Món Nóng - Trứng Hấp Chawanmushi", pageNumber: 34 },
]

export default function FriedPage() {
  return (
    <MenuLayout>
      <MenuHero
        title="Món Chiên"
        titleEn="DEEP-FRIED DISHES"
        image="/images/Menu_Nhan_2025-31.webp"
        description="Tempura và các món chiên giòn kiểu Nhật"
      />

      <div className="bg-black">
        <MenuPageGallery pages={friedPages} />
      </div>

      <div className="bg-black py-8 text-center border-t border-white/10">
        <p className="text-white/50 italic">All prices are inclusive of VAT / Giá trên đã bao gồm VAT</p>
      </div>
    </MenuLayout>
  )
}
