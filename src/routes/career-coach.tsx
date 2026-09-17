import { createFileRoute } from "@tanstack/react-router";
// @ts-ignore
import FeaturePage from "@/pages/FeaturePage";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/career-coach")({
  component: () => <FeaturePage slug="career-coach" />,
  head: () =>
    pageHead({
      path: "/career-coach",
      title: "AI Candidate Shortlisting for Hiring Teams | Mindlora",
      description: "Compare every interviewed candidate against one hiring bar and get a ranked shortlist backed by scorecards, transcripts and clear role-fit evidence.",
      image: "products",
      breadcrumbs: [{"name":"Products","path":"/products"},{"name":"Ranked Shortlisting","path":"/career-coach"}],
    }),
});
