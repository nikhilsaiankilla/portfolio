import { pgTable, text, uuid, timestamp, primaryKey } from 'drizzle-orm/pg-core';
import { relations } from 'drizzle-orm';

// --- SKILLS TABLE ---
export const skills = pgTable('skills', {
    id: uuid('id').defaultRandom().primaryKey(),
    name: text('name').notNull(), 
    src: text('src').notNull(), 
    createdAt: timestamp('created_at').defaultNow(),
});

// --- PROJECTS TABLE ---
export const projects = pgTable('projects', {
    id: uuid('id').defaultRandom().primaryKey(),
    title: text('title').notNull(),
    description: text('description').notNull(),

    // No 'tags' JSON column anymore. We use the relation below.

    link: text('link'),   
    github: text('github'), 
    image: text('image').notNull(),
    status: text('status').notNull(),

    createdAt: timestamp('created_at').defaultNow(),
    updatedAt: timestamp('updated_at').defaultNow(),
});

// --- JUNCTION TABLE ---
export const projectSkills = pgTable('project_skills', {
    projectId: uuid('project_id').notNull().references(() => projects.id, { onDelete: 'cascade' }),
    skillId: uuid('skill_id').notNull().references(() => skills.id, { onDelete: 'cascade' }),
}, (t) => ({
    // Composite Primary Key (Prevents duplicate skill linking to same project)
    pk: primaryKey({ columns: [t.projectId, t.skillId] }),
}));

// --- 4. RESUME TABLE ---
export const resume = pgTable('resume', {
    id: uuid('id').defaultRandom().primaryKey(),
    fileUrl: text('file_url').notNull(),
    fileName: text('file_name').default('Resume.pdf'),
    updatedAt: timestamp('updated_at').defaultNow(),
});

// --- RELATIONS (For easy Drizzle Queries) ---

// Projects can have many skills
export const projectsRelations = relations(projects, ({ many }) => ({
    skills: many(projectSkills),
}));

// Skills can belong to many projects
export const skillsRelations = relations(skills, ({ many }) => ({
    projects: many(projectSkills),
}));

// Define the link in the junction table
export const projectSkillsRelations = relations(projectSkills, ({ one }) => ({
    project: one(projects, {
        fields: [projectSkills.projectId],
        references: [projects.id],
    }),
    skill: one(skills, {
        fields: [projectSkills.skillId],
        references: [skills.id],
    }),
}));