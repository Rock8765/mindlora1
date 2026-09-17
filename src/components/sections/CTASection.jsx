import { Link } from "@tanstack/react-router";
import { ArrowRight, Sparkles } from "lucide-react";
import { Reveal } from "@/components/common/Reveal";
import { MagneticButton } from "@/components/common/MagneticButton";
import { Button } from "@/components/ui/button";

export const CTASection = ({
  title = "Let Mindlora run your first-round interviews",
  subtitle = "Share an active role and get a quotation built around your interview volume and complexity.",
  primary = { label: "Get Quotation", to: "/book-meeting" },
  secondary = { label: "See how it works", to: "/products" },
}) => (
  <section className="py-16 sm:py-24">
    <div className="container-xl">
      <Reveal>
        <div className="relative overflow-hidden rounded-[2rem] border border-border bg-gradient-primary px-6 py-16 text-center shadow-elegant sm:px-16">
          <div className="pointer-events-none absolute inset-0 bg-dots opacity-20" />
          <div className="relative mx-auto max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3.5 py-1.5 text-xs font-semibold text-primary-foreground"><Sparkles className="h-3.5 w-3.5" /> Built for organizations</span>
            <h2 className="mt-5 font-display text-3xl font-bold leading-tight text-primary-foreground sm:text-4xl lg:text-5xl">{title}</h2>
            <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-primary-foreground/85 sm:text-lg">{subtitle}</p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <MagneticButton>
                <Button asChild size="lg" className="h-12 rounded-xl bg-background px-6 text-base text-primary hover:bg-background/90">
                  <Link to={primary.to}>{primary.label} <ArrowRight className="h-4 w-4" /></Link>
                </Button>
              </MagneticButton>
              <Button asChild size="lg" variant="outline" className="h-12 rounded-xl border-white/40 bg-white/10 px-6 text-base text-primary-foreground hover:bg-white/20 hover:text-primary-foreground">
                <Link to={secondary.to}>{secondary.label}</Link>
              </Button>
            </div>
          </div>
        </div>
      </Reveal>
    </div>
  </section>
);
