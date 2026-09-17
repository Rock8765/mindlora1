import { SEO } from "@/components/common/SEO";
import { PageHero } from "@/components/common/PageHero";
import { QuotationSection } from "@/components/sections/QuotationSection";

export default function Pricing() {
  return (
    <>
      <SEO title="Get Quotation" description="Book a meeting for a Mindlora quotation based on interview volume, role complexity, and screening depth." />
      <PageHero eyebrow="Get Quotation" title="A hiring plan built around your roles" subtitle="Tell us what you hire for and how many candidates you expect. We’ll scope the right interview workflow for your team." />
      <QuotationSection />
    </>
  );
}
