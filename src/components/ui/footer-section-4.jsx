import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Mail, MapPin, ArrowRight } from "lucide-react";

const footerLinks = [
  { title: "Product", links: [{ label: "Features", href: "/features" }, { label: "Get Quotation", href: "/book-meeting" }, { label: "Campus hiring", href: "/universities" }, { label: "Enterprise", href: "/enterprise" }] },
  { title: "Resources", links: [{ label: "Blog", href: "/blog" }, { label: "Resources", href: "/resources" }, { label: "FAQ", href: "/faq" }, { label: "Products", href: "/products" }] },
  { title: "Company", links: [{ label: "About", href: "/about" }, { label: "Contact", href: "/contact" }, { label: "Privacy", href: "/privacy" }, { label: "Terms", href: "/terms" }] },
];
const item = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: .5 } } };

export default function Footer4() {
  return <footer className="px-4 py-12">
    <div className="container mx-auto max-w-7xl">
      <div className="flex flex-col gap-4 md:flex-row">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={item} className="relative flex min-h-[330px] w-full flex-col justify-between overflow-hidden rounded-[1.75rem] bg-navy p-8 md:w-1/3 md:p-10">
          <div><Link to="/" aria-label="Mindlora home" className="inline-flex rounded-2xl bg-white/95 p-2"><img src="/mindlora-logo.png" alt="Mindlora" width="180" height="56" className="h-14 w-auto" /></Link></div>
          <div className="relative space-y-5 text-background">
            <h3 className="font-display text-xl font-bold">Let AI run your first-round interviews.</h3>
            <div className="space-y-2 text-sm text-background/75">
              <a href="mailto:info@mindlora.com" className="flex items-center gap-2 hover:text-background"><Mail className="h-4 w-4" /> info@mindlora.com</a>
               <div className="flex items-start gap-2"><MapPin className="mt-0.5 h-4 w-4 shrink-0" /><address className="not-italic">MindLoRA Private Limited<br />Bargaon, Hasanpur, Samastipur,<br />Bihar 848205, India</address></div>
               <Link to="/book-meeting" className="inline-flex items-center gap-2 font-semibold text-background">Get Quotation <ArrowRight className="h-4 w-4" /></Link>
            </div>
            <p className="text-xs text-background/60">© 2026 MindLoRA Private Limited. All rights reserved.</p>
          </div>
        </motion.div>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={item} className="flex min-h-[430px] w-full flex-col justify-between rounded-[1.75rem] border border-border bg-card p-8 md:w-2/3 md:p-12">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-3">{footerLinks.map(section => <div key={section.title}><h4 className="font-display font-bold">{section.title}</h4><ul className="mt-5 space-y-3 text-sm font-medium text-muted-foreground">{section.links.map(link => <li key={link.label}><Link to={link.href} className="hover:text-primary">{link.label}</Link></li>)}</ul></div>)}</div>
          <div className="mt-12 rounded-2xl bg-secondary/60 p-6"><p className="font-display text-lg font-bold text-foreground">Made in India for Indian hiring teams.</p><p className="mt-2 max-w-2xl text-sm text-muted-foreground">We conduct role-specific candidate interviews and return evidence-backed scorecards and shortlists.</p></div>
        </motion.div>
      </div>
    </div>
  </footer>;
}
