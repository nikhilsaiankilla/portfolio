import AnimatedContainer from '@/src/components/animated-container'
import FooterSection from '@/src/components/footer-section'
import NavSection from '@/src/components/nav-section'
import { ProjectComponents } from '@/src/components/project-components';
import SectionHeading from '@/src/components/section-heading'
import { MDXRemote } from 'next-mdx-remote/rsc';
import rehypeHighlight from '@shikijs/rehype';
import Image from 'next/image';
import { getProjectById, getRelatedProjects } from '@/src/lib/project';
import { Separator } from '@/src/components/ui/separator';
import { Badge } from '@/src/components/ui/badge';
import AnimatedButton from '@/src/components/animated-btn';
import { Github, Globe } from 'lucide-react';
import ProjectCard from '@/src/components/project-card';

interface ProjectProps {
    params: Promise<{
        slug: string;
    }>;
}

const page = async ({ params }: ProjectProps) => {
    const { slug } = await params;
    const { title, description, error, image, technologies, github, live, role, team, status, featured, challenges, learnings, isPublished, content } = getProjectById('chill-guy');

    const relatedProjects = getRelatedProjects(slug);

    if (error) {
        <div className="w-full min-h-screen bg-white text-black dark:bg-black dark:text-white px-5">
            <div className="w-full border-2 border-b-0 border-t-0 border-gray-700/10 dark:border-gray-700/40 max-w-4xl mx-auto min-h-screen">
                <NavSection />
                <AnimatedContainer>
                    <div className='w-full min-h-[70vh] flex items-center justify-center'>
                        <p className='text-center text-red-500 text-xs font-semibold'>{error}</p>
                    </div>
                </AnimatedContainer>
                <FooterSection />
            </div>
        </div>
    }

    return (
        <div className="w-full min-h-screen bg-white text-black dark:bg-black dark:text-white px-5">
            <div className="w-full border-2 border-b-0 border-t-0 border-gray-700/10 dark:border-gray-700/40 max-w-4xl mx-auto min-h-screen">
                <NavSection />
                <AnimatedContainer>
                    <div className='w-full space-y-5'>
                        <div className="relative aspect-video overflow-hidden rounded-sm">
                            <Image
                                src={image || 'https://placehold.co/600x400'}
                                alt={title || 'Project Thumbnail'}
                                fill
                                unoptimized
                                className="object-cover"
                                priority
                            />
                        </div>

                        <SectionHeading title={title || "Project Title Missing"} className='md:text-3xl capitalize' />

                        <div className='w-full flex items-center justify-start gap-2 flex-wrap'>
                            {
                                status && <Badge className='dark:bg-white dark:text-black border border-dashed border-gray-600/70 text-black bg-gray-300 text-[10px] shadow-2xl shadow-black px-2 rounded-sm'>{status}</Badge>
                            }
                            {
                                technologies?.slice(0, 5).map((t, idx) => (<Badge key={idx} className='dark:bg-[#0A0A0A] dark:text-white border border-dashed border-gray-600/70 text-black bg-gray-300 text-[10px] shadow-2xl shadow-black px-2 rounded-sm'>{t}</Badge>))
                            }
                            {
                                technologies && technologies?.length > 5 && <Badge className='dark:bg-[#0A0A0A] dark:text-white border border-dashed border-gray-600/70 text-black bg-gray-300 text-[10px] shadow-2xl shadow-black px-2 rounded-sm'>{technologies.length - 5} More</Badge>
                            }
                        </div>

                        <div className='w-full text-lg md:text-3xl text-gray-600 dark:text-gray-300 font-normal'>
                            {description && <p>{description}</p>}
                        </div>

                        <div className='w-full flex items-center justify-start gap-5 flex-wrap'>
                            {
                                github && <AnimatedButton
                                    label='Github'
                                    link={github}
                                    external
                                    icon={<Github className='w-4 h-4' />}
                                    variant='outline'
                                    className='w-full md:w-fit'
                                />
                            }
                            {
                                live && <AnimatedButton
                                    label='Demo'
                                    external
                                    link={live}
                                    className='w-full md:w-fit'
                                    icon={<Globe className='w-4 h-4' />}
                                />
                            }
                        </div>
                        {/* Content */}
                        <Separator />
                        <div className="prose prose-neutral max-w-none dark:prose-invert">
                            <MDXRemote
                                source={content ? content : "## Behind the Scenes"}
                                components={ProjectComponents}
                                options={{
                                    mdxOptions: {
                                        rehypePlugins: [
                                            [
                                                rehypeHighlight,
                                                {
                                                    theme: 'github-dark',
                                                },
                                            ],
                                        ],
                                    },
                                }}
                            />
                        </div>
                    </div>
                </AnimatedContainer>
                <AnimatedContainer>
                    <SectionHeading title={'Related Projects'} />
                    {
                        relatedProjects && relatedProjects.length > 0 ?
                            <div className='w-full grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 px-2'>
                                {relatedProjects.slice(0, 2).map((project, index) => (
                                    <ProjectCard key={index} {...project} />
                                ))}
                            </div>
                            :
                            <p className='text-center mt-10 text-gray-600 dark:text-gray-300s text-sm'>No Related Projects Found!!</p>
                    }
                </AnimatedContainer>
                <FooterSection />
            </div>
        </div>
    )
}

export default page