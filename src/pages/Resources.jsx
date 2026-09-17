import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { SEO } from "@/components/common/SEO";
import { PageHero } from "@/components/common/PageHero";
import { SectionHeading } from "@/components/common/SectionHeading";
import { StaggerGroup, StaggerItem } from "@/components/common/Reveal";
import { Icon } from "@/components/common/Icon";
import { CTASection } from "@/components/sections/CTASection";

const resources = [
  { icon: "BookOpen", type: "Guide", title: "First-round outsourcing checklist", desc: "Define ownership, pass criteria, review steps, and candidate communication before launch." },
  { icon: "FileText", type: "Template", title: "Technical scorecard template", desc: "A practical rubric for evaluating depth, reasoning, communication, and coding evidence." },
  { icon: "Video", type: "Guide", title: "Hiring bar calibration", desc: "Align recruiters and hiring managers before the first candidate is interviewed." },
  { icon: "ListChecks", type: "Checklist", title: "Campus drive operations", desc: "Plan bulk invitations, completion windows, reviews, and shortlist handoffs." },
  { icon: "GraduationCap", type: "Guide", title: "Agency multi-client screening", desc: "Keep each client’s requirements, templates, candidates, and evidence separated." },
  { icon: "Calculator", type: "Worksheet", title: "Recruiter-hours calculator", desc: "Estimate the screening time your team can redirect to final interviews and closing." },
];

export default function Resources() {
  return (
    <>
      <SEO title="Resources" description="Guides and templates for Indian hiring teams outsourcing candidate screening and technical interviews." />
      <PageHero eyebrow="Resources" title="Practical resources for hiring teams" subtitle="Use clear rubrics, stronger handoffs, and repeatable operating checklists across every role." />

      <section className="py-12 sm:py-16">
        <div className="container-xl">
          <StaggerGroup className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {resources.map((r) => (
              <StaggerItem key={r.title} className="h-full">
                <Link to="/blog" className="group flex h-full flex-col rounded-3xl border border-border bg-card p-7 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-card">
                  <div className="flex items-center justify-between">
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary"><Icon name={r.icon} className="h-6 w-6" /></span>
                    <span className="rounded-full bg-secondary px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">{r.type}</span>
                  </div>
                  <h3 className="mt-5 font-display text-lg font-semibold text-foreground">{r.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{r.desc}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary">Get it free <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></span>
                </Link>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      <CTASection title="Put one active role through Mindlora" subtitle="Book a meeting and we’ll scope the interview flow around your role and hiring volume." />
    </>
  );
}
