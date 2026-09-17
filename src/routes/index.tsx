import { createFileRoute } from "@tanstack/react-router";
// @ts-ignore
import Home from "@/pages/Home";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      { title: "Mindlora — AI Recruitment Interviews in India" },
      { name: "description", content: "Outsource HR, technical, and coding interviews to Mindlora, with scorecards and ranked shortlists for your hiring team." },
      { property: "og:title", content: "Mindlora — AI Recruitment Interviews in India" },
      { property: "og:description", content: "Outsource HR, technical, and coding interviews to Mindlora, with scorecards and ranked shortlists for your hiring team." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://mindlora.com/" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [{ rel: "canonical", href: "https://mindlora.com/" }],
  }),

});
