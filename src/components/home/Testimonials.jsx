import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { SectionHeading } from "@/components/common/SectionHeading";
import { testimonials } from "@/data/content";
import { cn } from "@/lib/utils";

export const Testimonials = () => {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  const count = testimonials.length;

  const go = useCallback((n) => setI((p) => (n + count) % count), [count]);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setI((p) => (p + 1) % count), 5500);
    return () => clearInterval(t);
  }, [paused, count]);

  const active = testimonials[i];

  return (
    <section
      className="relative overflow-hidden bg-secondary/40 py-20 sm:py-28"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="pointer-events-none absolute -left-24 top-1/3 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
      <div className="container-xl">
        <SectionHeading
          center={false}
          eyebrow="Hiring-side voices"
          title="Less screening. Better evidence."
          subtitle="Recruiters, founders, and agencies use Mindlora to move qualified candidates forward faster."
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-12 lg:items-stretch">
          {/* Featured rotating quote */}
          <div className="relative lg:col-span-8">
            <div className="relative flex min-h-[340px] flex-col justify-between overflow-hidden rounded-[2rem] border border-border bg-card p-8 shadow-card sm:p-12">
              <Quote className="absolute right-8 top-8 h-16 w-16 text-primary/10" />
              <AnimatePresence mode="wait">
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div className="flex items-center gap-0.5 text-warning">
                    {[...Array(active.rating)].map((_, k) => (
                      <Star key={k} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <blockquote className="mt-6 max-w-2xl font-display text-xl font-medium leading-snug text-foreground sm:text-2xl">
                    &ldquo;{active.quote}&rdquo;
                  </blockquote>
                  <figcaption className="mt-8 flex items-center gap-4">
                    <span
                      className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-primary font-display font-bold text-primary-foreground ring-2 ring-background"
                      role="img"
                      aria-label={`${active.name} initials avatar`}
                    >
                      {active.initials}
                    </span>
                    <div>
                      <p className="text-base font-semibold text-foreground">{active.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {active.role} · {active.company}
                      </p>
                    </div>
                  </figcaption>
                </motion.div>
              </AnimatePresence>

              <div className="mt-10 flex items-center justify-between">
                <div className="flex gap-1.5">
                  {testimonials.map((_, k) => (
                    <button
                      type="button"
                      key={k}
                      aria-label={`Testimonial ${k + 1}`}
                      onClick={() => go(k)}
                      className={cn(
                        "h-1.5 rounded-full transition-all duration-300",
                        k === i ? "w-7 bg-primary" : "w-1.5 bg-border hover:bg-muted-foreground/40",
                      )}
                    />
                  ))}
                </div>
                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={() => go(i - 1)}
                    aria-label="Previous testimonial"
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background text-muted-foreground transition-colors hover:border-primary hover:text-primary"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </button>
                  <button
                    type="button"
                    onClick={() => go(i + 1)}
                    aria-label="Next testimonial"
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background text-muted-foreground transition-colors hover:border-primary hover:text-primary"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* People picker */}
          <div className="lg:col-span-4">
            <div className="grid h-full grid-cols-2 gap-3 lg:grid-cols-1">
              {testimonials.slice(0, 6).map((t, k) => (
                <button
                  type="button"
                  key={t.name}
                  onClick={() => go(k)}
                  className={cn(
                    "flex items-center gap-3 rounded-2xl border p-3 text-left transition-all duration-300",
                    k === i
                      ? "border-primary/40 bg-card shadow-card"
                      : "border-border bg-card/60 hover:bg-card",
                  )}
                >
                  <span
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary"
                    role="img"
                    aria-label={`${t.name} initials avatar`}
                  >
                    {t.initials}
                  </span>
                  <span className="min-w-0">
                    <span className="block truncate text-sm font-semibold text-foreground">
                      {t.name}
                    </span>
                    <span className="block truncate text-xs text-muted-foreground">
                      {t.company}
                    </span>
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
