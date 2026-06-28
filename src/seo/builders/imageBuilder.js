export function imageSeoProps({ alt, title, priority = false } = {}) {
  return {
    alt: alt || "LeadyIA - IA para Atendimento e Vendas",
    title: title || "LeadyIA",
    loading: priority ? "eager" : "lazy",
    decoding: "async",
    fetchPriority: priority ? "high" : "auto"
  };
}
