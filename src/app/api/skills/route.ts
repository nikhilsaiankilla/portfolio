import { getDbInstance } from "@/src/db";
import { skills } from "@/src/db/schema";
import { desc } from "drizzle-orm";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        const db = await getDbInstance();

        // Fetch all skills, ordered by creation date (Newest first)
        const allSkills = await db
            .select()
            .from(skills)
            .orderBy(desc(skills.createdAt));

        return NextResponse.json(allSkills, { status: 200 });

    } catch (error) {
        console.error("Error fetching skills:", error);
        return NextResponse.json(
            { error: "Failed to fetch skills" },
            { status: 500 }
        );
    }
}