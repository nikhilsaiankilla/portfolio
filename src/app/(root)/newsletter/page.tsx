import FooterSection from "@/src/components/footer-section";
import NavSection from "@/src/components/nav-section";
import Newsletter from "@/src/components/newsletter";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Newsletter — Nikhil Sai",
  description:
    "Occasional updates on what I’m building, lessons from shipping real products, and ideas around system design, backend engineering, and developer tools.",
  keywords: [
    "Nikhil Sai Newsletter",
    "Building in Public",
    "Product Engineering",
    "System Design Notes",
    "Backend Engineering",
    "Developer Tools",
    "Startup Engineering",
    "Learning in Public",
    "Indie Builder",
    "Next.js",
  ],
  metadataBase: new URL("https://nikhilsai.in"),
  alternates: {
    canonical: "https://nikhilsai.in/newsletter",
  },
  openGraph: {
    title: "Newsletter — Nikhil Sai",
    description:
      "What I’m building, what I’m learning, and what’s worth paying attention to — sent occasionally.",
    url: "https://nikhilsai.in/newsletter",
    siteName: "Nikhil Sai",
    images: [
      {
        url: "/og-image-newsletter.png",
        width: 1200,
        height: 630,
        alt: "Nikhil Sai Newsletter",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Newsletter — Nikhil Sai",
    description:
      "Low-noise updates on building products, system design, and lessons from the trenches.",
    images: ["/og-image-newsletter.png"],
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
      <div className="w-full min-h-screen border-2 border-b-0 border-t-0 border-gray-700/10 dark:border-gray-700/40 max-w-4xl mx-auto flex flex-col">
        <NavSection />
        <div className="w-full flex-1 flex items-center justify-center border-2 border-r-0 border-l-0 border-gray-700/10 dark:border-gray-700/40">
          <div className="w-full flex flex-col items-center justify-center gap-5">
            <h2 className="text-md md:text-2xl font-bold text-black dark:text-white tracking-tight font-heading">
              Join The Newsletter!
            </h2>

            <div className="text-lg text-gray-600 dark:text-gray-400 max-w-lg leading-relaxed text-center">
              I share what I’m building, what I’m learning, and things worth
              paying attention to. Straight to your inbox.
            </div>
            <Newsletter />
          </div>
        </div>
        <FooterSection />
      </div>
    </div>
  );
};

export default page;
