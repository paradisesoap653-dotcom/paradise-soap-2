import { NextResponse } from "next/server";
import { getDb } from "@/db";
import { sellers } from "@/db/schema";
import { eq } from "drizzle-orm";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

// يحول أي شكل يكتبه المستخدم للصيغة الدولية الكاملة: +249XXXXXXXXX
function normalizePhone(input: string): string {
  let digits = input.replace(/[^\d]/g, "");

  if (digits.startsWith("249")) {
    digits = digits.slice(3);
  }
  if (digits.startsWith("0")) {
    digits = digits.slice(1);
  }

  return `+249${digits}`;
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { phone, password } = body;

    if (!phone || !password) {
      return NextResponse.json(
        { error: "رقم التليفون وكلمة السر مطلوبين" },
        { status: 400 }
      );
    }

    const normalizedPhone = normalizePhone(phone);

    const db = getDb();

    const [seller] = await db
      .select()
      .from(sellers)
      .where(eq(sellers.phone, normalizedPhone));

    if (!seller) {
      return NextResponse.json(
        { error: "رقم التليفون أو كلمة السر غير صحيحة" },
        { status: 401 }
      );
    }

    const passwordMatches = await bcrypt.compare(password, seller.passwordHash);

    if (!passwordMatches) {
      return NextResponse.json(
        { error: "رقم التليفون أو كلمة السر غير صحيحة" },
        { status: 401 }
      );
    }

    if (!seller.isActive) {
      return NextResponse.json(
        { error: "هذا الحساب غير مفعل" },
        { status: 403 }
      );
    }

    const secret = process.env.JWT_SECRET;
    if (!secret) {
      console.error("JWT_SECRET is not set");
      return NextResponse.json(
        { error: "خطأ في إعدادات الخادم" },
        { status: 500 }
      );
    }

    const token = jwt.sign(
      { sellerId: seller.id, phone: seller.phone },
      secret,
      { expiresIn: "30d" }
    );

    const response = NextResponse.json({
      id: seller.id,
      phone: seller.phone,
      name: seller.name,
      storeName: seller.storeName,
    });

    response.cookies.set("seller_token", token, {
      httpOnly: true,
      secure: true,
      sameSite: "lax",
      maxAge: 60 * 60 * 24 * 30, // 30 يوم
      path: "/",
    });

    return response;
  } catch (err) {
    console.error("POST /api/sellers/login failed:", err);
    return NextResponse.json(
      { error: "فشل تسجيل الدخول" },
      { status: 500 }
    );
  }
}
