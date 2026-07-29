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

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);

    try {
      await fetch("/api/orders", {
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
    } catch (err) {
      console.warn("Quick order save failed:", err);
    } finally {
      setLoading(false);
    }

    const message = `مرحباً، أريد طلب: ${productName} - السعر: ${(price / 100).toFixed(2)} ج.س\nالاسم: ${name}\nرقم التليفون: ${phone}`;
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");

    setShowForm(false);
    setName("");
    setPhone("");
  }

  if (!showForm) {
    return (
      <button
        onClick={() => setShowForm(true)}
        className="flex w-full items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-3 font-medium text-white transition hover:opacity-90"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12.04 2C6
