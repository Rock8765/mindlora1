import { createFileRoute } from "@tanstack/react-router";
// @ts-ignore
import EarlyAccess from "@/pages/EarlyAccess";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/early-access")({
  component: EarlyAccess,
  head: () =>
    pageHead({
      path: "/early-access",
      canonicalPath: "/book-meeting",
      noindex: true,
      title: "Mindlora for Hiring Teams",
      description:
        "Book a meeting to scope outsourced HR, technical and coding interviews for your hiring team.",
      image: "book-meeting",
    }),
});
