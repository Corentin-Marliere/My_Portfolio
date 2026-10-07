"use client";

import { useState, useRef, useEffect } from "react";
import ProjectCard, { Project } from "@/components/ProjectsCard";

type ProjectsSectionProps = {
  initialProjects?: Project[];
};

export default function ProjectsSection({
  initialProjects,
}: ProjectsSectionProps) {
  const projects = initialProjects || [];

  const [isExpanded, setIsExpanded] = useState(false);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const desktopCarouselRef = useRef<HTMLDivElement>(null);
  const mobileCarouselRef = useRef<HTMLDivElement>(null);

  // =================
  // Fonctions MOBILE
  // =================
  const handleMobileScroll = () => {
    if (mobileCarouselRef.current) {
      const scrollLeft = mobileCarouselRef.current.scrollLeft;
      const cardWidth = 280 + 16;
      const index = Math.round(scrollLeft / cardWidth);
      setActiveIndex(index);
    }
  };

  const scrollToMobile = (index: number) => {
    if (mobileCarouselRef.current) {
      mobileCarouselRef.current.scrollTo({
        left: index * (280 + 16),
        behavior: "smooth",
      });
    }
  };

  // ==================
  // 2. Fonctions PC
  // ==================
  const updateScrollButtons = () => {
    if (desktopCarouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } =
        desktopCarouselRef.current;
      setCanScrollLeft(scrollLeft > 10);
      setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 10);
    }
  };

  useEffect(() => {
    if (isExpanded) {
      const timer = setTimeout(updateScrollButtons, 100);
      window.addEventListener("resize", updateScrollButtons);
      return () => {
        clearTimeout(timer);
        window.removeEventListener("resize", updateScrollButtons);
      };
    }
  }, [isExpanded]);

  const scrollNext = () => {
    desktopCarouselRef.current?.scrollBy({ left: 352, behavior: "smooth" });
  };

  const scrollPrev = () => {
    desktopCarouselRef.current?.scrollBy({ left: -352, behavior: "smooth" });
  };

  return (
    <section
      id="projects"
      className="relative w-full py-20 lg:py-28 overflow-hidden scroll-mt-24"
    >
      {/* VSCode Background */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div
          className="absolute -inset-10 bg-cover bg-center opacity-30 mix-blend-screen rotate-[-2.5deg] scale-110 transform-gpu"
          style={{ backgroundImage: "url('/images/vscode-bg.jpg')" }}
        />
        <div className="absolute inset-0 bg-linear-to-b from-[#060b13] via-transparent to-[#060b13]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(6,11,19,0)_0%,rgba(6,11,19,0.5)_60%,rgba(6,11,19,0.95)_100%)]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 max-w-4xl h-96 bg-cyan-500/10 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-8">
          <p className="font-mono text-sm tracking-wider font-semibold text-[#ffd700] mb-2 inline-flex items-center gap-1.5">
            <span className="text-gray-300">&lt;</span>
            <span className="text-[#ffd700]">Projects</span>
            <span className="text-gray-300">/&gt;</span>
          </p>
          <h2 className="text-3xl font-bold text-white">Mes Projets</h2>
        </div>

        {/* ========================= */}
        {/*       VERSION MOBILE      */}
        {/* ========================= */}

        <div className="md:hidden w-full">
          <div
            ref={mobileCarouselRef}
            onScroll={handleMobileScroll}
            className="flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth scrollbar-none [&::-webkit-scrollbar]:hidden px-4 py-2"
          >
            {projects.map((project) => (
              <div key={project.id} className="snap-center shrink-0 w-70">
                <ProjectCard data={project} />
              </div>
            ))}
          </div>

          {/* mobile DOT scroll */}
          {projects.length > 1 && (
            <div className="flex justify-center items-center gap-1.5 mt-6">
              {projects.map((_, i) => (
                <button
                  key={i}
                  onClick={() => scrollToMobile(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === activeIndex ? "w-6 bg-white" : "w-2 bg-white/30"
                  }`}
                  aria-label={`Aller au projet ${i + 1}`}
                />
              ))}
            </div>
          )}
        </div>

        {/* ========================= */}
        {/*         VERSION PC        */}
        {/* ========================= */}

        <div className="hidden md:block w-full">
          {!isExpanded ? (
            <div className="flex flex-wrap justify-center gap-8 w-full max-w-262 mx-auto">
              {projects.slice(0, 3).map((project) => (
                <div key={project.id} className="w-[320px]">
                  <ProjectCard data={project} />
                </div>
              ))}
            </div>
          ) : (
            <div className="w-full flex justify-center">
              <div
                ref={desktopCarouselRef}
                onScroll={updateScrollButtons}
                className="grid grid-rows-2 grid-flow-col auto-cols-80 gap-8 overflow-x-auto scroll-smooth scrollbar-none [&::-webkit-scrollbar]:hidden w-full max-w-262 px-3 py-3"
              >
                {projects.map((project) => (
                  <div key={project.id} className="w-[320px]">
                    <ProjectCard data={project} />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Boutons PC */}
          {projects.length > 3 && (
            <div className="flex items-center justify-center gap-4 mt-6">
              {isExpanded && (
                <button
                  onClick={scrollPrev}
                  disabled={!canScrollLeft}
                  className={`p-3 rounded-full border border-white/20 transition-all ${
                    !canScrollLeft
                      ? "opacity-30 cursor-not-allowed bg-transparent text-gray-500"
                      : "opacity-100 cursor-pointer bg-white/10 hover:bg-white/20 text-white shadow-md hover:scale-105"
                  }`}
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>{" "}
                </button>
              )}

              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="px-6 py-3 rounded-xl border border-white/20 bg-white/10 hover:bg-white/20 text-white font-medium transition-all cursor-pointer shadow-md hover:scale-[1.02]"
              >
                {isExpanded ? "Voir moins" : "Voir plus de projets"}
              </button>

              {isExpanded && (
                <button
                  onClick={scrollNext}
                  disabled={!canScrollRight}
                  className={`p-3 rounded-full border border-white/20 transition-all ${
                    !canScrollRight
                      ? "opacity-30 cursor-not-allowed bg-transparent text-gray-500"
                      : "opacity-100 cursor-pointer bg-white/10 hover:bg-white/20 text-white shadow-md hover:scale-105"
                  }`}
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
