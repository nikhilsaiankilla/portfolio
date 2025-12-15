import { projects } from "@/src/config/projects"

export const getProjectById = (slug: string) => {
    const project = projects.find((p, index) => (p.slug === slug))

    if (!project) {
        return {
            slug,
            error: 'Project Not Found!!',
        }
    }

    return {
        slug: project.slug,
        error: null,

        title: project.title,
        description: project.description,
        image: project.image,

        technologies: project.technologies,
        github: project.github,
        live: project.live,

        role: project.role,
        team: project.team,
        status: project.status,
        featured: project.featured,

        challenges: project.challenges,
        learnings: project.learnings,

        isPublished: project.isPublished,

        content: project?.content ?? "Content is Missing!! Please inform Admin.",
    };
}

export const getAllProjects = () => {
    if (projects.length === 0) return [];

    const publishedFeatured = projects.filter(
        (project) => project.isPublished === true && project.featured === true
    );

    if (publishedFeatured.length < 4) {
        const published = projects.filter(
            (project) => project.isPublished === true
        );

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

export const getRelatedProjects = (slug: string) => {
    const currentProject = projects.find((project) => project.slug === slug);

    if (!currentProject || !currentProject.technologies) {
        return [];
    }

    // Create a Set for O(1) lookup speed
    const currentTechSet = new Set(currentProject.technologies.map((t) => t.toLowerCase()));

    const projectsWithSharedTech = projects
        .filter((project) => project.slug !== slug && project.isPublished) // Exclude current & drafts
        .map((project) => {
            // FIX: Count only the matching technologies
            const sharedCount = project.technologies.filter((tech) =>
                currentTechSet.has(tech.toLowerCase())
            ).length;

            return {
                project,
                score: sharedCount,
            };
        })
        .filter((p) => p.score > 0) // Must have at least one match
        .sort((a, b) => b.score - a.score); // FIX: Sort Descending (Highest score first)

    return projectsWithSharedTech
        .slice(0, 2)
        .map((item) => item.project);
};