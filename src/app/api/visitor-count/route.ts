import { getDbInstance } from "@/src/db";
import { visitorSnapshots } from "@/src/db/schema";
import { sum } from "drizzle-orm";
import { NextResponse } from "next/server";

export const GET = async () => {
    try {
        const db = await getDbInstance();

        const result = await db
            .select({ value: sum(visitorSnapshots?.totalVisitors) })
            .from(visitorSnapshots)

        const visitorCount = result[0]?.value ?? 0

        return NextResponse.json({ message: "Fetched the visitor count", data: { visitorCount } }, { status: 200 })
    } catch (error: unknown) {
        const err = error instanceof Error ? error.message : "Internal Server Error";
        return NextResponse.json({ error: err }, { status: 500 })
    }
}