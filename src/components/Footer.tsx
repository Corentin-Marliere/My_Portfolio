"use client";

import { usePathname } from "next/navigation";
import { SiGithub } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa6";
import { FiArrowUp, FiMail } from "react-icons/fi";

export default function Footer() {
  const pathname = usePathname();

  if (pathname?.startsWith("/studio")) {
    return null;
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#070d18] border-t border-cyan-500/20 text-gray-300 overflow-hidden shrink-0">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 max-w-4xl h-px bg-linear-to-r from-transparent via-cyan-400/40 to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 py-3 sm:py-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-5">
          <div className="flex items-center gap-2.5">
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1 font-mono text-sm font-bold text-white group cursor-pointer transition-transform hover:-translate-y-0.5"
              aria-label="Retourner en haut de page"
            >
              <span className="text-cyan-400 group-hover:text-cyan-300 transition-colors">
                &lt;
              </span>
              <span className="text-white tracking-wider">CM</span>
              <span className="text-cyan-400 group-hover:text-cyan-300 transition-colors">
                /&gt;
              </span>
            </button>
            <span className="text-gray-500 font-mono text-sm">/</span>
            <span className="text-sm sm:text-base font-semibold text-white tracking-tight">
              Corentin MARLIERE
            </span>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://github.com/Corentin-Marliere"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub de Corentin"
              className="p-2.5 rounded-xl bg-[#0e172f] border border-white/10 text-gray-300 hover:text-white hover:border-white/50 hover:bg-white/10 hover:shadow-[0_0_12px_rgba(56,189,248,0.25)] transition-all group"
            >
              <SiGithub className="w-4 h-4 group-hover:scale-110 transition-transform" />
            </a>

            <a
              href="https://www.linkedin.com/in/corentin-ma/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn de Corentin"
              className="p-2.5 rounded-xl bg-[#0e172f] border border-white/10 text-gray-300 hover:text-cyan-400 hover:border-cyan-400/50 hover:bg-[#142247] hover:shadow-[0_0_12px_rgba(56,189,248,0.25)] transition-all group"
            >
              <FaLinkedin className="w-4 h-4 group-hover:scale-110 transition-transform" />
            </a>

            <a
              href="mailto:corentin-marliere@outlook.fr"
              aria-label="Envoyer un e-mail à Corentin"
              className="p-2.5 rounded-xl bg-[#0e172f] border border-white/10 text-gray-300 hover:text-[#ffd700] hover:border-[#ffd700]/50 hover:bg-[#142247] hover:shadow-[0_0_12px_rgba(255,215,0,0.25)] transition-all group"
            >
              <FiMail className="w-4 h-4 group-hover:scale-110 transition-transform" />
            </a>

            <div className="h-4 w-px bg-white/10 mx-1 hidden sm:block" />

            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-cyan-400/40 text-xs font-mono text-gray-300 hover:text-cyan-300 transition-all cursor-pointer group shadow-xs"
              aria-label="Retourner en haut de page"
            >
              <span>Haut de page</span>
              <FiArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform text-cyan-400" />
            </button>
          </div>
        </div>

        <div className="mt-3 pt-2.5 sm:mt-5 sm:pt-4 border-t border-white/5 text-center">
          <p className="text-xs text-gray-400 font-mono">
            © {new Date().getFullYear()} Corentin MARLIERE. Tous droits
            réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}
