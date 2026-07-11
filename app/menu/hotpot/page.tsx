import { MenuLayout } from "@/components/menu/menu-layout"
import { MenuHero } from "@/components/menu/menu-hero"
import { MenuPageGallery } from "@/components/menu/menu-page-gallery"

const hotpotPages = [
  { src: "/images/Menu_Nhan_2025-47.webp", alt: "Nabemono - Lẩu Bò Shabu Shabu, Sukiyaki", pageNumber: 47 },
  { src: "/images/Menu_Nhan_2025-48.webp", alt: "Nabemono - Lẩu Đầu Cá Hồi, Hải Sản, Đậu Hũ", pageNumber: 48 },
]

export default function HotpotPage() {
  return (
    <MenuLayout>
      <MenuHero
        title="Lẩu"
        titleEn="NABEMONO"
        image="/images/Menu_Nhan_2025-47.webp"
        description="Lẩu Nhật Bản nóng hổi - Shabu Shabu, Sukiyaki"
      />

      <div className="bg-black">
        <MenuPageGallery pages={hotpotPages} />
      </div>

      {/* Note */}
      <section className="py-12 bg-[#0d0d0d]">
        <div className="container mx-auto px-4 text-center">
          <p className="text-white/60">
            <span className="font-semibold text-white">Lưu ý:</span> Tất cả các món lẩu được phục vụ từ 2 khách trở lên
          </p>
          <p className="text-white/60 mt-2">
            <span className="font-semibold text-white">Note:</span> All hot pot dishes are served for at least 2 pax
          </p>
        </div>
      </section>

      <div className="bg-black py-8 text-center border-t border-white/10">
        <p className="text-white/50 italic">All prices are inclusive of VAT / Giá trên đã bao gồm VAT</p>
      </div>
    </MenuLayout>
  )
}
