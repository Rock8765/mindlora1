import { createFileRoute } from "@tanstack/react-router";
// @ts-ignore
import EarlyAccess from "@/pages/EarlyAccess";

export const Route = createFileRoute("/early-access")({
  component: EarlyAccess,
  head: () => ({
    meta: [
      { title: "Mindlora for Hiring Teams — Mindlora" },
      { name: "description", content: "Book a meeting to scope outsourced HR, technical, and coding interviews for your hiring team." },
      { property: "og:title", content: "Mindlora for Hiring Teams — Mindlora" },
      { property: "og:description", content: "Book a meeting to scope outsourced HR, technical, and coding interviews for your hiring team." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://mindlora.com/early-access" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:title", content: "Mindlora for Hiring Teams — Mindlora" },
      { name: "twitter:description", content: "Book a meeting to scope outsourced HR, technical, and coding interviews for your hiring team." },
    ],
    links: [{ rel: "canonical", href: "https://mindlora.com/early-access" }],
  }),
});