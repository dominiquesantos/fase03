// CriarPost.jsx
import styled from "styled-components";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  background: #FFFBEF;
  padding: 40px;
  min-height: 100vh;
`;

const Title = styled.h1`
  color: #173E44;
  font-family: "Sora Bold", sans-serif;
  text-align: center;
`;

const ContentContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;

const FormField = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 8px;
  font-weight: bold;
  font-family: "Sora Bold", sans-serif;
  color: #173E44;
`;

const Input = styled.input`
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-family: "Space Grotesk", sans-serif;
  
`;

const Textarea = styled.textarea`
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-family: "Space Grotesk", sans-serif;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #FED173;
  border: none;
  border-radius: 4px;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background-color: #f0c14b;
  }
`;

export default function CriarPost() {
  const [titulo, setTitulo] = useState("");
  const [descricao, setDescricao] = useState("");
  const [conteudo, setConteudo] = useState("");
  const [autor, setAutor] = useState("");
  const navigate = useNavigate();

  const handleSave = () => {
    console.log("Tentando salvar o post...");
    const newPost = { titulo, descricao, conteudo, autor };
    console.log("Novo Post:", newPost);

    try {
      const posts = JSON.parse(localStorage.getItem("posts")) || [];
      posts.push(newPost);
      localStorage.setItem("posts", JSON.stringify(posts));
      console.log("Post salvo com sucesso!");
      alert("Novo post criado!");
      navigate("/areadoprofessor");
    } catch (error) {
      console.error("Erro ao salvar no localStorage:", error);
      alert("Erro ao salvar o post. Por favor, tente novamente.");
    }
  };

  return (
    <Container>
      <Title>Criar Novo Post</Title>
      <ContentContainer>
        <FormField>
          <Label>Título:</Label>
          <Input
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
            placeholder="Digite o título do post"
          />
        </FormField>

        <FormField>
          <Label>Descrição:</Label>
          <Textarea
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
            placeholder="Digite a descrição do post"
          />
        </FormField>

        <FormField>
          <Label>Conteúdo do Post:</Label>
          <Textarea
            value={conteudo}
            onChange={(e) => setConteudo(e.target.value)}
            placeholder="Escreva o conteúdo completo do post"
            rows="10"
          />
        </FormField>

        <FormField>
          <Label>Autor:</Label>
          <Input
            value={autor}
            onChange={(e) => setAutor(e.target.value)}
            placeholder="Digite o nome do autor"
          />
        </FormField>
      </ContentContainer>

      <ButtonContainer>
        <Button onClick={handleSave}>Salvar</Button>
        <Button onClick={() => navigate(-1)}>Voltar</Button>
      </ButtonContainer>
    </Container>
  );
}
