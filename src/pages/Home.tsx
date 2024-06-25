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
`;

const Title = styled.h1`
  color: gold;
  font-size: 26px;
  font-family: impact, fantasy;
  background-color: black;
  padding:10px;
  border-radius: 10px;
`;

const Subtitle = styled.h2`
  color: gold;
  font-size: 14px;
  font-family: impact, fantasy;
  background-color: black;
  padding:10px;
  border-radius: 10px;
`;

const StartButton = styled.button`
  padding: 10px 35px;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 20px;
  background-color: gold;
  &:hover {
    background-color: black;
    color:gold;
  }
`;


const Home: React.FC = () => {
  const navigate = useNavigate();

  const startChoosing = () => {
    navigate('/choose');
  };

  return (
    <HomeContainer>
      <Title><h1>Sejam bem vindo(as), SérieManíac's!</h1></Title>
      <Subtitle><h2>Mostre quem você é realmente!</h2></Subtitle>
      <StartButton onClick={startChoosing}>Iniciar</StartButton>
    </HomeContainer>
  );
};

export default Home;