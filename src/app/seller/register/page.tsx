"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

// يحول أي شكل يكتبه المستخدم للرقم المحلي (بيشيل +249 أو 249 أو الصفر الأول لو موجودين)
// ويرجع الرقم بصيغة دولية كاملة جاهزة لـ Twilio: +249XXXXXXXXX
function normalizePhone(input: string): string {
  let digits = input.replace(/[^\d]/g, ""); // يشيل أي حروف أو رموز غير أرقام

  if (digits.startsWith("249")) {
    digits = digits.slice(3);
  }
  if (digits.startsWith("0")) {
    digits = digits.slice(1);
  }

  return `+249${digits}`;
}

export default function SellerRegisterPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState({
    phone: "",
    password: "",
    name: "",
    storeName: "",
  });

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");

    const fullPhone = normalizePhone(form.phone);

    // تحقق بسيط: لازم 9 أرقام بعد +249 (أرقام السودان المحلية 9 خانات بعد الصفر)
    const localDigits = fullPhone.replace("+249", "");
    if (localDigits.length !== 9) {
      setError("رقم الهاتف غير صحيح، تأكد إنك كتبته كامل من غير رمز الدولة");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/sellers/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, phone: fullPhone }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "حدث خطأ، حاول مرة أخرى");
        setLoading(false);
        return;
      }

      router.push("/seller/login");
    } catch (err) {
      setError("حدث خطأ في الاتصال، حاول مرة أخرى");
      setLoading(false);
    }
  }

  return (
    <main className="mx-auto max-w-md px-6 py-16" dir="rtl">
      <h1 className="mb-2 text-2xl font-bold text-[#2e2a24]">
        انضم كبائع
      </h1>
      <p className="mb-8 text-sm text-[#2e2a24]/60">
        سجل حسابك عشان تقدر تضيف منتجاتك على المنصة
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="mb-1 block text-sm font-medium text-[#2e2a24]">
            الاسم
          </label>
          <input
            required
            type="text"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="w-full rounded-lg border border-[#2e2a24]/20 px-4 py-2"
            placeholder="اسمك الكامل"
          />
        </div>

        <div>
          <label className="mb-1 block text-sm font-medium text-[#2e2a24]">
            اسم المتجر (اختياري)
          </label>
          <input
            type="text"
            value={form.storeName}
            onChange={(e) => setForm({ ...form, storeName: e.target.value })}
            className="w-full rounded-lg border border-[#2e2a24]/20 px-4 py-2"
            placeholder="اسم متجرك"
          />
        </div>

        <div>
          <label className="mb-1 block text-sm font-medium text-[#2e2a24]">
            رقم التليفون
          </label>
          <div className="flex overflow-hidden rounded-lg border border-[#2e2a24]/20" dir="ltr">
            <span className="flex items-center bg-[#2e2a24]/5 px-3 text-sm font-medium text-[#2e2a24]/70">
              +249
            </span>
            <input
              required
              type="tel"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              className="w-full px-4 py-2 outline-none"
              placeholder="9xxxxxxxx"
              dir="ltr"
            />
          </div>
          <p className="mt-1 text-xs text-[#2e2a24]/50">
            اكتب رقمك من غير الصفر أو رمز الدولة، مثال: 913009060
