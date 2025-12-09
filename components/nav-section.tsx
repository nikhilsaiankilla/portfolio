"use client"

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Github, Linkedin, Terminal, Twitter } from 'lucide-react';
import { ModeToggle } from './mode-toggle';

const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Tech Stack', href: '#tech-stack' },
    { name: 'Contact', href: '#contact' },
];

const NavSection = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    // Effect to handle scroll state
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className={`transition-all duration-300 ${scrolled
                ? 'bg-white/80 dark:bg-black/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 shadow-sm py-4'
                : 'bg-transparent py-6'
                }`}
        >
            <div className="max-w-7xl mx-auto px-5 md:px-10 flex items-center justify-between">

                {/* Logo Area */}
                <Link href="/" className="flex items-center gap-2 font-bold text-xl md:text-2xl tracking-tighter hover:text-cyan-500 transition-colors">
                    <div className="bg-cyan-500 text-white p-1 rounded-lg">
                        <Terminal size={20} />
                    </div>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-4">
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="text-sm font-medium hover:text-cyan-500 transition-colors relative group"
                        >
                            {item.name}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-500 transition-all group-hover:w-full"></span>
                        </Link>
                    ))}
                </div>

                {/* Socials & Mobile Toggle */}
                <div className="flex items-center gap-2">
                    {/* Social Icons (Desktop only usually, but good to have) */}
                    <div className="hidden md:flex items-center gap-3 border-l border-gray-300 dark:border-gray-700 pl-4">
                        <Link href="https://github.com" target="_blank" className="hover:text-cyan-500 transition-transform hover:-translate-y-1">
                            <Github size={20} />
                        </Link>
                        <Link href="https://linkedin.com" target="_blank" className="hover:text-cyan-500 transition-transform hover:-translate-y-1">
                            <Linkedin size={20} />
                        </Link>
                        <Link href="https://linkedin.com" target="_blank" className="hover:text-cyan-500 transition-transform hover:-translate-y-1">
                            <Twitter size={20} />
                        </Link>
                        <ModeToggle />
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white/95 dark:bg-black/95 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 overflow-hidden"
                    >
                        <div className="flex flex-col p-5 space-y-4">
                            {navItems.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    onClick={() => setIsOpen(false)}
                                    className="text-lg font-medium hover:text-cyan-500 hover:pl-2 transition-all"
                                >
                                    {item.name}
                                </Link>
                            ))}
                            <div className="flex gap-4 pt-4 border-t border-gray-200 dark:border-gray-800">
                                <Link href="https://github.com" target="_blank" className="flex items-center gap-2 hover:text-cyan-500">
                                    <Github size={20} /> Github
                                </Link>
                                <Link href="https://linkedin.com" target="_blank" className="flex items-center gap-2 hover:text-cyan-500">
                                    <Linkedin size={20} /> LinkedIn
                                </Link>
                                <Link href="https://linkedin.com" target="_blank" className="flex items-center gap-2 hover:text-cyan-500">
                                    <Twitter size={20} /> Twitter
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}

export default NavSection;