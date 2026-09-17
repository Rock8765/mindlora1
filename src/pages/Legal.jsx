import { SEO } from "@/components/common/SEO";
import { PageHero } from "@/components/common/PageHero";

const LegalBody = ({ sections, updated }) => (
  <section className="pb-24">
    <div className="container-xl">
      <div className="mx-auto max-w-3xl">
        <p className="text-sm text-muted-foreground">Last updated: {updated}</p>
        <div className="mt-8 space-y-10">
          {sections.map((s, i) => (
            <div key={i}>
              <h2 className="font-display text-xl font-bold text-foreground">{i + 1}. {s.h}</h2>
              {s.p.map((para, j) => (
                <p key={j} className="mt-3 text-sm leading-relaxed text-muted-foreground">{para}</p>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export function Privacy() {
  return (
    <>
      <SEO title="Privacy Policy" description="How MindLoRA Private Limited collects, uses, and protects hiring and candidate information." />
      <PageHero eyebrow="Legal" title="Privacy Policy" subtitle="Your trust matters. Here's exactly how we handle your data — in plain English." />
      <LegalBody updated="February 20, 2026" sections={[
        { h: "Overview", p: ["MindLoRA Private Limited (“Mindlora,” “we,” “us”) is committed to protecting the information entrusted to us by hiring organizations and candidates. This policy explains what we collect, why we collect it, and the choices available."] },
        { h: "Information we collect", p: ["We collect information supplied by hiring organizations and candidates, including contact details, job requirements, resumes, interview responses, coding submissions, and service usage data.", "Audio, video, and transcript data used for interview assessment is processed to produce employer-requested scorecards and is never sold."] },
        { h: "How we use information", p: ["We use information to conduct role-specific interviews, produce evidence-backed scorecards and shortlists, secure the service, and communicate with authorized users."] },
        { h: "Data sharing", p: ["We do not sell your personal information. We share data only with service providers who help us operate the platform, under strict confidentiality obligations."] },
        { h: "Your rights", p: ["You can access, export, or permanently delete your data at any time from your account settings. You may also opt out of non-essential communications."] },
        { h: "Security", p: ["We use encryption in transit and at rest, and follow industry best practices to protect your information. No system is perfectly secure, but we work hard to keep yours safe."] },
        { h: "Contact", p: ["Questions about this policy? Email privacy@mindlora.com and we'll respond promptly."] },
      ]} />
    </>
  );
}

export function Terms() {
  return (
    <>
      <SEO title="Terms of Service" description="Terms governing hiring organizations using services from MindLoRA Private Limited." />
      <PageHero eyebrow="Legal" title="Terms of Service" subtitle="The agreement between you and Mindlora when you use our platform." />
      <LegalBody updated="February 20, 2026" sections={[
        { h: "Acceptance of terms", p: ["By accessing or using Mindlora, you agree to be bound by these Terms of Service with MindLoRA Private Limited. If you do not agree, please do not use the service."] },
        { h: "Use of the service", p: ["Hiring organizations may use Mindlora to configure and conduct candidate interviews, review assessment evidence, and manage shortlists for lawful recruitment purposes."] },
        { h: "Commercial terms", p: ["Scope, quotation, payment, renewal, cancellation, and service commitments are defined in the order form or agreement accepted by your organization."] },
        { h: "Intellectual property", p: ["All content, software, and trademarks on the platform are the property of MindLoRA Private Limited or its licensors and are protected by applicable laws."] },
        { h: "Disclaimer", p: ["Mindlora supports structured candidate assessment but does not make the final hiring decision or guarantee hiring outcomes. The service is provided subject to the applicable agreement."] },
        { h: "Limitation of liability", p: ["To the maximum extent permitted by law, Mindlora shall not be liable for any indirect, incidental, or consequential damages arising from your use of the platform."] },
        { h: "Contact", p: ["Questions about these terms? Email legal@mindlora.com."] },
      ]} />
    </>
  );
}
