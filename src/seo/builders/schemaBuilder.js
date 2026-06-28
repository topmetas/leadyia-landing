import { SITE_SEO } from "../config/siteSeo.config";
import { absoluteUrl } from "../utils/urlBuilder";
import { buildFAQSchema } from "./faqBuilder";
import { buildBreadcrumb } from "./breadcrumbBuilder";

export function buildOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_SEO.siteName,
    url: SITE_SEO.baseUrl,
    logo: absoluteUrl(SITE_SEO.logo, SITE_SEO.baseUrl),
    sameAs: []
  };
}

export function buildWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_SEO.siteName,
    url: SITE_SEO.baseUrl,
    potentialAction: {
      "@type": "SearchAction",
      target: `${SITE_SEO.baseUrl}/blog?search={search_term_string}`,
      "query-input": "required name=search_term_string"
    }
  };
}

export function buildSoftwareSchema(input = {}) {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "LeadyIA",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    url: SITE_SEO.baseUrl,
    description: input.description || SITE_SEO.defaultDescription,
    image: absoluteUrl(input.image || SITE_SEO.defaultImage, SITE_SEO.baseUrl),
    offers: {
      "@type": "Offer",
      price: input.price || "97",
      priceCurrency: input.priceCurrency || "BRL",
      availability: "https://schema.org/InStock"
    }
  };
}

export function buildBusinessSchema(input = {}) {
  const type = input.schemaType || "LocalBusiness";
  return {
    "@context": "https://schema.org",
    "@type": type,
    name: input.businessName || input.title || "LeadyIA Demo",
    url: input.canonical || SITE_SEO.baseUrl,
    description: input.description || SITE_SEO.defaultDescription,
    image: absoluteUrl(input.image || SITE_SEO.defaultImage, SITE_SEO.baseUrl)
  };
}

export function buildSchemas(input = {}, meta = {}) {
  const schemas = [buildOrganizationSchema(), buildWebsiteSchema()];

  if (input.schemaType === "SoftwareApplication" || !input.schemaType) {
    schemas.push(buildSoftwareSchema({ ...input, description: meta.description }));
  } else {
    schemas.push(buildBusinessSchema({ ...input, canonical: meta.canonical, description: meta.description }));
  }

  const faqSchema = buildFAQSchema(input.faq);
  if (faqSchema) schemas.push(faqSchema);

  if (input.breadcrumb?.length) {
    schemas.push(buildBreadcrumb(input.breadcrumb));
  }

  return schemas.filter(Boolean);
}
