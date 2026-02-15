"use client";

import { Variants } from "motion";
import React, { ReactNode } from "react";
import { motion } from "framer-motion";

const AnimatedContainer = ({ children }: { children: ReactNode }) => {
  // 2. Add ': Variants' type annotation here
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
      className="w-full border-b border-gray-200 dark:border-gray-800 py-10 px-2 md:px-10"
    >
      {children}
    </motion.section>
  );
};

export default AnimatedContainer;
