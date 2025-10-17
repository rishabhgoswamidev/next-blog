import { getAuthSession } from "@/utility/auth";
import prisma from "@/utility/connect";
import { NextResponse } from "next/server";


//GET ALL THE COMMENT OF A POST
export const GET = async (req) => {
  const { searchParams } = new URL(req.url);
  const postSlug = searchParams.get("postSlug");

  try {
    const comments = await prisma.comment.findMany({
      where: {
        ...(postSlug && { postSlug }), // make sure this matches your schema
      },
      include: { user: true },
    });
    return NextResponse.json(comments);
  } catch (err) {
    console.error("🔥 Prisma Error:", err); // this will log the actual cause
    return NextResponse.json({ message: "Something went wrong", error: err.message }, { status: 500 });
  }
};

// CREATE A COMMENT
export const POST = async (req) => {
  const session = await getAuthSession();

  if(!session){
    return NextResponse.json({ message: "Not Authenticated!", error: err.message }, { status: 401 });
  }

  try {
    const body = await req.json();
    const comment = await prisma.comment.create({
      data: {...body, userEmail: session.user.email},
    });
    return NextResponse.json(comment, { status: 200 });
  } catch (err) {
    console.error("🔥 Prisma Error:", err); // this will log the actual cause
    return NextResponse.json({ message: "Something went wrong", error: err.message }, { status: 500 });
  }
};