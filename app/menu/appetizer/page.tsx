import type { Metadata } from "next";
import { MenuLayout } from "@/components/menu/menu-layout";
import { MenuHero } from "@/components/menu/menu-hero";
import { MenuPageGallery } from "@/components/menu/menu-page-gallery";

export const metadata: Metadata = {
  title: "Khai Vị",
  description:
    "Những món khai vị tinh tế mở đầu bữa ăn tại Nhan Sushi Hà Nội.",
  alternates: {
    canonical: "/menu/appetizer",
  },
};

const appetizerPages = [
  {
    src: "/images/Menu_Nhan_2025-09.webp",
    alt: "Khai Vị - Sò, Bạch Tuộc, Trứng Cá Hồi",
    pageNumber: 9,
  },
  {
    src: "/images/Menu_Nhan_2025-10.webp",
    alt: "Khai Vị - Sò Điệp, Bạch Tuộc, Trứng Chiên, Măng Tây",
    pageNumber: 10,
  },
];

export default function AppetizerPage() {
  return (
    <MenuLayout>
      <MenuHero
        title="Khai Vị"
        titleEn="APPETIZER"
        image="/images/Menu_Nhan_2025-09.webp"
        description="Những món khai vị tinh tế mở đầu bữa ăn"
      />

      <div className="bg-black">
        <MenuPageGallery pages={appetizerPages} />
      </div>

      <div className="bg-black py-8 text-center border-t border-white/10">
        <p className="text-white/50 italic">
          All prices are inclusive of VAT / Giá trên đã bao gồm VAT
        </p>
      </div>
    </MenuLayout>
  );
}
