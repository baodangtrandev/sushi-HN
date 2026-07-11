import { MenuLayout } from "@/components/menu/menu-layout"
import { MenuHero } from "@/components/menu/menu-hero"
import { MenuPageGallery } from "@/components/menu/menu-page-gallery"

const riceNoodlesPages = [
  { src: "/images/Menu_Nhan_2025-35.webp", alt: "Cơm & Mì - Cơm Lươn Donburi", pageNumber: 35 },
  { src: "/images/Menu_Nhan_2025-36.webp", alt: "Cơm Chiên - Lươn, Cá Hồi, Tỏi, Hải Sản", pageNumber: 36 },
  { src: "/images/Menu_Nhan_2025-37.webp", alt: "Mì - Trà Xanh, Udon Lạnh", pageNumber: 37 },
  { src: "/images/Menu_Nhan_2025-38.webp", alt: "Mì - Soba, Udon, Ramen", pageNumber: 38 },
]

export default function RiceNoodlesPage() {
  return (
    <MenuLayout>
      <MenuHero
        title="Cơm & Mì"
        titleEn="RICE & NOODLES"
        image="/images/Menu_Nhan_2025-35.webp"
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
