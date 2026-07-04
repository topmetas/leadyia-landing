# Fase 3 — Global Billing & Commercial Readiness

Objetivo: blindar o fluxo comercial global antes do lançamento público.

## O que esta fase valida

- O dashboard pode enviar `provider`, `country`, `currency` e `locale`, mas o backend continua sendo a autoridade final.
- Brasil/BRL sempre usa Mercado Pago/Pix.
- Internacional usa Stripe.
- Se o frontend enviar provider errado, o backend corrige pela região/moeda.
- Todos os tiers existem em todas as moedas suportadas: BRL, USD, EUR, GBP, CAD e MXN.
- LATAM sem moeda local habilitada ainda cai em USD/Stripe até liberar moeda local oficialmente.
- URLs de retorno do checkout são higienizadas para evitar open redirect.

## Critério para go-live global

1. `npm run validate:release` no backend deve passar.
2. `npm run validate:release` no dashboard deve passar.
3. `npm run build` na landing deve passar.
4. `npm run build:cdn` no widget deve passar.
5. Render/Vercel devem conter variáveis reais, sem `.env` versionado.

## Variáveis recomendadas

Backend:

- `CLIENT_URL=https://dashboard.leadyia.com`
- `PUBLIC_SITE_URL=https://leadyia.com`
- `STRIPE_SECRET_KEY=...`
- `STRIPE_WEBHOOK_SECRET=...`
- `MP_ACCESS_TOKEN=...`
- `MP_PLAN_STARTER=...`
- `MP_PLAN_PRO=...`
- `MP_PLAN_BUSINESS=...`
- `MP_PLAN_ENTERPRISE=...`
- `MP_PLAN_AGENCY=...`

Stripe price IDs opcionais:

- `STRIPE_PRICE_STARTER_USD`
- `STRIPE_PRICE_PRO_USD`
- `STRIPE_PRICE_BUSINESS_USD`
- `STRIPE_PRICE_ENTERPRISE_USD`
- `STRIPE_PRICE_AGENCY_USD`
- repetir para `EUR`, `GBP`, `CAD`, `MXN` se quiser usar prices fixos.

Sem price ID, o checkout internacional usa `price_data` dinâmico do catálogo.

## Ordem de testes manual

1. Brasil / BRL / Mercado Pago.
2. EUA / USD / Stripe.
3. Portugal / EUR / Stripe.
4. Reino Unido / GBP / Stripe.
5. Canadá / CAD / Stripe.
6. México / MXN / Stripe.
7. Chile/Colômbia/Argentina/Peru / USD / Stripe.

## Observação

Esta fase não altera preços comerciais. Ela reforça roteamento, consistência, validação e segurança do checkout global.
