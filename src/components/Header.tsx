"use client";

import Link from "next/link";
import { useCart } from "@/context/CartContext";

export default function Header() {
  const { totalItems } = useCart();

  return (
    <header className="sticky top-0 z-50 border-b border-[#2e2a24]/10 bg-white/90 px-6 py-4 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between">
        <Link href="/" className="text-xl font-bold text-[#2e2a24]">
          Paradise Soap
        </Link>

        <nav className="hidden gap-8 sm:flex">
          <Link href="/" className="text-[#2e2a24]/80 hover:text-[#8a9a5b]">
            الرئيسية
          </Link>
          <Link href="/products" className="text-[#2e2a24]/80 hover:text-[#8a9a5b]">
            المنتجات
          </Link>
          <Link href="/about" className="text-[#2e2a24]/80 hover:text-[#8a9a5b]">
            من نحن
          </Link>
          <Link href="/contact" className="text-[#2e2a24]/80 hover:text-[#8a9a5b]">
            تواصل معنا
          </Link>
        </nav>

        <Link
          href="/cart"
          className="relative rounded-full bg-[#faf6f0] px-4 py-2 text-[#2e2a24] transition hover:bg-[#8a9a5b]/10"
        >
          السلة
          {totalItems > 0 && (
            <span className="absolute -top-2 -left-2 flex h-5 w-5 items-center justify-center rounded-full bg-[#8a9a5b] text-xs text-white">
              {totalItems}
            </span>
          )}
        </Link>
      </div>
    </header>
  );
}
