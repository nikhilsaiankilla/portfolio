"use client";

import { AnimatePresence, motion, Variants } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

interface TooltipImageProps {
  name: string;
  src: string;
  index?: number;
  id: string;
  isEdit?: boolean;
}

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20, scale: 0.8 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 25,
      mass: 0.5,
      delay: 0.1,
    },
  },
};

const SkillCard = ({ name, src, id, isEdit = false }: TooltipImageProps) => {
  const [isDragging, setIsDragging] = useState<boolean>(false);

  // --- 1. The Card Content (Shared UI) ---
  const CardContent = (
    <motion.div
      // 1. Enable variants
      variants={cardVariants}
      // 2. Add viewport triggers directly here
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      drag={!isEdit}
      onDragStart={() => setIsDragging(true)}
      onDragEnd={() => setIsDragging(false)}
      dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
      dragElastic={0.2}
      whileDrag={{
        scale: 1.1,
        zIndex: 50,
        cursor: "grabbing",
        boxShadow: "0px 15px 30px rgba(0,0,0,0.2)",
      }}
      whileHover={{
        y: -5,
        scale: 1.05,
        boxShadow: "0px 10px 20px rgba(0,0,0,0.1)",
        zIndex: 10,
      }}
      whileTap={{ scale: 0.95, cursor: isEdit ? "pointer" : "grabbing" }}
      className={`
                p-1 w-fit h-fit rounded-lg 
                flex items-center gap-2 border border-dashed 
                border-gray-600 dark:border-zinc-700 px-4 
                bg-gray-500/10 dark:hover:bg-zinc-900 
                transition-colors duration-200 dark:bg-gray-500/20
                relative cursor-grab active:cursor-grabbing
                ${isEdit ? "cursor-pointer hover:border-primary hover:bg-primary/10" : "cursor-grab active:cursor-grabbing"}
            `}
    >
      <AnimatePresence>
        {isDragging && !isEdit && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.8 }}
            animate={{ opacity: 1, y: -45, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.8 }}
            transition={{ duration: 0.2, type: "spring", stiffness: 300 }}
            className="absolute left-1/2 -translate-x-1/2 -top-2 bg-amber-500 text-white text-[10px] font-bold px-2 py-1 rounded shadow-lg whitespace-nowrap z-50 pointer-events-none"
          >
            <span className="text-center block leading-tight">
              Put me back!! there <br /> You Stranger!
            </span>
            <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-amber-500"></div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative flex items-center justify-center pointer-events-none">
        <Image
          src={src}
          alt={`${name} Icon`}
          width={20}
          height={20}
          unoptimized
          className="drop-shadow-sm"
        />
      </div>

      <span className="text-xs font-medium text-gray-700 dark:text-gray-300 pointer-events-none">
        {name}
      </span>
    </motion.div>
  );

  return (
    <div className="relative inline-flex items-center justify-center">
      {CardContent}
    </div>
  );
};

export default SkillCard;
