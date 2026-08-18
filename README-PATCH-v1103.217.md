# PATCH v1103.217 — Public Legal Pages & WordPress Compliance

Base obrigatória: landing institucional v1103.216.

Aplicar os arquivos desta árvore preservando os caminhos relativos. O patch cria `/terms` e `/privacy`, adiciona links legais ao rodapé, atualiza o sitemap e inclui um validador específico.

Validação local:

```bash
npm run test:public-legal-pages-v1103.217
npm ci
npm run build
```

Nenhuma alteração foi feita nos playbooks, billing, checkout, widget, backend, dashboard ou canais.
