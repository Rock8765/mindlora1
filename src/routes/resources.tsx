import { createFileRoute } from "@tanstack/react-router";
// @ts-ignore
import Resources from "@/pages/Resources";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/resources")({
  component: Resources,
  head: () =>
    pageHead({
      path: "/resources",
      title: "Hiring Insights & Screening Resources | Mindlora",
      description: "Guides, rubrics and checklists for Indian hiring teams outsourcing candidate screening, technical interviews and campus recruitment drives.",
      image: "resources",
      breadcrumbs: [{"name":"Resources","path":"/resources"}],
    }),
});
