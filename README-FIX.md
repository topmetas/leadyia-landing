# Hotfix Ecommerce Landing Export — v1090.1

Corrige o erro:

`does not provide an export named 'ecommerceLanding'`

## Arquivos alterados

- `landing/src/data/niches/ecommerceLanding.data.js`
- `landing/src/pages/niches/EcommerceLanding.jsx`

## Correção

O módulo agora oferece:

```js
export { ecommerceLanding };
export const ecommerceLandingData = ecommerceLanding;
export default ecommerceLanding;
```

A página usa import padrão explícito:

```js
import ecommerceLanding from "../../data/niches/ecommerceLanding.data.js";
```

## Após aplicar

No projeto landing:

```bash
rmdir /s /q node_modules\.vite
npm run dev
```

Se o comando acima não for aplicável, apague manualmente `node_modules/.vite` e reinicie o Vite.
