# Mindlora quotation-first B2B site update

## Goal

Make every public page consistently position Mindlora as an India-focused interview outsourcing service for hiring teams, remove published pricing and trial language, and direct buyers to book a meeting for a custom quotation.

## Sitewide content changes

- Replace every pricing, free-trial, pilot, and demo-sales CTA with “Get Quotation” or “Book a meeting,” linking to `/book-meeting` (the site route for `https://mindlora.com/book-meeting`).
- Remove pricing tiers, rupee amounts, billing toggles, comparison tables, plan badges, GST/billing-cycle copy, and pricing data. Convert `/pricing` into a quotation page so existing links/bookmarks remain useful without exposing prices.
- Add the specified “Every hiring need is different” quotation section wherever pricing previously appeared.
- Add the specified “How is pricing decided?” FAQ and remove pricing-specific or trial/pilot questions.
- Remove the homepage logo strip, roadmap/coverage block, duplicated stats/results blocks, full blog teaser, and newsletter form. Keep one concise Insights link only if it supports a real resources page.
- Keep the homepage sequence lean: hero, buyer audiences, workflow, features, reasons to choose Mindlora, security, testimonials, FAQ, quotation CTA, footer.
- Sweep every page and metadata entry for job-seeker, interview-practice, coaching, learner, cohort-readiness, beta, or free-trial framing and rewrite it for hiring buyers.

## Company identity

- Use “Mindlora” for the product and marketing brand.
- Use “MindLoRA Private Limited” for legal and registered-company references.
- Set the footer copyright exactly to “© 2026 MindLoRA Private Limited. All rights reserved.”
- Add the registered address to the footer, About page, and Contact page:
  - MindLoRA Private Limited
  - Bargaon, Hasanpur, Samastipur, Bihar 848205, India
- Update Privacy and Terms to name the legal entity and describe employer-led candidate interviewing rather than candidate practice.

## Visual and interaction changes

- Replace the current hero product preview with a lightweight three-stage animated workflow: “JD in → AI interview → Scorecard out,” built with optimized icons and CSS/Framer Motion rather than a heavy GIF.
- Use one consistent Lucide line-icon family for HR screening, technical/coding interviews, scorecards, shortlisting, workflow steps, and security controls.
- Improve workflow steps with numbered icon badges and a connected animated line.
- Keep initials-only testimonial avatars and add accessible labels where the initials communicate identity.
- Turn security labels into icon-led badges using shield, lock, and server motifs.
- Add restrained hover lift/glow to feature cards and disable or freeze decorative motion under `prefers-reduced-motion`.
- Preserve the existing dark-theme-compatible design tokens and optimize visuals for mobile and desktop.

## Routes and discoverability

- Update every content route’s unique title, description, Open Graph title/description/type, Twitter card, canonical, and route-specific wording for B2B recruitment interviewing.
- Remove `/pricing` from the sitemap and point navigation/footer quotation links to `/book-meeting`; keep `/pricing` as a no-price quotation page for compatibility.
- Keep About, Contact, Terms, Privacy, product, enterprise, campus-hiring, resources, FAQ, and booking pages consistent with India-only B2B positioning.

## Verification

- Search the codebase for forbidden pricing/trial/job-seeker terminology and stale legal names.
- Check current build/runtime diagnostics after edits.
- Verify key pages and interactions in the browser at desktop and mobile widths, including reduced-motion behavior and the booking links.
