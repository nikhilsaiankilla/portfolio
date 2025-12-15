import AnimatedContainer from './animated-container'
import { Github, Linkedin } from 'lucide-react'
import { Link } from 'next-view-transitions';
import AnimatedTooltip from './animated-tooltip';
import { XIcon } from './nav-section';
import SkillCard from './skill-card';

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
                        Built using <SkillCard src={"/skills/nextjs.png"} name={'Next Js'} index={1} id={'1'} /> & <SkillCard src={"/skills/tailwind.png"} name={'Tailwind css'} index={1} id={'1'} />
                    </p>
                </div>
            </div>
            
            
        </AnimatedContainer>
    )
}

export default FooterSection