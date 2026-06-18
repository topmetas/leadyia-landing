/**
 * =========================================================
 * 🧾 PUBLIC FOOTER — LEADYIA ENTERPRISE LANDING
 * =========================================================
 *
 * 📄 Arquivo: PublicFooter.jsx
 * 📁 Caminho: landing/src/components/layout/PublicFooter.jsx
 *
 * 🎯 Responsabilidade:
 * - Encerrar a landing com aparência premium e sinais de confiança.
 * - Organizar links institucionais, produto, nichos e acesso ao dashboard.
 * - Reforçar LGPD, segurança, white-label e operação SaaS.
 *
 * 🚫 O que este componente NÃO deve fazer:
 * - Não executa checkout.
 * - Não autentica usuário.
 * - Não coleta dados pessoais.
 * - Não decide permissões ou plano.
 *
 * 🧠 Por que existe assim:
 * O footer de uma landing enterprise precisa reduzir risco percebido. Ele deve
 * mostrar governança, clareza de produto e caminhos de continuidade, sem virar
 * uma área poluída ou institucional demais.
 * =========================================================
 */

const DASHBOARD_LOGIN_URL = "https://dashboard.leadyia.com/auth/login";
const DASHBOARD_REGISTER_URL = "https://dashboard.leadyia.com/auth/register";

const FOOTER_GROUPS = [
  {
    title: "Produto",
    links: [
      { label: "Demonstração", href: "#demo-widget" },
      { label: "Nichos atendidos", href: "#playbooks" },
      { label: "Calculadora de ROI", href: "#roi-calculator" },
      { label: "Planos", href: "#pricing" },
    ],
  },
  {
    title: "Playbooks",
    links: [
      { label: "Educação", href: "#playbooks" },
      { label: "Clínicas", href: "#playbooks" },
      { label: "Advocacia", href: "#playbooks" },
      { label: "Ecommerce", href: "#playbooks" },
    ],
  },
  {
    title: "Acesso",
    links: [
      { label: "Criar conta", href: DASHBOARD_REGISTER_URL },
      { label: "Entrar no dashboard", href: DASHBOARD_LOGIN_URL },
      { label: "Central de planos", href: "#pricing" },
      { label: "Ver demonstração", href: "#demo-widget" },
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
            <span className="ly-public-footer__eyebrow">Pronto para vender com IA?</span>
            <h2>Coloque o LeadyIA para atender, qualificar e vender pelo seu site.</h2>
            <p>
              Comece com setup guiado, playbook por nicho e dashboard para acompanhar conversas,
              leads, RAG, integrações e receita em tempo real.
            </p>
          </div>

          <div className="ly-public-footer__cta-actions">
            <a className="ly-public-footer__primary" href={DASHBOARD_REGISTER_URL}>
              Criar conta gratuita
            </a>
            <a className="ly-public-footer__secondary" href="#demo-widget">
              Ver IA funcionando
            </a>
          </div>
        </section>

        <div className="ly-public-footer__main">
          <div className="ly-public-footer__brand-block">
            <a className="ly-public-footer__brand" href="#hero">
              <span className="ly-public-footer__logo" aria-hidden="true">L</span>
              <span>
                <strong>LeadyIA</strong>
                <small>Recepcionista virtual inteligente</small>
              </span>
            </a>

            <p>
              Plataforma de IA para atendimento, vendas, qualificação de leads e automação de
              conversas com playbooks por segmento.
            </p>

            <div className="ly-public-footer__trust-row" aria-label="Sinais de confiança">
              <span>LGPD</span>
              <span>Multi-tenant</span>
              <span>White-label</span>
              <span>RAG</span>
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
