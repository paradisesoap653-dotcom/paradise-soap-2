import { db } from "@/db";
import { products } from "@/db/schema";
import { eq } from "drizzle-orm";
import Link from "next/link";
import Image from "next/image";

export const dynamic = "force-dynamic";

export default async function ProductsPage() {
  const allProducts = await db
    .select()
    .from(products)
    .where(eq(products.isActive, true));

  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      <div className="mb-12 text-center">
        <h1 className="mb-3 text-3xl font-bold text-[#2e2a24]">
          منتجاتنا
        </h1>
        <p className="text-[#2e2a24]/70">
          تشكيلة Paradise Soap الكاملة من الصابون الطبيعي الفاخر
        </p>
      </div>

      {allProducts.length === 0 ? (
        <p className="text-center text-[#2e2a24]/60">
          لا توجد منتجات متاحة حاليًا.
        </p>
      ) : (
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {allProducts.map((product) => (
            <Link
              key={product.id}
              href={`/products/${product.id}`}
              className="group overflow-hidden rounded-2xl bg-white shadow-sm transition hover:shadow-lg"
            >
              <div className="relative h-56 w-full overflow-hidden bg-[#faf6f0]">
                {product.imageUrl && (
                  <Image
                    src={product.imageUrl}
                    alt={product.nameAr}
                    fill
                    className="object-cover transition duration-300 group-hover:scale-105"
                  />
                )}
              </div>
              <div className="p-5">
                <h3 className="mb-1 text-lg font-semibold text-[#2e2a24]">
                  {product.nameAr}
                </h3>
                <p className="mb-3 text-sm text-[#2e2a24]/60">
                  {product.nameEn}
                </p>
                <p className="text-lg font-bold text-[#8a9a5b]">
                  {(product.price / 100).toFixed(2)} ج.م
                </p>
              </div>
            </Link>
          ))}
        </div>
      )}
    </main>
  );
}
