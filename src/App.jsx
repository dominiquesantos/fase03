// App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './paginas/home';
import PostLeitura from './paginas/postleitura';
import CriarPost from './paginas/criarpost';
import EditarPost from './paginas/editarpost';
import Login from './paginas/login';
import Admin from './paginas/admin';
import ÁreaDoProfessor from "./paginas/areadoprofessor";
import { AuthProvider } from './context/authcontext';
import styled, { createGlobalStyle } from "styled-components";  // Estilo global importado

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #FFFBEF;   // Fundo principal
    margin: 0;
    padding: 0;
    font-family: "Space Grotesk", sans-serif;   // Fonte padrão de texto
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: "Sora", sans-serif;  // Fonte especial para títulos
    color: #173E44;
  }
`;

const AppContainer = styled.div`
  padding: 20px;  // Padding geral para espaçamento interno
`;

function App() {
  return (
    <AuthProvider>
      <Router>
        <GlobalStyle />  {/* Estilo global aplicado */}
        <AppContainer>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/post/:id" element={<PostLeitura />} />
            <Route path="/criar-post" element={<CriarPost />} />
            <Route path="/editar/:id" element={<EditarPost />} />
            <Route path="/login" element={<Login />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/areadoprofessor" element={<ÁreaDoProfessor />} />
          </Routes>
        </AppContainer>
      </Router>
    </AuthProvider>
  );
}

export default App;
