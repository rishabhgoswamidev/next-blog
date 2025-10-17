import prisma from "@/utility/connect";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    if (!prisma.category) {
      throw new Error("Category model not found in Prisma Client.");
    }
    const categories = await prisma.category.findMany();
    console.log(categories);
    return NextResponse.json(categories, { status: 200 });
    
  } catch (err) {
    console.error("Error fetching categories:", err);
    return NextResponse.json(
      { message: "Something went wrong!" },
      { status: 500 }
    );
  }
};