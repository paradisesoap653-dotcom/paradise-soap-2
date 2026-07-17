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
              صابون طبيعي فاخر مصنوع يدو��ًا بأجود المكونات الطبيعية.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="mb-3 font-semibold text-[#2e2a24]">تواصل معنا</h4>
            <ul className="space-y-2 text-sm text-[#2e2a24]/70">
              <li>
                <a
                  href="tel:+218913009060"
                  className="hover:text-[#8a9a5b]"
                  dir="ltr"
                >
                  📞 +218 91 300 9060
                </a>
              </li>
              <li>
                <a
                  href="tel:+218114537190"
                  className="hover:text-[#8a9a5b]"
                  dir="ltr"
                >
                  📞 +218 11 453 7190
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
                href="https://www.facebook.com/paradisesoap653"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#2e2a24] transition hover:bg-[#8a9a5b] hover:text-white"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M22 12.07C22 6.48 17.52 2 12 2S2 6.48 2 12.07c0 4.99 3.66 9.12 8.44 9.88v-6.99H7.9v-2.89h2.54V9.8c0-2.5 1.49-3.88 3.77-3.88 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.86h2.78l-.44 2.89h-2.34v6.99C18.34 21.19 22 17.06 22 12.07z" />
                </svg>
              </a>
              <a
                href="https://instagram.com/paradisesoap653"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#2e2a24] transition hover:bg-[#8a9a5b] hover:text-white"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M7 2C4.24 2 2 4.24 2 7v10c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5H7zm10 3a1 1 0 110 2 1 1 0 010-2zm-5 3a5 5 0 100 10 5 5 0 000-10z" />
                </svg>
              </a>
              <a
                href="https://www.tiktok.com/@paradisesoap653"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#2e2a24] transition hover:bg-[#8a9a5b] hover:text-white"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M16 3h-2v8a4 4 0 11-4-4v2a2 2 0 102 2V3z" />
                </svg>
              </a>
              <a
                href="https://wa.me/218913009060"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#2e2a24] transition hover:bg-[#8a9a5b] hover:text-white"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.28-1.38a9.9 9.9 0 004.76 1.21c5.46 0 9.9-4.45 9.9-9.91 0-5.46-4.46-9.91-9.91-9.91zM17.2 15.2c-.3.84-1.7 1.6-2.34 1.7-.6.1-1.3.13-2.9-.76-1.6-.9-2.6-2.7-2.86-3.32-.26-.62-.02-.9.18-1.02.18-.12.4-.3.6-.45.2-.15.26-.25.4-.4.13-.15.07-.36-.03-.58-.1-.22-.86-2.08-1.18-2.86-.3-.78-.6-.67-.84-.68-.22-.01-.47-.01-.72-.01-.25 0-.66.09-1 .45-.34.36-1.3 1.27-1.3 3.1 0 1.83 1.33 3.6 1.52 3.85.18.25 2.64 4.03 6.4 5.65 3.76 1.62 3.76 1.08 4.44 1.02.68-.06 2.19-.9 2.5-1.77.3-.87.3-1.62.21-1.77-.09-.15-.34-.25-.64-.42z" />
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
