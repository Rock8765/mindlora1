import { Link, Navigate } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { SEO } from "@/components/common/SEO";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/common/Reveal";
import { Eyebrow } from "@/components/common/SectionHeading";
import { Icon } from "@/components/common/Icon";
import { Button } from "@/components/ui/button";
import { CTASection } from "@/components/sections/CTASection";
import { getFeaturePage } from "@/data/featurePages";

export default function FeaturePage({ slug }) {
  const data = getFeaturePage(slug);
  if (!data) return <Navigate to="/features" replace />;

  return (
    <>
      <SEO title={data.eyebrow} description={data.subtitle} />

      <section className="relative overflow-hidden pt-36 pb-16 sm:pt-44 sm:pb-20">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-mesh" />
        <div className="pointer-events-none absolute inset-0 -z-10 bg-grid mask-fade-b opacity-40" />
        <div className="container-xl">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <Reveal>
                <Eyebrow><Icon name={data.icon} className="h-3.5 w-3.5" /> {data.eyebrow}</Eyebrow>
              </Reveal>
              <Reveal delay={0.05}>
                <h1 className="mt-5 font-display text-4xl font-bold leading-[1.08] tracking-tight text-foreground sm:text-5xl">{data.title}</h1>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">{data.subtitle}</p>
              </Reveal>
              <Reveal delay={0.15}>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Button asChild size="lg" className="h-12 rounded-xl bg-gradient-primary px-6 hover:shadow-glow"><Link to="/book-meeting">Get Quotation <ArrowRight className="h-4 w-4" /></Link></Button>
                  <Button asChild size="lg" variant="outline" className="h-12 rounded-xl px-6"><Link to="/features">All features</Link></Button>
                </div>
              </Reveal>
            </div>
            <Reveal delay={0.2}>
              <div className="relative">
                <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-mesh blur-xl" />
                <img src={data.image} alt={data.eyebrow} loading="lazy" className="aspect-[4/3] w-full rounded-3xl border border-border object-cover shadow-elegant" />
              </div>
            </Reveal>
          </div>

          <StaggerGroup className="mt-14 grid gap-6 sm:grid-cols-3">
            {data.stats.map((s) => (
              <StaggerItem key={s.label}>
                <div className="rounded-2xl border border-border bg-card p-6 text-center shadow-xs">
                  <p className="font-display text-3xl font-bold text-primary">{s.value}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{s.label}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="container-xl">
          <StaggerGroup className="grid gap-6 sm:grid-cols-2">
            {data.points.map((p) => (
              <StaggerItem key={p.title} className="h-full">
                <div className="flex h-full gap-4 rounded-3xl border border-border bg-card p-7 shadow-xs transition-shadow hover:shadow-card">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary"><Icon name={p.icon} className="h-6 w-6" /></span>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-foreground">{p.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      <CTASection title="Ready to outsource repetitive screening?" subtitle="See how Mindlora fits your roles, systems, and hiring process." />
    </>
  );
}
