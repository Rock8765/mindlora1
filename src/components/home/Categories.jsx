import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/common/SectionHeading";
import { StaggerGroup, StaggerItem } from "@/components/common/Reveal";
import { Icon } from "@/components/common/Icon";
import { categories } from "@/data/content";

export const Categories = () => (
  <section className="py-20 sm:py-28">
    <div className="container-xl">
      <SectionHeading
        eyebrow="Interview categories"
        title="Every round, every role, every industry"
        subtitle="Thousands of curated questions and scenarios, mapped to the exact interviews you'll actually face."
      />
      <StaggerGroup className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((c) => (
          <StaggerItem key={c.title}>
            <Link
              to="/features"
              className="group flex h-full flex-col rounded-3xl border border-border bg-card p-6 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-card"
            >
              <div className="flex items-center justify-between">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-secondary text-primary">
                  <Icon name={c.icon} className="h-5 w-5" />
                </span>
                <span className="rounded-full bg-accent px-2.5 py-1 text-[11px] font-semibold text-accent-foreground">
                  {c.count}
                </span>
              </div>
              <h3 className="mt-5 font-display text-lg font-semibold text-foreground">{c.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{c.desc}</p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary">
                Explore{" "}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          </StaggerItem>
        ))}
      </StaggerGroup>
    </div>
  </section>
);
