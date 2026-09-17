import { createFileRoute } from "@tanstack/react-router";
// @ts-ignore
import Features from "@/pages/Features";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/features")({
  component: Features,
  head: () =>
    pageHead({
      path: "/features",
      title: "AI Interview & Screening Features | Mindlora",
      description: "See how Mindlora runs AI HR, technical and coding interviews for hiring teams in India, with scorecards, evidence and ranked candidate shortlists.",
      image: "features",
      breadcrumbs: [{"name":"Features","path":"/features"}],
    }),
});
