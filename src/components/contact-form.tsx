"use client";

import { motion, Variants } from 'framer-motion';
import { Send, User, Mail, MessageSquare } from 'lucide-react';
import { Input } from '@/src/components/ui/input';       // Shadcn Input
import { Textarea } from '@/src/components/ui/textarea';
import { Label } from '@/src/components/ui/label';       // Shadcn Label
import { FormEvent } from 'react';

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

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
    }


    return (
        <motion.form
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="w-full max-w-md mx-auto space-y-6 bg-transparent p-2"
            onSubmit={handleSubmit}
        >

            {/* Name Field */}
            <motion.div variants={itemVariants} className="space-y-2 group">
                <Label htmlFor="name" className="text-gray-700 dark:text-gray-300 font-medium ml-1">
                    Name
                </Label>
                <div className="relative">
                    <User className="absolute left-3 top-2.5 h-5 w-5 text-gray-400 group-focus-within:text-cyan-500 transition-colors" />
                    <Input
                        id="name"
                        placeholder="Goat Virat Kohli"
                        className="pl-10 bg-white/50 dark:bg-zinc-900/50 border-gray-200 dark:border-zinc-800 focus:bg-white dark:focus:bg-zinc-900 transition-all duration-300"
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
                        placeholder="goatkohli@example.com"
                        className="pl-10 bg-white/50 dark:bg-zinc-900/50 border-gray-200 dark:border-zinc-800 focus:bg-white dark:focus:bg-zinc-900 transition-all duration-300"
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
                        className="min-h-[120px] pl-10 bg-white/50 dark:bg-zinc-900/50 border-gray-200 dark:border-zinc-800 focus:bg-white dark:focus:bg-zinc-900 transition-all duration-300 resize-none"
                    />
                </div>
            </motion.div>

            {/* Submit Button */}
            <motion.div variants={itemVariants}>
                <motion.button
                    type="submit"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}

                    // Interaction Animations
                    whileHover="hover"
                    whileTap={{ scale: 0.95 }}

                    className='group relative w-full flex items-center justify-center gap-2 px-8 py-2.5 bg-cyan-500 hover:bg-cyan-500 text-white rounded-sm font-medium overflow-hidden cursor-pointer'
                >
                    <span className='relative z-10 text-sm font-normal'>Send Message</span>

                    <motion.span
                        variants={{
                            hover: { x: 5 }
                        }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        className="relative z-10"
                    >
                        <Send className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </motion.span>

                    <motion.div
                        variants={{
                            hover: { opacity: 0.4, scale: 1.5 }
                        }}
                        transition={{ duration: 0.3 }}
                        className='absolute inset-0 rounded-full bg-cyan-500 blur-xl opacity-0 -z-10'
                    />

                    {/* Optional: Shine sweep effect */}
                    <motion.div
                        variants={{
                            hover: { left: "100%" }
                        }}
                        initial={{ left: "-100%" }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                        className="absolute top-0 bottom-0 w-1/2 bg-linear-to-r from-transparent via-white/20 to-transparent -skew-x-12 z-0"
                    />
                </motion.button>
            </motion.div>

        </motion.form>
    );
};

export default ContactForm;