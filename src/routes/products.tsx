import { createFileRoute } from "@tanstack/react-router";
// @ts-ignore
import Products from "@/pages/Products";

export const Route = createFileRoute("/products")({

  component: Products,
  head: () => ({
    meta: [
      { title: "Recruitment Interview Products — Mindlora" },
      { name: "description", content: "Explore connected tools for requirements, candidate interviews, scorecards, and ranked shortlists." },
      { property: "og:title", content: "Recruitment Interview Products — Mindlora" },
      { property: "og:description", content: "Explore connected tools for requirements, candidate interviews, scorecards, and ranked shortlists." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://mindlora.com/products" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:title", content: "Recruitment Interview Products — Mindlora" },
      { name: "twitter:description", content: "Explore connected tools for requirements, candidate interviews, scorecards, and ranked shortlists." },
    ],
    links: [{ rel: "canonical", href: "https://mindlora.com/products" }],
  }),
});
