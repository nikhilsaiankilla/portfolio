import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = "https://nikhilsai.in";

    return [
        {
            url: `${baseUrl}/`,
            lastModified: new Date(),
            priority: 1,
        },
        {
            url: `${baseUrl}/projects`,
            lastModified: new Date(),
            priority: 0.8,
        },
        {
            url: `${baseUrl}/blogs`,
            lastModified: new Date(),
            priority: 0.8,
        },
        // uncomment when you add about page 
        // {
        //     url: `${baseUrl}/about`,
        //     lastModified: new Date(),
        //     priority: 0.6,
        // },
    ];
}
