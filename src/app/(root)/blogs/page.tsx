import AnimatedContainer from "@/src/components/animated-container";
import BlogCard from "@/src/components/blog-card";
import FooterSection from "@/src/components/footer-section";
import NavSection from "@/src/components/nav-section";
import NewsletterSection from "@/src/components/newsletter-section";
import SectionHeading from "@/src/components/section-heading";
import { getAllBlogs } from "@/src/lib/blogs";
import type { Metadata } from "next";

const SITE_URL = "https://nikhilsai.in";
const OG_IMAGE = `${SITE_URL}/og-image-blogs.png`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: "Tech Blogs | System Design, Backend, AI, Next.js, Data Systems",
  description:
    "Tech blogs covering system design, backend architecture, AI, Next.js, Kafka, ClickHouse, and lessons from building scalable products and developer tools.",

  keywords: [
    "Full Stack Developer Blog",
    "Next.js Blog",
    "System Design Blog",
    "Backend Engineering Blog",
    "Kafka Tutorials",
    "ClickHouse Guides",
    "Analytics Engineering",
    "Developer Tools Blog",
    "Building in Public Engineering",
  ],

  authors: [{ name: "Nikhil Sai", url: SITE_URL }],
  creator: "Nikhil Sai",
  publisher: "Nikhil Sai",

  category: "technology",
  applicationName: "Nikhil Sai Blog",
  referrer: "origin-when-cross-origin",

  alternates: {
    canonical: `${SITE_URL}/blogs`,
  },

  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },

  openGraph: {
    title:
      "Engineering Blog – System Design, Next.js, Backend, Kafka | Nikhil Sai",
    description:
      "Deep dives into backend systems, scalable architectures, analytics pipelines, and modern full stack development.",
    url: `${SITE_URL}/blogs`,
    siteName: "Nikhil Sai Blog",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Nikhil Sai Engineering Blog",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Engineering Blog – Nikhil Sai",
    description:
      "System design, backend engineering, Next.js, Kafka, ClickHouse, and real-world build breakdowns.",
    images: [OG_IMAGE],
    creator: "@nikhilbuildss",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

const page = () => {
  const blogs = getAllBlogs();

  return (
    <div className="w-full min-h-screen bg-white text-black dark:bg-black dark:text-white px-2">
      <div className="w-full border-2 border-b-0 border-t-0 border-gray-700/10 dark:border-gray-700/40 max-w-4xl mx-auto flex flex-col">
        <NavSection />
        <AnimatedContainer>
          <div className="w-full">
            <div className="space-y-6 mb-10">
              <SectionHeading title="Blogs" />
            </div>
            {blogs && blogs.length > 0 ? (
              <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                {blogs.map((blog, index) => (
                  <BlogCard key={index} {...blog} />
                ))}
              </div>
            ) : (
              <p className="text-center mt-10 text-gray-600 dark:text-gray-300s text-sm">
                No Blogs Found!!
              </p>
            )}
          </div>
        </AnimatedContainer>

        <NewsletterSection />
        <div className="mt-auto">
          <FooterSection />
        </div>
      </div>
    </div>
  );
};

export default page;
