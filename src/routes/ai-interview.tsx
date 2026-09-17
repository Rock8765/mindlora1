import { createFileRoute } from "@tanstack/react-router";
// @ts-ignore
import FeaturePage from "@/pages/FeaturePage";

export const Route = createFileRoute("/ai-interview")({
  component: () => <FeaturePage slug="ai-interview" />,
  head: () => ({
    meta: [
      { title: "AI HR Screening — Mindlora" },
      { name: "description", content: "Conduct consistent behavioral and HR screening rounds with adaptive questions and evidence-backed scorecards." },
      { property: "og:title", content: "AI HR Screening — Mindlora" },
      { property: "og:description", content: "Conduct consistent behavioral and HR screening rounds with adaptive questions and evidence-backed scorecards." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://mindlora.com/ai-interview" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:title", content: "AI HR Screening — Mindlora" },
      { name: "twitter:description", content: "Conduct consistent behavioral and HR screening rounds with adaptive questions and evidence-backed scorecards." },
    ],
    links: [{ rel: "canonical", href: "https://mindlora.com/ai-interview" }],
  }),
});
