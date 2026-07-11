import { MenuLayout } from "@/components/menu/menu-layout"
import { MenuHero } from "@/components/menu/menu-hero"
import { MenuPageGallery } from "@/components/menu/menu-page-gallery"

const sushiPages = [
  { src: "/images/Menu_Nhan_2025-39.webp", alt: "Maki Mono & Sushi Roll Cover", pageNumber: 39 },
  { src: "/images/Menu_Nhan_2025-40.webp", alt: "Cơm Cuộn - Sumo, Cá Ngừ Cay, Lươn Bơ", pageNumber: 40 },
  { src: "/images/Menu_Nhan_2025-41.webp", alt: "Cơm Cuộn - Tempura, Cua Lột, Cá Hồi", pageNumber: 41 },
  { src: "/images/Menu_Nhan_2025-42.webp", alt: "Hải Sản Cuộn, Maki Sushi", pageNumber: 42 },
  { src: "/images/Menu_Nhan_2025-43.webp", alt: "Nigiri Sushi Cover", pageNumber: 43 },
  { src: "/images/Menu_Nhan_2025-44.webp", alt: "Temaki & Set Sushi", pageNumber: 44 },
  { src: "/images/Menu_Nhan_2025-45.webp", alt: "Nigiri Sushi Menu", pageNumber: 45 },
  { src: "/images/Menu_Nhan_2025-46.webp", alt: "Nigiri & Gunkan", pageNumber: 46 },
]

export default function SushiPage() {
  return (
    <MenuLayout>
      <MenuHero
        title="Sushi"
        titleEn="NIGIRI SUSHI"
        image="/images/Menu_Nhan_2025-39.webp"
        description="Sushi truyền thống Nhật Bản với nguyên liệu tươi ngon nhất"
      />

      <div className="bg-black">
        <MenuPageGallery pages={sushiPages} />
      </div>

      <div className="bg-black py-8 text-center border-t border-white/10">
        <p className="text-white/50 italic">All prices are inclusive of VAT / Giá trên đã bao gồm VAT</p>
      </div>
    </MenuLayout>
  )
}
