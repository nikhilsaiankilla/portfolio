"use client"

import Image from 'next/image';
import { motion, Variants } from 'framer-motion';
import { Badge } from '@/src/components/ui/badge';
import { Paperclip, Send } from 'lucide-react';
import AnimatedButton from './animated-btn';
import { Link } from 'next-view-transitions';
import AnimatedTooltip from './animated-tooltip';

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
            className="w-full border-t-2 border-b-2 border-gray-700/10 dark:border-gray-700/40 py-10 flex items-center justify-between px-5 md:px-10 overflow-hidden flex-col-reverse md:flex-row"
        >
            <div className="w-full md:w-3/5 space-y-4 mt-10 md:mt-0">

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

                <motion.div variants={itemVariants} className='w-full flex items-center justify-start flex-wrap gap-3 mt-4'>
                    <AnimatedButton
                        label='Resume / CV'
                        link='/resume'
                        icon={<Paperclip className='w-4 h-4' />}
                        variant='outline'
                        className='w-full md:w-fit'
                    />
                    <AnimatedButton
                        label='Get In Touch'
                        link='#contact'
                        className='w-full md:w-fit'
                        icon={<Send className='w-4 h-4' />}
                    />
                </motion.div>
            </div>

            {/* Right Image Section */}
            <motion.div
                variants={itemVariants}
                className="w-full md:w-2/5 flex items-center justify-center flex-col gap-8"
            >
                <motion.div
                    whileHover={{ scale: 1.05, rotate: 3 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.4 }}
                    className="relative"
                >
                    <div className="absolute -inset-1 bg-linear-to-r from-cyan-400 to-blue-500 rounded-sm blur opacity-30 animate-pulse"></div>
                    <Image
                        src={`/nikhil.jpeg`}
                        alt='Nikhil sai Avatar'
                        width={160}
                        height={160}
                        unoptimized
                        title='Yes this my Orginal Image!!'
                        className='relative w-40 h-40 md:w-48 md:h-48 rounded-sm shadow-2xl border-4 border-white dark:border-gray-800 object-cover cursor-pointer z-10'
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
                                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeOut" }}
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

// 1. Define the Data for your icons
const techStack = [
    { name: 'Next.js', src: '/skills/nextjs.png' },
    { name: 'AWS', src: '/skills/aws.png' },
    { name: 'Docker', src: '/skills/docker.png' },
    { name: 'Node.js', src: '/skills/nodejs.png' },
];


function Bio() {
    return (
        <p className="leading-relaxed text-gray-800 dark:text-gray-300">
            I’m a <span className="font-semibold text-cyan-500">Full Stack Developer</span> focused on building
            real-world products from consumer-facing web apps to backend systems and developer tools.
            I care about clean architecture, performance, and shipping things that actually get used.
            I mostly work with <span className="inline-flex items-center justify-center flex-wrap gap-2 mx-1 align-middle">
                {techStack.map((tech, index) => (
                    <AnimatedTooltip label={tech.name} key={index}>
                        <Image
                            src={tech.src}
                            width={25}
                            height={25}
                            className="p-1 rounded-sm bg-white shadow-2xl hover:rotate-6 transition-all duration-100 ease-in"
                            alt={tech.name}
                        />
                    </AnimatedTooltip>
                ))}
            </span> but the stack is just a tool.
            What matters is designing systems that scale, break gracefully, and ship fast.
            You can <Link href="#tech-stack" className="text-cyan-500 hover:underline">see the full stack here</Link>.
        </p>

    );
}