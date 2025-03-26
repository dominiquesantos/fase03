// PostCard.jsx
import styled from "styled-components";
import { useNavigate } from "react-router-dom"; // Importação para navegação

const Card = styled.div`
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: 300px;
  height: 260px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
    @media (max-width: 768px) {
    padding: 20px;  
    height: 100%;  // Garante que o layout ocupe altura total.
`;

const Title = styled.h3`
  font-family: "Sora", sans-serif;
  color: #173E44;
  margin-bottom: 10px;
`;

const Description = styled.p`
  font-family: "Space Grotesk", sans-serif;
  color: #000;
  flex-grow: 1;
  margin-bottom: 10px;
`;

const Author = styled.p`
  font-family: "Space Grotesk", sans-serif;
  font-weight: bold;
  color: #173E44;
  margin-bottom: 10px;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ActionButton = styled.button`
  background-color: #FED173;
  color: #173E44;
  padding: 8px 16px;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #f0c14b;
  }
`;

export default function PostCard({ id, title, description, author, isProfessor, onDelete }) {
  const navigate = useNavigate();

  const handleEditClick = () => {
    if (isProfessor) {
      navigate(`/editar/${id}`);
    } else {
      navigate(`/post/${id}`);
    }
  };

  return (
    <Card>
      <div>
        <Title>{title}</Title>
        <Description>{description}</Description>
        <Author>Autor: {author}</Author>
      </div>
      <ButtonGroup>
        <ActionButton onClick={handleEditClick}>
          {isProfessor ? "Editar" : "Leia Mais"}
        </ActionButton>
        {isProfessor && (
          <ActionButton onClick={() => onDelete(id)}>
            Excluir
          </ActionButton>
        )}
      </ButtonGroup>
    </Card>
  );
}