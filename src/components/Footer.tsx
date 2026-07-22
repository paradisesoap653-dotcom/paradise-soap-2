import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-[#2e2a24]/10 bg-[#faf6f0] text-[#2e2a24] pt-16 pb-12 px-6">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-8 md:grid-cols-3">
          
          {/* الإطار الأول: وصف الشركة */}
          <div className="flex flex-col justify-between rounded-2xl border-2 border-[#8a9a5b]/30 bg-white p-7 shadow-sm transition-all duration-300 hover:border-[#5f6e3c] hover:shadow-md">
            <div>
              <div className="mb-4 flex items-center gap-3">
                <Image
                  src="/shoplogo.jpg.png"
                  alt="Paradise Soap Logo"
                  width={48}
                  height={48}
                  className="h-12 w-12 rounded-full object-cover border border-[#8a9a5b]/30"
                />
                <div>
                  <h3 className="font-serif text-2xl font-bold text-[#5f6e3c]">
                    Paradise Soap
                  </h3>
                  <span className="text-xs font-semibold text-[#8a9a5b]">
                    بارادايس سوب
                  </span>
                </div>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-[#2e2a24]/80">
                صابون طبيعي فاخر مصنوع يدويًا بأجود المكونات الطبيعية، يمنح بشرتك العناية الفائقة والنقاء الذي تستحقه.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-[#8a9a5b]/15 text-xs text-[#8a9a5b] font-medium">
              ✦ منتجات طبيعية 100% · صناعة يدوية
            </div>
          </div>

          {/* الإطار الثاني: تواصل معنا */}
          <div className="flex flex-col justify-between rounded-2xl border-2 border-[#8a9a5b]/30 bg-white p-7 shadow-sm transition-all duration-300 hover:border-[#5f6e3c] hover:shadow-md">
            <div>
              <h3 className="mb-5 text-xl font-bold text-[#5f6e3c] flex items-center gap-2">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#8a9a5b]/15 text-[#5f6e3c]">
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </span>
                تواصل معنا
              </h3>

              <div className="space-y-3 text-sm">
                <a
                  href="tel:0913009060"
                  className="flex items-center gap-3 rounded-xl p-2.5 text-[#2e2a24] transition hover:bg-[#faf6f0] hover:text-[#5f6e3c]"
                >
                  <svg className="h-5 w-5 text-[#5f6e3c] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span className="font-mono text-base font-semibold dir-ltr">0913009060</span>
                </a>

                <a
                  href="tel:0114537190"
                  className="flex items-center gap-3 rounded-xl p-2.5 text-[#2e2a24] transition hover:bg-[#faf6f0] hover:text-[#5f6e3c]"
                >
                  <svg className="h-5 w-5 text-[#5f6e3c] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span className="font-mono text-base font-semibold dir-ltr">0114537190</span>
                </a>

                <a
                  href="mailto:paradisesoap653@gmail.com"
                  className="flex items-center gap-3 rounded-xl p-2.5 text-[#2e2a24] transition hover:bg-[#faf6f0] hover:text-[#5f6e3c]"
                >
                  <svg className="h-5 w-5 text-[#5f6e3c] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="font-mono text-sm font-medium truncate">paradisesoap653@gmail.com</span>
                </a>
              </div>
            </div>
          </div>

          {/* الإطار الثالث: تابعنا (روابط التواصل) */}
          <div className="flex flex-col justify-between rounded-2xl border-2 border-[#8a9a5b]/30 bg-white p-7 shadow-sm transition-all duration-300 hover:border-[#5f6e3c] hover:shadow-md">
            <div>
              <h3 className="mb-5 text-xl font-bold text-[#5f6e3c] flex items-center gap-2">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#8a9a5b]/15 text-[#5f6e3c]">
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                  </svg>
                </span>
                تابعنا
              </h3>
              <p className="mb-6 text-sm text-[#2e2a24]/70">
                تابعنا على منصات التواصل الاجتماعي لمعرفة أحدث العروض والمنتجات.
              </p>

              <div className="flex flex-wrap items-center gap-3">
                {/* WhatsApp */}
                <a
                  href="https://wa.me/218913009060"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-[#25D366] text-white shadow-sm transition-transform hover:scale-110 hover:shadow-md"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.28-1.38a9.9 9.9 0 004.76 1.21h.01c5.46 0 9.9-4.45 9.9-9.91C21.96 6.45 17.5 2 12.04 2zm0 18.04h-.01a8.2 8.2 0 01-4.18-1.14l-.3-.18-3.13.82.84-3.05-.2-.31a8.14 8.14 0 01-1.25-4.27c0-4.51 3.68-8.19 8.2-8.19a8.15 8.15 0 018.19 8.19c0 4.51-3.68 8.13-8.16 8.13zm4.48-6.13c-.24-.12-1.44-.71-1.67-.79-.22-.08-.39-.12-.55.12-.16.24-.63.79-.78.96-.14.16-.28.18-.53.06-.24-.12-1.03-.38-1.96-1.21-.72-.65-1.21-1.44-1.35-1.68-.14-.24-.02-.37.11-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.55-1.32-.75-1.81-.2-.48-.4-.41-.55-.42-.14-.01-.31-.01-.47-.01-.16 0-.42.06-.65.3-.22.24-.85.83-.85 2.03s.87 2.36 1 2.52c.12.16 1.71 2.62 4.15 3.67.58.25 1.03.4 1.38.51.58.18 1.1.16 1.52.1.46-.07 1.44-.59 1.64-1.15.2-.57.2-1.05.14-1.15-.06-.1-.22-.16-.46-.28z" />
                  </svg>
                </a>

                {/* YouTube */}
                <a
                  href="https://www.youtube.com/@ParadiseSoap"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-[#FF0000] text-white shadow-sm transition-transform hover:scale-110 hover:shadow-md"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23.5 6.2a3.02 3.02 0 00-2.12-2.14C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.38.56A3.02 3.02 0 00.5 6.2 31.6 31.6 0 000 12a31.6 31.6 0 00.5 5.8 3.02 3.02 0 002.12 2.14c1.88.56 9.38.56 9.38.56s7.5 0 9.38-.56a3.02 3.02 0 002.12-2.14A31.6 31.6 0 0024 12a31.6 31.6 0 00-.5-5.8zM9.75 15.5v-7l6.25 3.5-6.25 3.5z" />
                  </svg>
                </a>

                {/* TikTok */}
                <a
                  href="https://www.tiktok.com/@paradisesoap8"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="TikTok"
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-black text-white shadow-sm transition-transform hover:scale-110 hover:shadow-md"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M16.6 5.82c-.9-.98-1.4-2.26-1.4-3.62h-3.4v13.9c0 1.5-1.22 2.72-2.72 2.72a2.72 2.72 0 01-2.72-2.72 2.72 2.72 0 012.72-2.72c.28 0 .55.04.8.12v-3.46a6.2 6.2 0 00-.8-.05A6.15 6.15 0 003 16.02a6.15 6.15 0 006.15 6.15 6.15 6.15 0 006.15-6.15V9.02a8.6 8.6 0 004.9 1.52V7.16c-1.2 0-2.32-.5-3.6-1.34z" />
                  </svg>
                </a>

                {/* Instagram */}
                <a
                  href="https://www.instagram.com/paradise_soap2"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="flex h-11 w-11 items-center justify-center rounded-full text-white shadow-sm transition-transform hover:scale-110 hover:shadow-md"
                  style={{
                    background:
                      "radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)",
                  }}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2c2.72 0 3.06.01 4.12.06 1.06.05 1.79.22 2.43.47.66.26 1.22.6 1.77 1.15.55.55.9 1.11 1.15 1.77.25.64.42 1.37.47 2.43.05 1.06.06 1.4.06 4.12s-.01 3.06-.06 4.12c-.05 1.06-.22 1.79-.47 2.43a4.9 4.9 0 01-1.15 1.77 4.9 4.9 0 01-1.77 1.15c-.64.25-1.37.42-2.43.47-1.06.05-1.4.06-4.12.06s-3.06-.01-4.12-.06c-1.06-.05-1.79-.22-2.43-.47a4.9 4.9 0 01-1.77-1.15 4.9 4.9 0 01-1.15-1.77c-.25-.64-.42-1.37-.47-2.43C2.01 15.06 2 14.72 2 12s.01-3.06.06-4.12c.05-1.06.22-1.79.47-2.43.26-.66.6-1.22 1.15-1.77A4.9 4.9 0 015.45 2.53c.64-.25 1.37-.42 2.43-.47C8.94 2.01 9.28 2 12 2zm0 5a5 5 0 100 10 5 5 0 000-10zm0 8.2a3.2 3.2 0 110-6.4 3.2 3.2 0 010 6.4zm5.2-8.4a1.2 1.2 0 100-2.4 1.2 1.2 0 000 2.4z" />
                  </svg>
                </a>

                {/* Facebook */}
                <a
                  href="https://m.facebook.com/profile.php?id=61552631900637"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-[#1877F2] text-white shadow-sm transition-transform hover:scale-110 hover:shadow-md"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5.02 3.66 9.18 8.44 9.94v-7.03H7.9v-2.91h2.54V9.85c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.44 2.91h-2.34V22c4.78-.76 8.44-4.92 8.44-9.94z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* حقوق النشر */}
        <div className="mt-12 border-t border-[#8a9a5b]/20 pt-6 text-center text-sm text-[#2e2a24]/60">
          © {new Date().getFullYear()} Paradise Soap. جميع الحقوق محفوظة.
        </div>
      </div>
    </footer>
  );
}
