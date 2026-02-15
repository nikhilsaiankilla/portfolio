import FooterSection from "@/src/components/footer-section";
import NavSection from "@/src/components/nav-section";
import Newsletter from "@/src/components/newsletter";
import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://nikhilsai.in"),

  title: "Developer Newsletter — Nikhil Sai",
  description:
    "Join the developer newsletter where I share lessons from building real products, backend systems, system design, and AI workflows.",

  alternates: {
    canonical: "https://nikhilsai.in/newsletter",
  },

  openGraph: {
    title: "Developer Newsletter — Nikhil Sai",
    description:
      "Lessons from building real products, backend systems, and AI — straight to your inbox.",
    url: "https://nikhilsai.in/newsletter",
    siteName: "Nikhil Sai",
    images: [
      {
        url: "https://nikhilsai.in/og-image-newsletter.png",
        width: 1200,
        height: 630,
        alt: "Nikhil Sai Newsletter",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Developer Newsletter — Nikhil Sai",
    description:
      "System design, backend engineering, and real-world build notes.",
    images: ["https://nikhilsai.in/og-image.png"],
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
            <h1 className="text-md md:text-2xl font-bold text-black dark:text-white tracking-tight font-heading">
              Developer Newsletter on System Design, Backend & AI
            </h1>

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
