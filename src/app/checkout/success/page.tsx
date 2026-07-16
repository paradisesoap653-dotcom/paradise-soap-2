import Link from "next/link";

export default function CheckoutSuccessPage() {
  return (
    <main className="mx-auto max-w-2xl px-6 py-24 text-center">
      <div className="mb-6 text-6xl">✅</div>
      <h1 className="mb-4 text-3xl font-bold text-[#2e2a24]">
        تم استلام طلبك بنجاح!
      </h1>
      <p className="mb-8 text-[#2e2a24]/70">
        شكرًا لثقتك في Paradise Soap. سنتواصل معك قريبًا لتأكيد التفاصيل
        وتوصيل طلبك.
      </p>
      <Link
        href="/products"
        className="inline-block rounded-full bg-[#8a9a5b] px-8 py-3 font-medium text-white hover:bg-[#5f6e3c]"
      >
        متابعة التسوق
      </Link>
    </main>
  );
}
