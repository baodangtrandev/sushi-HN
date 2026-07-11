import { MenuLayout } from "@/components/menu/menu-layout"
import { MenuHero } from "@/components/menu/menu-hero"
import { MenuPageGallery } from "@/components/menu/menu-page-gallery"

const appetizerPages = [
  { src: "/images/unnamed-289-29.png", alt: "Khai Vị - Sò, Bạch Tuộc, Trứng Cá Hồi", pageNumber: 9 },
  { src: "/images/unnamed-2810-29.png", alt: "Khai Vị - Sò Điệp, Bạch Tuộc, Trứng Chiên, Măng Tây", pageNumber: 10 },
]

export default function AppetizerPage() {
  return (
    <MenuLayout>
      <MenuHero
        title="Khai Vị"
        titleEn="APPETIZER"
        image="/images/unnamed-289-29.png"
        description="Những món khai vị tinh tế mở đầu bữa ăn"
      />

      <div className="bg-black">
        <MenuPageGallery pages={appetizerPages} />
      </div>

      <div className="bg-black py-8 text-center border-t border-white/10">
        <p className="text-white/50 italic">All prices are inclusive of VAT / Giá trên đã bao gồm VAT</p>
      </div>
    </MenuLayout>
  )
}
