"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import TechMarquee from "../TechMarquee";

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const photoRef = useRef<HTMLDivElement>(null);

  const [circuit, setCircuit] = useState<{
    path: string;
    corner: { x: number; y: number };
  } | null>(null);

  useEffect(() => {
    const updateCircuit = () => {
      if (!containerRef.current || !badgeRef.current || !photoRef.current) return;
      if (window.innerWidth < 1024) {
        setCircuit(null);
        return;
      }

      const containerRect = containerRef.current.getBoundingClientRect();
      const badgeRect = badgeRef.current.getBoundingClientRect();
      const photoRect = photoRef.current.getBoundingClientRect();

      const offsetBadge = 30;
      const offsetPhoto = 18;

      const startX = badgeRect.right - containerRect.left + offsetBadge;
      const startY = badgeRect.top + badgeRect.height / 2 - containerRect.top;

      const endX = photoRect.left + photoRect.width / 2 - containerRect.left;
      const endY = photoRect.top - containerRect.top - offsetPhoto;

      const path = `M ${startX} ${startY} L ${endX} ${startY} L ${endX} ${endY}`;

      setCircuit({
        path,
        corner: { x: endX, y: startY },
      });
    };

    updateCircuit();
    const timer = setTimeout(updateCircuit, 100);
    window.addEventListener("resize", updateCircuit, { passive: true });
    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", updateCircuit);
    };
  }, []);

  return (
    <section
      id="hero"
      className="relative flex flex-col justify-between min-h-screen pt-16 sm:pt-16 md:pt-20 pb-6 sm:pb-8 md:pb-12 overflow-hidden scroll-mt-24"
    >
      <div
        ref={containerRef}
        className="relative max-w-6xl mx-auto px-6 w-full flex-1 flex flex-col justify-center"
      >
        {circuit && (
          <div className="hidden lg:block absolute inset-0 pointer-events-none z-10">
            <svg className="w-full h-full overflow-visible" fill="none">
              <path
                d={circuit.path}
                stroke="rgba(56, 189, 248, 0.45)"
                strokeWidth="2"
                strokeDasharray="6 4"
              />

              <circle
                cx={circuit.corner.x}
                cy={circuit.corner.y}
                r="3.5"
                fill="#38bdf8"
              />
            </svg>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-8 lg:gap-10 items-start my-auto">
          <div className="lg:col-span-7 text-center lg:text-left flex flex-col items-center lg:items-start space-y-5 sm:space-y-5">
            <div
              ref={badgeRef}
              className="hidden sm:inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-xs font-mono text-cyan-300 shadow-xs shadow-cyan-400/20"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>&lt; Étudiant Développeur Web &amp; Web Mobile /&gt;</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-white leading-[1.15]">
              Bonjour, je suis{" "}
              <span className="text-[#ffd700] block mt-0.5 sm:mt-1">
                Corentin MARLIERE
              </span>
            </h1>

            <p className="text-sm sm:text-lg text-gray-200 font-medium max-w-xl leading-relaxed">
              Actuellement en formation à la{" "}
              <span className="text-cyan-300 font-semibold">
                Web@cademie by Epitech
              </span>{" "}
              et alternant Développeur Back-End chez{" "}
              <span className="text-white font-semibold">Décathlon</span>.
            </p>

            <p className="hidden sm:block text-sm text-gray-300/90 max-w-lg leading-relaxed">
              Développeur web junior issu d&apos;une reconversion. De la restauration au développement !
              <br />À la recherche d&apos;une nouvelle aventure en alternance pour 2 ans et un
              titre BAC+3 &lt; Concepteur Développeur d&apos;Applications /&gt;.
            </p>

            <div className="pt-2 sm:pt-3 flex flex-row items-center justify-center lg:justify-start gap-2.5 sm:gap-3 w-full sm:w-auto">
              <a
                href="#projects"
                className="flex-1 sm:flex-none px-4 sm:px-6 py-2.5 rounded-xl text-xs sm:text-sm font-semibold bg-white text-[#1b2b65] hover:bg-gray-100 hover:-translate-y-0.5 transition-all shadow-lg shadow-black/15 text-center"
              >
                Voir mes projets
              </a>
              <a
                href="#contact"
                className="flex-1 sm:flex-none px-4 sm:px-6 py-2.5 rounded-xl text-xs sm:text-sm font-semibold border border-white/70 text-white hover:bg-white hover:text-[#1b2b65] transition-all text-center"
              >
                Me contacter
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 flex justify-center lg:self-end">
            <div ref={photoRef} className="relative group">
              <div className="absolute -inset-2 bg-linear-to-r from-cyan-500/25 via-blue-500/20 to-purple-500/20 rounded-full blur-xl opacity-75 group-hover:opacity-100 transition-opacity" />

              <div className="relative p-1 sm:p-1.5 rounded-full border-2 border-cyan-400/40 bg-[#0a1526]/65 shadow-[0_0_25px_rgba(56,189,248,0.2)]">
                <div className="w-44 h-44 sm:w-56 sm:h-56 lg:w-72 lg:h-72 rounded-full overflow-hidden relative border border-white/20">
                  <Image
                    src="/images/profile_picture.jpg"
                    alt="Corentin MARLIERE"
                    fill
                    priority
                    sizes="(max-width: 640px) 176px, (max-width: 1024px) 224px, 288px"
                    className="object-cover object-center scale-100 group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full mb-4 md:mb-6 md:-rotate-2 md:scale-100 transform-gpu backface-hidden">
        <TechMarquee />
      </div>
    </section>
  );
}
