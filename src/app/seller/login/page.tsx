"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function SellerLoginPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [form, setForm] = useState({
    phone: "",
    password: "",
  });

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await fetch("/api/sellers/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "حدث خطأ، حاول مرة أخرى");
        setLoading(false);
        return;
      }

      router.push("/seller/dashboard");
    } catch (err) {
      setError("حدث خطأ في الاتصال، حاول مرة أخرى");
      setLoading(false);
    }
  }

  return (
    <main className="mx-auto max-w-md px-6 py-16" dir="rtl">
      <h1 className="mb-2 text-2xl font-bold text-[#2e2a24]">
        تسجيل دخول البائع
      </h1>
      <p className="mb-8 text-sm text-[#2e2a24]/60">
        سجل دخولك عشان تدير منتجاتك
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
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
          </p>
        </div>

        <div>
          <label className="mb-1 block text-sm font-medium text-[#2e2a24]">
            كلمة السر
          </label>
          <div className="relative">
            <input
              required
              type={showPassword ? "text" : "password"}
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              className="w-full rounded-lg border border-[#2e2a24]/20 px-4 py-2 pl-11"
              dir="ltr"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-[#2e2a24]/50 hover:text-[#2e2a24]"
              aria-label={showPassword ? "إخفاء كلمة السر" : "إظهار كلمة السر"}
            >
              {showPassword ? (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21" />
                </svg>
              ) : (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              )}
            </button>
          </div>
          <div className="mt-2 text-left">
            <Link href="/seller/forgot-password" className="text-sm text-[#8a9a5b] hover:underline">
              نسيت كلمة السر؟
            </Link>
          </div>
        </div>

        {error && (
          <p className="rounded-lg bg-red-50 px-4 py-2 text-sm text-red-600">
            {error}
          </p>
        )}

        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-full bg-[#8a9a5b] px-6 py-3 font-medium text-white hover:bg-[#5f6e3c] disabled:opacity-50"
        >
          {loading ? "جاري تسجيل الدخول..." : "تسجيل الدخول"}
        </button>
      </form>

      <p className="mt-6 text-center text-sm text-[#2e2a24]/60">
        لسه معندكش حساب؟{" "}
        <Link href="/seller/register" className="font-medium text-[#8a9a5b]">
          سجل كبائع جديد
        </Link>
      </p>
    </main>
  );
}
