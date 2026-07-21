"use client";

import { useEffect, useState } from "react";

// رقم الواتساب المباشر للطلبات (كود السودان 249)
const WHATSAPP_NUMBER = "249913009060"; 

interface Product {
  id: number;
  name: string;
  price: number;
  image_url: string;
}

export default function HomePage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  // جلب المنتجات تلقائياً من Neon
  const fetchProducts = async () => {
    try {
      const res = await fetch("/api/products");
      const data = await res.json();
      if (Array.isArray(data)) {
        setProducts(data);
      }
    } catch (error) {
      console.error("خطأ في جلب البيانات:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // إرسال طلب الشراء مباشرة للواتساب
  const handleBuyWhatsApp = (product: Product) => {
    const message = `مرحباً Paradise Soap 👋%0Aأرغب في طلب المنتج التالي:%0A- *الاسم:* ${product.name}%0A- *السعر:* ${product.price} جنيه%0A- *الرابط:* ${product.image_url}`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, "_blank");
  };

  // حذف المنتج
  const handleDelete = async (id: number) => {
    if (!confirm("هل أنت متأكد من حذف هذا المنتج؟")) return;

    try {
      const res = await fetch(`/api/products?id=${id}`, { method: "DELETE" });
      if (res.ok) {
        alert("🗑️ تم حذف المنتج بنجاح!");
        setProducts(products.filter((p) => p.id !== id));
      } else {
        alert("❌ حدث خطأ أثناء الحذف");
      }
    } catch (error) {
      alert("❌ تعذر الاتصال بالسيرفر");
    }
  };

  return (
    <div style={{ maxWidth: "800px", margin: "0 auto", padding: "20px", fontFamily: "sans-serif", direction: "rtl" }}>
      
      {/* هيدر المتجر */}
      <header style={{ textAlign: "center", marginBottom: "30px", borderBottom: "2px solid #eee", paddingBottom: "20px" }}>
        <h1 style={{ color: "#16a085", fontSize: "32px", margin: "0 0 5px 0" }}>🌿 Paradise Soap</h1>
        <p style={{ color: "#7f8c8d", fontSize: "16px", margin: "0 0 15px 0" }}>متجر الصابون الطبيعي والمنتجات الفاخرة</p>
        
        {/* معلومات الاتصال بالمتجر */}
        <div style={{ display: "flex", justifyContent: "center", gap: "15px", flexWrap: "wrap", fontSize: "14px", color: "#555", backgroundColor: "#f9f9f9", padding: "10px", borderRadius: "8px" }}>
          <span>📞 0913009060</span>
          <span>📱 0114537190</span>
          <span>✉️ paradisesoap365@gmail.com</span>
        </div>
      </header>

      {/* حالة التحميل */}
      {loading ? (
        <p style={{ textAlign: "center", color: "#16a085", fontSize: "18px" }}>⏳ جاري تحميل المنتجات...</p>
      ) : products.length === 0 ? (
        <div style={{ textAlign: "center", padding: "40px 10px" }}>
          <p style={{ color: "#888", fontSize: "18px" }}>لا توجد منتجات مضافة حتى الآن.</p>
        </div>
      ) : (
        /* شبكة عرض المنتجات */
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: "20px" }}>
          {products.map((product) => (
            <div 
              key={product.id} 
              style={{
                border: "1px solid #e0e0e0",
                borderRadius: "12px",
                overflow: "hidden",
                boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
                backgroundColor: "#fff",
                display: "flex",
                flexDirection: "column"
              }}
            >
              <img 
                src={product.image_url} 
                alt={product.name} 
                style={{ width: "100%", height: "200px", objectFit: "cover" }} 
              />

              <div style={{ padding: "15px", flexGrow: 1, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                <div>
                  <h3 style={{ margin: "0 0 8px 0", fontSize: "18px", color: "#2c3e50" }}>{product.name}</h3>
                  <p style={{ fontWeight: "bold", color: "#27ae60", fontSize: "17px", margin: "0 0 15px 0" }}>
                    {product.price} جنيه
                  </p>
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                  <button
                    onClick={() => handleBuyWhatsApp(product)}
                    style={{
                      backgroundColor: "#25D366",
                      color: "white",
                      border: "none",
                      padding: "10px",
                      borderRadius: "8px",
                      cursor: "pointer",
                      fontWeight: "bold",
                      fontSize: "14px"
                    }}
                  >
                    💬 طلب عبر الواتساب
                  </button>

                  <button
                    onClick={() => handleDelete(product.id)}
                    style={{
                      backgroundColor: "#fff",
                      color: "#e74c3c",
                      border: "1px solid #e74c3c",
                      padding: "6px",
                      borderRadius: "6px",
                      cursor: "pointer",
                      fontSize: "12px"
                    }}
                  >
                    🗑️ حذف
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
