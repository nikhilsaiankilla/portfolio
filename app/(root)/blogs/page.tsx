import AnimatedContainer from '@/components/animated-container'
import FooterSection from '@/components/footer-section'
import NavSection from '@/components/nav-section'
import SectionHeading from '@/components/section-heading'
import React from 'react'

const page = () => {
    return (
        <div className="w-full min-h-screen bg-white text-black dark:bg-black dark:text-white px-2">
            <div className="w-full border-2 border-b-0 border-t-0 border-gray-700/10 dark:border-gray-700/40 max-w-4xl mx-auto min-h-screen flex flex-col">
                <NavSection />
                <AnimatedContainer>
                    <div className='w-full h-[60vh]'>
                        <div className="space-y-6 mb-10">
                            <SectionHeading title='Blogs' />
                        </div>

                        <p className='text-center text-gray-500 dark:text-gray-300'>No Blogs Found</p>
                    </div>
                </AnimatedContainer>

                <div className="mt-auto">
                    <FooterSection />
                </div>
            </div>
        </div>
    )
}

export default page