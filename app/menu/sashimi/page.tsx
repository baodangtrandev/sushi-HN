import { MenuLayout } from "@/components/menu/menu-layout";
import { MenuHero } from "@/components/menu/menu-hero";
import { MenuPageGallery } from "@/components/menu/menu-page-gallery";

const sashimiPages = [
  {
    src: "/images/Menu_Nhan_2025-13.webp",
    alt: "Sashimi Style - Cá Hồi Signature",
    pageNumber: 13,
  },
  {
    src: "/images/Menu_Nhan_2025-14.webp",
    alt: "Sashimi Style - Cá Cam Signature",
    pageNumber: 14,
  },
  {
    src: "/images/Menu_Nhan_2025-15.webp",
    alt: "Sashimi - Bụng Cá Ngừ Băm, Gan Cá Chày",
    pageNumber: 15,
  },
  {
    src: "/images/Menu_Nhan_2025-16.webp",
    alt: "Sashimi - Cá Hường Cuộn",
    pageNumber: 16,
  },
  {
    src: "/images/Menu_Nhan_2025-17.webp",
    alt: "Sashimi - Cá Bơn, Cá Cam, Cá Tai",
    pageNumber: 17,
  },
  {
    src: "/images/Menu_Nhan_2025-18.webp",
    alt: "Sashimi Style - Cá Mắt Vàng, Cá Mú Bông",
    pageNumber: 18,
  },
  {
    src: "/images/Menu_Nhan_2025-19.webp",
    alt: "Set Sashimi - Omakase",
    pageNumber: 19,
  },
  {
    src: "/images/Menu_Nhan_2025-20.webp",
    alt: "Sashimi Menu - Cá Hồi, Cá Trích, Bạch Tuộc",
    pageNumber: 20,
  },
  {
    src: "/images/Menu_Nhan_2025-21.webp",
    alt: "Sashimi Menu - Cá Ngừ, Cá Cam",
    pageNumber: 21,
  },
  {
    src: "/images/Menu_Nhan_2025-22.webp",
    alt: "Sashimi Menu - Bluefin Tuna",
    pageNumber: 22,
  },
  {
    src: "/images/Menu_Nhan_2025-23.webp",
    alt: "Sashimi Menu - Tôm, Cầu Gai, Hàu",
    pageNumber: 23,
  },
];

export default function SashimiPage() {
  return (
    <MenuLayout>
      <MenuHero
        title="Sashimi"
        titleEn="SASHIMI STYLE"
        image="/images/Menu_Nhan_2025-13.webp"
        description="Cá tươi sống cao cấp được chế biến tinh tế theo phong cách Nhật Bản truyền thống"
      />

      <div className="bg-black">
        <MenuPageGallery pages={sashimiPages} />
      </div>

      <div className="bg-black py-8 text-center border-t border-white/10">
        <p className="text-white/50 italic">
          All prices are inclusive of VAT / Giá trên đã bao gồm VAT
        </p>
      </div>
    </MenuLayout>
  );
}
