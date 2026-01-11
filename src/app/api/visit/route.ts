import { getDbInstance } from "@/src/db";
import { visitorSnapshots } from "@/src/db/schema";
import { desc, eq } from "drizzle-orm";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    try {
        const cookieStore = await cookies();
        const isVisited = cookieStore.get('isVisited')?.value;
        const db = await getDbInstance();

        if (isVisited) {
            return NextResponse.json({ ok: true });
        }

        const today = new Date();
        today.setHours(0, 0, 0, 0);

        const last = await db
            .select()
            .from(visitorSnapshots)
            .orderBy(desc(visitorSnapshots.date))
            .limit(1);

        if (last.length === 0) {
            await db.insert(visitorSnapshots).values({
                date: JSON.stringify(today),
                totalVisitors: 1,
            });
        } else {
            const lastDate = new Date(last[0].date);
            lastDate.setHours(0, 0, 0, 0);

            if (lastDate < today) {
                await db.insert(visitorSnapshots).values({
                    date: JSON.stringify(today),
                    totalVisitors: 1,
                });
            } else {
                await db
                    .update(visitorSnapshots)
                    .set({
                        totalVisitors: last[0].totalVisitors + 1,
                    })
                    .where(eq(visitorSnapshots.date, last[0].date));
            }
        }

        cookieStore.set('isVisited', 'true', {
            maxAge: 60 * 60 * 24 * 365,
            path: '/',
            httpOnly: true,
        });

        return NextResponse.json({ ok: true });
    } catch (err) {
        console.error(err);
        return NextResponse.json({ ok: false }, { status: 500 });
    }
}
