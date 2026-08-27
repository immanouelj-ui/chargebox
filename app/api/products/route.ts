import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const search = searchParams.get("search");
    const brand = searchParams.get("brand");
    const category = searchParams.get("category");

    const where: any = { isActive: true };

    if (search) {
      where.OR = [
        { name: { contains: search } },
        { description: { contains: search } },
      ];
    }
    if (brand) where.brand = { slug: brand };
    if (category) where.category = { slug: category };

    const products = await prisma.product.findMany({
      where,
      include: {
        brand: true,
        category: true,
        images: true,
      },
      orderBy: { createdAt: "desc" },
    });

    return NextResponse.json({ products });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
