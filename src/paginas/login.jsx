import styled from "styled-components";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/authcontext";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: #FFFBEF;
`;

const Card = styled.div`
  background: white;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
  width: 350px;
`;

const Title = styled.h1`
  font-family: "Sora Bold", sans-serif;
  color: #173E44;
  margin-bottom: 10px;
`;

const Subtitle = styled.p`
  font-family: "Space Grotesk Regular", sans-serif;
  color: #000;
  margin-bottom: 20px;
`;

const Input = styled.input`
  width: 100%;
  padding: 15px;
  margin-bottom: 15px;
  border: 1px solid #173E44;
  border-radius: 8px;
  font-family: "Space Grotesk Regular", sans-serif;
`;

const Button = styled.button`
  background: #FED173;
  color: #173E44;
  font-family: "Sora Bold", sans-serif;
  padding: 10px;
  border: none;
  cursor: pointer;
  border-radius: 8px;
  width: 100%;
  margin-top: 10px;
`;

const Link = styled.a`
  display: block;
  font-family: "Space Grotesk Regular", sans-serif;
  color: #173E44;
  margin-top: 15px;
  text-decoration: none;
`;

export default function Login() {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (login(email, password)) {
      navigate("/areadoprofessor"); // ✅ Agora o redirecionamento acontece aqui
    } else {
      alert("Credenciais inválidas");
    }
  };

  return (
    <Container>
      <Card>
        <Title>Troca Fácil</Title>
        <Subtitle>Acesse sua conta para continuar</Subtitle>
        <Input type="text" placeholder="E-mail ou Usuário" value={email} onChange={(e) => setEmail(e.target.value)} />
        <Input type="password" placeholder="Senha" value={password} onChange={(e) => setPassword(e.target.value)} />
        <Button onClick={handleLogin}>Avançar</Button>
        <Link href="#">Esqueci minha senha</Link>
        <Link href="#">Não tem uma conta? Cadastre-se</Link>
      </Card>
    </Container>
  );
}
