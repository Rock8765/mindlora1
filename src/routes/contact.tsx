import { createFileRoute } from "@tanstack/react-router";
// @ts-ignore
import Contact from "@/pages/Contact";

export const Route = createFileRoute("/contact")({
  component: Contact,
  head: () => ({
    meta: [
      { title: "Contact Mindlora — Mindlora" },
      { name: "description", content: "Talk to Mindlora about interview volume, role complexity, onboarding, security, and a custom quotation." },
      { property: "og:title", content: "Contact Mindlora — Mindlora" },
      { property: "og:description", content: "Talk to Mindlora about interview volume, role complexity, onboarding, security, and a custom quotation." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://mindlora.com/contact" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:title", content: "Contact Mindlora — Mindlora" },
      { name: "twitter:description", content: "Talk to Mindlora about interview volume, role complexity, onboarding, security, and a custom quotation." },
    ],
    links: [{ rel: "canonical", href: "https://mindlora.com/contact" }],
  }),
});
