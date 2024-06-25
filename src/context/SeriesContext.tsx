//armazenaremos as escolhas do usuário entre as series

import React, { createContext, useState, useContext, ReactNode } from 'react';
import { Series } from '../types';


interface SeriesContextType {
    choices: Series[];
    addChoice: (series: Series) => void;
    resetChoices: () => void;
  }
  
  const SeriesContext = createContext < SeriesContextType | undefined>(undefined);
  
  export const SeriesProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [choices, setChoices] = useState<Series[]>([]);
  
    const addChoice = (series: Series) => {
      setChoices((prevChoices) => [...prevChoices, series]);
    };
  
    const resetChoices = () => {
      setChoices([]);
    };
  
    return (
      <SeriesContext.Provider value={{ choices, addChoice, resetChoices }}>
        {children}
      </SeriesContext.Provider>
    );
  };
  
  export const useSeries = () => {
    const context = useContext(SeriesContext);
    if (!context) {
      throw new Error('Solicitação errada');
    }
    return context;
  };