# Widget + Landing International v501

Este patch fecha a terceira etapa da internacionalização:

- Backend: Mercado Pago para Brasil e Stripe global.
- Dashboard: país/moeda/provider no checkout.
- Widget + Landing: idioma automático, moeda automática, CTAs traduzidos e planos internacionais.

## Landing

Arquivos principais:

- `landing/src/config/international.config.js`
- `landing/src/services/publicPricing.service.js`
- `landing/src/components/international/LanguageCurrencySwitcher.jsx`
- `landing/src/components/landing/Pricing.jsx`
- `landing/src/styles/international.css`

A landing exibe os planos em:

- BRL → Mercado Pago/Pix
- USD/EUR/GBP/CAD/MXN → Stripe

O plano Agency também aparece em todas as moedas.

## Widget

Arquivos principais:

- `widget/src/i18n/messages.js`
- `widget/src/i18n/intl.js`
- `widget/src/i18n/i18n.js`
- `widget/src/i18n/locale.js`
- `widget/src/widget/utils/normalizeActions.js`

O widget detecta o idioma do navegador e traduz labels padrão de CTAs.

## Como aplicar

Copie as pastas `landing` e `widget` deste patch sobre o projeto v501.

Depois rode nos respectivos projetos:

```bash
npm install
npm run build
```

## Observação

Os valores batem com o catálogo backend v501:

- Starter: R$97 / US$19 / €18 / £15 / CA$26 / MX$349
- Pro: R$297 / US$59 / €55 / £49 / CA$80 / MX$1.069
- Business: R$597 / US$119 / €110 / £95 / CA$160 / MX$2.149
- Enterprise: R$997 / US$199 / €185 / £159 / CA$269 / MX$3.589
- Agency: R$1.497 / US$299 / €279 / £239 / CA$399 / MX$5.399
