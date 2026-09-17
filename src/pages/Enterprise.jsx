import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { SEO } from "@/components/common/SEO";
import { PageHero } from "@/components/common/PageHero";
import { SectionHeading } from "@/components/common/SectionHeading";
import { StaggerGroup, StaggerItem, Reveal } from "@/components/common/Reveal";
import { Icon } from "@/components/common/Icon";
import { Button } from "@/components/ui/button";
import { CTASection } from "@/components/sections/CTASection";

const SolutionTemplate = ({ seo, hero, image, imageAlt, features, outcomes, ctaTitle }) => (
  <>
    <SEO title={seo.title} description={seo.desc} />
    <PageHero eyebrow={hero.eyebrow} title={hero.title} subtitle={hero.subtitle}>
      <div className="flex flex-col justify-center gap-3 sm:flex-row">
        <Button asChild size="lg" className="h-12 rounded-xl bg-gradient-primary px-6 hover:shadow-glow"><Link to="/book-meeting">Get Quotation <ArrowRight className="h-4 w-4" /></Link></Button>
        <Button asChild size="lg" variant="outline" className="h-12 rounded-xl px-6"><Link to="/features">See features</Link></Button>
      </div>
    </PageHero>

    <section className="pb-8">
      <div className="container-xl">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-border shadow-elegant">
            <img src={image} alt={imageAlt} loading="lazy" className="aspect-[21/9] w-full object-cover" />
          </div>
        </Reveal>
      </div>
    </section>

    <section className="py-16 sm:py-24">
      <div className="container-xl">
        <SectionHeading eyebrow="Capabilities" title={hero.featuresTitle} />
        <StaggerGroup className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <StaggerItem key={f.title} className="h-full">
              <div className="flex h-full flex-col rounded-3xl border border-border bg-card p-7 shadow-xs transition-shadow hover:shadow-card">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary"><Icon name={f.icon} className="h-6 w-6" /></span>
                <h3 className="mt-5 font-display text-lg font-semibold text-foreground">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.desc}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>

    <section className="bg-secondary/40 py-16 sm:py-24">
      <div className="container-xl">
        <div className="grid gap-6 sm:grid-cols-3">
          {outcomes.map((o) => (
            <Reveal key={o.label}>
              <div className="rounded-3xl border border-border bg-card p-8 text-center shadow-xs">
                <p className="font-display text-4xl font-bold text-primary">{o.value}</p>
                <p className="mt-2 text-sm text-muted-foreground">{o.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    <CTASection title={ctaTitle} subtitle="Book a meeting and we'll tailor Mindlora to your hiring requirements." primary={{ label: "Book a meeting", to: "/book-meeting" }} secondary={{ label: "See features", to: "/features" }} />
  </>
);

export default function Enterprise() {
  return (
    <SolutionTemplate
      seo={{ title: "Enterprise", desc: "AI recruitment interviews for Indian enterprise talent teams handling high-volume roles." }}
      hero={{
        eyebrow: "For Enterprise",
        title: "Run high-volume screening without a larger interview panel",
        subtitle: "Mindlora conducts structured HR, technical, and coding rounds, then gives your talent team ranked candidates and complete evidence.",
        featuresTitle: "Built for talent teams",
      }}
      image="/mindlora-logo.png"
      imageAlt="Mindlora AI recruitment platform"
      features={[
        { icon: "Building2", title: "Recruiter dashboard", desc: "Track every requirement, applicant, interview, and review in one place." },
        { icon: "Users", title: "Unlimited seats", desc: "Give recruiters and hiring managers the access they need." },
        { icon: "BarChart3", title: "Hiring analytics", desc: "Track interview volume, completion, review status, and time-to-shortlist." },
        { icon: "Lock", title: "Enterprise security", desc: "TLS 1.3 in transit, AES-256 at rest, role-based access, audit logs, and data residency options." },
        { icon: "Puzzle", title: "Custom integrations", desc: "Connect your ATS, LMS, and HRIS through our REST API and webhooks." },
        { icon: "Headset", title: "White-glove onboarding", desc: "A dedicated success manager and training for your whole team." },
      ]}
      outcomes={[{ value: "Unlimited", label: "Interviews and seats" }, { value: "India", label: "Data residency" }, { value: "SLA", label: "Backed support" }]}
      ctaTitle="Ready to scale candidate screening?"
    />
  );
}
