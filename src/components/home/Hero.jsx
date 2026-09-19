import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Star, ShieldCheck, CalendarCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MagneticButton } from "@/components/common/MagneticButton";
import { HeroFlow } from "@/components/home/HeroFlow";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] },
  }),
};

export const Hero = () => (
  <section className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
    {/* Interactive background */}
    <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-mesh" />
    <div className="pointer-events-none absolute inset-0 -z-10 bg-grid mask-fade-b opacity-[0.55]" />

    <div className="container-xl">
      <div className="grid items-center gap-14 lg:grid-cols-12">
        <div className="lg:col-span-6">
          <motion.div initial="hidden" animate="show" custom={0} variants={fadeUp}>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background/70 px-3.5 py-1.5 text-xs font-semibold text-foreground shadow-xs backdrop-blur">
              <span className="flex items-center gap-0.5 text-warning">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-current" />
                ))}
              </span>
              Built for Indian hiring teams
            </span>
          </motion.div>

          <motion.h1
            initial="hidden"
            animate="show"
            custom={1}
            variants={fadeUp}
            className="mt-6 font-display text-4xl font-bold leading-[1.05] tracking-tight text-foreground sm:text-5xl lg:text-6xl"
          >
            Let AI run your first-round interviews —{" "}
            <span className="text-gradient">so your team only meets candidates worth meeting</span>
          </motion.h1>

          <motion.p
            initial="hidden"
            animate="show"
            custom={2}
            variants={fadeUp}
            className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg"
          >
            Share your hiring requirement. Mindlora interviews every candidate across HR, technical,
            and coding rounds, then hands you a ranked shortlist with full scorecards.
          </motion.p>

          <motion.div
            initial="hidden"
            animate="show"
            custom={3}
            variants={fadeUp}
            className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap"
          >
            <MagneticButton>
              <Button
                asChild
                size="lg"
                className="h-12 rounded-xl bg-gradient-primary px-6 text-base shadow-xs transition-all hover:shadow-glow"
              >
                <Link to="/book-meeting">
                  <CalendarCheck className="h-5 w-5" /> Get Quotation
                </Link>
              </Button>
            </MagneticButton>
            <Button asChild size="lg" variant="ghost" className="h-12 rounded-xl px-4 text-base">
              <Link to="/products">
                See a sample scorecard <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </motion.div>

          <motion.div
            initial="hidden"
            animate="show"
            custom={4}
            variants={fadeUp}
            className="mt-6 flex items-center gap-2 text-sm text-muted-foreground"
          >
            <ShieldCheck className="h-4 w-4 text-success" /> Custom interview plan · Quotation
            within 24 hours
          </motion.div>
        </div>

        <div className="lg:col-span-6">
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <HeroFlow />
          </motion.div>
        </div>
      </div>
    </div>
  </section>
);
