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
      <article
        onClick={() => setIsOpen(true)}
        className="border border-white/10 rounded-xl p-4 cursor-pointer hover:border-white/30 hover:scale-[1.02] transition-all"
      >
        <Image
          src={data.coverURL}
          alt={data.title}
          width={600}
          height={400}
          className="rounded-lg object-cover w-full h-48"
        />
        <h2 className="text-xl font-bold text-white my-2">{data.title}</h2>
        <div className="flex flex-wrap gap-2 my-2">
          {data.tags.map((f, i) => (
            <Tag key={i}>{f}</Tag>
          ))}
        </div>
        {data.competencies[0] && (
          <p className="text-sm text-gray-400 mt-2">
            Compétence principale :<br />
            <span className="text-white font-medium">
              • {data.competencies[0]}
            </span>
          </p>
        )}
      </article>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="bg-[#1a1a2e] p-6 rounded-xl max-w-lg w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div>
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold text-white">{data.title}</h3>
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
                <div className="flex flex-wrap gap-2 mb-4">
                  {data.tags.map((f, i) => (
                    <Tag key={i}>{f}</Tag>
                  ))}
                </div>
                <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-2">
                  Compétences RNCP :
                </h4>
                <div className="flex flex-wrap gap-2 mb-4">
                  {data.competencies.map((f, i) => (
                    <Tag key={i}>{f}</Tag>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex justify-center gap-4 mt-6">
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
