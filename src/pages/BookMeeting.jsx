import { useState } from "react";
import { CalendarCheck, Check, Clock, Video, ArrowLeft } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { SEO } from "@/components/common/SEO";
import { PageHero } from "@/components/common/PageHero";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calendar } from "@/components/ui/calendar";
import { cn } from "@/lib/utils";

const SLOTS = ["09:00 AM", "10:00 AM", "11:30 AM", "01:00 PM", "02:30 PM", "04:00 PM", "05:30 PM", "07:00 PM"];
const PLATFORMS = [
  { id: "zoom", label: "Zoom" },
  { id: "meet", label: "Google Meet" },
];

export default function BookMeeting() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", company: "" });
  const [platform, setPlatform] = useState("zoom");
  const [date, setDate] = useState();
  const [slot, setSlot] = useState("");
  const [error, setError] = useState("");
  const [done, setDone] = useState(false);

  const set = (k) => (e) => setForm((s) => ({ ...s, [k]: e.target.value }));

  const submit = (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.phone.trim()) {
      setError("Please fill in your name, email and phone number.");
      return;
    }
    if (!/.+@.+\..+/.test(form.email)) {
      setError("Please enter a valid email address.");
      return;
    }
    if (!date || !slot) {
      setError("Please choose a date and a preferred time slot.");
      return;
    }
    setError("");
    setDone(true);
  };

  if (done) {
    return (
      <>
        <SEO title="Meeting scheduled" description="Your Mindlora meeting is scheduled." />
        <section className="flex min-h-[70vh] items-center pt-32 pb-20">
          <div className="container-xl">
            <div className="mx-auto max-w-xl rounded-3xl border border-border bg-card p-10 text-center shadow-card">
              <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-success/10 text-success">
                <Check className="h-8 w-8" />
              </span>
              <h1 className="mt-6 font-display text-3xl font-bold text-foreground">
                Thanks — your meeting is scheduled!
              </h1>
              <p className="mt-3 text-muted-foreground">
                We will get in touch soon with your {PLATFORMS.find((p) => p.id === platform)?.label} invite.
              </p>
              <div className="mt-6 rounded-2xl bg-muted/60 p-5 text-left text-sm">
                <p className="text-foreground"><span className="text-muted-foreground">Name:</span> {form.name}</p>
                <p className="mt-1 text-foreground"><span className="text-muted-foreground">Email:</span> {form.email}</p>
                <p className="mt-1 text-foreground"><span className="text-muted-foreground">When:</span> {date?.toDateString()} · {slot}</p>
                <p className="mt-1 text-foreground"><span className="text-muted-foreground">Platform:</span> {PLATFORMS.find((p) => p.id === platform)?.label}</p>
              </div>
              <Button asChild className="mt-8 h-11 rounded-xl bg-gradient-primary px-6">
                <Link to="/"><ArrowLeft className="h-4 w-4" /> Back to home</Link>
              </Button>
            </div>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <SEO title="Get Quotation" description="Book a meeting with Mindlora for a quotation tailored to your hiring requirements." />
      <PageHero
        eyebrow="Get Quotation"
        title="Talk to the Mindlora team"
        subtitle="Choose a time and bring one active role. We’ll show how Mindlora builds the interview, evaluates candidates, and returns a ranked shortlist."
      />

      <section className="pb-24">
        <div className="container-xl">
          <form onSubmit={submit} className="mx-auto grid max-w-5xl gap-6 lg:grid-cols-2">
            <div className="rounded-3xl border border-border bg-card p-7 shadow-xs">
              <h2 className="font-display text-lg font-bold text-foreground">Your details</h2>
              <div className="mt-5 space-y-4">
                <div>
                  <Label htmlFor="bm-name">Full name</Label>
                  <Input id="bm-name" className="mt-1.5 h-11 rounded-xl" value={form.name} onChange={set("name")} placeholder="Arjun Mehta" maxLength={100} />
                </div>
                <div>
                  <Label htmlFor="bm-email">Work email</Label>
                  <Input id="bm-email" type="email" className="mt-1.5 h-11 rounded-xl" value={form.email} onChange={set("email")} placeholder="you@company.com" maxLength={255} />
                </div>
                <div>
                  <Label htmlFor="bm-phone">Phone number</Label>
                  <Input id="bm-phone" type="tel" className="mt-1.5 h-11 rounded-xl" value={form.phone} onChange={set("phone")} placeholder="+91 98765 43210" maxLength={20} />
                </div>
                <div>
                  <Label htmlFor="bm-company">Company name</Label>
                  <Input id="bm-company" className="mt-1.5 h-11 rounded-xl" value={form.company} onChange={set("company")} placeholder="Acme Inc." maxLength={120} />
                </div>
                <div>
                  <Label>Meeting platform</Label>
                  <div className="mt-2 grid grid-cols-2 gap-3">
                    {PLATFORMS.map((p) => (
                      <button
                        type="button"
                        key={p.id}
                        onClick={() => setPlatform(p.id)}
                        className={cn(
                          "flex items-center justify-center gap-2 rounded-xl border p-3 text-sm font-medium transition",
                          platform === p.id
                            ? "border-primary bg-primary/10 text-primary"
                            : "border-border bg-background text-muted-foreground hover:bg-secondary"
                        )}
                      >
                        <Video className="h-4 w-4" /> {p.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-border bg-card p-7 shadow-xs">
              <h2 className="font-display text-lg font-bold text-foreground">Pick a date &amp; time</h2>
              <div className="mt-5 flex justify-center rounded-2xl border border-border bg-background p-2">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  disabled={(d) => d < new Date(new Date().setHours(0, 0, 0, 0))}
                />
              </div>
              <p className="mt-6 flex items-center gap-2 text-sm font-semibold text-foreground">
                <Clock className="h-4 w-4 text-primary" /> Preferred time slot
              </p>
              <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-4">
                {SLOTS.map((s) => (
                  <button
                    type="button"
                    key={s}
                    onClick={() => setSlot(s)}
                    className={cn(
                      "rounded-xl border px-2 py-2.5 text-xs font-medium transition",
                      slot === s
                        ? "border-primary bg-primary/10 text-primary"
                        : "border-border bg-background text-muted-foreground hover:bg-secondary"
                    )}
                  >
                    {s}
                  </button>
                ))}
              </div>

              {error && <p className="mt-5 text-sm font-medium text-destructive">{error}</p>}

              <Button type="submit" size="lg" className="mt-6 h-12 w-full rounded-xl bg-gradient-primary text-base hover:shadow-glow">
                <CalendarCheck className="h-5 w-5" /> Confirm booking
              </Button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}