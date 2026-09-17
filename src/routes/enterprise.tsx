import { createFileRoute } from "@tanstack/react-router";
// @ts-ignore
import Enterprise from "@/pages/Enterprise";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/enterprise")({
  component: Enterprise,
  head: () =>
    pageHead({
      path: "/enterprise",
      title: "Enterprise AI Recruitment Screening India | Mindlora",
      description: "Outsource candidate screening at scale. Mindlora runs high-volume AI interviews for enterprise hiring teams in India against one consistent hiring bar.",
      image: "products",
      breadcrumbs: [{"name":"Enterprise","path":"/enterprise"}],
    }),
});
