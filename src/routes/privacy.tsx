import { createFileRoute } from "@tanstack/react-router";
// @ts-ignore
import Privacy from "@/pages/Privacy";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/privacy")({
  component: Privacy,
  head: () =>
    pageHead({
      path: "/privacy",
      title: "Privacy Policy & Candidate Data Use | Mindlora",
      description: "How Mindlora collects, stores and protects hiring organisation and candidate data, including India data residency, access controls and retention rules.",
      image: "about",
      breadcrumbs: [{"name":"Privacy Policy","path":"/privacy"}],
    }),
});
