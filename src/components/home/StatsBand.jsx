import { AnimatedCounter } from "@/components/common/AnimatedCounter";
import { StaggerGroup, StaggerItem } from "@/components/common/Reveal";
import { stats } from "@/data/content";

export const StatsBand = () => (
  <section className="py-8">
    <div className="container-xl">
      <div className="relative overflow-hidden rounded-3xl bg-gradient-primary px-6 py-14 shadow-elegant sm:px-12">
        <div className="pointer-events-none absolute inset-0 bg-dots opacity-20" />
        <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-white/10 blur-2xl" />
        <div className="relative">
          <h2 className="max-w-2xl font-display text-2xl font-bold text-primary-foreground sm:text-3xl">Early traction, measured honestly</h2>
          <StaggerGroup className="mt-10 grid gap-8 sm:grid-cols-3">
            {stats.map((s) => (
              <StaggerItem key={s.label}>
                <p className="font-display text-4xl font-bold text-primary-foreground sm:text-5xl">
                  <AnimatedCounter value={s.value} suffix={s.suffix} decimals={s.decimals || 0} />
                </p>
                <p className="mt-2 text-sm text-primary-foreground/80">{s.label}</p>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </div>
    </div>
  </section>
);
