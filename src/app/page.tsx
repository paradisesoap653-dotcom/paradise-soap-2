"use client";

import { useEffect, useState } from "react";

// رقم الواتساب المباشر (كود السودان 249)
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

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("/api/products");
        if (res.ok) {
          const data = await res.json();
          if (Array.isArray(data)) {
            setProducts(data);
          }
        }
      } catch (error) {
        console.error("خطأ في جلب البيانات:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // إرسال طلب الشراء للواتساب مع تشفير النص لمنع أخطاء الروابط
  const handleBuyWhatsApp = (product: Product) => {
    if (typeof window === "undefined") return;
    
    const messageText = `مرحباً Paradise Soap 👋\nأرغب في طلب المنتج التالي:\n- الاسم: ${product.name}\n- السعر: ${product.price} جنيه\n- الرابط: ${product.image_url}`;
    const encodedMessage = encodeURIComponent(messageText);
    
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`, "_blank");
  };

  // حذف المنتج
  const handleDelete = async (id: number) => {
    if (typeof window !== "undefined") {
      if (!window.confirm("هل أنت متأكد من حذف هذا المنتج؟")) return;
    }

    try {
      const res = await fetch(`/api/products?id=${id}`, { method: "DELETE" });
      if (res.ok) {
        alert("🗑️ تم حذف المنتج بنجاح!");
        setProducts((prev) => prev.filter((p) => p.id !== id));
      } else {
        alert("❌ حدث خطأ أثناء الحذف");
      }
    } catch (error) {
      alert("❌ تعذر الاتصال بالسيرفر");
    }
  };

  return (
    <div style={{ maxWidth: "800px", margin: "0 auto", padding: "20px", fontFamily: "sans-serif", direction: "rtl" }}>
      
      {/* هيدر المتجر مع الشعار والبيانات */}
      <header style={{ textAlign: "center", marginBottom: "30px", borderBottom: "2px solid #eee", paddingBottom: "20px" }}>
        
        <div style={{ marginBottom: "10px" }}>
          <img 
            src="/logo.jpg" 
            alt="Paradise Soap Logo" 
            style={{ width: "90px", height: "90px", borderRadius: "50%", objectFit: "cover", boxShadow: "0 2px 8px rgba(0,0,0,0.1)" }} 
          />
        </div>

        <h1 style={{ color: "#16a085", fontSize: "30px", margin: "0 0 5px 0" }}>🌿 Paradise Soap</h1>
        <p style={{ color: "#7f8c8d", fontSize: "15px", margin: "0 0 15px 0" }}>متجر الصابون الطبيعي والمنتجات الفاخرة</p>
        
        <div style={{ display: "flex", justifyContent: "center", gap: "15px", flexWrap: "wrap", fontSize: "14px", color: "#555", backgroundColor: "#f9f9f9", padding: "10px", borderRadius: "8px" }}>
          <span>📞 0913009060</span>
          <span>📱 0114537190</span>
          <span>✉️ paradisesoap365@gmail.com</span>
        </div>
      </header>

      {/* عرض المنتجات */}
      {loading ? (
        <p style={{ textAlign: "center", color: "#16a085", fontSize: "18px" }}>⏳ جاري تحميل المنتجات...</p>
      ) : products.length === 0 ? (
        <div style={{ textAlign: "center", padding: "40px 10px" }}>
          <p style={{ color: "#888", fontSize: "18px" }}>لا توجد منتجات مضافة حتى الآن.</p>
        </div>
      ) : (
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
