"use client";

import { ArrowUpRight, GithubIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import TooltipImage from './tooltip-image';
import { motion, Variants } from 'framer-motion';

interface ProjectProps {
    title: string;
    description: string;
    tags: { src: string; name: string }[];
    link: string;
    image: string;
    status: string;
    index?: number; // Added index for staggered delay calculation
}

// 1. Define Animation Variants
const cardVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: (index: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: index * 0.1, // Stagger effect based on index
            duration: 0.5,
            ease: "easeOut"
        }
    })
};

const ProjectCard = ({ title, description, tags, link, image, status, index = 0 }: ProjectProps) => {
    return (
        <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            custom={index}
            whileHover={{ y: -5, transition: { duration: 0.2 } }} // Micro-lift on hover
            className='group relative h-[450px] w-full overflow-hidden rounded-sm bg-gray-100 dark:bg-zinc-900 shadow-sm hover:shadow-2xl transition-all duration-500'
        >
            {/* 1. Background Image (The Hero) */}
            <div className='absolute inset-0'>
                {/* Placeholder pattern */}
                <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] dark:bg-[radial-gradient(#27272a_1px,transparent_1px)] bg-size-[16px_16px] opacity-50"></div>

                {/* Actual Image */}
                <Image
                    src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuOUQUHO2HJahEVTn1NBsXX9bSQXHvHMN0aw&s"}
                    alt={title}
                    fill
                    unoptimized
                    className="object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out opacity-90"
                />
            </div>

            {/* 2. Dark Overlay Gradient */}
            <div className='absolute inset-0 bg-linear-to-t from-black/95 via-black/50 to-transparent opacity-60 group-hover:opacity-95 transition-opacity duration-500' />

            {/* 3. Top Right Status (Optional - moved here for better visibility) */}
            <div className='absolute top-4 right-4 z-20 translate-y-5 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300'>
                <span className='px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border border-white/20 bg-black/40 backdrop-blur-md text-white shadow-lg'>
                    {status}
                </span>
            </div>

            {/* 4. Bottom Content Area */}
            <div className='absolute bottom-0 left-0 right-0 p-6 md:p-8 flex flex-col justify-end text-white z-10'>

                {/* Title */}
                <div className='transform translate-y-8 group-hover:translate-y-0 transition-transform duration-300 ease-out'>
                    <h3 className='text-2xl md:text-3xl font-bold leading-tight mb-2 drop-shadow-md font-heading'>{title}</h3>
                </div>

                {/* Description Container (Expands on hover) */}
                <div className='grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-500 ease-in-out'>
                    <div className='overflow-hidden'>
                        <div className='pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100'>
                            <p className='text-gray-300 text-sm md:text-base line-clamp-3 mb-4'>
                                {description}
                            </p>

                            {/* Tags */}
                            <div className='flex flex-wrap gap-2 mb-4'>
                                {tags?.map((tag, i) => (
                                    <TooltipImage key={i} src={tag?.src} name={tag?.name} isBg />
                                ))}
                            </div>

                            {/* Action Buttons */}
                            <div className='w-full flex items-center justify-between gap-3 mt-4'>
                                <motion.div className="w-full" whileTap={{ scale: 0.95 }}>
                                    <Link href={link} target="_blank" className='flex items-center justify-center gap-2 p-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/10 text-white rounded-sm w-full transition-colors font-medium text-sm'>
                                        <GithubIcon size={18} />
                                        <span>Code</span>
                                    </Link>
                                </motion.div>

                                <motion.div className="w-full" whileTap={{ scale: 0.95 }}>
                                    <Link href={link} target="_blank" className='flex items-center justify-center gap-2 p-3 bg-cyan-500 hover:bg-cyan-400 text-white shadow-lg shadow-cyan-500/20 rounded-sm w-full transition-all font-medium text-sm'>
                                        <span>Live Demo</span>
                                        <ArrowUpRight size={18} />
                                    </Link>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default ProjectCard;