import Image from "next/image"

interface MenuHeroProps {
  title: string
  titleEn?: string
  image: string
  description?: string
}

export function MenuHero({ title, titleEn, image, description }: MenuHeroProps) {
  return (
    <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
      <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover" priority />
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black" />
      <div className="relative z-10 text-center text-white px-4">
        <h1 className="font-serif text-4xl md:text-6xl font-bold mb-2 text-white">{title}</h1>
        {titleEn && <p className="text-xl md:text-2xl tracking-widest text-white/70">{titleEn}</p>}
        {description && <p className="mt-4 text-white/60 max-w-xl mx-auto">{description}</p>}
        <div className="w-20 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mt-6" />
      </div>
    </section>
  )
}
