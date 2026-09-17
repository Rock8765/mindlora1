import { createFileRoute } from "@tanstack/react-router";
// @ts-ignore
import Resources from "@/pages/Resources";

export const Route = createFileRoute("/resources")({
  component: Resources,
  head: () => ({
    meta: [
      { title: "Hiring Resources — Mindlora" },
      { name: "description", content: "Guides and templates for structured screening, scorecards, technical interviews, and hiring operations." },
      { property: "og:title", content: "Hiring Resources — Mindlora" },
      { property: "og:description", content: "Guides and templates for structured screening, scorecards, technical interviews, and hiring operations." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://mindlora.com/resources" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:title", content: "Hiring Resources — Mindlora" },
      { name: "twitter:description", content: "Guides and templates for structured screening, scorecards, technical interviews, and hiring operations." },
    ],
    links: [{ rel: "canonical", href: "https://mindlora.com/resources" }],
  }),
});
