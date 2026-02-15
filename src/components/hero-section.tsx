"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { Badge } from "@/src/components/ui/badge";
import { Paperclip, Send } from "lucide-react";
import AnimatedButton from "./animated-btn";
import { Link } from "next-view-transitions";
import AnimatedTooltip from "./animated-tooltip";

const HeroSection = () => {
  // Add ': Variants' type annotation here
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  // And here
  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 120 },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="w-full border-t-2 border-b-2 border-gray-700/10 dark:border-gray-700/40 py-10 flex items-center justify-between px-5 md:px-10 overflow-hidden flex-col-reverse md:flex-row"
    >
      <div className="w-full md:w-3/5 space-y-4 mt-10 md:mt-0">
        {/* Animated Name */}
        <motion.h1
          variants={itemVariants}
          className="text-3xl md:text-5xl font-bold text-black dark:text-white font-heading tracking-tight"
        >
          Hi, I'm{" "}
          <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-primary/90">
            Nikhil Sai
          </span>
        </motion.h1>

        {/* Animated Bio */}
        <motion.div variants={itemVariants}>
          <Bio />
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="w-full flex items-center justify-start flex-wrap gap-3 mt-4"
        >
          <AnimatedButton
            label="Resume / CV"
            link="/resume"
            icon={<Paperclip className="w-4 h-4" />}
            variant="outline"
            className="w-full md:w-fit"
          />
          <AnimatedButton
            label="Get In Touch"
            link="#contact"
            className="w-full md:w-fit"
            icon={<Send className="w-4 h-4" />}
          />
        </motion.div>
      </div>

      {/* Right Image Section */}
      <motion.div
        variants={itemVariants}
        className="w-full md:w-2/5 flex items-center justify-center flex-col gap-8"
      >
        <motion.div
          whileTap={{ scale: 0.95 }}
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 15,
            delay: 0.4,
          }}
          className="relative"
        >
          <Image
            src={`/nikhil.jpeg`}
            alt="Nikhil sai Avatar"
            width={160}
            height={160}
            unoptimized
            title="Yes this my Orginal Image!!"
            className="relative w-40 h-40 md:w-48 md:h-48 rounded-full shadow-2xl object-cover cursor-pointer z-10"
          />
        </motion.div>
        <motion.div variants={itemVariants} className="w-fit">
          <Badge className="relative overflow-hidden rounded-full bg-emerald-500/15 border-emerald-500/20 px-3 py-1 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-500/25 transition-colors">
            <div className="flex items-center gap-2">
              {/* The Dot Container */}
              <div className="relative flex h-2 w-2 items-center justify-center">
                {/* The Ping Animation (Ring) */}
                <motion.span
                  animate={{ scale: [1, 2], opacity: [0.8, 0] }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeOut",
                  }}
                  className="absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"
                />
                {/* The Static Dot */}
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </div>

              <span className="text-[10px] font-semibold uppercase tracking-wide">
                Available to Work
              </span>
            </div>
          </Badge>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default HeroSection;

function Bio() {
  return (
    <div className="w-full space-y-4">
      <p className="leading-relaxed text-gray-700 dark:text-gray-400 text-sm sm:text-lg">
        I’m a{" "}
        <span className="font-semibold text-primary">Full Stack Developer</span>{" "}
        making stuff, breaking stuff, and learning stuff while building
        real-world products.
      </p>
      <p className="leading-relaxed text-gray-700 dark:text-gray-400 text-sm sm:text-lg">
        I focus on clean architecture and performance, designing systems that
        scale, break gracefully, and ship fast.
      </p>
    </div>
  );
}
