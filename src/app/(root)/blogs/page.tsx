import AnimatedContainer from '@/src/components/animated-container'
import BlogCard from '@/src/components/blog-card';
import FooterSection from '@/src/components/footer-section'
import NavSection from '@/src/components/nav-section'
import SectionHeading from '@/src/components/section-heading'
import { getAllBlogs } from '@/src/lib/blogs';
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
                url: "/og-image-blogs.png",
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
        images: ["/og-image-blogs.png"],
        creator: "@nikhilbuildss",
    },
    robots: {
        index: true,
        follow: true,
    },
};


const page = () => {
    const blogs = getAllBlogs();

    return (
        <div className="w-full min-h-screen bg-white text-black dark:bg-black dark:text-white px-2">
            <div className="w-full border-2 border-b-0 border-t-0 border-gray-700/10 dark:border-gray-700/40 max-w-4xl mx-auto flex flex-col">
                <NavSection />
                <AnimatedContainer>
                    <div className='w-full'>
                        <div className="space-y-6 mb-10">
                            <SectionHeading title='Blogs' />
                        </div>
                        {
                            blogs && blogs.length > 0 ?
                                <div className='w-full grid grid-cols-1 md:grid-cols-2 gap-6 mt-8'>
                                    {blogs.map((blog, index) => (
                                        <BlogCard key={index} {...blog} />
                                    ))}
                                </div>
                                :
                                <p className='text-center mt-10 text-gray-600 dark:text-gray-300s text-sm'>No Blogs Found!!</p>
                        }
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