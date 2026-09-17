import { Link } from "@tanstack/react-router";
import { ArrowRight, CalendarCheck } from "lucide-react";
import { Reveal } from "@/components/common/Reveal";
import { Button } from "@/components/ui/button";

export const QuotationSection = () => (
  <section id="quotation" className="bg-secondary/40 py-20 sm:py-28">
    <div className="container-xl">
      <Reveal>
        <div className="mx-auto max-w-3xl text-center">
          <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
            <CalendarCheck className="h-6 w-6" aria-hidden="true" />
          </span>
          <h2 className="mt-5 font-display text-3xl font-bold text-foreground sm:text-4xl">Every hiring need is different</h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Interview volume, role complexity, and screening depth vary by team — so does the right plan. Book a quick call and we'll put together a quotation built around how you hire.
          </p>
          <Button asChild size="lg" className="mt-8 h-12 rounded-xl bg-gradient-primary px-6 hover:shadow-glow">
            <Link to="/book-meeting">Book a meeting <ArrowRight className="h-4 w-4" /></Link>
          </Button>
        </div>
      </Reveal>
    </div>
  </section>
);