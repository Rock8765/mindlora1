import { useEffect, useState } from "react";
import { Link, useLocation } from "@tanstack/react-router";
import { motion, useScroll, useSpring } from "framer-motion";
import { Menu, CalendarCheck } from "lucide-react";
import { Logo } from "@/components/brand/Logo";
import { MagneticButton } from "@/components/common/MagneticButton";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const links = [
  { label: "Home", to: "/" },
  { label: "Products", to: "/products" },
  { label: "About us", to: "/about" },
  { label: "Get Quotation", to: "/book-meeting" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setMobileOpen(false); }, [location.pathname]);

  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 24, restDelta: 0.001 });

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <motion.div style={{ scaleX: progress }} className="absolute inset-x-0 top-0 h-0.5 origin-left bg-gradient-brand" />
      <div className="container-xl">
        <div
          className={cn(
            "mt-3 flex h-16 items-center justify-between rounded-2xl px-4 transition-all duration-300",
            scrolled ? "glass shadow-card" : "bg-transparent"
          )}
        >
          <Logo />

          <nav aria-label="Main navigation" className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-1 rounded-full border border-border/60 bg-background/60 p-1 backdrop-blur lg:flex">
            {links.map((it) => (
              <Link
                key={it.to}
                to={it.to}
                activeOptions={{ exact: it.to === "/" }}
                activeProps={{ className: "bg-secondary text-foreground" }}
                className="rounded-full px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {it.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-2 lg:flex">
            <Button asChild variant="ghost" className="rounded-xl px-4 text-sm font-medium">
              <Link to="/login">Login</Link>
            </Button>
            <MagneticButton>
              <Button asChild className="rounded-xl bg-gradient-primary shadow-xs transition-all hover:shadow-glow">
                <Link to="/book-meeting"><CalendarCheck className="h-4 w-4" /> Book a meeting</Link>
              </Button>
            </MagneticButton>
          </div>

          {/* Mobile */}
          <div className="lg:hidden">
            <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="rounded-xl border-border" aria-label="Open menu">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[86%] max-w-sm overflow-y-auto">
                <SheetHeader>
                  <SheetTitle className="text-left"><Logo /></SheetTitle>
                </SheetHeader>
                <div className="mt-6 space-y-6">
                  <div className="space-y-1">
                    {[...links, { label: "Contact", to: "/contact" }].map((it) => (
                      <Link key={it.to} to={it.to} className="block rounded-xl p-2.5 text-sm font-medium text-foreground transition-colors hover:bg-secondary">{it.label}</Link>
                    ))}
                  </div>
                  <div className="flex flex-col gap-2 pt-2">
                    <Button asChild variant="outline" className="w-full rounded-xl"><Link to="/login">Login</Link></Button>
                    <Button asChild className="w-full rounded-xl bg-gradient-primary"><Link to="/book-meeting">Book a meeting</Link></Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};
