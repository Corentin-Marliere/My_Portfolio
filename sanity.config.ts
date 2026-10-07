import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { apiVersion, dataset, projectId } from "./src/sanity/env";
import { schema } from "./src/sanity/schemaTypes";

export default defineConfig({
  basePath: "/studio",
  name: "portfolio-corentin",
  title: "Portfolio Corentin MARLIERE",
  projectId,
  dataset,
  apiVersion,
  schema,
  plugins: [structureTool()],
});

