"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";
import { ArrowRight, GithubIcon, Globe } from "lucide-react";
import { Link } from "next-view-transitions";
import { Badge } from "./ui/badge";
import AnimatedTooltip from "./animated-tooltip";

interface ProjectProps {
  slug: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  github?: string;
  live?: string;
  status: string;

  // timeline: string;
  // role: string;
  // team: string;

  // featured: boolean;
  // challenges: string[];
  // learnings: string[];
  // isPublished: boolean;
  // publishedOn: string;

  index?: number;
}

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: index * 0.1,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

const ProjectCard = ({
  title,
  description,
  technologies,
  live,
  image,
  status,
  github,
  index = 0,
  slug,
}: ProjectProps) => {
  const config = getStatusConfig(status);

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      custom={index}
      className="group flex flex-col w-full rounded-sm overflow-hidden bg-gray-400/10 dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 shadow-sm hover:shadow-lg transition-all duration-300"
    >
      {/* 1. TOP GRID: Square Image Area */}
      <div className="relative w-full aspect-video overflow-hidden bg-gray-200 dark:bg-zinc-800 border-b border-gray-200 dark:border-zinc-800">
        {/* Image */}
        <div className="relative aspect-video overflow-hidden rounded-sm">
          <Image
            src={image || "https://placehold.co/600x400"}
            alt={title || "Project Thumbnail"}
            fill
            unoptimized
            className="object-cover"
            priority
          />
        </div>

        {/* Status Badge (Top Right) */}
        <div className="absolute top-3 right-3 z-10">
          <div
            className={`
            flex items-center gap-2 px-2.5 py-1 rounded-full 
            border backdrop-blur-md shadow-sm
            transition-colors duration-300
            ${config.container}
        `}
          >
            {/* Status Dot */}
            <span className="relative flex h-1.5 w-1.5">
              {config.pulse && (
                <span
                  className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${config.dot}`}
                ></span>
              )}
              <span
                className={`relative inline-flex rounded-full h-1.5 w-1.5 ${config.dot}`}
              ></span>
            </span>

            {/* Status Text */}
            <span className="text-[10px] font-bold uppercase tracking-wider leading-none pb-px">
              {status}
            </span>
          </div>
        </div>
      </div>

      {/* 2. BOTTOM GRID: Content Area */}
      <div className="flex flex-col p-5 space-y-4">
        {/* Title & Description */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <h3 className="text-xl md:text-2xl font-bold font-heading text-black dark:text-white group-hover:text-primary dark:group-hover:text-primary transition-colors">
              {title}
            </h3>
            <div className="flex items-center gap-6">
              <AnimatedTooltip label={"View Website"}>
                {live && (
                  <Link href={live} target="_blank" className="">
                    <Globe size={20} className="hover:text-primary" />
                  </Link>
                )}
              </AnimatedTooltip>
              <AnimatedTooltip label={"View Github"}>
                {github && (
                  <Link href={github} target="_blank" className="">
                    <GithubIcon size={20} className="hover:text-primary" />
                  </Link>
                )}
              </AnimatedTooltip>
            </div>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2 leading-relaxed">
            {description}
          </p>
        </div>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-1">
          {technologies &&
            technologies.length > 0 &&
            technologies?.slice(0, 3).map((tag, i) => (
              <Badge
                key={i}
                className="dark:bg-[#0A0A0A] dark:text-white border border-dashed border-gray-600/70 text-black bg-gray-300 text-[10px] shadow-2xl shadow-black px-2 rounded-sm"
              >
                {tag}
              </Badge>
            ))}
          {technologies?.length > 3 && (
            <span className="text-xs text-gray-400 flex items-center px-1">
              +{technologies.length - 3}
            </span>
          )}
        </div>
        <div className="w-full group">
          <Link
            href={`/projects/${slug}`}
            className="flex items-center gap-2 text-gray-500 dark:text-gray-300 text-sm ml-auto w-fit group"
          >
            <p className="group-hover:text-primary">View Details</p>{" "}
            <ArrowRight size={16} className="group-hover:text-primary" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;

const getStatusConfig = (status: string) => {
  // Normalize to lowercase to handle any capitalization variations
  const s = status.toLowerCase();

  if (s === "completed") {
    return {
      container: "bg-emerald-500/20 border-emerald-500/30 text-emerald-100",
      dot: "bg-emerald-400",
      pulse: false,
    };
  }
  if (s === "building") {
    return {
      container: "bg-amber-500/20 border-amber-500/30 text-amber-100",
      dot: "bg-amber-400",
      pulse: true, // Animates the dot for active work
    };
  }
  if (s === "open source") {
    return {
      container: "bg-blue-500/20 border-blue-500/30 text-blue-100",
      dot: "bg-blue-400",
      pulse: false,
    };
  }
  if (s === "not started") {
    return {
      container: "bg-zinc-800/60 border-zinc-700/50 text-zinc-300",
      dot: "bg-zinc-500",
      pulse: false,
    };
  }
  // Default Fallback
  return {
    container: "bg-white/10 border-white/20 text-white",
    dot: "bg-white",
    pulse: false,
  };
};
