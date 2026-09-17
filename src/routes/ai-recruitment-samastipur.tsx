import { createFileRoute } from "@tanstack/react-router";
// @ts-ignore
import LocalCity from "@/pages/LocalCity";
// @ts-ignore
import { samastipurEn } from "@/data/local";
import { pageHead, faqSchema, localBusinessSchema } from "@/lib/seo";

export const Route = createFileRoute("/ai-recruitment-samastipur")({
  component: () => (
    <LocalCity copy={samastipurEn} altHref="/hi/ai-recruitment-samastipur" altLabel="हिंदी में पढ़ें" />
  ),
  head: () =>
    pageHead({
      path: "/ai-recruitment-samastipur",
      title: "AI Recruitment Interviews in Samastipur, Bihar | Mindlora",
      description:
        "Mindlora runs AI HR, technical and coding interviews for hiring teams in Samastipur, Bihar and across India, returning scored, ranked candidate shortlists.",
      image: "about",
      breadcrumbs: [{ name: "Samastipur", path: "/ai-recruitment-samastipur" }],
      schema: [localBusinessSchema, faqSchema(samastipurEn.faqs)],
      extraLinks: [
        { rel: "alternate", hrefLang: "en-IN", href: "/ai-recruitment-samastipur" },
        { rel: "alternate", hrefLang: "hi-IN", href: "/hi/ai-recruitment-samastipur" },
        { rel: "alternate", hrefLang: "x-default", href: "/ai-recruitment-samastipur" },
      ],
    }),
});
