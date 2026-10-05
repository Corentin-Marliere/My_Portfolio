export default function CompetenciesSection() {
  const blocs = [
    {
      title: "CADRER UN PROJET ET CONCEPTUALISER UNE SOLUTION WEB",
      competencies: [
        {
          id: "C1",
          title: "Rédiger un cahier des charges",
          project: "E-Commerce Next.js",
        },
        {
          id: "C2",
          title: "Rédiger des spécifications techniques",
          project: "Task Manager Kanban",
        },
        {
          id: "C3",
          title: "Déployer un environnement de travail",
          project: "Clone Spotify",
        },
        {
          id: "C4",
          title: "Réaliser une maquette",
          project: "E-Commerce Next.js",
        },
        {
          id: "C5",
          title: "Identifier les fonctionnalités à développer",
          project: "API REST & Auth",
        },
        {
          id: "C6",
          title: "Rédiger une présentation",
          project: "E-Commerce Next.js",
        },
      ],
    },
    {
      title: "DÉVELOPPER UNE SOLUTION WEB",
      competencies: [
        {
          id: "C7",
          title: "Développer le prototype",
          project: "Projet Gaming HTML5",
        },
        {
          id: "C8",
          title: "Rédiger le code de la solution",
          project: "Projet Gaming HTML5",
        },
        {
          id: "C9",
          title: "Intégrer les différents éléments",
          project: "Projet Gaming HTML5",
        },
        {
          id: "C10",
          title: "Implémenter la partie front-end",
          project: "Clone Spotify",
        },
        {
          id: "C11",
          title: "Implémenter la logique et la base de données",
          project: "API REST & Auth",
        },
        {
          id: "C12",
          title: "Implémenter des règles d'authentification",
          project: "API REST & Auth",
        },
        {
          id: "C13",
          title: "Implémenter un plan de tests",
          project: "API REST & Auth",
        },
        {
          id: "C14",
          title: "Déployer une application web",
          project: "E-Commerce Next.js",
        },
      ],
    },
    {
      title: "DÉPLOYER UN SYSTÈME D'ASSURANCE QUALITÉ",
      competencies: [
        {
          id: "C15",
          title: "Rédiger une documentation technique",
          project: "API REST & Auth",
        },
        {
          id: "C16",
          title: "Rédiger une documentation utilisateur",
          project: "Task Manager Kanban",
        },
        {
          id: "C17",
          title: "Monitorer le lancement",
          project: "Dashboard Analytics",
        },
        {
          id: "C18",
          title: "Identifier des améliorations qualitatives et de performance",
          project: "Dashboard Analytics",
        },
        {
          id: "C19",
          title: "Analyser la qualité de l'ergonomie et de l'accessibilité",
          project: "Dashboard Analytics",
        },
        {
          id: "C20",
          title: "Rédiger un document argumentatif",
          project: "Dashboard Analytics",
        },
      ],
    },
  ];

  return (
    <section id="competences" className="max-w-7xl mx-auto px-6 py-20">
      {/* Section Header */}
      <div className="mb-12">
        <p className="font-mono text-xs sm:text-sm text-[#ffd700] font-semibold tracking-wider mb-2">
          {"// RÉFÉRENTIEL DE COMPÉTENCES RNCP"}
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
          Compétences validées
        </h2>
        <p className="text-gray-300 text-sm md:text-base max-w-2xl">
          Les 20 compétences du titre RNCP 38436, regroupées par bloc de
          compétences, avec le projet qui démontre chacune d&apos;elles.
        </p>
      </div>

      {/* RNCP GRID */}
      <div className="bg-[#0c1322]/85 border border-white/10 rounded-2xl p-6 sm:p-8 lg:p-10 xl:p-12 shadow-2xl backdrop-blur-md">
        <div className="grid grid-cols-1 lg:grid-cols-3 divide-y lg:divide-y-0 divide-white/10">
          {blocs.map((bloc, blocIdx) => (
            <div
              key={blocIdx}
              className={`
                ${blocIdx === 0 ? "lg:pr-8 xl:pr-10" : ""}
                ${blocIdx === 1 ? "pt-8 lg:pt-0 lg:px-8 xl:px-10 lg:border-x lg:border-white/10" : ""}
                ${blocIdx === 2 ? "pt-8 lg:pt-0 lg:pl-8 xl:pl-10" : ""}
              `}
            >
              <h3 className="text-amber-400 font-bold text-xs sm:text-sm tracking-wider uppercase mb-6 leading-snug">
                {bloc.title}
              </h3>

              <div className="space-y-4">
                {bloc.competencies.map((comp) => (
                  <div key={comp.id} className="space-y-1">
                    <div className="flex items-baseline gap-2">
                      <span className="font-mono text-amber-400 font-bold text-xs sm:text-sm shrink-0">
                        {comp.id}
                      </span>
                      <h4 className="text-white text-xs sm:text-sm font-medium leading-snug">
                        {comp.title}
                      </h4>
                    </div>
                    <p className="text-[11px] font-mono tracking-wider uppercase text-cyan-400/80 pl-6 sm:pl-7">
                      {comp.project}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
