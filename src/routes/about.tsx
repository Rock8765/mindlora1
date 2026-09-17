import { createFileRoute } from "@tanstack/react-router";
// @ts-ignore
import About from "@/pages/About";

export const Route = createFileRoute("/about")({
  component: About,
  head: () => ({
    meta: [
      { title: "About Mindlora — Mindlora" },
      { name: "description", content: "Meet MindLoRA Private Limited, the Bihar-based team helping Indian employers outsource structured candidate interviews." },
      { property: "og:title", content: "About Mindlora — Mindlora" },
      { property: "og:description", content: "Meet MindLoRA Private Limited, the Bihar-based team helping Indian employers outsource structured candidate interviews." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://mindlora.com/about" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:title", content: "About Mindlora — Mindlora" },
      { name: "twitter:description", content: "Meet MindLoRA Private Limited, the Bihar-based team helping Indian employers outsource structured candidate interviews." },
    ],
    links: [{ rel: "canonical", href: "https://mindlora.com/about" }],
  }),
});
