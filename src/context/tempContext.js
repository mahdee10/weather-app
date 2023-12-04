// ThemeContext.js
import React, { createContext, useState, useContext, useEffect } from 'react';

const TempContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [celcius, setTemp] = useState(true);
  const toggleUnit = () => {
    setTemp((prevMode) => !prevMode);
  };
  return (
    <TempContext.Provider value={{ celcius, toggleUnit }}>
      {children}
    </TempContext.Provider>
  );
};

export const useTemp = () => {
  return useContext(TempContext);
};
