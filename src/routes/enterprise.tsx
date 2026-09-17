import { createFileRoute } from "@tanstack/react-router";
// @ts-ignore
import Enterprise from "@/pages/Enterprise";

export const Route = createFileRoute("/enterprise")({
  component: Enterprise,
  head: () => ({
    meta: [
      { title: "Enterprise Recruitment Interviews — Mindlora" },
      { name: "description", content: "Scale structured candidate interviews with role controls, auditability, scorecards, and shortlists." },
      { property: "og:title", content: "Enterprise Recruitment Interviews — Mindlora" },
      { property: "og:description", content: "Scale structured candidate interviews with role controls, auditability, scorecards, and shortlists." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://mindlora.com/enterprise" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:title", content: "Enterprise Recruitment Interviews — Mindlora" },
      { name: "twitter:description", content: "Scale structured candidate interviews with role controls, auditability, scorecards, and shortlists." },
    ],
    links: [{ rel: "canonical", href: "https://mindlora.com/enterprise" }],
  }),
});
