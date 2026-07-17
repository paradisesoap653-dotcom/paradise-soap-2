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
    a: "نعم، منتجاتنا مصنوعة من مكونات طبيعية 100% وخالية من الكيماويات القاسية، مما يجعلها مناسبة لمعظم أنواع البشرة الحساسة.",
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

export default function HomePage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#faf6f0] to-white px-6 py-24 text-center">
        <div className="mx-auto max-w-3xl animate-fade-in">
          <span className="mb-4 inline-block rounded-full bg-[#8a9a5b]/10 px-4 py-1 text-sm font-medium text-[#5f6e3c]">
            طبيعي 100% • صناعة يدوية
          </span>
          <h1 className="mb-6 text-4xl font-bold leading-tight text-[#2e2a24] sm:text-5xl">
            Paradise Soap
            <span className="block text-2xl text-[#8a9a5b]/80 sm:text-3xl">بارادايس سوب</span>
            <span className="mt-2 block text-[#8a9a5b]">فخامة طبيعية لبشرتك</span>
          </h1>
          <p className="mx-auto mb-8 max-w-xl text-lg text-[#2e2a24]/70">
            اكتشف مجموعتنا الفاخرة من الصابون الطبيعي المصنوع يدويًا بأجود
            المكونات الطبيعية، لعناية استثنائية ببشرتك كل يوم.
          </p>
          <Link
            href="/products"
            className="inline-block rounded-full bg-[#8a9a5b] px-8 py-3 text-lg font-medium text-white transition hover:bg-[#5f6e3c]"
          >
            تسوق الآن
          </Link>
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
        </div>
      </section>
    </main>
  );
      }
