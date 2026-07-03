# Patch v577 — Navegação + Widget por Playbook

## O que corrige

1. Menu do header em páginas de playbook
   - Antes: links como `#pricing` ficavam presos em `/imobiliaria#pricing`.
   - Agora: links apontam para `/#pricing`, `/#playbooks`, etc.
   - Logo do header volta para `/`.

2. Widget muda ao navegar entre playbooks
   - Antes: se o usuário entrava na home e clicava em `/imobiliaria`, o loader podia continuar com o tenant/playbook LeadyIA porque o componente não recarregava no SPA.
   - Agora: o loader observa a rota atual e reinicializa o widget quando muda de página.

3. Resolução correta por path e subdomínio
   - Primeiro decide pelo path: `/imobiliaria`, `/clinica`, `/estetica`, etc.
   - Depois decide pelo subdomínio: `imobiliaria.leadyia.com`, `clinica.leadyia.com`, etc.

## Onde preencher tenants

Arquivo:

```txt
src/config/playbookTenants.config.js
```

Preencha `tenantId` em cada bloco:

- `saas`
- `clinic`
- `aesthetics`
- `legal`
- `realestate`
- `education`
- `ecommerce`

Exemplo:

```js
realestate: {
  label: "Imobiliária",
  playbook: "realestate",
  niche: "realestate",
  tenantId: "ID_DO_TENANT_IMOBILIARIA",
  widgetKey: "",
  paths: ["/imobiliaria", "/imoveis", "/realestate"],
  domains: ["leadyia.com", "www.leadyia.com", "imobiliaria.leadyia.com"],
}
```

## Importante no backend

Para página por path, registre domínio sem path:

```txt
leadyia.com
www.leadyia.com
```

Não registre assim:

```txt
www.leadyia.com/imobiliaria
```

Allowed domains devem ser domínios, não URLs com caminho.

Para subdomínio, registre também:

```txt
imobiliaria.leadyia.com
```

## One.com / DNS

Crie CNAME para cada subdomínio apontando para o mesmo destino da landing na Vercel.
Exemplo:

```txt
imobiliaria CNAME cname.vercel-dns.com
clinica     CNAME cname.vercel-dns.com
estetica    CNAME cname.vercel-dns.com
juridico    CNAME cname.vercel-dns.com
educacao    CNAME cname.vercel-dns.com
ecommerce   CNAME cname.vercel-dns.com
```

Depois adicione cada domínio no projeto da Vercel.
