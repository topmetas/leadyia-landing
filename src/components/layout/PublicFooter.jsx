import WidgetOrbMark from "../brand/WidgetOrbMark";
import { COMMERCIAL_NICHES_V1103_123 } from "../../data/verticalNiches.v1103_123";
/**
 * =========================================================
 * 🧾 PUBLIC FOOTER — LEADYIA ENTERPRISE LANDING
 * =========================================================
 *
 * Footer premium expandido:
 * - reforça canais, agenda, Pix e nichos;
 * - organiza caminhos de conversão;
 * - mantém visual e estrutura existentes;
 * - não executa widget, checkout, autenticação ou lógica de tenant.
 * =========================================================
 */

const DASHBOARD_LOGIN_URL = "https://dashboard.leadyia.com/auth/login";
const DASHBOARD_REGISTER_URL = "https://dashboard.leadyia.com/auth/register";

const CHANNELS = [
  { icon: "🌐", label: "Site", detail: "Widget inteligente" },
  { icon: "📱", label: "WhatsApp", detail: "Atendimento e vendas" },
  { icon: "📸", label: "Instagram", detail: "Leads do direct" },
  { icon: "💬", label: "Messenger", detail: "Conversas integradas" },
];

const SCHEDULING = [
  { icon: "📅", label: "Agendamentos", detail: "Consultas, visitas e avaliações" },
  { icon: "💳", label: "Pix opcional", detail: "Sinal, reserva ou matrícula" },
  { icon: "🔔", label: "Confirmações", detail: "Reduz faltas e retrabalho" },
  { icon: "🤖", label: "Triagem com IA", detail: "Lead chega qualificado" },
];

const FOOTER_GROUPS = [
  {
    title: "Produto",
    links: [
      { label: "Demonstração", href: "#demo-widget" },
      { label: "Canais", href: "#channels" },
      { label: "Agendamentos", href: "#scheduling" },
      { label: "Calculadora de ROI", href: "#roi-calculator" },
      { label: "Planos", href: "#pricing" },
    ],
  },
  {
    title: "Playbooks ao vivo",
    links: [
      { label: "Hub dos 14 nichos", href: "/#playbooks" },
      ...COMMERCIAL_NICHES_V1103_123.map((item) => ({ label: item.label, href: item.href })),
    ],
  },
  {
    title: "Canais",
    links: [
      { label: "Widget para site", href: "#channels" },
      { label: "Plugin WordPress", href: "/wordpress" },
      { label: "WhatsApp", href: "#channels" },
      { label: "Instagram", href: "#channels" },
      { label: "Multiatendimento", href: "#channels" },
    ],
  },
  {
    title: "Agenda & Pagamentos",
    links: [
      { label: "Agendamento automático", href: "#scheduling" },
      { label: "Pix de reserva", href: "#scheduling" },
      { label: "Google Calendar", href: "#scheduling" },
      { label: "Confirmação de horários", href: "#scheduling" },
    ],
  },
  {
    title: "Acesso",
    links: [
      { label: "Criar conta", href: DASHBOARD_REGISTER_URL },
      { label: "Entrar no dashboard", href: DASHBOARD_LOGIN_URL },
      { label: "Central de planos", href: "#pricing" },
      { label: "Ver IA funcionando", href: "#demo-widget" },
    ],
  },
];

export default function PublicFooter() {
  return (
    <footer className="ly-public-footer">
      <div className="ly-public-footer__glow" aria-hidden="true" />

      <div className="ly-public-footer__shell">
        <section className="ly-public-footer__cta-card" aria-label="Começar com LeadyIA">
          <div>
            <span className="ly-public-footer__eyebrow">Atendimento, agenda e vendas no mesmo fluxo</span>
            <h2>Coloque a LeadyIA para atender, qualificar, agendar e vender em todos os seus canais.</h2>
            <p>
              Site, WhatsApp e Instagram trabalhando juntos com playbooks por nicho, RAG, CRM,
              agendamento e Pix opcional para transformar conversas em oportunidades reais.
            </p>
          </div>

          <div className="ly-public-footer__cta-actions">
            <a className="ly-public-footer__primary" href={DASHBOARD_REGISTER_URL}>
              Testar grátis por 7 dias
            </a>
            <a className="ly-public-footer__secondary" href="/demo">
              Ver playbooks ao vivo
            </a>
          </div>
        </section>

        <section className="ly-public-footer__conversion-grid" aria-label="Recursos principais da LeadyIA">
          <article className="ly-public-footer__mini-panel">
            <div className="ly-public-footer__mini-head">
              <span>🧭</span>
              <div>
                <strong>Canais conectados</strong>
                <small>Receba e qualifique leads onde eles chegam.</small>
              </div>
            </div>

            <div className="ly-public-footer__chips-grid">
              {CHANNELS.map((item) => (
                <a key={item.label} href="#channels" className="ly-public-footer__chip-card">
                  <span aria-hidden="true">{item.icon}</span>
                  <strong>{item.label}</strong>
                  <small>{item.detail}</small>
                </a>
              ))}
            </div>
          </article>

          <article className="ly-public-footer__mini-panel">
            <div className="ly-public-footer__mini-head">
              <span>📅</span>
              <div>
                <strong>Agenda, Pix e confirmação</strong>
                <small>Transforme intenção em horário confirmado.</small>
              </div>
            </div>

            <div className="ly-public-footer__chips-grid">
              {SCHEDULING.map((item) => (
                <a key={item.label} href="#scheduling" className="ly-public-footer__chip-card">
                  <span aria-hidden="true">{item.icon}</span>
                  <strong>{item.label}</strong>
                  <small>{item.detail}</small>
                </a>
              ))}
            </div>
          </article>
        </section>

        <div className="ly-public-footer__main">
          <div className="ly-public-footer__brand-block">
            <a className="ly-public-footer__brand" href="#hero">
              <WidgetOrbMark className="ly-public-footer__logo" label="LeadyIA" compact />
              <span>
                <strong>LeadyIA</strong>
                <small>Recepcionista virtual inteligente</small>
              </span>
            </a>

            <p>
              Plataforma de IA para atendimento, vendas, qualificação de leads, agendamentos,
              pagamentos e automação de conversas com playbooks por segmento.
            </p>

            <div className="ly-public-footer__trust-row" aria-label="Sinais de confiança">
              <span>LGPD</span>
              <span>Multi-tenant</span>
              <span>White-label</span>
              <span>RAG</span>
              <span>CRM</span>
              <span>Pix</span>
            </div>

            <div className="ly-public-footer__proof-note">
              <strong>Pronto para testar?</strong>
              <span>Escolha um playbook ao vivo, converse com a IA e veja como ela se comporta em cada nicho.</span>
            </div>
          </div>

          <div className="ly-public-footer__links-grid">
            {FOOTER_GROUPS.map((group) => (
              <nav key={group.title} aria-label={group.title}>
                <h3>{group.title}</h3>
                {group.links.map((link) => (
                  <a key={`${group.title}-${link.label}`} href={link.href}>
                    {link.label}
                  </a>
                ))}
              </nav>
            ))}
          </div>
        </div>

        <div className="ly-public-footer__bottom">
          <p>© 2026 LeadyIA. Todos os direitos reservados.</p>
          <p>Em conformidade com LGPD e boas práticas de segurança para SaaS.</p>
        </div>
      </div>
    </footer>
  );
}
