"use client";

import { useCart } from "@/context/CartContext";
import Link from "next/link";
import Image from "next/image";

export default function CartPage() {
  const { items, removeItem, updateQuantity, totalPrice } = useCart();

  if (items.length === 0) {
    return (
      <main className="mx-auto max-w-2xl px-6 py-24 text-center">
        <h1 className="mb-4 text-2xl font-bold text-[#2e2a24]">
          سلتك فارغة
        </h1>
        <p className="mb-8 text-[#2e2a24]/60">
          لم تقم بإضافة أي منتجات بعد.
        </p>
        <Link
          href="/products"
          className="inline-block rounded-full bg-[#8a9a5b] px-8 py-3 font-medium text-white hover:bg-[#5f6e3c]"
        >
          تصفح المنتجات
        </Link>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="mb-8 text-3xl font-bold text-[#2e2a24]">سلة التسوق</h1>

      <div className="mb-8 space-y-4">
        {items.map((item) => (
          <div
            key={item.productId}
            className="flex items-center gap-4 rounded-xl bg-[#faf6f0] p-4"
          >
            <div className="relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-lg bg-white">
              {item.imageUrl && (
                <Image
                  src={item.imageUrl}
                  alt={item.name}
                  fill
                  className="object-cover"
                />
              )}
            </div>

            <div className="flex-1">
              <h3 className="font-semibold text-[#2e2a24]">{item.name}</h3>
              <p className="text-[#8a9a5b]">
                {(item.price / 100).toFixed(2)} ج.م
              </p>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => updateQuantity(item.productId, item.quantity - 1)}
                className="h-8 w-8 rounded-full bg-white text-[#2e2a24] hover:bg-[#8a9a5b]/10"
              >
                −
              </button>
              <span className="w-6 text-center">{item.quantity}</span>
              <button
                onClick={() => updateQuantity(item.productId, item.quantity + 1)}
                className="h-8 w-8 rounded-full bg-white text-[#2e2a24] hover:bg-[#8a9a5b]/10"
              >
                +
              </button>
            </div>

            <button
              onClick={() => removeItem(item.productId)}
              className="text-sm text-red-500 hover:underline"
            >
              حذف
            </button>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-between border-t border-[#2e2a24]/10 pt-6">
        <span className="text-xl font-bold text-[#2e2a24]">
          الإجمالي: {(totalPrice / 100).toFixed(2)} ج.م
        </span>
        <Link
          href="/checkout"
          className="rounded-full bg-[#8a9a5b] px-8 py-3 font-medium text-white hover:bg-[#5f6e3c]"
        >
          إتمام الطلب
        </Link>
      </div>
    </main>
  );
}
