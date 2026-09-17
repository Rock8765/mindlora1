import { motion } from "framer-motion";
import { AreaChart, Area, ResponsiveContainer } from "recharts";
import { CheckCircle2, TrendingUp, Mic, Sparkles } from "lucide-react";
import { AnimatedCounter } from "@/components/common/AnimatedCounter";

const data = [
  { v: 42 }, { v: 55 }, { v: 49 }, { v: 63 }, { v: 71 }, { v: 68 }, { v: 82 }, { v: 88 }, { v: 94 },
];

const skills = [
  { label: "Communication", val: 92, color: "hsl(var(--primary))" },
  { label: "Technical depth", val: 86, color: "hsl(var(--indigo))" },
  { label: "Problem solving", val: 78, color: "hsl(var(--cyan))" },
];

export const DashboardPreview = () => (
  <div className="relative w-full rounded-3xl border border-border bg-card/90 p-4 shadow-elegant backdrop-blur sm:p-5">
    {/* Top bar */}
    <div className="flex items-center justify-between border-b border-border pb-3">
      <div className="flex items-center gap-1.5">
        <span className="h-3 w-3 rounded-full bg-destructive/70" />
        <span className="h-3 w-3 rounded-full bg-warning/80" />
        <span className="h-3 w-3 rounded-full bg-success/80" />
      </div>
      <span className="rounded-md bg-secondary px-2 py-1 text-[11px] font-medium text-muted-foreground">mindlora.com / dashboard</span>
      <span className="inline-flex items-center gap-1 rounded-md bg-success/10 px-2 py-1 text-[11px] font-semibold text-success"><span className="h-1.5 w-1.5 rounded-full bg-success" /> Live</span>
    </div>

    <div className="grid gap-4 pt-4 sm:grid-cols-5">
      {/* Score card */}
      <div className="sm:col-span-2 rounded-2xl bg-gradient-primary p-5 text-primary-foreground shadow-glow">
        <p className="text-xs font-medium opacity-90">Candidate role fit</p>
        <p className="mt-2 font-display text-4xl font-bold"><AnimatedCounter value={94} />%</p>
        <div className="mt-3 inline-flex items-center gap-1 rounded-full bg-white/15 px-2.5 py-1 text-xs font-medium">
           <TrendingUp className="h-3.5 w-3.5" /> Strong match
        </div>
        <div className="mt-5 h-16">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data} margin={{ top: 4, right: 0, left: 0, bottom: 0 }}>
              <defs>
                <linearGradient id="heroArea" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="white" stopOpacity={0.5} />
                  <stop offset="100%" stopColor="white" stopOpacity={0} />
                </linearGradient>
              </defs>
              <Area type="monotone" dataKey="v" stroke="white" strokeWidth={2.5} fill="url(#heroArea)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Skills */}
      <div className="sm:col-span-3 rounded-2xl border border-border bg-background p-5">
        <div className="flex items-center justify-between">
          <p className="text-sm font-semibold text-foreground">Skill breakdown</p>
          <Sparkles className="h-4 w-4 text-primary" />
        </div>
        <div className="mt-4 space-y-4">
          {skills.map((s, i) => (
            <div key={s.label}>
              <div className="flex items-center justify-between text-xs">
                <span className="font-medium text-foreground">{s.label}</span>
                <span className="text-muted-foreground">{s.val}%</span>
              </div>
              <div className="mt-1.5 h-2 w-full overflow-hidden rounded-full bg-secondary">
                <motion.div
                  className="h-full rounded-full"
                  style={{ background: s.color }}
                  initial={{ width: 0 }}
                  whileInView={{ width: `${s.val}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.2 + i * 0.15, ease: [0.22, 1, 0.36, 1] }}
                />
              </div>
            </div>
          ))}
        </div>
        <div className="mt-5 flex items-center gap-2 rounded-xl bg-secondary p-3">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary"><Mic className="h-4 w-4" /></span>
          <p className="text-xs leading-snug text-muted-foreground"><span className="font-semibold text-foreground">Evidence:</span> Explained the trade-off clearly and handled two adaptive follow-ups.</p>
        </div>
      </div>
    </div>

    {/* Checklist row */}
    <div className="mt-4 grid grid-cols-3 gap-3">
      {["HR cleared", "Coding cleared", "Scorecard ready"].map((t) => (
        <div key={t} className="flex items-center gap-2 rounded-xl border border-border bg-background px-3 py-2.5">
          <CheckCircle2 className="h-4 w-4 shrink-0 text-success" />
          <span className="truncate text-xs font-medium text-foreground">{t}</span>
        </div>
      ))}
    </div>
  </div>
);
