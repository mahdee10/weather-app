// ThemeContext.js
import React, { createContext, useState, useContext, useEffect } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setDarkMode] = useState(true);

  useEffect(() => {
    // Update the style of <html> tag based on the dark mode state
    document.documentElement.style.backgroundColor = isDarkMode ? 'rgb(11 19 30)' : '#4b76ac';
  }, [isDarkMode]);
  const toggleTheme = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  return useContext(ThemeContext);
};
