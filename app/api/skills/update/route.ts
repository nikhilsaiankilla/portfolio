import { NextResponse } from 'next/server';
import { getDbInstance } from '@/db';
import { skills } from '@/db/schema';
import { deleteFromCloudinary, uploadToCloudinary } from '@/lib/cloudinary';
import { eq } from 'drizzle-orm';

export async function POST(req: Request) {
    try {
        const formData = await req.formData();

        // 1. Extract fields
        const id = formData.get('id') as string;
        const name = formData.get('name') as string;
        const file = formData.get('file') as File | null;
        const existingSrc = formData.get('src') as string;

        // 2. Validate essential data
        if (!id || !name) {
            return NextResponse.json(
                { error: 'Skill ID and Name are required' },
                { status: 400 }
            );
        }

        let finalImageUrl = existingSrc;

        // 3. Handle Image Logic
        // If a new file exists and has size (is not empty), upload it
        if (file && file.size > 0) {
            try {
                const uploadResult = await uploadToCloudinary(file, 'portfolio-v2/skills');

                if (!uploadResult?.url) {
                    throw new Error("Upload successful but URL missing");
                }

                finalImageUrl = uploadResult.url;

                //  Delete OLD image (cleanup)
                // 'existingSrc' comes from your form logic in the previous steps
                if (existingSrc) {
                    await deleteFromCloudinary(existingSrc);
                }
            } catch (uploadError) {
                console.error("Cloudinary Error:", uploadError);
                return NextResponse.json(
                    { error: 'Failed to upload new image' },
                    { status: 500 }
                );
            }
        }

        // Double check we have an image URL (either old or new)
        if (!finalImageUrl) {
            return NextResponse.json(
                { error: 'Image source is missing' },
                { status: 400 }
            );
        }

        // 4. Update Database
        const db = await getDbInstance();

        const [updatedSkill] = await db
            .update(skills)
            .set({
                name: name,
                src: finalImageUrl,
            })
            .where(eq(skills.id, id))
            .returning();

        if (!updatedSkill) {
            return NextResponse.json(
                { error: 'Skill not found' },
                { status: 404 }
            );
        }

        return NextResponse.json(updatedSkill, { status: 200 });

    } catch (error) {
        console.error('Skill Update Error:', error);
        return NextResponse.json(
            { error: 'Failed to update skill' },
            { status: 500 }
        );
    }
}