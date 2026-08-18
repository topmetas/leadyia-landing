import { useEffect } from "react";
import PublicHeader from "../../components/layout/PublicHeader";
import PublicFooter from "../../components/layout/PublicFooter";

export default function LegalPageShell({ title, description, updatedAt, children }) {
  useEffect(() => {
    const previousTitle = document.title;
    const meta = document.querySelector('meta[name="description"]');
    const previousDescription = meta?.getAttribute("content") || "";

    document.title = `${title} | LeadyIA`;
    if (meta) meta.setAttribute("content", description);
    window.scrollTo({ top: 0, behavior: "auto" });

    return () => {
      document.title = previousTitle;
      if (meta) meta.setAttribute("content", previousDescription);
    };
  }, [title, description]);

  return (
    <div className="ly-legal-page">
      <PublicHeader />
      <main className="ly-legal-main">
        <header className="ly-legal-hero">
          <a href="/" className="ly-legal-back">← Voltar para LeadyIA</a>
          <span className="ly-legal-kicker">LeadyIA · Documento legal público</span>
          <h1>{title}</h1>
          <p>{description}</p>
          <div className="ly-legal-meta">
            <span>Última atualização: {updatedAt}</span>
            <span>Contato: <a href="mailto:support@leadyia.com">support@leadyia.com</a></span>
          </div>
        </header>

        <article className="ly-legal-document">{children}</article>
      </main>
      <PublicFooter />
    </div>
  );
}
