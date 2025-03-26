import styled from "styled-components";
import Header from "../components/header";
import PostCard from "../components/postcard";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  background: #FFFBEF;
  padding: 40px;
`;

const TitleSection = styled.div`
  text-align: center;
  margin-bottom: 40px;
`;

const Title = styled.h2`
  font-family: "Sora Bold", sans-serif;
  color: #173E44;
`;

const ButtonSection = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 30px;
`;

const CreateButton = styled.button`
  background-color: #FED173;
  color: #173E44;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  font-family: "Sora Bold", sans-serif;
  cursor: pointer;
`;

const PostsGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: space-between;
`;

export default function PáginaInicialProfessor() {
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);

  const fixedPosts = [
    { id: 1, titulo: "Como Usar o Mundo Digital a Seu Favor", descricao: "Descubra truques digitais que vão transformar a forma como aprende e se organiza!", autor: "Prof. Lucas da Silva" },
    { id: 2, titulo: "Superando a Procrastinação", descricao: "Como enfrentar a procrastinação e usar o seu tempo de maneira inteligente.", autor: "Prof. Ana Beatriz" },
    { id: 3, titulo: "Como Transformar Erros em Aprendizado", descricao: "Aprenda como usá-los a seu favor para crescer e alcançar seus objetivos acadêmicos.", autor: "Prof. Mariana Santos" },
    { id: 4, titulo: "Escrevendo Sem Travar", descricao: "Estruture argumentos com precisão e conquiste a atenção de qualquer leitor.", autor: "Prof. Ana Beatriz" },
    { id: 5, titulo: "Para que serve a Matemática?", descricao: "Explorando sua aplicação prática e importância no raciocínio lógico.", autor: "Prof. Ricardo Menezes" },
    { id: 6, titulo: "Educação Financeira: Importância e Como Fazer", descricao: "Aprenda a organizar suas finanças de forma inteligente.", autor: "Prof. Juliana Santos Paiva" },
  ];

  useEffect(() => {
    const storedPosts = JSON.parse(localStorage.getItem("posts")) || [];

    const combinedPosts = [...storedPosts, ...fixedPosts];
    const uniquePosts = combinedPosts.filter(
      (post, index, self) =>
        index === self.findIndex((p) => p.titulo === post.titulo)
    );

    setPosts(uniquePosts);
  }, []);

  const handleDeletePost = (postId) => {
    const updatedPosts = posts.filter((post) => post.id !== postId);
    setPosts(updatedPosts);
    localStorage.setItem("posts", JSON.stringify(updatedPosts));
  };

  return (
    <Container>
      <Header />

      <TitleSection>
        <Title>Olá, Professor!</Title>
      </TitleSection>

      <ButtonSection>
        <CreateButton onClick={() => navigate("/criar-post")}>Criar Novo Post</CreateButton>
      </ButtonSection>

      <PostsGrid>
        {posts.length > 0 ? (
          posts.map((post, index) => (
            <PostCard
              key={index}
              id={post.id}
              title={post.titulo}
              description={post.descricao}
              author={post.autor}
              isProfessor={true}
              onDelete={handleDeletePost}
            />
          ))
        ) : (
          <p>Nenhum post encontrado.</p>
        )}
      </PostsGrid>
    </Container>
  );
}
