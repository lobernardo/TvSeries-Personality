
import React from 'react';
import { useSeries } from '../context/SeriesContext';
import { Series, SeriesData } from '../types';
import styled from 'styled-components';
import BackButton from './BackButton';

const ResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f0f0f0;
  padding: 20px;
  background-color: black;
  color: gray;
  
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 20px;
  color: gold;
  font-family: impact, fantasy;
`;

const SubTitle = styled.h1`
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 20px;
  color: gold;
  font-family: impact, fantasy;
  margin: 15px;
`;

const SeriesList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  
`;

const SeriesCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;
  padding: 10px;
  border-radius: 8px;
  background-color: gray;
`;

const SeriesImage = styled.img`
  width: 100px;
  height: 150px;
  object-fit: cover;
  border-radius: 8px;
`;

const SeriesName = styled.h2`
  font-size: 1.2rem;
  color: black;
  margin-top: 10px;
`;




const Result: React.FC = () => {
  const { choices } = useSeries();

  const getPersonalityDiagnosis = (choices: Series[]) => {
    // Lógica simples para diagnóstico lúdico baseado nas escolhas
    const favoriteGenre = choices.reduce((acc, series) => {
      const genre = series.name.includes('Drama') ? 'Drama' : 'Comédia';
      acc[genre] = (acc[genre] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);

    return favoriteGenre['Drama'] > favoriteGenre['Comédia']
      ? 'Hmmm... Intensa(o), emocional e possivelmente perigosa(o)!'
      : 'Totaaaalmente Good Vibes. É possível que faça uso de coisas ilícitas!';
  };

  const diagnosis = getPersonalityDiagnosis(choices);

  return (
    <ResultContainer>
      <Title>Seu Diagnóstico de Personalidade</Title>
      <p>{diagnosis}</p>
      <SubTitle>Suas escolhas:</SubTitle>
      <SeriesList>
        {choices.map((series) => (
          <SeriesCard key={series.id}>
            <SeriesImage src={series.image} alt={series.name} />
            <SeriesName>{series.name}</SeriesName>
          </SeriesCard>
        ))}
      </SeriesList>
      <BackButton to="/"/>
    </ResultContainer>
  );
};

export default Result;