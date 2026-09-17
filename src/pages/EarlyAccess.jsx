import { Link } from "@tanstack/react-router";
import { ArrowRight, Building2, GraduationCap, Users } from "lucide-react";
import { SEO } from "@/components/common/SEO";
import { PageHero } from "@/components/common/PageHero";
import { Button } from "@/components/ui/button";

const paths = [
  { icon: GraduationCap, title: "Campus recruiters", text: "Run consistent first-round interviews across bulk hiring drives." },
  { icon: Users, title: "Staffing agencies", text: "Screen candidates for multiple clients without adding recruiter headcount." },
  { icon: Building2, title: "Hiring companies", text: "Outsource repetitive HR, technical, and coding rounds to Mindlora." },
];
export default function EarlyAccess() {
  return <>
    <SEO title="Start Hiring Smarter" description="See how Mindlora conducts candidate interviews and delivers ranked shortlists for Indian hiring teams." />
    <PageHero eyebrow="Start hiring smarter" title="See Mindlora with your open role in mind" subtitle="Tell us what you’re hiring for and we’ll show you the interview, scorecard, and shortlist workflow.">
      <Button asChild size="lg" className="h-12 rounded-xl bg-gradient-primary px-6"><Link to="/book-meeting">Get Quotation <ArrowRight className="h-4 w-4" /></Link></Button>
    </PageHero>
    <section className="pb-24"><div className="container-xl grid gap-6 md:grid-cols-3">{paths.map(({icon: Icon,title,text}) => <article key={title} className="rounded-3xl border border-border bg-card p-7 shadow-xs"><span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary"><Icon className="h-6 w-6" /></span><h2 className="mt-5 font-display text-lg font-semibold">{title}</h2><p className="mt-2 text-sm text-muted-foreground">{text}</p></article>)}</div></section>
  </>;
}
