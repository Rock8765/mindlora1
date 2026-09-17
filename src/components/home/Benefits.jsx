import { Reveal } from "@/components/common/Reveal";
import { Icon } from "@/components/common/Icon";
import { benefits } from "@/data/content";

export const Benefits = () => (
  <section className="py-20 sm:py-28">
    <div className="container-xl">
      <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
        <div>
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">Why Mindlora</span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-5 max-w-lg font-display text-3xl font-bold leading-tight text-foreground sm:text-4xl">
              Stop spending recruiter time on repetitive screening
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-4 max-w-lg text-base leading-relaxed text-muted-foreground sm:text-lg">
              Mindlora runs structured first-round interviews for every applicant and returns the evidence your team needs to make the next decision.
            </p>
          </Reveal>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {benefits.map((b, i) => (
              <Reveal key={b.title} delay={0.1 + i * 0.06}>
                <div className="flex h-full flex-col rounded-2xl border border-border bg-card p-5 shadow-xs">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary"><Icon name={b.icon} className="h-5 w-5" /></span>
                  <h3 className="mt-4 text-sm font-semibold text-foreground">{b.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{b.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={0.15}>
          <div className="relative">
            <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-mesh blur-xl" />
            <img
              src="/mindlora-logo.png"
              alt="Mindlora AI interview service"
              loading="lazy"
              className="aspect-[4/5] w-full rounded-3xl border border-border object-cover shadow-elegant"
            />
            <div className="absolute bottom-5 left-5 right-5 rounded-2xl glass-card p-4 shadow-card">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-success/15 text-success"><Icon name="Trophy" className="h-5 w-5" /></span>
                <div>
                   <p className="text-sm font-semibold text-foreground">Shortlist ready</p>
                   <p className="text-xs text-muted-foreground">Review ranked candidates with full evidence.</p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  </section>
);
