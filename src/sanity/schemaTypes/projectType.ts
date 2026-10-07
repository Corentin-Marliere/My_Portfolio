import { defineField, defineType } from "sanity";

export const projectType = defineType({
  name: "project",
  title: "Projet",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Titre du projet",
      type: "string",
      validation: (rule) => rule.required().error("Le titre est obligatoire"),
    }),
    defineField({
      name: "slug",
      title: "Slug (URL)",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (rule) => rule.required().error("Le slug est obligatoire"),
    }),
    defineField({
      name: "order",
      title: "Ordre d'affichage",
      type: "number",
      description: "Numéro d'affichage (1 pour le premier, 2 pour le suivant...)",
      initialValue: 1,
    }),
    defineField({
      name: "coverImage",
      title: "Image de couverture",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: (rule) => rule.required().error("L'image de couverture est obligatoire"),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 4,
      validation: (rule) => rule.required().error("La description est obligatoire"),
    }),
    defineField({
      name: "tags",
      title: "Technologies / Tags",
      type: "array",
      of: [{ type: "string" }],
      options: {
        layout: "tags",
      },
      description: "Ex: Next.js, TypeScript, TailwindCSS, PostgreSQL...",
    }),
    defineField({
      name: "competencies",
      title: "Compétences RNCP validées",
      type: "array",
      of: [{ type: "string" }],
      description:
        "Compétences clés du Titre 38436 démontrées par ce projet (ex: C7 - Développer le prototype de la solution web)",
    }),
    defineField({
      name: "githubURL",
      title: "Lien GitHub",
      type: "url",
      description: "URL du repository GitHub (laisser vide si privé)",
    }),
    defineField({
      name: "projectURL",
      title: "Lien Démo / En ligne",
      type: "url",
      description: "URL du site en production ou de la démo (optionnel)",
    }),
  ],
  orderings: [
    {
      title: "Ordre personnalisé",
      name: "orderAsc",
      by: [{ field: "order", direction: "asc" }],
    },
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "order",
      media: "coverImage",
    },
    prepare({ title, subtitle, media }) {
      return {
        title,
        subtitle: subtitle ? `Position #${subtitle}` : undefined,
        media,
      };
    },
  },
});

