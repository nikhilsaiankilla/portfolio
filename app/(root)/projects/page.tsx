import AnimatedContainer from '@/components/animated-container';
import FooterSection from '@/components/footer-section';
import NavSection from '@/components/nav-section'
import ProjectCard from '@/components/project-card';
import SectionHeading from '@/components/section-heading';

const projects = [
  {
    id: "1",
    title: "Dumcel Cloud",
    description: "A Vercel-like deployment platform for React apps. Built with a microservices architecture using AWS ECS, Docker, Redis, and Kafka to handle builds and reverse proxying.",
    tags: [
      { name: "Next.js", src: "/Next.js.svg" },
      { name: "AWS ECS", src: "/AWS.svg" },
      { name: "Docker", src: "/Docker.svg" },
    ],
    link: "https://github.com/yourusername/dumcel",
    image: "https://picsum.photos/seed/animal/200",
    github: "https://github.com/yourusername/portfolio",
    status: "Open Source"
  },
  {
    id: "2",
    title: "Visly Analytics",
    description: "A privacy-first web analytics platform. Features real-time dashboards and lightweight tracking using ClickHouse for high-speed data ingestion.",
    tags: [
      { name: "Next.js", src: "/Next.js.svg" },
    ],
    link: "https://github.com/yourusername/visly",
    github: "https://github.com/yourusername/portfolio",
    image: "https://picsum.photos/seed/picsum/200",
    status: "Building"
  },
  {
    id: "3",
    title: "Job Nextly",
    description: "AI-powered job application tracker. Integrates with the Gemini API to analyze job descriptions and manage application statuses effectively.",
    tags: [
      { name: "Next.js", src: "/Next.js.svg" },
      { name: "Next.js", src: "/Next.js.svg" },
      { name: "Next.js", src: "/Next.js.svg" },
      { name: "Next.js", src: "/Next.js.svg" },
      { name: "Next.js", src: "/Next.js.svg" },
      { name: "Next.js", src: "/Next.js.svg" },
      { name: "Next.js", src: "/Next.js.svg" },
    ],
    link: "https://github.com/yourusername/job-nextly",
    github: "https://github.com/yourusername/portfolio",
    image: "https://picsum.photos/seed/picsum/200",
    status: "Completed"
  },
  {
    id: "4",
    title: "Comic Portfolio",
    description: "This very website! A unique developer portfolio designed with a comic book theme, featuring heavy use of Framer Motion for micro-interactions.",
    tags: [
      { name: "Next.js", src: "/Next.js.svg" },
      { name: "Next.js", src: "/Next.js.svg" },
      { name: "Next.js", src: "/Next.js.svg" },
      { name: "Next.js", src: "/Next.js.svg" },
    ],
    link: "https://github.com/yourusername/portfolio",
    github: "https://github.com/yourusername/portfolio",
    image: "https://picsum.photos/seed/picsum/200",
    status: "Live"
  }
];

const page = () => {
  return (
    <div className="w-full min-h-screen bg-white text-black dark:bg-black dark:text-white px-5">
      <div className="w-full border-2 border-b-0 border-t-0 border-gray-700/10 dark:border-gray-700/40 max-w-4xl mx-auto min-h-screen">
        <NavSection />
        <AnimatedContainer>
          <SectionHeading title='Projects!' />
          <div className='w-full grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 px-2'>
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </AnimatedContainer>
        <FooterSection />
      </div>
    </div>
  )
}

export default page