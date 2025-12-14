import { skills } from "@/src/config/skills";

export const getAllSkills = () => {
    if (!skills || skills.length === 0) return [];

    return skills
        .filter((skill) => skill.isPublished === true)
        .sort((a, b) => (a.priority ?? 0) - (b.priority ?? 0))
        .map((skill) => ({
            id: skill.id,
            name: skill.name,
            src: skill.src,
        }));
};
