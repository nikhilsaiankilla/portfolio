import { Project, projects } from "@/src/config/projects"
import path from "path"
import fs from 'fs'

const projectDiractory = path.join(process.cwd(), 'src/data/projects');

export const getProjectById = (slug: string) => {
    const project = projects.find((p, index) => (p.slug === slug))

    if (!project) {
        return {
            slug,
            error: 'Project Not Found!!',
        }
    }

    const content = getProjectContentBySlug(slug)

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

        content: content ?? "Content is Missing!! Please inform Admin.",
    };
}

export const getAllFeaturedProjects = () => {
    if (projects.length === 0) return [];

    const publishedFeatured = projects.filter(
        (project): project is Project & { publishedOn: string } =>
            project.featured === true && isPublishedWithDate(project)
    );

    if (publishedFeatured.length < 4) {
        const published = projects.filter(isPublishedWithDate);

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

export const getAllProjects = () => {
    if (projects.length === 0) return [];

    const publishedProjects = projects.filter((pro, idx) => pro.isPublished === true && isPublishedWithDate(pro));

    if (publishedProjects.length === 0) return [];

    const publishedProjectsSortedByPublishedDates = publishedProjects.sort((a, b) =>
        new Date(b?.publishedOn as string).getTime() - new Date(a?.publishedOn as string).getTime()
    )

    return publishedProjectsSortedByPublishedDates;
}

function isPublishedWithDate(
    project: Project
): project is Project & { publishedOn: string } {
    return project.isPublished === true && typeof project.publishedOn === "string";
}

function getProjectContentBySlug(slug: string) {
    if (!slug) return "";

    const projectPath = path.join(projectDiractory, `${slug}.mdx`);

    if (!fs.existsSync(projectPath)) {
        return `${slug} Mdx Content file is missing please inform the admin!!`
    }

    const readContentOfProjectUsingSlug = fs.readFileSync(projectPath, 'utf-8')

    return readContentOfProjectUsingSlug;
}