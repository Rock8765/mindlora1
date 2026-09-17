import { createFileRoute } from "@tanstack/react-router";
// @ts-ignore
import Products from "@/pages/Products";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/products")({
  component: Products,
  head: () =>
    pageHead({
      path: "/products",
      title: "AI Recruitment Interview Products | Mindlora",
      description: "Explore Mindlora's AI interview products for Indian hiring teams: requirement intake, HR and technical rounds, coding tasks, scorecards and shortlisting.",
      image: "products",
      breadcrumbs: [{"name":"Products","path":"/products"}],
    }),
});
