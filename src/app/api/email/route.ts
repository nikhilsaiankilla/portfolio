import { getDbInstance } from "@/src/db";
import { newsLetterEmails } from "@/src/db/schema";
import { eq } from "drizzle-orm";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
  try {
    const body = await req.json();

    if (!body.email) {
      return NextResponse.json({
        success: false,
        error: "Email is required",
      });
    }

    const db = await getDbInstance();

    const [existing] = await db
      .select()
      .from(newsLetterEmails)
      .where(eq(newsLetterEmails.email, body.email))
      .limit(1);

    if (existing) {
      return NextResponse.json({
        success: true,
        error: "Email already subscribed",
      });
    }

    await db.insert(newsLetterEmails).values({
      email: body.email,
    });

    return NextResponse.json({
      success: true,
      message: "Successfully subscribed to email",
    });
  } catch (error: unknown) {
    return NextResponse.json({
      success: false,
      error: error instanceof Error ? error.message : "Internal server error",
    });
  }
};
