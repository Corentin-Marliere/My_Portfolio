"use client";

import { useState, useRef, useEffect } from "react";
import ProjectCard, { Project } from "@/components/ProjectsCard";

export default function ProjectsSection() {
  const mockProjects: Project[] = [
    {
      id: "1",
      title: "1. Projet Gaming HTML5",
      description:
        "Développement d'un jeu vidéo interactif 2D utilisant le Canvas HTML5 et JavaScript moderne. Gestion de la boucle de jeu, de la physique et des collisions.",
      coverURL:
        "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=600&q=80",
      tags: ["JavaScript", "HTML5 Canvas", "CSS3"],
      competencies: [
        "Intégrer les différents éléments de la solution web (HTML/CSS/JS)",
        "Implémenter la partie front-end d'une solution web",
        "Développer le prototype de la solution web",
      ],
      githubURL: "https://github.com",
      projectURL: "https://google.com",
    },
    {
      id: "2",
      title: "2. E-Commerce Next.js",
      description:
        "Plateforme e-commerce complète avec gestion du panier, catalogue de produits et intégration de paiements sécurisés.",
      coverURL:
        "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&w=600&q=80",
      tags: ["Next.js", "TypeScript", "TailwindCSS"],
      competencies: [
        "Implémenter la partie front-end d'une solution web",
        "Rédiger le code de la solution en respectant l'accessibilité et l'ergonomie",
      ],
      projectURL: "https://google.com",
    },
    {
      id: "3",
      title: "3. Dashboard Analytics",
      description:
        "Tableau de bord d'analyse de métriques en temps réel avec graphiques interactifs et filtres avancés.",
      coverURL:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80",
      tags: ["React", "Chart.js", "TailwindCSS"],
      competencies: [
        "Identifier des améliorations qualitatives et de performance",
        "Analyser la qualité de l'ergonomie et de l'accessibilité",
      ],
      githubURL: "https://github.com",
      projectURL: "https://google.com",
    },
    {
      id: "4",
      title: "4. API REST & Auth",
      description:
        "Conception d'une API backend robuste avec authentification JWT, gestion de rôles et validation des schémas.",
      coverURL:
        "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=600&q=80",
      tags: ["Node.js", "Express", "PostgreSQL"],
      competencies: [
        "Implémenter la logique et la base de données (back-end)",
        "Implémenter des règles d'authentification et de sécurité",
      ],
      githubURL: "https://github.com",
    },
    {
      id: "5",
      title: "5. Clone Spotify",
      description:
        "Lecteur audio moderne connecté à l'API Spotify avec playlists personnalisées et recherche dynamique.",
      coverURL:
        "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=600&q=80",
      tags: ["React", "Web Audio API", "TailwindCSS"],
      competencies: [
        "Intégrer les différents éléments de la solution web",
        "Développer le prototype de la solution web",
      ],
      githubURL: "https://github.com",
      projectURL: "https://google.com",
    },
    {
      id: "6",
      title: "6. Task Manager Kanban",
      description:
        "Application de gestion de tâches inspirée de Trello avec drag & drop, labels et archivage.",
      coverURL:
        "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&w=600&q=80",
      tags: ["TypeScript", "React", "Dnd-kit"],
      competencies: [
        "Cadrer fonctionnellement un projet de solution web",
        "Implémenter la partie front-end",
      ],
      githubURL: "https://github.com",
    },
    {
      id: "7",
      title: "7. Application Météo",
      description:
        "Application météo géolocalisée fournissant des prévisions sur 7 jours avec visualisations graphiques.",
      coverURL:
        "https://images.unsplash.com/photo-1592210454359-9043f067919b?auto=format&fit=crop&w=600&q=80",
      tags: ["JavaScript", "OpenWeatherMap API", "CSS Grid"],
      competencies: ["Développer une solution web connectée à des API tierces"],
      githubURL: "https://github.com",
      projectURL: "https://google.com",
    },
    // {
    //   id: "9",
    //   title: "8. Réseau Social Développeurs",
    //   description:
    //     "Plateforme communautaire permettant aux développeurs de partager des snippets de code et des tutoriels.",
    //   coverURL:
    //     "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80",
    //   tags: ["Next.js", "Prisma", "TailwindCSS"],
    //   competencies: [
    //     "Implémenter la partie front-end et back-end",
    //     "Déployer une application web sécurisée",
    //   ],
    //   githubURL: "https://github.com",
    //   projectURL: "https://google.com",
    // },
  ];

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
      const cardWidth = 280 + 16; // Largeur carte (280px) + gap-4 (16px)
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
    desktopCarouselRef.current?.scrollBy({ left: 344, behavior: "smooth" });
  };

  const scrollPrev = () => {
    desktopCarouselRef.current?.scrollBy({ left: -344, behavior: "smooth" });
  };

  return (
    <section id="projects" className="max-w-7xl mx-auto px-6 py-16">
      <h2 className="text-3xl font-bold text-white mb-8 text-center">
        Mes Projets
      </h2>

      {/* ========================= */}
      {/*       VERSION MOBILE      */}
      {/* ========================= */}

      <div className="md:hidden w-full">
        <div
          ref={mobileCarouselRef}
          onScroll={handleMobileScroll}
          className="flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth scrollbar-none [&::-webkit-scrollbar]:hidden px-4 py-2"
        >
          {mockProjects.map((project) => (
            <div key={project.id} className="snap-center shrink-0 w-70">
              <ProjectCard data={project} />
            </div>
          ))}
        </div>

        {/* mobile DOT scroll */}
        <div className="flex justify-center items-center gap-1.5 mt-6">
          {mockProjects.map((_, i) => (
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
      </div>

      {/* ========================= */}
      {/*         VERSION PC        */}
      {/* ========================= */}

      <div className="hidden md:block w-full">
        {!isExpanded ? (
          <div className="flex flex-wrap justify-center gap-6 w-full">
            {mockProjects.slice(0, 3).map((project) => (
              <div key={project.id} className="w-80">
                <ProjectCard data={project} />
              </div>
            ))}
          </div>
        ) : (
          <div className="w-full flex justify-center">
            <div
              ref={desktopCarouselRef}
              onScroll={updateScrollButtons}
              className="grid grid-rows-2 grid-flow-col auto-cols-80 gap-6 overflow-x-auto scroll-smooth scrollbar-none [&::-webkit-scrollbar]:hidden max-w-255 px-2 py-4"
            >
              {mockProjects.map((project) => (
                <div key={project.id} className="w-[320px]">
                  <ProjectCard data={project} />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Boutons PC */}
        {mockProjects.length > 3 && (
          <div className="flex items-center justify-center gap-4 mt-12">
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
    </section>
  );
}
