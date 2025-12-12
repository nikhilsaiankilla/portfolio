import { NextResponse } from 'next/server';
import { getDbInstance } from '@/db';
import { skills } from '@/db/schema';
import { eq } from 'drizzle-orm';
import { deleteFromCloudinary } from '@/lib/cloudinary';

export async function DELETE(req: Request) {
    try {
        // 1. Get ID from JSON body
        const { id } = await req.json();

        if (!id) {
            return NextResponse.json(
                { error: 'Skill ID is required' },
                { status: 400 }
            );
        }

        const db = await getDbInstance();

        // 2. Fetch the skill first to get the image URL
        const [skillToDelete] = await db
            .select()
            .from(skills)
            .where(eq(skills.id, id))
            .limit(1);

        if (!skillToDelete) {
            return NextResponse.json(
                { error: 'Skill not found' },
                { status: 404 }
            );
        }

        // 3. Delete image from Cloudinary (Cleanup)
        if (skillToDelete.src) {
            await deleteFromCloudinary(skillToDelete.src);
        }

        // 4. Delete record from Database
        await db.delete(skills).where(eq(skills.id, id));

        return NextResponse.json(
            { message: 'Skill deleted successfully' },
            { status: 200 }
        );

    } catch (error) {
        console.error('Skill Deletion Error:', error);
        return NextResponse.json(
            { error: 'Failed to delete skill' },
            { status: 500 }
        );
    }
}