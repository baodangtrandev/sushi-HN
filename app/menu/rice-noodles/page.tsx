import { MenuLayout } from "@/components/menu/menu-layout"
import { MenuHero } from "@/components/menu/menu-hero"
import { MenuPageGallery } from "@/components/menu/menu-page-gallery"

const riceNoodlesPages = [
  { src: "/images/unnamed-2835-29.jpg", alt: "Cơm & Mì - Cơm Lươn Donburi", pageNumber: 35 },
  { src: "/images/unnamed-2836-29.jpg", alt: "Cơm Chiên - Lươn, Cá Hồi, Tỏi, Hải Sản", pageNumber: 36 },
  { src: "/images/unnamed-2837-29.jpg", alt: "Mì - Trà Xanh, Udon Lạnh", pageNumber: 37 },
  { src: "/images/unnamed-2838-29.jpg", alt: "Mì - Soba, Udon, Ramen", pageNumber: 38 },
]

export default function RiceNoodlesPage() {
  return (
    <MenuLayout>
      <MenuHero
        title="Cơm & Mì"
        titleEn="RICE & NOODLES"
        image="/images/unnamed-2835-29.jpg"
        description="Donburi, cơm chiên và các loại mì Nhật Bản"
      />

      <div className="bg-black">
        <MenuPageGallery pages={riceNoodlesPages} />
      </div>

      <div className="bg-black py-8 text-center border-t border-white/10">
        <p className="text-white/50 italic">All prices are inclusive of VAT / Giá trên đã bao gồm VAT</p>
      </div>
    </MenuLayout>
  )
}
