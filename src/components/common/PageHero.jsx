import { Reveal } from "@/components/common/Reveal";
import { Eyebrow } from "@/components/common/SectionHeading";
import { cn } from "@/lib/utils";

export const PageHero = ({ eyebrow, title, subtitle, children, align = "center" }) => (
  <section className="relative overflow-hidden pt-36 pb-16 sm:pt-44 sm:pb-20">
    <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-mesh" />
    <div className="pointer-events-none absolute inset-0 -z-10 bg-grid mask-fade-b opacity-40" />
    <div className="container-xl">
      <div className={cn("max-w-3xl", align === "center" && "mx-auto text-center")}>
        {eyebrow && <Reveal><Eyebrow>{eyebrow}</Eyebrow></Reveal>}
        <Reveal delay={0.05}>
          <h1 className="mt-5 font-display text-4xl font-bold leading-[1.08] tracking-tight text-foreground sm:text-5xl lg:text-6xl">{title}</h1>
        </Reveal>
        {subtitle && (
          <Reveal delay={0.1}>
            <p className={cn("mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg", align === "center" && "mx-auto max-w-2xl")}>{subtitle}</p>
          </Reveal>
        )}
        {children && <Reveal delay={0.15}><div className="mt-8">{children}</div></Reveal>}
      </div>
    </div>
  </section>
);
