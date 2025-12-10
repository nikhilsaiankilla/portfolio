"use client";

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

// 1. Create a Motion-enabled Link component
const MotionLink = motion(Link);

const AnimatedButton = ({ link, label }: { link: string, label: string }) => {
    return (
        <MotionLink
            href={link}
            // Entrance Animation
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}

            // Interaction Animations
            whileHover="hover"
            whileTap={{ scale: 0.95 }}

            className='group relative inline-flex items-center justify-center gap-2 px-8 py-2.5 bg-cyan-500 text-white rounded-sm font-medium overflow-hidden'
        >
            {/* Button Text */}
            <span className='relative z-10 text-sm font-normal'>{label}</span>

            {/* Animated Arrow */}
            <motion.span
                variants={{
                    hover: { x: 5 }
                }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                className="relative z-10"
            >
                <ArrowRight className='w-4 h-4' />
            </motion.span>

            {/* Glow Effect (Framer Controlled) */}
            <motion.div
                variants={{
                    hover: { opacity: 0.4, scale: 1.5 }
                }}
                transition={{ duration: 0.3 }}
                className='absolute inset-0 rounded-full bg-cyan-500 blur-xl opacity-0 -z-10'
            />

            {/* Optional: Shine sweep effect */}
            <motion.div
                variants={{
                    hover: { left: "100%" }
                }}
                initial={{ left: "-100%" }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="absolute top-0 bottom-0 w-1/2 bg-linear-to-r from-transparent via-white/20 to-transparent -skew-x-12 z-0"
            />

        </MotionLink>
    );
};

export default AnimatedButton;