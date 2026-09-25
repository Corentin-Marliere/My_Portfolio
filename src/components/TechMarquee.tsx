import { IconType } from "react-icons";
import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiSpringboot,
  SiPhp,
  SiNodedotjs,
  SiMarkdown,
  SiGit,
  SiGithub,
  SiIntellijidea,
  SiDocker,
  SiPostgresql,
  SiMongodb,
  SiPostman,
  SiVite,
  SiFigma,
  SiJira,
  SiTrello,
  SiDatadog,
  SiLinux,
} from "react-icons/si";
import { FaJava } from "react-icons/fa6";
import { VscVscode } from "react-icons/vsc";

type TechItem = {
  name: string;
  icon: IconType;
  color: string;
};

const languages: TechItem[] = [
  { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
  { name: "CSS3", icon: SiCss, color: "#1572B6" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "Next.js", icon: SiNextdotjs, color: "#FFFFFF" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "Java", icon: FaJava, color: "#ED8B00" },
  { name: "Spring Boot", icon: SiSpringboot, color: "#6DB33F" },
  { name: "PHP", icon: SiPhp, color: "#777BB4" },
  { name: "Node.js", icon: SiNodedotjs, color: "#5FA04E" },
  { name: "Markdown", icon: SiMarkdown, color: "#FFFFFF" },
];

const tools: TechItem[] = [
  { name: "Git", icon: SiGit, color: "#F05032" },
  { name: "GitHub", icon: SiGithub, color: "#FFFFFF" },
  { name: "VS Code", icon: VscVscode, color: "#007ACC" },
  { name: "IntelliJ IDEA", icon: SiIntellijidea, color: "#FE315D" },
  { name: "Docker", icon: SiDocker, color: "#2496ED" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  { name: "Postman", icon: SiPostman, color: "#FF6C37" },
  { name: "Vite", icon: SiVite, color: "#646CFF" },
  { name: "Figma", icon: SiFigma, color: "#F24E1E" },
  { name: "Jira", icon: SiJira, color: "#0052CC" },
  { name: "Trello", icon: SiTrello, color: "#0079BF" },
  { name: "DataDog", icon: SiDatadog, color: "#632CA6" },
  { name: "Linux", icon: SiLinux, color: "#FCC624" },
];

export default function TechMarquee() {
  const row1 = [...languages, ...languages, ...languages, ...languages];
  const row2 = [...tools, ...tools, ...tools, ...tools];

  return (
    <div className="relative w-full overflow-hidden py-4 flex flex-col gap-3 select-none text-left">
      <div className="animate-marquee gap-3 flex">
        {row1.map((item, index) => {
          const Icon = item.icon;
          return (
            <div
              key={index}
              className="flex items-center gap-2.5 px-4 py-2 rounded-xl bg-[#0e172f] border border-blue-500/20 shadow-md text-white font-medium text-sm transition-colors duration-200 hover:border-cyan-400 hover:bg-[#142247] hover:shadow-[0_0_15px_rgba(56,189,248,0.25)] cursor-default shrink-0 [outline:1px_solid_transparent]"
            >
              <Icon
                className="w-4 h-4 shrink-0"
                style={{ color: item.color }}
              />
              <span>{item.name}</span>
            </div>
          );
        })}
      </div>

      <div className="animate-marquee-reverse gap-2.5 flex">
        {row2.map((item, index) => {
          const Icon = item.icon;
          return (
            <div
              key={index}
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#0e172f]/60 border border-white/10 text-slate-300/80 text-xs font-medium transition-colors duration-200 hover:text-white hover:bg-[#0e172f]/90 hover:border-white/30 cursor-default shrink-0 [outline:1px_solid_transparent]"
            >
              <Icon
                className="w-3.5 h-3.5 shrink-0 opacity-75"
                style={{ color: item.color }}
              />
              <span>{item.name}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
