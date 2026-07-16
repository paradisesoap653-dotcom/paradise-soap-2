import { db } from "@/db";
import { products } from "@/db/schema";
import { eq } from "drizzle-orm";
import { notFound } from "next/navigation";
import Image from "next/image";
import AddToCartButton from "@/components/AddToCartButton";

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

  const [product] = await db
    .select()
    .from(products)
    .where(eq(products.id, productId));

  if (!product) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-5xl px-6 py-16">
      <div className="grid gap-10 sm:grid-cols-2">
        <div className="relative h-96 w-full overflow-hidden rounded-2xl bg-[#faf6f0]">
          {product.imageUrl && (
            <Image
              src={product.imageUrl}
              alt={product.nameAr}
              fill
              className="object-cover"
            />
          )}
        </div>

        <div>
          <h1 className="mb-1 text-3xl font-bold text-[#2e2a24]">
            {product.nameAr}
          </h1>
          <p className="mb-4 text-lg text-[#2e2a24]/50">{product.nameEn}</p>
          <p className="mb-6 text-2xl font-bold text-[#8a9a5b]">
            {(product.price / 100).toFixed(2)} ج.م
          </p>
          <p className="mb-8 leading-relaxed text-[#2e2a24]/70">
            {product.descriptionAr}
          </p>

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
