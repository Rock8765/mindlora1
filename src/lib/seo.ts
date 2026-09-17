export const SITE_URL = "https://happy-redeploy.lovable.app";

export type Crumb = { name: string; path: string };

type HeadScript = { type: string; children: string };

export type PageHeadOptions = {
  /** Path starting with "/" — used for canonical and og:url. */
  path: string;
  title: string;
  description: string;
  /** File name (without extension) inside /public/og. */
  image?: string;
  ogType?: string;
  /** Trail after Home; Home is added automatically. Omit on the homepage. */
  breadcrumbs?: Crumb[];
  /** Keep out of search results (utility pages). */
  noindex?: boolean;
  /** Point the canonical at another page (duplicate content). */
  canonicalPath?: string;
  /** Extra JSON-LD blocks. */
  schema?: unknown[];
  /** Extra <link> tags, e.g. hreflang alternates. */
  extraLinks?: Array<Record<string, string>>;
};

const abs = (path: string) => `${SITE_URL}${path === "/" ? "/" : path.replace(/\/$/, "")}`;

export function pageHead(options: PageHeadOptions) {
  const {
    path,
    title,
    description,
    image = "home",
    ogType = "website",
    breadcrumbs,
    noindex = false,
    canonicalPath,
    schema = [],
  } = options;

  const url = abs(path);
  const canonical = abs(canonicalPath ?? path);
  const imageUrl = `${SITE_URL}/og/${image}.png`;

  const meta: Array<Record<string, string>> = [
    { title },
    { name: "description", content: description },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:type", content: ogType },
    { property: "og:url", content: url },
    { property: "og:site_name", content: "Mindlora" },
    { property: "og:locale", content: "en_IN" },
    { property: "og:image", content: imageUrl },
    { property: "og:image:width", content: "1200" },
    { property: "og:image:height", content: "630" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
    { name: "twitter:image", content: imageUrl },
  ];

  if (noindex) meta.push({ name: "robots", content: "noindex, follow" });

  const scripts: HeadScript[] = [];

  if (breadcrumbs && breadcrumbs.length > 0) {
    const trail = [{ name: "Home", path: "/" }, ...breadcrumbs];
    scripts.push({
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: trail.map((crumb, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: crumb.name,
          item: abs(crumb.path),
        })),
      }),
    });
  }

  for (const block of schema) {
    scripts.push({ type: "application/ld+json", children: JSON.stringify(block) });
  }

  return {
    meta,
    links: [{ rel: "canonical", href: canonical }],
    scripts,
  };
}

export const faqSchema = (items: Array<{ q: string; a: string }>) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: items.map(({ q, a }) => ({
    "@type": "Question",
    name: q,
    acceptedAnswer: { "@type": "Answer", text: a },
  })),
});

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "MindLoRA Private Limited",
  alternateName: "Mindlora",
  url: SITE_URL,
  logo: `${SITE_URL}/mindlora-logo.png`,
  image: `${SITE_URL}/og/about.png`,
  description:
    "India-first AI recruitment interviewing service that conducts HR, technical, and coding interviews for hiring teams and returns scorecards and ranked shortlists.",
  areaServed: { "@type": "Country", name: "India" },
  address: {
    "@type": "PostalAddress",
    streetAddress: "Bargaon, Hasanpur",
    addressLocality: "Samastipur",
    postalCode: "848205",
    addressRegion: "Bihar",
    addressCountry: "IN",
  },
};
