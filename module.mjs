// @ts-check
import { module } from "@prisma/composer";
import ghostAiService from "./service.mjs";
import clerkNextjsService from "./.agents/skills/clerk-nextjs-patterns/templates/nextjs-basic-auth/service.mjs";

export default module("ghost-ai", ({ provision }) => {
  provision(ghostAiService, { id: "ghostai" });
  provision(clerkNextjsService, { id: "clerknextjs" });
});
