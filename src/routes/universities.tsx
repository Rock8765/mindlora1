import { createFileRoute } from "@tanstack/react-router";
// @ts-ignore
import Universities from "@/pages/Universities";
import { pageHead } from "@/lib/seo";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/universities")({
  component: Universities,
  head: () =>
    pageHead({
      path: "/universities",
      title: "Campus Hiring & Bulk AI Screening India | Mindlora",
      description: "Run campus drives without extra screening headcount. Mindlora interviews every student, scores them against your bar and returns ranked shortlists fast.",
      image: "products",
      breadcrumbs: [{"name":"Campus Hiring","path":"/universities"}],
    }),
});
