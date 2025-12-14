"use client"

import Image from 'next/image';
import { motion, Variants } from 'framer-motion';
import { Badge } from '@/src/components/ui/badge';
import TooltipImage from './animated-tooltip';
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
                    <Badge className='text-green-500 bg-green-600/20 border border-green-500 flex items-center gap-2 px-3 py-1 text-[10px]'>
                        {/* Pulsing Green Dot */}
                        <motion.span
                            animate={{ opacity: [1, 0.4, 1] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                            className='h-2 w-2 rounded-full bg-green-500'
                        />
                        Available to Work!
                    </Badge>
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


function Bio() {
    return (
        <p className='leading-relaxed text-gray-800 dark:text-gray-300'>
            I'm a <span className='font-semibold text-cyan-500'>Full Stack Developer</span> from India who turns coffee into clean, consumer-facing apps. My main weapons are

            {/* Container for the icons */}
            <span className='inline-flex items-center justify-center flex-wrap gap-2 mx-1 align-middle'>
                {techStack.map((tech, index) => (
                    <AnimatedTooltip label={tech.name} key={index}>
                        <Image
                            src={tech.src}
                            width={25}
                            height={25}
                            className='p-1 rounded-sm bg-white shadow-2xl hover:rotate-6 transition-all duration-100 ease-in'
                            alt={tech.name}
                        />
                    </AnimatedTooltip>
                ))}
            </span>

            Next.js, Docker, and AWS, but you can <Link href="#tech-stack" className='text-cyan-500 hover:underline'>check out my full inventory here</Link>. I thrive in chaotic, fast-moving startups where "shipping" is the love language. Yes, even on Sundays.
        </p>
    );
}