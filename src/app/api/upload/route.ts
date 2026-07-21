import { neon } from "@neondatabase/serverless";
import { NextResponse } from "next/server";

const sql = neon(process.env.DATABASE_URL!);

// 1. جلب كل المنتجات من قاعدة البيانات
export async function GET() {
  try {
    const products = await sql`SELECT * FROM products ORDER BY id DESC`;
    return NextResponse.json(products);
  } catch (error) {
    return NextResponse.json({ error: "فشل في جلب المنتجات" }, { status: 500 });
  }
}

// 2. إضافة منتج جديد
export async function POST(request: Request) {
  try {
    const { name, price, imageUrl } = await request.json();
    const result = await sql`
      INSERT INTO products (name, price, image_url)
      VALUES (${name}, ${price}, ${imageUrl})
      RETURNING *
    `;
    return NextResponse.json(result[0]);
  } catch (error) {
    return NextResponse.json({ error: "فشل في إضافة المنتج" }, { status: 500 });
  }
}

// 3. حذف منتج عبر ID
export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json({ error: "معرف المنتج مطلوب" }, { status: 400 });
    }

    await sql`DELETE FROM products WHERE id = ${id}`;
    return NextResponse.json({ message: "تم حذف المنتج بنجاح" });
  } catch (error) {
    return NextResponse.json({ error: "فشل في حذف المنتج" }, { status: 500 });
  }
}
