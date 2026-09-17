import { createFileRoute } from "@tanstack/react-router";
// @ts-ignore
import FeaturePage from "@/pages/FeaturePage";

export const Route = createFileRoute("/coding-interview")({
  component: () => <FeaturePage slug="coding-interview" />,
  head: () => ({
    meta: [
      { title: "AI Coding Interviews — Mindlora" },
      { name: "description", content: "Run role-specific coding interviews with live exercises, automated tests, and evidence-backed scoring." },
      { property: "og:title", content: "AI Coding Interviews — Mindlora" },
      { property: "og:description", content: "Run role-specific coding interviews with live exercises, automated tests, and evidence-backed scoring." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://mindlora.com/coding-interview" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:title", content: "AI Coding Interviews — Mindlora" },
      { name: "twitter:description", content: "Run role-specific coding interviews with live exercises, automated tests, and evidence-backed scoring." },
    ],
    links: [{ rel: "canonical", href: "https://mindlora.com/coding-interview" }],
  }),
});
