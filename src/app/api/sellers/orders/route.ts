import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { getDb } from "@/db";
import { orderItems, orders } from "@/db/schema";
import { eq, desc } from "drizzle-orm";
import jwt from "jsonwebtoken";

export async function GET() {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get("seller_token")?.value;

    if (!token) {
      return NextResponse.json(
        { error: "يجب تسجيل الدخول أولاً" },
        { status: 401 }
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

    let sellerId: number;
    try {
      const payload = jwt.verify(token, secret) as { sellerId: number };
      sellerId = payload.sellerId;
    } catch {
      return NextResponse.json(
        { error: "جلسة الدخول منتهية، سجل دخولك مرة أخرى" },
        { status: 401 }
      );
    }

    const db = getDb();

    const rows = await db
      .select({
        orderItemId: orderItems.id,
        orderId: orderItems.orderId,
        productId: orderItems.productId,
        name: orderItems.name,
        price: orderItems.price,
        quantity: orderItems.quantity,
        orderStatus: orders.status,
        customerName: orders.customerName,
        customerPhone: orders.customerPhone,
        districtAr: orders.districtAr,
        addressDetails: orders.addressDetails,
        paymentMethod: orders.paymentMethod,
        createdAt: orders.createdAt,
      })
      .from(orderItems)
      .innerJoin(orders, eq(orderItems.orderId, orders.id))
      .where(eq(orderItems.sellerId, sellerId))
      .orderBy(desc(orders.id));

    return NextResponse.json(rows);
  } catch (err) {
    console.error("GET /api/sellers/orders failed:", err);
    return NextResponse.json(
      { error: "فشل جلب الطلبات" },
      { status: 500 }
    );
  }
}
