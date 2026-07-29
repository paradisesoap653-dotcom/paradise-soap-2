import { NextResponse } from "next/server";
import { getDb } from "@/db";
import { sellers, otpCodes } from "@/db/schema";
import { eq } from "drizzle-orm";
import twilio from "twilio";

export async function POST(request: Request) {
  try {
    const { phone } = await request.json();

    if (!phone) {
      return NextResponse.json(
        { error: "رقم التليفون مطلوب" },
        { status: 400 }
      );
    }

    const db = getDb();

    const [seller] = await db
      .select()
      .from(sellers)
      .where(eq(sellers.phone, phone));

    if (!seller) {
      return NextResponse.json(
        { error: "لا يوجد حساب بهذا الرقم" },
        { status: 404 }
      );
    }

    const code = Math.floor(100000 + Math.random() * 900000).toString();
    const expiresAt = new Date(Date.now() + 10 * 60 * 1000); // 10 دقائق

    await db.insert(otpCodes).values({
      phone,
      code,
      expiresAt,
    });

    const accountSid = process.env.TWILIO_ACCOUNT_SID;
    const authToken = process.env.TWILIO_AUTH_TOKEN;
    const fromNumber = process.env.TWILIO_PHONE_NUMBER;

    if (!accountSid || !authToken || !fromNumber) {
      return NextResponse.json(
        { error: "خطأ في إعدادات الخادم" },
        { status: 500 }
      );
    }

    const client = twilio(accountSid, authToken);

    await client.messages.create({
      body: `رمز التحقق الخاص بك في Paradise Soap هو: ${code}`,
      from: fromNumber,
      to: phone,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("POST /api/sellers/forgot-password/send-otp failed:", err);
    return NextResponse.json(
      { error: "فشل إرسال رمز التحقق" },
      { status: 500 }
    );
  }
}
