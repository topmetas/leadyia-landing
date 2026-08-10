# Landing LeadyIA v1103.123

- Corrige a landing principal para enviar `saas_b2b`, eliminando o conflito causado por `playbook=leadyia` sem reduzir o isolamento do backend.
- Exibe e roteia os 14 nichos comerciais.
- Preserva as páginas premium existentes e adiciona páginas completas para odontologia, veterinária, contabilidade, automotivo, restaurantes, fitness e serviços residenciais.
- Todas as páginas destacam teste grátis de 7 dias, Starter e Pro, com acesso à comparação de todos os planos.
- Menus, rodapé, SEO, sitemap, cadastro e resolução por domínio/path foram normalizados.

Validação: `npm run test:full-14-playbooks-v1103.123 && npm run build`.
