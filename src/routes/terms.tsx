import { createFileRoute } from "@tanstack/react-router";
// @ts-ignore
import Terms from "@/pages/Terms";

export const Route = createFileRoute("/terms")({
  component: Terms,
  head: () => ({
    meta: [
      { title: "Mindlora Terms of Service — Mindlora" },
      { name: "description", content: "Terms governing Mindlora organization accounts, platform access, billing, and acceptable use." },
      { property: "og:title", content: "Mindlora Terms of Service — Mindlora" },
      { property: "og:description", content: "Terms governing Mindlora organization accounts, platform access, billing, and acceptable use." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://mindlora.com/terms" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:title", content: "Mindlora Terms of Service — Mindlora" },
      { name: "twitter:description", content: "Terms governing Mindlora organization accounts, platform access, billing, and acceptable use." },
    ],
    links: [{ rel: "canonical", href: "https://mindlora.com/terms" }],
  }),
});
