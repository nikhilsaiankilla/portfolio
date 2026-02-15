export interface Project {
  slug: string;
  title: string;
  description: string;

  image: string;

  technologies: string[];

  role: string;
  team: "Solo" | "Team";
  status: "Building" | "Completed" | "Live" | "Open Source";

  timeline?: string;

  github?: string;
  live?: string;

  featured: boolean;
  isPublished: boolean;
  publishedOn?: string;

  challenges?: string[];
  learnings?: string[];
}

export const projects: Project[] = [
  {
    slug: "hookpeek",
    title: "HookPeek",
    description:
      "A webhook inspection and debugging tool to capture, inspect, and monitor real-time webhook requests from Stripe and other providers.",
    image: "/projects/hookpeek.png",
    technologies: [
      "Next.js",
      "Node.js",
      "PostgreSQL",
      "Supabase",
      "Drizzle ORM",
      "Tailwind CSS",
    ],
    role: "Backend / Full Stack",
    team: "Solo",
    status: "Live",
    timeline: "Ongoing",

    github: "https://github.com/nikhilsaiankilla/hookpeek",
    live: "https://hookpeek.nikhilsai.in",

    featured: true,
    isPublished: true,
    publishedOn: "2026-01-01",

    challenges: [
      "Safely handling arbitrary webhook payloads",
      "Supporting all HTTP methods without assumptions",
      "Preventing crashes from malformed or invalid JSON",
      "Designing pagination for high-volume webhook logs",
      "Cleaning up old webhook data with secure cron jobs",
    ],

    learnings: [
      "Real-world webhook ingestion patterns",
      "Safe request body parsing strategies",
      "Concurrency-safe database updates",
      "Pagination and query optimization",
      "Cron job security and data retention policies",
    ],
  },
  {
    slug: "visly-analytics",
    title: "Visly Analytics",
    description:
      "A privacy-first web analytics platform with minimal configuration that automatically tracks page views, clicks, visitors, and sessions.",
    image: "/projects/visly.png",
    technologies: [
      "Next.js",
      "Node.js",
      "Kafka",
      "Redis",
      "ClickHouse",
      "PostgreSQL",
      "Tailwind Css",
      "Shadcn",
    ],
    role: "Full Stack",
    team: "Solo",
    status: "Completed",
    timeline: "Ongoing",
    github: "https://github.com/nikhilsai/visly",
    live: "https://visly.nikhilsai.in",
    featured: true,
    isPublished: true,
    publishedOn: "15/12/2025",
    challenges: [
      "Designing a zero-config tracking system",
      "High-throughput event ingestion",
      "Sessionization and visitor identification",
      "Real-time analytics performance",
    ],
    learnings: [
      "Analytics system design",
      "Event driven architectures",
      "ClickHouse performance tuning",
      "SDK and data pipeline design",
      "Package creation",
    ],
  },
  {
    slug: "dumcel-cloud",
    title: "Dumcel Cloud",
    description:
      "A React-focused cloud deployment platform that connects GitHub repositories and enables one-click deployments with full build logs and deployment history.",
    image: "/projects/dumcel.png",
    technologies: [
      "Next.js",
      "Aws S3",
      "Node.js",
      "Docker",
      "AWS ECS",
      "Redis",
      "Kafka",
    ],
    role: "Backend + Platform",
    team: "Solo",
    status: "Completed",
    timeline: "completed",

    github: "https://github.com/nikhilsaiankilla/dumcel",
    live: "https://dumcel.nikhilsai.in",

    featured: true,
    isPublished: true,
    publishedOn: "10/11/2025",
    challenges: [
      "Secure GitHub OAuth integration",
      "Containerized build pipelines",
      "Real-time log streaming",
      "Deployment history and rollback design",
    ],
    learnings: [
      "Platform engineering fundamentals",
      "CI/CD system design",
      "Docker-based build orchestration",
      "Observability and log pipelines",
    ],
  },
  {
    slug: "job-nextly",
    title: "Job Nextly",
    description:
      "An AI-assisted job application tracking platform with Gmail sync, application status management, and automated email scheduling.",
    image: "/projects/jobnextly.png",
    technologies: [
      "Next.js",
      "Gemini API",
      "firebase Storage",
      "Firebase",
      "Tailwind CSS",
    ],
    role: "Full Stack",
    team: "Solo",
    status: "Completed",
    timeline: "Completed",

    github: "https://github.com/nikhilsaiankilla/jobnextly",
    live: "https://jobnextly.vercel.app",

    featured: true,
    isPublished: true,
    publishedOn: "14/11/2025",
    challenges: [
      "Gmail API integration and permissions",
      "Reliable email syncing",
      "Designing application tracking workflows",
      "Email scheduling reliability",
    ],
    learnings: [
      "Gmail API and OAuth flows",
      "Workflow-based product design",
      "Background jobs and scheduling",
      "Data modeling for tracking systems",
    ],
  },
  {
    slug: "dev-roastify",
    title: "DevRoastify",
    description:
      "A GitHub roast card generator that analyzes profiles and repositories to generate humorous, shareable developer roast cards.",
    image: "/projects/dev-rostify.png",
    technologies: [
      "React",
      "Node.js",
      "GitHub API",
      "Gemini API",
      "Tailwind CSS",
    ],
    role: "Full Stack",
    team: "Solo",
    status: "Completed",
    timeline: "Completed",

    github: "https://github.com/nikhilsaiankilla/devroastify",
    live: "https://dev-roastify.vercel.app/",

    featured: false,
    isPublished: true,
    publishedOn: "11/11/2025",
    challenges: [
      "GitHub API rate limiting",
      "Prompt engineering for safe humor",
      "Dynamic card generation",
      "Content moderation",
    ],
    learnings: [
      "AI prompt design",
      "API rate-limit handling",
      "Dynamic image/card generation",
      "Balancing humor with safety",
    ],
  },
  {
    slug: "pitch-point",
    title: "Pitch Point",
    description:
      "A startup listing and discovery platform inspired by Y Combinator, where founders can showcase startups and users can explore early-stage companies.",
    image: "/projects/pitch-point.png",
    technologies: ["Next.js", "Node.js", "Next Auth", "Tailwind CSS"],
    role: "Full Stack",
    team: "Solo",
    status: "Completed",
    timeline: "completed",

    github: "https://github.com/nikhilsaiankilla/yc_direactory",
    live: "https://pitchpointt.vercel.app/",

    featured: false,
    isPublished: true,
    publishedOn: "10/10/2025",
    challenges: [
      "Designing scalable startup data models",
      "Founder onboarding flows",
      "Search and discovery relevance",
      "Moderation and quality control",
    ],
    learnings: [
      "Marketplace-style product design",
      "Search and ranking strategies",
      "Founder-centric UX",
      "Content moderation systems",
    ],
  },
  {
    slug: "gpt3-landing",
    title: "GPT-3 Landing Page",
    description:
      "My first React landing page built to learn and apply Tailwind CSS with a clean, modern UI.",
    image: "/projects/gpt3.png",
    technologies: ["React", "Tailwind CSS"],
    role: "Frontend",
    team: "Solo",
    status: "Completed",
    timeline: "Completed",

    github: "https://github.com/nikhilsaiankilla/GPT-3-ReactJS-",
    live: "https://gpt-3-reactjs.vercel.app/",

    featured: false,
    isPublished: true,
    publishedOn: "10/10/2025",
    challenges: [
      "Learning Tailwind CSS fundamentals",
      "Responsive layout design",
      "Component structuring in React",
    ],
    learnings: [
      "Utility-first CSS workflow",
      "Responsive design principles",
      "Basic React component architecture",
    ],
  },
];
