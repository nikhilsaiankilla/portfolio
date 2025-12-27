"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { Link } from "next-view-transitions";
import { Badge } from "./ui/badge";
import { BlogTypes } from "../config/blogs";

interface BlogCardProps extends BlogTypes {
    index?: number;
}

const cardVariants: Variants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: (index: number) => ({
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            delay: index * 0.1,
            duration: 0.5,
            ease: "easeOut",
        },
    }),
};

const BlogCard = ({
    slug,
    title,
    description,
    tags,
    publishedOn,
    readingTime,
    featured,
    index = 0,
}: BlogCardProps) => {
    return (
        <motion.article
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            custom={index}
            className="group flex flex-col w-full rounded-sm overflow-hidden bg-gray-400/10 dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 shadow-sm hover:shadow-lg transition-all duration-300"
        >
            {/* Content */}
            <div className="flex flex-col p-5 space-y-4">
                <div className="h-5">
                    {featured && (
                        <Badge className="bg-cyan-600/70 text-white text-[10px] px-2 rounded-sm">
                            Featured
                        </Badge>
                    )}
                </div>
                {/* Title & Description */}
                <div className="space-y-2">
                    <h3 className="text-xl md:text-2xl font-bold font-heading text-black dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                        {title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-3 leading-relaxed">
                        {description}
                    </p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1">
                    {tags?.slice(0, 3).map((tag, i) => (
                        <Badge
                            key={i}
                            className="dark:bg-[#0A0A0A] dark:text-white border border-dashed border-gray-600/70 text-black bg-gray-300 text-[10px] px-2 rounded-sm"
                        >
                            {tag}
                        </Badge>
                    ))}
                    {tags.length > 3 && (
                        <span className="text-xs text-gray-400 flex items-center px-1">
                            +{tags.length - 3}
                        </span>
                    )}
                </div>

                {/* Meta */}
                <div className="flex items-center gap-4 text-xs text-gray-500 dark:text-gray-400">
                    <span className="flex items-center gap-1">
                        <Calendar size={14} />
                        {publishedOn}
                    </span>
                    <span className="flex items-center gap-1">
                        <Clock size={14} />
                        {readingTime}
                    </span>
                </div>

                {/* CTA */}
                <div className="w-full">
                    <Link
                        href={`/blogs/${slug}`}
                        className="flex items-center gap-2 text-gray-500 dark:text-gray-300 text-sm ml-auto w-fit hover:underline"
                    >
                        Read Article <ArrowRight size={16} />
                    </Link>
                </div>
            </div>
        </motion.article>
    );
};

export default BlogCard;
