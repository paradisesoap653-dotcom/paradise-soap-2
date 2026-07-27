import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { getDb } from "@/db";
import { sellers, products } from "@/db/schema";
import { eq } from "drizzle-orm";
import jwt from "jsonwebtoken";

export async function GET() {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get("seller_token")?.value;

    if (!token) {
      return NextResponse.json({ error: "غير مسجل دخول" }, { status: 401 });
    }

    const secret = process.env.JWT_SECRET;
    if (!secret) {
      return NextResponse.json(
        { error: "خطأ في إعدادات الخادم" },
        { status: 500 }
      );
    }

    let decoded: { sellerId: number; phone: string };
    try {
      decoded = jwt.verify(token, secret) as {
        sellerId: number;
        phone: string;
      };
    } catch (err) {
      return NextResponse.json(
        { error: "الجلسة منتهية، سجل دخول مرة أخرى" },
        { status: 401 }
      );
    }

    const db = getDb();

    const [seller] = await db
      .select({
        id: sellers.id,
        phone: sellers.phone,
        name: sellers.name,
        storeName: sellers.storeName,
      })
      .from(sellers)
      .where(eq(sellers.id, decoded.sellerId));

    if (!seller) {
      return NextResponse.json(
        { error: "الحساب غير موجود" },
        { status: 404 }
      );
    }

    const sellerProducts = await db
      .select()
      .from(products)
      .where(eq(products.sellerId, decoded.sellerId));

    return NextResponse.json({ seller, products: sellerProducts });
  } catch (err) {
    console.error("GET /api/sellers/me failed:", err);
    return NextResponse.json(
      { error: "حدث خطأ، حاول مرة أخرى" },
      { status: 500 }
    );
  }
}
