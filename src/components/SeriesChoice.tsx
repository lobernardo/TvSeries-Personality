import React from 'react';
import { Series } from '../types';
import styled from 'styled-components';

interface SeriesChoiceProps {
  series: Series;
  onChoose: (series: Series) => void;
}

const SeriesCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;
  cursor: pointer;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 8px;
  &:hover {
    background-color: #f0f0f0;
  }
`;

const SeriesImage = styled.img`
  width: 200px;
  height: 300px;
  object-fit: cover;
  border-radius: 8px;
`;

const SeriesName = styled.h2`
  font-size: 1.5rem;
  color: #333;
`;

const SeriesChoice: React.FC<SeriesChoiceProps> = ({ series, onChoose }) => {
  return (
    <SeriesCard onClick={() => onChoose(series)}>
      <SeriesImage src={series.image} alt={series.name} />
      <SeriesName>{series.name}</SeriesName>
    </SeriesCard>
  );
};

export default SeriesChoice;