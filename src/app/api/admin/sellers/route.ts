import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { getDb } from "@/db";
import { sellers } from "@/db/schema";
import jwt from "jsonwebtoken";

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

export async function GET() {
  try {
    if (!(await isAdmin())) {
      return NextResponse.json({ error: "غير مصرح" }, { status: 401 });
    }

    const db = getDb();
    const rows = await db
      .select({
        id: sellers.id,
        name: sellers.name,
        storeName: sellers.storeName,
        phone: sellers.phone,
        isActive: sellers.isActive,
        createdAt: sellers.createdAt,
      })
      .from(sellers);

    return NextResponse.json(rows);
  } catch (err) {
    console.error("GET /api/admin/sellers failed:", err);
    return NextResponse.json({ error: "فشل تحميل البائعين" }, { status: 500 });
  }
}
