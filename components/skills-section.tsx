"use client";

import AnimatedContainer from './animated-container'
import SectionHeading from './section-heading'
import SkillCard from './skill-card';

const techStack = [
    { name: 'Next.js', src: '/Next.js.svg' },
    { name: 'AWS', src: '/AWS.svg' },
    { name: 'Docker', src: '/Docker.svg' },
    { name: 'Node.js', src: '/Node.js.svg' },
    { name: 'Next.js', src: '/Next.js.svg' },
    { name: 'AWS', src: '/AWS.svg' },
    { name: 'Docker', src: '/Docker.svg' },
    { name: 'Node.js', src: '/Node.js.svg' },
    { name: 'Next.js', src: '/Next.js.svg' },
    { name: 'AWS', src: '/AWS.svg' },
    { name: 'Docker', src: '/Docker.svg' },
    { name: 'Node.js', src: '/Node.js.svg' },
    { name: 'Next.js', src: '/Next.js.svg' },
    { name: 'AWS', src: '/AWS.svg' },
    { name: 'Docker', src: '/Docker.svg' },
    { name: 'Node.js', src: '/Node.js.svg' },
    { name: 'Next.js', src: '/Next.js.svg' },
    { name: 'AWS', src: '/AWS.svg' },
    { name: 'Docker', src: '/Docker.svg' },
    { name: 'Node.js', src: '/Node.js.svg' },
    { name: 'Next.js', src: '/Next.js.svg' },
    { name: 'AWS', src: '/AWS.svg' },
    { name: 'Docker', src: '/Docker.svg' },
    { name: 'Node.js', src: '/Node.js.svg' },
];

const SkillsSection = () => {
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
                    {techStack?.map((t, index) => (
                        <SkillCard key={index} src={t?.src} name={t?.name} index={index} />
                    ))}
                </section>
            </div>
        </AnimatedContainer>
    )
}

export default SkillsSection