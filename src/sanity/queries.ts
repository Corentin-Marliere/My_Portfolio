import { groq } from "next-sanity";
import { client } from "./client";
import { Project } from "@/components/ProjectsCard";

export const PROJECTS_QUERY = groq`
  *[_type == "project"] | order(order asc, _createdAt desc) {
    "id": _id,
    title,
    description,
    "coverURL": coverImage.asset->url,
    tags,
    competencies,
    githubURL,
    projectURL
  }
`;

export async function getProjects(): Promise<Project[]> {
  try {
    const projects = await client.fetch<Project[]>(PROJECTS_QUERY);
    return projects || [];
  } catch (error) {
    console.error("Erreur lors de la récupération des projets Sanity :", error);
    return [];
  }
}

