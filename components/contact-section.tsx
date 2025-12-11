"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Mail, Smartphone, CreditCard, Coffee, Check, Copy } from 'lucide-react';
import AnimatedContainer from './animated-container';
import { motion } from 'framer-motion';
import ContactForm from './contact-form';

const ContactSection = () => {
    const [copied, setCopied] = useState(false);
    const upiId = "8374056888@superyes"; // UPI ID

    const handleCopy = () => {
        navigator.clipboard.writeText(upiId);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
    };

    return (
        <AnimatedContainer>
            <section className="w-full py-16 px-4 md:px-10 flex flex-col items-center justify-center text-center space-y-8" id='contact'>

                {/* 1. Heading */}
                <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white tracking-tight font-heading">
                    Get in Touch!
                </h2>

                {/* 2. Text with Inline Badges */}
                <p className="text-lg text-gray-600 dark:text-gray-400 max-w-lg leading-relaxed">
                    Want to chat? Just shoot me a dm via{' '}
                    <Link
                        href="https://twitter.com/yourhandle"
                        target="_blank"
                        className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded border border-dashed border-gray-200 dark:border-zinc-700 text-sm font-medium text-gray-900 dark:text-white transition-colors mx-1 align-middle hover:bg-gray-100 dark:hover:bg-zinc-800"
                    >
                        𝕏
                        Twitter
                    </Link>
                    {' '}or reach out from below form{' '}
                </p>

                <ContactForm />

                {/* 3. Support Section */}
                <div className="flex flex-col items-center gap-4 mt-8">
                    <span className="text-sm font-medium text-gray-400 dark:text-gray-500 uppercase tracking-wider">
                        Support my work
                    </span>

                    <div className="flex flex-wrap items-center justify-center gap-3">

                        {/* 1. Buy Me Coffee (Link) */}
                        <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.95 }}>
                            <Link
                                href="https://buymeacoffee.com/nikhilsaiankilla" // Replace with your URL
                                target="_blank"
                                className="flex items-center gap-2 px-2 py-1 bg-gray-50 dark:bg-zinc-900 rounded-lg shadow-sm hover:shadow-md transition-all group border border-dashed border-gray-600 dark:border-zinc-700"
                            >
                                <div className="p-1.5 bg-amber-100 dark:bg-amber-900/30 rounded-md">
                                    <Coffee size={12} className="text-amber-600 dark:text-amber-400" />
                                </div>
                                <span className="font-semibold text-gray-700 dark:text-gray-200 text-sm group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
                                    Buy Me Coffee
                                </span>
                            </Link>
                        </motion.div>

                        {/* 2. UPI (Click to Copy) */}
                        <motion.button
                            onClick={handleCopy}
                            whileHover={{ y: -2 }}
                            whileTap={{ scale: 0.95 }}
                            className="flex items-center gap-2 px-2 py-1 bg-gray-50 dark:bg-zinc-900 rounded-lg shadow-sm hover:shadow-md transition-all group border border-dashed border-gray-600 dark:border-zinc-700 relative overflow-hidden cursor-pointer"
                        >
                            <div className={`p-1.5 rounded-md transition-colors ${copied ? 'bg-green-100 dark:bg-green-900/30' : 'bg-blue-100 dark:bg-blue-900/30'}`}>
                                {copied ? (
                                    <Check size={12} className="text-green-600 dark:text-green-400" />
                                ) : (
                                    <Smartphone size={12} className="text-cyan-600 dark:text-cyan-400" />
                                )}
                            </div>
                            <span className={`font-semibold text-sm transition-colors w-16 ${copied ? 'text-green-600 dark:text-green-400' : 'text-gray-700 dark:text-gray-200 group-hover:text-cyan-600 dark:group-hover:text-cyan-400'}`}>
                                {copied ? 'Copied!' : 'UPI'}
                            </span>
                        </motion.button>

                        {/* 3. Razorpay (Link) */}
                        <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.95 }}>
                            <Link
                                href="https://razorpay.me/nikhilsaiankilla" 
                                target="_blank"
                                className="flex items-center gap-2 px-2 py-1 bg-gray-50 dark:bg-zinc-900 rounded-lg shadow-sm hover:shadow-md transition-all group border border-dashed border-gray-600 dark:border-zinc-700"
                            >
                                <div className="p-1.5 bg-indigo-100 dark:bg-indigo-900/30 rounded-md">
                                    <CreditCard size={12} className="text-blue-700 dark:text-blue-500" />
                                </div>
                                <span className="font-semibold text-gray-700 dark:text-gray-200 text-sm group-hover:text-blue-700 dark:group-hover:text-blue-500 transition-colors">
                                    Razorpay
                                </span>
                            </Link>
                        </motion.div>
                    </div>
                </div>

            </section>
        </AnimatedContainer>
    )
}

export default ContactSection;