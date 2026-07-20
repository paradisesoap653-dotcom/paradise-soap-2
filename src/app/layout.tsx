import type { Metadata } from "next";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Paradise Soap | صابون طبيعية فاخرة",
  description:
    "متجر Paradise Soap مثالي للعناية ببشرتك، 100% طبيعي، صناعة يدوية",
  keywords: ["صابون طبيعي", "صابون يدوي", "Paradise Soap"],
  manifest: "/manifest.json",
  icons: {
    icon: "/paradise-icon-192.png",
    shortcut: "/paradise-icon-192.png",
    apple: "/paradise-icon-512.png",
  },
};

export const viewport = {
  themeColor: "#D81BC9",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body className="antialiased">
        <CartProvider>
          <Header />
          {children}
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
