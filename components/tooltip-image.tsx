"use client"

import { AnimatePresence } from 'motion/react'
import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image';

interface TooltipImageProps {
    name: string;
    src: string;
    width?: number;
    height?: number;
    isBg?: boolean
}

const TooltipImage = ({ name, src, width, height, isBg = false }: TooltipImageProps) => {
    const [isHovered, setIsHovered] = useState<boolean>(false)
    return (
        <div
            className='relative inline-flex items-center justify-center'
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* The Tooltip */}
            <AnimatePresence>
                {isHovered && (
                    <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.8 }}
                        animate={{ opacity: 1, y: -35, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.8 }}
                        transition={{ duration: 0.2, type: "spring", stiffness: 300 }}
                        className="absolute left-1/2 -translate-x-1/2 bg-gray-900 text-white text-[10px] px-2 py-1 rounded shadow-lg whitespace-nowrap z-50 pointer-events-none"
                    >
                        {/* Split the name by space and map over it */}
                        {name.split(" ").map((word, index) => (
                            <span key={index} className={`block text-center md:text-sm`}>
                                {word}
                            </span>
                        ))}
                        {/* Little triangle arrow pointing down */}
                        <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-gray-900"></div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* The Icon */}
            <span className={`p-1 w-fit h-fit rounded-sm shadow-sm cursor-pointer transition-colors ${isBg ? "bg-white hover:bg-gray-300" : "border-dashed border-gray-400"}`}>
                <Image
                    src={src}
                    alt={`${name} Icon`}
                    width={width ? width : 20}
                    height={height ? height : 20}
                    unoptimized
                />
            </span>
        </div>
    )
}

export default TooltipImage