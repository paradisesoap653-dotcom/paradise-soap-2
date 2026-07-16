"use client";

import { useState } from "react";
import { useCart } from "@/context/CartContext";

type Product = {
  id: number;
  nameAr: string;
  nameEn: string;
  price: number;
  imageUrl: string | null;
};

export default function AddToCartButton({ product }: { product: Product }) {
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);

  function handleAdd() {
    addItem({
      productId: product.id,
      name: product.nameAr,
      price: product.price,
      imageUrl: product.imageUrl,
      quantity: 1,
    });
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  }

  return (
    <button
      onClick={handleAdd}
      className="w-full rounded-full bg-[#8a9a5b] px-8 py-3 text-lg font-medium text-white transition hover:bg-[#5f6e3c]"
    >
      {added ? "تمت الإضافة ✓" : "أضف إلى السلة"}
    </button>
  );
}
