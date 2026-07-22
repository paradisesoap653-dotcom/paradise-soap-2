import { products } from "@/db/schema";
import { eq } from "drizzle-orm";
import Link from "next/link";
import Image from "next/image";

export const dynamic = "force-dynamic";

const mockProducts = [
  {
    id: 1,
    nameAr: "صابون العسل والزعفران",
    nameEn: "Honey & Saffron Soap",
    descriptionAr: "صابون طبيعي فاخر بخلاصة العسل والزعفران، يمنح بشرتك نعومة ولمعان طبيعي.",
    descriptionEn: "A luxurious natural soap infused with honey and saffron extract for soft, radiant skin.",
    price: 12000,
    imageUrl: "https://images.unsplash.com/photo-1600857062241-98e5dba7f214?w=800",
    category: "soap",
    stock: 50,
    isActive: true,
  },
  {
    id: 2,
    nameAr: "صابون زيت الزيتون الكلاسيكي",
    nameEn: "Classic Olive Oil Soap",
    descriptionAr: "صابون تقليدي مصنوع من زيت الزيتون البكر الممتاز، مثالي للبشرة الحساسة.",
    descriptionEn: "Traditional soap crafted from extra virgin olive oil, perfect for sensitive skin.",
    price: 9000,
    imageUrl: "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=800",
    category: "soap",
    stock: 80,
    isActive: true,
  },
  {
    id: 3,
    nameAr: "صابون اللافندر المهدئ",
    nameEn: "Calming Lavender Soap",
    descriptionAr: "برائحة اللافندر المنعشة، يساعد على الاسترخاء ويترك بشرتك منتعشة طوال اليوم.",
    descriptionEn: "With a refreshing lavender scent, helps you relax and keeps your skin fresh all day.",
    price: 10000,
    imageUrl: "https://images.unsplash.com/photo-1614806687209-1e0a5b6b5a3f?w=800",
    category: "soap",
    stock: 60,
    isActive: true,
  },
];

export default async function ProductsPage() {
  let allProducts = mockProducts;

  // Try to load from DB at runtime; if it fails or DATABASE_URL is not set, fall back to mock data
  try {
    if (process.env.DATABASE_URL) {
      const { getDb } = await import("@/db");
      const db = getDb();
      const rows = await db
        .select()
        .from(products)
        .where(eq(products.isActive, true));

      if (Array.isArray(rows) && rows.length > 0) {
        allProducts = rows as typeof mockProducts;
      }
    }
  } catch (err) {
    // keep mockProducts as fallback
    console.warn("Products DB fetch failed, using mock products:", err);
  }

  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      <div className="mb-12 text-center">
        <h1 className="mb-3 text-3xl font-bold text-[#2e2a24]">منتجاتنا</h1>
        <p className="text-[#2e2a24]/70">تشكيلة Paradise Soap الكاملة من الصابون الطبيعي الفاخر</p>
      </div>

      {allProducts.length === 0 ? (
        <p className="text-center text-[#2e2a24]/60">لا توجد منتجات متاحة حاليًا.</p>
      ) : (
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {allProducts.map((product) => (
            <Link
              key={product.id}
              href={`/products/${product.id}`}
