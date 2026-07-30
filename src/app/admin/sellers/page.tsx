"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

type Seller = {
  id: number;
  name: string;
  storeName: string | null;
  phone: string;
  isActive: boolean;
  createdAt: string;
};

export default function AdminSellersPage() {
  const [sellers, setSellers] = useState<Seller[]>([]);
  const [loading, setLoading] = useState(true);
  const [resettingId, setResettingId] = useState<number | null>(null);
  const [resultFor, setResultFor] = useState<{ id: number; password: string } | null>(null);

  async function loadSellers() {
    setLoading(true);
    const res = await fetch("/api/admin/sellers");
    const data = await res.json();
    setSellers(data);
    setLoading(false);
  }

  useEffect(() => {
    loadSellers();
  }, []);

  async function handleReset(sellerId: number) {
    if (!confirm("هل أنت متأكد من إعادة تعيين كلمة سر هذا البائع؟ كلمة السر القديمة لن تعمل بعد الآن.")) {
      return;
    }

    setResettingId(sellerId);
    setResultFor(null);

    try {
      const res = await fetch("/api/admin/sellers/reset-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ sellerId }),
      });
      const data = await res.json();

      if (!res.ok) {
        alert(data.error || "فشل إعادة التعيين");
        return;
      }

      setResultFor({ id: sellerId, password: data.newPassword });
    } catch (err) {
      alert("حدث خطأ في الاتصال");
    } finally {
      setResettingId(null);
    }
  }

  return (
    <main className="mx-auto max-w-4xl px-6 py-12" dir="rtl">
      <div className="mb-8 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-[#2e2a24]">البائعون</h1>
        <Link
          href="/admin"
          className="rounded-full bg-[#faf6f0] px-5 py-2 text-sm font-medium text-[#2e2a24] hover:bg-[#8a9a5b]/10"
        >
          رجوع للوحة التحكم
        </Link>
      </div>

      {loading ? (
        <p className="text-[#2e2a24]/60">جاري التحميل...</p>
      ) : sellers.length === 0 ? (
        <p className="text-[#2e2a24]/60">لا يوجد بائعون مسجلون بعد.</p>
      ) : (
        <div className="space-y-3">
          {sellers.map((s) => (
            <div key={s.id} className="rounded-xl bg-[#faf6f0] p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold text-[#2e2a24]">{s.name}</p>
                  {s.storeName && (
                    <p className="text-sm text-[#2e2a24]/60">{s.storeName}</p>
                  )}
                  <p dir="ltr" className="text-sm text-[#2e2a24]/60 text-right">
                    {s.phone}
                  </p>
                </div>
                <button
                  onClick={() => handleReset(s.id)}
                  disabled={resettingId === s.id}
                  className="rounded-full bg-[#8a9a5b] px-4 py-1.5 text-sm font-medium text-white hover:bg-[#5f6e3c] disabled:opacity-50"
                >
                  {resettingId === s.id ? "جاري..." : "إعادة تعيين كلمة السر"}
                </button>
              </div>

              {resultFor?.id === s.id && (
                <div className="mt-3 rounded-lg bg-[#8a9a5b]/10 p-3">
                  <p className="text-sm text-[#2e2a24]">
                    كلمة السر الجديدة (انسخها وأرسلها للبائع الآن، لن تظهر مرة أخرى):
                  </p>
                  <p dir="ltr" className="mt-1 text-right text-lg font-bold text-[#5f6e3c]">
                    {resultFor.password}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </main>
  );
}
