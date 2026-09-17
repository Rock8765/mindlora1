import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { LogIn, AlertCircle } from "lucide-react";
import { SEO } from "@/components/common/SEO";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const set = (k) => (e) => setForm((s) => ({ ...s, [k]: e.target.value }));

  const submit = (e) => {
    e.preventDefault();
    if (!form.email.trim() || !form.password) {
      setError("Please enter both your email and password.");
      return;
    }
    setError("User not registered.");
  };

  return (
    <>
      <SEO title="Log in" description="Log in to your Mindlora account." />
      <section className="flex min-h-[80vh] items-center pt-32 pb-20">
        <div className="container-xl">
          <div className="mx-auto w-full max-w-md rounded-3xl border border-border bg-card p-8 shadow-card">
            <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-primary text-primary-foreground shadow-glow">
              <LogIn className="h-6 w-6" />
            </span>
            <h1 className="mt-5 font-display text-2xl font-bold text-foreground">Welcome back</h1>
            <p className="mt-1.5 text-sm text-muted-foreground">Log in to your hiring workspace.</p>

            <form onSubmit={submit} className="mt-7 space-y-4">
              <div>
                <Label htmlFor="login-email">Email</Label>
                <Input id="login-email" type="email" className="mt-1.5 h-11 rounded-xl" value={form.email} onChange={set("email")} placeholder="you@company.com" maxLength={255} />
              </div>
              <div>
                <Label htmlFor="login-password">Password</Label>
                <Input id="login-password" type="password" className="mt-1.5 h-11 rounded-xl" value={form.password} onChange={set("password")} placeholder="••••••••" maxLength={128} />
              </div>

              {error && (
                <p className="flex items-center gap-2 rounded-xl bg-destructive/10 px-3 py-2.5 text-sm font-medium text-destructive">
                  <AlertCircle className="h-4 w-4 shrink-0" /> {error}
                </p>
              )}

              <Button type="submit" size="lg" className="h-12 w-full rounded-xl bg-gradient-primary text-base hover:shadow-glow">
                Log in
              </Button>
            </form>

            <p className="mt-6 text-center text-sm text-muted-foreground">
              Not on Mindlora yet?{" "}
              <Link to="/book-meeting" className="font-semibold text-primary hover:underline">Book a meeting</Link>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}