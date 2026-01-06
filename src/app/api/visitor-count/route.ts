import { getDbInstance } from "@/src/db";
import { visitorSnapshots } from "@/src/db/schema";
import { desc } from "drizzle-orm";
import { NextResponse } from "next/server";

export const GET = async () => {
    try {
        const db = await getDbInstance();

        const result = await db
            .select({ total: visitorSnapshots.totalVisitors })
            .from(visitorSnapshots)
            .orderBy(desc(visitorSnapshots.date))
            .limit(1)

        const visitorCount = result[0]?.total ?? 0

        return NextResponse.json({ message: "Fetched the visitor count", data: { visitorCount } }, { status: 200 })
    } catch (error: unknown) {
        const err = error instanceof Error ? error.message : "Internal Server Error";
        return NextResponse.json({ error: err }, { status: 500 })
    }
}