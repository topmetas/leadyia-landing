export default function HeroConversion() {
  return (
    <section className="bg-white text-slate-900 py-24 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* LEFT — COPY */}
          <div>
            <span className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-4 py-1 text-sm text-blue-600">
              🧠 Conversion Decision Engine
            </span>

            <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl">
              Seu site não precisa
              <span className="block text-blue-600">
                responder leads.
              </span>
              Precisa decidir o que fazer com eles.
            </h1>

            <p className="mt-6 text-lg text-slate-600 max-w-xl">
              O <strong>LeadyIA</strong> é um motor conversacional com
              <strong> decisão, scoring e handoff automático</strong> —
              projetado para transformar conversas em vendas reais.
            </p>

            {/* CTA */}
            <div className="mt-8 flex flex-wrap gap-4">
              <button
                className="rounded-xl bg-blue-600 px-6 py-3 text-white font-semibold shadow hover:opacity-90 transition"
                onClick={() => {
                  window.dispatchEvent(new Event("open-leadyia-widget"));
                }}
              >
                Ver LeadyIA em ação
              </button>

              <a
                href="#how-it-works"
                className="rounded-xl border border-slate-300 px-6 py-3 font-semibold text-slate-700 hover:bg-slate-100 transition"
              >
                Como funciona
              </a>
            </div>

            {/* Trust */}
            <div className="mt-10 flex flex-wrap gap-6 text-sm text-slate-500">
              <span>✔️ Decisão em tempo real</span>
              <span>✔️ Lead scoring invisível</span>
              <span>✔️ WhatsApp & CRM ready</span>
            </div>
          </div>

          {/* RIGHT — VISUAL */}
          <div className="relative">
            <div className="rounded-2xl border border-slate-200 bg-white shadow-xl p-6 space-y-4">

              {/* Fake chat */}
              <div className="space-y-3">
                <div className="max-w-[80%] rounded-xl bg-slate-100 px-4 py-2 text-sm text-slate-700">
                  Oi, estou procurando uma solução para captar mais leads.
                </div>

                <div className="ml-auto max-w-[80%] rounded-xl bg-blue-600 px-4 py-2 text-sm text-white">
                  Entendi 😊  
                  Posso te mostrar como automatizamos isso sem formulários?
                </div>
              </div>

              {/* Indicators */}
              <div className="mt-4 grid grid-cols-3 gap-4 text-center text-xs">
                <div className="rounded-lg bg-slate-100 p-3">
                  <p className="font-semibold">Stage</p>
                  <p className="mt-1 text-blue-600">Awareness</p>
                </div>

                <div className="rounded-lg bg-slate-100 p-3">
                  <p className="font-semibold">Score</p>
                  <p className="mt-1 text-green-600">42 → 68</p>
                </div>

                <div className="rounded-lg bg-slate-100 p-3">
                  <p className="font-semibold">Action</p>
                  <p className="mt-1 text-purple-600">Qualify</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
