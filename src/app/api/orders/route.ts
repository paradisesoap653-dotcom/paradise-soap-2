import { NextResponse } from "next/server";
import { getDb } from "@/db";
import { orders, products } from "@/db/schema";
import { eq } from "drizzle-orm";

interface OrderItemInput {
  productId: number;
  name: string;
  price: number;
  quantity: number;
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      customerName,
      customerPhone,
      customerEmail,
      districtAr,
      addressDetails,
      paymentMethod,
      totalAmount,
      items,
    } = body;

    if (!customerName || !customerPhone || !districtAr) {
      return NextResponse.json(
        { error: "الاسم ورقم الهاتف والمنطقة مطلوبين" },
        { status: 400 }
      );
    }

    if (!Array.isArray(items) || items.length === 0) {
      return NextResponse.json(
        { error: "السلة فارغة" },
        { status: 400 }
      );
    }

    if (!totalAmount || totalAmount <= 0) {
      return NextResponse.json(
        { error: "قيمة الطلب غير صحيحة" },
        { status: 400 }
      );
    }

    const db = getDb();
    const orderItems = items as OrderItemInput[];

    // تأكد من توفر المخزون لكل منتج قبل إنشاء الطلب
    for (const item of orderItems) {
      const [product] = await db
        .select()
        .from(products)
        .where(eq(products.id, item.productId));

      if (!product) {
        return NextResponse.json(
          { error: `المنتج "${item.name}" لم يعد متوفراً` },
          { status: 400 }
        );
      }

      if (product.stock < item.quantity) {
        return NextResponse.json(
          {
            error: `الكمية المطلوبة من "${item.name}" غير متوفرة، المتبقي: ${product.stock}`,
          },
          { status: 400 }
        );
      }
    }

    // إنشاء الطلب
    const [newOrder] = await db
      .insert(orders)
      .values({
        customerName,
        customerPhone,
        customerEmail: customerEmail || null,
        districtAr,
        addressDetails: addressDetails || null,
        paymentMethod: paymentMethod || "cash",
        totalAmount,
        items: orderItems,
        status: "pending",
      })
      .returning();

    // تحديث المخزون لكل منتج بعد تأكيد الطلب
    for (const item of orderItems) {
      const [product] = await db
        .select()
        .from(products)
        .where(eq(products.id, item.productId));

      if (product) {
        await db
          .update(products)
          .set({ stock: product.stock - item.quantity })
          .where(eq(products.id, item.productId));
      }
    }

    return NextResponse.json(newOrder);
  } catch (err) {
    console.error("POST /api/orders failed:", err);
    return NextResponse.json(
      { error: "فشل إنشاء الطلب" },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const db = getDb();
    const allOrders = await db.select().from(orders).orderBy(orders.id);

    return NextResponse.json(allOrders.reverse());
  } catch (err) {
    console.error("GET /api/orders failed:", err);
    return NextResponse.json(
      { error: "فشل جلب الطلبات" },
      { status: 500 }
    );
  }
}
