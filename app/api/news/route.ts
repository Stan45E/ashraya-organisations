import { NextResponse } from "next/server";
import { prisma } from "@/src/lib/prisma";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const news = await prisma.news.create({
      data: {
        kannadaTitle: body.kannadaTitle,
        englishTitle: body.englishTitle,
        kannadaContent: body.kannadaContent,
        englishContent: body.englishContent,
      },
    });

    return NextResponse.json(news);
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "Failed to save news" },
      { status: 500 }
    );
  }
}

export async function GET() {
  const news = await prisma.news.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  return NextResponse.json(news);
}