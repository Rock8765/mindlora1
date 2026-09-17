import { createFileRoute } from "@tanstack/react-router";
// @ts-ignore
import Home from "@/pages/Home";
// @ts-ignore
import { faqs } from "@/data/content";
import { pageHead, faqSchema, SITE_URL } from "@/lib/seo";

export const Route = createFileRoute("/")({
  component: Home,
  head: () =>
    pageHead({
      path: "/",
      title: "AI Recruitment Interviews for Indian Hiring Teams | Mindlora",
      description:
        "Mindlora's AI conducts HR, technical and coding interviews on your behalf and delivers ranked, scored shortlists. Built for Indian hiring teams.",
      image: "home",
      schema: [
        faqSchema(faqs),
        {
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "Mindlora",
          url: SITE_URL,
          inLanguage: "en-IN",
        },
      ],
    }),
});
