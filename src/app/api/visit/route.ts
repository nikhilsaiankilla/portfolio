import { getRedisInstance } from "@/src/lib/redis";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    const res = NextResponse.json({})
    try {
        const cookieStore = await cookies();
        const isVisited = cookieStore.get('isVisited')?.value;
        const redisClient = await getRedisInstance();

        if (!isVisited && redisClient) {
            const count = await redisClient.incr('site:visitor:count');
            cookieStore.set('isVisited', "true", {
                maxAge: 60 * 60 * 24 * 365, // 1 year
                path: '/',
                httpOnly: true,
            })

            return NextResponse.json({ count }, { headers: res.headers })
        }
    } catch (error) {
        console.log(error);
    }

    return res;
}