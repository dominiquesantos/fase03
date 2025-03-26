import React from 'react';
import './Card.css'; // Importando os estilos específicos do Card (opcional)

export const Card = ({ title, description, author }) => {
  return (
    <div className="card">
      <h3>{title}</h3>
      <p>{description}</p>
      <p><strong>Autor:</strong> {author}</p>
      <button className="button">Leia Mais</button>
    </div>
  );
};
