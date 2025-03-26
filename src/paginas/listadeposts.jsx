import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function ListaDePosts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const initialPosts = [
      {
        id: 1,
        title: "COMO USAR O MUNDO DIGITAL A SEU FAVOR",
        description: "Nesse post, você vai descobrir truques digitais que vão transformar a forma como aprende e se organiza!",
        author: "Lucas da Silva",
        content: `A tecnologia está presente em quase todos os aspectos da nossa rotina, e quando usada de maneira estratégica, pode ser uma grande aliada nos estudos e na organização pessoal. O mundo digital oferece ferramentas que facilitam a aprendizagem, otimizam o tempo e tornam os conteúdos mais acessíveis. Mas como aproveitar ao máximo esses recursos?
    
    1. **Organização é a Chave**:  
    Com tantas informações disponíveis, manter tudo em ordem é essencial. Aplicativos como **Notion** e **Trello** ajudam a criar listas de tarefas, anotações e lembretes, facilitando o acompanhamento dos estudos. Defina prioridades e evite deixar tudo para a última hora!
    
    2. **Anote de Forma Inteligente**:  
    As anotações soltas podem ser substituídas por ferramentas que otimizam o aprendizado. Apps como **Evernote** e **OneNote** permitem organizar resumos, inserir imagens e até gravar áudios para revisar depois. Assim, você pode acessar seus conteúdos em qualquer lugar.
    
    3. **Participe de Comunidades Online**:  
    Aprender sozinho pode ser desafiador, mas a internet permite que você troque conhecimento com outras pessoas. Plataformas como **Discord**, **Reddit** e grupos de estudo no **WhatsApp** ou **Telegram** conectam estudantes com interesses em comum. Participar de discussões, tirar dúvidas e compartilhar materiais torna o aprendizado mais interativo e motivador.
    
    4. **Transforme a Leitura em Áudio**:  
    Se você tem dificuldade para ler longos textos ou quer otimizar seu tempo, experimente transformar conteúdos escritos em áudio. Ferramentas como **Speech Central**, **Voice Aloud Reader** e o próprio recurso de leitura em voz alta do **Google** podem te ajudar a escutar seus resumos e tornar o aprendizado mais dinâmico.
    
    5. **Pratique com Simulados**:  
    A melhor forma de fixar o conteúdo é colocando em prática. Sites como **Descomplica** e **Stoodi** oferecem simulados e exercícios interativos.
    
    O mundo digital pode ser um grande aliado do aprendizado quando usado com estratégia. Ao adotar ferramentas que ajudam na organização, na concentração e na prática do conteúdo, você transforma a tecnologia em uma aliada poderosa nos estudos. Agora, é só testar essas dicas e encontrar o que funciona melhor para você! 🚀`
      },
      {
        id: 2,
        title: "SUPERANDO A PROCRASTINAÇÃO",
        description: "Como enfrentar a procrastinação e usar o seu tempo de maneira inteligente",
        author: "Ana Beatriz",
        content: "Aqui o conteúdo completo do post 2...",
      },
      {
        id: 3,
        title: "COMO TRANSFORMAR ERROS EM APRENDIZADO",
        description: "Aprenda como usá-los a seu favor para crescer e alcançar seus objetivos acadêmicos",
        author: "Mariana Santos",
        content: "Aqui o conteúdo completo do post 3...",
      },
    ];

    // Salva posts iniciais no localStorage, se ainda não estiverem lá
    if (!localStorage.getItem("posts")) {
  localStorage.setItem("posts", JSON.stringify(initialPosts));
}

    setPosts(JSON.parse(localStorage.getItem("posts")) || []);
  }, []);

  return (
    <div>
      <h1>Lista de Posts</h1>
      {posts.map((post) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.description}</p>
          <Link to={`/editarpost/${post.id}`}>
            <button>Editar</button>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default ListaDePosts;
