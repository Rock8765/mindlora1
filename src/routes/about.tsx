import { createFileRoute } from "@tanstack/react-router";
// @ts-ignore
import About from "@/pages/About";
import { pageHead, localBusinessSchema } from "@/lib/seo";

export const Route = createFileRoute("/about")({
  component: About,
  head: () =>
    pageHead({
      path: "/about",
      title: "About Mindlora Private Limited | Our Team",
      description:
        "Meet Mindlora Private Limited, the Assam-registered company helping Indian hiring teams outsource structured candidate screening and technical interviews.",
      image: "about",
      breadcrumbs: [{ name: "About", path: "/about" }],
      schema: [localBusinessSchema],
    }),
});
