import { createFileRoute } from "@tanstack/react-router";
// @ts-ignore
import BookMeeting from "@/pages/BookMeeting";

export const Route = createFileRoute("/book-meeting")({

  component: BookMeeting,
  head: () => ({
    meta: [
      { title: "Get a Hiring Interview Quotation — Mindlora" },
      { name: "description", content: "Book a meeting for a quotation tailored to your roles, interview volume, and screening depth." },
      { property: "og:title", content: "Get a Hiring Interview Quotation — Mindlora" },
      { property: "og:description", content: "Book a meeting for a quotation tailored to your roles, interview volume, and screening depth." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://mindlora.com/book-meeting" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:title", content: "Get a Hiring Interview Quotation — Mindlora" },
      { name: "twitter:description", content: "Book a meeting for a quotation tailored to your roles, interview volume, and screening depth." },
    ],
    links: [{ rel: "canonical", href: "https://mindlora.com/book-meeting" }],
  }),
});