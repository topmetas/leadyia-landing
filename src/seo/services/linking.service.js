export const relatedLinks = [
  { label: "IA para clínicas", href: "/clinica" },
  { label: "IA para estética", href: "/estetica" },
  { label: "IA para advocacia", href: "/juridico" },
  { label: "IA para imobiliárias", href: "/imobiliaria" },
  { label: "IA para educação", href: "/educacao" },
  { label: "IA para e-commerce", href: "/ecommerce" }
];

export function getRelatedLinks(currentPath = "/") {
  return relatedLinks.filter((item) => item.href !== currentPath);
}
