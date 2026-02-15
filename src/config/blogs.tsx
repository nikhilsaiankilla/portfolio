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
];
