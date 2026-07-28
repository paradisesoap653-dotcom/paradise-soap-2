"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLoginPage() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "حدث خطأ");
        setLoading(false);
        return;
      }

      router.push("/admin");
      router.refresh();
    } catch (err) {
      setError("حدث خطأ في الاتصال");
      setLoading(false);
    }
  }

  return (
    <main className="mx-auto flex min-h-[70vh] max-w-sm items-center px-6" dir="rtl">
      <form onSubmit={handleSubmit} className="w-full space-y-4">
        <h1 className="mb-6 text-center text-2xl font-bold text-[#2e2a24]">
          دخول الإدارة
        </h1>

        <input
          required
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="كلمة السر"
          className="w-full rounded-lg border border-[#2e2a24]/20 px-4 py-2"
          dir="ltr"
        />

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
          {loading ? "جاري الدخول..." : "دخول"}
        </button>
      </form>
    </main>
  );
}
