import { createFileRoute } from "@tanstack/react-router";
// @ts-ignore
import FeaturePage from "@/pages/FeaturePage";

export const Route = createFileRoute("/resume-analyzer")({
  component: () => <FeaturePage slug="resume-analyzer" />,
  head: () => ({
    meta: [
      { title: "Hiring Requirement Intake — Mindlora" },
      { name: "description", content: "Turn a job description into an approved interview plan, competency rubric, and scoring weights." },
      { property: "og:title", content: "Hiring Requirement Intake — Mindlora" },
      { property: "og:description", content: "Turn a job description into an approved interview plan, competency rubric, and scoring weights." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://mindlora.com/resume-analyzer" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:title", content: "Hiring Requirement Intake — Mindlora" },
      { name: "twitter:description", content: "Turn a job description into an approved interview plan, competency rubric, and scoring weights." },
    ],
    links: [{ rel: "canonical", href: "https://mindlora.com/resume-analyzer" }],
  }),
});
