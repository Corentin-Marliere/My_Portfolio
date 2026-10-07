"use client";

import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

type NavItem = {
  label: string;
  href: string;
  tag: string;
};

const NAV_ITEMS: NavItem[] = [
  { label: "Accueil", href: "#hero", tag: "Accueil" },
  { label: "About me", href: "#parcours", tag: "About me" },
  { label: "Projets", href: "#projects", tag: "Projets" },
  { label: "Compétences", href: "#competences", tag: "Compétences" },
  { label: "Contact", href: "#contact", tag: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState("#hero");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const isScrollingRef = useRef(false);
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      if (isScrollingRef.current) return;

      const triggerPoint = window.innerHeight * 0.35;

      let currentSection = "#hero";
      for (const item of NAV_ITEMS) {
        const el = document.querySelector(item.href);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= triggerPoint) {
            currentSection = item.href;
          }
        }
      }

      if (
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 50
      ) {
        currentSection = "#contact";
      }

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
    };
  }, []);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    e.preventDefault();
    const target = document.querySelector(href);

    if (target) {
      isScrollingRef.current = true;
      setActiveSection(href);
      setIsMobileMenuOpen(false);

      target.scrollIntoView({ behavior: "smooth", block: "start" });

      (e.currentTarget as HTMLElement)?.blur();

      window.history.pushState(null, "", href);

      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
      scrollTimeoutRef.current = setTimeout(() => {
        isScrollingRef.current = false;
      }, 850);
    }
  };

  if (pathname?.startsWith("/studio")) {
    return null;
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 pointer-events-none">
      {/* =============== */}
      {/* DESKTOP VERSION */}
      {/* =============== */}
      <nav
        aria-label="Navigation principale"
        className={`hidden md:flex pointer-events-auto fixed left-1/2 -translate-x-1/2 items-center gap-1 rounded-full px-4 py-2 transition-all duration-300 ${
          isScrolled
            ? "top-4 bg-[#0a1526]/85 backdrop-blur-md border border-white/10 shadow-2xl shadow-black/40"
            : "top-6 bg-transparent border border-transparent shadow-none backdrop-blur-none"
        }`}
      >
        <div className="flex items-center gap-1 text-sm font-mono">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.href;
            return (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`relative px-3 py-1.5 rounded-full text-xs lg:text-sm font-medium transition-all duration-300 outline-none select-none flex items-center justify-center border ${
                  isActive
                    ? "bg-cyan-950/60 border-cyan-500/40 text-cyan-300 shadow-xs shadow-cyan-400/20 font-semibold"
                    : "border-transparent text-gray-400 hover:text-gray-200 hover:bg-white/5"
                }`}
              >
                {isActive ? (
                  <span className="flex items-center gap-1">
                    <span className="text-cyan-500/70 text-xs">&lt;</span>
                    <span className="text-cyan-300">{item.tag}</span>
                    <span className="text-cyan-500/70 text-xs">/&gt;</span>
                  </span>
                ) : (
                  <span>{item.label}</span>
                )}
              </a>
            );
          })}
        </div>

        <div className="pl-2 ml-1 border-l border-white/10 flex items-center">
          <a
            href="/docs/CV_Corentin_Marliere.pdf"
            download="CV_Corentin_Marliere.pdf"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#ffd700] hover:bg-[#ffd700]/90 text-slate-950 font-bold text-xs tracking-wide shadow-md shadow-[#ffd700]/20 hover:scale-105 transition-all cursor-pointer"
            title="Télécharger mon CV (PDF)"
          >
            <span>CV</span>
            <svg
              className="w-3.5 h-3.5"
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
          </a>
        </div>
      </nav>

      {/* ============== */}
      {/* MOBILE VERSION */}
      {/* ============== */}
      <div className="md:hidden pointer-events-auto fixed top-3 left-4 right-4">
        <div
          className={`rounded-full px-4 py-2.5 flex items-center justify-between transition-all duration-300 ${
            isScrolled || isMobileMenuOpen
              ? "bg-[#0a1526]/90 backdrop-blur-md border border-white/10 shadow-2xl shadow-black/40"
              : "bg-transparent border border-transparent shadow-none backdrop-blur-none"
          }`}
        >
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, "#hero")}
            className="font-mono text-sm font-bold text-white flex items-center gap-1"
          >
            <span className="text-gray-500">&lt;</span>
            <span className="text-cyan-400">CM</span>
            <span className="text-gray-500">/&gt;</span>
          </a>

          <div className="flex items-center gap-2">
            <a
              href="/docs/CV_Corentin_Marliere.pdf"
              download="CV_Corentin_Marliere.pdf"
              className="px-2.5 py-1 rounded-full bg-[#ffd700] text-slate-950 font-bold text-xs"
            >
              CV
            </a>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-1.5 rounded-lg text-gray-300 hover:text-white transition-colors focus:outline-none"
              aria-label={
                isMobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"
              }
            >
              {isMobileMenuOpen ? (
                <svg
                  className="w-5 h-5 text-gray-200"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="w-5 h-5 text-gray-200"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="mt-2.5 bg-[#0a1526]/95 backdrop-blur-xl border border-white/10 rounded-2xl p-5 shadow-2xl flex flex-col gap-2 font-mono text-sm">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.href;
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`px-4 py-2.5 rounded-xl transition-all flex items-center justify-between border ${
                    isActive
                      ? "bg-cyan-950/60 border-cyan-500/40 text-cyan-300 font-semibold"
                      : "border-transparent text-gray-300 hover:text-white hover:bg-white/5"
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && (
                    <span className="text-xs text-cyan-400">
                      &lt;{item.tag}/&gt;
                    </span>
                  )}
                </a>
              );
            })}

            <div className="pt-3 mt-1 border-t border-white/10">
              <a
                href="/docs/CV_Corentin_Marliere.pdf"
                download="CV_Corentin_Marliere.pdf"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-[#ffd700] text-slate-950 font-bold text-xs"
              >
                <span>Télécharger mon CV (PDF)</span>
                <svg
                  className="w-3.5 h-3.5"
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
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
