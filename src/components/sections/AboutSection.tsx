"use client";

import React, { useState, useRef } from "react";

export default function AboutSection() {
  const [activeSkillIdx, setActiveSkillIdx] = useState(0);
  const mobileSkillsRef = useRef<HTMLDivElement>(null);

  const handleMobileSkillScroll = () => {
    if (mobileSkillsRef.current) {
      const scrollLeft = mobileSkillsRef.current.scrollLeft;
      const cardWidth = 296;
      const newIdx = Math.round(scrollLeft / cardWidth);
      setActiveSkillIdx(Math.min(Math.max(newIdx, 0), 3));
    }
  };

  const experiences = [
    {
      period: "Septembre 2025 – Novembre 2026",
      role: "Alternant Développeur Back-End",
      company: "Decathlon • Lille",
      badge: "En cours",
      badgeColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/25",
      description:
        "Développement back-end en environnement agile. Intégration d'APIs Google et monitoring applicatif temps réel avec Datadog.",
    },
    {
      period: "Novembre 2024 – Novembre 2026",
      role: "Formation Développeur Web & Web Mobile (BAC+2)",
      company: "Web@cademie by Epitech • Lille",
      badge: "En cours",
      badgeColor: "bg-cyan-500/10 text-cyan-400 border-cyan-500/25",
      description:
        "Pédagogie active 100% par projets simulant le monde de l'entreprise. Maîtrise des fondamentaux du développement fullstack (JS, PHP, SQL, React, Next.js..)",
    },
    {
      period: "2018 – 2024",
      role: "Serveur en Restauration & Brasserie",
      company: "La Flambée & Le Flore • Cambrai",
      badge: "Reconversion",
      badgeColor: "bg-amber-500/10 text-amber-400 border-amber-500/25",
      description:
        "Gestion des rushs, du stress et des imprévus. En partant de la supervision du service, et en passant par la gestion des stocks pour toujours satisfaire le client.",
    },
    {
      period: "2011 – 2018",
      role: "Lycée Hôtelier, Extra & Animation Périscolaire",
      company: "LHT • IFAC Nord • Le Touquet & Cambrai",
      badge: "Formation initiale",
      badgeColor: "bg-white/5 text-gray-400 border-white/10",
      description:
        "Obtention du BEP et du BAC en Hôtelerie tout en travaillant en extra. Première approche du monde du travail.",
    },
  ];

  const softSkills = [
    {
      icon: (
        <svg
          className="w-5 h-5 text-amber-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      ),
      title: "Gestion du stress & des rushs",
      desc: "Habitué à faire face au stress durant les services, je sais garder mon calme face aux imprévus.",
    },
    {
      icon: (
        <svg
          className="w-5 h-5 text-cyan-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      ),
      title: "Esprit d'équipe & Service",
      desc: "La restauration m'a appris la communication, l'entraide et le sens du service.",
    },
    {
      icon: (
        <svg
          className="w-5 h-5 text-emerald-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      title: "Rigueur & Organisation",
      desc: "Depuis la gestion des stocks jusqu'au coeur du service, j'ai appris à toujours m'organiser au mieux.",
    },
    {
      icon: (
        <svg
          className="w-5 h-5 text-pink-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
          />
        </svg>
      ),
      title: "Adaptabilité & Curiosité",
      desc: "Mon esprit curieux me pousse toujours à vouloir apprendre de nouvelles choses et à m'y adapter.",
    },
  ];

  return (
    <section
      id="parcours"
      className="max-w-7xl mx-auto px-6 py-24 relative overflow-hidden"
    >
      <div className="mb-14">
        <p className="font-mono text-sm tracking-wider font-semibold text-cyan-400 mb-2 flex items-center gap-1.5">
          <span className="text-gray-300">&lt;</span>
          <span className="text-cyan-400">About me</span>
          <span className="text-gray-300">/&gt;</span>
        </p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
          À propos de moi
        </h2>
      </div>

      <div className="relative">
        {/* FIL CONDUCTEUR */}
        <div className="hidden lg:block absolute pointer-events-none z-0 inset-0">
          <svg className="w-full h-full overflow-visible" fill="none">
            <path
              d="M 280 430 L 280 490 L 880 490 L 880 540"
              stroke="rgba(56, 189, 248, 0.45)"
              strokeWidth="2"
              strokeDasharray="6 4"
            />

            <circle
              cx="280"
              cy="490"
              r="4"
              fill="#38bdf8"
              className="animate-ping opacity-75"
            />
            <circle cx="280" cy="490" r="4" fill="#38bdf8" />

            <circle
              cx="880"
              cy="490"
              r="4"
              fill="#38bdf8"
              className="animate-ping opacity-75"
            />
            <circle cx="880" cy="490" r="4" fill="#38bdf8" />
          </svg>
        </div>

        {/* ===================== */}
        {/* PROFIL & PRESENTATION */}
        {/* ===================== */}

        <div className="w-full lg:max-w-xl relative z-10">
          <div className="bg-[#0a1526]/85 border border-cyan-500/20 hover:border-cyan-500/40 rounded-2xl p-6 sm:p-8 shadow-2xl backdrop-blur-md transition-all duration-300">
            <div className="flex items-center justify-between gap-3 mb-6">
              <span className="font-mono text-xs text-cyan-300 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 inline-flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Alternant chez Decathlon
              </span>
              <span className="font-mono text-xs text-gray-500">
                {"// profil"}
              </span>
            </div>

            <div className="space-y-4 text-gray-300 text-sm sm:text-base leading-relaxed">
              <p>
                Après plusieurs années passées dans la restauration où j&apos;ai
                baigné dans un environnement où la rigueur, le sang-froid et le
                sens du service sont indispensables. Ce métier m&apos;a forgé
                une capacité d&apos;adaptation permanente et le goût du travail
                bien fait.
              </p>

              <p>
                Passionné d&apos;informatique, de jeux vidéo et de streaming,
                mon envie de comprendre les technologies et de{" "}
                <strong className="text-cyan-300 font-semibold">
                  concevoir mes propres outils (bots Discord, dashboards,
                  utilitaires)
                </strong>{" "}
                m&apos;a poussé à me reconvertir dans le développement.
              </p>

              <p>
                Aujourd&apos;hui en alternance en tant que Développeur Back-End chez{" "}
                <strong className="text-white font-semibold">Décathlon</strong>{" "}
                et étudiant à la{" "}
                <strong className="text-white font-semibold">
                  Web@cademie by Epitech
                </strong>
                , je recherche une nouvelle {" "}
                <span className="text-[#ffd700] font-semibold">
                  alternance de 2 ans (BAC+3 CDA)
                </span>{" "}
                pour gagner en expérience et continuer ma montée en compétences.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
              <a
                href="/CV_Corentin_Marliere.pdf"
                download="CV_Corentin_Marliere.pdf"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#ffd700] hover:bg-[#ffd700]/90 text-slate-950 font-bold text-sm tracking-wide shadow-lg shadow-[#ffd700]/15 hover:shadow-[#ffd700]/30 hover:-translate-y-0.5 transition-all cursor-pointer group"
              >
                <svg
                  className="w-4 h-4 transition-transform group-hover:translate-y-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                  />
                </svg>
                <span>Télécharger mon CV</span>
              </a>

              <div className="flex items-center justify-center gap-2">
                <a
                  href="https://linkedin.com/in/corentin-ma"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="p-2.5 rounded-lg bg-white/5 hover:bg-cyan-500/10 border border-white/10 hover:border-cyan-500/30 text-gray-300 hover:text-cyan-300 transition-colors"
                >
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
                <a
                  href="https://github.com/corentin-marliere"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="p-2.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/25 text-gray-300 hover:text-white transition-colors"
                >
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* =========== */}
        {/* EXPERIENCES */}
        {/*  (PC Only)  */}
        {/* =========== */}
        <div className="hidden lg:block w-full lg:max-w-2xl lg:ml-auto mt-6 relative z-10">
          <div className="bg-[#0a1526]/85 border border-cyan-500/20 hover:border-cyan-500/40 rounded-2xl p-6 sm:p-8 lg:p-10 shadow-2xl backdrop-blur-md transition-all duration-300">
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/10">
              <h3 className="font-mono text-xs sm:text-sm font-semibold tracking-wider text-amber-400 uppercase flex items-center gap-2">
                <span>{"// CHRONOLOGIE & EXPÉRIENCES"}</span>
              </h3>
              <span className="font-mono text-xs text-cyan-400/80">
                Les 3 étapes importantes
              </span>
            </div>

            <div className="relative border-l border-cyan-500/30 ml-3 sm:ml-4 pl-6 sm:pl-8 space-y-9">
              {experiences.map((exp, idx) => (
                <div key={idx} className="relative group">
                  <span className="absolute -left-7.75 sm:-left-9.75 top-1.5 w-3.5 h-3.5 rounded-full bg-[#ffd700] ring-4 ring-[#ffd700]/25 transition-transform group-hover:scale-125" />

                  <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-1.5">
                    <span className="text-xs font-mono font-semibold text-gray-400">
                      {exp.period}
                    </span>
                    <span
                      className={`text-[11px] font-mono px-2 py-0.5 rounded-md border ${exp.badgeColor}`}
                    >
                      {exp.badge}
                    </span>
                  </div>

                  <h4 className="text-base sm:text-lg font-bold text-white group-hover:text-amber-300 transition-colors">
                    {exp.role}
                  </h4>
                  <p className="text-xs sm:text-sm font-medium text-cyan-300 mb-2">
                    {exp.company}
                  </p>

                  <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* FIL CONDUCTEUR */}
        <div className="hidden lg:block absolute pointer-events-none z-0 left-0 right-0 h-28 -bottom-16">
          <svg className="w-full h-full overflow-visible" fill="none">
            <path
              d="M 960 0 L 960 40 L 200 40 L 200 80"
              stroke="rgba(56, 189, 248, 0.45)"
              strokeWidth="2"
              strokeDasharray="6 4"
            />
            <circle cx="960" cy="40" r="4" fill="#38bdf8" />
            <circle
              cx="200"
              cy="40"
              r="4"
              fill="#38bdf8"
              className="animate-ping opacity-75"
            />
            <circle cx="200" cy="40" r="4" fill="#38bdf8" />
          </svg>
        </div>
      </div>

      {/* =================== */}
      {/* TRANSFERABLE SKILLS */}
      {/* =================== */}
      <div className="mt-14 lg:mt-28 relative z-10">
        <div className="flex items-center justify-between gap-3 mb-6">
          <div className="flex items-center gap-3">
            <p className="font-mono text-xs sm:text-sm text-cyan-400 tracking-wider uppercase font-semibold">
              {"// Mes Soft Skills"}
            </p>
            <div className="hidden sm:block h-px w-20 bg-linear-to-r from-cyan-500/30 to-transparent" />
          </div>
          <span className="lg:hidden font-mono text-[11px] text-cyan-400/70">
            Faire glisser ➜
          </span>
        </div>

        {/* Mobile Carousel */}
        <div
          ref={mobileSkillsRef}
          onScroll={handleMobileSkillScroll}
          className="flex lg:grid lg:grid-cols-4 gap-4 sm:gap-5 overflow-x-auto lg:overflow-visible snap-x snap-mandatory scroll-smooth scrollbar-none [&::-webkit-scrollbar]:hidden px-1 py-2 -mx-2 sm:mx-0"
        >
          {softSkills.map((skill, i) => (
            <div
              key={i}
              className="snap-center shrink-0 w-72 sm:w-80 lg:w-auto group p-5 rounded-2xl bg-[#0a1526]/85 border border-cyan-500/20 hover:border-cyan-400/50 shadow-xl backdrop-blur-md hover:-translate-y-1 transition-all duration-300"
            >
              <div className="p-2.5 rounded-xl bg-cyan-950/40 border border-cyan-500/30 w-fit mb-4 group-hover:scale-110 transition-transform">
                {skill.icon}
              </div>
              <h5 className="text-sm sm:text-base font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                {skill.title}
              </h5>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                {skill.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Swap dots for mobile */}
        <div className="flex lg:hidden justify-center items-center gap-2 mt-5">
          {softSkills.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                if (mobileSkillsRef.current) {
                  mobileSkillsRef.current.scrollTo({
                    left: i * 296,
                    behavior: "smooth",
                  });
                }
              }}
              className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                activeSkillIdx === i
                  ? "w-6 bg-cyan-400 shadow-sm shadow-cyan-400/50"
                  : "w-2 bg-white/20 hover:bg-white/40"
              }`}
              aria-label={`Compétence ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
