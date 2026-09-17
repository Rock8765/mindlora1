import { createFileRoute } from "@tanstack/react-router";
// @ts-ignore
import FeaturePage from "@/pages/FeaturePage";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/coding-interview")({
  component: () => <FeaturePage slug="coding-interview" />,
  head: () =>
    pageHead({
      path: "/coding-interview",
      title: "AI Coding Interview Platform for Companies | Mindlora",
      description: "Run live AI coding interviews with instant review of correctness, complexity and reasoning, giving evidence-backed results for every applicant screened.",
      image: "features",
      breadcrumbs: [{"name":"Products","path":"/products"},{"name":"Coding Interview","path":"/coding-interview"}],
    }),
});
