import AnimatedContainer from './animated-container'
import SectionHeading from './section-heading'
import TooltipImage from './tooltip-image';

const techStack = [
    { name: 'Next.js', src: '/Next.js.svg' },
    { name: 'AWS', src: '/AWS.svg' },
    { name: 'Docker', src: '/Docker.svg' },
    { name: 'Node.js', src: '/Node.js.svg' },
    { name: 'Next.js', src: '/Next.js.svg' },
    { name: 'AWS', src: '/AWS.svg' },
    { name: 'Docker', src: '/Docker.svg' },
    { name: 'Node.js', src: '/Node.js.svg' },
    { name: 'Next.js', src: '/Next.js.svg' },
    { name: 'AWS', src: '/AWS.svg' },
    { name: 'Docker', src: '/Docker.svg' },
    { name: 'Node.js', src: '/Node.js.svg' },
    { name: 'Next.js', src: '/Next.js.svg' },
    { name: 'AWS', src: '/AWS.svg' },
    { name: 'Docker', src: '/Docker.svg' },
    { name: 'Node.js', src: '/Node.js.svg' },
    { name: 'Next.js', src: '/Next.js.svg' },
    { name: 'AWS', src: '/AWS.svg' },
    { name: 'Docker', src: '/Docker.svg' },
    { name: 'Node.js', src: '/Node.js.svg' },
    { name: 'Next.js', src: '/Next.js.svg' },
    { name: 'AWS', src: '/AWS.svg' },
    { name: 'Docker', src: '/Docker.svg' },
    { name: 'Node.js', src: '/Node.js.svg' },
];

const SkillsSection = () => {
    return (
        <AnimatedContainer>
            <SectionHeading title='Skills' />
            <section className='w-full flex items-center justify-start flex-wrap gap-4 md:gap-6'>
                {
                    techStack?.map((t,index) => <TooltipImage key={index} src={t?.src} name={t?.name} width={50} height={50} isBg/>)
                }
            </section>
        </AnimatedContainer>
    )
}

export default SkillsSection