import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { getDb } from "@/db";
import { sellers } from "@/db/schema";
import { eq } from "drizzle-orm";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

async function isAdmin(): Promise<boolean> {
  const cookieStore = await cookies();
  const token = cookieStore.get("admin_token")?.value;
  if (!token) return false;

  const secret = process.env.JWT_SECRET;
  if (!secret) return false;

  try {
    jwt.verify(token, secret);
    return true;
  } catch {
    return false;
  }
}

function generatePassword(): string {
  return Math.floor(10000000 + Math.random() * 90000000).toString();
}

export async function POST(request: Request) {
  try {
    if (!(await isAdmin())) {
      return NextResponse.json({ error: "غير مصرح" }, { status: 401 });
    }

    const { sellerId } = await request.json();

    if (!sellerId) {
      return NextResponse.json({ error: "معرف البائع مطلوب" }, { status: 400 });
    }

    const newPassword = generatePassword();
    const passwordHash = await bcrypt.hash(newPassword, 10);

    const db = getDb();
    await db
      .update(sellers)
      .set({ passwordHash })
      .where(eq(sellers.id, sellerId));

    return NextResponse.json({ newPassword });
  } catch (err) {
    console.error("POST /api/admin/sellers/reset-password failed:", err);
    return NextResponse.json({ error: "فشل تحديث كلمة السر" }, { status: 500 });
  }
}
