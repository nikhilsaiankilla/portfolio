"use client";

import React from 'react';
import Link from 'next/link';
import { Mail, Twitter, Wallet, Smartphone, CreditCard, Coffee } from 'lucide-react'; // Using Lucide for consistency
import AnimatedContainer from './animated-container';
import { motion } from 'framer-motion';
import ContactForm from './contact-form';

const ContactSection = () => {
    return (
        <AnimatedContainer>
            <section className="w-full py-16 px-4 md:px-10 flex flex-col items-center justify-center text-center space-y-8">

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
                        className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded border border-dashed border-gray-200 dark:border-zinc-700 bg-gray-50 dark:bg-zinc-800 text-sm font-medium text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-zinc-700 transition-colors mx-1 align-middle"
                    >
                        <Twitter size={14} className="text-black dark:text-white" />
                        Twitter
                    </Link>
                    {' '}or reach out from below form{' '}
                </p>

                <ContactForm />

                {/* 3. Support Section */}
                <div className="flex flex-col items-center gap-4 mt-4">
                    <span className="text-sm font-medium text-gray-400 dark:text-gray-500 uppercase tracking-wider">
                        Support my work
                    </span>

                    <div className="flex flex-wrap items-center justify-center gap-3">
                        {/* Solana Button */}
                        <motion.button
                            whileHover={{ y: -2 }}
                            whileTap={{ scale: 0.95 }}
                            className="flex items-center gap-2 px-4 py-2 bg-gray-50 dark:bg-zinc-900 rounded-lg shadow-sm hover:shadow-md transition-all group border border-dashed border-gray-200 dark:border-zinc-700"
                        >
                            <div className="p-1.5 bg-amber-100 dark:bg-amber-900/30 rounded-md">
                                <Coffee size={16} className="text-amber-600 dark:text-amber-400" />
                            </div>
                            <span className="font-semibold text-gray-700 dark:text-gray-200 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors text-xs">
                                Buy Me Coffee
                            </span>
                        </motion.button>

                        {/* Paytm Button */}
                        <motion.button
                            whileHover={{ y: -2 }}
                            whileTap={{ scale: 0.95 }}
                            className="flex items-center gap-2 px-4 py-2 bg-gray-50 dark:bg-zinc-900 rounded-lg shadow-sm hover:shadow-md transition-all group border border-dashed border-gray-200 dark:border-zinc-700"
                        >
                            <div className="p-1.5 bg-blue-100 dark:bg-blue-900/30 rounded-md">
                                <Smartphone size={16} className="text-cyan-600 dark:text-cyan-400" />
                            </div>
                            <span className="font-semibold text-gray-700 dark:text-gray-200 text-sm group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                                UPI
                            </span>
                        </motion.button>

                        {/* PayPal Button */}
                        <motion.button
                            whileHover={{ y: -2 }}
                            whileTap={{ scale: 0.95 }}
                            className="flex items-center gap-2 px-4 py-2 bg-gray-50 dark:bg-zinc-900 rounded-lg shadow-sm hover:shadow-md transition-all group border border-dashed border-gray-200 dark:border-zinc-700"
                        >
                            <div className="p-1.5 bg-indigo-100 dark:bg-indigo-900/30 rounded-md">
                                <CreditCard size={16} className="text-blue-700 dark:text-blue-500" />
                            </div>
                            <span className="font-semibold text-gray-700 dark:text-gray-200 text-sm group-hover:text-blue-700 dark:group-hover:text-blue-500 transition-colors">
                                Razorpay
                            </span>
                        </motion.button>
                    </div>
                </div>

            </section>
        </AnimatedContainer>
    )
}

export default ContactSection