
import { db } from "./index";
import { products } from "./schema";

async function seed() {
  console.log("🌱 بدء إضافة المنتجات التجريبية...");

  await db.insert(products).values([
    {
      nameAr: "صابون العسل والزعفران",
      nameEn: "Honey & Saffron Soap",
      descriptionAr: "صابون طبيعي فاخر بخلاصة العسل والزعفران، يمنح بشرتك نعومة ولمعان طبيعي.",
      descriptionEn: "A luxurious natural soap infused with honey and saffron extract for soft, radiant skin.",
      price: 12000,
      imageUrl: "https://images.unsplash.com/photo-1600857062241-98e5dba7f214?w=800",
      category: "soap",
      stock: 50,
    },
    {
      nameAr: "صابون زيت الزيتون الكلاسيكي",
      nameEn: "Classic Olive Oil Soap",
      descriptionAr: "صابون تقليدي مصنوع من زيت الزيتون البكر الممتاز، مثالي للبشرة الحساسة.",
      descriptionEn: "Traditional soap crafted from extra virgin olive oil, perfect for sensitive skin.",
      price: 9000,
      imageUrl: "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=800",
      category: "soap",
      stock: 80,
    },
    {
      nameAr: "صابون اللافندر المهدئ",
      nameEn: "Calming Lavender Soap",
      descriptionAr: "برائحة اللافندر المنعشة، يساعد على الاسترخاء ويترك بشرتك منتعشة طوال اليوم.",
      descriptionEn: "With a refreshing lavender scent, helps you relax and keeps your skin fresh all day.",
      price: 10000,
      imageUrl: "https://images.unsplash.com/photo-1614806687209-1e0a5b6b5a3f?w=800",
      category: "soap",
      stock: 60,
    },
    {
      nameAr: "صابون الفحم النشط",
      nameEn: "Activated Charcoal Soap",
      descriptionAr: "ينظف المسام بعمق ويزيل السموم من البشرة، مثالي للبشرة الدهنية.",
      descriptionEn: "Deeply cleanses pores and detoxifies the skin, ideal for oily skin types.",
      price: 11000,
      imageUrl: "https://images.unsplash.com/photo-1570194065650-d99fb4bedf0a?w=800",
      category: "soap",
      stock: 40,
    },
  ]);

  console.log("✅ تمت إضافة المنتجات بنجاح!");
  process.exit(0);
}

seed().catch((err) => {
  console.error("❌ حدث خطأ:", err);
  process.exit(1);
});
