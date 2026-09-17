import { createFileRoute } from "@tanstack/react-router";
// @ts-ignore
import FeaturePage from "@/pages/FeaturePage";

export const Route = createFileRoute("/communication-analysis")({
  component: () => <FeaturePage slug="communication-analysis" />,
  head: () => ({
    meta: [
      { title: "Candidate Communication Analysis — Mindlora" },
      { name: "description", content: "Assess candidate clarity, structure, relevance, and delivery alongside role-specific interview evidence." },
      { property: "og:title", content: "Candidate Communication Analysis — Mindlora" },
      { property: "og:description", content: "Assess candidate clarity, structure, relevance, and delivery alongside role-specific interview evidence." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://mindlora.com/communication-analysis" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:title", content: "Candidate Communication Analysis — Mindlora" },
      { name: "twitter:description", content: "Assess candidate clarity, structure, relevance, and delivery alongside role-specific interview evidence." },
    ],
    links: [{ rel: "canonical", href: "https://mindlora.com/communication-analysis" }],
  }),
});
