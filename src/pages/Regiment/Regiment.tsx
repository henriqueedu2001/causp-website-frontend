import React from 'react'

import Header from '../../components/Navbar/Navbar.tsx'
import Footer from '../../components/Footer/Footer.tsx'

import './Regiment.css'

function Regiment() {

  return (
    <>
      <Header />
      <PageContent />
      <Footer />
    </>
  )
}

class PageContent extends React.Component {
  render() {
    return (
      <div className='page-content'>
        <div className='container'>
          <section>
            <h1>REGIMENTO INTERNO DO COLETIVO AUTISTA DA UNIVERSIDADE DE SÃO PAULO</h1>
            <h2>CLÁUSULA 1 – CONSIDERAÇÕES GERAIS</h2>
            <section>
              <p>1.1. Este regimento orienta o funcionamento do Coletivo Autista da Universidade de
                Sã o Paulo, doravante denominado “CAUSP”, um espaço dedicado a pessoas autistas
                interessadas em formar amizades, discutir e contribuir para a expansão de pautas
                relacionadas ao autismo</p>
            </section>

            <h2>CLÁUSULA 2 – PROPÓSITO E COMPROMISSO</h2>
            <section>
              <p>2.1. O CAUSP não obriga seus membros a participar de ativismo. Os membros podem
                se juntar ao grupo apenas para interação social e discussão, além de ser um lugar
                para troca de experiências e apoio mú tuo, onde as pessoas podem compartilhar suas
                vivências e receber suporte de outros membros da comunidade autista.</p>
              <p>2.2. O CAUSP é uma entidade privada independente que nã o possui poder para
                promover o cumprimento de normas legais e administrativas no âmbito da USP. No
                entanto, seu papel é atuar na defesa dos interesses das pessoas autistas, conforme
                este regimento.</p>
            </section>

            <h2>CLÁUSULA 3 – GRUPOS ESPECÍFICOS</h2>
            <section>
              <p>3.1. Serão estabelecidos grupos específicos para cada campus da USP, com o objetivo
                de promover a interação dos participantes de diferentes unidades.</p>
            </section>

            <h2>CLÁUSULA 4 – PARTICIPAÇÃO</h2>
            <section>
              <p>4.1. Podem participar do CAUSP:
                <ul>
                  <li>(a) Pessoas com diagnóstico formal de Transtorno do Espectro Autista (TEA);</li>
                  <li>(b) Pessoas em processo diagnóstico, com suspeita profissional de autismo;</li>
                  <li>(c) Pessoas que tenham tido vínculo anterior com a USP e que atendam aos requisitos
                    dos itens a ou b acima.</li>
                </ul>

              </p>
              <p>4.2. Caso uma pessoa passe pelo processo diagnóstico e nã o seja diagnosticada com
                TEA, ela deverá sair do grupo. No entanto, nã o haverá cobranças ou punições.</p>
            </section>

            <h2>CLÁUSULA 5 – REGRAS DISCIPLINARES E PROCEDIMENTOS</h2>
            <section>
              <p>5.1. Decisões sobre expulsões e advertências serão tomadas em conjunto entre o
                secretariado do CAUSP e as pessoas envolvidas nos casos de infrações.
                Parágrafo único. Os motivos para expulsão ou advertência poderão ser averiguados
                nos âmbitos interno ou externo do CAUSP.</p>
              <p>5.2. Motivos para expulsão ou advertência incluem:
                <ul>
                  <li>(a) Casos de preconceito, incluindo homofobia, racismo e capacitismo;</li>
                  <li>(b) Desrespeito, como o uso de xingamentos e envolvimento em brigas pessoais;</li>
                  <li>(c) Assédio moral ou sexual;</li>
                  <li>(d) Discriminação de qualquer tipo contra outros membros;</li>
                  <li>(e) Violação da privacidade de outros membros;</li>
                  <li>(f) Incitação à violência;</li>
                  <li>(g) Qualquer outra conduta que prejudique o bom funcionamento do CAUSP ou a
                    segurança e bem-estar dos membros, incluindo, mas nã o se limitando a,
                    comportamento inadequado, violações de normas ou regras estabelecidas ou
                    qualquer outra açã o que possa comprometer a integridade da comunidade.</li>
                </ul>
              </p>
              <p>5.3. Em caso de advertência, o membro será notificado por escrito sobre a conduta
                inadequada e receberá uma oportunidade para mudar de comportamento. Em caso
                de reincidência ou infração grave, a expulsão será considerada.
              </p>
              <p>5.4. A expulsão será comunicada por escrito ao membro, com os motivos
                especificados e será efetivada imediatamente apó s a notificação. O membro expulso
                nã o terá acesso a eventos ou atividades direcionadas a membros do CAUSP e nã o
                será mais considerado membro do coletivo.
              </p>
              <p>5.5. As decisões sobre infrações disciplinares serão tomadas por um comitê formado
                pelos membros da gestão e três membros comuns escolhidos previamente para esta
                função. Decisões serão tomadas por maioria simples dos votos dos presentes.<br />
              </p>
            </section>

            <h2>CLÁUSULA 6 – GESTÃO</h2>
            <section>
              <p>6.1. A gestão do CAUSP será composta por membros escolhidos com base na
                demonstração de interesse no início de cada ano, através da eleição em assembleia.
                Os cargos fixos serão respectivamente:<br />
                <ul>
                  <li>
                    6.1.1. Presidente:<br />
                    I – convocar e presidir a Assembleia Geral e fazer cumprir suas decisões;<br />
                    II – convocar e presidir reuniões do Conselho do CAUSP, ordinárias ou
                    extraordinárias, cabendo-lhe o veto decisório em caso de empate;<br />
                    III – cumprir e fazer cumprir o Estatuto, o Regimento Interno e demais normas
                    existentes;<br />
                    IV – assinar contratos e documentos de importância em que o CAUSP for uma das
                    partes, juntamente com o Diretor Administrativo e Financeiro;<br />
                    V – abrir e movimentar contas bancá rias em conjunto com o Diretor Administrativo
                    e Financeiro;<br />
                    VI – emissão de documentos em conjunto com o Diretor Administrativo e Financeiro;<br />
                    VII – responsabilizar-se, em conjunto com o Diretor Administrativo e Financeiro,
                    pela gestão financeira do CAUSP;<br />
                    VIII – representar o CAUSP perante outas entidades estudantis, a comunidade
                    acadêmica, toda a USP e ao público externo;<br />
                    IX – responsabilizar-se pelo cumprimento dos projetos assumidos pelo CAUSP;<br />
                    X – definir, juntamente com os demais diretores, as políticas e objetivos específicos
                    de cada diretoria, coordenando a execução dos respectivos planos de ação,
                    facilitando e integrando o trabalho das equipes e assegurando o desenvolvimento,
                    crescimento e continuidade da Entidade;<br />
                    XI – assinar os certificados de participação dos membros CAUSP;<br />
                    XII – assinar certificados de cursos, minicursos, eventos e similares que o CAUSP
                    possa promover;<br />
                    XIII – emitir parecer periódico sobre as atividades da diretoria.<br />
                  </li>
                  <li>6.1.2. Vice-presidente:
                    I – auxiliar o Presidente nas atividades de sua responsabilidade e competência;<br />
                    II – assumir as funções do Presidente na ausência deste;<br />
                    III – emitir parecer periódico sobre as atividades da diretoria.<br />
                  </li>
                  <li>
                    6.1.3. Diretor Financeiro:<br />
                    I – assinar contratos e documentos de importância financeira em que o CAUSP for
                    uma das partes, juntamente com o Presidente;<br />
                    II – abrir e movimentar contas bancá rias em conjunto com o Presidente;<br />
                    III – emissão de documentos em conjunto com o Presidente;<br />
                    IV – responsabilizar-se, em conjunto com o Presidente, pela gestão financeira do CAUSP:<br />
                    V – analisar a viabilidade de gastos e investimentos;<br />
                    VI – analisar a viabilidade financeira de cada projeto;<br />
                    VII – apresentar Fluxo de Caixa, Balanço Patrimonial e outras demonstrações
                    financeiras periodicamente;<br />
                    VIII – realizar o inventá rio patrimonial anual;<br />
                    IX – emitir parecer periódico sobre as atividades da diretoria.<br />
                  </li>
                  <li>
                    6.1.4. Diretor Administrativo:
                    I – elaborar e divulgar as atas das reuniões do Conselho do CAUSP e das Assembleias
                    Gerais;<br />
                    II – responsabilizar-se pelos documentos legais referentes ao funcionamento da
                    Entidade;<br />
                    III – responsabilizar-se e zelar do acervo histórico administrativo do CAUSP;
                    IV – emitir parecer periódico sobre as atividades da diretoria.<br />
                  </li>
                  <li>
                    6.1.5. Diretor de Comunicação e Marketing:
                    I – buscar constantemente estratégias e elaborar projetos que visem a promoção do
                    CAUSP, bem como da Instituição, diante o meio acadêmico;<br />
                    II – coordenar as atividades relativas a matérias jornalísticas, propaganda,
                    publicidade, marketing e promoção de eventos do CAUSP;<br />
                    III – promover e organizar, juntamente com o(a) Diretor(a) Financeiro, eventos de
                    cunho social em favor da comunidade local;<br />
                    IV – organizar periodicamente, juntamente com o(a) Diretor(a) de Recursos
                    Humanos, integrações para os membros do CAUSP;<br />
                    V – monitorar a satisfação dos filiados e a representatividade da Entidade diante a
                    USP, de toda comunidade acadêmica e público externo;<br />
                    VI – estabelecer e/ou manter canais de comunicação entre a Entidade e seus filiados;<br />
                    VII – manter os filiados bem informados quanto as atividades do CAUSP, da
                    Instituição e sobre assuntos acadêmicos em geral;<br />
                    VIII – emitir parecer periódico sobre as atividades da diretoria.<br />
                  </li>
                  <li>
                    6.1.6. Diretor de Recursos Humanos:
                    I – realizar o processo de recrutamento, seleção, admissão e integração de novos
                    membros, caso o conselho do CAUSP julgue necessário;<br />
                    II – obter assinaturas e gerenciar o Termo de Leitura e Concordância com as Normas
                    do Estatuto e do Regimento Interno do CAUSP e Termo de Desligamento de
                    membros;<br />
                    III – elaborar e emitir certificados de participação dos membros CAUSP;<br />
                    IV – elaborar e emitir certificados de cursos, mini cursos, eventos e similares que o
                    CAUSP possa promover;<br />
                    V – gerenciar qualificações para os membros da Entidade e para os filiados no âmbito
                    interno ou externo da Universidade;<br />
                    VI – planejar e gerenciar ferramentas para o desenvolvimento pessoal de cada
                    membro do CAUSP;<br />
                    VII – auxiliar a montagem de equipes de trabalho e atribuição de funções aos
                    membros do CAUSP, levando em consideração o perTil para cada tarefa específica;<br />
                    VIII – organizar periodicamente, juntamente com o Diretor de Comunicação e
                    Marketing, integrações para os membros do CAUSP;<br />
                    IX – realizar avaliações de desempenho da equipe com o objetivo de manter o
                    relacionamento harmonioso e a execução dos projetos eficientemente;<br />
                    X – emitir parecer periódico sobre as atividades da diretoria.<br />
                  </li>
                </ul>
              </p>
              <p>
                6.2. Haverá membros da gestão não fixos que têm o objetivo de auxiliar os membros
                da gestão em diversas tarefas.
              </p>
              <p>6.3. Haverá representantes do CAUSP em cada instituto, podendo haver um suplente
                para cada titular, que têm o objetivo de manter a gestão atualizada sobre as questões
                de autismo e acessibilidade.</p>
              <p>6.4. As responsabilidades da gestão incluem a manutenção da imagem pública do
                CAUSP, a publicação de conteúdo nas redes sociais, a divulgação do coletivo e a
                participação em eventos, bem como fixação de cartazes, entre outras açõ es. Todas
                estas decisões devem ser tomadas conjuntamente pelos membros da gestão.</p>
              <p>6.5. Quando necessário, pesquisas e discussões podem ser levados ao grupo geral,
                de acordo com a decisão da gestão, para garantir a participação e opinião dos
                membros do coletivo.</p>
              <p>6.6. Auxiliar burocrática e academicamente os membros do CAUSP em situações de
                vulnerabilidade.</p>
            </section>

            <h2>CLÁUSULA 7 – ENCONTROS</h2>
            <section>
              <p>7.1. Um encontro presencial será realizado sempre que possível com data a ser
                deTinida via discussão dos membros do CAUSP.</p>
              <p>7.2. Além disso, um encontro online será realizado uma vez por mês para discutir
                questões relevantes para a comunidade autista e buscar soluções para problemas
                identificados.</p>
              <p>7.3. Serão incentivados encontros também em todos os campi da USP.</p>
              <p>7.4. Realização de um ou mais encontros abertos ao público por ano.</p>
            </section>

            <h2>CLÁUSULA 8 – REQUERIMENTOS</h2>
            <section>
              <p>8.1. Quando ocorrerem situações como negação de adaptação, assédio moral ou
                desrespeito à Lei de Inclusão (Lei no 13.146/2015), o CAUSP tem a prerrogativa de
                redigir uma nota de repúdio ou carta de requerimento para exercer pressão sobre o
                instituto ou professor responsável, visando promover as medidas necessárias para
                garantir o cumprimento da lei e a inclusão de todos.
              </p>
            </section>

            <h2>CLÁUSULA 9 – ALTERAÇÕES AO REGIMENTO INTERNO</h2>
            <section>
              <p>9.1. Qualquer alteração a este regimento interno deve ser proposta à gestão do
                CAUSP e discutida em conjunto com os membros do coletivo, visando uma decisão
                coletiva e democrática.</p>
              <p>
                9.2. As alterações propostas serão apresentadas em uma assembleia geral
                convocada pela gestão do CAUSP. A convocação deve ser feita com antecedência
                mínima de uma semana e deve incluir a pauta da assembleia.
              </p>
              <p>
                9.3. A assembleia geral será instalada com a presença de, no mínimo, 10% dos
                membros do CAUSP.
              </p>
              <p>
                9.4. Caso nã o haja quó rum, uma nova assembleia deverá ser convocada com
                antecedência mínima de uma semana e poderá ser realizada com qualquer número
                de membros presentes.
              </p>
              <p>
                9.5. A decisão sobre a alteração do regimento deve ser tomada por 1/5 dos membros
                presentes na assembleia geral.
              </p>
              <p>9.6. As alterações aprovadas serão incorporadas a este regimento interno e entrarão
                em vigor imediatamente apó s a assembleia geral.</p>
              <p>9.7. Nos demais casos, as decisões serão tomadas entre os membros presentes.</p>
            </section>

            <h2>CLÁUSULA 10 – PROTEÇÃO DE DADOS</h2>
            <section>
              <p>10.1. Em conformidade com a Lei Geral de Proteção de Dados, a coleta e o tratamento
                de dados pessoais feita pelo CAUSP têm como base legal o consentimento livre e
                informado do titular, inclusive para dados sensíveis, como os referentes à saú de,
                diagnósticos, medicamentos, tratamentos, terapias entre outros.
              </p>
              <p>
                10.2. Os dados coletados serão utilizados para as exclusivas finalidades de
                mapeamento dos membros do CAUSP, análise estatística do perfil dos membros que
                englobam a organização e, no caso do telefone e do e-mail USP, para comunicação
                durante a execução das atividades do Coletivo.
              </p>
              <p>
                10.3. Nã o haverá compartilhamento dos dados com terceiros a menos que haja
                necessidade para gestão do Coletivo, como envio dos dados cadastrais à
                Universidade de Sã o Paulo para Tins de registro dos membros.
              </p>
              <p>
                10.4. Os dados serão excluídos assim que nã o forem mais compatíveis com as
                finalidades para os quais foram coletados ou, a qualquer momento, mediante
                solicitação ao CAUSP, que se reserva à análise do pedido, com possibilidade de
                manutenção dos dados de acordo com o art. 16 da Lei Geral de Proteção de Dados (LGPD).
              </p>
              <p>
                10.5. A qualquer momento, os direitos dos titulares, nomeadamente os previstos no
                art. 18 da LGPD, poderão ser exercidos por meio de solicitações endereçadas ao e-
                mail “uspcoletivoautista@gmail.com”, contendo nome do solicitante, endereço de e-
                mail para resposta e descrição da solicitação.
              </p>
            </section>

            <h2>CLÁUSULA 11 – RELAÇÕES EXTERNAS</h2>
            <section>
              <p>
                11.1. O CAUSP buscará formar parcerias com outras organizações, coletivos e
                entidades que compartilhem os mesmos valores e objetivos, para ampliar seu
                alcance e efetividade.
              </p>
              <p>
                11.2. As parcerias devem ser discutidas e aprovadas pelos membros da gestão e,
                quando necessário, pelo coletivo como um todo.
              </p>
            </section>
          </section>
        </div>
      </div>
    )
  }
}

export default Regiment