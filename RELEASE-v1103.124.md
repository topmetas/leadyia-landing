# Landing LeadyIA v1103.124

- `leadyia.com` e `www.leadyia.com` usam o playbook institucional `leadyia`.
- `/saas` e `saas.leadyia.com` continuam usando `saas_b2b` com tenant próprio.
- Os 14 nichos continuam isolados e as páginas comerciais permanecem completas.
- Cadastro da landing principal envia `playbook=leadyia`.

Validação: `npm run test:leadyia-institutional-v1103.124 && npm run test:full-14-playbooks-v1103.123 && npm run build`.
