export default function ContactPage() {
  return (
    <main className="mx-auto max-w-2xl px-6 py-20">
      <h1 className="mb-6 text-3xl font-bold text-[#2e2a24]">
        تواصل معنا
      </h1>

      <p className="mb-10 leading-relaxed text-[#2e2a24]/70">
        يسعدنا تواصلك معنا في أي وقت للاستفسار عن منتجاتنا أو طلباتك أو أي
        استفسار آخر. فريقنا جاهز للرد عليك في أقرب وقت ممكن.
      </p>

      <div className="space-y-6">
        <div className="rounded-xl bg-[#faf6f0] p-5">
          <h3 className="mb-1 font-semibold text-[#2e2a24]">📞 الهاتف</h3>
          <p className="text-[#2e2a24]/70">+20 100 000 0000</p>
        </div>

        <div className="rounded-xl bg-[#faf6f0] p-5">
          <h3 className="mb-1 font-semibold text-[#2e2a24]">✉️ البريد الإلكتروني</h3>
          <p className="text-[#2e2a24]/70">info@paradisesoap.com</p>
        </div>

        <div className="rounded-xl bg-[#faf6f0] p-5">
          <h3 className="mb-1 font-semibold text-[#2e2a24]">🕒 مواعيد العمل</h3>
          <p className="text-[#2e2a24]/70">يوميًا من 9 صباحًا حتى 9 مساءً</p>
        </div>
      </div>
    </main>
  );
}
