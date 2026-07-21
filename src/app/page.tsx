import Link from "next/link";

const features = [
  {
    title: "مكونات طبيعية 100%",
    desc: "بدون كيماويات ضارة، فقط زيوت ومستخلصات طبيعية نقية.",
  },
  {
    title: "صناعة يدوية فاخرة",
    desc: "كل قطعة تُصنع بعناية فائقة لضمان أعلى جودة.",
  },
  {
    title: "توصيل سريع وآمن",
    desc: "نوصل طلبك لباب بيتك بتغليف أنيق وآمن.",
  },
];

const testimonials = [
  {
    name: "سارة أحمد",
    text: "صابون رائع فعلاً، بشرتي بقت أنعم بكتير من أول استخدام. هستمر أطلب منهم أكيد.",
  },
  {
    name: "منى خالد",
    text: "الرائحة جميلة جدًا ومش قوية، والتغليف كان فاخر. تجربة ممتازة من الأول للآخر.",
  },
  {
    name: "ياسمين علي",
    text: "بحس إن بشرتي بقت أصفى، وسعر المنتج يستاهل الجودة اللي بتقدمها.",
  },
];

const faqs = [
  {
    q: "هل المنتجات مناسبة للبشرة الحساسة؟",
    a: "نعم، منتجاتنا مصنوعة من مكونات طبيعية 100% وخالية من الكيماويات القاسية، مما يجعلها مناسبة لمعظم أنواع البشرة. مع ذلك نُنصح بإجراء اختبار بسيط على جزء صغير من الجلد قبل الاستخدام الكامل إذا كانت بشرتك حساسة جدًا.",
  },
  {
    q: "كم يستغرق التوصيل؟",
    a: "يستغرق التوصيل عادة من 2 إلى 5 أيام عمل حسب منطقتك.",
  },
  {
    q: "هل يمكنني استرجاع المنتج؟",
    a: "نعم، يمكنك استرجاع المنتج خلال 7 أيام من الاستلام إذا لم يكن مستخدمًا وفي عبوته الأصلية.",
  },
];

const stats = [
  { value: "100%", label: "طبيعي" },
  { value: "500+", label: "عميل سعيد" },
  { value: "٥", label: "نجوم تقييم" },
];

export default function HomePage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#5f6e3c] via-[#8a9a5b] to-[#c9a876] px-6 py-28 text-center sm:py-36">
        {/* Decorative blurred shapes */}
        <div className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-[#faf6f0]/10 blur-3xl" />
        <div className="pointer-events-none absolute top-1/3 left-1/2 h-40 w-40 -translate-x-1/2 rounded-full bg-white/5 blur-2xl" />

        <div className="relative mx-auto max-w-3xl animate-fade-in">
          <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-5 py-1.5 text-sm font-medium text-white backdrop-blur-sm">
            ✦ طبيعي 100% · صناعة يدوية فاخرة
          </span>

          <h1 className="mb-4 font-serif text-5xl font-bold leading-tight text-white drop-shadow-sm sm:text-6xl">
            Paradise Soap
          </h1>
          <span className="mb-2 block font-serif text-2xl text-white/90 sm:text-3xl">
            بارادايس سوب
          </span>
          <span className="mt-3 block text-xl font-medium text-[#faf6f0] sm:text-2xl">
            فخامة طبيعية لبشرتك
          </span>

          <p className="mx-auto mb-10 mt-6 max-w-xl text-lg leading-relaxed text-white/85">
            اكتشف مجموعتنا الفاخرة من الصابون الطبيعي المصنوع يدويًا بأجود
            المكونات الطبيعية، لعناية استثنائية ببشرتك كل يوم.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/products"
              className="inline-block rounded-full bg-white px-9 py-3.5 text-lg font-semibold text-[#5f6e3c] shadow-lg shadow-black/10 transition hover:-translate-y-0.5 hover:shadow-xl"
            >
              تسوق الآن
            </Link>
            <Link
              href="/about"
              className="inline-block rounded-full border-2 border-white/60 px-9 py-3.5 text-lg font-medium text-white transition hover:bg-white/10"
            >
              تعرف علينا
            </Link>
          </div>

          {/* Stats row */}
          <div className="mx-auto mt-16 grid max-w-md grid-cols-3 gap-4 border-t border-white/20 pt-8">
            {stats.map((s) => (
              <div key={s.label}>
                <p className="font-serif text-2xl font-bold text-white sm:text-3xl">
                  {s.value}
                </p>
                <p className="mt-1 text-xs text-white/75 sm:text-sm">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-12 text-center text-3xl font-bold text-[#2e2a24]">
            ليه تختار Paradise Soap؟
          </h2>
          <div className="grid gap-8 sm:grid-cols-3">
            {features.map((f) => (
              <div
                key={f.title}
                className="rounded-2xl bg-[#faf6f0] p-8 text-center"
              >
                <h3 className="mb-2 text-xl font-semibold text-[#5f6e3c]">
                  {f.title}
                </h3>
                <p className="text-[#2e2a24]/70">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-[#faf6f0] px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-12 text-center text-3xl font-bold text-[#2e2a24]">
            آراء عملائنا
          </h2>
          <div className="grid gap-6 sm:grid-cols-3">
            {testimonials.map((t) => (
              <div key={t.name} className="rounded-2xl bg-white p-6 shadow-sm">
                <p className="mb-4 text-[#2e2a24]/80">&ldquo;{t.text}&rdquo;</p>
                <p className="font-semibold text-[#5f6e3c]">{t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-12 text-center text-3xl font-bold text-[#2e2a24]">
            الأسئلة الشائعة
          </h2>
          <div className="space-y-4">
            {faqs.map((f) => (
              <details
                key={f.q}
                className="group rounded-xl bg-[#faf6f0] p-5"
              >
                <summary className="cursor-pointer list-none font-semibold text-[#2e2a24]">
                  {f.q}
                </summary>
                <p className="mt-3 text-[#2e2a24]/70">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#5f6e3c] px-6 py-20 text-center">
        <div className="mx-auto max-w-2xl">
          <h2 className="mb-4 text-3xl font-bold text-white">
            جاهز تجرب فرق Paradise Soap؟
          </h2>
          <p className="mb-8 text-white/80">
            تصفح مجموعتنا الكاملة الآن واستمتع ببشرة أكثر نعومة وصحة.
          </p>
          <Link
            href="/products"
            className="inline-block rounded-full bg-white px-8 py-3 text-lg font-medium text-[#5f6e3c] transition hover:bg-[#faf6f0]"
          >
            تصفح المنتجات
          </Link>

          {/* Contact / Social Icons */}
          <div className="mt-12">
            <p className="mb-4 text-sm font-medium text-white/70">
              تواصل معنا مباشرة
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="tel:0913009060"
                aria-label="اتصال"
                className="flex h-12 w-12 items-center justify-center rounded-full bg-[#3b82f6] text-white transition hover:opacity-90"
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1C10.61 21 3 13.39 3 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.46.57 3.58a1 1 0 01-.25 1.01l-2.2 2.2z" />
                </svg>
              </a>
              <a
                href="https://wa.me/218913009060"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white transition hover:opacity-90"
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.28-1.38a9.9 9.9 0 004.76 1.21h.01c5.46 0 9.9-4.45 9.9-9.91C21.96 6.45 17.5 2 12.04 2zm0 18.04h-.01a8.2 8.2 0 01-4.18-1.14l-.3-.18-3.13.82.84-3.05-.2-.31a8.14 8.14 0 01-1.25-4.27c0-4.51 3.68-8.19 8.2-8.19a8.15 8.15 0 018.19 8.19c0 4.51-3.68 8.13-8.16 8.13zm4.48-6.13c-.24-.12-1.44-.71-1.67-.79-.22-.08-.39-.12-.55.12-.16.24-.63.79-.78.96-.14.16-.28.18-.53.06-.24-.12-1.03-.38-1.96-1.21-.72-.65-1.21-1.44-1.35-1.68-.14-.24-.02-.37.11-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.55-1.32-.75-1.81-.2-.48-.4-.41-.55-.42-.14-.01-.31-.01-.47-.01-.16 0-.42.06-.65.3-.22.24-.85.83-.85 2.03s.87 2.36 1 2.52c.12.16 1.71 2.62 4.15 3.67.58.25 1.03.4 1.38.51.58.18 1.1.16 1.52.1.46-.07 1.44-.59 1.64-1.15.2-.57.2-1.05.14-1.15-.06-.1-.22-.16-.46-.28z" />
                </svg>
              </a>
              <a
                href="https://m.facebook.com/profile.php?id=61552631900637"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex h-12 w-12 items-center justify-center rounded-full bg-[#1877F2] text-white transition hover:opacity-90"
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5.02 3.66 9.18 8.44 9.94v-7.03H7.9v-2.91h2.54V9.85c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.44 2.91h-2.34V22c4.78-.76 8.44-4.92 8.44-9.94z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/paradise_soap2"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-12 w-12 items-center justify-center rounded-full text-white transition hover:opacity-90"
                style={{
                  background:
                    "radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)",
                }}
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2c2.72 0 3.06.01 4.12.06 1.06.05 1.79.22 2.43.47.66.26 1.22.6 1.77 1.15.55.55.9 1.11 1.15 1.77.25.64.42 1.37.47 2.43.05 1.06.06 1.4.06 4.12s-.01 3.06-.06 4.12c-.05 1.06-.22 1.79-.47 2.43a4.9 4.9 0 01-1.15 1.77 4.9 4.9 0 01-1.77 1.15c-.64.25-1.37.42-2.43.47-1.06.05-1.4.06-4.12.06s-3.06-.01-4.12-.06c-1.06-.05-1.79-.22-2.43-.47a4.9 4.9 0 01-1.77-1.15 4.9 4.9 0 01-1.15-1.77c-.25-.64-.42-1.37-.47-2.43C2.01 15.06 2 14.72 2 12s.01-3.06.06-4.12c.05-1.06.22-1.79.47-2.43.26-.66.6-1.22 1.15-1.77A4.9 4.9 0 015.45 2.53c.64-.25 1.37-.42 2.43-.47C8.94 2.01 9.28 2 12 2zm0 5a5 5 0 100 10 5 5 0 000-10zm0 8.2a3.2 3.2 0 110-6.4 3.2 3.2 0 010 6.4zm5.2-8.4a1.2 1.2 0 100-2.4 1.2 1.2 0 000 2.4z" />
                </svg>
              </a>
              <a
                href="https://www.tiktok.com/@paradisesoap8"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="flex h-12 w-12 items-center justify-center rounded-full bg-black text-white transition hover:opacity-90"
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16.6 5.82c-.9-.98-1.4-2.26-1.4-3.62h-3.4v13.9c0 1.5-1.22 2.72-2.72 2.72a2.72 2.72 0 01-2.72-2.72 2.72 2.72 0 012.72-2.72c.28 0 .55.04.8.12v-3.46a6.2 6.2 0 00-.8-.05A6.15 6.15 0 003 16.02a6.15 6.15 0 006.15 6.15 6.15 6.15 0 006.15-6.15V9.02a8.6 8.6 0 004.9 1.52V7.16c-1.2 0-2.32-.5-3.6-1.34z" />
                </svg>
              </a>
              <a
                href="https://www.youtube.com/@ParadiseSoap"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="flex h-12 w-12 items-center justify-center rounded-full bg-[#FF0000] text-white transition hover:opacity-90"
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.5 6.2a3.02 3.02 0 00-2.12-2.14C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.38.56A3.02 3.02 0 00.5 6.2 31.6 31.6 0 000 12a31.6 31.6 0 00.5 5.8 3.02 3.02 0 002.12 2.14c1.88.56 9.38.56 9.38.56s7.5 0 9.38-.56a3.02 3.02 0 002.12-2.14A31.6 31.6 0 0024 12a31.6 31.6 0 00-.5-5.8zM9.75 15.5v-7l6.25 3.5-6.25 3.5z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
