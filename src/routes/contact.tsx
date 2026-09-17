import { createFileRoute } from "@tanstack/react-router";
// @ts-ignore
import Contact from "@/pages/Contact";
import { pageHead, localBusinessSchema } from "@/lib/seo";

export const Route = createFileRoute("/contact")({
  component: Contact,
  head: () =>
    pageHead({
      path: "/contact",
      title: "Contact Mindlora — AI Hiring Interview Support",
      description:
        "Talk to Mindlora about interview volume, role complexity, onboarding, candidate data security and a custom quotation for your hiring team in India.",
      image: "book-meeting",
      breadcrumbs: [{ name: "Contact", path: "/contact" }],
      schema: [localBusinessSchema],
    }),
});
