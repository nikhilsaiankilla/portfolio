"use client";

import React from 'react';
import { motion, Variants } from 'framer-motion';
import { Send, User, Mail, MessageSquare } from 'lucide-react';
import { Input } from '@/components/ui/input';       // Shadcn Input
import { Textarea } from '@/components/ui/textarea'; // Shadcn Textarea
import { Button } from '@/components/ui/button';     // Shadcn Button
import { Label } from '@/components/ui/label';       // Shadcn Label

const ContactForm = () => {
    // Animation Variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2,
            },
        },
    };

    const itemVariants: Variants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { type: "spring", stiffness: 100 },
        },
    };

    return (
        <motion.form
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="w-full max-w-md mx-auto space-y-6 bg-transparent p-2"
            onSubmit={(e) => e.preventDefault()} // Add your submit logic here
        >

            {/* Name Field */}
            <motion.div variants={itemVariants} className="space-y-2 group">
                <Label htmlFor="name" className="text-gray-700 dark:text-gray-300 font-medium ml-1">
                    Name
                </Label>
                <div className="relative">
                    <User className="absolute left-3 top-2.5 h-5 w-5 text-gray-400 group-hover:text-cyan-500 transition-colors" />
                    <Input
                        id="name"
                        placeholder="John Doe"
                        className="pl-10 bg-white/50 dark:bg-zinc-900/50 border-gray-200 dark:border-zinc-800 backdrop-blur-sm focus:bg-white dark:focus:bg-zinc-900 transition-all duration-300"
                    />
                </div>
            </motion.div>

            {/* Email Field */}
            <motion.div variants={itemVariants} className="space-y-2 group">
                <Label htmlFor="email" className="text-gray-700 dark:text-gray-300 font-medium ml-1">
                    Email
                </Label>
                <div className="relative">
                    <Mail className="absolute left-3 top-2.5 h-5 w-5 text-gray-400 group-focus-within:text-cyan-500 transition-colors" />
                    <Input
                        id="email"
                        type="email"
                        placeholder="john@example.com"
                        className="pl-10 bg-white/50 dark:bg-zinc-900/50 border-gray-200 dark:border-zinc-800 backdrop-blur-sm focus:bg-white dark:focus:bg-zinc-900 transition-all duration-300"
                    />
                </div>
            </motion.div>

            {/* Message Field */}
            <motion.div variants={itemVariants} className="space-y-2 group">
                <Label htmlFor="message" className="text-gray-700 dark:text-gray-300 font-medium ml-1">
                    Message
                </Label>
                <div className="relative">
                    <MessageSquare className="absolute left-3 top-3 h-5 w-5 text-gray-400 group-focus-within:text-cyan-500 transition-colors" />
                    <Textarea
                        id="message"
                        placeholder="Tell me about your project..."
                        className="min-h-[120px] pl-10 bg-white/50 dark:bg-zinc-900/50 border-gray-200 dark:border-zinc-800 backdrop-blur-sm focus:bg-white dark:focus:bg-zinc-900 transition-all duration-300 resize-none"
                    />
                </div>
            </motion.div>

            {/* Submit Button */}
            <motion.div variants={itemVariants}>
                <Button
                    type="submit"
                    className="w-full bg-black dark:bg-white text-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-200 transition-all group"
                >
                    <span>Send Message</span>
                    <Send className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
            </motion.div>

        </motion.form>
    );
};

export default ContactForm;