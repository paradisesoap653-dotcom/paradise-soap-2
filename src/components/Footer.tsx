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
                href="https://m.facebook.com/profile.php?id=61552631900637"
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
                href="https://www.instagram.com/paradise_soap2"
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
                href="https://www.tiktok.com/@paradisesoap8"
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
                href="https://www.youtube.com/@ParadiseSoap"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#2e2a24] transition hover:bg-[#8a9a5b] hover:text-white"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"> 
