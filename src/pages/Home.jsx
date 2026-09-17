import { SEO } from "@/components/common/SEO";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Hero } from "@/components/home/Hero";
import { FeatureHighlights } from "@/components/home/FeatureHighlights";
import { HowItWorks } from "@/components/home/HowItWorks";
import { WhyChoose } from "@/components/home/WhyChoose";
import { Benefits } from "@/components/home/Benefits";
import { Security } from "@/components/home/Security";
import { Testimonials } from "@/components/home/Testimonials";
import { FaqAccordion } from "@/components/sections/FaqAccordion";
import { QuotationSection } from "@/components/sections/QuotationSection";

export default function Home() {
  return (
    <>
      <SEO title="AI Recruitment Interviews India" description="Mindlora conducts HR, technical, and coding interviews for hiring teams, then delivers evidence-backed scorecards and ranked shortlists." />
      <Hero />
      <Benefits />
      <HowItWorks />
      <FeatureHighlights />
      <WhyChoose />
      <Security />
      <Testimonials />
      <section className="bg-secondary/40 py-20 sm:py-28">
        <div className="container-xl">
           <SectionHeading eyebrow="FAQ" title="Questions from hiring teams" subtitle="How interviews, scorecards, security, and integrations work." />
          <FaqAccordion />
        </div>
      </section>
      <QuotationSection />
    </>
  );
}
