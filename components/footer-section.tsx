import AnimatedContainer from './animated-container'
import Link from 'next/link'
import { Github, Heart, Linkedin } from 'lucide-react'
import TooltipImage from './tooltip-image';

const FooterSection = () => {
    const currentYear = new Date().getFullYear();

    return (
        <AnimatedContainer>
            <div className='space-y-5'>
                <div className="flex items-center justify-center flex-wrap gap-3">
                    <Link href="https://github.com/nikhilsaiankilla" target="_blank" className="hover:text-cyan-500 transition-transform hover:-translate-y-1">
                        <Github size={20} />
                    </Link>
                    <Link href="https://linkedin.com/in/nikhilsaiankilla" target="_blank" className="hover:text-cyan-500 transition-transform hover:-translate-y-1">
                        <Linkedin size={20} />
                    </Link>
                    <Link href="https://x.com/nikhilbuildss" target="_blank" className="hover:text-cyan-500 transition-transform hover:-translate-y-1">
                        <svg
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                            className="w-5 h-5 fill-current" // Size 20px (w-5)
                        >
                            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
                        </svg>
                    </Link>
                </div>
                <div className='flex flex-col items-center gap-2'>
                    <p className='text-xs text-gray-500 dark:text-gray-400'>
                        &copy; {currentYear} Nikhil Sai. All rights reserved.
                    </p>
                    <p className='text-xs text-gray-400 dark:text-gray-500 flex items-center gap-2'>
                        Built using <TooltipImage src='/Next.js.svg' name='Next Js' isBg/> & <TooltipImage src='/Next.js.svg' name='Tailwind css' isBg/>
                    </p>
                </div>
            </div>
        </AnimatedContainer>
    )
}

export default FooterSection