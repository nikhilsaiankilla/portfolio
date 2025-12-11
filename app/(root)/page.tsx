import AboutSection from "@/components/about-section";
import ContactSection from "@/components/contact-section";
import EducationSection from "@/components/education-section";
import ExperienceSection from "@/components/experience-section";
import HeroSection from "@/components/hero-section";
import NavSection from "@/components/nav-section";
import ProofOfWorkSection from "@/components/proof-of-work-section";
import SkillsSection from "@/components/skills-section";

export default function Home() {
  return (
    <div className="w-full min-h-screen bg-white text-black dark:bg-black dark:text-white px-5">
      <div className="w-full border-2 border-b-0 border-t-0 border-gray-700/10 dark:border-gray-700/40 max-w-4xl mx-auto min-h-screen">
        <NavSection />
        <HeroSection />
        <ProofOfWorkSection />
        <ExperienceSection />
        <SkillsSection />
        <AboutSection />
        <EducationSection />
        <ContactSection />
      </div>
    </div>
  );
}

