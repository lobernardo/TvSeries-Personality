// src/pages/ChoicePage.tsx

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSeries } from '../context/SeriesContext';
import SeriesChoice from '../components/SeriesChoice';
import { Series } from '../types';
import styled from 'styled-components';

const ChoiceContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: black;
  color: gold;
  font-family: impact, fantasy;
`;

const ChoicePage: React.FC = () => {
  const { addChoice, choices } = useSeries();
  const navigate = useNavigate();
  const [seriesList, setSeriesList] = useState<Series[]>([]);
  const [currentPair, setCurrentPair] = useState<Series[]>([]);

  useEffect(() => {
    fetch('https://api.tvmaze.com/shows')
      .then(response => response.json())
      .then(data => {
        const fetchedSeries: Series[] = data.slice(0, 20).map((item: any) => ({
          id: item.id,
          name: item.name,
          image: item.image ? item.image.medium : ''
        }));
        setSeriesList(fetchedSeries);
        setCurrentPair([fetchedSeries[0], fetchedSeries[1]]);
      });
  }, []);

  useEffect(() => {
    if (choices.length === 10) {
      navigate('/result');
    } else if (seriesList.length > 0) {
      const shuffled = [...seriesList].sort(() => 0.5 - Math.random());
      setCurrentPair([shuffled[0], shuffled[1]]);
    }
  }, [choices, seriesList]);

  const handleChoice = (series: Series) => {
    addChoice(series);
  };

  return (
    <ChoiceContainer>
      <h1>Qual você prefere?</h1>
      {currentPair.length === 2 && currentPair.map((series) => (
        <SeriesChoice key={series.id} series={series} onChoose={handleChoice} />
      ))}
    </ChoiceContainer>
  );
};

export default ChoicePage;