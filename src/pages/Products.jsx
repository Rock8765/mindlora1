import { Link } from "@tanstack/react-router";
import { ArrowRight, Cloud, ShieldCheck, RefreshCw, Zap } from "lucide-react";
import { SEO } from "@/components/common/SEO";
import { PageHero } from "@/components/common/PageHero";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/common/Reveal";
import { Icon } from "@/components/common/Icon";
import { Button } from "@/components/ui/button";
import { CTASection } from "@/components/sections/CTASection";
import imgHr from "@/assets/products/hr-interview.jpg";
import imgTech from "@/assets/products/technical-interview.jpg";
import imgCode from "@/assets/products/coding-interview.jpg";
import imgResume from "@/assets/products/resume-analyzer.jpg";
import imgComm from "@/assets/products/communication-analysis.jpg";
import imgCoach from "@/assets/products/career-coach.jpg";

const products = [
  {
    icon: "MessageSquare",
    name: "AI HR Interview",
    to: "/ai-interview",
    img: imgHr,
    short: "Adaptive behavioral rounds, scored consistently.",
    desc: "An AI interviewer follows the approved role rubric and probes each candidate's answers.",
    easy: "Your recruiters receive comparable evidence without repeating the same first-round calls.",
  },
  {
    icon: "Cpu",
    name: "Technical Interview",
    to: "/technical-interview",
    img: imgTech,
    short: "Technical depth calibrated to the role.",
    desc: "System design and domain questions aligned to the job description and expected seniority.",
    easy: "Your engineering team reviews evidence instead of spending hours on repetitive screening rounds.",
  },
  {
    icon: "Code2",
    name: "Coding Interview",
    to: "/coding-interview",
    img: imgCode,
    short: "Live editor with real-time AI review.",
    desc: "A live editor with instant correctness, complexity and readability review.",
    easy: "Candidates complete consistent tasks while reviewers receive test results and reasoning evidence.",
  },
  {
    icon: "FileText",
    name: "Requirement Intake",
    to: "/resume-analyzer",
    img: imgResume,
    short: "Turn a JD into an approved interview plan.",
    desc: "Map must-have skills, seniority signals, interview rounds, and scoring weights before inviting candidates.",
    easy: "Recruiters and hiring managers align on one measurable bar before screening begins.",
  },
  {
    icon: "Video",
    name: "Communication Analysis",
    to: "/communication-analysis",
    img: imgComm,
    short: "Clarity and response depth, measured.",
    desc: "Assess structure, relevance, pace, and communication evidence alongside role-specific skills.",
    easy: "Hiring teams can inspect transcripts and communication signals before making a decision.",
  },
  {
    icon: "Compass",
    name: "Ranked Shortlisting",
    to: "/career-coach",
    img: imgCoach,
    short: "Comparable candidates against one hiring bar.",
    desc: "Rank applicants using the role-specific competencies and weights approved by your team.",
    easy: "Recruiters start with the strongest matches and can inspect the evidence behind every ranking.",
  },
];

const awsPoints = [
  { icon: Cloud, title: "One cloud backbone", desc: "Interview media, assessment models, and candidate evidence run on a connected AWS architecture." },
  { icon: RefreshCw, title: "Connected evidence", desc: "Interview answers, coding results, scorecards, and shortlist decisions stay connected for each role." },
  { icon: ShieldCheck, title: "Secure by default", desc: "KMS-encrypted storage, scoped access, and tenant isolation keep each hiring organization’s data separate." },
  { icon: Zap, title: "Scales with hiring volume", desc: "Support parallel candidate interviews across individual roles and large recruitment drives." },
];

export default function Products() {
  return (
    <>
      <SEO title="Products" description="Mindlora handles requirement intake, HR, technical and coding interviews, scorecards, and ranked shortlists." />
      <PageHero
        eyebrow="Products"
        title="Every Mindlora product, in one place"
        subtitle="Six connected capabilities take your team from job requirement to evidence-backed shortlist."
      >
        <Button asChild size="lg" className="h-12 rounded-xl bg-gradient-primary px-6 hover:shadow-glow">
          <Link to="/book-meeting">Get Quotation <ArrowRight className="h-4 w-4" /></Link>
        </Button>
      </PageHero>

      <section className="pb-8">
        <div className="container-xl">
          <StaggerGroup className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((p) => (
              <StaggerItem key={p.name}>
                <div className="flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-xs transition hover:-translate-y-1 hover:shadow-card">
                  <div className="relative">
                    <img
                      src={p.img}
                      alt={`${p.name} product illustration`}
                      loading="lazy"
                      width={1024}
                      height={640}
                      className="h-44 w-full object-cover"
                    />
                    <span className="absolute -bottom-6 left-7 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-primary text-primary-foreground shadow-glow">
                      <Icon name={p.icon} className="h-6 w-6" />
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-7 pt-10">
                  <h2 className="font-display text-lg font-bold text-foreground">{p.name}</h2>
                  <p className="mt-1 text-sm font-medium text-primary">{p.short}</p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
                  <div className="mt-4 rounded-2xl bg-muted/60 p-4">
                    <p className="text-xs font-semibold uppercase tracking-wider text-primary">How it makes life easy</p>
                    <p className="mt-1.5 text-sm leading-relaxed text-foreground/80">{p.easy}</p>
                  </div>
                  <div className="mt-auto flex flex-col gap-2 pt-6">
                    <Button asChild className="h-11 rounded-xl bg-gradient-primary hover:shadow-glow">
                      <Link to="/book-meeting">Book a meeting</Link>
                    </Button>
                    <Button asChild variant="ghost" className="h-10 rounded-xl">
                      <Link to={p.to}>Explore product <ArrowRight className="h-4 w-4" /></Link>
                    </Button>
                  </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="container-xl">
          <SectionHeading
            eyebrow="AWS integration"
            title="One AWS layer keeps every product in sync"
             subtitle="Interview responses, coding results, scorecards, and shortlist decisions stay connected in one secure workflow."
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-2 lg:items-start">
            <Reveal>
              <div className="rounded-3xl border border-border bg-card p-7 shadow-card">
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Sync flow</p>
                <div className="mt-5 space-y-3">
                  {[
                     "A candidate completes an interview round",
                    "Media & transcripts land in Amazon S3",
                    "AWS Bedrock scores skills, tone and content",
                     "Aurora stores the candidate evidence",
                     "The scorecard and shortlist update for reviewers",
                  ].map((step, i) => (
                    <div key={step} className="flex items-start gap-3 rounded-2xl border border-border/70 bg-background p-4">
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">{i + 1}</span>
                      <p className="text-sm text-foreground/85">{step}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
            <StaggerGroup className="grid gap-4 sm:grid-cols-2">
              {awsPoints.map((a) => (
                <StaggerItem key={a.title}>
                  <div className="h-full rounded-3xl border border-border bg-card p-6 shadow-xs">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary"><a.icon className="h-5 w-5" /></span>
                    <h3 className="mt-4 font-display text-base font-semibold text-foreground">{a.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{a.desc}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerGroup>
          </div>
        </div>
      </section>

      <CTASection
         title="Connect every first-round hiring signal"
         subtitle="Let Mindlora handle interviews and return one evidence trail for your hiring team."
         primary={{ label: "Get Quotation", to: "/book-meeting" }}
      />
    </>
  );
}
