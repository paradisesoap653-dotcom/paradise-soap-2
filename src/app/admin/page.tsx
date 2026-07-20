"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

type Product = {
  id: number;
  nameAr: string;
  nameEn: string;
  price: number;
  stock: number;
  isActive: boolean;
  imageUrl: string | null;
};

export default function AdminPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [form, setForm] = useState({
    nameAr: "",
    nameEn: "",
    descriptionAr: "",
    descriptionEn: "",
    price: "",
    imageUrl: "",
    stock: "",
  });

  async function loadProducts() {
    setLoading(true);
    const res = await fetch("/api/products");
    const data = await res.json();
    setProducts(data);
    setLoading(false);
  }

  useEffect(() => {
    loadProducts();
  }, []);

  async function handleImageUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);
    try {
      const formData = new FormData();
      formData.append("file", file);

      const res = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();

      if (data.url) {
        setForm((prev) => ({ ...prev, imageUrl: data.url }));
      } else {
        alert("فشل رفع الصورة، حاول مرة أخرى");
      }
    } catch (err) {
      alert("حدث خطأ أثناء رفع الصورة");
    } finally {
      setUploading(false);
    }
  }

  async function handleAddProduct(e: React.FormEvent) {
    e.preventDefault();
    await fetch("/api/products", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...form,
        price: Math.round(parseFloat(form.price) * 100),
        stock: parseInt(form.stock, 10) || 0,
      }),
    });
    setForm({
      nameAr: "",
      nameEn: "",
      descriptionAr: "",
      descriptionEn: "",
      price: "",
      imageUrl: "",
      stock: "",
    });
    setShowForm(false);
    loadProducts();
  }

  async function handleDelete(id: number) {
    if (!confirm("هل أنت متأكد من حذف هذا المنتج؟")) return;
    await fetch(`/api/products?id=${id}`, { method: "DELETE" });
    loadProducts();
  }

  return (
    <main className="mx-auto max-w-5xl px-6 py-12">
      <div className="mb-8 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-[#2e2a24]">لوحة التحكم</h1>
        <div className="flex gap-3">
          <Link
            href="/admin/orders"
            className="rounded-full bg-[#faf6f0] px-5 py-2 text-sm font-medium text-[#2e2a24] hover:bg-[#8a9a5b]/10"
          >
            عرض الطلبات
          </Link>
          <button
            onClick={() => setShowForm(!showForm)}
            className="rounded-full bg-[#8a9a5b] px-5 py-2 text-sm font-medium text-white hover:bg-[#5f6e3c]"
          >
            {showForm ? "إلغاء" : "+ إضافة منتج"}
          </button>
        </div>
      </div>

      {showForm && (
        <form
          onSubmit={handleAddProduct}
          className="mb-10 space-y-4 rounded-2xl bg-[#faf6f0] p-6"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <input
              required
              placeholder="الاسم بالعربي"
              value={form.nameAr}
              onChange={(e) => setForm({ ...form, nameAr: e.target.value })}
              className="rounded-lg border border-[#2e2a24]/20 px-4 py-2"
            />
            <input
              required
              placeholder="Name in English"
              value={form.nameEn}
              onChange={(e) => setForm({ ...form, nameEn: e.target.value })}
              className="rounded-lg border border-[#2e2a24]/20 px-4 py-2"
            />
          </div>
          <textarea
            placeholder="الوصف بالعربي"
            value={form.descriptionAr}
            onChange={(e) => setForm({ ...form, descriptionAr: e.target.value })}
            className="w-full rounded-lg border border-[#2e2a24]/20 px-4 py-2"
            rows={2}
          />
          <div className="grid gap-4 sm:grid-cols-2">
            <input
              required
              type="number"
              step="0.01"
              placeholder="السعر (ج.س)"
              value={form.price}
              onChange={(e) => setForm({ ...form, price: e.target.value })}
              className="rounded-lg border border-[#2e2a24]/20 px-4 py-2"
            />
            <input
              type="number"
              placeholder="الكمية بالمخزون"
              value={form.stock}
              onChange={(e) => setForm({ ...form, stock: e.target.value })}
              className="rounded-lg border border-[#2e2a24]/20 px-4 py-2"
            />
          </div>

          {/* Image Upload */}
          <div className="rounded-lg border border-dashed border-[#2e2a24]/30 p-4">
            <label className="mb-2 block text-sm font-medium text-[#2e2a24]">
              صورة المنتج
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              disabled={uploading}
              className="w-full text-sm text-[#2e2a24]/70"
            />
            {uploading && (
              <p className="mt-2 text-sm text-[#8a9a5b]">جاري رفع الصورة...</p>
            )}
            {form.imageUrl && !uploading && (
              <div className="mt-3">
                <img
                  src={form.imageUrl}
                  alt="معاينة"
                  className="h-32 w-32 rounded-lg object-cover"
                />
              </div>
            )}
          </div>

          <button
            type="submit"
            disabled={uploading}
            className="rounded-full bg-[#5f6e3c] px-6 py-2 font-medium text-white disabled:opacity-50"
          >
            حفظ المنتج
          </button>
        </form>
      )}

      {loading ? (
        <p className="text-[#2e2a24]/60">جاري التحميل...</p>
      ) : (
        <div className="space-y-3">
          {products.map((p) => (
            <div
              key={p.id}
              className="flex items-center justify-between rounded-xl bg-[#faf6f0] p-4"
            >
              <div>
                <p className="font-semibold text-[#2e2a24]">{p.nameAr}</p>
                <p className="text-sm text-[#2e2a24]/60">
                  {(p.price / 100).toFixed(2)} ج.س · مخزون: {p.stock}
                </p>
              </div>
              <button
                onClick={() => handleDelete(p.id)}
                className="text-sm text-red-500 hover:underline"
              >
                حذف
              </button>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}
