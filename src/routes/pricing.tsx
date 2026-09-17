import { createFileRoute } from "@tanstack/react-router";
// @ts-ignore
import Pricing from "@/pages/Pricing";

export const Route = createFileRoute("/pricing")({
  component: Pricing,
  head: () => ({
    meta: [
      { title: "Get a Custom Quotation — Mindlora" },
      { name: "description", content: "Book a meeting for a quotation based on interview volume, role complexity, and screening depth." },
      { property: "og:title", content: "Get a Custom Quotation — Mindlora" },
      { property: "og:description", content: "Book a meeting for a quotation based on interview volume, role complexity, and screening depth." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://mindlora.com/pricing" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:title", content: "Get a Custom Quotation — Mindlora" },
      { name: "twitter:description", content: "Book a meeting for a quotation based on interview volume, role complexity, and screening depth." },
    ],
    links: [{ rel: "canonical", href: "https://mindlora.com/pricing" }],
  }),
});
