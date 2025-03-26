// Header.jsx
import styled from "styled-components";
import { Link } from "react-router-dom";

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 30px;
  background-color: #FFFBEF;
  border-bottom: 2px solid #FED173;
    @media (max-width: 768px) {
    gap: 3px;                 // Espaço adicional no mobile entre o logo, Home e botão
    justify-content: center;
     align-items: center;     /* Alinha verticalmente */

  }
  
`;
const LogoAndHome = styled.div`
  display: flex;
  align-items: center;  /* Garante o alinhamento vertical */
  gap: 10px;  /* Espaçamento entre o logo e o link Home */
`;

const Logo = styled.h1`
  font-size: 22px;
  font-family: "Sora", sans-serif;
  font-weight: bold;
  color: #173E44;
  margin-right: 20px;  // Adicionado para afastar o logo
  margin: 0;
   @media (max-width: 790px) {
    font-size: 18px; // Reduz o tamanho da fonte em telas menores (como celulares)
      white-space: nowrap; /* Impede quebra de linha */
  margin-right: 20px;   // ADICIONE ESSE espaçamento entre logo e "Home"
 

  }
`;

const Nav = styled.nav`
  display: flex;
  gap: 15px;
  align-items: center;

  a {
    font-family: "Sora", sans-serif;
    font-size: 16px;
    color: #173E44;
    text-decoration: none;
    margin-right: 20px; /* Afasta "Home" do "Troca Fácil" */
    

  }

  button {
    background-color: #FED173;
    font-family: "Sora", sans-serif;
    font-size: 14px;
    font-weight: bold;
    color: #173E44;
    padding: 8px 15px;
    border-radius: 6px;
    border: none;
    cursor: pointer;

    &:hover {
      background-color: #FFD700;
    }
  }
`;

function Header() {
  return (
    <HeaderContainer>
      <Logo>Troca Fácil</Logo>
      <Nav>
        <Link to="/">Home</Link>
        <Link to="/login">
          <button>Área do Professor</button>
        </Link>
      </Nav>
    </HeaderContainer>
  );
}

export default Header;
