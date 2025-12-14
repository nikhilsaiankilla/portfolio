"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

interface AnimatedTooltipProps {
    label: string | React.ReactNode;
    children: React.ReactNode;
    className?: string;
}

const AnimatedTooltip = ({
    label,
    children,
    className,
}: AnimatedTooltipProps) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className="relative inline-flex items-center justify-center"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <AnimatePresence>
                {isHovered && (
                    <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.8 }}
                        animate={{ opacity: 1, y: -35, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.8 }}
                        transition={{
                            duration: 0.2,
                            type: "spring",
                            stiffness: 300,
                            damping: 20,
                        }}
                        className="absolute left-1/2 -translate-x-1/2 bg-gray-900 text-white text-[10px] px-2 py-1 rounded shadow-lg whitespace-nowrap z-50 pointer-events-none"
                    >
                        {typeof label === "string" ? (
                            label.split(" ").map((word, i) => (
                                <span key={i} className="block text-center">
                                    {word}
                                </span>
                            ))
                        ) : (
                            label
                        )}

                        {/* Arrow */}
                        <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 
              border-l-4 border-r-4 border-t-4 
              border-l-transparent border-r-transparent border-t-gray-900"
                        />
                    </motion.div>
                )}
            </AnimatePresence>

            <span
                className={`inline-flex items-center justify-center ${className ?? ""}`}
            >
                {children}
            </span>
        </div>
    );
};

export default AnimatedTooltip;
