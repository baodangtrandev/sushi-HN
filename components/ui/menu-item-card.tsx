import Image from "next/image"

interface MenuItemCardProps {
  name: string
  nameEn?: string
  nameJp?: string
  price: string | number
  priceNote?: string
  image: string
  badge?: "best-seller" | "must-try"
  description?: string
}

export function MenuItemCard({ name, nameEn, nameJp, price, priceNote, image, badge, description }: MenuItemCardProps) {
  const formattedPrice = typeof price === "number" ? price.toLocaleString("vi-VN") : price

  return (
    <div className="group relative bg-[#141414] border border-white/10 rounded-lg overflow-hidden shadow-md hover:shadow-xl hover:border-white/20 transition-all">
      {/* Image */}
      <div className="relative aspect-square overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          alt={name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {/* Badge */}
        {badge && (
          <div className="absolute top-3 left-3">
            <span
              className={`inline-block px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white ${
                badge === "best-seller"
                  ? "bg-gradient-to-r from-primary to-red-800"
                  : "bg-gradient-to-r from-primary to-red-800"
              }`}
            >
              {badge === "best-seller" ? "Best Seller" : "Must Try"}
            </span>
          </div>
        )}
        {/* Japanese text overlay */}
        {nameJp && (
          <div className="absolute left-3 bottom-3 vertical-text text-white/80 text-sm font-medium drop-shadow-lg">
            {nameJp}
          </div>
        )}
      </div>

      {/* Content - Updated text colors for dark theme */}
      <div className="p-4 text-center">
        <h3 className="font-serif font-bold text-white text-lg">{name}</h3>
        {nameEn && <p className="text-white/50 text-sm italic mt-1">{nameEn}</p>}
        {description && <p className="text-white/40 text-xs mt-2">{description}</p>}
        <p className="text-primary font-bold text-lg mt-2">
          {formattedPrice}
          {priceNote && <span className="text-white/40 text-xs font-normal ml-1">{priceNote}</span>}
        </p>
      </div>
    </div>
  )
}
