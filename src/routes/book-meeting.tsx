import { createFileRoute } from "@tanstack/react-router";
// @ts-ignore
import BookMeeting from "@/pages/BookMeeting";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/book-meeting")({
  component: BookMeeting,
  head: () =>
    pageHead({
      path: "/book-meeting",
      title: "Book a Meeting — Get a Hiring Quotation | Mindlora",
      description: "Book a meeting with Mindlora for a custom quotation based on your roles, interview volume and screening depth. Quotation shared within 24 hours.",
      image: "book-meeting",
      breadcrumbs: [{"name":"Book a Meeting","path":"/book-meeting"}],
    }),
});
