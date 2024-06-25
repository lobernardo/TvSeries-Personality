import React from 'react';
import { Link } from 'react-router-dom';

interface BackButtonProps {
  to: string; // Rota para onde o botão deve redirecionar
}

const BackButton: React.FC<BackButtonProps> = ({ to }) => {
  return (
    <Link to={to} style={{ textDecoration: 'none' }}>
      <button
        style={{
          padding: '10px 20px',
          margin: '20px',
          backgroundColor: 'gold',
          color: 'black',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
          fontSize: '16px',
          fontWeight: 'bold',
          outline: 'none',
          boxShadow: '0 2px 4px rgba(0, 123, 255, 0.2)',
          transition: 'background-color 0.8s',
        }}
      >
        Voltar
      </button>
    </Link>
  );
};

export default BackButton;