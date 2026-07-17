import { NextResponse } from "next/server";
import { products } from "@/db/schema";
import { eq } from "drizzle-orm";

export async function GET() {
  try {
    const { db } = await import("@/db");
    const allProducts = await db.select().from(products);
    return NextResponse.json(allProducts);
  } catch (error: any) {
    return NextResponse.json(
      { error: "Failed to fetch products", details: error.message },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const { db } = await import("@/db");

    const body = await request.json();
    const {
      nameAr,
      nameEn,
      descriptionAr,
      descriptionEn,
      price,
      imageUrl,
      category,
      stock,
    } = body;

    if (!nameAr || !nameEn || !price) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const [newProduct] = await db
      .insert(products)
      .values({
        nameAr,
        nameEn,
        descriptionAr,
        descriptionEn,
        price,
        imageUrl,
        category: category || "general",
        stock: stock ?? 0,
      })
      .returning();

    return NextResponse.json(newProduct, { status: 201 });
  } catch (error: any) {
    return NextResponse.json(
      { error: "Failed to create product", details: error.message },
      { status: 500 }
    );
  }
}

export async function PATCH(request: Request) {
  try {
    const { db } = await import("@/db");

    const body = await request.json();
    const { id, ...updates } = body;

    if (!id) {
      return NextResponse.json({ error: "Missing product id" }, { status: 400 });
    }

    const [updated] = await db
      .update(products)
      .set(updates)
      .where(eq(products.id, id))
      .returning();

    return NextResponse.json(updated);
  } catch (error: any) {
    return NextResponse.json(
      { error: "Failed to update product", details: error.message },
      { status: 500 }
    );
  }
}

export async function DELETE(request: Request) {
  try {
    const { db } = await import("@/db");

    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json({ error: "Missing product id" }, { status: 400 });
    }

    await db.delete(products).where(eq(products.id, parseInt(id, 10)));

    return NextResponse.json({ message: "Product deleted" });
  } catch (error: any) {
    return NextResponse.json(
      { error: "Failed to delete product", details: error.message },
      { status: 500 }
    );
  }
}
