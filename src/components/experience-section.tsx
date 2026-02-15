"use client";

import { ChevronRight, Globe } from "lucide-react";
import { Badge } from "./ui/badge";
import { motion, Variants } from "framer-motion";
import AnimatedContainer from "./animated-container";
import SectionHeading from "./section-heading";

const experiences = [
  {
    id: 1,
    company: "Freelancer",
    role: "Software Engineer",
    type: "Part Time",
    date: "Jan 2025 - Jun 2025",
    description:
      "As a Software Engineer, working on full-stack development across web and mobile platforms. Building scalable applications with modern frameworks and cloud infrastructure.",
    logo: "Globe2",
    current: false,
    logoFallback: <Globe size={20} />,
  },
];

const ExperienceSection = () => {
  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 }, // Now TypeScript knows 'spring' is valid
    },
  };

  return (
    <AnimatedContainer>
      <SectionHeading title="Work Experience!" />

      {/* Experience List */}
      <div className="space-y-8">
        {experiences.map((exp) => (
          <motion.div
            key={exp.id}
            variants={itemVariants}
            className="group flex gap-4 md:gap-6 items-start p-3 -mx-3"
          >
            {/* Logo Column */}
            <div className="shrink-0 mt-1">
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="w-12 h-12 rounded-xl bg-black dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 flex items-center justify-center text-white overflow-hidden shadow-sm transition-transform"
              >
                {exp.logoFallback}
              </motion.div>
            </div>

            {/* Content Column */}
            <div className="flex-1 space-y-1">
              {/* Header Row: Company | Badge | Date */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-1 md:gap-0">
                <div className="flex items-center flex-wrap gap-2">
                  <h3 className="text-lg font-bold text-primary">
                    {exp.company}
                  </h3>

                  {/* Type Badge */}
                  <Badge className="px-2.5 py-0.5 rounded-full bg-gray-100 dark:bg-zinc-800 text-gray-600 dark:text-gray-400 font-medium border border-gray-200 dark:border-zinc-700 italic text-[10px]">
                    {exp.type}
                  </Badge>

                  {/* Active Green Dot */}
                  {exp.current && (
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                    </span>
                  )}

                  {/* Chevron Icon */}
                  <ChevronRight className="text-primary w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 ease-out" />
                </div>

                {/* Date */}
                <span className="text-sm font-medium text-gray-500 dark:text-gray-400 tabular-nums">
                  {exp.date}
                </span>
              </div>

              {/* Description */}
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed max-w-3xl group-hover:text-gray-900 dark:group-hover:text-gray-200 transition-colors">
                {exp.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </AnimatedContainer>
  );
};

export default ExperienceSection;
