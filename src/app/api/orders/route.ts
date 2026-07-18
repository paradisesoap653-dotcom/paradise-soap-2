import { NextResponse } from "next/server";
import { orders, products } from "@/db/schema";
import { eq, sql } from "drizzle-orm";

export async function POST(request: Request) {
  try {
    const { getDb } = await import("@/db");
    const db = getDb();

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

    if (!customerName || !customerPhone || !districtAr || !items || items.length === 0) {
      return NextResponse.json(
        { error: "Missing required fields or empty cart" },
        { status: 400 }
      );
    }

    const [newOrder] = await db
      .insert(orders)
      .values({
        customerName,
        customerPhone,
        customerEmail,
        districtAr,
        districtEn,
        addressDetails,
        paymentMethod,
        totalAmount,
        items,
        status: "pending",
      })
      .returning();

    for (const item of items) {
      try {
        await db
          .update(products)
          .set({
            stock: sql`GREATEST(0, ${products.stock} - ${item.quantity})`,
          })
          .where(eq(products.id, item.productId));
      } catch (stockErr) {
        console.warn(`Failed to update stock for product ID ${item.productId}:`, stockErr);
      }
    }

    return NextResponse.json(
      { message: "Order created successfully", order: newOrder },
      { status: 201 }
    );
  } catch (error: any) {
    console.error("Order creation failed:", error);
    return NextResponse.json(
      { error: "Internal Server Error", details: error.message },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const { getDb } = await import("@/db");
    const db = getDb();
    const allOrders = await db.select().from(orders).orderBy(orders.createdAt);
    return NextResponse.json(allOrders);
  } catch (error: any) {
    return NextResponse.json(
      { error: "Failed to fetch orders", details: error.message },
      { status: 500 }
    );
  }
}
