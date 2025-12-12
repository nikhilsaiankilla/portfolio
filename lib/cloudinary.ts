import { v2 as cloudinary } from 'cloudinary';

// Configure Cloudinary once
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

interface UploadResult {
    url: string;
    public_id: string;
    format: string;
}

/**
 * Uploads a File object to Cloudinary.
 * @param file The File object from FormData
 * @param folder The destination folder in Cloudinary
 */
export async function uploadToCloudinary(file: File, folder: string): Promise<UploadResult> {

    // 1. Convert file to Buffer
    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    // 2. Convert to Base64 Data URI
    const fileBase64 = `data:${file.type};base64,${buffer.toString('base64')}`;

    // 3. Upload to Cloudinary
    return new Promise((resolve, reject) => {
        cloudinary.uploader.upload(
            fileBase64,
            {
                folder: folder,
                resource_type: 'auto', // Detects image/video/raw
            },
            (error, result) => {
                if (error) return reject(error);
                if (!result) return reject(new Error('Upload failed: No result returned'));

                resolve({
                    url: result.secure_url,
                    public_id: result.public_id,
                    format: result.format
                });
            }
        );
    });
}

export async function deleteFromCloudinary(imageUrl: string) {
    try {
        if (!imageUrl.includes('cloudinary.com')) return; // Guard clause

        // 1. Split URL to find the part after 'upload/'
        // Format: .../upload/v12345678/folder/filename.ext
        const parts = imageUrl.split('/upload/');
        if (parts.length < 2) return;

        let publicId = parts[1];

        // 2. Remove the version number (e.g., "v1765185894/") if it exists
        // Regex looks for "v" followed by numbers and a slash at the start
        publicId = publicId.replace(/^v\d+\//, '');

        // 3. Remove the file extension (e.g., ".png")
        publicId = publicId.replace(/\.[^/.]+$/, "");

        // 4. Call Cloudinary Destroy
        if (publicId) {
            await cloudinary.uploader.destroy(publicId);
            console.log(`Deleted old image: ${publicId}`);
        }
    } catch (error) {
        console.error("Error deleting from Cloudinary:", error);
        // We catch errors here so they don't break the main update flow
    }
}