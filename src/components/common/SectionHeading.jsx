import { Reveal } from "@/components/common/Reveal";
import { cn } from "@/lib/utils";

export const Eyebrow = ({ children, className = "" }) => (
  <span className={cn("inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary", className)}>
    {children}
  </span>
);

export const SectionHeading = ({ eyebrow, title, subtitle, center = true, className = "" }) => (
  <div className={cn(center && "mx-auto text-center", "max-w-2xl", className)}>
    {eyebrow && (
      <Reveal>
        <Eyebrow>{eyebrow}</Eyebrow>
      </Reveal>
    )}
    <Reveal delay={0.05}>
      <h2 className="mt-5 font-display text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl lg:text-[2.75rem]">
        {title}
      </h2>
    </Reveal>
    {subtitle && (
      <Reveal delay={0.1}>
        <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">{subtitle}</p>
      </Reveal>
    )}
  </div>
);
