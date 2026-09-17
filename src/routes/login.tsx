import { createFileRoute } from "@tanstack/react-router";
// @ts-ignore
import Login from "@/pages/Login";

export const Route = createFileRoute("/login")({

  component: Login,
  head: () => ({
    meta: [
      { title: "Sign in to Mindlora — Mindlora" },
      { name: "description", content: "Securely sign in to your Mindlora organization workspace." },
      { property: "og:title", content: "Sign in to Mindlora — Mindlora" },
      { property: "og:description", content: "Securely sign in to your Mindlora organization workspace." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://mindlora.com/login" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:title", content: "Sign in to Mindlora — Mindlora" },
      { name: "twitter:description", content: "Securely sign in to your Mindlora organization workspace." },
    ],
    links: [{ rel: "canonical", href: "https://mindlora.com/login" }],
  }),
});