import { MetadataRoute } from "next";
import { projects } from "../config/projects";
import { blogs } from "../config/blogs";

const baseUrl = "https://nikhilsai.in";

export default function sitemap(): MetadataRoute.Sitemap {
    const publishedProjects = projects.filter(p => p.isPublished);
    const publishedBlogs = blogs.filter(b => b.isPublished);

    return [
        // Static pages
        { url: `${baseUrl}/`, priority: 1 },
        { url: `${baseUrl}/projects`, priority: 0.8 },
        { url: `${baseUrl}/blogs`, priority: 0.8 },

        // Dynamic project pages
        ...publishedProjects.map(project => ({
            url: `${baseUrl}/projects/${project.slug}`,
            lastModified: new Date(project.publishedOn ? project?.publishedOn : ''),
            priority: project.featured ? 0.9 : 0.7,
        })),

        // Dynamic blog pages
        ...publishedBlogs.map(blog => ({
            url: `${baseUrl}/blogs/${blog.slug}`,
            lastModified: new Date(blog.publishedOn),
            priority: 0.7,
        })),
    ];
}
