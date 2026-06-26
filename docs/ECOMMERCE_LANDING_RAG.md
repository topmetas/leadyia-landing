# Landing LeadyIA — E-commerce / Loja Virtual

## Domínios sugeridos

- `ecommerce.leadyia.com`
- `loja.leadyia.com`
- `shop.leadyia.com`

## Rotas locais

- `/ecommerce`
- `/loja`
- `/shop`

## Objetivo

Esta landing demonstra a LeadyIA funcionando como assistente de loja virtual. Ela foi criada para vender a solução por nicho e também servir como base de conhecimento para RAG, com foco em busca de produtos, recomendação, categorias, checkout, entrega, pagamento, suporte e recuperação de carrinho.

## Script do widget

```html
<script
  src="https://widget.leadyia.com/loader.js"
  data-tenant-id="TENANT_ID_ECOMMERCE"
  data-segment="ecommerce"
  async
></script>
```

## Intenções principais para o RAG

- buscar produto
- buscar categoria
- recomendar produto
- comparar produtos
- finalizar compra
- recuperar carrinho
- explicar entrega e pagamento
- suporte de pedido
- produto digital
- falar com atendimento

## Regras importantes

- Buscar produto e categoria antes de acionar RAG/OpenAI.
- Não inventar produto, preço, estoque ou prazo.
- Nunca exibir CTA de SaaS dentro do e-commerce do cliente.
- Usar CTAs coerentes: ver produto, comprar agora, ver coleção, finalizar pedido ou falar com atendimento.
- Respeitar tenant, catálogo e nicho para evitar recomendações cruzadas.

## CTAs recomendados

- Ver produto
- Ver coleção
- Comprar agora
- Finalizar pedido
- Ver produtos relacionados
- Falar com atendimento
- Acompanhar pedido
