import { slugify } from "./slug";

export function buildTOC(sections = []) {
  return sections
    .filter(Boolean)
    .map((section) => ({
      id: section.id || slugify(section.title || section.label || "secao"),
      title: section.title || section.label || "Seção",
      level: section.level || 2
    }));
}
