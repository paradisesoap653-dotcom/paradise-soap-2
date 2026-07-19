"use client";

import React from "react";
import Link from "next/link";
import { useApp } from "@/context/AppContext";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Sparkles, 
  ShieldCheck, 
  Heart, 
  Landmark,
  Bookmark,
  Share2
} from "lucide-react";
import WhatsAppIcon from "@/components/WhatsAppIcon";

export default function Footer() {
  const { locale, t } = useApp();

  return (
    <footer id="about-section" className="bg-gradient-to-b from-gray-950 to-emerald-950 text-gray-200 pt-16 pb-8 border-t-4 border-amber-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-12 border-b border-gray-800 text-center md:text-right">
          <div className="flex flex-col items-center md:items-start gap-3">
            <div className="p-3 bg-emerald-900/50 rounded-full text-amber-400">
              <ShieldCheck className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-bold text-white">
              {locale === "ar" ? "جودة ممتازة مضمونة" : "Premium Guaranteed Quality"}
            </h3>
            <p className="text-sm text-gray-400">
              {locale === "ar"
                ? "نستخدم أنقى الزيوت العضوية والمكونات الطبيعية والطبية المختبرة علمياً والآمنة تماماً على البشرة."
                : "We utilize the purest organic oils and scientifically tested medical ingredients that are fully safe for skin."}
            </p>
          </div>

          <div className="flex flex-col items-center md:items-start gap-3">
            <div className="p-3 bg-emerald-900/50 rounded-full text-amber-400">
              <Landmark className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-bold text-white">
              {locale === "ar" ? "دفع مالي ميسّر" : "Easy Payment Methods"}
            </h3>
            <p className="text-sm text-gray-400">
              {locale === "ar"
                ? "نسهل عليكم عمليات الشراء بالدفع نداً عند الاستلام (كاش) أو عبر التحويل الفوري السريع لتطبيق بنكك (بنك الخرطوم)."
                : "We facilitate purchases with easy Cash on Delivery (COD) or instant bank transfers via the Bankak App (BOK)."}
            </p>
          </div>

          <div className="flex flex-col items-center md:items-start gap-3">
            <div className="p-3 bg-emerald-900/50 rounded-full text-amber-400">
              <Sparkles className="h-6 w-6 animate-pulse" />
            </div>
            <h3 className="text-lg font-bold text-white">
              {locale === "ar" ? "صناعة سودانية فخورة" : "Proudly Sudanese Made"}
            </h3>
            <p className="text-sm text-gray-400">
              {locale === "ar"
                ? "من قلب مدينة عطبرة العريقة، نصنع منتجات تلبي أعلى تطلعات عملائنا في الجودة والفعالية وبأسعار مدروسة."
                : "From the heart of the historic city of Atbara, we produce goods that meet the highest customer standards in quality and pricing."}
            </p>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 py-12 text-right rtl:text-right ltr:text-left">
          
          {/* Column 1: Brand details & Social Media Icons */}
          <div className="md:col-span-2 space-y-5">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-amber-500 flex items-center justify-center text-white font-bold text-xl">
                P
              </div>
              <div>
                <h4 className="text-xl font-extrabold text-white font-serif">{t("brandName")}</h4>
                <p className="text-xs text-amber-400">{t("brandSubtitle")}</p>
              </div>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed max-w-md">
              {locale === "ar"
                ? "برادايس للصابون هي علامة تجارية رائدة ومصنع متخصص في إنتاج جميع أنواع الصابون السائل والصلب والجل والمعاجين ومستحضرات التجميل والعناية بالبشرة. نخدم بكل فخر جميع سكان مدينة عطبرة العريقة والقرى والبلدات المجاورة لتوفير أرقى خيارات النظافة والعناية."
                : "Paradise Soap is a leading brand and factory specialized in producing premium liquid, solid, gel, and paste soaps, cosmetics, and skincare. We proudly serve Atbara and nearby towns with unmatched hygiene and therapeutic care products."}
            </p>

            {/* SOCIAL MEDIA SECTION */}
            <div className="space-y-2.5 pt-2">
              <h5 className="text-sm font-bold text-amber-400 flex items-center gap-1 justify-end rtl:justify-start ltr:justify-start">
                <Share2 className="h-4 w-4 text-amber-400 shrink-0" />
                <span>{locale === "ar" ? "تابعونا على منصات التواصل الاجتماعي:" : "Follow Us on Social Media:"}</span>
              </h5>
              
              <div className="flex flex-wrap items-center gap-3 justify-start">
                {/* Facebook pure SVG */}
                <a
                  href="https://facebook.com/ParadiseSoapAtbara"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-10 w-10 rounded-full bg-blue-900/60 text-white hover:bg-blue-600 transition-all flex items-center justify-center border border-blue-800 shadow-sm"
                  title="فيسبوك - Facebook"
                >
                  <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                    <path d="M9 8H7v3h2v9h3v-9h3.3l.7-3H12V6c0-.9.7-1 1-1h2V2h-3a4 4 0 0 0-4 4v2z" />
                  </svg>
                </a>

                {/* Twitter / X pure SVG */}
                <a
                  href="https://twitter.com/ParadiseSoap"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-10 w-10 rounded-full bg-gray-900/80 text-white hover:bg-amber-500 hover:text-black transition-all flex items-center justify-center border border-gray-800 shadow-sm"
                  title="تويتر - Twitter / X"
                >
                  <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                    <path d="M18.2 2.4h3.3l-7.2 8.2L22.8 21.6H16.2l-5.2-6.8-5.9 6.8H1.8l7.7-8.8L1.2 2.4h6.8l4.7 6.2 5.5-6.2zm-1.2 17.2h1.8L7.1 4.3H5.2l11.8 15.3z"/>
                  </svg>
                </a>

                {/* Instagram pure SVG */}
                <a
                  href="https://instagram.com/ParadiseSoap"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-10 w-10 rounded-full bg-pink-900/60 text-white hover:bg-pink-600 transition-all flex items-center justify-center border border-pink-800 shadow-sm"
                  title="انستغرام - Instagram"
                >
                  <svg className="h-5 w-5 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                </a>

                {/* TikTok pure SVG */}
                <a
                  href="https://tiktok.com/@ParadiseSoap"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-10 w-10 rounded-full bg-slate-900/80 text-white hover:bg-black transition-all flex items-center justify-center border border-slate-800 shadow-sm"
                  title="تيك توك - TikTok"
                >
                  <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12.53.22C13.84 0 15 .75 15.3 2c.56-.05 1.1-.2 1.62-.44v3.13a6.83 6.83 0 0 1-3.66-.02v7.7c0 3.73-2.6 6.77-6.2 6.77a6.23 6.23 0 0 1-6.2-6.23 6.22 6.22 0 0 1 6.55-6.22c.2 0 .4 0 .6.04v3.1a3.15 3.15 0 0 0-4-.03c-.93.68-1.5 1.77-1.5 2.97 0 1.96 1.55 3.55 3.5 3.55 1.95 0 3.54-1.6 3.54-3.55V0c1 .07 1.98.14 2.95.22z" />
                  </svg>
                </a>

                 {/* WhatsApp Chat 1 */}
                <a
                  href="https://wa.me/249913009060"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-10 w-10 rounded-full bg-[#25D366] text-white hover:bg-[#20ba5a] transition-all flex items-center justify-center border border-green-400 shadow-sm hover:scale-105 transform"
                  title="واتساب 1 - WhatsApp"
                >
                  <WhatsAppIcon className="h-5 w-5 text-white" title="WhatsApp" />
                </a>

                {/* WhatsApp Chat 2 */}
                <a
                  href="https://wa.me/249114537190"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-10 w-10 rounded-full bg-[#25D366] text-white hover:bg-[#20ba5a] transition-all flex items-center justify-center border border-green-400 shadow-sm hover:scale-105 transform"
                  title="واتساب 2 - WhatsApp"
                >
                  <WhatsAppIcon className="h-5 w-5 text-white" title="WhatsApp" />
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Atbara Neighborhoods covered */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold text-white border-b border-gray-800 pb-2 flex items-center gap-1.5 justify-end rtl:justify-start ltr:justify-start">
              <Bookmark className="h-5 w-5 text-amber-500" />
              <span>{locale === "ar" ? "تغطية توصيل عطبرة" : "Delivery Coverage"}</span>
            </h4>
            <ul className="text-sm text-gray-400 space-y-2">
              {locale === "ar" ? (
                <>
                  <li>• حي الداخلة والسودنة</li>
                  <li>• حي الحصايا والمطار</li>
                  <li>• خليوة والسيالة وام بكول</li>
                  <li>• حي الدرجة والفكيكة</li>
                  <li>• حي العشير ومساكن الشعبية</li>
                  <li>• وسط المدينة وسوق عطبرة</li>
                  <li>• جميع المناطق والقرى المجاورة</li>
                </>
              ) : (
                <>
                  <li>• Al-Dakhla & Al-Sudana</li>
                  <li>• Al-Hassaya & Al-Matar</li>
                  <li>• Khaleewa & Al-Sayala</li>
                  <li>• Um Bakol & Al-Daraja</li>
                  <li>• Al-Asheer & Al-Sha'biya</li>
                  <li>• Downtown & Atbara Market</li>
                  <li>• Nearby River Nile villages</li>
                </>
              )}
            </ul>
          </div>

          {/* Column 3: Contact Info & Email */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold text-white border-b border-gray-800 pb-2 flex items-center gap-1.5 justify-end rtl:justify-start ltr:justify-start">
              <Phone className="h-5 w-5 text-amber-500" />
              <span>{t("contactInfo")}</span>
            </h4>
            <div className="text-sm text-gray-400 space-y-3">
              <div className="flex items-start gap-2.5 justify-end rtl:justify-start ltr:justify-start">
                <MapPin className="h-5 w-5 text-amber-500 shrink-0 mt-0.5" />
                <span>
                  {locale === "ar"
                    ? "عطبرة، المنطقة الصناعية / معارضنا بوسط المدينة وسوق عطبرة، السودان"
                    : "Atbara Industrial Area / Showrooms at Downtown Market, Sudan"}
                </span>
              </div>
              
              {/* Phone Line 1 */}
              <div className="flex items-center gap-2.5 justify-end rtl:justify-start ltr:justify-start">
                <Phone className="h-4 w-4 text-emerald-400 shrink-0" />
                <div className="flex flex-col">
                  <a href="tel:0913009060" className="hover:text-white transition-colors font-mono">
                    0913009060
                  </a>
                </div>
              </div>

              {/* Phone Line 2 */}
              <div className="flex items-center gap-2.5 justify-end rtl:justify-start ltr:justify-start">
                <Phone className="h-4 w-4 text-emerald-400 shrink-0" />
                <div className="flex flex-col">
                  <a href="tel:0114537190" className="hover:text-white transition-colors font-mono">
                    0114537190
                  </a>
                </div>
              </div>

              {/* Primary Email Address */}
              <div className="flex items-center gap-2.5 justify-end rtl:justify-start ltr:justify-start pt-1">
                <Mail className="h-4 w-4 text-amber-500 shrink-0" />
                <a href="mailto:info@paradise-soap.com" className="hover:text-white transition-colors font-mono">
                  info@paradise-soap.com
                </a>
              </div>

              <div className="flex items-center gap-2.5 justify-end rtl:justify-start ltr:justify-start">
                <Mail className="h-4 w-4 text-amber-500 shrink-0" />
                <a href="mailto:sales@paradise-soap.com" className="hover:text-white transition-colors font-mono">
                  sales@paradise-soap.com
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom credits */}
        <div className="border-t border-gray-900 pt-8 mt-6 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 gap-4">
          <div className="flex items-center gap-1">
            <span>© {new Date().getFullYear()} {t("brandName")}.</span>
            <span>{locale === "ar" ? "جميع الحقوق محفوظة." : "All rights reserved."}</span>
          </div>
          <div className="flex items-center gap-1.5 text-gray-600">
            <span>{locale === "ar" ? "صنع بكل" : "Made with"}</span>
            <Heart className="h-3 w-3 text-red-500 fill-red-500" />
            <span>{locale === "ar" ? "لأهلنا في عطبرة" : "for our families in Atbara"}</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
