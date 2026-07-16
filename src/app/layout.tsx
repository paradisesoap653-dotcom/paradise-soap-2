
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Paradise Soap | بارادايس سوب - منتجات صابون طبيعية فاخرة",
  description:
    "متجر Paradise Soap لمنتجات الصابون الطبيعي الفاخر. صابون يدوي بمكونات طبيعية 100%، مثالي للعناية ببشرتك.",
  keywords: ["صابون طبيعي", "صابون يدوي", "natural soap", "handmade soap", "Paradise Soap", "بارادايس سوب"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body className="antialiased">{children}</body>
    </html>
  );
}
