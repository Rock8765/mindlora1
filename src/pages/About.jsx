import { SEO } from "@/components/common/SEO";
import { PageHero } from "@/components/common/PageHero";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/common/Reveal";
import { AnimatedCounter } from "@/components/common/AnimatedCounter";
import { Icon } from "@/components/common/Icon";
import { CTASection } from "@/components/sections/CTASection";
import TeamShowcase from "@/components/ui/team-showcase";

const values = [
  { icon: "Target", title: "Hiring evidence first", desc: "Every recommendation should connect to the role, the rubric, and what the candidate actually demonstrated." },
  { icon: "ShieldCheck", title: "Private by design", desc: "Candidate interviews stay protected with encryption, role-based controls, and responsible data handling." },
  { icon: "Scale", title: "One consistent bar", desc: "Every applicant receives a structured interview aligned with the same approved criteria." },
  { icon: "Clock", title: "Recruiter time matters", desc: "Hiring teams should spend their time with qualified candidates, not repetitive screening calls." },
];

const milestones = [
  { year: "2021", title: "Mindlora Private Limited incorporated", desc: "The company was registered with the Registrar of Companies, Guwahati, with a focus on practical hiring technology." },
  { year: "2025", title: "The first hiring workflow", desc: "We connected requirement intake, adaptive AI interviews, coding evaluation, and evidence-backed scorecards." },
  { year: "2026", title: "Generally available", desc: "Mindlora now supports startups, staffing agencies, enterprise talent teams, and campus recruiters across India." },
  { year: "Today", title: "Built around hiring companies", desc: "We remain focused on the practical needs of Indian recruiters, hiring managers, agencies, and campus teams." },
];

export default function About() {
  return (
    <>
      <SEO title="About" description="Mindlora is a self-funded Indian recruitment company that conducts AI-led candidate interviews for hiring teams." />
      <PageHero eyebrow="Our story" title="We give hiring teams their screening time back" subtitle="Incorporated in 2021, Mindlora conducts first-round and technical interviews for companies hiring across India." />
      <div className="container-xl pb-4"><address className="mx-auto max-w-xl text-center text-sm not-italic leading-relaxed text-muted-foreground"><strong className="text-foreground">Mindlora Private Limited</strong><br />House no. 386, 2nd floor, Sixmile Mahapurush Madhabdev path, Bormotoria, Kamrup, Assam 781022, India</address></div>

      <section className="py-8">
        <div className="container-xl">
          <div className="grid gap-6 rounded-3xl border border-border bg-card p-8 shadow-xs sm:grid-cols-2 lg:grid-cols-4">
            {[{ v: 3500, s: "+", d: "Candidate interviews" }, { v: 40, s: "+", d: "Hiring companies" }, { v: 6, s: "", d: "Cities across India" }, { v: 2021, s: "", d: "Incorporated" }].map((x) => (
              <div key={x.d} className="text-center">
                <p className="font-display text-3xl font-bold text-primary sm:text-4xl"><AnimatedCounter value={x.v} suffix={x.s} decimals={x.dec || 0} /></p>
                <p className="mt-1 text-sm text-muted-foreground">{x.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="container-xl">
          <SectionHeading eyebrow="What we stand for" title="Built for better hiring decisions" subtitle="Mindlora combines structured interviews, consistent scoring, and transcript-backed evidence for Indian hiring teams." />
          <StaggerGroup className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <StaggerItem key={v.title} className="h-full">
                <div className="flex h-full flex-col rounded-3xl border border-border bg-card p-7 shadow-xs">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary"><Icon name={v.icon} className="h-6 w-6" /></span>
                  <h3 className="mt-5 font-display text-lg font-semibold text-foreground">{v.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{v.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      <section className="bg-secondary/40 py-20 sm:py-28">
        <div className="container-xl">
          <SectionHeading eyebrow="Milestones" title="How we got here" />
          <div className="relative mx-auto mt-14 max-w-3xl">
            <div className="absolute left-4 top-0 h-full w-px bg-border" />
            <div className="space-y-8">
              {milestones.map((m, i) => (
                <Reveal key={`${m.year}-${i}`} delay={i * 0.05}>
                  <div className="relative pl-12">
                    <span className="absolute left-0 top-1 flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full bg-gradient-primary text-[11px] font-bold text-primary-foreground shadow-glow">{i + 1}</span>
                    <p className="text-sm font-semibold text-primary">{m.year}</p>
                    <h3 className="mt-1 font-display text-lg font-semibold text-foreground">{m.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{m.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="container-xl">
          <SectionHeading eyebrow="The team" title="The team building Mindlora" subtitle="Based in India and focused on product quality, responsible AI, and better hiring operations." />
          <div className="mt-12">
            <TeamShowcase />
          </div>
        </div>
      </section>

      <CTASection title="Start hiring smarter" subtitle="Book a focused walkthrough using one of your active roles." />
    </>
  );
}
