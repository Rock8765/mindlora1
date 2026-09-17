import { cn } from "@/lib/utils";

const DEFAULT_MEMBERS = [
  { id: "1", name: "Soma Roy", role: "Founder & CEO", description: "Sets the company direction and keeps customer outcomes at the center." },
  { id: "2", name: "Arjun Mehta", role: "Co-founder & CTO", description: "Leads platform architecture, security, and technical strategy." },
  { id: "3", name: "Priya Deshmukh", role: "Head of Product", description: "Turns hiring-team needs into focused product workflows." },
  { id: "4", name: "Rohan Iyer", role: "Engineering Lead", description: "Builds the reliable systems behind every interview." },
  { id: "5", name: "Ananya Krishnan", role: "AI/ML Lead", description: "Develops the evaluation models behind adaptive interviews." },
  { id: "6", name: "Vikram Patil", role: "Head of Sales & Partnerships", description: "Helps hiring companies design effective screening workflows." },
];

export default function TeamShowcase({ members = DEFAULT_MEMBERS }) {
  return (
    <div className="mx-auto grid w-full max-w-6xl gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {members.map((member, index) => (
        <article key={member.id} className="group rounded-3xl border border-border bg-card p-6 shadow-xs transition-all hover:-translate-y-1 hover:shadow-card">
          <div className={cn("flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-primary font-display text-2xl font-bold text-primary-foreground shadow-glow", index % 2 && "bg-navy") } aria-hidden="true">
            {member.name.split(" ").map((part) => part[0]).join("")}
          </div>
          <h3 className="mt-5 font-display text-lg font-semibold text-foreground">{member.name}</h3>
          <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-primary">{member.role}</p>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{member.description}</p>
        </article>
      ))}
    </div>
  );
}
