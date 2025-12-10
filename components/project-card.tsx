import { ArrowUpRight, GithubIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { Badge } from './ui/badge'
import TooltipImage from './tooltip-image';

interface ProjectProps {
    title: string;
    description: string;
    tags: { src: string; name: string }[];
    link: string;
    image: string;
    status: string;
}

const ProjectCard = (project: ProjectProps) => {
    return (
        <div
            className='group relative h-[400px] w-full overflow-hidden bg-gray-100 dark:bg-zinc-900 shadow-sm transition-all duration-500'
        >
            {/* 1. Background Image (The Hero) */}
            <div className='absolute inset-0'>
                {/* Placeholder pattern if image fails or while loading */}
                <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] dark:bg-[radial-gradient(#27272a_1px,transparent_1px)] bg-size-[16px_16px] opacity-50"></div>

                {/* Actual Image */}
                <Image
                    src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuOUQUHO2HJahEVTn1NBsXX9bSQXHvHMN0aw&s"}
                    alt={project?.title}
                    fill
                    unoptimized
                    className="object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out opacity-90"
                />
            </div>

            {/* 2. Dark Overlay Gradient */}
            <div className='absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-black/10 opacity-60 group-hover:opacity-90 transition-opacity duration-500' />

            {/* 4. Bottom Content Area */}
            <div className='absolute bottom-0 left-0 right-0 p-6 md:p-8 flex flex-col justify-end text-white z-10'>
                {/* Title & Status */}
                <div className='transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300'>
                    <div className='flex items-center gap-3 mb-2'>
                        <h3 className='text-2xl md:text-3xl font-bold leading-tight'>{project.title}</h3>
                        <span className='px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider border border-white/30 bg-white/10 backdrop-blur-sm'>
                            {project.status}
                        </span>
                    </div>
                </div>

                {/* Description (Fades in + Slides up) */}
                <div className='h-0 opacity-0 group-hover:h-auto group-hover:opacity-100 overflow-hidden transition-all duration-500 delay-75 ease-in-out'>
                    <p className='text-gray-300 text-sm md:text-base line-clamp-3 mb-4'>
                        {project.description}
                    </p>

                    {/* Tags */}
                    <div className='flex flex-wrap gap-2 pt-2'>
                        {project?.tags?.map((tag) => (
                            <TooltipImage src={tag?.src} name={tag?.name} isBg/>
                        ))}
                    </div>

                    <div className='w-full flex items-center justify-between gap-2 mt-4'>
                        <Link href={project.link} target="_blank" className='p-2 bg-white/20 hover:bg-white text-white hover:text-black rounded-lg w-full transition-colors flex items-center justify-center gap-2'>
                            Github
                            <GithubIcon size={18} />
                        </Link>
                        <Link href={project.link} target="_blank" className='p-2 bg-cyan-500 hover:bg-cyan-400 text-white rounded-lg w-full transition-colors flex items-center justify-center gap-2'>
                            Live
                            <ArrowUpRight size={18} />
                        </Link>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ProjectCard