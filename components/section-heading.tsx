"use client"

import { motion, Variants } from 'framer-motion'

const SectionHeading = ({ title }: { title: string }) => {
    const itemVariants: Variants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { type: 'spring', stiffness: 100 } // Now TypeScript knows 'spring' is valid
        }
    };
    return (
        <motion.h2
            variants={itemVariants}
            className="text-2xl font-bold text-black dark:text-white mb-8 font-heading"
        >
            {title}
        </motion.h2>
    )
}

export default SectionHeading