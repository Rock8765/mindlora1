import { createFileRoute } from "@tanstack/react-router";
// @ts-ignore
import Terms from "@/pages/Terms";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/terms")({
  component: Terms,
  head: () =>
    pageHead({
      path: "/terms",
      title: "Terms of Service for Hiring Teams | Mindlora",
      description: "The terms governing Mindlora organisation accounts, interview delivery, platform access, billing, confidentiality and acceptable use across India.",
      image: "about",
      breadcrumbs: [{"name":"Terms of Service","path":"/terms"}],
    }),
});
