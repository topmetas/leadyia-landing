import LegalPageShell from "./LegalPageShell";

const UPDATED_AT = "18 de agosto de 2026";

export default function Privacy() {
  return (
    <LegalPageShell
      title="Política de Privacidade"
      description="Saiba quais dados a LeadyIA pode tratar, por que eles são utilizados, quando são compartilhados e quais são seus direitos."
      updatedAt={UPDATED_AT}
    >
      <section>
        <h2>1. Escopo</h2>
        <p>
          Esta Política de Privacidade descreve como a LeadyIA trata dados pessoais no site, dashboard, widget,
          integrações, APIs, CRM, automações, agendamentos e demais recursos da plataforma. Ela também explica o
          tratamento realizado quando um visitante conversa com um assistente LeadyIA instalado por um cliente.
        </p>
      </section>

      <section>
        <h2>2. Papéis no tratamento</h2>
        <p>
          Quando tratamos dados para administrar contas, segurança, cobrança, suporte e operação do nosso próprio
          serviço, a LeadyIA pode atuar como controladora. Quando processamos dados de leads, clientes ou usuários em
          nome de um tenant, o cliente normalmente define as finalidades e atua como controlador, enquanto a LeadyIA
          atua como operadora, conforme a legislação e a configuração aplicável.
        </p>
      </section>

      <section>
        <h2>3. Dados que podemos tratar</h2>
        <p>Dependendo dos recursos utilizados, podemos tratar:</p>
        <ul>
          <li>dados de conta, como nome, e-mail, telefone, empresa, função, tenant e preferências;</li>
          <li>dados de leads e contatos, como nome, e-mail, telefone/WhatsApp e identificadores de canal;</li>
          <li>conteúdo de conversas, mensagens, respostas, quick replies e registros de atendimento;</li>
          <li>dados de CRM, origem do lead, estágio, tags, histórico de contato e eventos de lifecycle;</li>
          <li>dados de agendamento, como serviço ou objetivo, unidade, disponibilidade, data, período, horário, reagendamento, cancelamento e lembretes;</li>
          <li>dados técnicos, como URL/origem, navegador, endereço IP quando necessário à infraestrutura, identificadores de sessão, logs, timestamps e eventos de segurança;</li>
          <li>dados de uso e configuração, como playbook, preferências de widget, canais conectados, permissões e integrações;</li>
          <li>dados de cobrança estritamente necessários à gestão da assinatura; dados completos de cartão podem ser processados diretamente pelo provedor de pagamento.</li>
        </ul>
      </section>

      <section>
        <h2>4. Quando os dados são coletados</h2>
        <p>
          Os dados podem ser coletados quando você cria ou administra uma conta, utiliza o dashboard, configura um
          canal, instala o widget ou plugin, inicia ou responde a uma conversa, informa seus dados de contato, agenda um
          atendimento, solicita suporte, executa uma integração ou quando sistemas conectados enviam eventos necessários
          ao serviço.
        </p>
      </section>

      <section>
        <h2>5. Finalidades do tratamento</h2>
        <p>Os dados podem ser utilizados para:</p>
        <ul>
          <li>fornecer, autenticar e manter a plataforma;</li>
          <li>entregar conversas, qualificação, CRM, automações, handoff e atendimento humano;</li>
          <li>criar, confirmar, alterar e lembrar agendamentos;</li>
          <li>operar integrações e canais habilitados pelo cliente;</li>
          <li>prevenir fraude, abuso, falhas e incidentes de segurança;</li>
          <li>medir uso, limites de plano, desempenho e confiabilidade;</li>
          <li>prestar suporte e cumprir obrigações contratuais, legais e regulatórias;</li>
          <li>enviar comunicações transacionais ou de lifecycle quando habilitadas e quando houver base legal aplicável.</li>
        </ul>
      </section>

      <section>
        <h2>6. Bases legais</h2>
        <p>
          Conforme o contexto e a legislação aplicável, o tratamento pode se basear na execução de contrato ou de
          procedimentos preliminares, cumprimento de obrigação legal ou regulatória, legítimo interesse, exercício
          regular de direitos e consentimento quando este for necessário. O cliente é responsável por definir e
          documentar a base legal adequada para os dados que controla por meio de seu tenant.
        </p>
      </section>

      <section>
        <h2>7. Serviços externos e integrações</h2>
        <p>
          A LeadyIA utiliza infraestrutura e pode integrar serviços externos para disponibilizar funções como hospedagem,
          entrega de mensagens, e-mail, calendário, pagamentos, analytics e comércio eletrônico. Dados são enviados a
          esses serviços somente quando necessário à funcionalidade habilitada, conforme a configuração do tenant e as
          regras do provedor correspondente.
        </p>
        <p>
          No plugin oficial para WordPress, por exemplo, o navegador pode carregar o widget de
          {" "}<code>https://widget.leadyia.com</code> e enviar dados necessários ao atendimento para
          {" "}<code>https://api.leadyia.com</code> quando o widget é inicializado ou utilizado.
        </p>
      </section>

      <section>
        <h2>8. Compartilhamento</h2>
        <p>
          Não vendemos dados pessoais. Podemos compartilhar dados com fornecedores e suboperadores necessários à
          prestação do serviço, com integrações ativadas pelo cliente, por determinação legal ou para proteger direitos,
          segurança e integridade da plataforma. Cada compartilhamento deve observar finalidade, necessidade e medidas
          de proteção compatíveis com o contexto.
        </p>
      </section>

      <section>
        <h2>9. Transferências internacionais</h2>
        <p>
          Alguns fornecedores de infraestrutura ou integrações podem processar dados em outros países. Quando aplicável,
          buscamos adotar mecanismos e salvaguardas compatíveis com a legislação de proteção de dados pertinente.
        </p>
      </section>

      <section>
        <h2>10. Retenção</h2>
        <p>
          Mantemos dados pelo período necessário às finalidades descritas, à execução do contrato, segurança, prevenção
          de fraude, cumprimento de obrigações legais e exercício regular de direitos. Prazos específicos podem variar
          conforme o tipo de dado, plano, configuração do tenant e obrigação aplicável. Após o término do período
          necessário, os dados podem ser excluídos, anonimizados ou mantidos quando houver fundamento legal.
        </p>
      </section>

      <section>
        <h2>11. Segurança</h2>
        <p>
          Adotamos controles técnicos e organizacionais voltados a proteger confidencialidade, integridade e
          disponibilidade, incluindo autenticação, controle de acesso, isolamento entre tenants, registros operacionais
          e medidas de proteção de infraestrutura. Nenhum sistema é completamente imune a riscos, por isso segurança é
          tratada como processo contínuo.
        </p>
      </section>

      <section>
        <h2>12. Cookies e armazenamento local</h2>
        <p>
          O site e os componentes da LeadyIA podem utilizar cookies ou armazenamento local estritamente necessários para
          sessão, preferências, atribuição, segurança e continuidade de uso. Tecnologias adicionais de analytics ou
          marketing devem observar a configuração do site, a legislação aplicável e, quando necessário, mecanismos de
          consentimento.
        </p>
      </section>

      <section>
        <h2>13. Direitos dos titulares</h2>
        <p>
          Conforme a legislação aplicável, você pode ter direitos de confirmação e acesso, correção, anonimização,
          bloqueio ou eliminação, portabilidade quando cabível, informação sobre compartilhamentos, revogação de
          consentimento, oposição e revisão de determinadas decisões automatizadas. Quando a LeadyIA atuar apenas como
          operadora de um tenant, poderemos direcionar a solicitação ao cliente controlador responsável.
        </p>
      </section>

      <section>
        <h2>14. Crianças e adolescentes</h2>
        <p>
          A LeadyIA é uma plataforma B2B e não é direcionada à criação autônoma de contas por crianças. Se um cliente
          utilizar a plataforma em contexto que envolva dados de crianças ou adolescentes, ele deve observar as regras
          legais específicas, inclusive melhor interesse e consentimentos ou autorizações exigidos.
        </p>
      </section>

      <section>
        <h2>15. Alterações desta política</h2>
        <p>
          Podemos atualizar esta Política de Privacidade para refletir mudanças legais, técnicas ou de produto. A data
          da versão vigente é exibida no topo desta página. Mudanças materiais poderão ser comunicadas pelos canais
          disponíveis quando apropriado ou exigido.
        </p>
      </section>

      <section>
        <h2>16. Contato sobre privacidade</h2>
        <p>
          Solicitações ou dúvidas relacionadas a privacidade e proteção de dados podem ser enviadas para
          {" "}<a href="mailto:support@leadyia.com">support@leadyia.com</a>. Para solicitações ligadas a um tenant
          específico, informe a empresa ou o site em que a interação ocorreu para facilitar a identificação do
          controlador responsável.
        </p>
      </section>
    </LegalPageShell>
  );
}
