import { getDbInstance } from "@/src/db";
import { visitorSnapshots } from "@/src/db/schema";
import { getRedisInstance } from "@/src/lib/redis";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    if (
      req.headers.get("Authorization") !== `Bearer ${process.env.CRON_SECRET}`
    ) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    const redisClient = await getRedisInstance();
    const db = await getDbInstance();

    if (redisClient && db) {
      const count = await redisClient?.get("site:visitor:count");

      if (!count) {
        throw new Error("Count is missing!!");
      }

      const today = new Date().toISOString().split("T")[0];

      await db
        .insert(visitorSnapshots)
        .values({
          date: today,
          totalVisitors: Number(count),
        })
        .onConflictDoNothing();

      await redisClient?.set("site:visitor:count", 0);
    }

    return NextResponse.json({ message: "Tast Complected" }, { status: 200 });
  } catch (error) {
    console.log(error);
  }

  return NextResponse.json(
    { message: "Something went wrong!!" },
    { status: 200 },
  );
}
