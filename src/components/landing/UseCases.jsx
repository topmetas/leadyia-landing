export default function UseCases() {
  return (
    <section
      className="relative bg-black text-white py-28 px-6 overflow-hidden"
    >
      {/* background decorativo (AJUSTADO – sem bg-gradient-to-b) */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(to bottom, rgb(23,23,23), rgb(0,0,0))",
        }}
      />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
            Casos de Uso Reais
          </h2>

          <p className="mt-4 text-lg text-neutral-400">
            O Leadyia se adapta ao modelo de negócio, ao ciclo de vendas
            e ao nível de maturidade do lead — sem scripts engessados.
          </p>
        </div>

        {/* Grid */}
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {[
            {
              title: "SaaS B2B",
              text:
                "Qualificação automática de leads, trial inteligente e handoff para vendas apenas quando o lead está pronto.",
              highlight: "Conversão + LTV",
            },
            {
              title: "Agências",
              text:
                "Identifica intenção de orçamento, separa curiosos de decisores e prioriza leads de alto ticket.",
              highlight: "Filtro de intenção",
            },
            {
              title: "Produtos Enterprise",
              text:
                "Reduz fricção no funil, educa leads técnicos e ativa vendas assistidas automaticamente.",
              highlight: "Vendas complexas",
            },
            {
              title: "Startups em Escala",
              text:
                "Um único bot operando como SDR, pré-vendas e qualificador 24/7.",
              highlight: "Escala sem headcount",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="
                group relative flex flex-col
                rounded-2xl border border-neutral-800
                bg-neutral-900 p-6
                transition hover:-translate-y-1 hover:border-brand-blue
              "
            >
              {/* Tag */}
              <span className="mb-4 inline-block w-fit rounded-full bg-brand-blue/10 px-3 py-1 text-xs font-semibold text-brand-blue">
                {item.highlight}
              </span>

              {/* Conteúdo */}
              <h3 className="text-lg font-semibold">
                {item.title}
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-neutral-400">
                {item.text}
              </p>

              {/* CTA discreto */}
              <div className="mt-auto pt-6">
                <span className="text-xs font-semibold text-brand-blue opacity-0 transition group-hover:opacity-100">
                  Ver aplicação →
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
