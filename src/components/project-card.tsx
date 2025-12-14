"use client";

import { AnimatePresence, motion, Variants } from 'framer-motion';
import Image from 'next/image';
import { ArrowRight, GithubIcon, Globe } from 'lucide-react';
import { Link } from 'next-view-transitions';
import { Badge } from './ui/badge';
import { useState } from 'react';
import AnimatedTooltip from './animated-tooltip';

interface ProjectProps {
    slug: string;
    title: string;
    description: string;
    image: string;
    technologies: string[];
    github: string;
    live: string;
    timeline: string;
    role: string;
    team: string;
    status: string;
    featured: boolean;
    challenges: string[];
    learnings: string[];
    isPublished: boolean;
    publishedOn: string;

    index?: number;
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

const ProjectCard = ({ title, description, technologies, live, image, status, github, index = 0, slug }: ProjectProps) => {

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
            <div className="relative w-full aspect-video overflow-hidden bg-gray-200 dark:bg-zinc-800 border-b border-gray-200 dark:border-zinc-800">
                {/* Image */}
                <div className="relative aspect-video overflow-hidden rounded-sm">
                    <Image
                        src={image || 'https://placehold.co/600x400'}
                        alt={title || 'Project Thumbnail'}
                        fill
                        unoptimized
                        className="object-cover"
                        priority
                    />
                </div>
                
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
                            <AnimatedTooltip label={'View Website'}>
                                {
                                    live && <Link href={live} target="_blank" className=''>
                                        <Globe size={20} />
                                    </Link>
                                }
                            </AnimatedTooltip>
                            <AnimatedTooltip label={'View Github'}>
                                {
                                    github && <Link href={github} target="_blank" className=''>
                                        <GithubIcon size={20} />
                                    </Link>
                                }
                            </AnimatedTooltip>
                        </div>
                    </div>
                    <p className='text-sm text-gray-600 dark:text-gray-400 line-clamp-2 leading-relaxed'>
                        {description}
                    </p>
                </div>

                {/* Tech Stack */}
                <div className='flex flex-wrap gap-1'>
                    {
                        status && <Badge className='dark:bg-[#0A0A0A] dark:text-white border border-dashed border-gray-600/70 text-black bg-gray-300 text-[10px] shadow-2xl shadow-black px-2 rounded-sm'>{status}</Badge>
                    }
                    {technologies && technologies.length > 0 && technologies?.slice(0, 2).map((tag, i) => (
                        <Badge className='dark:bg-[#0A0A0A] dark:text-white border border-dashed border-gray-600/70 text-black bg-gray-300 text-[10px] shadow-2xl shadow-black px-2 rounded-sm'>{tag}</Badge>
                    ))}
                    {technologies?.length > 2 && (
                        <span className="text-xs text-gray-400 flex items-center px-1">+{technologies.length - 2}</span>
                    )}
                </div>
                <div className='w-full group'>
                    <Link
                        href={`/projects/${slug}`}
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