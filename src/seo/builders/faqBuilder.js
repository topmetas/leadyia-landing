export function normalizeFAQ(faq = []) {
  return faq
    .map((item) => ({
      question: item.question || item.q || item.title,
      answer: item.answer || item.a || item.text
    }))
    .filter((item) => item.question && item.answer);
}

export function buildFAQSchema(faq = []) {
  const items = normalizeFAQ(faq);
  if (!items.length) return null;

  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer
      }
    }))
  };
}
