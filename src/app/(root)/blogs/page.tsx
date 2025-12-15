import AnimatedContainer from '@/src/components/animated-container'
import FooterSection from '@/src/components/footer-section'
import NavSection from '@/src/components/nav-section'
import SectionHeading from '@/src/components/section-heading'
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Blogs",
    description:
        "Writing about what I’m building and learning system design, backend engineering, analytics, and lessons from shipping real products.",
    keywords: [
        "Nikhil Sai Blog",
        "Engineering Blog",
        "System Design",
        "Backend Engineering",
        "Full Stack Development",
        "Analytics Systems",
        "Developer Tools",
        "Kafka",
        "ClickHouse",
        "Next.js",
        "Building in Public",
    ],
    metadataBase: new URL("https://nikhilsai.in"),
    alternates: {
        canonical: "https://nikhilsai.in/blogs",
    },
    openGraph: {
        title: "Blog — Nikhil Sai",
        description:
            "Thoughts, breakdowns, and lessons from building products, backend systems, and developer tools.",
        url: "https://nikhilsai.in/blogs",
        siteName: "Nikhil Sai / Blog",
        images: [
            {
                url: "/og-image.png",
                width: 1200,
                height: 630,
                alt: "Nikhil Sai Blog",
            },
        ],
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Blog — Nikhil Sai",
        description:
            "Writing about system design, backend engineering, analytics, and building real products.",
        images: ["/og-image.png"],
        creator: "@nikhilbuildss",
    },
    robots: {
        index: true,
        follow: true,
    },
};


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