import { createFileRoute } from "@tanstack/react-router";
// @ts-ignore
import FeaturePage from "@/pages/FeaturePage";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/resume-analyzer")({
  component: () => <FeaturePage slug="resume-analyzer" />,
  head: () =>
    pageHead({
      path: "/resume-analyzer",
      title: "Job Requirement Intake & Resume Screening | Mindlora",
      description: "Turn a job description into an approved interview plan. Mindlora maps must-have skills, seniority and pass criteria before candidate screening begins.",
      image: "features",
      breadcrumbs: [{"name":"Products","path":"/products"},{"name":"Requirement Intake","path":"/resume-analyzer"}],
    }),
});
