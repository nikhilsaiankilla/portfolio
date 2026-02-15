"use client";

import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { ReactNode } from "react";
import { Link } from "next-view-transitions";

// 1. Create a Motion-enabled Link component
const MotionLink = motion.create(Link);

interface AnimatedButtonProps {
  link: string;
  label: string;
  icon?: ReactNode;
  variant?: "primary" | "outline";
  className?: string;
  external?: boolean;
}

const AnimatedButton = ({
  link,
  label,
  icon,
  variant = "primary",
  className = "",
  external = false,
}: AnimatedButtonProps) => {
  const isPrimary = variant === "primary";

  // Tailwind classes based on variant
  const primaryClasses =
    "bg-primary text-white shadow-lg shadow-primary/20 border-transparent";
  const outlineClasses =
    "bg-white dark:bg-black hover:inset-shadow-sm hover:inset-shadow-black/30 dark:hover:inset-shadow-white/20 backdrop-blur-sm border border-black/10 dark:border-white/10 text-black dark:text-white";

  return (
    <MotionLink
      href={link}
      // Entrance Animation
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 }}
      target={external ? "_blank" : "_self"}
      // Interaction Animations
      whileHover="hover"
      whileTap={{ scale: 0.95 }}
      className={`
                group relative inline-flex items-center justify-center gap-2 
                rounded-sm font-medium overflow-hidden transition-colors w-fit px-8 py-2
                ${isPrimary ? primaryClasses : outlineClasses}
                ${className}
            `}
    >
      {/* Button Text */}
      <span className="relative z-10 text-sm font-normal">{label}</span>

      {/* Animated Arrow (Common for both) */}
      <motion.span
        variants={{
          hover: { x: 5 },
        }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
        className="relative z-10"
      >
        {icon ? icon : <ArrowRight className="w-4 h-4" />}
      </motion.span>

      {/* --- PRIMARY VARIANT EFFECTS ONLY --- */}
      {isPrimary && (
        <>
          {/* Glow Effect */}
          <motion.div
            variants={{
              hover: { opacity: 0.4, scale: 1.5 },
            }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 rounded-full bg-primary blur-xl opacity-0 -z-10"
          />

          {/* Shine sweep effect */}
          <motion.div
            variants={{
              hover: { left: "100%" },
            }}
            initial={{ left: "-100%" }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="absolute top-0 bottom-0 w-1/2 bg-linear-to-r from-transparent via-white/20 to-transparent -skew-x-12 z-0"
          />
        </>
      )}
    </MotionLink>
  );
};

export default AnimatedButton;
