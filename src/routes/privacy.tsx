import { createFileRoute } from "@tanstack/react-router";
// @ts-ignore
import Privacy from "@/pages/Privacy";

export const Route = createFileRoute("/privacy")({
  component: Privacy,
  head: () => ({
    meta: [
      { title: "Mindlora Privacy Policy — Mindlora" },
      { name: "description", content: "Learn how Mindlora protects hiring organization and candidate data, including security and data-control practices." },
      { property: "og:title", content: "Mindlora Privacy Policy — Mindlora" },
      { property: "og:description", content: "Learn how Mindlora protects hiring organization and candidate data, including security and data-control practices." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://mindlora.com/privacy" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:title", content: "Mindlora Privacy Policy — Mindlora" },
      { name: "twitter:description", content: "Learn how Mindlora protects hiring organization and candidate data, including security and data-control practices." },
    ],
    links: [{ rel: "canonical", href: "https://mindlora.com/privacy" }],
  }),
});
