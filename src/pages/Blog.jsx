import { useMemo, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Search, ArrowRight, Clock } from "lucide-react";
import { SEO } from "@/components/common/SEO";
import { PageHero } from "@/components/common/PageHero";
import { StaggerGroup, StaggerItem, Reveal } from "@/components/common/Reveal";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { articles } from "@/data/content";

const posts = articles;
const categories = ["All", "Screening Operations", "Technical Hiring", "Campus Hiring"];

export default function Blog() {
  const [cat, setCat] = useState("All");
  const [q, setQ] = useState("");
  const featured = posts[0];

  const filtered = useMemo(() => {
    return posts.slice(1).filter((p) => (cat === "All" || p.category === cat) && p.title.toLowerCase().includes(q.toLowerCase()));
  }, [cat, q]);

  return (
    <>
      <SEO title="Hiring Insights" description="Practical guidance for Indian teams running candidate screening, technical interviews, and campus hiring." />
      <PageHero eyebrow="Insights" title="Practical ideas for better screening" subtitle="Guides for defining hiring bars, reviewing evidence, and running consistent first-round interviews." />

      <section className="pb-8">
        <div className="container-xl">
          <Reveal>
            <Link to="/blog" className="group grid overflow-hidden rounded-3xl border border-border bg-card shadow-card lg:grid-cols-2">
              <div className="aspect-[16/10] overflow-hidden lg:aspect-auto">
                <img src={featured.image} alt={featured.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="flex flex-col justify-center p-8 sm:p-10">
                <span className="inline-flex w-fit items-center gap-2 rounded-full bg-accent px-3 py-1 text-xs font-semibold text-accent-foreground">Featured · {featured.category}</span>
                <h2 className="mt-4 font-display text-2xl font-bold leading-snug text-foreground group-hover:text-primary sm:text-3xl">{featured.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">{featured.excerpt}</p>
                <div className="mt-5 flex items-center gap-3 text-sm text-muted-foreground">
                  <span className="inline-flex items-center gap-1"><Clock className="h-4 w-4" /> {featured.read}</span>
                  <span>·</span><span>{featured.date}</span>
                </div>
                <span className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-primary">Read article <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></span>
              </div>
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="py-10">
        <div className="container-xl">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-wrap gap-2">
              {categories.map((c) => (
                <button key={c} onClick={() => setCat(c)} className={cn("rounded-full border px-4 py-2 text-sm font-medium transition-colors", cat === c ? "border-primary bg-primary text-primary-foreground" : "border-border bg-card text-muted-foreground hover:text-foreground")}>{c}</button>
              ))}
            </div>
            <div className="relative w-full sm:w-72">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search articles..." className="h-11 rounded-xl pl-9" />
            </div>
          </div>

          <StaggerGroup className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filtered.map((a) => (
              <StaggerItem key={a.title} className="h-full">
                <Link to="/blog" className="group flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-xs transition-all duration-300 hover:-translate-y-1 hover:shadow-card">
                  <div className="aspect-[16/10] overflow-hidden"><img src={a.image} alt={a.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" /></div>
                  <div className="flex flex-1 flex-col p-6">
                    <div className="flex items-center gap-3 text-xs text-muted-foreground"><span className="rounded-full bg-accent px-2.5 py-1 font-semibold text-accent-foreground">{a.category}</span><span>{a.read}</span></div>
                    <h3 className="mt-4 font-display text-lg font-semibold leading-snug text-foreground group-hover:text-primary">{a.title}</h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{a.excerpt}</p>
                    <span className="mt-4 text-xs text-muted-foreground">{a.date}</span>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerGroup>
          {filtered.length === 0 && (
            <p className="mt-16 text-center text-muted-foreground">No articles match your search. Try a different keyword.</p>
          )}
        </div>
      </section>
    </>
  );
}
