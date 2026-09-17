import { createFileRoute } from "@tanstack/react-router";
// @ts-ignore
import LocalCity from "@/pages/LocalCity";
// @ts-ignore
import { samastipurHi } from "@/data/local";
import { pageHead, faqSchema, localBusinessSchema } from "@/lib/seo";

export const Route = createFileRoute("/hi/ai-recruitment-samastipur")({
  component: () => (
    <LocalCity copy={samastipurHi} altHref="/ai-recruitment-samastipur" altLabel="Read in English" />
  ),
  head: () =>
    pageHead({
      path: "/hi/ai-recruitment-samastipur",
      title: "समस्तीपुर में एआई भर्ती इंटरव्यू प्लेटफ़ॉर्म | Mindlora",
      description:
        "माइंडलोरा समस्तीपुर, बिहार और पूरे भारत की भर्ती टीमों के लिए एआई एचआर, तकनीकी और कोडिंग इंटरव्यू लेकर स्कोर सहित शॉर्टलिस्ट तैयार करता है।",
      image: "about",
      breadcrumbs: [{ name: "समस्तीपुर", path: "/hi/ai-recruitment-samastipur" }],
      schema: [localBusinessSchema, faqSchema(samastipurHi.faqs)],
      extraLinks: [
        { rel: "alternate", hrefLang: "en-IN", href: "/ai-recruitment-samastipur" },
        { rel: "alternate", hrefLang: "hi-IN", href: "/hi/ai-recruitment-samastipur" },
        { rel: "alternate", hrefLang: "x-default", href: "/ai-recruitment-samastipur" },
      ],
    }),
});
