"use client";

import { useState } from "react";
import Image from "next/image";
import Tag from "./Tag";

export type Project = {
  id: string;
  coverURL: string;
  title: string;
  tags: string[];
  description: string;
  githubURL?: string;
  projectURL?: string;
  competencies: string[];
};

type ProjectCardProps = {
  data: Project;
};

export default function ProjectCard({ data }: ProjectCardProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* ===================== */}
      {/*         CARTE         */}
      {/* ===================== */}
      <article
        onClick={() => setIsOpen(true)}
        className="bg-[#0c1322]/85 backdrop-blur-md border border-white/10 rounded-xl p-4 cursor-pointer hover:border-cyan-400/40 hover:scale-[1.02] hover:shadow-[0_0_25px_rgba(56,189,248,0.12)] transition-all shadow-xl"
      >
        <Image
          src={data.coverURL}
          alt={data.title}
          width={600}
          height={400}
          className="rounded-lg object-cover w-full h-48"
        />
        <h2 className="text-xl font-bold text-white text-center my-2">
          {data.title}
        </h2>
        <div className="flex flex-wrap justify-center gap-1.5 my-2">
          {data.tags.map((f, i) => (
            <Tag key={i} size="sm">
              {f}
            </Tag>
          ))}
        </div>
        {data.competencies[0] && (
          <div className="mt-3 pt-3 border-t border-white/10 text-center">
            <span className="text-[11px] uppercase tracking-wider text-white/50 block font-semibold">
              Compétence clé
            </span>
            <p className="text-xs text-[#ffd700] font-medium mt-0.5 line-clamp-2">
              {data.competencies[0]}
            </p>
          </div>
        )}
      </article>

      {/* ===================== */}
      {/*         MODALE        */}
      {/* ===================== */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="bg-[#0c1322] border border-white/10 p-6 rounded-xl max-w-lg w-full max-h-[90vh] overflow-y-auto shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div>
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold text-white ">{data.title}</h3>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-gray-400 hover:text-white text-xl p-1 font-bold"
                >
                  ✕
                </button>
              </div>
              <Image
                src={data.coverURL}
                alt={data.title}
                width={600}
                height={400}
                className="rounded-lg object-cover w-full h-48"
              />
            </div>
            <div>
              <p className="text-gray-300 text-sm leading-relaxed my-4">
                {data.description}
              </p>
              <div>
                <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-2">
                  Technologies :
                </h4>
                <div className="flex flex-wrap justify-center gap-2 mb-6">
                  {data.tags.map((f, i) => (
                    <Tag key={i} size="md">
                      {f}
                    </Tag>
                  ))}
                </div>
                <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-2">
                  Compétences RNCP :
                </h4>
                <ul className="space-y-2">
                  {data.competencies.map((comp, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 p-3 rounded-lg bg-white/5 border border-white/10 text-sm text-gray-200"
                    >
                      <span className="text-emerald-400 font-bold shrink-0">
                        ✓
                      </span>
                      <span>{comp}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="flex justify-center items-center gap-4 mt-8">
              {data.githubURL && (
                <a
                  href={data.githubURL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-lg font-medium text-sm border border-white/20 bg-white/10 hover:bg-white/20 text-white transition-all"
                >
                  {" "}
                  Voir sur Github
                </a>
              )}
              {data.projectURL && (
                <a
                  href={data.projectURL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-lg font-medium text-sm border border-white/20 bg-white/10 hover:bg-white/20 text-white transition-all"
                >
                  {" "}
                  Voir plus..
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
