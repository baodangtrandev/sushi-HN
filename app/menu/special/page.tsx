import { MenuLayout } from "@/components/menu/menu-layout"
import { MenuHero } from "@/components/menu/menu-hero"
import { MenuPageGallery } from "@/components/menu/menu-page-gallery"

// Page 01-08 data: Special Dishes
const seaAndLandHarmony = [
  {
    name: "Gan Ngỗng Pháp",
    nameEn: "Foie Gras",
    price: "458.000",
    image: "/images/special/page01-1.jpg",
    badge: "must-try" as const,
  },
  {
    name: "Bào Ngư Nhật",
    nameEn: "Japanese Abalone",
    price: "688.000",
    image: "/images/special/page01-2.jpg",
  },
  {
    name: "Bụng Cá Ngừ Đại Dương",
    nameEn: "Bluefin Tuna Belly",
    price: "888.000",
    image: "/images/special/page01-3.jpg",
    badge: "best-seller" as const,
  },
]

const sushiSpecial = [
  {
    name: "Sushi Bụng Cá Ngừ",
    nameEn: "Otoro Sushi",
    price: "228.000",
    image: "/images/special/page02-1.jpg",
    badge: "best-seller" as const,
  },
  {
    name: "Sushi Nhum Biển",
    nameEn: "Uni Sushi",
    price: "315.000",
    image: "/images/special/page02-2.jpg",
  },
  {
    name: "Sushi Trứng Cá Hồi",
    nameEn: "Ikura Sushi",
    price: "142.000",
    image: "/images/special/page02-3.jpg",
  },
]

const seafoodSpecial = [
  {
    name: "Cá Tuyết Nướng Sốt Miso",
    nameEn: "Miso Black Cod",
    price: "488.000",
    image: "/images/special/page03-1.jpg",
    badge: "best-seller" as const,
  },
  {
    name: "Cá Hồi Nauy Nướng",
    nameEn: "Grilled Norwegian Salmon",
    price: "252.000",
    image: "/images/special/page03-2.jpg",
  },
  {
    name: "Sò Điệp Hokkaido Nướng",
    nameEn: "Grilled Hokkaido Scallop",
    price: "358.000",
    image: "/images/special/page03-3.jpg",
    badge: "must-try" as const,
  },
]

const shrimpAndBeef = [
  {
    name: "Tôm Sú Nướng Muối",
    nameEn: "Salt-Grilled Tiger Prawn",
    price: "298.000",
    image: "/images/special/page04-1.jpg",
  },
  {
    name: "Tuỷ Xương Bò",
    nameEn: "Beef Bone Marrow",
    price: "188.000",
    image: "/images/special/page04-2.jpg",
    badge: "must-try" as const,
  },
  {
    name: "Lưỡi Bò Nướng",
    nameEn: "Grilled Beef Tongue",
    price: "268.000",
    image: "/images/special/page04-3.jpg",
  },
]

const otherSpecials = [
  {
    name: "Pudding Nhật Bản",
    nameEn: "Japanese Pudding",
    price: "65.000",
    image: "/images/special/page05-1.jpg",
  },
  {
    name: "Mỳ Ý Hải Sản",
    nameEn: "Seafood Pasta",
    price: "185.000",
    image: "/images/special/page05-2.jpg",
  },
  {
    name: "Cơm Chiên Cá Hồi",
    nameEn: "Salmon Fried Rice",
    price: "168.000",
    image: "/images/special/page05-3.jpg",
  },
]

const fuguSashimi = [
  {
    name: "Fugu Sashimi",
    nameEn: "Cá Nóc Sashimi",
    price: "Liên hệ",
    image: "/images/special/page06.jpg",
    badge: "must-try" as const,
    description: "Món ăn đặc biệt theo mùa, được chế biến bởi đầu bếp có chứng chỉ",
  },
]

const wagyuSashimi = [
  {
    name: "Wagyu Sashimi",
    nameEn: "Bò Wagyu Sashimi A5",
    price: "688.000",
    image: "/images/special/page07-1.jpg",
    badge: "best-seller" as const,
  },
  {
    name: "Wagyu Sushi",
    nameEn: "Bò Wagyu Sushi A5",
    price: "358.000",
    image: "/images/special/page07-2.jpg",
  },
]

const wagyuGrilled = [
  {
    name: "Wagyu Hamburger",
    nameEn: "Hamburger Bò Wagyu",
    price: "388.000",
    image: "/images/special/page08-1.jpg",
  },
  {
    name: "Wagyu Nướng",
    nameEn: "Grilled Wagyu",
    price: "588.000",
    image: "/images/special/page08-2.jpg",
    badge: "best-seller" as const,
  },
  {
    name: "Lẩu Wagyu",
    nameEn: "Wagyu Hot Pot",
    price: "688.000",
    image: "/images/special/page08-3.jpg",
  },
]

const specialPages = [
  { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/0001-zsWytAtZ1GQtEcTzVX3sfRnleWdssm.jpg", alt: "Sea & Land Harmony - Gan Ngỗng, Bào Ngư, Bụng Cá Ngừ", pageNumber: 1 },
  { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/0002-uwWBhxQk4yudKl4Bh3WTyplmbCYNU3.jpg", alt: "Sushi Cao Cấp - Bụng Cá Ngừ, Nhum Biển", pageNumber: 2 },
  { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/0003-gBqob7Z8E9XwqDB3Kz9tek84gGlZuF.jpg", alt: "Hải Sản Cao Cấp - Cá Tuyết, Cá Hồi, Sò Điệp", pageNumber: 3 },
  { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/0004-zIx9BYjO6pRgChP9j8KUzMoxtKztfC.jpg", alt: "Tôm & Bò - Tôm Sú, Tuỷ Xương, Lưỡi Bò", pageNumber: 4 },
  { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/0005-hSYkBMGSxTl0z2P05tzw5t3cVTFhCF.jpg", alt: "Món Khác - Pudding, Mỳ Ý, Cơm", pageNumber: 5 },
  { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/0006-CuLTygwQniJYcxgQRiseIDWeOMXHHv.jpg", alt: "Fugu Sashimi - Cá Nóc", pageNumber: 6 },
  { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/0007-JNEyLdIMbwnyYTTxDXSY5zeEkwor8A.jpg", alt: "Wagyu Sashimi & Sushi", pageNumber: 7 },
  { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/0008-VwWLsuIfkWpYhjQL2wYsI2MRbDQSqu.jpg", alt: "Wagyu Nướng & Lẩu", pageNumber: 8 },
]

export default function SpecialDishesPage() {
  return (
    <MenuLayout>
      <MenuHero
        title="Món Đặc Biệt"
        titleEn="SPECIAL DISHES"
        image="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/0001-zsWytAtZ1GQtEcTzVX3sfRnleWdssm.jpg"
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
