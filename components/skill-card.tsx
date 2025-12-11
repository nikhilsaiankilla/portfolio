"use client"

import { AnimatePresence, motion, Variants } from 'framer-motion'
import Image from 'next/image';
import { useState } from 'react';

interface TooltipImageProps {
    name: string;
    src: string;
    index?: number;
}

const cardVariants: Variants = {
    hidden: { opacity: 0, y: 20, scale: 0.8 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { type: "spring", stiffness: 260, damping: 20 }
    }
};

const SkillCard = ({ name, src }: TooltipImageProps) => {
    const [isDragging, setIsDragging] = useState<boolean>(false)

    return (
        <div className='relative inline-flex items-center justify-center'>
            
            <motion.div
                variants={cardVariants}
                
                // 1. Drag Events to control state
                onDragStart={() => setIsDragging(true)}
                onDragEnd={() => setIsDragging(false)}

                // 2. Drag Config
                drag
                dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
                dragElastic={0.2}

                // 3. Animations
                whileDrag={{
                    scale: 1.1,
                    zIndex: 50,
                    cursor: "grabbing",
                    boxShadow: "0px 15px 30px rgba(0,0,0,0.2)",
                }}
                whileHover={{
                    y: -5,
                    scale: 1.05,
                    boxShadow: "0px 10px 20px rgba(0,0,0,0.1)",
                    zIndex: 10
                }}
                whileTap={{ scale: 0.95, cursor: "grabbing" }}

                className={`
                    p-1 w-fit h-fit rounded-lg cursor-grab active:cursor-grabbing
                    flex items-center gap-2 border border-dashed 
                    border-gray-600 dark:border-zinc-700 px-4 
                    bg-gray-500/10 dark:hover:bg-zinc-900 
                    transition-colors duration-200
                    relative
                `}
            >
                {/* 4. Tooltip moved INSIDE so it follows the card */}
                <AnimatePresence>
                    {isDragging && (
                        <motion.div
                            initial={{ opacity: 0, y: 10, scale: 0.8 }}
                            animate={{ opacity: 1, y: -45, scale: 1 }} // Moved up slightly more (-45)
                            exit={{ opacity: 0, y: 10, scale: 0.8 }}
                            transition={{ duration: 0.2, type: "spring", stiffness: 300 }}
                            className="absolute left-1/2 -translate-x-1/2 -top-2 bg-amber-500 text-white text-[10px] font-bold px-2 py-1 rounded shadow-lg whitespace-nowrap z-50 pointer-events-none"
                        >
                            <span>Put me back!! there <br/> You Stranger!</span>
                            {/* Little triangle arrow pointing down */}
                            <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-red-500"></div>
                        </motion.div>
                    )}
                </AnimatePresence>

                <div className="relative flex items-center justify-center pointer-events-none">
                    <Image
                        src={src}
                        alt={`${name} Icon`}
                        width={20}
                        height={20}
                        unoptimized
                        className="drop-shadow-sm"
                    />
                </div>

                <span className='text-xs font-medium text-gray-700 dark:text-gray-300 pointer-events-none'>
                    {name}
                </span>
            </motion.div>
        </div>
    )
}

export default SkillCard