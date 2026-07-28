import { NextResponse } from "next/server";
import { getDb } from "@/db";
import { orders } from "@/db/schema";
import { desc } from "drizzle-orm";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      customerName,
      customerPhone,
      customerEmail,
      districtAr,
      districtEn,
      addressDetails,
      paymentMethod,
      totalAmount,
      items,
    } = body;

    if (!customerName || !customerPhone || !items || !totalAmount) {
      return NextResponse.json(
        { error: "بيانات الطلب غير مكتملة" },
        { status: 400 }
      );
    }

    const db = getDb();

    const [newOrder] = await db
      .insert(orders)
      .values({
        customerName,
        customerPhone,
        customerEmail: customerEmail || null,
        districtAr: districtAr || "غير محدد",
        districtEn: districtEn || null,
        addressDetails: addressDetails || null,
        paymentMethod: paymentMethod || "cash",
        totalAmount,
        items,
      })
      .returning();

    return NextResponse.json(newOrder);
  } catch (err) {
    console.error("POST /api/orders failed:", err);
    return NextResponse.json(
      { error: "فشل حفظ الطلب" },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const db = getDb();
    const rows = await db
      .select()
      .from(orders)
      .orderBy(desc(orders.createdAt));
    return NextResponse.json(rows);
  } catch (err) {
    console.error("GET /api/orders failed:", err);
    return NextResponse.json(
      { error: "فشل تحميل الطلبات" },
      { status: 500 }
    );
  }
}
