import Tag from "@/components/Tag";

export default function HeroSection() {
  const technologies = ["HTML", "CSS", "Javascript", "Java", "REACT", "NEXT"];

  return (
    <section className="flex flex-col items-center justify-center min-h-screen p-8 text-center">
      <div className="max-w-200">
        <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-[1.2]">
          Bonjour, je suis{" "}
          <span className="text-[#ffd700] block">Corentin MARLIERE</span>
        </h1>
        <p className="text-xl md:text-2xl font-medium mb-6 opacity-90">
          Etudiant Développeur Web et Web mobile !
        </p>
        <p className="text-base md:text-lg mb-10 opacity-[0.85] leading-[1.8]">
          Je crée des applications web modernes, performantes et accessibles
        </p>
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {technologies.map((tech, index) => (
            <Tag key={index}>{tech}</Tag>
          ))}
        </div>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="#projects"
            className="px-8 py-3.5 rounded-lg font-semibold bg-white text-[#364AB0] hover:-translate-y-0.5 transition-all shadow-lg"
          >
            Voir mes projets
          </a>
          <a
            href="#contact"
            className="px-8 py-3.5 rounded-lg font-semibold border-2 border-white text-white hover:bg-white hover:text-[#364AB0] transition-all"
          >
            Me contacter
          </a>
        </div>
      </div>
    </section>
  );
}
