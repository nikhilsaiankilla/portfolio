"use client"

import AnimatedContainer from '@/src/components/animated-container'
import FooterSection from '@/src/components/footer-section'
import NavSection from '@/src/components/nav-section'
import SectionHeading from '@/src/components/section-heading'
import { Download } from 'lucide-react'
import Image from 'next/image'
import { motion } from 'framer-motion'

const ResumePage = () => {
    // 1. Define the URL in one place
    const RESUME_URL = 'https://res.cloudinary.com/do5y2mtpk/image/upload/v1766238616/resume/nikhil_sai_resume_yktnez.pdf';

    const downloadUrl = getDownloadUrl(RESUME_URL);

    return (
        <div className="w-full min-h-screen bg-white text-black dark:bg-black dark:text-white px-2">
            <div className="w-full border-2 border-b-0 border-t-0 border-gray-700/10 dark:border-gray-700/40 max-w-4xl mx-auto min-h-screen flex flex-col">
                <NavSection />
                <AnimatedContainer>
                    <div className="space-y-6 mb-10">
                        <div className='w-full flex items-start justify-between'>
                            <SectionHeading title='Resume' />

                            {/* 3. Changed motion.button to motion.a */}
                            <motion.a
                                href={downloadUrl}
                                download="nikhilsai-resume.pdf"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.2 }}

                                // Interaction Animations
                                whileHover="hover"
                                whileTap={{ scale: 0.95 }}

                                className={`group relative inline-flex items-center justify-center gap-2 rounded-sm font-medium transition-colors w-fit md:px-8 md:py-2 p-2 bg-primary text-white shadow-lg shadow-primary/20 border-transparent overflow-hidden cursor-pointer`}
                            >
                                <Download size={16} strokeWidth={2.5} />

                                <motion.span
                                    variants={{
                                        hover: { x: 5 }
                                    }}
                                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                                    className="relative z-10 hidden md:block"
                                >
                                    <span className='relative z-10 text-sm font-normal'>Download</span>
                                </motion.span>

                                <motion.div
                                    variants={{
                                        hover: { opacity: 0.4, scale: 1.5 }
                                    }}
                                    transition={{ duration: 0.3 }}
                                    className='absolute inset-0 rounded-full bg-primary blur-xl opacity-0 -z-10'
                                />

                                {/* Shine sweep effect */}
                                <motion.div
                                    variants={{
                                        hover: { left: "100%" }
                                    }}
                                    initial={{ left: "-100%" }}
                                    transition={{ duration: 0.5, ease: "easeInOut" }}
                                    className="absolute top-0 bottom-0 w-1/2 bg-linear-to-r from-transparent via-white/20 to-transparent -skew-x-12 z-0"
                                />
                            </motion.a>
                        </div>
                        <div className='w-full bg-gray-100 dark:bg-zinc-900 rounded-xl overflow-hidden border border-gray-200 dark:border-zinc-800 shadow-sm'>
                            <Image
                                src={getPdfThumbnail(RESUME_URL)}
                                alt="PDF preview"
                                loading="lazy"
                                width={300}
                                height={450}
                                unoptimized
                                className="rounded h-full w-full"
                            />
                        </div>
                    </div>
                </AnimatedContainer>

                {/* Push Footer to bottom if content is short */}
                <div className="mt-auto">
                    <FooterSection />
                </div>
            </div>
        </div>
    )
}

export default ResumePage

// Helper to generate the thumbnail (existing)
export function getPdfThumbnail(pdfUrl: string) {
    if (!pdfUrl.includes('/upload/')) return pdfUrl;
    const [base, rest] = pdfUrl.split('/upload/');
    const withoutExt = rest.replace(/\.pdf$/, '');
    return `${base}/upload/w_2600,pg_1,q_auto,f_auto/${withoutExt}.png`;
}

// Helper to generate a forced download URL
export function getDownloadUrl(pdfUrl: string) {
    if (!pdfUrl.includes('/upload/')) return pdfUrl;
    const [base, rest] = pdfUrl.split('/upload/');
    // fl_attachment forces the browser to download the file instead of opening it
    return `${base}/upload/fl_attachment:nikhilsai-resume.pdf/${rest}`;
}
