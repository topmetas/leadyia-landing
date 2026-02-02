import Header from "../components/layout/PublicHeader";
import Footer from "../components/layout/PublicFooter";

export default function Contact() {
  return (
    <>
      <Header />

      <main className="contact-page">
        <section className="contact-hero">
          <h1>Fale com o time Leadyia</h1>
          <p>
            Seja para vendas, parcerias ou suporte enterprise, nosso time responde
            no ritmo do seu negócio.
          </p>
        </section>

        <section className="contact-grid">
          <div className="contact-card">
            <h2>Vendas & Enterprise</h2>
            <p>
              Ideal para leads <strong>HOT</strong>, operações complexas ou
              alto volume.
            </p>
            <ul>
              <li>Onboarding assistido</li>
              <li>Integração com CRM</li>
              <li>Auto-handoff configurado</li>
            </ul>
            <a href="/pricing" className="contact-link">
              Ver planos →
            </a>
          </div>

          <div className="contact-card">
            <h2>Suporte técnico</h2>
            <p>
              Para clientes ativos que precisam de ajuda técnica ou ajustes finos.
            </p>
            <ul>
              <li>RAG e documentos</li>
              <li>Playbooks</li>
              <li>Performance do bot</li>
            </ul>
            <a href="mailto:support@leadyia.com" className="contact-link">
              Enviar email →
            </a>
          </div>

          <div className="contact-card">
            <h2>Parcerias</h2>
            <p>
              Agências, SaaS e consultorias que querem revender ou integrar Leadyia.
            </p>
            <ul>
              <li>White-label</li>
              <li>Multi-tenant</li>
              <li>Revenue share</li>
            </ul>
            <a href="mailto:partners@leadyia.com" className="contact-link">
              Falar com parcerias →
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
