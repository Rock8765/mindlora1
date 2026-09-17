import { createFileRoute } from "@tanstack/react-router";
// @ts-ignore
import Pricing from "@/pages/Pricing";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/pricing")({
  component: Pricing,
  head: () =>
    pageHead({
      path: "/pricing",
      canonicalPath: "/book-meeting",
      noindex: true,
      title: "Get a Custom Hiring Quotation | Mindlora",
      description:
        "Book a meeting for a Mindlora quotation based on interview volume, role complexity and screening depth for your hiring team in India.",
      image: "book-meeting",
    }),
});
