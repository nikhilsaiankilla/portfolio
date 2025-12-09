"use client"

import Image from 'next/image';
import { AnimatePresence, motion, Variants } from 'framer-motion'; // <--- Import Variants
import { Badge } from '@/components/ui/badge';
import { useState } from 'react';
import Link from 'next/link';

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
            transition: { type: 'spring', stiffness: 120 },
        },
    };

    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="w-full border-t-2 border-b-2 border-gray-700/10 dark:border-gray-700/40 py-10 flex flex-col md:flex-row items-center justify-between px-5 md:px-10 overflow-hidden"
        >
            {/* ... rest of your JSX remains exactly the same ... */}
            <div className="w-full md:w-3/5 space-y-4">

                {/* Animated Badge */}
                <motion.div variants={itemVariants} className="w-fit">
                    <Badge className='text-green-700 bg-green-600/20 border border-green-700 flex items-center gap-2 px-3 py-1 text-[10px]'>
                        {/* Pulsing Green Dot */}
                        <motion.span
                            animate={{ opacity: [1, 0.4, 1] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                            className='h-2 w-2 rounded-full bg-green-900'
                        />
                        Available to Work!
                    </Badge>
                </motion.div>
        
                {/* Animated Name */}
                <motion.h1
                    variants={itemVariants}
                    className='text-3xl md:text-5xl font-bold text-black dark:text-white font-heading tracking-tight'
                >
                    Hi, I'm <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-500 to-blue-600">Nikhil Sai</span>
                </motion.h1>

                {/* Animated Bio */}
                <motion.div variants={itemVariants}>
                    <Bio />
                </motion.div>
            </div>

            {/* Right Image Section */}
            <motion.div
                variants={itemVariants}
                className="w-full md:w-2/5 flex items-center justify-center mt-8 md:mt-0"
            >
                <motion.div
                    whileHover={{ scale: 1.05, rotate: 3 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.4 }}
                    className="relative"
                >
                    <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full blur opacity-30 animate-pulse"></div>
                    <Image
                        src={'https://avatar.iran.liara.run/public/12'}
                        alt='Nikhil sai Avatar'
                        width={160}
                        height={160}
                        unoptimized
                        title='Yes this my Orginal Image!!'
                        className='relative w-40 h-40 md:w-48 md:h-48 rounded-full shadow-2xl border-4 border-white dark:border-gray-800 object-cover cursor-pointer z-10'
                    />
                </motion.div>
            </motion.div>
        </motion.div>
    );
};

export default HeroSection;

// 1. Define the Data for your icons
const techStack = [
    { name: 'Next.js', src: '/Next.js.svg' },
    { name: 'AWS', src: '/AWS.svg' },
    { name: 'Docker', src: '/Docker.svg' },
    { name: 'Node.js', src: '/Node.js.svg' },
];

// 2. Create a reusable component for the Icon + Tooltip
const TechBadge = ({ name, src }: { name: string, src: string }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className='relative inline-flex items-center justify-center'
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* The Tooltip */}
            <AnimatePresence>
                {isHovered && (
                    <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.8 }}
                        animate={{ opacity: 1, y: -35, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.8 }}
                        transition={{ duration: 0.2, type: "spring", stiffness: 300 }}
                        className="absolute left-1/2 -translate-x-1/2 bg-gray-900 text-white text-[10px] px-2 py-1 rounded shadow-lg whitespace-nowrap z-50 pointer-events-none"
                    >
                        {name}
                        {/* Little triangle arrow pointing down */}
                        <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-gray-900"></div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* The Icon */}
            <span className='p-1 bg-white w-fit h-fit rounded-full shadow-sm cursor-pointer hover:bg-gray-50 transition-colors'>
                <Image
                    src={src}
                    alt={`${name} Icon`}
                    width={20}
                    height={20}
                    unoptimized
                />
            </span>
        </div>
    );
};

function Bio() {
    return (
        <p className='leading-relaxed text-gray-800 dark:text-gray-300'>
            I'm a <span className='font-semibold text-cyan-500'>Software Developer Engineer!</span> from India who turns coffee into clean, consumer-facing apps. My main weapons are

            {/* Container for the icons */}
            <span className='inline-flex items-center justify-center flex-wrap gap-2 mx-1 align-middle'>
                {techStack.map((tech) => (
                    <TechBadge key={tech.name} name={tech.name} src={tech.src} />
                ))}
            </span>

            Next.js, Docker, and AWS, but you can <Link href="#tech-stack" className='text-cyan-500 hover:underline'>check out my full inventory here</Link>. I thrive in chaotic, fast-moving startups where "shipping" is the love language. Yes, even on Sundays.
        </p>
    );
}