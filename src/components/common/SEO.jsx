/**
 * Page metadata is now owned by each route's `head()` in src/routes/* (see
 * src/lib/seo.ts), which renders server-side for crawlers. This component is a
 * no-op kept so existing page imports keep working.
 */
export const SEO = () => null;
