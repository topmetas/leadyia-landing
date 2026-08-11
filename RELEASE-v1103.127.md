# Landing v1103.127 — tenant/playbook por domínio

- Subdomínios dedicados agora são resolvidos pelo domínio antes do caminho `/`.
- `advocacia.leadyia.com` usa obrigatoriamente tenant jurídico + playbook `legal`.
- `ecommerce.leadyia.com`, Estética, Clínica, Educação, Imobiliária e Dentista seguem a mesma regra.
- Tenants canônicos dos domínios oficiais não podem ser sobrescritos por variável VITE copiada de outro nicho.
- Loader único impede duas inicializações durante StrictMode/navegação.
