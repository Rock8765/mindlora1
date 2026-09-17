import { createFileRoute } from "@tanstack/react-router";
// @ts-ignore
import Blog from "@/pages/Blog";

export const Route = createFileRoute("/blog")({
  component: Blog,
  head: () => ({
    meta: [
      { title: "Hiring Insights — Mindlora" },
      { name: "description", content: "Practical guidance for Indian teams running candidate screening, technical interviews, and campus hiring." },
      { property: "og:title", content: "Hiring Insights — Mindlora" },
      { property: "og:description", content: "Practical guidance for Indian teams running candidate screening, technical interviews, and campus hiring." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://mindlora.com/blog" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:title", content: "Hiring Insights — Mindlora" },
      { name: "twitter:description", content: "Practical guidance for Indian teams running candidate screening, technical interviews, and campus hiring." },
    ],
    links: [{ rel: "canonical", href: "https://mindlora.com/blog" }],
  }),
});
