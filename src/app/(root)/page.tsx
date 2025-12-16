import AboutSection from "@/src/components/about-section";
import ContactSection from "@/src/components/contact-section";
import EducationSection from "@/src/components/education-section";
import ExperienceSection from "@/src/components/experience-section";
import FooterSection from "@/src/components/footer-section";
import HeroSection from "@/src/components/hero-section";
import NavSection from "@/src/components/nav-section";
import ProofOfWorkSection from "@/src/components/proof-of-work-section";
import SkillsSection from "@/src/components/skills-section";


export default function Home() {
  return (
    <div className="w-full min-h-screen bg-white text-black dark:bg-black dark:text-white px-2">
      <div className="w-full border-2 border-b-0 border-t-0 border-gray-700/10 dark:border-gray-700/40 max-w-4xl mx-auto min-h-screen">
        <NavSection />
        <HeroSection />
        <ProofOfWorkSection />
        <ExperienceSection />
        <SkillsSection />
        {/* <AboutSection /> */}
        <EducationSection />
        <ContactSection />
        <FooterSection />
      </div>
    </div>
  );
}

