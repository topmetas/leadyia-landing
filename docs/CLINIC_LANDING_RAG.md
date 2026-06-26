# Landing Clinic — LeadyIA

Subdomínio sugerido: `clinica.leadyia.com`

Rotas incluídas:

- `/clinic`
- `/clinica`
- `/` quando o host começar com `clinica.` ou `clinic.`

## Objetivo

Esta landing funciona como site demonstrativo real para clínicas. Ela mostra a LeadyIA atuando como recepcionista virtual inteligente, com atendimento, triagem, agendamento e Pix opcional.

## Script do widget

```html
<script
  src="https://widget.leadyia.com/loader.js"
  data-tenant-id="TENANT_ID_CLINIC"
  data-niche="clinic"
  async
></script>
```

## RAG

Arquivo para upload/indexação:

`public/rag/clinic-rag.json`

## Regras de segurança

- Não emitir diagnóstico.
- Não prescrever medicamentos.
- Não substituir consulta médica.
- Encaminhar urgência para atendimento adequado.
- Responder apenas informações administrativas, comerciais e operacionais.
