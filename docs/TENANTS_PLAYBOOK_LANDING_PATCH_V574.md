# Patch Landing v574 — Logo do widget + tenants por playbook

## Onde preencher os tenants

Edite o arquivo:

`src/config/playbookTenants.config.js`

Troque somente os campos abaixo em cada playbook:

- `tenantId`: coloque o ID real do tenant criado no backend/dashboard.
- `widgetKey`: deixe vazio se o backend autoriza só por tenant/domínio; preencha se o bootstrap exigir chave do widget.

Enquanto o `tenantId` começar com `TENANT_ID_`, o widget real não carrega. Isso evita erro 401 antes de você criar os registros.

## Endereços das páginas/playbooks

| Playbook | Página principal | Alternativas | Domínios para liberar no tenant |
|---|---|---|---|
| LeadyIA/SaaS | `/` | `/demo`, `/playbook`, `/playbooks`, `/saas`, `/ao-vivo` | `leadyia.com`, `www.leadyia.com`, `demo.leadyia.com`, `playbooks.leadyia.com` |
| Clínica | `/clinica` | `/clinic` | `leadyia.com`, `www.leadyia.com`, `clinica.leadyia.com`, `clinic.leadyia.com` |
| Estética | `/estetica` | `/aesthetics` | `leadyia.com`, `www.leadyia.com`, `estetica.leadyia.com`, `aesthetics.leadyia.com` |
| Advocacia/Jurídico | `/juridico` | `/advocacia`, `/legal` | `leadyia.com`, `www.leadyia.com`, `juridico.leadyia.com`, `advocacia.leadyia.com`, `legal.leadyia.com` |
| Imobiliária | `/imobiliaria` | `/imoveis`, `/realestate` | `leadyia.com`, `www.leadyia.com`, `imobiliaria.leadyia.com`, `imoveis.leadyia.com`, `realestate.leadyia.com` |
| Educação | `/educacao` | `/education`, `/escola` | `leadyia.com`, `www.leadyia.com`, `educacao.leadyia.com`, `education.leadyia.com`, `escola.leadyia.com` |
| E-commerce | `/ecommerce` | `/loja`, `/shop` | `leadyia.com`, `www.leadyia.com`, `ecommerce.leadyia.com`, `loja.leadyia.com`, `shop.leadyia.com` |

## Regra importante

No backend, domínio autorizado não leva caminho. Para `https://leadyia.com/clinica`, libere `leadyia.com` e `www.leadyia.com`. Se usar subdomínio, libere também o subdomínio específico.

## Arquivos alterados

- `public/leadyia-widget-icon.svg`
- `src/components/layout/PublicHeader.jsx`
- `src/components/layout/PublicFooter.jsx`
- `src/components/layout/PublicLayout.jsx`
- `src/components/widget/LeadyIAPlaybookWidgetLoader.jsx`
- `src/config/playbookTenants.config.js`
- `src/styles/public-shell.css`
- `src/data/niches/*.data.js`
