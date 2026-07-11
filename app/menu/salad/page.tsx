import { MenuLayout } from "@/components/menu/menu-layout"
import { MenuHero } from "@/components/menu/menu-hero"
import { MenuPageGallery } from "@/components/menu/menu-page-gallery"

const saladPages = [
  { src: "/images/unnamed-2811-29.jpg", alt: "Salad - Cá Hồi", pageNumber: 11 },
  { src: "/images/unnamed-2812-29.png", alt: "Salad - Rong Biển, Kale, Tôm", pageNumber: 12 },
]

export default function SaladPage() {
  return (
    <MenuLayout>
      <MenuHero
        title="Salad"
        titleEn="FRESH SALADS"
        image="/images/unnamed-2811-29.jpg"
        description="Salad tươi mát với nguyên liệu cao cấp"
      />

      <div className="bg-black">
        <MenuPageGallery pages={saladPages} />
      </div>

      <div className="bg-black py-8 text-center border-t border-white/10">
        <p className="text-white/50 italic">All prices are inclusive of VAT / Giá trên đã bao gồm VAT</p>
      </div>
    </MenuLayout>
  )
}
