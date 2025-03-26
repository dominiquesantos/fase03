import styled from "styled-components"; 
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Container = styled.div`
  background: #FFFBEF;
  padding: 40px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FormContainer = styled.div`
  width: 100%;
  max-width: 800px;
  background: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
`;

const FormField = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  font-family: "Sora Bold", sans-serif;
  font-weight: bold;
  color: #173E44;
  margin-bottom: 8px;
  display: block;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  min-height: 120px;
  font-family: "Space Grotesk", sans-serif;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Button = styled.button`
  background: #FED173;
  color: #173E44;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  font-family: "Sora", sans-serif;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background: #FEC04A;
  }
`;

export default function EditarPost() {
  const { id } = useParams(); // Pegamos o ID da URL
  const navigate = useNavigate();
  const [post, setPost] = useState(null); 

  useEffect(() => {
    const storedPosts = JSON.parse(localStorage.getItem("posts")) || []; 
    const selectedPost = storedPosts.find((post) => post.id === parseInt(id)); 
  
    if (selectedPost) {
      setPost(selectedPost); 
    } else {
      alert("Post não encontrado!");
      navigate("/areadoprofessor");
    }
  }, [id, navigate]);
  
  function handleSave() {
    const storedPosts = JSON.parse(localStorage.getItem("posts")) || [];
    
    const updatedPosts = storedPosts.map((p) =>
      p.id === post.id ? post : p // Atualiza o post correspondente pelo ID
    );
    
    localStorage.setItem("posts", JSON.stringify(updatedPosts)); // Salva as alterações no localStorage
    alert("Alterações salvas!");
    navigate("/areadoprofessor"); // Redireciona após salvar
  }
  
  function handleDelete() {
    const storedPosts = JSON.parse(localStorage.getItem("posts")) || [];
    
    const filteredPosts = storedPosts.filter((p) => p.id !== post.id); // Remove o post pelo ID
    localStorage.setItem("posts", JSON.stringify(filteredPosts)); // Atualiza o localStorage
  
    alert("Post excluído!");
    navigate("/areadoprofessor");
  }
  

  function handleChange(e) {
    setPost({ ...post, [e.target.name]: e.target.value });
  }

  if (!post) {
    return <Container>Carregando post...</Container>;
  }

  return (
    <Container>
      <FormContainer>
        <FormField>
          <Label>Título</Label>
          <Input
            name="titulo"
            value={post.titulo}
            onChange={handleChange}
          />
        </FormField>

        <FormField>
          <Label>Descrição</Label>
          <TextArea
            name="descricao"
            value={post.descricao}
            onChange={handleChange}
          />
        </FormField>

        <FormField>
          <Label>Autor</Label>
          <Input
            name="autor"
            value={post.autor}
            onChange={handleChange}
          />
        </FormField>

        <FormField>
          <Label>Conteúdo</Label>
          <TextArea
            name="conteudo"
            value={post.conteudo}
            onChange={handleChange}
          />
        </FormField>

        <ButtonContainer>
          <Button onClick={handleSave}>Salvar Alterações</Button>
          <Button onClick={handleDelete}>Excluir</Button>
        </ButtonContainer>
      </FormContainer>
    </Container>
  );
}
