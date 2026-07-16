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
            اكتشف مجموعتنا الفاخرة من الصابون الطبيعي المصنوع يدويً
