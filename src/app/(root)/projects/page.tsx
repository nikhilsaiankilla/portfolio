import AnimatedContainer from "@/src/components/animated-container";
import FooterSection from "@/src/components/footer-section";
import NavSection from "@/src/components/nav-section";
import ProjectCard from "@/src/components/project-card";
import SectionHeading from "@/src/components/section-heading";
import { getAllProjects } from "@/src/lib/project";
import { Metadata } from "next";

const SITE_URL = "https://nikhilsai.in";
const OG_IMAGE = `${SITE_URL}/og-image-projects.png`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: "Full Stack Developer Projects | Next.js, Node.js, Kafka, ClickHouse",
  description:
    "A portfolio of full stack and backend projects built with Next.js, React, Node.js, Kafka, ClickHouse, and analytics pipelines. Real-world systems, developer tools, and scalable web apps.",

  keywords: [
    "Full Stack Developer Projects",
    "Next.js Projects Portfolio",
    "Node.js Backend Projects",
    "Kafka ClickHouse Projects",
    "System Design Projects",
    "Developer Tools Projects",
    "Analytics Engineering Projects",
  ],

  authors: [{ name: "Nikhil Sai", url: SITE_URL }],
  creator: "Nikhil Sai",
  publisher: "Nikhil Sai",

  alternates: {
    canonical: `${SITE_URL}/projects`,
  },

  openGraph: {
    title:
      "Full Stack & Backend Projects – Next.js, Node.js, Kafka | Nikhil Sai",
    description:
      "Real-world projects across web apps, backend systems, analytics platforms, and developer tooling.",
    url: `${SITE_URL}/projects`,
    siteName: "Nikhil Sai Projects",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Nikhil Sai Full Stack Projects",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Full Stack & Backend Projects – Nikhil Sai",
    description:
      "Scalable systems, analytics pipelines, and developer tools built with modern web and data stacks.",
    images: [OG_IMAGE],
    creator: "@nikhilbuildss",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

const page = () => {
  const projects = getAllProjects();

  return (
    <div className="w-full min-h-screen bg-white text-black dark:bg-black dark:text-white px-5">
      <div className="w-full border-2 border-b-0 border-t-0 border-gray-700/10 dark:border-gray-700/40 max-w-4xl mx-auto min-h-screen">
        <NavSection />
        <AnimatedContainer>
          <SectionHeading title="Full Stack & Backend Projects" />
          {projects && projects.length > 0 ? (
            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 px-2">
              {projects.map((project, index) => (
                <ProjectCard key={index} {...project} />
              ))}
            </div>
          ) : (
            <p className="text-center mt-10 text-gray-600 dark:text-gray-300s text-sm">
              No Projects Found!!
            </p>
          )}
        </AnimatedContainer>
        <FooterSection />
      </div>
    </div>
  );
};

export default page;
