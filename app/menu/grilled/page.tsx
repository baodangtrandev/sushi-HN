import { MenuLayout } from "@/components/menu/menu-layout"
import { MenuHero } from "@/components/menu/menu-hero"
import { MenuPageGallery } from "@/components/menu/menu-page-gallery"

const grilledPages = [
  { src: "/images/unnamed-2825-29.jpg", alt: "Món Nướng - Mai Cua, Hàu", pageNumber: 25 },
  { src: "/images/unnamed-2826-29.jpg", alt: "Món Nướng - Cá Tuyết, Bụng Cá Hồi, Đùi Gà", pageNumber: 26 },
  { src: "/images/unnamed-2827-29.jpg", alt: "Món Nướng - Hàu Sữa các loại", pageNumber: 27 },
  { src: "/images/unnamed-2828-29.png", alt: "Món Nướng - Sườn Bò Mỹ, Thăn Bò Úc, Cá Ayu", pageNumber: 28 },
  { src: "/images/unnamed-2829-29.jpg", alt: "Món Nướng - Cá Saba, Cá Thu Đao, Cá Hồi", pageNumber: 29 },
  { src: "/images/unnamed-2830-29.jpg", alt: "Món Nướng - Mực, Lươn Nhật, Đầu Cá", pageNumber: 30 },
]

export default function GrilledPage() {
  return (
    <MenuLayout>
      <MenuHero
        title="Món Nướng"
        titleEn="GRILLED DISHES"
        image="/images/unnamed-2830-29.jpg"
        description="Các món nướng đậm đà hương vị Nhật Bản"
      />

      <div className="bg-black">
        <MenuPageGallery pages={grilledPages} />
      </div>

      <div className="bg-black py-8 text-center border-t border-white/10">
        <p className="text-white/50 italic">All prices are inclusive of VAT / Giá trên đã bao gồm VAT</p>
      </div>
    </MenuLayout>
  )
}
