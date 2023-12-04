// ThemeContext.js
import React, { createContext, useState, useContext, useEffect } from 'react';

const TempContext = createContext();

export const TempProvider = ({ children }) => {
  const [celsius, setTemp] = useState(true);
  const toggleTemp = () => {
    // console.log(celcius)
    setTemp((prevMode) => !prevMode);
  };
  return (
    <TempContext.Provider value={{ celsius, toggleTemp }}>
      {children}
    </TempContext.Provider>
  );
};

export const useTemp = () => {
  return useContext(TempContext);
};
