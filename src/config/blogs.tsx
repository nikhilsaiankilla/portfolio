export interface BlogTypes {
  slug: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  canonical: string;
  isPublished: boolean;
  publishedOn: string;
  readingTime: string;
  featured: boolean;
  content?: string;
}

export const blogs: BlogTypes[] = [
  {
    slug: "rate-limiting-using-redis",
    title: "How to Add a Simple Rate Limiter to an Express App Using Redis",
    description:
      "A practical walkthrough of building a Redis-based rate limiter for an Express API using atomic operations and TTL.",
    image: "",
    tags: [
      "Node.js",
      "Rate Limiting",
      "Software Development",
      "Scalability",
      "API Development",
      "Software Engineering",
      "Express",
      "Redis",
      "Backend",
    ],
    canonical:
      "https://medium.com/@nikhilsaiankilla/how-to-add-a-simple-rate-limiter-to-your-express-app-using-redis-4f85a0a9e26a",
    isPublished: true,
    publishedOn: "2025-01-26",
    readingTime: "4 min read",
    featured: true,
  },
  {
    slug: "prettier-husky-setup",
    title:
      "I Just Discovered Prettier and Husky and Now I'm Wondering Why I Didn't Start Earlier",
    description:
      "A practical guide to setting up Prettier and Husky to enforce consistent formatting at commit time, eliminate noisy diffs, and speed up team code reviews.",
    image: "",
    tags: [
      "Prettier",
      "Husky",
      "Developer Experience",
      "Code Quality",
      "JavaScript",
      "TypeScript",
      "Git Hooks",
      "Frontend",
      "Tooling",
    ],
    canonical: "https://nikhilsai.in/blog/prettier-husky-setup",
    isPublished: true,
    publishedOn: "2026-02-15",
    readingTime: "3 min read",
    featured: true,
  },
];
