import { createFileRoute } from "@tanstack/react-router";
// @ts-ignore
import FeaturePage from "@/pages/FeaturePage";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/communication-analysis")({
  component: () => <FeaturePage slug="communication-analysis" />,
  head: () =>
    pageHead({
      path: "/communication-analysis",
      title: "AI Communication Assessment for Hiring | Mindlora",
      description: "Measure clarity, structure, pace and evidence in every candidate answer, with communication scores your recruiters can defend to hiring managers.",
      image: "features",
      breadcrumbs: [{"name":"Products","path":"/products"},{"name":"Communication Assessment","path":"/communication-analysis"}],
    }),
});
