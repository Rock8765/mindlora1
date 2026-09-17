import { useState } from "react";
import { toast } from "sonner";
import { Mail, MessageSquare, Phone, MapPin, Send } from "lucide-react";
import { SEO } from "@/components/common/SEO";
import { PageHero } from "@/components/common/PageHero";
import { Reveal } from "@/components/common/Reveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const supportCards = [
  { icon: "MessageSquare", title: "Chat with us", desc: "Replies within one business day.", action: "Start a chat" },
  { icon: "Mail", title: "Email support", desc: "info@mindlora.com", action: "Send an email" },
  { icon: "Phone", title: "Talk to sales", desc: "For hiring teams and agencies.", action: "Book a call" },
];

const iconMap = { MessageSquare, Mail, Phone };

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", company: "", topic: "", message: "" });
  const set = (k) => (e) => setForm((s) => ({ ...s, [k]: e?.target ? e.target.value : e }));

  const submit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error("Please fill in your name, email, and message.");
      return;
    }
    if (!/.+@.+\..+/.test(form.email)) {
      toast.error("That email doesn't look quite right.");
      return;
    }
    toast.success("Thanks! We'll get back to you within one business day.");
    setForm({ name: "", email: "", company: "", topic: "", message: "" });
  };

  return (
    <>
      <SEO title="Contact" description="Get in touch with the Mindlora team — support, sales, partnerships, and press inquiries." />
      <PageHero eyebrow="Contact" title="Tell us what you’re hiring for" subtitle="Share your open roles, monthly interview volume, and current screening process." />

      <section className="pb-8">
        <div className="container-xl">
          <div className="grid gap-4 sm:grid-cols-3">
            {supportCards.map((c) => {
              const I = iconMap[c.icon];
              return (
                <Reveal key={c.title}>
                  <div className="flex h-full flex-col rounded-3xl border border-border bg-card p-6 shadow-xs">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary"><I className="h-5 w-5" /></span>
                    <h3 className="mt-4 font-display text-base font-semibold text-foreground">{c.title}</h3>
                    <p className="mt-1 flex-1 text-sm text-muted-foreground">{c.desc}</p>
                    <Button type="button" variant="link" className="mt-3 h-auto justify-start p-0 text-sm" onClick={() => toast("Use the form below and our team will respond within one business day.")}>{c.action} →</Button>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="container-xl">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
            <Reveal>
              <form onSubmit={submit} noValidate className="rounded-3xl border border-border bg-card p-7 shadow-card sm:p-8">
                <h2 className="font-display text-xl font-bold text-foreground">Send us a message</h2>
                <div className="mt-6 grid gap-5">
                  <div className="grid gap-2">
                    <Label htmlFor="name">Full name</Label>
                    <Input id="name" value={form.name} onChange={set("name")} placeholder="Jane Doe" className="h-11 rounded-xl" />
                  </div>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div className="grid gap-2">
                      <Label htmlFor="email">Work email</Label>
                      <Input id="email" type="email" value={form.email} onChange={set("email")} placeholder="jane@company.com" className="h-11 rounded-xl" />
                    </div>
                    <div className="grid gap-2">
                       <Label htmlFor="company">Company</Label>
                      <Input id="company" value={form.company} onChange={set("company")} placeholder="Optional" className="h-11 rounded-xl" />
                    </div>
                  </div>
                  <div className="grid gap-2">
                    <Label>What can we help with?</Label>
                    <Select value={form.topic} onValueChange={set("topic")}>
                      <SelectTrigger className="h-11 rounded-xl"><SelectValue placeholder="Choose a topic" /></SelectTrigger>
                      <SelectContent>
                        <SelectItem value="general">General question</SelectItem>
                        <SelectItem value="sales">Enterprise / Sales</SelectItem>
                        <SelectItem value="agency">Staffing agency</SelectItem>
                        <SelectItem value="support">Product support</SelectItem>
                        <SelectItem value="press">Press & partnerships</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea id="message" value={form.message} onChange={set("message")} placeholder="Tell us a bit about what you need..." className="min-h-32 rounded-xl" />
                  </div>
                  <Button type="submit" className="h-11 w-full rounded-xl bg-gradient-primary hover:shadow-glow"><Send className="h-4 w-4" /> Send message</Button>
                </div>
              </form>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="space-y-6">
                <div className="relative overflow-hidden rounded-3xl border border-border shadow-elegant">
                  <div className="flex aspect-[4/3] items-center justify-center bg-gradient-primary p-12 text-center font-display text-3xl font-bold text-primary-foreground">Mindlora India</div>
                </div>
                <div className="rounded-3xl border border-border bg-card p-7 shadow-xs">
                  <div className="flex items-start gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary"><MapPin className="h-5 w-5" /></span>
                    <div>
                      <p className="font-semibold text-foreground">MindLoRA Private Limited</p>
                      <address className="mt-1 text-sm not-italic text-muted-foreground">Bargaon, Hasanpur, Samastipur,<br />Bihar 848205, India</address>
                      <a href="/ai-recruitment-samastipur" className="mt-2 inline-block text-sm font-medium text-primary underline underline-offset-4">AI recruitment interviews in Samastipur, Bihar</a>
                    </div>
                  </div>
                  <div className="mt-5 grid grid-cols-2 gap-4 border-t border-border pt-5 text-sm">
                    <div className="col-span-2"><p className="text-muted-foreground">Business inquiries</p><p className="font-medium text-foreground">info@mindlora.com</p></div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
