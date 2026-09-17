import { createFileRoute } from "@tanstack/react-router";
// @ts-ignore
import FeaturePage from "@/pages/FeaturePage";

export const Route = createFileRoute("/technical-interview")({
  component: () => <FeaturePage slug="technical-interview" />,
  head: () => ({
    meta: [
      { title: "AI Technical Interviews — Mindlora" },
      { name: "description", content: "Run role-specific technical interviews with adaptive follow-ups and transcript-backed scorecards." },
      { property: "og:title", content: "AI Technical Interviews — Mindlora" },
      { property: "og:description", content: "Run role-specific technical interviews with adaptive follow-ups and transcript-backed scorecards." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://mindlora.com/technical-interview" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:title", content: "AI Technical Interviews — Mindlora" },
      { name: "twitter:description", content: "Run role-specific technical interviews with adaptive follow-ups and transcript-backed scorecards." },
    ],
    links: [{ rel: "canonical", href: "https://mindlora.com/technical-interview" }],
  }),
});
