import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { SEO } from "@/components/common/SEO";
import { PageHero } from "@/components/common/PageHero";
import { SectionHeading } from "@/components/common/SectionHeading";
import { StaggerGroup, StaggerItem, Reveal } from "@/components/common/Reveal";
import { Icon } from "@/components/common/Icon";
import { Button } from "@/components/ui/button";
import { CTASection } from "@/components/sections/CTASection";

export default function Universities() {
  const features = [
    { icon: "GraduationCap", title: "Bulk candidate invitations", desc: "Invite applicants across colleges and locations without manual scheduling." },
    { icon: "LayoutDashboard", title: "Drive dashboard", desc: "Track invitations, completions, scores, and reviews in one place." },
    { icon: "BookOpen", title: "Role-specific rounds", desc: "Set different HR, aptitude, technical, and coding rounds for each role." },
    { icon: "Trophy", title: "Ranked shortlists", desc: "Move candidates who clear your bar into the next hiring stage." },
    { icon: "Users", title: "High-volume operations", desc: "Manage bulk uploads and scheduling across large applicant groups." },
    { icon: "ShieldCheck", title: "India data residency", desc: "Candidate data is stored in AWS Mumbai with controlled access." },
  ];
  return (
    <>
      <SEO title="Campus Hiring" description="Run bulk campus recruitment interviews in India with AI screening, coding rounds, and ranked shortlists." />
      <PageHero eyebrow="Campus hiring" title="Run every campus first round with one hiring bar" subtitle="Mindlora interviews applicants at scale and returns evidence-backed scorecards to your recruitment team.">
        <div className="flex flex-col justify-center gap-3 sm:flex-row">
          <Button asChild size="lg" className="h-12 rounded-xl bg-gradient-primary px-6 hover:shadow-glow"><Link to="/book-meeting">Get Quotation <ArrowRight className="h-4 w-4" /></Link></Button>
          <Button asChild size="lg" variant="outline" className="h-12 rounded-xl px-6"><Link to="/features">Explore features</Link></Button>
        </div>
      </PageHero>

      <section className="pb-8">
        <div className="container-xl">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl border border-border shadow-elegant">
              <img src="/mindlora-logo.png" alt="Mindlora campus hiring platform" loading="lazy" className="aspect-[21/9] w-full object-contain p-12" />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="container-xl">
          <SectionHeading eyebrow="Campus drive features" title="Everything your recruitment team needs" />
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
            {[{ v: "Bulk", l: "Candidate invitations" }, { v: "Role-based", l: "Interview rounds" }, { v: "Ranked", l: "Final shortlist" }].map((o) => (
              <Reveal key={o.l}><div className="rounded-3xl border border-border bg-card p-8 text-center shadow-xs"><p className="font-display text-4xl font-bold text-primary">{o.v}</p><p className="mt-2 text-sm text-muted-foreground">{o.l}</p></div></Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection title="Plan your next campus drive" subtitle="Show us the roles and hiring bar. We’ll scope the interview workflow." primary={{ label: "Book a meeting", to: "/book-meeting" }} secondary={{ label: "See features", to: "/features" }} />
    </>
  );
}
