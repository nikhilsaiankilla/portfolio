import AnimatedContainer from './animated-container'
import { Github, Linkedin } from 'lucide-react'
import TooltipImage from './animated-tooltip';
import { Link } from 'next-view-transitions';
import AnimatedTooltip from './animated-tooltip';
import Image from 'next/image';
import { XIcon } from './nav-section';

const FooterSection = () => {
    const currentYear = new Date().getFullYear();

    return (
        <AnimatedContainer>
            <div className='space-y-5'>
                <div className="flex items-center justify-center flex-wrap gap-3">
                    <AnimatedTooltip label="Github">
                        <Link href="https://github.com/nikhilsaiankilla" target="_blank" className="hover:text-cyan-500 transition-transform hover:-translate-y-1">
                            <Github size={20} />
                        </Link>
                    </AnimatedTooltip>
                    <AnimatedTooltip label="Linkedin">
                        <Link href="https://linkedin.com/in/nikhilsaiankilla" target="_blank" className="hover:text-cyan-500 transition-transform hover:-translate-y-1">
                            <Linkedin size={20} />
                        </Link>
                    </AnimatedTooltip>
                    <AnimatedTooltip label="X (Twitter)">
                        <Link href="https://x.com/nikhilbuildss" target="_blank" className="hover:text-cyan-500 transition-transform hover:-translate-y-1">
                            <XIcon className='w-5 h-5' />
                        </Link>
                    </AnimatedTooltip>
                </div>
                <div className='flex flex-col items-center gap-2'>
                    <p className='text-xs text-gray-500 dark:text-gray-400'>
                        &copy; {currentYear} Nikhil Sai. All rights reserved.
                    </p>
                    <p className='text-xs text-gray-400 dark:text-gray-500 flex items-center gap-2'>
                        Built using <AnimatedTooltip label="Next Js"><Image src={'/Next.js.svg'} alt='Next Js' width={30} height={30} className='p-1 bg-white shadow-2xl rounded-sm hover:rotate-6 transition-all duration-100 ease-in' /></AnimatedTooltip> & <AnimatedTooltip label="Next Js"><Image src={'/Next.js.svg'} alt='Tailwind Css' width={30} height={30} className='p-1 bg-white shadow-2xl rounded-sm hover:rotate-6 transition-all duration-100 ease-in' /></AnimatedTooltip>
                    </p>
                </div>
            </div>
        </AnimatedContainer>
    )
}

export default FooterSection