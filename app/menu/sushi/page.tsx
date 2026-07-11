import { MenuLayout } from "@/components/menu/menu-layout"
import { MenuHero } from "@/components/menu/menu-hero"
import { MenuPageGallery } from "@/components/menu/menu-page-gallery"

const sushiPages = [
  { src: "/images/unnamed-2839-29.jpg", alt: "Maki Mono & Sushi Roll Cover", pageNumber: 39 },
  { src: "/images/unnamed-2840-29.jpg", alt: "Cơm Cuộn - Sumo, Cá Ngừ Cay, Lươn Bơ", pageNumber: 40 },
  { src: "/images/unnamed-2841-29.png", alt: "Cơm Cuộn - Tempura, Cua Lột, Cá Hồi", pageNumber: 41 },
  { src: "/images/unnamed-2842-29.jpg", alt: "Hải Sản Cuộn, Maki Sushi", pageNumber: 42 },
  { src: "/images/unnamed-2843-29.jpg", alt: "Nigiri Sushi Cover", pageNumber: 43 },
  { src: "/images/unnamed-2844-29.jpg", alt: "Temaki & Set Sushi", pageNumber: 44 },
  { src: "/images/unnamed-2845-29.jpg", alt: "Nigiri Sushi Menu", pageNumber: 45 },
  { src: "/images/unnamed-2846-29.png", alt: "Nigiri & Gunkan", pageNumber: 46 },
]

export default function SushiPage() {
  return (
    <MenuLayout>
      <MenuHero
        title="Sushi"
        titleEn="NIGIRI SUSHI"
        image="/images/unnamed-2839-29.jpg"
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
