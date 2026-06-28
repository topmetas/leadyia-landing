import { buildMeta } from "../builders/metaBuilder";
import { buildOpenGraph } from "../builders/ogBuilder";
import { buildTwitterCard } from "../builders/twitterBuilder";
import { buildSchemas } from "../builders/schemaBuilder";
import { buildAlternates } from "../builders/alternateBuilder";

export function buildSEO(input = {}) {
  const meta = buildMeta(input);
  const openGraph = buildOpenGraph(input, meta);
  const twitter = buildTwitterCard(input, meta);
  const schemas = buildSchemas(input, meta);
  const alternates = buildAlternates(input.path || "/", input.baseUrl);

  return { meta, openGraph, twitter, schemas, alternates };
}

export function applySEO(input = {}) {
  if (typeof document === "undefined") return buildSEO(input);

  const seo = buildSEO(input);
  document.title = seo.meta.title;

  upsertMeta("name", "description", seo.meta.description);
  upsertMeta("name", "keywords", seo.meta.keywords);
  upsertMeta("name", "robots", seo.meta.robots);
  upsertMeta("name", "author", seo.meta.author);
  upsertMeta("name", "theme-color", seo.meta.themeColor);
  upsertLink("canonical", seo.meta.canonical);

  Object.entries(seo.openGraph).forEach(([property, content]) => upsertMeta("property", property, content));
  Object.entries(seo.twitter).forEach(([name, content]) => upsertMeta("name", name, content));

  removeManaged("link", "data-leadyia-seo-alternate");
  seo.alternates.forEach((alternate) => {
    const link = document.createElement("link");
    link.setAttribute("rel", "alternate");
    link.setAttribute("hreflang", alternate.hreflang);
    link.setAttribute("href", alternate.href);
    link.setAttribute("data-leadyia-seo-alternate", "true");
    document.head.appendChild(link);
  });

  removeManaged("script", "data-leadyia-schema");
  seo.schemas.forEach((schema, index) => {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.textContent = JSON.stringify(schema);
    script.setAttribute("data-leadyia-schema", String(index));
    document.head.appendChild(script);
  });

  return seo;
}

function upsertMeta(attr, key, content) {
  if (!content) return;
  let node = document.head.querySelector(`meta[${attr}="${key}"]`);
  if (!node) {
    node = document.createElement("meta");
    node.setAttribute(attr, key);
    document.head.appendChild(node);
  }
  node.setAttribute("content", String(content));
}

function upsertLink(rel, href) {
  if (!href) return;
  let node = document.head.querySelector(`link[rel="${rel}"]`);
  if (!node) {
    node = document.createElement("link");
    node.setAttribute("rel", rel);
    document.head.appendChild(node);
  }
  node.setAttribute("href", href);
}

function removeManaged(tag, attr) {
  document.head.querySelectorAll(`${tag}[${attr}]`).forEach((node) => node.remove());
}
