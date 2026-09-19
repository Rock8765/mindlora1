import { motion } from "framer-motion";
import { Reveal } from "@/components/common/Reveal";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Icon } from "@/components/common/Icon";
import { AnimatedCounter } from "@/components/common/AnimatedCounter";

const small = [
  {
    icon: "ShieldCheck",
    title: "Private by default",
    desc: "Candidate interviews and hiring data stay within your company workspace.",
  },
  {
    icon: "Clock",
    title: "Faster first rounds",
    desc: "Candidates interview on their schedule without filling recruiter calendars.",
  },
  {
    icon: "Building2",
    title: "Built for Indian hiring",
    desc: "Support for tech, non-tech, campus, and high-volume recruitment workflows.",
  },
];

export const WhyChoose = () => (
  <section className="py-20 sm:py-28">
    <div className="container-xl">
      <SectionHeading
        center={false}
        eyebrow="Why teams pick Mindlora"
        title="A consistent first round for every candidate"
        subtitle="Mindlora asks adaptive questions, scores role-specific evidence, and gives your hiring team a reviewable decision trail."
      />

      <div className="mt-14 grid gap-5 lg:grid-cols-3 lg:grid-rows-2">
        {/* Feature tile */}
        <Reveal className="lg:col-span-2 lg:row-span-2">
          <div className="relative flex h-full flex-col justify-between overflow-hidden rounded-[2rem] border border-border bg-navy p-8 text-background shadow-elegant sm:p-10">
            <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-primary/30 blur-3xl" />
            <div className="relative">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-background">
                Evidence, not impressions
              </span>
              <h3 className="mt-5 max-w-md font-display text-2xl font-bold leading-snug text-background sm:text-3xl">
                See why each candidate cleared or missed the bar
              </h3>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-background/70">
                Every recommendation links back to answers, coding results, communication signals,
                and the rubric your team approved.
              </p>
            </div>
            <div className="relative mt-8 grid grid-cols-3 gap-4">
              {[
                { v: 3500, s: "+", l: "interviews conducted" },
                { v: 40, s: "+", l: "companies onboarded" },
                { v: 6, s: "", l: "Indian cities" },
              ].map((m) => (
                <div key={m.l} className="rounded-2xl bg-white/10 p-4">
                  <p className="font-display text-2xl font-bold text-background">
                    <AnimatedCounter value={m.v} suffix={m.s} decimals={m.d || 0} />
                  </p>
                  <p className="mt-1 text-[11px] leading-tight text-background/70">{m.l}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {small.map((s, idx) => (
          <Reveal key={s.title} delay={idx * 0.08}>
            <motion.div
              whileHover={{ y: -4 }}
              className="flex h-full flex-col rounded-[2rem] border border-border bg-card p-7 shadow-xs"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <Icon name={s.icon} className="h-6 w-6" />
              </span>
              <h3 className="mt-5 font-display text-lg font-semibold text-foreground">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
            </motion.div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);
