import { blogs, BlogTypes } from "../config/blogs";

export const getBlogById = (slug: string) => {
    const blog = blogs.find((p, index) => (p.slug === slug))

    if (!blog) {
        return {
            slug,
            error: 'Blog Not Found!!',
        }
    }

    return {
        slug: blog.slug,
        error: null,

        title: blog.title,
        description: blog.description,
        image: blog.image,

        tags: blog.tags,

        featured: blog.featured,
        readingTime: blog.readingTime,
        publishedOn: blog.publishedOn,

        isPublished: blog.isPublished,
        canonical: blog.canonical,

        content: blog?.content ?? "Content is Missing!! Please inform Admin.",
    };
}

export const getAllBlogs = () => {
    if (blogs.length === 0) return [];

    const publishedFeatured = blogs.filter(
        (blog): blog is BlogTypes & { publishedOn: string } =>
            blog.featured === true && isPublishedWithDate(blog)
    );

    if (publishedFeatured.length < 4) {
        const published = blogs.filter(isPublishedWithDate);

        return published.sort(
            (a, b) =>
                new Date(b.publishedOn).getTime() -
                new Date(a.publishedOn).getTime()
        );
    }

    return publishedFeatured.sort(
        (a, b) =>
            new Date(b.publishedOn).getTime() -
            new Date(a.publishedOn).getTime()
    );
};

export const getRelatedBlogs = (slug: string) => {
    const currentProject = blogs.find((project) => project.slug === slug);

    if (!currentProject || !currentProject.tags) {
        return [];
    }

    // Create a Set for O(1) lookup speed
    const currentTechSet = new Set(currentProject.tags.map((t) => t.toLowerCase()));

    const projectsWithSharedTech = blogs
        .filter((blog) => blog.slug !== slug && blog.isPublished) // Exclude current & drafts
        .map((blog) => {
            // FIX: Count only the matching technologies
            const sharedCount = blog.tags.filter((tag) =>
                currentTechSet.has(tag.toLowerCase())
            ).length;

            return {
                blog,
                score: sharedCount,
            };
        })
        .filter((p) => p.score > 0) // Must have at least one match
        .sort((a, b) => b.score - a.score); // FIX: Sort Descending (Highest score first)

    return projectsWithSharedTech
        .slice(0, 2)
        .map((item) => item.blog);
};

function isPublishedWithDate(
    blog: BlogTypes
): blog is BlogTypes & { publishedOn: string } {
    return blog.isPublished === true && typeof blog.publishedOn === "string";
}