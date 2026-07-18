"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useCart } from "@/context/CartContext";

export default function Header() {
  const { totalItems } = useCart();
  const [installPrompt, setInstallPrompt] = useState<any>(null);

  useEffect(() => {
    const handler = (e: any) => {
      e.preventDefault();
      setInstallPrompt(e);
    };
    window.addEventListener("beforeinstallprompt", handler);
    return () => window.removeEventListener("beforeinstallprompt", handler);
  }, []);

  const handleInstallClick = async () => {
    if (!installPrompt) return;
    installPrompt.prompt();
    await installPrompt.userChoice;
    setInstallPrompt(null);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-[#2e2a24]/10 bg-[#faf6f0]">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-4">
        <Link href="/" className="text-xl font-bold text-[#2e2a24]">
          Paradise Soap
        </Link>

        <nav className="hidden gap-8 sm:flex">
          <Link href="/" className="text-[#2e2a24]/80 hover:text-[#2e2a24]">
            الرئيسية
          </Link>
          <Link href="/products" className="text-[#2e2a24]/80 hover:text-[#2e2a24]">
            المنتجات
          </Link>
          <Link href="/about" className="text-[#2e2a24]/80 hover:text-[#2e2a24]">
            من نحن
          </Link>
          <Link href="/contact" className="text-[#2e2a24]/80 hover:text-[#2e2a24]">
            تواصل معنا
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          {installPrompt && (
            <button
              onClick={handleInstallClick}
              className="rounded-full bg-[#5B21B6] px-4 py-2 text-sm font-medium text-white hover:bg-[#4c1d95] transition"
            >
              تثبيت التطبيق
            </button>
          )}

          <Link
            href="/cart"
            className="relative rounded-full bg-[#faf6f0] px-4 py-2"
          >
            السلة
            {totalItems > 0 && (
              <span className="absolute -top-2 -left-2 flex h-5 w-5 items-center justify-center rounded-full bg-[#5B21B6] text-xs text-white">
                {totalItems}
              </span>
            )}
          </Link>
        </div>
      </div>
    </header>
  );
}
