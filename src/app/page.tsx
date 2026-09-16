export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen p-8 bg-linear-to-br from-[#667eea] to-[#764ba2]">
      <div className="max-w-200 text-center text-white">
        <h1 className="text-5xl font-bold mb-4 leading-[1.2]">
          Bonjour, je suis <span className="text-[#ffd700] block">Corentin MARLIERE</span>
        </h1>
        <p className="text-2xl font-medium mb-6 opacity-90">Etudiant Développeur Web et Web mobile !</p>
        <p className="text-lg mb-10 opacity-[0.85] leading-[1.8]">
          Je crée des applications web modernes, performantes et accessibles
        </p>
        <div className="">
          <a href="#projects" className="">
            Voir mes projets
          </a>
          <a href="#contact" className="">
            Me contacter
          </a>
        </div>
      </div>
    </div>
  );
}
