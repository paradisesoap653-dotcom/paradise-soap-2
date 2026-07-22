"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

type Order = {
  id: number;
  customerName: string;
  customerPhone: string;
  districtAr: string;
  addressDetails: string | null;
  paymentMethod: string;
  totalAmount: number;
  status: string;
  createdAt: string;
  items: { name: string; price: number; quantity: number }[];
};

const statusLabels: Record<string, string> = {
  pending: "قيد الانتظار",
  confirmed: "مؤكد",
  shipped: "تم الشحن",
  delivered: "تم التوصيل",
  cancelled: "ملغي",
};

export default function AdminOrdersPage() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/orders")
      .then((res) => res.json())
      .then((data) => {
        setOrders(data);
        setLoading(false);
      });
  }, []);

  return (
    <main className="mx-auto max-w-4xl px-6 py-12">
      <div className="mb-8 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-[#2e2a24]">الطلبات</h1>
        <Link
          href="/admin"
          className="rounded-full bg-[#faf6f0] px-5 py-2 text-sm font-medium text-[#2e2a24] hover:bg-[#8a9a5b]/10"
        >
          إدارة المنتجات
        </Link>
      </div>

      {loading ? (
        <p className="text-[#2e2a24]/60">جاري التحميل...</p>
      ) : orders.length === 0 ? (
        <p className="text-[#2e2a24]/60">لا توجد طلبات حتى الآن.</p>
      ) : (
        <div className="space-y-4">
          {orders.map((order) => (
            <div key={order.id} className="rounded-xl bg-[#faf6f0] p-5">
              <div className="mb-3 flex items-center justify-between">
                <span className="font-semibold text-[#2e2a24]">
                  طلب #{order.id} — {order.customerName}
                </span>
                <span className="rounded-full bg-white px-3 py-1 text-xs font-medium text-[#5f6e3c]">
                  {statusLabels[order.status] || order.status}
                </span>
              </div>
              <p className="mb-1 text-sm text-[#2e2a24]/70">
                📞 {order.customerPhone} · 📍 {order.districtAr}
              </p>
              {order.addressDetails && (
                <p className="mb-1 text-sm text-[#2e2a24]/70">
                  {order.addressDetails}
                </p>
              )}
              <p className="mb-3 text-sm text-[#2e2a24]/70">
                طريقة الدفع:{" "}
                {order.paymentMethod === "cash" ? "الدفع عند الاستلام" : "تحويل بنكي"}
              </p>
              <div className="mb-3 space-y-1 border-t border-[#2e2a24]/10 pt-3">
                {order.items.map((item, idx) => (
                  <p key={idx} className="text-sm text-[#2e2a24]/80">
                    {item.name} × {item.quantity} — {(item.price / 100).toFixed(2)} ج.س
                  </p>
                ))}
              </div>
              <p className="font-bold text-[#8a9a5b]">
                الإجمالي: {(order.totalAmount / 100).toFixed(2)} ج.س
              </p>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}
