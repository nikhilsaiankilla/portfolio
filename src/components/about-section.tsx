"use client"

import { motion, Variants } from 'framer-motion'
import AnimatedContainer from './animated-container';
import Image from 'next/image';
import { Link } from 'next-view-transitions';
import AnimatedTooltip from './animated-tooltip';

const techStack = [
    { name: 'Next.js', src: '/skills/nextjs.png' },
    { name: 'AWS', src: '/skills/aws.png' },
    { name: 'Docker', src: '/skills/docker.png' },
    { name: 'Node.js', src: '/skills/nodejs.png' },
];

const AboutSection = () => {
    const itemVariants: Variants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { type: 'spring', stiffness: 100 }
        }
    };

    return (
        <AnimatedContainer>
            <div>
                <motion.h2
                    variants={itemVariants}
                    className="text-2xl font-bold text-black dark:text-white mb-8 font-heading"
                >
                    <p className='text-xs sm:text-sm font-normal text-gray-500 dark:text-gray-400'>About</p>
                    Me
                </motion.h2>
            </div>

            <div className='w-full grid grid-cols-1 md:grid-cols-3 gap-5'>
                {/* 1. Added Flexbox centering here to contain the image */}
                <motion.div
                    variants={itemVariants}
                    className="w-full col-span-1 flex items-center justify-center md:justify-start"
                >
                    <motion.div
                        whileHover={{ scale: 1.05, rotate: 3 }}
                        whileTap={{ scale: 0.95 }}
                        initial={{ scale: 0.5, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.4 }}
                        className="relative"
                    >
                        {/* 2. Added z-0 to blur and z-10 to image to ensure stacking is correct */}
                        <div className="absolute -inset-1 bg-linear-to-r from-primary to-primary/90 rounded-sm blur opacity-30 animate-pulse z-0"></div>
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
                </motion.div>

                {/* Text Content Area */}
                <div className="w-full col-span-1 md:col-span-2 flex flex-col justify-center space-y-3">
                    <motion.h1
                        variants={itemVariants}
                        className="text-lg md:text-2xl font-bold text-transparent bg-clip-text bg-linear-to-r from-primary to-primary/90 font-heading tracking-tight"
                    >
                        Nikhil Sai Ankilla
                    </motion.h1>

                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                        I’m a <span className="font-semibold text-black dark:text-white">Full Stack Developer</span> building
                        products end to end web apps, backend systems, and developer tools.
                        I care about how systems work, not just how they look.
                    </p>

                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                        Currently exploring system design through personal projects and open source.
                        Open to full time roles <Link href="#contact" className="text-primary hover:underline">let’s talk</Link>.
                    </p>

                    <div className="w-full flex items-start justify-start gap-2 flex-wrap pt-2">
                        {techStack?.map((t, index) => (
                            <AnimatedTooltip label={t.name} key={index}>
                                <Image
                                    src={t.src}
                                    width={30}
                                    height={30}
                                    className="p-1 rounded-sm bg-white shadow-2xl hover:rotate-6 transition-all duration-100 ease-in"
                                    alt={t.name}
                                />
                            </AnimatedTooltip>
                        ))}
                    </div>
                </div>
            </div>
        </AnimatedContainer>
    )
}

export default AboutSection