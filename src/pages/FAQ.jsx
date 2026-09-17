import { Link } from "@tanstack/react-router";
import { SEO } from "@/components/common/SEO";
import { PageHero } from "@/components/common/PageHero";
import { FaqAccordion } from "@/components/sections/FaqAccordion";
import { CTASection } from "@/components/sections/CTASection";
import { Button } from "@/components/ui/button";
import { faqs } from "@/data/content";

const extra = [
  { q: "Which roles can Mindlora interview for?", a: "Mindlora supports tech and non-tech hiring, including individual roles, agency pipelines, mass hiring, and campus recruitment drives." },
  { q: "Which languages are supported?", a: "HR screening is available in English and Hindi. Additional Indian languages will be added after validation with hiring teams." },
  { q: "How are candidates invited?", a: "Your team can invite candidates individually or upload them in bulk. Each candidate receives a secure interview link and completion instructions." },
];

export default function FAQ() {
  return (
    <>
      <SEO title="FAQ" description="Answers for hiring teams about Mindlora interviews, scorecards, security, integrations, and quotations in India." />
      <PageHero eyebrow="Support" title="Frequently asked questions" subtitle="Can't find what you're looking for? Our team is one message away.">
        <Button asChild size="lg" className="h-12 rounded-xl bg-gradient-primary px-6"><Link to="/contact">Contact support</Link></Button>
      </PageHero>
      <div className="container-xl pb-16">
        <FaqAccordion items={[...faqs, ...extra]} />
      </div>
      <CTASection title="Still have questions?" subtitle="Book a meeting and we’ll scope the right interview workflow for your hiring team." primary={{ label: "Book a meeting", to: "/book-meeting" }} secondary={{ label: "Contact us", to: "/contact" }} />
    </>
  );
}
