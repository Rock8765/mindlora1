import { createFileRoute } from "@tanstack/react-router";
// @ts-ignore
import FeaturePage from "@/pages/FeaturePage";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/ai-interview")({
  component: () => <FeaturePage slug="ai-interview" />,
  head: () =>
    pageHead({
      path: "/ai-interview",
      title: "AI HR Interview Screening in India | Mindlora",
      description: "Mindlora's AI HR interview screening asks adaptive behavioural and culture-fit questions, then scores every candidate against your approved hiring bar.",
      image: "features",
      breadcrumbs: [{"name":"Products","path":"/products"},{"name":"AI HR Screening","path":"/ai-interview"}],
    }),
});
