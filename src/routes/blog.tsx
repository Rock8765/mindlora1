import { createFileRoute } from "@tanstack/react-router";
// @ts-ignore
import Blog from "@/pages/Blog";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/blog")({
  component: Blog,
  head: () =>
    pageHead({
      path: "/blog",
      title: "AI Hiring & Recruitment Insights Blog | Mindlora",
      description: "Practical articles on AI technical interviews, DPDP compliance for hiring tools and reducing time-to-hire with AI screening for Indian hiring teams.",
      image: "resources",
      breadcrumbs: [{"name":"Blog","path":"/blog"}],
    }),
});
