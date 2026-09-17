import { createFileRoute } from "@tanstack/react-router";
// @ts-ignore
import Login from "@/pages/Login";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/login")({
  component: Login,
  head: () =>
    pageHead({
      path: "/login",
      noindex: true,
      title: "Sign in to Mindlora",
      description: "Securely sign in to your Mindlora organisation workspace.",
      image: "home",
    }),
});
