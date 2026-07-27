import { NextResponse } from "next/server";
import { getDb } from "@/db";
import { sellers } from "@/db/schema";
import { eq } from "drizzle-orm";
import bcrypt from "bcryptjs";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { phone, password, name, storeName } = body;

    if (!phone || !password || !name) {
      return NextResponse.json(
        { error: "رقم التليفون وكلمة السر والاسم مطلوبين" },
        { status: 400 }
      );
    }

    if (password.length < 6) {
      return NextResponse.json(
        { error: "كلمة السر يجب أن تكون 6 أحرف على الأقل" },
        { status: 400 }
      );
    }

    const db = getDb();

    const existing = await db
      .select()
      .from(sellers)
      .where(eq(sellers.phone, phone));

    if (existing.length > 0) {
      return NextResponse.json(
        { error: "رقم التليفون مسجل بالفعل" },
        { status: 409 }
      );
    }

    const passwordHash = await bcrypt.hash(password, 10);

    const [newSeller] = await db
      .insert(sellers)
      .values({
        phone,
        passwordHash,
        name,
        storeName: storeName || null,
      })
      .returning({
        id: sellers.id,
        phone: sellers.phone,
        name: sellers.name,
        storeName: sellers.storeName,
      });

    return NextResponse.json(newSeller);
  } catch (err) {
    console.error("POST /api/sellers/register failed:", err);
    return NextResponse.json(
      { error: "فشل إنشاء الحساب" },
      { status: 500 }
    );
  }
}
