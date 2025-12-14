"use client";

import { useSkills } from '../hooks/use-skills';
import AnimatedContainer from './animated-container'
import SectionHeading from './section-heading'
import SkillCard from './skill-card';
import { Skeleton } from './ui/skeleton';

const SkillsSection = () => {
    const { skills, isLoading, error, refetch } = useSkills();

    return (
        <AnimatedContainer>
            <div className="relative space-y-6" id='tech-stack'>

                {/* Header + Hint Container */}
                <div className="flex items-end justify-between">
                    <SectionHeading title='Skills' />

                    {/* Floating Hint (Hidden on mobile) */}
                    <div className="hidden md:flex flex-col items-center mb-2 mr-10 opacity-60 hover:opacity-100 transition-opacity duration-300">
                        <span className="text-xs font-bold text-gray-500 dark:text-gray-400 mb-1 -rotate-6 font-handwriting">
                            Try Dragging Them!!
                        </span>

                        {/* Cleaner Hand-Drawn Arrow SVG */}
                        <svg
                            width="50"
                            height="40"
                            viewBox="0 0 100 80"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="text-gray-400 dark:text-gray-500 rotate-12"
                        >
                            {/* The Curve */}
                            <path
                                d="M80 10C70 15 30 20 20 60"
                                stroke="currentColor"
                                strokeWidth="3"
                                strokeLinecap="round"
                            />
                            {/* The Arrowhead */}
                            <path
                                d="M10 50L20 60L35 45"
                                stroke="currentColor"
                                strokeWidth="3"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </div>
                </div>

                {/* Skills Grid */}
                <section className='w-full flex items-start justify-start flex-wrap gap-3'>
                    {
                        !isLoading && skills && skills.length > 0
                            ?
                            skills?.map((t, index) => (
                                <SkillCard key={index} src={t?.src} name={t?.name} index={index} id={t.id} />
                            ))
                            : <p className='text-center text-gray-500 dark:text-gray-300 text-xs'>No Skills Found!!</p>
                    }
                    {
                        error && <p className='text-center text-red-500 text-xs'>Something Went wrong while fetching Skills!!</p>
                    }
                    {
                        isLoading && Array.from({ length: 20 }).map((_, idx) => (<Skeleton className="p-1 w-[100px] rounded-sm" />))
                    }
                </section>
            </div>
        </AnimatedContainer>
    )
}

export default SkillsSection