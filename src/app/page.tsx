import StarryBackground from "@/components/StarryBackground";
import AboutSection from "@/components/sections/AboutSection";
import CompetenciesSection from "@/components/sections/CompetenciesSection";
import ContactSection from "@/components/sections/ContactSection";
import HeroSection from "@/components/sections/HeroSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import { getProjects } from "@/sanity/queries";

export const revalidate = 60;

export default async function Home() {
  const sanityProjects = await getProjects();

  return (
    <main className="relative min-h-screen bg-[#060b13] text-white overflow-x-hidden">
      <StarryBackground />

      <div className="relative z-10">
        <HeroSection />
        <AboutSection />
        <ProjectsSection initialProjects={sanityProjects} />
        <CompetenciesSection />
        <ContactSection />
      </div>
    </main>
  );
}
