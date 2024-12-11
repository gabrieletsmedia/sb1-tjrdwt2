import React from 'react';
import { useParams } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const publications = {
  1: {
    title: 'Canais de transmissão de crises bancárias',
    subtitle: 'Por Reinaldo Le Grazie e Pedro Eroles',
    source: 'Valor Econômico',
    date: '26/04/2023',
    content: `
      <p class="mb-4">
        No pós crise bancária de 2008, o sistema financeiro elevou o requerimento de capital mínimo, assim como restringiu a alavancagem dos bancos em geral com a promulgação, pelo Comitê de Basileia, das chamadas diretrizes de Basileia III. Portanto, toma-se como premissa que, nesse momento, os principais participantes do sistema monetário estão mais bem preparados que há 15 anos, capitalizados e com níveis de alavancagem bastante mais saudáveis. Podemos dizer o mesmo no Brasil, onde o sistema é líquido, capitalizado e reagiu bem nas crises recentes, apoiando o crescimento do crédito e do mercado de capitais.
      </p>
      <p class="mb-4">
        Ainda assim, mesmo com o sistema forte, alguns grupos de instituições financeiras podem sofrer de maneira e em proporções diferentes os efeitos das externalidades negativas de crises bancárias, dependendo do seu tipo de atuação, bem como da sua concentração de clientes e de investidores. Logo, pelo risco de contaminação, o ideal é que todos os bancos sejam bem supervisionados pela regulação para evitar sustos.
      </p>
      <p class="mb-4">
        Bancos são vasos comunicantes vitais da economia, os quais fazem fluir o capital entre os diversos setores, sendo cruciais para o bom funcionamento de qualquer economia de mercado. Uma boa estrutura bancária aliada a pujante mercado de capitais costuma ser associada às economias mais desenvolvidas e, nesse sentido, vale a pena investir nessa evolução constante. E é por esse mesmo motivo que crises bancárias causam tanta apreensão e temor.
      </p>
      <p class="mb-4">
        Desse modo, para evitar surpresas indesejáveis, a receita conhecida é regulação e monitoramento dos riscos. A recente crise no banco californiano, SVB, teve como raiz a gestão inadequada de ativos e passivos constituída em um ambiente em que as taxas de juros estiveram baixas por um longo período. Assim, o rápido e significativo aperto monetário funcionou como um gatilho que desvalorizou o valor das carteiras de ativos, levando à fuga dos depositantes.
      </p>
      <p class="mb-4">
        Apesar dos ativos no balanço do banco americano citado serem títulos públicos federais, com rating máximo de qualidade e segurança no crédito, as novas condições da política monetária aliada a alterações regulatórias realizadas nos EUA, 5 anos atrás, que aliviaram as exigências sobre os bancos médios e diminuíram a visibilidade do radar da supervisão, foram determinantes na quebra.
      </p>
      <p class="mb-4">
        O canal tradicional de contaminação bancária mundial aos países emergentes se dá, tipicamente, pela desvalorização da moeda e alta do prêmio de risco.
      </p>
      <p class="mb-4">
        Desde a quebra do SVB, nos EUA, no início de março, o real até se valorizou e o CDS brasileiro já voltou ao patamar anterior ao evento. Portanto, a balançada dos bancos americanos não trouxe grande tensão no Brasil, porém é interessante avaliar se há alguma lição a se tirar. Outro canal relevante, o de crédito, piorou.
      </p>
      <p class="mb-4">
        Por outro lado, a alta do juro americano e, também do juro brasileiro, sem dúvida está trazendo um impacto relevante, sendo que as consequências já aparecem nas demonstrações financeiras dos bancos, deixando, até aqui pelo menos, a impressão positiva de que os participantes estão com capacidade adequada de absorver os eventuais prejuízos.
      </p>
      <p class="mb-4">
        Outras medidas tanto regulatórias quanto legais nos últimos 1O anos, impulsionaram o empreendedorismo financeiro no Brasil, aumentando a oferta de produtos e serviços com maior gama de diferentes marcas, alternativas com diferentes níveis de preços e de conveniência. Tem sido uma evolução disruptiva com inclusão de consumidores que até então estavam fora do mercado.
      </p>
      <p class="mb-4">
        Por outro lado, alterações legais nos anos recentes também trouxeram modificações específicas que alteraram a expectativa de preço de ativos, assim como o fluxo de pagamentos de algumas obrigações em mercado, tais como a PEC dos precatórios. Mudaram o fluxo de pagamento e as possibilidades de sua utilização.
      </p>
      <p class="mb-4">
        Outra peculiaridade na quebra do SVB foi a inadequada marcação do preço dos ativos no balanço do banco. Quando a temperatura sobe, o diferencial entre valor no mercado e preços referenciados na curva de aquisição mudam de patamar. Mesmo para títulos com segurança de pagamento, como os públicos, quando a liquidez é restrita e a formação de preço irregular, há aspectos na avaliação que merecem consideração.
      </p>
      <p class="mb-4">
        O FIDC, e no Brasil, o FGC (Fundo Garantido de Créditos), são entidades que garantem os depósitos até determinado montante, apenas. Porém, na quebra do SVB, o governo americano garantiu todos os depósitos em uma guinada para o que se chama de risco moral ou "moral hazard". Se a decisão de "moral hazard" foi correta ou não só o tempo dirá, e o ideal é que não tivesse sido necessário, mas o mais importante é que o sistema de proteção funcionou muito bem.
      </p>
      <p class="mb-4">
        No Brasil, o FGC tem funcionado muito bem não só em eventos específicos, como os ocorridos em fevereiro, mas até no incentivo à captação dos chamados bancos médios. Através da contribuição financeira de todos os bancos do sistema, ponderado pelo tamanho, o FGC garante os depósitos que se tornaram a principal fonte de liquidez para grande parte das empresas financeiras. Interessante que, no Brasil, tivemos a quebra de dois bancos menores em fevereiro e, na sequência, nos EUA, em março, ocorre o susto do SVB, provando como fluxos externos são sincronizados. Nos dois países tivemos a atuação dos garantidores de depósitos e vale a pena refletir sobre o funcionamento comparativo.
      </p>
      <p class="mb-4">
        O sucesso do desenho do produto de proteção oferecido pelo FGC foi ampliado pelo impulso das plataformas eletrônicas e dos shoppings financeiros que se tornaram relevantes nos últimos 1O anos. Facilitando a captação de depósitos, vêm permitindo que novos bancos e instituições financeiras participem do crescimento do mercado e é importante avaliar se essa conjunção de fatores está alterando o risco sistêmico no Brasil. Os benefícios à sociedade são claros e precisam ser preservados, assim, olhar para a frente e fazer a lição de casa é primordial.
      </p>
      <p class="mb-4">
        Concluindo, é importante a avaliação contínua das transformações nas condições de mercado e econômicas, que podem gerar eventuais instabilidades, como descasamento no balanço ou perda de credibilidade das instituições financeiras, de forma a fazer as necessárias correções de rumo antes de eventuais danos à estabilidade financeira no Brasil.
      </p>
    `,
  },
  2: {
    title: 'Rotativo do cartão e parcelado sem juros: para onde caminhamos?',
    subtitle: 'Por Reinaldo Le Grazie e Pedro Eroles',
    source: 'Valor Econômico',
    date: '01/09/2023',
    content: `
      <p class="mb-4">
        O histórico da indústria de pagamentos no Brasil traz diversas evidências de que muitas facilidades de hoje foram disponibilizadas de forma precoce, seja pela conveniência e inovação do produto, seja por um ímpeto de promoção de maior competição.
      </p>
      <p class="mb-4">
        A indústria de pagamentos no Brasil sempre foi muito eficiente e, nos últimos anos, surgiram vários novos participantes oferecendo produtos inovadores. Aos clientes, foram oferecidos novos cartões, plataformas eletrônicas e atendimento remoto. Aos comerciantes, alternativas de recebimento de forma diferenciada, possibilidade de antecipação dos recursos e recebimento em contas digitais providas por instituições não bancárias. Nesse ambiente, o parcelado sem juros, que foi a sequência do cheque pré-datado, sempre foi um instrumento muito relevante para o comércio e considerado uma "jabuticaba" brasileira.
      </p>
      <p class="mb-4">
        No âmbito desse processo dinâmico e considerando o progresso na digitalização de pagamentos, a atividade de adquirência por si só passou a ter menor competitividade, precisando agregar oferta de crédito e tecnologia para acelerar a integração com a retaguarda do estabelecimento comercial, trabalhando para a construção de um ecossistema de pagamentos. Percebe-se, então, que a capacidade de competir anda lado a lado com a de agregar outros serviços.
      </p>
      <p class="mb-4">
        Hoje, com o benefício do olhar retrospectivo, observamos que o mercado oferece prazos variados de liquidação (cada qual com suas condições}, a distribuição do market share é menos concentrada, a base é mais ampla e até mesmo a "jabuticaba" do parcelado sem juros tem um primo estrangeiro chamado BNPL (Buy Now, Pay Later).
      </p>
      <p class="mb-4">
        Em um pagamento qualquer com cartão de crédito, podemos dizer que a jornada do cliente se inicia na instituição que emite o cartão para o cliente (em geral, um banco ou uma instituição de pagamento}. São essas instituições que arcam com o risco de o cliente não pagar a fatura, tanto para compras a vista ou a prazo. Portanto, o emissor do cartão tem contato principal com o cliente pessoa física e, entre o emissor e a ponta final que chamaremos de lojista, há vários outros provedores de serviço, tais como as bandeiras e as maquininhas (credenciadoras ou subcredenciadoras}. São as empresas de maquininhas que têm o contato com esse chamado cliente final, o estabelecimento comercial.
      </p>
      <p class="mb-4">
        Quando o cliente, com o cartão de crédito na mão, faz uma compra e não paga, o lojista não deixará de receber. O emissor do cartão é quem paga a maior parte do custo da inadimplência que, por sinal, nesse mês de agosto, bateu o recorde histórico. Os outros participantes do modelo também perdem algo, mas a maior parte do prejuízo da inadimplência fica com a instituição emissora do cartão.
      </p>
      <p class="mb-4">
        Para fazer frente ao custo operacional e ao risco de inadimplência, o emissor se remunera de duas maneiras: uma comissão conhecida com Taxa de Intercâmbio (TIC} e pela cobrança de juros sobre os clientes que atrasam o pagamento do cartão, o famoso rotativo. É aqui que existe a relação entre o rotativo e o parcelado sem juros. Ou seja, o importante instrumento de consumo "parcelado sem juros" depende da receita do juro via o "rotativo". Quando o emissor tiver receita menor via o "rotativo", deverá ser compensado pela maior TIC ou por menor inadimplência.
      </p>
      <p class="mb-4">
        Como a inadimplência aumenta junto com o prazo da operação, uma das sugestões é reduzir o número de parcelas. Assim trocar-se-ia a receita do rotativo pelo menor custo da inadimplência.
      </p>
      <p class="mb-4">
        O outro lado da equação é que, ao encurtar o prazo para pagamentos, o consumo tende a recuar impactando a atividade econômica como um todo. Assim, o coro é forte em defesa desse poderoso instrumento facilitador do comércio.
      </p>
      <p class="mb-4">
        Porém, esse é um equilíbrio tênue. O custo de crédito no Brasil é alto por várias razões, a começar por um imposto chamado IOF, que foi instituído como regulatório e se tornou fonte de arrecadação. Essa é maneira mais eficiente de reduzir o custo do financiamento do consumidor de baixa renda e só depende da contribuição do governo. Outros motivos do alto custo de capital deixaremos para outra oportunidade.
      </p>
      <p class="mb-4">
        Portanto, se nos últimos anos assistimos uma revolução em pagamentos no Brasil, com mais competição, com produtos mais eficientes, seguros e baratos, onde os incumbentes foram surpreendidos com a postura empreendedora dos novos entrantes, com a oferta de tecnologia que permitiu fazer melhor e mais barato, essa história pode se repetir. O tsunami desbancou vários incumbentes de então.
      </p>
      <p class="mb-4">
        Parte dos incumbentes de hoje são os novos entrantes da década passada e um novo tsunami pode acontecer nesse mercado.
      </p>
      <p class="mb-4">
        Há anos se fala que algo teria que ser feito com relação aos elevados juros do rotativo do cartão de crédito no Brasil e parece que, dessa vez, de fato será feito. Intervenção estatal mexe com os modelos de negócios, para o bem ou para o mal, principalmente quando é via preços e, portanto, independente do mérito, o provável estabelecimento do limite está chegando e vai mudar tanto o produto em si quanto as relações com outros serviços disponíveis.
      </p>
      <p class="mb-4">
        Já para o parcelado sem juros, que também há anos se fala que tem que mudar, tudo indica que não deve ter alteração no momento, mas é muito provável que terá em breve. Que não se durma em berço esplêndido, porque muitas alternativas estão a caminho, tais como, parcelado emissor, pix garantido e outras opções que virão para disruptar o status quo, ideias essas que talvez ainda nem estejam no cenário, mas que encontram solo fértil com a tecnologia disponível e o ambiente competitivo que se construiu com a regulação adequada.
      </p>
      <p class="mb-4">
        É impossível ter a certeza de como será o desenho da indústria brasileira de pagamentos no futuro, mas com a demonstração que o mercado vem dando em ser inovativo e implacável, tudo indica que será uma evolução agradável de assistir.
      </p>
    `,
  },
  3: {
    title: 'A atualização do regime de resolução de instituições financeiras',
    subtitle: 'Por Daniel Lima e Pedro Eroles',
    source: 'Valor Econômico',
    date: '23/02/2024',
    content: `
      <p class="mb-4">
        Em 2011, em resposta à crise financeira global de 2008 desencadeada pelos subprimes nos Estados Unidos, o Financial Stability Board (FSB) publicou o documento "Key Attributes of Effective Resolution Regimes for Financial lnstitutions" (Atributos Chave de Regimes de Resolução Efetivos para Instituições Financeiras), traçando diretrizes para que as autoridades competentes possam viabilizar processos de resolução de instituições financeiras.
      </p>
      <p class="mb-4">
        O grande objetivo dessas diretrizes é manter a continuidade de serviços críticos prestados por instituições financeiras, evitando a materialização de riscos sistêmicos, uma vez que crises sistêmicas causam a desarticulação da economia real e implicam grande perda de bem-estar para a sociedade, especialmente para os mais pobres. Nunca é demais destacar, e isso está explícito nos Key Attributes (KA), que, para se atingir esse objetivo com efetividade, a utilização de recursos públicos para o resgate de tais instituições deve ser uma medida de última instância.
      </p>
      <p class="mb-4">
        Não obstante o estabelecimento de tais diretrizes pelo FSB há mais de uma década, a resolução de instituições financeiras no Brasil tem seu arcabouço legislativo remontando à década de 70, com a promulgação da Lei no 6.024, de 1974. E foi com esse conjunto de leis, por vezes suplementado por algumas legislações emergenciais, que atravessamos tanto um programa amplo, como o Programa de Estímulo à Reestruturação e ao Fortalecimento do Sistema Financeiro Nacional (Proer) em meados da década de 90, bem como dezenas de casos de crises em instituições de menor porte ocorridos nos últimos anos.
      </p>
      <p class="mb-4">
        Diante dos aprendizados gerados pela administração da crise global de 2008, e mais recentemente pela gestão das crises bancárias do primeiro semestre de 2023 nos Estados Unidos e na Suíça, fica a constatação de que o arcabouço legislativo brasileiro para a resolução de instituições financeiras já deveria ter sido atualizado. E isso sem considerar que o Banco Central do Brasil vem trabalhando em propostas para a sua modernização desde 2006.
      </p>
      <p class="mb-4">
        Atualmente, a principal iniciativa para promover a aderência das práticas brasileiras de resolução bancária (além de outras entidades, tais como Bolsas de Valores e Seguradoras) aos padrões internacionais é o Projeto de Lei Complementar 281/2019 (PL 281), um projeto maduro e de grande amplitude.
      </p>
      <p class="mb-4">
        O PL 281 propõe dois regimes de resolução: o Regime de Estabilização (no qual é visada a recuperação propriamente dita da instituição) e o Regime de Liquidação Compulsória (que possibilita a saída organizada da IF do Sistema Financeiro Nacional).
      </p>
      <p class="mb-4">
        No Regime de Estabilização, busca-se uma solução privada para a retomada dos negócios da instituição em crise, o que se inicia, geralmente, com o afastamento dos administradores que tenham levado a instituição financeira a tal situação. Para que surta efeitos pedagógicos desejados, os causadores do problema deverão ser responsabilizados e punidos. Nesse sentido, a responsabilidade que a legislação atual impõe a controladores e administradores de instituições financeiras também carece de aprimoramentos para que seu potencial como mitigador de riscos possa ser alcançado. Esse é um assunto relacionado ao tema de resolução que merece por si só um outro artigo.
      </p>
      <p class="mb-4">
        Seguindo os preceitos do FSB, o PL 281 enfrenta o sensível tema do uso de recursos públicos para a prevenção de crises sistêmicas desencadeadas por falhas bancárias. De acordo com a disciplina proposta, tudo começa com os controladores e demais acionistas da instituição financeira absorvendo seus prejuízos. Em seguida, devem ser utilizados os recursos dos credores subordinados, aqueles que assumem risco de falência da instituição. Depois disso, é a vez de se utilizar as reservas constituídas pelo sistema financeiro em fundos garantidores e de resolução. E então, somente em casos de grande ameaça à estabilidade ou ao regular funcionamento do Sistema Financeiro Nacional, constatado que os recursos privados não serão suficientes para assegurar a estabilidade financeira, a União poderá realizar empréstimos aos fundos de resolução. Por fim, uma vez superadas as dificuldades, a União será a primeira a ser reembolsada quando houver a recuperação da instituição, cabendo ao fundo de resolução a obrigação de coletar recursos junto ao sistema financeiro e prover o devido reembolso ao Estado caso a instituição financeira termine por ser liquidada.
      </p>
      <p class="mb-4">
        lnobstante os méritos do PL 281, ele reflete o contexto histórico da crise de 2008, focado nas chamadas instituições sistemicamente relevantes. Diante disso, pergunta­ se: esse projeto seria suficiente para lidar com ameaças decorrentes de fragilidades de bancos que, em um primeiro momento, não sejam classificados como sistemicamente importantes, como nos casos do Silicon Valley Bank e do Signature Bank em 2023 nos Estados Unidos? Carecemos de novos remédios e/ou prescrições de dosagens que não estão incorporadas no texto atual? Junte-se a isso as relevantes mudanças que o Sistema Financeiro Nacional tem vivenciado nesses mais de 1O anos, com novas instituições financeiras, dos mais diversos portes e perfis de risco, surgindo e alterando a sua feição. As discussões internacionais sugerem que teremos novas diretrizes de atuação para considerar antes mesmo que possamos concluir a atual etapa de modernização do conjunto de leis de resolução que iniciamos. Mas como toda caminhada se inicia com o primeiro passo, a tramitação do PL 281 precisa acontecer.
      </p>
      <p class="mb-4">
        Com o texto aprovado, poderemos passar às novas discussões internacionais sobre o tema.
      </p>
      <p class="mb-4">
        Nossa intenção aqui é reacender esse importante debate. Afinal, é melhor nos prepararmos do que, no futuro, termos que improvisar. Também não perder de vista que a implementação desse novo arcabouço requer a existência de uma autoridade de resolução forte e amparada. Para tanto, é fundamental a valorização do corpo técnico do Banco Central do Brasil e um melhor entendimento da nossa sociedade sobre a natureza do processo de resolução bancária.
      </p>
    `,
  },
};

export default function Publication() {
  const { id } = useParams();
  const publication = publications[Number(id)];

  if (!publication) {
    return <div>Publicação não encontrada</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-24">
      <div className="container mx-auto px-6 py-12">
        <Link to="/" className="inline-flex items-center text-[#369ACA] mb-8 hover:underline">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Voltar para Home
        </Link>

        <article className="bg-white rounded-lg shadow-xl p-8 md:p-12 max-w-4xl mx-auto">
          <header className="mb-8">
            <h1 className="text-4xl font-bold text-[#010529] mb-4">{publication.title}</h1>
            <h2 className="text-xl text-gray-600 mb-4">{publication.subtitle}</h2>
            <div className="flex items-center text-gray-500">
              <span>{publication.source}</span>
              <span className="mx-2">•</span>
              <span>{publication.date}</span>
            </div>
          </header>

          <div 
            className="prose max-w-none"
            dangerouslySetInnerHTML={{ __html: publication.content }}
          />
        </article>
      </div>
    </div>
  );
}