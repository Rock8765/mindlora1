import { createFileRoute } from "@tanstack/react-router";
// @ts-ignore
import FAQ from "@/pages/FAQ";
// @ts-ignore
import { faqs } from "@/data/content";

export const Route = createFileRoute("/faq")({
  component: FAQ,
  head: () => ({
    meta: [
      { title: "Hiring Interview FAQ — Mindlora" },
      { name: "description", content: "Answers about role setup, candidate interviews, scorecards, security, integrations, and custom quotations." },
      { property: "og:title", content: "Hiring Interview FAQ — Mindlora" },
      { property: "og:description", content: "Answers about role setup, candidate interviews, scorecards, security, integrations, and custom quotations." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://mindlora.com/faq" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:title", content: "Hiring Interview FAQ — Mindlora" },
      { name: "twitter:description", content: "Answers about role setup, candidate interviews, scorecards, security, integrations, and custom quotations." },
    ],
    links: [{ rel: "canonical", href: "https://mindlora.com/faq" }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map(({ q, a }: { q: string; a: string }) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })) }) }],
  }),
});
