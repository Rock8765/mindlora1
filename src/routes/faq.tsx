import { createFileRoute } from "@tanstack/react-router";
// @ts-ignore
import FAQ from "@/pages/FAQ";
// @ts-ignore
import { faqs, extraFaqs } from "@/data/content";
import { pageHead, faqSchema } from "@/lib/seo";

export const Route = createFileRoute("/faq")({
  component: FAQ,
  head: () =>
    pageHead({
      path: "/faq",
      title: "AI Recruitment Interview FAQ for Employers | Mindlora",
      description:
        "Answers on role setup, AI candidate interviews, scorecards, DPDP-ready security, ATS integrations and custom quotations for Indian hiring teams.",
      image: "features",
      breadcrumbs: [{ name: "FAQ", path: "/faq" }],
      schema: [faqSchema([...faqs, ...extraFaqs])],
    }),
});
