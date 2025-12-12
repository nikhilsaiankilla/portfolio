import { NextResponse } from 'next/server';
import { getDbInstance } from '@/db'; // Adjust path to your db entry point
import { skills } from '@/db/schema'; // Adjust path to your schema
import { uploadToCloudinary } from '@/lib/cloudinary';

export async function POST(req: Request) {
    try {
        // 2. Parse FormData
        const formData = await req.formData();
        const name = formData.get('name') as string;
        const file = formData.get('file') as File | null;

        // Basic Validation
        if (!name || !file) {
            return NextResponse.json(
                { error: 'Name and File are required' },
                { status: 400 }
            );
        }

        // 3. Prepare FormData for the Upload API
        const uploadFormData = new FormData();
        uploadFormData.append('file', file);
        uploadFormData.append('path', 'portfolio-v2/skills');


        let uploadResult;
        try {
            uploadResult = await uploadToCloudinary(file, 'portfolio-v2/skills');
        } catch (uploadError) {
            console.error("Cloudinary Error:", uploadError);
            return NextResponse.json(
                { error: 'Failed to upload image to Cloudinary' },
                { status: 500 }
            );
        }

        if (!uploadResult?.url) {
            return NextResponse.json(
                { error: 'Image URL is missing from upload result' },
                { status: 500 }
            );
        }

        // 5. Insert into Database (Drizzle)
        const db = await getDbInstance();

        // The .returning() method returns the created row
        const [newSkill] = await db.insert(skills).values({
            name: name,
            src: uploadResult?.url, // Store the Cloudinary URL
        }).returning();

        return NextResponse.json(newSkill, { status: 201 });

    } catch (error) {
        console.error('Skill Upload Error:', error);
        return NextResponse.json(
            { error: 'Failed to create skill' },
            { status: 500 }
        );
    }
}