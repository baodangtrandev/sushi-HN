import { MenuLayout } from "@/components/menu/menu-layout"
import { MenuHero } from "@/components/menu/menu-hero"
import { MenuPageGallery } from "@/components/menu/menu-page-gallery"

const specialPages = [
  { src: "/images/Menu_Nhan_2025-01.webp", alt: "Sea & Land Harmony - Gan Ngỗng, Bào Ngư, Bụng Cá Ngừ", pageNumber: 1 },
  { src: "/images/Menu_Nhan_2025-02.webp", alt: "Sushi Cao Cấp - Bụng Cá Ngừ, Nhum Biển", pageNumber: 2 },
  { src: "/images/Menu_Nhan_2025-03.webp", alt: "Hải Sản Cao Cấp - Cá Tuyết, Cá Hồi, Sò Điệp", pageNumber: 3 },
  { src: "/images/Menu_Nhan_2025-04.webp", alt: "Tôm & Bò - Tôm Sú, Tuỷ Xương, Lưỡi Bò", pageNumber: 4 },
  { src: "/images/Menu_Nhan_2025-05.webp", alt: "Món Khác - Pudding, Mỳ Ý, Cơm", pageNumber: 5 },
  { src: "/images/Menu_Nhan_2025-06.webp", alt: "Fugu Sashimi - Cá Nóc", pageNumber: 6 },
  { src: "/images/Menu_Nhan_2025-07.webp", alt: "Wagyu Sashimi & Sushi", pageNumber: 7 },
  { src: "/images/Menu_Nhan_2025-08.webp", alt: "Wagyu Nướng & Lẩu", pageNumber: 8 },
]

export default function SpecialDishesPage() {
  return (
    <MenuLayout>
      <MenuHero
        title="Món Đặc Biệt"
        titleEn="SPECIAL DISHES"
        image="/images/Menu_Nhan_2025-01.webp"
        description="Những món ăn tinh hoa, được chế biến từ nguyên liệu cao cấp nhất"
      />

      <div className="bg-black">
        <MenuPageGallery pages={specialPages} />
      </div>

      <div className="bg-black py-8 text-center border-t border-white/10">
        <p className="text-white/50 italic">All prices are inclusive of VAT / Giá trên đã bao gồm VAT</p>
      </div>
    </MenuLayout>
  )
}
