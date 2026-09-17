import { createFileRoute } from "@tanstack/react-router";
// @ts-ignore
import Features from "@/pages/Features";

export const Route = createFileRoute("/features")({
  component: Features,
  head: () => ({
    meta: [
      { title: "AI Recruitment Interview Features — Mindlora" },
      { name: "description", content: "Explore requirement intake, HR, technical and coding interviews, scorecards, and ranked shortlists." },
      { property: "og:title", content: "AI Recruitment Interview Features — Mindlora" },
      { property: "og:description", content: "Explore requirement intake, HR, technical and coding interviews, scorecards, and ranked shortlists." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://mindlora.com/features" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:title", content: "AI Recruitment Interview Features — Mindlora" },
      { name: "twitter:description", content: "Explore requirement intake, HR, technical and coding interviews, scorecards, and ranked shortlists." },
    ],
    links: [{ rel: "canonical", href: "https://mindlora.com/features" }],
  }),
});
