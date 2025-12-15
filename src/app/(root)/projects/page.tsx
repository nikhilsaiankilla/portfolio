import AnimatedContainer from '@/src/components/animated-container';
import FooterSection from '@/src/components/footer-section';
import NavSection from '@/src/components/nav-section'
import ProjectCard from '@/src/components/project-card';
import SectionHeading from '@/src/components/section-heading';
import { getAllProjects } from '@/src/lib/project';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Projects",
  description:
    "A collection of projects I’ve built across frontend, backend, and platform engineering — from analytics systems to developer tools and real-world products.",
  keywords: [
    "Nikhil Sai Projects",
    "Full Stack Projects",
    "Web Applications",
    "Backend Systems",
    "Developer Tools",
    "System Design",
    "Analytics Platforms",
    "React",
    "Next.js",
    "Node.js",
    "Kafka",
    "ClickHouse",
  ],
  metadataBase: new URL("https://nikhilsai.in"),
  alternates: {
    canonical: "https://nikhilsai.in/projects",
  },
  openGraph: {
    title: "Projects — Nikhil Sai",
    description:
      "Real-world projects spanning web apps, backend systems, analytics platforms, and developer tooling.",
    url: "https://nikhilsai.in/projects",
    siteName: "Nikhil Sai / Projects",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Nikhil Sai Projects",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Projects — Nikhil Sai",
    description:
      "A showcase of products and systems I’ve built — from frontend interfaces to backend infrastructure.",
    images: ["/og-image.png"],
    creator: "@nikhilbuildss",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const page = () => {
  const projects = getAllProjects();

  return (
    <div className="w-full min-h-screen bg-white text-black dark:bg-black dark:text-white px-5">
      <div className="w-full border-2 border-b-0 border-t-0 border-gray-700/10 dark:border-gray-700/40 max-w-4xl mx-auto min-h-screen">
        <NavSection />
        <AnimatedContainer>
          <SectionHeading title='Projects!' />
          {
            projects && projects.length > 0 ?
              <div className='w-full grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 px-2'>
                {projects.map((project, index) => (
                  <ProjectCard key={index} {...project} />
                ))}
              </div>
              :
              <p className='text-center mt-10 text-gray-600 dark:text-gray-300s text-sm'>No Projects Found!!</p>
          }
        </AnimatedContainer>
        <FooterSection />
      </div>
    </div>
  )
}

export default page