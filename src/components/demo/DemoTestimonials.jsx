const TESTIMONIALS = [
  ['Clínica', 'A recepção ganha tempo porque a IA já entende se é consulta, retorno, convênio ou localização.'],
  ['Imobiliária', 'O lead chega mais qualificado, com bairro, faixa de preço e intenção de visita.'],
  ['E-commerce', 'A conversa vira recomendação de produto e link de compra, não apenas resposta genérica.'],
];

export default function DemoTestimonials() {
  return (
    <div className="live-demo-testimonials">
      {TESTIMONIALS.map(([segment, quote]) => (
        <article key={segment}>
          <span>★★★★★</span>
          <p>“{quote}”</p>
          <strong>{segment}</strong>
        </article>
      ))}
    </div>
  );
}
