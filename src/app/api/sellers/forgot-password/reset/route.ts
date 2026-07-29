import { NextResponse } from "next/server";
import { getDb } from "@/db";
import { sellers, otpCodes } from "@/db/schema";
import { eq, and, gt } from "drizzle-orm";
import bcrypt from "bcryptjs";

export async function POST(request: Request) {
  try {
    const { phone, code, newPassword } = await request.json();

    if (!phone || !code || !newPassword) {
      return NextResponse.json(
        { error: "جميع الحقول مطلوبة" },
        { status: 400 }
      );
    }

    if (newPassword.length < 6) {
      return NextResponse.json(
        { error: "كلمة السر يجب أن تكون 6 أحرف على الأقل" },
        { status: 400 }
      );
    }

    const db = getDb();

    const [otpRecord] = await db
      .select()
      .from(otpCodes)
      .where(
        and(
          eq(otpCodes.phone, phone),
          eq(otpCodes.code, code),
          eq(otpCodes.used, false),
          gt(otpCodes.expiresAt, new Date())
        )
      )
      .orderBy(otpCodes.id)
      .limit(1);

    if (!otpRecord) {
      return NextResponse.json(
        { error: "رمز التحقق غير صحيح أو منتهي الصلاحية" },
        { status: 401 }
      );
    }

    const passwordHash = await bcrypt.hash(newPassword, 10);

    await db
      .update(sellers)
      .set({ passwordHash })
      .where(eq(sellers.phone, phone));

    await db
      .update(otpCodes)
      .set({ used: true })
      .where(eq(otpCodes.id, otpRecord.id));

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("POST /api/sellers/forgot-password/reset failed:", err);
    return NextResponse.json(
      { error: "فشل تغيير كلمة السر" },
      { status: 500 }
    );
  }
}
