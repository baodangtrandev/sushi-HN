import { MenuLayout } from "@/components/menu/menu-layout"
import { MenuHero } from "@/components/menu/menu-hero"
import { MenuPageGallery } from "@/components/menu/menu-page-gallery"

const friedPages = [
  { src: "/images/unnamed-2831-29.jpg", alt: "Món Chiên - Tôm Tempura", pageNumber: 31 },
  { src: "/images/unnamed-2832-29.jpg", alt: "Món Chiên - Tempura, Gà Chiên", pageNumber: 32 },
  { src: "/images/unnamed-2833-29.jpg", alt: "Món Nóng - Súp Bào Ngư, Súp Miso", pageNumber: 33 },
  { src: "/images/unnamed-2834-29.jpg", alt: "Món Nóng - Trứng Hấp Chawanmushi", pageNumber: 34 },
]

export default function FriedPage() {
  return (
    <MenuLayout>
      <MenuHero
        title="Món Chiên"
        titleEn="DEEP-FRIED DISHES"
        image="/images/unnamed-2831-29.jpg"
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
