import ContactSection from "@/components/sections/ContactSection";
import HeroSection from "@/components/sections/HeroSection";
import ProjectsSection from "@/components/sections/ProjectsSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-linear-to-br from-[#667eea] to-[#764ba2] text-white">
      {" "}
      <HeroSection />
      <ProjectsSection />
      <ContactSection />
    </main>
  );
}
