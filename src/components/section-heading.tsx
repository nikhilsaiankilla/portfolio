"use client";

import { motion, Variants } from "framer-motion";
import { cn } from "../lib/utils";

const SectionHeading = ({
    title,
    className,
}: {
    title: string;
    className?: string;
}) => {
    const itemVariants: Variants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { type: "spring", stiffness: 100 },
        },
    };

    return (
        <motion.h2
            variants={itemVariants}
            className={cn(
                "text-2xl font-bold text-black dark:text-white mb-8 font-heading",
                className
            )}
        >
            {title}
        </motion.h2>
    );
};

export default SectionHeading;
