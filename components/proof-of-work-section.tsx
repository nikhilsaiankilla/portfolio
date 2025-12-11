"use client"

import AnimatedContainer from './animated-container';
import SectionHeading from './section-heading';
import ProjectCard from './project-card';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import AnimatedButton from './animated-btn';

const projects = [
  {
    title: "Dumcel Cloud",
    description: "A Vercel-like deployment platform for React apps. Built with a microservices architecture using AWS ECS, Docker, Redis, and Kafka to handle builds and reverse proxying.",
    tags: [
      { name: "Next.js", src: "/Next.js.svg" },
      { name: "AWS ECS", src: "/AWS.svg" },
      { name: "Docker", src: "/Docker.svg" },
      { name: "Redis", src: "/Redis.svg" },
      { name: "Kafka", src: "/Kafka.svg" }
    ],
    link: "https://github.com/yourusername/dumcel",
    image: "/dumcel-preview.png",
    status: "Open Source"
  },
  {
    title: "Visly Analytics",
    description: "A privacy-first web analytics platform. Features real-time dashboards and lightweight tracking using ClickHouse for high-speed data ingestion.",
    tags: [
      { name: "TypeScript", src: "/TypeScript.svg" },
      { name: "Next.js", src: "/Next.js.svg" },
      { name: "ClickHouse", src: "/ClickHouse.svg" },
      { name: "Tailwind", src: "/Tailwind.svg" }
    ],
    link: "https://github.com/yourusername/visly",
    image: "https://dikshit.tech/img/code6.jpg",
    status: "Building"
  },
  {
    title: "Job Nextly",
    description: "AI-powered job application tracker. Integrates with the Gemini API to analyze job descriptions and manage application statuses effectively.",
    tags: [
      { name: "React", src: "/React.svg" },
      { name: "Firebase", src: "/Firebase.svg" },
      { name: "Gemini API", src: "/Gemini.svg" }
    ],
    link: "https://github.com/yourusername/job-nextly",
    image: "/job-nextly-preview.png",
    status: "Completed"
  },
  {
    title: "Comic Portfolio",
    description: "This very website! A unique developer portfolio designed with a comic book theme, featuring heavy use of Framer Motion for micro-interactions.",
    tags: [
      { name: "Framer Motion", src: "/Framer.svg" },
      { name: "React", src: "/React.svg" },
      { name: "Tailwind CSS", src: "/Tailwind.svg" }
    ],
    link: "https://github.com/yourusername/portfolio",
    image: "/portfolio-preview.png",
    status: "Live"
  }
];

const ProofOfWorkSection = () => {
  return (
    <AnimatedContainer>
      <SectionHeading title='Proof of work!' />

      {/* Grid Container */}
      <div className='w-full grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 px-2'>
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
      <div className='w-full mt-10 flex items-center justify-center'>
        <AnimatedButton link='/projects' label='View All Projects'/>
      </div>
    </AnimatedContainer>
  );
};

export default ProofOfWorkSection;