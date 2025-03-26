// Home.jsx
import React, { useState } from "react";
import styled from "styled-components";
import Header from "../components/header";
import PostCard from "../components/postcard";

const Container = styled.div`
  background: #FFFBEF;
  padding: 40px;
`;

const TitleSection = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  
`;

const Title = styled.h2`
  font-family: "Sora Bold", sans-serif;
  color: #173E44;
  font-size: 46px;

  @media (max-width: 768px) {
    font-size: 36px;  // Ajuste menor para tablets
  }

  @media (max-width: 480px) {
    font-size: 28px;  // Ajuste menor para smartphones
  }
`;

const Description = styled.p`
  font-family: "Space Grotesk", sans-serif;
  color: #000000;
  margin-top: 10px;
  width: 50%;
  font-size: 20px;

  @media (max-width: 768px) {
    width: 100%;  // Expandir para ocupar mais espaço em telas menores
    font-size: 18px;
  }

  @media (max-width: 480px) {
    font-size: 16px;  // Ajuste para smartphones pequenos
  }

`;

const PostsGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: space-between;
    @media (max-width: 768px) {
    gap: 50px;  // Aumenta apenas em dispositivos móveis.
  }
`;

const SearchInput = styled.input`
  width: 100%;
  max-width: 500px;
  padding: 10px;
  margin-bottom: 30px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-family: "Space Grotesk", sans-serif;
`;

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");

  const isProfessor = true; // Essa lógica pode ser ajustada dinamicamente no futuro, mas apenas o professor faz login.

  const posts = [
    { id: 1, title: "Como Usar o Mundo Digital a Seu Favor", description: "Nesse post, você vai descobrir truques digitais que vão transformar a forma como aprende e se organiza!", author: "Prof. Lucas da Silva" },
    { id: 2, title: "Superando a Procrastinação", description: "Como enfrentar a procrastinação e usar o seu tempo de maneira inteligente.", author: "Prof. Ana Beatriz" },
    { id: 3, title: "Como Transformar Erros em Aprendizado", description: "Aprenda como usá-los a seu favor para crescer e alcançar seus objetivos acadêmicos.", author: "Prof. Mariana Santos" },
    { id: 4, title: "Escrevendo Sem Travar", description: "Estruture argumentos com precisão e conquiste a atenção de qualquer leitor.", author: "Prof. Ana Beatriz" },
    { id: 5, title: "Para que serve a Matemática?", description: "Neste conteúdo, exploramos sua aplicação prática e por que ela é essencial para desenvolver o raciocínio lógico e resolver problemas do mundo real.", author: "Prof. Ricardo Menezes" },
    { id: 6, title: "Educação Financeira: Importância e Como Fazer", description: "Aqui, você aprende por que a educação financeira é tão importante e como dar os primeiros passos para organizar suas finanças de forma inteligente!", author: "Prof. Juliana Santos Paiva" },

];

  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.author.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Container>
      <Header />
      <TitleSection>
        <div>
          <Title>CONECTANDO PROFESSORES E ALUNOS</Title>
          <Description>
            Uma plataforma interativa que torna o aprendizado mais acessível e colaborativo, conectando professores e alunos em uma jornada de ensino e trocas.
          </Description>
        </div>
       
      </TitleSection>

      <SearchInput
        type="text"
        placeholder="Buscar posts..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <PostsGrid>
        {filteredPosts.map((post) => (
          <PostCard
          key={post.id}
          id={post.id}
          title={post.title}
          description={post.description}
          author={post.author}
          isProfessor={false}  // Botão "Leia Mais" visível
          onEditClick={() => console.log("Isso não será usado pelo aluno")}
          onReadMoreClick={() => console.log("Redirecionar para página de leitura do post")}
        />
        
        ))}
      </PostsGrid>
    </Container>
  );
}
