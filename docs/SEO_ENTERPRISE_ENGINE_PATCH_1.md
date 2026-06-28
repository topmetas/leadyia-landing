# Patch 1 — SEO Enterprise Engine Base

Este patch adiciona o motor central de SEO da LeadyIA.

## O que entra

- `src/seo` com builders, schemas, Open Graph, Twitter Card, canonical, keywords e FAQ Schema.
- `SEOProvider` aplicado na home e nas páginas de nicho.
- Meta tags padrão no `index.html`.
- `robots.txt`, `sitemap.xml` e `site.webmanifest`.

## Como aplicar

Copie os arquivos do ZIP para a raiz do projeto da landing.

Depois rode:

```bash
npm install
npm run build
npm run dev
```

## Resultado

Cada página passa a atualizar automaticamente:

- title
- description
- keywords
- canonical
- Open Graph
- Twitter Card
- JSON-LD
- FAQ Schema
- Breadcrumb Schema
