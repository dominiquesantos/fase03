// src/services/postService.js

// Simulação de chamada para um backend ou API
export const getPostById = async (id) => {
    // Aqui você pode usar fetch, axios ou qualquer outra maneira para pegar os dados
    return {
      titulo: 'Título do Post',
      descricao: 'Descrição do Post...',
      autor: 'Nome do Autor'
    };
  };
  
  export const updatePost = async (id, postData) => {
    // Lógica para atualizar o post no servidor
    console.log('Post atualizado:', id, postData);
  };
  
  export const deletePost = async (id) => {
    // Lógica para excluir o post do servidor
    console.log('Post excluído:', id);
  };
  