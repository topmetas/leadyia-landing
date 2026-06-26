# LeadyIA Landing v500 — Premium Unificada

Este pacote unifica a base `landing.leadyia.v.500` com as melhorias do pacote premium de footer, canais, agenda e conversão.

## Incluído

- Base v500 preservada.
- Home com canais: Site, WhatsApp, Instagram e multiatendimento.
- Home com agendamentos, confirmação e Pix opcional.
- Menu `Playbooks ao vivo` no header.
- Footer premium com canais, agendamentos, Pix, nichos e links de conversão.
- Páginas completas por nicho:
  - Clínica
  - Estética
  - Jurídico / Advocacia
  - Imobiliária / Real Estate
  - Educação
  - E-commerce
- Rotas clicáveis para todos os nichos.
- Suporte a subdomínios por nicho.
- Favicon SVG.
- Preview social/Open Graph para WhatsApp, Facebook, LinkedIn e Twitter/X.
- JSONs de RAG por nicho em `public/rag`.

## Rodar localmente

```bash
npm install
npm run dev
```

Acesse:

```text
http://localhost:5176
```

## Build

```bash
npm run build
npm run preview
```

## Rotas principais

```text
/                     Landing principal
/demo                 Hub / Playbooks ao vivo
/playbook             Hub / Playbooks ao vivo
/clinica              Clínica
/estetica             Estética
/juridico             Jurídico
/imobiliaria          Imobiliária
/educacao             Educação
/ecommerce            E-commerce
/register             Cadastro
```

## Subdomínios preparados

```text
playbook.leadyia.com      → Home / Hub
clinica.leadyia.com       → Clínica
estetica.leadyia.com      → Estética
juridico.leadyia.com      → Jurídico
imobiliaria.leadyia.com   → Imobiliária
educacao.leadyia.com      → Educação
ecommerce.leadyia.com     → E-commerce
```

## Onde trocar os tenants do widget

Nesta versão, o script principal ainda está no `index.html` com o tenant atual da landing. Para nichos ao vivo, o ideal é trocar para carregamento dinâmico por subdomínio na próxima etapa, criando um arquivo como:

```text
src/config/widgetTenants.js
```

com:

```js
export const WIDGET_TENANTS = {
  clinic: "TENANT_ID_CLINIC",
  aesthetics: "TENANT_ID_ESTETICA",
  legal: "TENANT_ID_LEGAL",
  realestate: "TENANT_ID_REALESTATE",
  education: "TENANT_ID_EDUCATION",
  ecommerce: "TENANT_ID_ECOMMERCE",
  saas: "TENANT_ID_SAAS",
};
```

## DNS na One.com + Vercel

Na Vercel, adicione os domínios no projeto. Depois, na One.com, crie os CNAMEs:

```text
playbook      CNAME   cname.vercel-dns.com
clinica       CNAME   cname.vercel-dns.com
estetica      CNAME   cname.vercel-dns.com
juridico      CNAME   cname.vercel-dns.com
imobiliaria   CNAME   cname.vercel-dns.com
educacao      CNAME   cname.vercel-dns.com
ecommerce     CNAME   cname.vercel-dns.com
```

Aguarde propagação e valide na Vercel.
