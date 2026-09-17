import { Link } from "@tanstack/react-router";
import { MapPin, CheckCircle2 } from "lucide-react";
import { PageHero } from "@/components/common/PageHero";
import { Reveal } from "@/components/common/Reveal";
import { Button } from "@/components/ui/button";

export default function LocalCity({ copy, altHref, altLabel }) {
  return (
    <>
      <PageHero eyebrow={copy.eyebrow} title={copy.h1} subtitle={copy.intro} />

      <section className="pb-8">
        <div className="container-xl">
          <Reveal>
            <p className="text-sm text-muted-foreground">
              {copy.switchPrefix}{" "}
              <Link to={altHref} className="font-medium text-primary underline underline-offset-4">
                {altLabel}
              </Link>
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-8">
        <div className="container-xl grid gap-8 lg:grid-cols-2">
          <Reveal>
            <div>
              <h2 className="font-display text-2xl font-semibold text-foreground">{copy.whoTitle}</h2>
              <ul className="mt-4 space-y-3">
                {copy.who.map((item) => (
                  <li key={item} className="flex gap-3 text-sm text-muted-foreground">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal>
            <div>
              <h2 className="font-display text-2xl font-semibold text-foreground">{copy.howTitle}</h2>
              <ol className="mt-4 space-y-3">
                {copy.how.map((item, i) => (
                  <li key={item} className="flex gap-3 text-sm text-muted-foreground">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-semibold text-primary">
                      {i + 1}
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ol>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-8">
        <div className="container-xl">
          <Reveal>
            <div className="rounded-3xl border border-border bg-card p-6 shadow-xs sm:p-8">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <MapPin className="h-5 w-5" />
              </span>
              <h2 className="mt-4 font-display text-2xl font-semibold text-foreground">{copy.addressTitle}</h2>
              <address className="mt-2 not-italic text-sm text-muted-foreground">
                Mindlora Private Limited
                <br />
                {copy.address}
              </address>
              <p className="mt-3 max-w-2xl text-sm text-muted-foreground">{copy.addressNote}</p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-8">
        <div className="container-xl">
          <h2 className="font-display text-2xl font-semibold text-foreground">{copy.faqTitle}</h2>
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            {copy.faqs.map((f) => (
              <Reveal key={f.q}>
                <div className="h-full rounded-2xl border border-border bg-card p-5 shadow-xs">
                  <h3 className="font-display text-base font-semibold text-foreground">{f.q}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{f.a}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container-xl">
          <Reveal>
            <div className="rounded-3xl border border-border bg-primary/5 p-8 text-center">
              <h2 className="font-display text-2xl font-semibold text-foreground">{copy.ctaTitle}</h2>
              <p className="mx-auto mt-2 max-w-xl text-sm text-muted-foreground">{copy.ctaText}</p>
              <Button asChild size="lg" className="mt-5">
                <Link to="/book-meeting">{copy.ctaButton}</Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
