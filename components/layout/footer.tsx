import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
          {/* Left - Kanji Character 人 */}
          <div className="hidden lg:flex justify-center">
            <svg
              viewBox="0 0 100 120"
              className="h-32 w-auto text-white opacity-90"
            >
              <text
                x="50"
                y="100"
                fontSize="100"
                fontFamily="serif"
                fill="currentColor"
                textAnchor="middle"
              >
                人
              </text>
            </svg>
          </div>

          {/* Center - Contact Info */}
          <div className="text-center space-y-6">
            <div>
              <p className="text-lg font-serif tracking-wider">290 Kim Ma,</p>
              <p className="text-white/70 text-sm">Ngoc Ha, Hanoi</p>
            </div>

            <div>
              <p className="text-white/50 text-xs tracking-wider uppercase mb-1">
                Hotline
              </p>
              <a
                href="tel:0358290290"
                className="text-2xl font-light tracking-wider hover:text-primary transition-colors"
              >
                035 829 0290
              </a>
            </div>

            <div>
              <p className="text-white/50 text-xs tracking-wider uppercase mb-1">
                Facebook
              </p>
              <a
                href="https://facebook.com/nhansushihanoi"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg font-serif tracking-wide hover:text-primary transition-colors"
              >
                Nhan Sushi Hanoi
              </a>
            </div>

            <div className="pt-4">
              <p className="text-white/50 text-xs tracking-wider">
                11:00 - 14:00 | 17:30 - 22:00
              </p>
            </div>
          </div>

          {/* Right - Brand Logo */}
          <div className="flex justify-center lg:justify-end">
            <Image
              src="/images/nhan-sushi-logo.png"
              alt="Nhan Sushi Hanoi"
              width={200}
              height={200}
              className="h-40 w-auto"
            />
          </div>
        </div>

        {/* Menu Links Row */}
        <div className="mt-16 pt-8 border-t border-white/10">
          <nav className="flex flex-wrap justify-center gap-x-8 gap-y-3">
            <Link
              href="/menu/special"
              className="text-xs text-white/50 hover:text-white transition-colors tracking-wider uppercase"
            >
              Món Đặc Biệt
            </Link>
            <Link
              href="/menu/sashimi"
              className="text-xs text-white/50 hover:text-white transition-colors tracking-wider uppercase"
            >
              Sashimi
            </Link>
            <Link
              href="/menu/sushi"
              className="text-xs text-white/50 hover:text-white transition-colors tracking-wider uppercase"
            >
              Sushi
            </Link>
            <Link
              href="/menu/grilled"
              className="text-xs text-white/50 hover:text-white transition-colors tracking-wider uppercase"
            >
              Món Nướng
            </Link>
            <Link
              href="/menu/fried"
              className="text-xs text-white/50 hover:text-white transition-colors tracking-wider uppercase"
            >
              Món Chiên
            </Link>
            <Link
              href="/menu/rice-noodles"
              className="text-xs text-white/50 hover:text-white transition-colors tracking-wider uppercase"
            >
              Cơm & Mì
            </Link>
            <Link
              href="/menu/hotpot"
              className="text-xs text-white/50 hover:text-white transition-colors tracking-wider uppercase"
            >
              Lẩu
            </Link>
          </nav>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/30">
            <p>
              © 2016 - {new Date().getFullYear()} Nhan Sushi Hanoi. All rights
              reserved.
            </p>
            <p className="flex items-center gap-2">
              <span>Giá đã bao gồm VAT</span>
              <span className="text-white/20">|</span>
              <span>All prices are inclusive of VAT</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
