import { Reveal, StaggerGroup, StaggerItem } from "@/components/common/Reveal";
import { SectionHeading } from "@/components/common/SectionHeading";
import { TiltCard } from "@/components/common/TiltCard";
import { Icon } from "@/components/common/Icon";
import { featureHighlights } from "@/data/content";

const tone = {
  primary: "bg-primary/10 text-primary",
  indigo: "bg-indigo/10 text-indigo",
  cyan: "bg-cyan/10 text-cyan",
  success: "bg-success/10 text-success",
};

export const FeatureHighlights = () => (
  <section className="relative py-20 sm:py-28">
    <div className="container-xl">
      <SectionHeading
        eyebrow="One platform"
        title="Everything your team needs to stop screening manually"
        subtitle="From requirement intake to ranked shortlist, every step stays tied to the role and your hiring bar."
      />

      <StaggerGroup className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {featureHighlights.map((f) => (
          <StaggerItem key={f.title}>
            <TiltCard className="h-full">
               <div className="group flex h-full flex-col rounded-3xl border border-border bg-card p-7 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-glow">
                <span className={`flex h-12 w-12 items-center justify-center rounded-2xl ${tone[f.tone]}`}>
                   <Icon name={f.icon} className="h-6 w-6 transition-transform duration-300 group-hover:scale-110" />
                </span>
                <h3 className="mt-5 font-display text-lg font-semibold text-foreground">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.desc}</p>
              </div>
            </TiltCard>
          </StaggerItem>
        ))}
      </StaggerGroup>
    </div>
  </section>
);
