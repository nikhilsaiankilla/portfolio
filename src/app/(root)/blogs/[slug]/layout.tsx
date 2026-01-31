import NavSection from "@/src/components/nav-section";
import FooterSection from "@/src/components/footer-section";
import NewsletterSection from "@/src/components/newsletter-section";

export default function ProjectsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="w-full min-h-screen bg-white text-black dark:bg-black dark:text-white px-5">
            <div className="w-full border-2 border-b-0 border-t-0 border-gray-700/10 dark:border-gray-700/40 max-w-4xl mx-auto min-h-screen">
                <NavSection />
                {children}
                <NewsletterSection />
                <FooterSection />
            </div>
        </div>
    );
}
