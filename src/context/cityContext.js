import {createContext, useContext, useState} from "react"; 

const CityContext = createContext(undefined); 

export const CityProvider = ({ children }) => { 
  const [city, setState] = useState( "Copenhagen"); 

  return ( 
    <CityContext.Provider 
      value={{ 
        city,
        onChangeCity: (newCity) => setState(newCity), 
      }} 
    > 
      {children} 
    </CityContext.Provider> 
  ); 
}; 

export const useCityContext = () => useContext(CityContext);