"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useCart } from "@/context/CartContext";

export default function Header() {
  const { totalItems } = useCart();
  const [installPrompt, setInstallPrompt] = useState<any>(null);

  useEffect(() => {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.register("/sw.js").catch(() => {});
    }

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
        <Link href="/" className="flex items-center">
          <Image
            src="/paradise-logo.png"
            alt="Paradise Soap"
            width={48}
            height={48}
            className="h-12 w-12 rounded-full object-cover"
            priority
          />
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
            className="relative flex h-11 w-11 items-center justify-center rounded-full bg-[#8a9a5b]/10 text-[#2e2a24] hover:bg-[#8a9a5b]/20 transition"
            aria-label="السلة"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="9" cy="21" r="1" />
              <circle cx="20" cy="21" r="1" />
              <path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6" />
            </svg>
            {totalItems > 0 && (
              <span className="absolute -top-1 -left-1 flex h-5 w-5 items-center justify-center rounded-full bg-[#5B21B6] text-xs text-white">
                {totalItems}
              </span>
            )}
          </Link>
        </div>
      </div>
    </header>
  );
}
