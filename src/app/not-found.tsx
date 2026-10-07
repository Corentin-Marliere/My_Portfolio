import Link from "next/link";
import StarryBackground from "@/components/StarryBackground";

export default function NotFound() {
  return (
    <main className="relative flex-1 flex flex-col items-center justify-center bg-[#060b13] text-white px-4 sm:px-6 py-3 sm:py-6 overflow-hidden select-none">
      <StarryBackground />

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 sm:w-96 h-64 sm:h-96 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-lg w-full text-center flex flex-col items-center my-auto">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 font-mono text-[11px] sm:text-xs text-cyan-300 mb-2 sm:mb-4 shadow-md shadow-cyan-950/40">
          <span className="w-2 h-2 rounded-full bg-red-400 animate-pulse" />
          <span>&lt;Error 404 /&gt;</span>
        </div>

        <h1 className="text-6xl sm:text-8xl md:text-9xl font-black font-mono tracking-tight bg-linear-to-b from-white via-cyan-100 to-cyan-500/30 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(56,189,248,0.25)] select-none leading-none">
          404
        </h1>

        <h2 className="text-lg sm:text-2xl md:text-3xl font-bold text-white mt-2 sm:mt-3 mb-1.5 sm:mb-2.5 tracking-tight">
          Perdu dans l&apos;espace...
        </h2>
        <p className="text-gray-300 text-xs sm:text-sm md:text-base leading-relaxed max-w-xs sm:max-w-md mx-auto mb-4 sm:mb-8">
          Vers l&apos;infini et au-delà ! Mais cette page semble s&apos;être
          volatilisée dans le cosmos ou n&apos;a jamais existé.
        </p>

        <div className="flex flex-row items-center justify-center gap-2.5 sm:gap-4 w-auto">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-1.5 px-4 py-2 sm:px-6 sm:py-3 rounded-xl bg-[#ffd700] hover:bg-[#ffd700]/90 text-slate-950 font-bold text-xs sm:text-sm tracking-wide shadow-md shadow-[#ffd700]/20 hover:scale-105 transition-all cursor-pointer whitespace-nowrap"
          >
            <svg
              className="w-3.5 h-3.5 sm:w-4 sm:h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            <span>Accueil</span>
          </Link>

          <Link
            href="/#contact"
            className="inline-flex items-center justify-center px-4 py-2 sm:px-6 sm:py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/15 hover:border-white/30 text-white font-medium text-xs sm:text-sm transition-all cursor-pointer hover:scale-105 shadow-xs whitespace-nowrap"
          >
            Me contacter
          </Link>
        </div>
      </div>
    </main>
  );
}
