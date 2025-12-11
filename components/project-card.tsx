"use client";

import { AnimatePresence, motion, Variants } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight, GithubIcon, Globe } from 'lucide-react';
import TooltipImage from './tooltip-image';
import { useState } from 'react';

interface ProjectProps {
    title: string;
    description: string;
    tags: { src: string; name: string }[];
    link: string;
    github: string;
    image: string;
    status: string;
    index?: number;
    id: string;
}

const cardVariants: Variants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: (index: number) => ({
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            delay: index * 0.1,
            duration: 0.5,
            ease: "easeOut"
        }
    })
};

const ProjectCard = ({ title, description, tags, link, image, status, github, index = 0, id }: ProjectProps) => {

    const [isGitHovered, setIsGitHovered] = useState<boolean>(false)
    const [isDemoHovered, setIsDemoHovered] = useState<boolean>(false)

    return (
        <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            custom={index}
            className='group flex flex-col w-full rounded-sm overflow-hidden bg-gray-400/10 dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 shadow-sm hover:shadow-lg transition-all duration-300'
        >
            {/* 1. TOP GRID: Square Image Area */}
            <div className="relative w-full aspect-square overflow-hidden bg-gray-200 dark:bg-zinc-800 border-b border-gray-200 dark:border-zinc-800">
                {/* Image */}
                <Image
                    src={image || 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuOUQUHO2HJahEVTn1NBsXX9bSQXHvHMN0aw&s'}
                    alt={title}
                    width={100}
                    height={100}
                    unoptimized
                    className="w-full aspect-square"
                />

                {/* Status Badge (Top Right) */}
                <div className='absolute top-3 right-3 z-10'>
                    <span className='px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider border border-white/20 bg-black/60 backdrop-blur-md text-white shadow-sm'>
                        {status}
                    </span>
                </div>
            </div>

            {/* 2. BOTTOM GRID: Content Area */}
            <div className='flex flex-col p-5 space-y-4'>

                {/* Title & Description */}
                <div className='space-y-2'>
                    <div className='flex items-center justify-between'>
                        <h3 className='text-xl md:text-2xl font-bold font-heading text-black dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors'>
                            {title}
                        </h3>
                        <div className='flex items-center gap-6'>
                            <div
                                className='relative inline-flex items-center justify-center'
                                onMouseEnter={() => setIsDemoHovered(true)}
                                onMouseLeave={() => setIsDemoHovered(false)}
                            >
                                <AnimatePresence>
                                    {isDemoHovered && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 10, scale: 0.8 }}
                                            animate={{ opacity: 1, y: -35, scale: 1 }}
                                            exit={{ opacity: 0, y: 10, scale: 0.8 }}
                                            transition={{ duration: 0.2, type: "spring", stiffness: 300 }}
                                            className="absolute left-1/2 -translate-x-1/2 bg-white dark:bg-gray-600 text-black dark:text-white text-[10px] px-2 py-1.5 rounded shadow-lg whitespace-nowrap z-50 pointer-events-none"
                                        >
                                            View Website
                                            {/* Little triangle arrow pointing down */}
                                            <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-gray-900"></div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                                <Link href={link} target="_blank" className=''>
                                    <Globe size={20} />
                                </Link>
                            </div>
                            <div
                                className='relative inline-flex items-center justify-center'
                                onMouseEnter={() => setIsGitHovered(true)}
                                onMouseLeave={() => setIsGitHovered(false)}
                            >
                                <AnimatePresence>
                                    {isGitHovered && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 10, scale: 0.8 }}
                                            animate={{ opacity: 1, y: -35, scale: 1 }}
                                            exit={{ opacity: 0, y: 10, scale: 0.8 }}
                                            transition={{ duration: 0.2, type: "spring", stiffness: 300 }}
                                            className="absolute left-1/2 -translate-x-1/2 bg-white dark:bg-gray-600 text-black dark:text-white text-[10px] px-2 py-1.5 rounded shadow-lg whitespace-nowrap z-50 pointer-events-none"
                                        >
                                            View Github
                                            {/* Little triangle arrow pointing down */}
                                            <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-gray-900"></div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                                <Link href={github} target="_blank" className=''>
                                    <GithubIcon size={20} />
                                </Link>
                            </div>
                        </div>
                    </div>
                    <p className='text-sm text-gray-600 dark:text-gray-400 line-clamp-2 leading-relaxed'>
                        {description}
                    </p>
                </div>

                {/* Tech Stack */}
                <div className='flex flex-wrap gap-2'>
                    {tags && tags.length > 0 && tags?.slice(0, 5).map((tag, i) => (
                        <TooltipImage key={i} src={tag?.src} name={tag?.name} isBg />
                    ))}
                    {tags?.length > 5 && (
                        <span className="text-xs text-gray-400 flex items-center px-1">+{tags.length - 5}</span>
                    )}
                </div>
                <div className='w-full group'>
                    <Link
                        href={`/projects/${id}`}
                        className='flex items-center gap-2 text-gray-500 dark:text-gray-300 text-sm ml-auto w-fit hover:underline'
                    >
                        View Details <ArrowRight size={16} />
                    </Link>
                </div>
            </div>

        </motion.div>
    );
};

export default ProjectCard;