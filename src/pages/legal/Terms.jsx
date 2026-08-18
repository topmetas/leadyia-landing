import LegalPageShell from "./LegalPageShell";

const UPDATED_AT = "18 de agosto de 2026";

export default function Terms() {
  return (
    <LegalPageShell
      title="Termos de Uso"
      description="Termos aplicáveis ao acesso e uso da plataforma LeadyIA, seus widgets, integrações, automações, APIs e recursos relacionados."
      updatedAt={UPDATED_AT}
    >
      <section>
        <h2>1. Aceitação dos termos</h2>
        <p>
          Estes Termos de Uso regulam o acesso e o uso da LeadyIA, incluindo o site, dashboard, widget para sites,
          integrações, APIs, recursos de atendimento, CRM, automação, agendamento e funcionalidades relacionadas.
          Ao criar uma conta, contratar um plano, instalar uma integração ou utilizar a plataforma, você declara que
          leu e concorda com estes termos.
        </p>
      </section>

      <section>
        <h2>2. Sobre a LeadyIA</h2>
        <p>
          A LeadyIA é uma plataforma SaaS de inteligência artificial voltada a atendimento, qualificação de leads,
          vendas, CRM, automações de ciclo de vida, agendamentos e integração de canais. Algumas funcionalidades
          dependem de serviços de terceiros escolhidos ou habilitados pelo cliente, como provedores de mensagens,
          e-mail, calendário, pagamentos ou comércio eletrônico.
        </p>
      </section>

      <section>
        <h2>3. Conta e responsabilidade do cliente</h2>
        <p>
          O cliente é responsável por manter suas credenciais seguras, fornecer informações verdadeiras e atualizadas,
          configurar corretamente os canais e permissões do seu tenant e garantir que possui base legal e autorização
          para tratar os dados pessoais inseridos ou coletados por meio da plataforma.
        </p>
        <p>
          O cliente também é responsável pelo conteúdo de seus playbooks, bases de conhecimento, campanhas,
          mensagens, integrações, ofertas, políticas comerciais e decisões tomadas a partir das informações fornecidas
          pela LeadyIA.
        </p>
      </section>

      <section>
        <h2>4. Uso aceitável</h2>
        <p>Não é permitido utilizar a LeadyIA para:</p>
        <ul>
          <li>praticar fraude, engenharia social, spam, assédio, abuso ou atividades ilegais;</li>
          <li>violar direitos de terceiros, direitos autorais, marcas, privacidade ou proteção de dados;</li>
          <li>enviar mensagens em desacordo com consentimentos, opt-out, regras dos canais ou legislação aplicável;</li>
          <li>tentar contornar limites de plano, autenticação, isolamento entre tenants ou mecanismos de segurança;</li>
          <li>introduzir código malicioso, atacar, sobrecarregar ou comprometer a disponibilidade da plataforma;</li>
          <li>usar respostas geradas por IA como substituição automática de aconselhamento profissional quando revisão humana for necessária.</li>
        </ul>
      </section>

      <section>
        <h2>5. Inteligência artificial e revisão humana</h2>
        <p>
          Respostas geradas por IA podem conter imprecisões. O cliente deve revisar configurações, fluxos e conteúdos
          adequados ao seu contexto, especialmente em áreas reguladas, jurídicas, médicas, financeiras ou outras em
          que erros possam produzir impactos relevantes. A LeadyIA oferece automação e apoio operacional, não uma
          garantia de resultado comercial ou profissional específico.
        </p>
      </section>

      <section>
        <h2>6. Integrações e serviços de terceiros</h2>
        <p>
          Recursos integrados podem depender de APIs, contas ou infraestrutura de terceiros. O uso dessas integrações
          também pode estar sujeito aos termos e políticas dos respectivos provedores. Alterações, indisponibilidades,
          bloqueios, limites ou mudanças de API desses provedores podem afetar funcionalidades específicas da LeadyIA.
        </p>
      </section>

      <section>
        <h2>7. Planos, cobrança e limites</h2>
        <p>
          Recursos, canais, usuários, assistentes, limites de conversas, períodos de teste e preços são definidos no
          plano contratado e na oferta apresentada no momento da contratação. Quando aplicável, cobranças recorrentes
          são processadas pelos provedores de pagamento disponibilizados pela LeadyIA. Tributos, estornos e regras de
          cancelamento seguem a legislação aplicável e as condições apresentadas no checkout.
        </p>
      </section>

      <section>
        <h2>8. Disponibilidade e manutenção</h2>
        <p>
          A LeadyIA busca manter o serviço disponível e seguro, mas pode realizar manutenções, atualizações e correções.
          Interrupções também podem ocorrer por falhas de infraestrutura, provedores externos, internet, canais de
          terceiros ou eventos fora do controle razoável da plataforma.
        </p>
      </section>

      <section>
        <h2>9. Propriedade intelectual</h2>
        <p>
          A plataforma, código, interface, marca, documentação, modelos de produto e materiais próprios da LeadyIA são
          protegidos pela legislação aplicável. O cliente permanece responsável e titular dos conteúdos, marcas e dados
          que inserir na plataforma, observados os direitos de terceiros.
        </p>
      </section>

      <section>
        <h2>10. Proteção de dados</h2>
        <p>
          O tratamento de dados pessoais relacionado ao serviço é descrito na nossa
          {" "}<a href="/privacy">Política de Privacidade</a>. Em cenários B2B, o cliente normalmente define as finalidades
          do tratamento dos dados de seus próprios leads e clientes, enquanto a LeadyIA processa essas informações para
          prestar o serviço contratado, conforme as configurações habilitadas.
        </p>
      </section>

      <section>
        <h2>11. Suspensão e encerramento</h2>
        <p>
          O acesso pode ser suspenso em caso de inadimplência, risco de segurança, uso abusivo, violação destes termos
          ou necessidade de cumprimento legal. O cliente pode solicitar cancelamento conforme as condições do plano e
          os canais disponíveis na sua conta.
        </p>
      </section>

      <section>
        <h2>12. Limitação de responsabilidade</h2>
        <p>
          Na extensão permitida pela lei, a LeadyIA não responde por perdas indiretas, lucros cessantes, decisões
          tomadas exclusivamente com base em respostas automatizadas, falhas de serviços de terceiros ou uso da
          plataforma em desacordo com estes termos. Nada nesta cláusula afasta direitos que não possam ser excluídos
          pela legislação aplicável.
        </p>
      </section>

      <section>
        <h2>13. Alterações destes termos</h2>
        <p>
          Estes termos podem ser atualizados para refletir mudanças legais, de produto, segurança ou operação. A data
          da última atualização ficará indicada nesta página. Mudanças materiais poderão ser comunicadas pelos canais
          disponíveis quando exigido ou apropriado.
        </p>
      </section>

      <section>
        <h2>14. Contato</h2>
        <p>
          Dúvidas sobre estes Termos de Uso podem ser enviadas para
          {" "}<a href="mailto:support@leadyia.com">support@leadyia.com</a>.
        </p>
      </section>
    </LegalPageShell>
  );
}
