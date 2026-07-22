import { NextResponse } from "next/server";
import { getDb } from "@/db";
import { products } from "@/db/schema";
import { eq } from "drizzle-orm";

export async function GET() {
  try {
    const db = getDb();
    const rows = await db.select().from(products);
    return NextResponse.json(rows);
  } catch (err) {
    console.error("GET /api/products failed:", err);
    return NextResponse.json({ error: "فشل تحميل المنتجات" }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const db = getDb();

    const [newProduct] = await db
      .insert(products)
      .values({
        nameAr: body.nameAr,
        nameEn: body.nameEn,
        descriptionAr: body.descriptionAr || null,
        descriptionEn: body.descriptionEn || null,
        price: body.price,
        imageUrl: body.imageUrl || null,
        stock: body.stock || 0,
      })
      .returning();

    return NextResponse.json(newProduct);
  } catch (err) {
    console.error("POST /api/products failed:", err);
    return NextResponse.json({ error: "فشل حفظ المنتج" }, { status: 500 });
  }
}

export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json({ error: "معرف المنتج مطلوب" }, { status: 400 });
    }

    const db = getDb();
    await db.delete(products).where(eq(products.id, parseInt(id, 10)));

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("DELETE /api/products failed:", err);
    return NextResponse.json({ error: "فشل حذف المنتج" }, { status: 500 });
  }
}
