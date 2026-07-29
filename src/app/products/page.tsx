import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { getDb } from "@/db";
import { products } from "@/db/schema";
import { eq, and } from "drizzle-orm";
import jwt from "jsonwebtoken";

async function getSellerIdFromToken(): Promise<number | null> {
  const cookieStore = await cookies();
  const token = cookieStore.get("seller_token")?.value;

  if (!token) return null;

  const secret = process.env.JWT_SECRET;
  if (!secret) return null;

  try {
    const decoded = jwt.verify(token, secret) as {
      sellerId: number;
      phone: string;
    };
    return decoded.sellerId;
  } catch (err) {
    return null;
  }
}

export async function POST(request: Request) {
  try {
    const sellerId = await getSellerIdFromToken();

    if (!sellerId) {
      return NextResponse.json({ error: "غير مسجل دخول" }, { status: 401 });
    }

    const body = await request.json();
    const db = getDb();

    const [newProduct] = await db
      .insert(products)
      .values({
        sellerId,
        nameAr: body.nameAr,
        nameEn: body.nameEn,
        descriptionAr: body.descriptionAr || null,
        descriptionEn: body.descriptionEn || null,
        price: body.price,
        imageUrl: body.imageUrl || null,
        stock: body.stock || 0,
        isActive: false, // المنتج يفضل مخفي لحد ما الإدارة توافق عليه
      })
      .returning();

    return NextResponse.json(newProduct);
  } catch (err) {
    console.error("POST /api/sellers/products failed:", err);
    return NextResponse.json(
      { error: "فشل حفظ المنتج" },
      { status: 500 }
    );
  }
}

export async function DELETE(request: Request) {
  try {
    const sellerId = await getSellerIdFromToken();

    if (!sellerId) {
      return NextResponse.json({ error: "غير مسجل دخول" }, { status: 401 });
    }

    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json(
        { error: "معرف المنتج مطلوب" },
        { status: 400 }
      );
    }

    const db = getDb();

    await db
      .delete(products)
      .where(
        and(eq(products.id, parseInt(id, 10)), eq(products.sellerId, sellerId))
      );

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("DELETE /api/sellers/products failed:", err);
    return NextResponse.json(
      { error: "فشل حذف المنتج" },
      { status: 500 }
    );
  }
}
