"use client";

import { GraduationCap, School } from 'lucide-react';
import AnimatedContainer from './animated-container'; // Assuming you have this wrapper
import { motion, Variants } from 'framer-motion';
import SectionHeading from './section-heading';

// Data based on your screenshot
const educationList = [
    {
        id: 1,
        institution: 'Sri Indu College Of Engineering And Technology!',
        degree: 'B.Tech in Computer Science',
        date: '2021 - 2025',
        score: '7.44 CGPA',
        logo: '/logos/mait.png', // Replace with actual path
        fallbackIcon: <GraduationCap size={20} />
    },
    {
        id: 2,
        institution: 'Sri Gaytri Junior College!',
        degree: 'Intermediate',
        date: '2019 - 2021',
        score: '789/1000',
        logo: '/logos/siddhartha.png',
        fallbackIcon: <School size={20} />
    },
    {
        id: 3,
        institution: `St Hannah's School High School`,
        degree: 'Class X (SSC)',
        date: '2018- 2019',
        score: '8.3 CGPA',
        logo: '/logos/dav.png',
        fallbackIcon: <School size={20} />
    },
];

const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: { type: 'spring', stiffness: 100 }
    }
};

const EducationSection = () => {
    return (
        <AnimatedContainer>
            <SectionHeading title='Education!' />
            <div className="space-y-8">
                {educationList.map((edu) => (
                    <motion.div
                        key={edu.id}
                        variants={itemVariants}
                        className="group flex gap-4 md:gap-6 items-start group"
                    >
                        <motion.div
                            whileHover={{ rotate: 5, scale: 1.05 }}
                            transition={{ type: 'spring', stiffness: 300, damping: 10 }}
                            className="shrink-0 mt-1"
                        >
                            <div className="w-12 h-12 rounded-xl bg-gray-50 dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 flex items-center justify-center text-gray-500 dark:text-gray-400 overflow-hidden shadow-sm group-hover:scale-105 transition-transform duration-300">
                                {/* Use Image if you have it, otherwise fallback */}
                                {/* <Image src={edu.logo} alt={edu.institution} width={48} height={48} className="object-cover" /> */}
                                {edu.fallbackIcon}
                            </div>
                        </motion.div>

                        {/* Content Column */}
                        <div className="flex-1 space-y-1">
                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-1 md:gap-0">
                                <h3 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-primary transition-colors">
                                    {edu.institution}
                                </h3>
                                <span className="text-sm font-medium text-gray-500 dark:text-gray-400 tabular-nums">
                                    {edu.date}
                                </span>
                            </div>

                            <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                    {edu.degree}
                                </p>

                                {edu.score && (
                                    <>
                                        <span className="hidden sm:block w-1 h-1 rounded-full bg-gray-300 dark:bg-gray-600" />
                                        <span className="text-sm text-gray-500 dark:text-gray-500 font-medium">
                                            {edu.score}
                                        </span>
                                    </>
                                )}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </AnimatedContainer>
    );
};

export default EducationSection;