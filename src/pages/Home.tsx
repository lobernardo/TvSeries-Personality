import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-image: url("https://isquad.tv/wp-content/uploads/2018/08/Netflix-Background.jpg");
  color: Gold;
  font-size: 20px;
  font-family: impact, fantasy;
  
`;

const StartButton = styled.button`
  padding: 10px 35px;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 20px;
  background-color: gold;
`;


const Home: React.FC = () => {
  const navigate = useNavigate();

  const startChoosing = () => {
    navigate('/choose');
  };

  return (
    <HomeContainer>
      <h1>Sejam bem vindo(as), SérieManíac's!</h1>
      <h2>Vamos mostrar ao mundo o seu lado secreto através de suas séries favoritas?</h2>
      <StartButton onClick={startChoosing}>Iniciar</StartButton>
    </HomeContainer>
  );
};

export default Home;