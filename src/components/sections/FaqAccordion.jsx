import { ChevronDown } from "lucide-react";
import { faqs } from "@/data/content";

export const FaqAccordion = ({ items = faqs }) => (
  <div className="mx-auto mt-12 max-w-3xl space-y-3">
    {items.map((item) => (
      <details key={item.q} className="group overflow-hidden rounded-2xl border border-border bg-card px-5 shadow-xs">
        <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 font-display text-base font-semibold text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2">
          {item.q}<ChevronDown className="h-4 w-4 shrink-0 transition-transform group-open:rotate-180" aria-hidden="true" />
        </summary>
        <p className="pb-5 text-sm leading-relaxed text-muted-foreground">{item.a}</p>
      </details>
    ))}
  </div>
);
