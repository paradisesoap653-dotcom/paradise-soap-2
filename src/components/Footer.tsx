import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-[#2e2a24]/10 bg-[#faf6f0] px-6 py-12">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 sm:grid-cols-3">
          {/* Brand */}
          <div>
            <h3 className="mb-3 text-lg font-bold text-[#2e2a24]">
              Paradise Soap
              <span className="block text-sm font-normal text-[#2e2a24]/60">
                بارادايس سوب
              </span>
            </h3>
            <p className="text-sm text-[#2e2a24]/70">
              صابون طبيعي فاخر مصنوع يدويًا بأجود المكونات الطبيعية.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="mb-3 font-semibold text-[#2e2a24]">تواصل معنا</h4>
            <ul className="space-y-2 text-sm text-[#2e2a24]/70">
              <li>
                <a
                  href="tel:0913009060"
                  className="hover:text-[#8a9a5b]"
                  dir="ltr"
                >
                  📞 0913009060
                </a>
              </li>
              <li>
                <a
                  href="tel:0114537190"
                  className="hover:text-[#8a9a5b]"
                  dir="ltr"
                >
                  📞 0114537190
                </a>
              </li>
              <li>
                <a
                  href="mailto:paradisesoap653@gmail.com"
                  className="hover:text-[#8a9a5b]"
                >
                  ✉️ paradisesoap653@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="mb-3 font-semibold text-[#2e2a24]">تابعنا</h4>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/search/top?q=%D8%A8%D8%B1%D8%A7%D8%AF%D8%A7%D9%8A%D8%B3%20%D8%B3%D9%88%D8%A8%20%D9%84%D8%AC%D9%85%D9%8A%D8%B9%20%D8%A7%D9%86%D9%88%D8%A7%D8%B9%20%D8%A7%D9%84%D8%B5%D8%A7%D8%A8%D9%88%D9%86"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#2e2a24] transition hover:bg-[#8a9a5b] hover:text-white"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5.02 3.66 9.18 8.44 9.94v-7.03H7.9v-2.91h2.54V9.85c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.44 2.91h-2.34V22c4.78-.76 8.44-4.92 8.44-9.94z" />
                </svg>
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#2e2a24] transition hover:bg-[#8a9a5b] hover:text-white"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2c2.72 0 3.06.01 4.12.06 1.06.05 1.79.22 2.43.47.66.26 1.22.6 1.77 1.15.55.55.9 1.11 1.15 1.77.25.64.42 1.37.47 2.43.05 1.06.06 1.4.06 4.12s-.01 3.06-.06 4.12c-.05 1.06-.22 1.79-.47 2.43a4.9 4.9 0 01-1.15 1.77 4.9 4.9 0 01-1.77 1.15c-.64.25-1.37.42-2.43.47-1.06.05-1.4.06-4.12.06s-3.06-.01-4.12-.06c-1.06-.05-1.79-.22-2.43-.47a4.9 4.9 0 01-1.77-1.15 4.9 4.9 0 01-1.15-1.77c-.25-.64-.42-1.37-.47-2.43C2.01 15.06 2 14.72 2 12s.01-3.06.06-4.12c.05-1.06.22-1.79.47-2.43.26-.66.6-1.22 1.15-1.77A4.9 4.9 0 015.45 2.53c.64-.25 1.37-.42 2.43-.47C8.94 2.01 9.28 2 12 2zm0 5a5 5 0 100 10 5 5 0 000-10zm0 8.2a3.2 3.2 0 110-6.4 3.2 3.2 0 010 6.4zm5.2-8.4a1.2 1.2 0 100-2.4 1.2 1.2 0 000 2.4z" />
                </svg>
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#2e2a24] transition hover:bg-[#8a9a5b] hover:text-white"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16.6 5.82c-.9-.98-1.4-2.26-1.4-3.62h-3.4v13.9c0 1.5-1.22 2.72-2.72 2.72a2.72 2.72 0 01-2.72-2.72 2.72 2.72 0 012.72-2.72c.28 0 .55.04.8.12v-3.46a6.2 6.2 0 00-.8-.05A6.15 6.15 0 003 16.02a6.15 6.15 0 006.15 6.15 6.15 6.15 0 006.15-6.15V9.02a8.6 8.6 0 004.9 1.52V7.16c-1.2 0-2.32-.5-3.6-1.34z" />
                </svg>
              </a>
              <a
                href="https://wa.me/218913009060"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#2e2a24] transition hover:bg-[#8a9a5b] hover:text-white"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.28-1.38a9.9 9.9 0 004.76 1.21h.01c5.46 0 9.9-4.45 9.9-9.91C21.96 6.45 17.5 2 12.04 2zm0 18.04h-.01a8.2 8.2 0 01-4.18-1.14l-.3-.18-3.13.82.84-3.05-.2-.31a8.14 8.14 0 01-1.25-4.27c0-4.51 3.68-8.19 8.2-8.19a8.15 8.15 0 018.19 8.19c0 4.51-3.68 8.13-8.16 8.13zm4.48-6.13c-.24-.12-1.44-.71-1.67-.79-.22-.08-.39-.12-.55.12-.16.24-.63.79-.78.96-.14.16-.28.18-.53.06-.24-.12-1.03-.38-1.96-1.21-.72-.65-1.21-1.44-1.35-1.68-.14-.24-.02-.37.11-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.55-1.32-.75-1.81-.2-.48-.4-.41-.55-.42-.14-.01-.31-.01-.47-.01-.16 0-.42.06-.65.3-.22.24-.85.83-.85 2.03s.87 2.36 1 2.52c.12.16 1.71 2.62 4.15 3.67.58.25 1.03.4 1.38.51.58.18 1.1.16 1.52.1.46-.07 1.44-.59 1.64-1.15.2-.57.2-1.05.14-1.15-.06-.1-.22-.16-.46-.28z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-[#2e2a24]/10 pt-6 text-center text-sm text-[#2e2a24]/50">
          © {new Date().getFullYear()} Paradise Soap. جميع الحقوق محفوظة.
        </div>
      </div>
    </footer>
  );
}
