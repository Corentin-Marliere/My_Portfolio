import StarryBackground from "@/components/StarryBackground";
import AboutSection from "@/components/sections/AboutSection";
import CompetenciesSection from "@/components/sections/CompetenciesSection";
import ContactSection from "@/components/sections/ContactSection";
import HeroSection from "@/components/sections/HeroSection";
import ProjectsSection from "@/components/sections/ProjectsSection";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#060b13] text-white overflow-x-hidden">
      <StarryBackground />

      <div className="relative z-10">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <CompetenciesSection />
        <ContactSection />
      </div>
    </main>
  );
}
