import { createFileRoute } from "@tanstack/react-router";
// @ts-ignore
import FeaturePage from "@/pages/FeaturePage";

export const Route = createFileRoute("/career-coach")({
  component: () => <FeaturePage slug="career-coach" />,
  head: () => ({
    meta: [
      { title: "Ranked Candidate Shortlisting — Mindlora" },
      { name: "description", content: "Rank candidates against your approved role rubric and inspect the evidence behind every result." },
      { property: "og:title", content: "Ranked Candidate Shortlisting — Mindlora" },
      { property: "og:description", content: "Rank candidates against your approved role rubric and inspect the evidence behind every result." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://mindlora.com/career-coach" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:title", content: "Ranked Candidate Shortlisting — Mindlora" },
      { name: "twitter:description", content: "Rank candidates against your approved role rubric and inspect the evidence behind every result." },
    ],
    links: [{ rel: "canonical", href: "https://mindlora.com/career-coach" }],
  }),
});
