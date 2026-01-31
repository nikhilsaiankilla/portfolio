"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Smartphone, CreditCard, Coffee, Check, Mail, } from 'lucide-react';
import AnimatedContainer from './animated-container';
import { AnimatePresence, motion } from 'framer-motion';
import ContactForm from './contact-form';
import { XIcon } from './nav-section';

const MotionLink = motion.create(Link);

const ContactSection = () => {
    const [isHovered, setIsHovered] = useState<boolean>(false)
    const [isEmailHovered, setIsEmailHovered] = useState<boolean>(false)

    return (
        <section id='contact' className='w-full'>
            <AnimatedContainer>
                <div className="w-full py-16 px-4 md:px-10 flex flex-col items-center justify-center text-center space-y-8">

                    {/* 1. Heading */}
                    <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white tracking-tight font-heading">
                        Get in Touch!
                    </h2>

                    {/* 2. Text with Inline Badges */}
                    <div className="text-lg text-gray-600 dark:text-gray-400 max-w-lg leading-loose">
                        I’m most active on{' '}

                        {/* Twitter badge */}
                        <span
                            className="relative inline-flex items-center"
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}
                        >
                            <AnimatePresence>
                                {isHovered && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10, scale: 0.8 }}
                                        animate={{ opacity: 1, y: -35, scale: 1 }}
                                        exit={{ opacity: 0, y: 10, scale: 0.8 }}
                                        transition={{ duration: 0.2, type: "spring", stiffness: 300 }}
                                        className="absolute left-1/2 -translate-x-1/2 bg-gray-900 text-white text-[10px] px-2 py-1 rounded shadow-lg whitespace-nowrap z-50 pointer-events-none"
                                    >
                                        Fastest way to reach me
                                        <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-gray-900" />
                                    </motion.div>
                                )}
                            </AnimatePresence>

                            <MotionLink
                                drag
                                dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
                                dragElastic={0.2}
                                whileDrag={{
                                    scale: 1.1,
                                    zIndex: 50,
                                    cursor: "grabbing",
                                    boxShadow: "0px 15px 30px rgba(0,0,0,0.2)",
                                }}
                                whileTap={{ scale: 0.95 }}
                                href="https://twitter.com/nikhilbuildss"
                                target="_blank"
                                className="inline-flex items-center gap-1.5 px-2 py-0.5 mx-1 rounded border border-dashed border-gray-600 dark:border-zinc-700
        bg-gray-500/10 dark:hover:bg-zinc-900 text-sm font-medium text-gray-900 dark:text-white"
                            >
                                <XIcon className="w-4 h-4" />
                                Twitter
                            </MotionLink>
                        </span>

                        feel free to DM me there.
                        You can also{' '}

                        {/* Email badge */}
                        <span
                            className="relative inline-flex items-center"
                            onMouseEnter={() => setIsEmailHovered(true)}
                            onMouseLeave={() => setIsEmailHovered(false)}
                        >
                            <MotionLink
                                href="mailto:nikhilsaiankilla@gmail.com"
                                className="inline-flex items-center gap-1.5 px-2 py-0.5 mx-1 rounded
    border border-dashed border-gray-600 dark:border-zinc-700
    bg-gray-500/10 dark:hover:bg-zinc-900
    text-sm font-medium text-gray-900 dark:text-white"
                            >
                                <Mail className="w-4 h-4" />
                                Email me
                            </MotionLink>

                        </span>

                        {' '}or use the form below.
                    </div>

                </div>
            </AnimatedContainer>
        </section>
    )
}

export default ContactSection;