/**
 * =========================================================
 * SchedulingHome.jsx
 * Seção premium da home sobre agendamentos, Pix e nichos.
 * =========================================================
 */

const STEPS = [
  {
    number: "01",
    title: "Entende a intenção",
    text: "A IA identifica se o visitante quer consulta, avaliação, visita, matrícula, suporte, compra ou demonstração.",
  },
  {
    number: "02",
    title: "Coleta os dados certos",
    text: "Nome, telefone, serviço, especialidade, bairro, produto ou canal preferido são solicitados conforme o nicho.",
  },
  {
    number: "03",
    title: "Pré-reserva ou encaminha",
    text: "O atendimento cria o próximo passo: agenda, lead qualificado, visita, conversa com recepção, corretor ou consultor.",
  },
  {
    number: "04",
    title: "Pix quando necessário",
    text: "Quando configurado, a plataforma pode solicitar sinal, matrícula, consulta inicial ou reserva de horário.",
  },
];

const USE_CASES = [
  "Clínicas e estética: avaliações, consultas e retornos",
  "Imobiliárias: visitas, corretores e imóveis de interesse",
  "Jurídico: triagem e consulta inicial com segurança",
  "Educação: matrículas, cursos, aulas e diagnóstico",
  "E-commerce: produtos, categorias, ofertas e pedidos",
];

export default function SchedulingHome() {
  return (
    <section className="leadyia-scheduling-section" id="scheduling">
      <div className="leadyia-scheduling-container">
        <div className="leadyia-scheduling-copy">
          <span>Agenda, Pix e fluxo comercial</span>
          <h2>Mais que responder: a IA conduz o lead para a próxima ação.</h2>
          <p>
            Cada playbook pode seguir um fluxo próprio: agendar, qualificar, vender, gerar Pix,
            encaminhar para humano ou recomendar produtos. Tudo com CTAs coerentes com a conversa.
          </p>

          <div className="leadyia-scheduling-usecases">
            {USE_CASES.map((item) => (
              <div key={item}>✓ {item}</div>
            ))}
          </div>
        </div>

        <div className="leadyia-scheduling-steps" aria-label="Como funciona o fluxo de agendamento e conversão">
          {STEPS.map((step) => (
            <article key={step.number}>
              <span>{step.number}</span>
              <strong>{step.title}</strong>
              <p>{step.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
