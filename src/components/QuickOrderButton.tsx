"use client";

import { useState } from "react";

type QuickOrderButtonProps = {
  productId: number;
  productName: string;
  price: number;
};

const WHATSAPP_NUMBER = "249114556141";

export default function QuickOrderButton({
  productId,
  productName,
  price,
}: QuickOrderButtonProps) {
  const [showForm, setShowForm] = useState(false);
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await fetch("/api/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          customerName: name,
          customerPhone: phone,
          districtAr: "عبر الطلب السريع",
          paymentMethod: "cash",
          totalAmount: price,
          items: [{ productId, name: productName, price, quantity: 1 }],
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "تعذر حفظ الطلب، حاول مرة أخرى");
        setLoading(false);
        return;
      }

      const message = `مرحباً، أريد طلب: ${productName} - السعر: ${(price / 100).toFixed(2)} ج.س\nالاسم: ${name}\nرقم التليفون: ${phone}`;
      const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
      window.open(url, "_blank");

      setShowForm(false);
      setName("");
      setPhone("");
    } catch (err) {
      setError("حدث خطأ في الاتصال، حاول مرة أخرى");
    } finally {
      setLoading(false);
    }
  }

  if (!showForm) {
    return (
      <button
        onClick={() => setShowForm(true)}
        className="flex w-full items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-3 font-medium text-white transition hover:opacity-90"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.28-1.38a9.9 9.9 0 004.76 1.21h.01c5.46 0 9.9-4.45 9.9-9.91C21.96 6.45 17.5 2 12.04 2zm0 18.04h-.01a8.2 8.2 0 01-4.18-1.14l-.3-.18-3.13.82.84-3.05-.2-.31a8.14 8.14 0 01-1.25-4.27c0-4.51 3.68-8.19 8.2-8.19a8.15 8.15 0 018.19 8.19c0 4.51-3.68 8.13-8.16 8.13zm4.48-6.13c-.24-.12-1.44-.71-1.67-.79-.22-.08-.39-.12-.55.12-.16.24-.63.79-.78.96-.14.16-.28.18-.53.06-.24-.12-1.03-.38-1.96-1.21-.72-.65-1.21-1.44-1.35-1.68-.14-.24-.02-.37.11-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.55-1.32-.75-1.81-.2-.48-.4-.41-.55-.42-.14-.01-.31-.01-.47-.01-.16 0-.42.06-.65.3-.22.24-.85.83-.85 2.03s.87 2.36 1 2.52c.12.16 1.71 2.62 4.15 3.67.58.25 1.03.4 1.38.51.58.18 1.1.16 1.52.1.46-.07 1.44-.59 1.64-1.15.2-.57.2-1.05.14-1.15-.06-.1-.22-.16-.46-.28z" />
        </svg>
        طلب عبر الواتساب
      </button>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-3 rounded-2xl bg-[#faf6f0] p-4"
    >
      <input
        required
        placeholder="اسمك"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full rounded-lg border border-[#2e2a24]/20 px-4 py-2"
      />
      <input
        required
        type="tel"
        placeholder="رقم التليفون"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        dir="ltr"
        className="w-full rounded-lg border border-[#2e2a24]/20 px-4 py-2"
      />

      {error && (
        <p className="rounded-lg bg-red-50 px-4 py-2 text-sm text-red-600">
          {error}
        </p>
      )}

      <div className="flex gap-2">
        <button
          type="submit"
          disabled={loading}
          className="flex-1 rounded-full bg-[#25D366] px-6 py-2.5 font-medium text-white disabled:opacity-50"
        >
          {loading ? "جاري الإرسال..." : "إرسال عبر واتساب"}
        </button>
        <button
          type="button"
          onClick={() => setShowForm(false)}
          className="rounded-full bg-white px-5 py-2.5 font-medium text-[#2e2a24] border border-[#2e2a24]/20"
        >
          إلغاء
        </button>
      </div>
    </form>
  );
}
