"use client";

import { useState } from "react";
import { useCart } from "@/context/CartContext";
import { useRouter } from "next/navigation";

export default function CheckoutPage() {
  const { items, totalPrice, clearCart } = useCart();
  const router = useRouter();

  const [form, setForm] = useState({
    customerName: "",
    customerPhone: "",
    customerEmail: "",
    districtAr: "",
    addressDetails: "",
    paymentMethod: "cash",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await fetch("/api/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          totalAmount: totalPrice,
          items: items.map((i) => ({
            productId: i.productId,
            name: i.name,
            price: i.price,
            quantity: i.quantity,
          })),
        }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "حدث خطأ أثناء إرسال الطلب");
      }

      clearCart();
      router.push("/checkout/success");
    } catch (err) {
      setError(err instanceof Error ? err.message : "حدث خطأ غير متوقع");
    } finally {
      setLoading(false);
    }
  }

  if (items.length === 0) {
    return (
      <main className="mx-auto max-w-2xl px-6 py-24 text-center">
        <p className="text-[#2e2a24]/60">سلتك فارغة، لا يوجد ما يمكن إتمامه.</p>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-2xl px-6 py-16">
      <h1 className="mb-8 text-3xl font-bold text-[#2e2a24]">إتمام الطلب</h1>
      
      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="mb-1 block text-sm font-medium text-[#2e2a24]">
            الاسم بالكامل *
          </label>
          <input
            required
            name="customerName"
            value={form.customerName}
            onChange={handleChange}
            className="w-full rounded-lg border border-[#2e2a24]/20 px-4 py-2 focus:border-[#8a9a5b] focus:outline-none"
          />
        </div>

        <div>
          <label className="mb-1 block text-sm font-medium text-[#2e2a24]">
            رقم الهاتف *
          </label>
          <input
            required
            name="customerPhone"
            value={form.customerPhone}
            onChange={handleChange}
            className="w-full rounded-lg border border-[#2e2a24]/20 px-4 py-2 focus:border-[#8a9a5b] focus:outline-none"
          />
        </div>

        <div>
          <label className="mb-1 block text-sm font-medium text-[#2e2a24]">
            البريد الإلكتروني (اختياري)
          </label>
