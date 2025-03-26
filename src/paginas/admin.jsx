// src/paginas/admin.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function Admin() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Painel Administrativo</h1>
      
      <div style={{ marginBottom: '20px' }}>
        <h2>Gerenciar Posts</h2>
        <p>Você pode visualizar, editar ou excluir os posts existentes.</p>
        {/* Adicione links para páginas de gerenciamento de posts */}
        <ul>
          <li>
            <Link to="/criar">Criar Novo Post</Link>
          </li>
          <li>
            <Link to="/editar/1">Editar Post 1</Link> {/* Exemplo de link para edição */}
          </li>
          <li>
            <Link to="/admin">Ver Todos os Posts</Link> {/* Link para ver todos os posts */}
          </li>
        </ul>
      </div>

      <div style={{ marginBottom: '20px' }}>
        <h2>Opções de Usuário</h2>
        <p>Aqui você pode gerenciar os usuários e as permissões.</p>
        {/* Adicione links ou opções de gerenciamento de usuários */}
        <ul>
          <li>
            <Link to="/admin/usuarios">Gerenciar Usuários</Link>
          </li>
          <li>
            <Link to="/admin/permissoes">Gerenciar Permissões</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Admin;
