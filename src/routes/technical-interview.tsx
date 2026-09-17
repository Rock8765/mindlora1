import { createFileRoute } from "@tanstack/react-router";
// @ts-ignore
import FeaturePage from "@/pages/FeaturePage";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/technical-interview")({
  component: () => <FeaturePage slug="technical-interview" />,
  head: () =>
    pageHead({
      path: "/technical-interview",
      title: "AI Technical Interview for Hiring Teams | Mindlora",
      description: "Role-specific AI technical interviews covering system design and domain depth, scored with transcript evidence so your team only meets strong candidates.",
      image: "features",
      breadcrumbs: [{"name":"Products","path":"/products"},{"name":"Technical Interview","path":"/technical-interview"}],
    }),
});
