import { useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Header from "../components/header";


const PageWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  background: #FFFBEF;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const HeaderWrapper = styled.div`
  width: 100%;
`;

const Container = styled.div`
  padding: 40px;
  max-width: 800px;
  width: 100%;
  text-align: left;
`;

const Title = styled.h1`
  color: #173E44;
  font-family: "Sora Bold", sans-serif;
  margin-bottom: 10px;
`;

const Description = styled.p`
  font-family: "Space Grotesk Regular", sans-serif;
  font-size: 18px;
  color: #000;
  margin-bottom: 15px;
`;

const Author = styled.p`
  font-family: "Sora Bold", sans-serif;
  font-size: 16px;
  color: #000;
  margin-bottom: 40px;
`;

const PostContent = styled.div`
  color: #000;
  text-align: justify;
  font-family: "Space Grotesk Regular", sans-serif;
  white-space: pre-line;
  line-height: 1.6; /* Aumenta o espaçamento entre as linhas */
  
  p {
    margin-bottom: 15px; /* Adiciona espaço entre parágrafos */
  }
`;


const AvancarButton = styled.button`
  background: #FED173;
  color: #173E44;
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  margin-top: 40px;
  border-radius: 5px;
  transition: 0.3s;
  font-family: "Sora Bold", sans-serif;

  &:hover {
    background: #e6b85c;
  }
`;

export default function PostLeitura() {
  const { id } = useParams();
  const navigate = useNavigate();

  const posts = [
    {
      id: 1,
      title: "COMO USAR O MUNDO DIGITAL A SEU FAVOR",
      description: "Nesse post, você vai descobrir truques digitais que vão transformar a forma como aprende e se organiza!",
      content: `A tecnologia está presente em quase todos os aspectos da nossa rotina, e quando usada de maneira estratégica, pode ser uma grande aliada nos estudos e na organização pessoal. O mundo digital oferece ferramentas que facilitam a aprendizagem, otimizam o tempo e tornam os conteúdos mais acessíveis. Mas como aproveitar ao máximo esses recursos?

1. Organização é a Chave:
Com tantas informações disponíveis, manter tudo em ordem é essencial. Aplicativos como Notion e Trello ajudam a criar listas de tarefas, anotações e lembretes, facilitando o acompanhamento dos estudos. Defina prioridades e evite deixar tudo para a última hora!

2. Anote de Forma Inteligente:
As anotações soltas por ferramentas que otimizam o aprendizado. Apps como Evernote e OneNote permitem organizar resumos, inserir imagens e até gravar áudios para revisar depois. Assim, você pode acessar seus conteúdos em qualquer lugar.

3. Participe de Comunidades Online:
Aprender sozinho pode ser desafiador, mas a internet permite que você troque conhecimento com outras pessoas. Plataformas como Discord, Reddit e grupos de estudo no WhatsApp ou Telegram conectam estudantes com interesses em comum. Participar de discussões, tirar dúvidas e compartilhar materiais torna o aprendizado mais interativo e motivador.

4. Transforme a Leitura em Áudio:
Se você tem dificuldade para ler longos textos ou quer otimizar seu tempo, experimente transformar conteúdos escritos em áudio. Ferramentas como Speech Central, Voice Aloud Reader e o próprio recurso de leitura em voz alta do Google podem te ajudar a escutar seus resumos e tornar o aprendizado mais dinâmico.

5. Pratique com Simulados:
A melhor forma de fixar o conteúdo é colocando em prática. Sites como Descomplica e Stoodi oferecem simulados e exercícios interativos.

O mundo digital pode ser um grande aliado do aprendizado quando usado com estratégia. Ao adotar ferramentas que ajudam na organização, na concentração e na prática do conteúdo, você transforma a tecnologia em uma aliada poderosa nos estudos. Agora, é só testar essas dicas e encontrar o que funciona melhor para você! 🚀`,
      author: "Escrito por Lucas da Silva"
    },
    {
      id: 2,
      title: "Superando a Procrastinação",
      description: "Como enfrentar a procrastinação e usar o seu tempo de maneira inteligente, deixando a ansiedade de lado.",
      content: `A procrastinação é um desafio comum para muitos estudantes. O excesso de informações, as distrações digitais e a dificuldade em manter o foco podem transformar tarefas simples em verdadeiras maratonas. No entanto, com algumas estratégias inteligentes, é possível treinar sua mente para agir no momento certo e tornar o estudo mais produtivo.

      1. Use a Técnica dos 5 Minutos:
      O primeiro passo para driblar a procrastinação é começar. Muitas vezes, adiamos uma tarefa porque parece difícil ou cansativa, mas dar o primeiro passo é o segredo.
      A Técnica dos 5 Minutos consiste em se comprometer a realizar a atividade por apenas cinco minutos. Na maioria dos casos, depois desse tempo, você perceberá que é mais fácil continuar do que parar.

      2. Bloqueie Distrações com Apps Especializados:
      Seu celular e computador podem ser seus maiores aliados ou inimigos no aprendizado. Para evitar distrações, use aplicativos como Forest, Freedom e Cold Turkey, que bloqueiam redes sociais, notificações e sites não relacionados ao estudo por um período determinado.
      Assim, você elimina as tentações e foca no que realmente importa.

      3. Experimente o Método "Tempero":
      Esse método consiste em associar uma atividade agradável a uma tarefa que você costuma adiar. Por exemplo, se precisa revisar um conteúdo, faça isso em um lugar confortável, com uma música instrumental de fundo ou com um chá ou café ao lado.
      Pequenos incentivos tornam os estudos mais prazerosos e reduzem a sensação de obrigação.

      4. Defina Metas Pequenas e Claras:
      Estabelecer metas muito grandes pode gerar ansiedade e te levar a procrastinar. Em vez de pensar “Preciso estudar todo o conteúdo da prova”, divida o estudo em pequenas etapas:
      
      • Ler 3 páginas do livro
      • Fazer 5 exercícios
      • Escrever um resumo curto

      A cada meta concluída, seu cérebro recebe uma sensação de recompensa, o que te motiva a continuar.

      5. Envolva-se com Grupos de Estudo:
      Estudar sozinho pode ser cansativo, e saber que outras pessoas contam com você pode ser um incentivo para começar. Participe de grupos de estudo online ou presenciais, compartilhe dúvidas e estabeleça prazos em conjunto. O senso de responsabilidade com os colegas ajuda a manter o ritmo e evita que você deixe tudo para depois.

      A procrastinação pode ser vencida com pequenas mudanças na rotina. Teste essas estratégias, descubra o que funciona melhor para você e transforme seus hábitos de estudo. O importante é começar agora!`,
      author: "Prof. Ana Beatriz"
    },
    {
        id: 3,
        title: "Como Transformar Erros em Aprendizado",
        description: "Em vez de temer os erros, aprenda como usá-los a seu favor para crescer e alcançar seus objetivos acadêmicos.",
        content: `Errar é parte inevitável da jornada do aprendizado. Muitas vezes, tendemos a encarar os erros como falhas definitivas, como se fossem obstáculos intransponíveis que nos afastam do sucesso. No entanto, a verdade é que os erros são, na realidade, oportunidades valiosas de crescimento. Quando analisados corretamente, eles nos fornecem lições que podem nos levar a um entendimento mais profundo e ao aperfeiçoamento de nossas habilidades.

A primeira etapa para transformar um erro em aprendizado é mudar a perspectiva sobre ele. Em vez de se frustrar ou desistir, é fundamental reconhecer que errar significa estar tentando, e tentar é o que impulsiona qualquer processo de desenvolvimento. Um erro não define sua capacidade ou inteligência; ele apenas indica um ponto que pode ser aprimorado.

Além disso, é importante analisar o erro com atenção. O que deu errado? Por que aconteceu? Existe um padrão nesses equívocos? Quando nos permitimos refletir sobre nossas falhas, conseguimos identificar pontos específicos que precisam de mais dedicação e ajuste. Esse processo de autoconhecimento é essencial para o crescimento acadêmico, pois nos ensina não apenas o conteúdo, mas também estratégias mais eficazes de estudo e resolução de problemas.

Por fim, ao transformar erros em aprendizado, é essencial cultivar a paciência consigo mesmo. O progresso raramente é linear, e cada nova tentativa é um passo à frente, mesmo que pareça pequeno. Quando aprendemos a enxergar os erros como parte natural do processo, desenvolvemos uma mentalidade mais forte, criativa e adaptável, essencial não apenas para a vida acadêmica, mas para qualquer desafio que enfrentarmos.`,
        author: "Prof. Mariana Santos"
      },
      {
        id: 4,
        title: "Escrevendo Sem Travar",
        description: "Estruture argumentos com precisão, desenvolva um texto coeso e conquiste a atenção de qualquer leitor.",
        content: `Escrever pode parecer um desafio intimidador, especialmente quando as ideias não fluem como gostaríamos. No entanto, a chave para superar esse bloqueio não está em esperar pela inspiração perfeita, mas sim em desenvolver técnicas que tornem a escrita mais natural e eficaz. Para escrever sem travar, é essencial entender que um bom texto não nasce pronto—ele é construído passo a passo, começando pela organização das ideias e evoluindo através da prática e da revisão.

O primeiro passo é estruturar os argumentos com clareza. Antes de começar a escrever, é útil ter um direcionamento: qual é o objetivo do texto? Quem será o leitor? Que informações são essenciais para sustentar o ponto de vista? Responder a essas perguntas ajuda a evitar bloqueios, pois estabelece um caminho lógico a seguir. Se houver dificuldade em começar, um esboço simples pode ser a solução, dividindo o texto em introdução, desenvolvimento e conclusão. Isso proporciona um guia para a escrita e impede que o pensamento se disperse.

Com a estrutura definida, o próximo desafio é garantir que o texto seja coeso. Cada ideia deve se conectar naturalmente à seguinte, criando um fluxo contínuo de leitura. Para isso, é importante utilizar conectivos e manter uma progressão lógica dos argumentos. Muitas vezes, o bloqueio acontece porque tentamos escrever tudo perfeitamente na primeira tentativa, mas o mais importante é colocar as ideias no papel e, depois, refiná-las na revisão. Escrever é um processo, e permitir-se errar e reescrever faz parte dele.

Além disso, um texto bem construído não apenas informa, mas também cativa o leitor. Para prender a atenção, é fundamental usar uma linguagem clara e envolvente, evitando repetições desnecessárias e mantendo um ritmo dinâmico. Exemplos concretos, analogias e perguntas instigantes podem tornar a leitura mais interessante e acessível. O segredo está em equilibrar precisão e criatividade, garantindo que cada parágrafo acrescente algo relevante à argumentação.

Por fim, o melhor antídoto contra a dificuldade de escrever é a prática constante. Quanto mais se escreve, mais natural se torna o processo. O medo da página em branco se dissolve quando entendemos que escrever é um ato de construção, não de perfeição imediata. Cada novo texto é uma oportunidade de aprendizado e aprimoramento, e com disciplina e dedicação, a escrita se torna não apenas mais fluida, mas também mais poderosa e impactante.`,
        author: "Prof. Ana Beatriz"
      },
      {
        id: 5,
        title: "Para que serve a Matemática?",
        description: "Neste conteúdo, exploramos sua aplicação prática e por que ela é essencial para desenvolver o raciocínio lógico e resolver problemas do mundo real.",
        content: `A Matemática é frequentemente vista apenas como um conjunto de fórmulas e equações a serem decoradas, mas, na realidade, ela tem uma importância muito maior do que simplesmente fornecer soluções numéricas. Ela é uma ferramenta essencial para compreender e resolver problemas do mundo real, e sua aplicação prática está presente em diversos aspectos do nosso cotidiano. Desde as finanças pessoais até as mais avançadas tecnologias, a Matemática está por trás de quase tudo o que fazemos, desempenhando um papel fundamental na resolução de problemas de maneira estruturada e lógica.

Uma das principais razões para estudar Matemática é o desenvolvimento do raciocínio lógico. Através de conceitos como álgebra, geometria e cálculo, aprendemos a organizar o pensamento de forma coerente, identificar padrões e tomar decisões baseadas em análises racionais. Esses são hábitos de pensamento que transcendem os números e são aplicáveis a qualquer área da vida. Seja para planejar um orçamento, resolver um desafio profissional ou mesmo para organizar nossas tarefas diárias de maneira eficiente, a Matemática nos ensina a pensar de maneira crítica e ordenada.

Além disso, a Matemática é a linguagem universal usada para descrever fenômenos naturais e sociais. Em áreas como a engenharia, a física e a economia, ela permite modelar e entender comportamentos complexos, prever resultados e otimizar soluções. Por exemplo, cálculos envolvendo probabilidades são essenciais para avaliar riscos, enquanto a geometria é usada no design de produtos, arquitetura e construção de infraestruturas. Em muitos campos, a Matemática não é apenas útil, mas essencial para a inovação e progresso.

Por mais desafiadora que possa parecer, a Matemática também nos ensina a lidar com a frustração e a persistência. Resolver problemas complexos exige paciência, prática e a disposição para aprender com os erros. Muitas vezes, o caminho para a solução não é imediato, e é nesse processo de tentativa e erro que a verdadeira compreensão acontece. Ao aplicar o raciocínio lógico e seguir métodos rigorosos, desenvolvemos habilidades que não apenas melhoram nossa capacidade de resolver problemas matemáticos, mas também nos preparam para enfrentar desafios em outras áreas da vida.

Em suma, a Matemática não é apenas uma disciplina escolar, mas uma habilidade vital para entender o mundo ao nosso redor, tomar decisões informadas e enfrentar os desafios diários de forma eficaz. Ela desenvolve nosso raciocínio lógico, promove a resolução de problemas e é a base para muitas das inovações tecnológicas que moldam o nosso futuro. Ao estudá-la, estamos investindo em nossa capacidade de pensar de forma clara e estruturada, uma habilidade que será útil em qualquer caminho que decidamos seguir.`,
        author: "Prof. Ricardo Menezes"
    },
    {
        id: 6,
        title: "Educação Financeira: Importância e Como Fazer",
        description: "Aqui, você aprende por que a educação financeira é tão importante e como dar os primeiros passos para organizar suas finanças de forma inteligente!",
        content: `A educação financeira é um tema que, muitas vezes, é negligenciado durante a escola, mas que tem um impacto direto em nossas vidas diárias. Saber como lidar com o dinheiro de maneira inteligente pode fazer toda a diferença no seu bem-estar e na realização dos seus objetivos. Vamos entender por que ela é tão importante e como você pode começar a aplicar esses conhecimentos no seu dia a dia!


        Por que a educação financeira é importante?

        1. Controle do dinheiro: Sem educação financeira, é fácil acabar gastando mais do que se ganha ou se perder em dívidas. Aprender a controlar suas finanças é essencial para garantir que seu dinheiro seja usado de forma consciente e que você consiga alcançar suas metas pessoais.
  
        2. Planejamento de longo prazo: Saber administrar o dinheiro não significa apenas sobreviver ao mês, mas também planejar para o futuro. Se você pensa em comprar uma casa, viajar ou se aposentar com conforto, é preciso saber investir e poupar desde cedo.

        3. Prevenção de dívidas: Quando você entende como o sistema financeiro funciona, consegue tomar decisões mais informadas, evitando o uso descontrolado de crédito ou a contratação de empréstimos desnecessários.

        Como começar a organizar suas finanças?

        1. Saiba quanto entra e quanto sai: O primeiro passo é entender para onde seu dinheiro está indo. Anote todos os seus gastos mensais e compare com a sua renda. Isso vai ajudar a identificar onde você pode cortar custos e onde pode economizar.

        2. Crie um orçamento: Organizar suas finanças começa com um bom planejamento. Estabeleça um orçamento mensal, definindo quanto você pode gastar em cada área, como alimentação, lazer, transporte, etc. Isso vai te ajudar a ter uma visão mais clara do seu dinheiro.

        3. Poupe antes de gastar: Uma das dicas mais importantes é pagar a si mesmo antes de pagar qualquer outra coisa. Guarde uma parte da sua renda todo mês, mesmo que seja um valor pequeno. Isso cria o hábito da poupança e ajuda a criar um fundo de emergência.

        4. Evite dívidas altas: As dívidas podem consumir uma boa parte do seu orçamento. Evite gastar mais do que você pode pagar e tenha cuidado com o uso do cartão de crédito, que muitas vezes é uma armadilha.
  
        5. Invista no seu futuro: Quando suas finanças estiverem sob controle, comece a pensar em investimentos. Isso pode ser através de uma conta poupança, um fundo de investimento ou até mesmo em educação para adquirir novas habilidades e melhorar sua renda.
  
        A educação financeira não é sobre viver de forma restritiva, mas sim sobre tomar decisões conscientes que garantam estabilidade e qualidade de vida. Com um pouco de disciplina e organização, você pode melhorar muito a forma como lida com seu dinheiro e alcançar suas metas. Comece agora e veja os resultados no futuro!

`,
        author: "Prof. Juliana Santos Paiva"
      },
  ];

  const postIndex = posts.findIndex((p) => p.id === Number(id));

  if (postIndex === -1) {
    return (
      <PageWrapper>
        <HeaderWrapper>
          <Header />
        </HeaderWrapper>
        <Container>
          <h1>Post não encontrado</h1>
        </Container>
      </PageWrapper>
    );
  }
  

  const post = posts[postIndex];

  const handleAvancar = () => {
    const nextIndex = (postIndex + 1) % posts.length;
    navigate(`/post/${posts[nextIndex].id}`);
  };

  return (
    <PageWrapper>
      <HeaderWrapper>
        <Header />
      </HeaderWrapper>
      <Container>
        {/* Título, descrição e autor diretamente no container */}
        <Title>{post.title}</Title>
        <Description>{post.description}</Description>
        <Author>{post.author}</Author>

        {/* Conteúdo do post */}
        <PostContent>{post.content}</PostContent>

        {/* Botão para avançar */}
        <AvancarButton onClick={handleAvancar}>Avançar</AvancarButton>
      </Container>
    </PageWrapper>
  );
  
}
