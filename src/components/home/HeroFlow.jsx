import { motion, useReducedMotion } from "framer-motion";
import { FileText, MessageSquare, ClipboardCheck, ArrowRight } from "lucide-react";

const stages = [
  { label: "JD in", detail: "Role and hiring bar", Icon: FileText },
  { label: "AI interview", detail: "HR, technical, coding", Icon: MessageSquare },
  { label: "Scorecard out", detail: "Evidence and shortlist", Icon: ClipboardCheck },
];

export const HeroFlow = () => {
  const reduceMotion = useReducedMotion();
  return (
    <div
      className="relative overflow-hidden rounded-3xl border border-border bg-card/90 p-5 shadow-elegant backdrop-blur sm:p-7"
      role="img"
      aria-label="Job description in, AI interview, scorecard out"
    >
      <div className="flex items-center justify-between border-b border-border pb-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-primary">
            Mindlora interview flow
          </p>
          <p className="mt-1 text-sm text-muted-foreground">
            One requirement. One consistent hiring bar.
          </p>
        </div>
        <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-success/10 text-success">
          <ClipboardCheck className="h-5 w-5" aria-hidden="true" />
        </span>
      </div>
      <div className="relative mt-7 grid gap-4 sm:grid-cols-[1fr_auto_1fr_auto_1fr] sm:items-center">
        {stages.map(({ label, detail, Icon }, index) => (
          <div className="contents" key={label}>
            <motion.div
              initial={reduceMotion ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.45,
                delay: index * 0.55,
                repeat: reduceMotion ? 0 : Infinity,
                repeatDelay: 1.2,
              }}
              className="group flex min-h-36 flex-col items-center justify-center rounded-2xl border border-border bg-background p-4 text-center transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-glow"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <Icon className="h-6 w-6" aria-hidden="true" />
              </span>
              <p className="mt-4 font-display text-sm font-semibold text-foreground">{label}</p>
              <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{detail}</p>
            </motion.div>
            {index < stages.length - 1 && (
              <motion.span
                aria-hidden="true"
                className="mx-auto flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary"
                animate={reduceMotion ? undefined : { x: [0, 4, 0] }}
                transition={{ duration: 1.4, repeat: Infinity }}
              >
                <ArrowRight className="h-4 w-4 rotate-90 sm:rotate-0" />
              </motion.span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
