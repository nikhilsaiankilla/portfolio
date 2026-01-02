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

    content?: string; // long-form markdown
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
        status: 'Live',
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

        content: `# HookPeek

HookPeek is a **webhook inspection and debugging tool** built to help developers understand what third-party services actually send to their backend.

It focuses on **observation, not processing** — capturing raw webhook requests exactly as they arrive.

---

## Why HookPeek Exists

Webhook debugging is painful:
- Payments succeed but backend state doesn’t update
- Providers retry webhooks without clear visibility
- Logs miss headers, retries, or malformed payloads

HookPeek exists to remove guesswork and show **raw truth**.

---

## Core Features

### Webhook Endpoint Generation

- Generate a temporary webhook URL instantly
- Plug it into Stripe or any webhook provider
- No authentication required to start

Simple and fast.

---

### Request Inspection

- Capture **any HTTP method**
- Store raw request bodies (JSON or plain text)
- Inspect headers and query parameters
- View retries and delivery attempts

Nothing is parsed or altered.

---

### Request History & Pagination

- Timestamped request logs
- Paginated views for high-volume traffic
- Click-to-inspect detailed request payloads

Built for real-world debugging.

---

## Technical Architecture

### Data Flow

- Incoming webhook requests captured via API routes
- Raw payloads stored safely without assumptions
- PostgreSQL used for persistence
- Cleanup jobs remove stale data automatically

Designed to survive malformed input and retries.

---

## Tech Stack

**Frontend**
- Next.js
- Tailwind CSS

**Backend**
- Node.js
- PostgreSQL (Supabase)
- Drizzle ORM

---

## Challenges Faced

- Handling invalid or non-JSON payloads safely
- Supporting all HTTP methods in Next.js routes
- Preventing race conditions during request counting
- Designing secure cron jobs for data cleanup

---

## Key Learnings

- Webhook systems must never assume payload shape
- Safe parsing is critical for production stability
- Databases should handle concurrency, not application logic
- Cleanup and retention are essential for long-running systems

---

## Status

HookPeek is **actively developed** and verified using real Stripe webhooks.

---

HookPeek is built with a single goal:  
**Stop guessing. See your webhooks.**
`,
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
        content: `# Visly Analytics

Visly is a **privacy-first web analytics platform** designed for developers who want meaningful insights without complex setup, invasive tracking, or bloated dashboards.  
The goal is simple: **drop in minimal config, and Visly handles the rest**.

Page views, clicks, visitors, sessions — tracked automatically.

---

## Why Visly Exists

Most analytics tools fail in one of two ways:

- Too complex to set up correctly  
- Too invasive to user privacy  

Visly is built for modern developers who want:
- Zero or near-zero configuration
- Real-time insights
- Full ownership of their data
- No cookies, no fingerprinting, no dark patterns

---

## Core Features

### Minimal Configuration

- Add a lightweight SDK
- Provide a project key
- Start receiving analytics instantly

No event schemas to define. No dashboards to wire manually.

---

### Automatic Tracking

Visly automatically captures:

- **Page Views** – route changes and navigation
- **Visitors** – anonymous, privacy-safe identification
- **Sessions** – intelligent sessionization
- **Clicks & Interactions** – key UI interactions without manual instrumentation

All without cookies or personal data.

---

### Privacy-First by Design

- No cookies
- No fingerprinting
- No personal identifiers
- GDPR-friendly by default

Analytics should not come at the cost of user trust.

---

### Real-Time Analytics

- Events ingested in real time
- Live dashboards powered by a high-performance data pipeline
- Designed to handle high write throughput with low latency reads

---

## Technical Architecture

### Event Ingestion Pipeline

- Lightweight SDK sends events
- Events flow through **Kafka** for durability and scale
- **Redis** used for fast session lookups and caching
- **ClickHouse** powers analytical queries at scale
- **PostgreSQL** stores metadata and configuration

Built to scale from side projects to high-traffic products.

---

### Session & Visitor Modeling

- Privacy-safe visitor identification
- Intelligent session windows
- Accurate aggregation without invasive tracking

---

## Tech Stack

**Frontend**
- Next.js
- Tailwind CSS

**Backend & Infrastructure**
- Node.js
- Kafka
- Redis
- ClickHouse
- PostgreSQL

---

## Challenges Faced

- Designing a truly zero-config analytics flow
- Handling high-throughput event ingestion
- Accurate sessionization without cookies
- Query performance at scale
- Keeping the SDK lightweight and fast

---

## Infrastructure & Demo Environment Notes

To keep the demo environment lightweight and cost-efficient, some background processing components are currently **disabled**.

- The full event pipeline (Kafka → Worker → ClickHouse) has been designed, implemented, and validated.
- Continuous background workers are paused in the demo environment since real-time processing is not required for showcasing core functionality.
- All architectural components, deployment configurations, and scaling paths remain intact and can be re-enabled as needed.

This approach allows Visly to demonstrate production-grade system design while avoiding unnecessary infrastructure cost during development and portfolio usage.

---

## Key Learnings

- Analytics system design at scale
- Event-driven architectures
- ClickHouse query optimization
- Designing developer-friendly SDKs
- Privacy-first product thinking

---

## Status

Visly is currently **under active development**.  
The focus is on stability, performance, and an exceptional developer experience before public launch.

---

If analytics should be invisible, fast, and respectful — Visly is built for that.
`,
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
        content: `# Dumcel Cloud

Dumcel Cloud is a **React-focused cloud deployment platform** designed to make deploying frontend applications straightforward and observable.  
Connect a GitHub repository, trigger a deployment manually, and Dumcel handles builds, containers, logs, and deployment history.

---

## Why Dumcel Exists

Frontend developers need:
- Predictable deployments
- Clear visibility into builds
- Control over when code goes live
- No deep DevOps knowledge

Dumcel removes infrastructure friction while keeping developers in control.

---

## Core Features

### GitHub Integration

- Secure GitHub OAuth integration
- Repository access for build pipelines
- Webhook support for metadata and commit context

Deployments are **manual by design**, not automatic.

---

### Manual Deployment Pipeline

- Deploy when *you* decide
- Deterministic, containerized builds
- Isolated build environments per deployment

No surprise production changes.

---

### Logs & Deployment History

- Real-time build logs during deployments
- Persistent logs for debugging
- Full deployment history with commit references and status

Observability is a core feature.

---

### Custom Domains & Routing

- Wildcard custom domain support
- Automatic domain mapping per project
- Reverse proxy for routing traffic to active deployments

Production-ready networking without manual setup.

---

## Technical Architecture

### Microservices Architecture

- Independent services for builds, deployments, logging, and orchestration
- Event-driven communication between services
- Fault isolation to prevent cascading failures

Designed for long-term scalability.

---

### Infrastructure

- **Docker** for build isolation
- **AWS ECS** for container orchestration
- **Kafka** for event pipelines
- **Redis** for queues and ephemeral state
- **Node.js** services for orchestration and APIs

---

## Infrastructure & Demo Environment Notes

To keep the platform sustainable for demo and portfolio usage, certain background and orchestration components are currently **scaled down or disabled**.

- The full ECS-based microservices architecture, Kafka event pipeline, and Redis-backed coordination layers have been designed, implemented, and validated.
- Continuous background workers and high-throughput pipelines are paused where not required for interactive demos.
- All services remain containerized with preserved deployment workflows and can be re-enabled or scaled horizontally when needed.

This setup reflects real-world platform engineering tradeoffs: maintaining production-grade architecture while optimizing operational cost during early-stage usage.

---

## Tech Stack

**Frontend**
- Next.js
- Tailwind CSS

**Backend & Platform**
- Node.js
- Docker
- AWS ECS
- Kafka
- Redis

---

## Challenges Faced

- Designing reliable microservice boundaries
- Streaming logs in real time
- Deployment state consistency across services
- Secure domain routing and reverse proxy setup
- Preventing partial failures from impacting the platform

---

## Key Learnings

- Microservices system design
- Platform observability patterns
- Reverse proxy and domain routing
- Event-driven orchestration
- Building developer-focused infrastructure

---

## Status

Dumcel Cloud is **Deployed** you can try it now.  
The focus is on stability, observability, and clean system boundaries before broader adoption.

---

Dumcel prioritizes **control, visibility, and correctness** over automation hype.
`,
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
        content: `# Job Nextly

Job Nextly is a **job application tracking platform** built to help candidates stay organized without relying on brittle automation.  
It combines **Gmail sync**, **manual tracking**, and **visual analytics** to give a clear picture of your job search progress.

---

## Why Job Nextly Exists

Job searching quickly becomes chaotic:
- Emails are scattered across inboxes
- Application statuses are hard to remember
- Progress feels invisible over time

Job Nextly exists to turn a messy job hunt into a **clear, trackable workflow**.

---

## Core Features

### Gmail Sync

- Secure Gmail integration
- Sync job-related emails into the platform
- Extract basic metadata (company, subject, date)

Emails inform tracking — they don’t control it.

---

### Manual Application Tracking

- Add and update applications manually
- Track stages like applied, interview, offer, rejected
- Full control over your job data

No auto-changing states. No guessing.

---

### Analytics & Insights

- Visual analytics powered by **Recharts**
- Track applications over time
- See response rates and stage distributions
- Identify patterns in your job search

Progress made visible.

---

## Technical Architecture

### Data Flow

- Gmail API for email syncing
- PostgreSQL for application and email metadata
- Analytics queries aggregated for charts
- Frontend dashboards powered by Recharts

Built for clarity, not complexity.

---

## Tech Stack

**Frontend**
- Next.js
- Tailwind CSS
- Recharts

**Backend**
- Node.js
- PostgreSQL
- Firebase
- Gmail API

---

## Challenges Faced

- Gmail API permissions and OAuth flows
- Email-to-application mapping
- Designing flexible tracking states
- Meaningful analytics without overfitting data

---

## Key Learnings

- Gmail API integration
- UX design for tracking workflows
- Analytics visualization with Recharts
- Balancing automation with user control

---

## Status

Job Nextly is **completed** and usable as a personal productivity tool.

---

Job Nextly focuses on **clarity, control, and insight** — not automation for its own sake.
`,
    },
    {
        slug: "devroastify",
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
        content: `# DevRoastify

DevRoastify is a **GitHub roast card generator** that analyzes a user’s GitHub profile and turns the results into a **shareable visual card**.  
Profiles are roasted using AI, rendered as HTML, and captured as PNG images users can copy and share.

---

## Why DevRoastify Exists

Developers love:
- GitHub stats
- Self-deprecating humor
- Shareable tech content

DevRoastify combines all three into a fun, lightweight project that turns GitHub data into something entertaining.

---

## Core Features

### GitHub Profile Analysis

- Fetches public GitHub profile and repository data
- Analyzes activity, repositories, and patterns
- Builds structured context for AI consumption

---

### AI-Powered Roasts

- Uses **Gemini API** to generate humorous roast text
- Carefully designed prompts to keep content funny, not offensive
- Dynamic roast generation per user

Prompt quality directly impacts output quality.

---

### Card Generation & Export

- Roast rendered as an HTML card
- **Puppeteer** used to capture the HTML as a PNG image
- Users can copy or download the generated card easily

Designed for sharing on social platforms.

---

## Technical Architecture

### Rendering Pipeline

1. GitHub API fetches user data  
2. Structured data passed to Gemini for roast generation  
3. Roast rendered into an HTML card  
4. Puppeteer captures the card as a PNG  
5. Image served to the user for copying or sharing  

---

## Tech Stack

**Frontend**
- React
- Tailwind CSS

**Backend**
- Node.js
- GitHub API
- Gemini API
- Puppeteer

---

## Challenges Faced

- GitHub API rate limiting
- Prompt engineering for consistent humor
- Rendering HTML accurately for screenshots
- Puppeteer performance and reliability

---

## Key Learnings

- AI prompt design and iteration
- HTML-to-image rendering pipelines
- Puppeteer automation
- Balancing humor with safety constraints

---

## Status

DevRoastify is **completed** and publicly usable as a fun side project.

---

DevRoastify proves that small, well-executed ideas can be both technical and fun.
`,
    },
    {
        slug: "pitch-point",
        title: "Pitch Point",
        description:
            "A startup listing and discovery platform inspired by Y Combinator, where founders can showcase startups and users can explore early-stage companies.",
        image: "/projects/pitch-point.png",
        technologies: [
            "Next.js",
            "Node.js",
            'Next Auth',
            "Tailwind CSS",
        ],
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
        content: `# Pitch Point

Pitch Point is a **startup listing and discovery platform** inspired by Y Combinator, focused on clean presentation and simple founder onboarding.  
Startups are showcased as structured cards, making it easy to browse, evaluate, and discover early-stage ideas.

---

## Why Pitch Point Exists

Discovering early-stage startups is often fragmented:
- Scattered across social platforms
- Poorly structured information
- No consistent presentation

Pitch Point brings startups into a **single, clean, card-based interface**.

---

## Core Features

### Startup Cards

- Card-based startup listings
- Clear display of idea, stage, and description
- Consistent layout for easy comparison

Designed for fast scanning.

---

### Authentication & User Access

- Secure authentication for founders
- Protected routes for creating and managing listings
- Public browsing without login

Keeps contribution gated, discovery open.

---

### Founder-Focused UI

- Simple submission flows
- Minimal friction for listing a startup
- Clean UI built for clarity, not noise

---

## Technical Architecture

### Frontend-Centric Design

- Built with **Next.js**
- Server-side rendering for fast initial loads
- Component-driven UI architecture

---

## Tech Stack

**Frontend**
- Next.js
- Tailwind CSS

**Backend & Auth**
- Next.js API routes
- Authentication (JWT / OAuth-based)

---

## Challenges Faced

- Designing scalable card-based layouts
- Auth-protected UI flows
- Balancing simplicity with useful structure
- Preventing low-quality or spam submissions

---

## Key Learnings

- Auth flows in Next.js
- UI patterns for content discovery
- Designing founder-first experiences
- Component reuse and layout systems

---

## Status

Pitch Point is **under development**, with focus on UI polish and founder onboarding.

---

Pitch Point prioritizes **clarity, structure, and signal** over hype.
`,
    },
    {
        slug: "gpt3-landing",
        title: "GPT-3 Landing Page",
        description:
            "My first React landing page built to learn and apply Tailwind CSS with a clean, modern UI.",
        image: "/projects/gpt3.png",
        technologies: [
            "React",
            "Tailwind CSS",
        ],
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
        content: `# GPT-3 Landing Page

This was my **first React application**.

It’s a **simple static landing page** built to get hands-on with **React** and **Tailwind CSS**.  
No backend, no complex logic — just learning the fundamentals and shipping something real.

---

## What This Project Is

- A static marketing-style landing page
- Built entirely with React components
- Styled using Tailwind CSS

Pure frontend.

---

## Tech Stack

- React
- Tailwind CSS

---

## What I Focused On

- Understanding React component structure
- Learning Tailwind’s utility-first approach
- Responsive layouts
- Clean spacing and visual hierarchy

---

## Why I Built It

This project was about:
- Moving from tutorials to building
- Learning by doing
- Getting comfortable with React as a framework

It marks the start of my frontend journey.

---

## Status

Completed.

---

It’s not flashy but it shipped, and it taught me the basics.
`,
    }
];
