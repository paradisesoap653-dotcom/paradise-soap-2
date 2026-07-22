import { products } from "@/db/schema";
import { eq } from "drizzle-orm";
import { notFound } from "next/navigation";
import Image from "next/image";
import AddToCartButton from "@/components/AddToCartButton";

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

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const productId = parseInt(id, 10);

  if (isNaN(productId)) {
    notFound();
  }

  let product = mockProducts.find((p) => p.id === productId) || null;

  try {
    if (process.env.DATABASE_URL) {
      const { getDb } = await import("@/db");
      const db = getDb();
      const [dbProduct] = await db
        .select()
        .from(products)
        .where(eq(products.id, productId));
      if (dbProduct) product = dbProduct as typeof mockProducts[number];
    }
  } catch (err) {
    console.warn("Product DB fetch failed, using mock product:", err);
  }

  if (!product) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-5xl px-6 py-16">
      <div className="grid gap-10 sm:grid-cols-2">
        <div className="relative h-96 w-full overflow-hidden rounded-2xl bg-[#faf6f0]">
          {product.imageUrl && (
            <Image src={product.imageUrl} alt={product.nameAr} fill className="object-cover" />
          )}
        </div>

        <div>
          <h1 className="mb-1 text-3xl font-bold text-[#2e2a24]">{product.nameAr}</h1>
          <p className="mb-4 text-lg text-[#2e2a24]/50">{product.nameEn}</p>
          <p className="mb-6 text-2xl font-bold text-[#8a9a5b]">{(product.price / 100).toFixed(2)} ج.س</p>
          <p className="mb-8 leading-relaxed text-[#2e2a24]/70">{product.descriptionAr}</p>

          {product.stock > 0 ? (
            <AddToCartButton product={product} />
          ) : (
            <p className="font-medium text-red-600">نفذت الكمية حاليًا</p>
          )}
        </div>
      </div>
    </main>
  );
}
