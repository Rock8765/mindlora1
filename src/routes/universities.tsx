import { createFileRoute } from "@tanstack/react-router";
// @ts-ignore
import Universities from "@/pages/Universities";

export const Route = createFileRoute("/universities")({
  component: Universities,
  head: () => ({
    meta: [
      { title: "Campus Hiring Interviews — Mindlora" },
      { name: "description", content: "Run consistent, high-volume campus hiring interviews and receive evidence-backed candidate shortlists." },
      { property: "og:title", content: "Campus Hiring Interviews — Mindlora" },
      { property: "og:description", content: "Run consistent, high-volume campus hiring interviews and receive evidence-backed candidate shortlists." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://mindlora.com/universities" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:title", content: "Campus Hiring Interviews — Mindlora" },
      { name: "twitter:description", content: "Run consistent, high-volume campus hiring interviews and receive evidence-backed candidate shortlists." },
    ],
    links: [{ rel: "canonical", href: "https://mindlora.com/universities" }],
  }),
});
