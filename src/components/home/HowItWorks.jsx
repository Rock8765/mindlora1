import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Icon } from "@/components/common/Icon";
import { howItWorks } from "@/data/content";

export const HowItWorks = () => (
  <section className="relative overflow-hidden bg-secondary/40 py-20 sm:py-28">
    <div className="container-xl">
      <SectionHeading
        eyebrow="How it works"
        title="From job requirement to ranked shortlist"
        subtitle="Mindlora runs the screening process. Your team keeps control of the hiring decision."
      />

      <div className="relative mt-16">
        <motion.div className="absolute left-6 top-0 hidden h-full w-px origin-top bg-primary/30 sm:block" initial={{ scaleY: 0 }} whileInView={{ scaleY: 1 }} viewport={{ once: true }} transition={{ duration: 1.2 }} />
        <div className="space-y-5">
          {howItWorks.map((s, i) => (
            <motion.div
              key={s.step}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
              className="relative flex items-start gap-5 border-b border-border py-6 sm:pl-16"
            >
              <span className="absolute left-0 top-6 hidden h-12 w-12 -translate-x-1/2 items-center justify-center rounded-full bg-gradient-primary text-primary-foreground shadow-glow sm:flex">
                <Icon name={s.icon} className="h-5 w-5" />
              </span>
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary sm:hidden">
                <Icon name={s.icon} className="h-6 w-6" />
              </span>
              <div className="flex-1">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-bold text-primary">{s.step}</span><h3 className="font-display text-lg font-semibold text-foreground">{s.title}</h3>
                </div>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <p className="mt-10 text-sm text-muted-foreground">
        Want this workflow mapped to your roles?{" "}
        <Link to="/book-meeting" className="font-semibold text-primary underline-offset-4 hover:underline">
          Book a meeting for a hiring quotation
        </Link>
        .
      </p>
    </div>
  </section>
);
