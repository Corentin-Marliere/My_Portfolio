import Tag from "@/components/Tag";

const technologies = ["HTML", "CSS", "Javascript", "Java", "REACT", "NEXT"];

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen p-8 bg-linear-to-br from-[#667eea] to-[#764ba2]">
      <div className="max-w-200 text-center text-white">
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

        <div className="flex flex-col items-stretch md:flex-row md:justify-center gap-4">
          <a
            href="#projects"
            className="w-full md:w-auto text-center inline-block px-8 py-3.5 rounded-lg no-underline font-semibold text-base transition-all duration-300 ease-in-out bg-white text-[#364AB0] hover:-translate-y-0.5 hover:shadow-[0_10px_25px_rgba(0,0,0,0.2)]"
          >
            Voir mes projets
          </a>
          <a
            href="#contact"
            className="w-full md:w-auto text-center inline-block px-8 py-3.5 rounded-lg no-underline font-semibold text-base transition-all duration-300 ease-in-out bg-transparent text-white border-2 border-white hover:bg-white hover:text-[#364AB0] hover:-translate-y-0.5"
          >
            Me contacter
          </a>
        </div>
        <div className="flex flex-wrap justify-center gap-4 mt-8">
          {technologies.map((tech, index) => (
            <Tag key={index}>{tech}</Tag>
          ))}
        </div>
      </div>
    </div>
  );
}
