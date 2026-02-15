import { MetadataRoute } from "next";
import { projects } from "../config/projects";
import { blogs } from "../config/blogs";

const baseUrl = "https://nikhilsai.in";

function safeDate(date?: string): Date | undefined {
  if (!date) return undefined;
  const d = new Date(date);
  return isNaN(d.getTime()) ? undefined : d;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const publishedProjects = projects
    .filter((p) => p.isPublished)
    .sort(
      (a, b) =>
        (safeDate(b.publishedOn)?.getTime() || 0) -
        (safeDate(a.publishedOn)?.getTime() || 0),
    );

  const publishedBlogs = blogs
    .filter((b) => b.isPublished)
    .sort(
      (a, b) =>
        (safeDate(b.publishedOn)?.getTime() || 0) -
        (safeDate(a.publishedOn)?.getTime() || 0),
    );

  return [
    // Static pages
    {
      url: `${baseUrl}/`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/projects`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blogs`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/newsletter`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.5,
    },
    {
      url: `${baseUrl}/resume`,
      lastModified: new Date(),
      changeFrequency: "yearly" as const,
      priority: 0.4,
    },

    // Dynamic project pages
    ...publishedProjects.map((project) => ({
      url: `${baseUrl}/projects/${project.slug}`,
      lastModified: safeDate(project.publishedOn),
      changeFrequency: "monthly" as const,
      priority: project.featured ? 0.9 : 0.7,
    })),

    // Dynamic blog pages
    ...publishedBlogs.map((blog) => ({
      url: `${baseUrl}/blogs/${blog.slug}`,
      lastModified: safeDate(blog.publishedOn),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
