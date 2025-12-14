import { projects } from "@/src/config/projects"
import path from "path"
import fs from 'fs';
import matter from 'gray-matter';

// path for project directory
const projectDirectory = path.join(process.cwd(), '/src/data/projects');

export const getProjectById = (slug: string) => {
    const project = projects.find((p, index) => (p.slug === slug))

    if (!project) {
        return {
            slug,
            error: 'Project Not Found!!',
        }
    }

    // const projectMdx = getProjectMdx(slug)

    // if (!projectMdx) {
    //     return {
    //         slug: project.slug,
    //         error: null,

    //         title: project.title,
    //         description: project.description,
    //         image: project.image,

    //         technologies: project.technologies,
    //         github: project.github,
    //         live: project.live,

    //         role: project.role,
    //         team: project.team,
    //         status: project.status,
    //         featured: project.featured,

    //         challenges: project.challenges,
    //         learnings: project.learnings,

    //         isPublished: project.isPublished,

    //         content: project?.content ?? "Content is Missing!! Please inform Admin.",
    //     };
    // }

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

export const getProjectMdx = (slug: string) => {
    try {
        const fullPath = path.join(projectDirectory, `${slug}.mdx`);

        if (!fs.existsSync(projectDirectory)) {
            return null;
        }

        const fileContents = fs.readFileSync(fullPath, 'utf8');
        const { content } = matter(fileContents);

        return content
    } catch (error) {
        console.error(`Error reading project case study ${slug}:`, error);
        return null;
    }
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
    const currentProject = projects.find((project, idx) => (project?.slug === slug));

    if (!currentProject) {
        return [];
    }

    const techOfCurrentProject = currentProject.technologies?.map((t) => t.toLowerCase());

    // calculate the relevance score based on the tech shared between projects 
    const allProjectsExceptCurrentProject = projects.filter((p) => p.slug !== slug);

    const projectsWithSharedTech = allProjectsExceptCurrentProject.map((project) => {
        const sharedTechnologies = project.technologies.map((tech) => (techOfCurrentProject.includes(tech.toLowerCase())))
        return {
            project,
            score: sharedTechnologies.length,
        }
    })
        .filter((p) => p.score > 0)
        .sort((a, b) => a.score - b.score)

    return projectsWithSharedTech
        .slice(0, 2)
        .map((item) => item.project);
} 