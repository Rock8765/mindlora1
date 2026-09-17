import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { SEO } from "@/components/common/SEO";
import { PageHero } from "@/components/common/PageHero";
import { SectionHeading } from "@/components/common/SectionHeading";
import { StaggerGroup, StaggerItem } from "@/components/common/Reveal";
import { Icon } from "@/components/common/Icon";
import { Button } from "@/components/ui/button";
import { CTASection } from "@/components/sections/CTASection";

const groups = [
  {
    title: "Build the interview",
    items: [
      { icon: "FileText", title: "Requirement Intake", desc: "Convert a JD into skills, seniority signals, rounds, and pass criteria.", to: "/resume-analyzer" },
      { icon: "MessageSquare", title: "AI HR Screening", desc: "Adaptive behavioral and culture-fit rounds aligned to the role.", to: "/ai-interview" },
      { icon: "Cpu", title: "Technical Interviews", desc: "Domain questions and follow-ups calibrated to seniority.", to: "/technical-interview" },
    ],
  },
  {
    title: "Assess candidate evidence",
    items: [
      { icon: "Code2", title: "Coding Rounds", desc: "Live coding with correctness, complexity, and reasoning evaluation.", to: "/coding-interview" },
      { icon: "Video", title: "Communication Assessment", desc: "Clarity, structure, pace, and response depth in one rubric.", to: "/communication-analysis" },
      { icon: "FileBarChart", title: "Automated Scorecards", desc: "Scores linked to transcript excerpts, coding results, and evidence.", to: "/features" },
    ],
  },
  {
    title: "Shortlist and operate",
    items: [
      { icon: "Compass", title: "Ranked Shortlisting", desc: "Compare candidates against the same approved hiring bar.", to: "/career-coach" },
      { icon: "Building2", title: "Recruiter Dashboard", desc: "Track roles, invitations, completions, reviews, and decisions.", to: "/enterprise" },
      { icon: "GraduationCap", title: "Campus Drives", desc: "Run bulk hiring rounds with consistent scoring at scale.", to: "/universities" },
    ],
  },
];

export default function Features() {
  return (
    <>
      <SEO title="Features" description="Explore requirement intake, AI HR screening, technical and coding rounds, automated scorecards, and ranked shortlists." />
      <PageHero
        eyebrow="Features"
        title="The screening workflow, handled end to end"
        subtitle="Build a role-specific interview, invite applicants, assess every round, and review a ranked shortlist."
      >
        <Button asChild size="lg" className="h-12 rounded-xl bg-gradient-primary px-6 hover:shadow-glow"><Link to="/book-meeting">Get Quotation <ArrowRight className="h-4 w-4" /></Link></Button>
      </PageHero>

      <div className="container-xl space-y-20 pb-8">
        {groups.map((g) => (
          <section key={g.title}>
            <SectionHeading center={false} title={g.title} />
            <StaggerGroup className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {g.items.map((it) => (
                <StaggerItem key={it.title} className="h-full">
                  <Link to={it.to} className="group flex h-full flex-col rounded-3xl border border-border bg-card p-7 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-card">
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary"><Icon name={it.icon} className="h-6 w-6" /></span>
                    <h3 className="mt-5 font-display text-lg font-semibold text-foreground">{it.title}</h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{it.desc}</p>
                    <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary">Learn more <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></span>
                  </Link>
                </StaggerItem>
              ))}
            </StaggerGroup>
          </section>
        ))}
      </div>

      <CTASection />
    </>
  );
}
