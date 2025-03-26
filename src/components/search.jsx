import { useState } from "react";
import styled from "styled-components";

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 500px; /* Aumenta a largura máxima para alinhar melhor */
  margin: 20px 0 0; /* Adiciona margem superior para espaçamento */
`;



const SearchInput = styled.input`
  width: 100%; /* Garante que ele ocupe o espaço do SearchContainer */
  padding: 12px;
  border: 2px solid #173E44;
  border-radius: 8px;
  font-size: 16px;
  outline: none;
  &:focus {
    border-color: #FED173;
  }
`;


export default function Search({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    if (onSearch) {
      onSearch(event.target.value); // Passa o valor para o componente pai
    }
  };

  return (
    <SearchContainer>
      <SearchInput
        type="text"
        placeholder="O que deseja encontrar?"
        value={searchTerm}
        onChange={handleSearch}
      />
    </SearchContainer>
  );
}
