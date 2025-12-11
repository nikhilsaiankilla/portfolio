import AnimatedContainer from '@/components/animated-container'
import FooterSection from '@/components/footer-section'
import NavSection from '@/components/nav-section'
import SectionHeading from '@/components/section-heading'
import { Download } from 'lucide-react'
import Link from 'next/link'

const ResumePage = () => {
    // 1. REPLACE THIS with your actual Google Drive File ID
    // Example: if your link is https://drive.google.com/file/d/123456789/view
    // Your ID is "123456789"
    const fileId = "14e8FwiLaF1OBULrw_NxeiLLU6uH7uzrW";

    // 2. Construct the URLs
    const embedUrl = `https://drive.google.com/file/d/${fileId}/preview`;

    return (
        <div className="w-full min-h-screen bg-white text-black dark:bg-black dark:text-white px-2">
            <div className="w-full border-2 border-b-0 border-t-0 border-gray-700/10 dark:border-gray-700/40 max-w-4xl mx-auto min-h-screen flex flex-col">
                <NavSection />
                <AnimatedContainer>
                    <div className="space-y-6 mb-10">
                        <SectionHeading title='Resume' />
                        {/* PDF Viewer Container */}
                        <div className='w-full h-[800px] bg-gray-100 dark:bg-zinc-900 rounded-xl overflow-hidden border border-gray-200 dark:border-zinc-800 shadow-sm'>
                            <iframe
                                src={embedUrl}
                                className="w-full h-full"
                                title="Resume PDF"
                                allow="autoplay"
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