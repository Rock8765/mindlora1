import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Home, LifeBuoy } from "lucide-react";
import { SEO } from "@/components/common/SEO";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <>
      <SEO title="Page not found" description="The page you're looking for doesn't exist." />
      <section className="relative flex min-h-[80vh] items-center overflow-hidden pt-24">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-mesh" />
        <div className="pointer-events-none absolute inset-0 -z-10 bg-grid mask-fade-b opacity-40" />
        <div className="container-xl text-center">
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="font-display text-[7rem] font-bold leading-none text-gradient sm:text-[10rem]">404</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="mt-2 font-display text-2xl font-bold text-foreground sm:text-3xl">This page took a different interview</motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.15 }} className="mx-auto mt-3 max-w-md text-muted-foreground">{"The page you're looking for doesn't exist or has moved. Let's get you back on track."}</motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button asChild size="lg" className="h-12 rounded-xl bg-gradient-primary px-6 hover:shadow-glow"><Link to="/"><Home className="h-4 w-4" /> Back home</Link></Button>
            <Button asChild size="lg" variant="outline" className="h-12 rounded-xl px-6"><Link to="/contact"><LifeBuoy className="h-4 w-4" /> Contact support <ArrowRight className="h-4 w-4" /></Link></Button>
          </motion.div>
        </div>
      </section>
    </>
  );
}
