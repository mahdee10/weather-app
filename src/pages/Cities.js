import { useState } from "react";
import { useTheme } from "../context/themeContext";
import { useCityContext } from "../context/cityContext";
import { Link } from "react-router-dom";

export default function Cities() {
  const [search, setSearch] = useState("");
  const { isDarkMode } = useTheme();
  const {onChangeCity}=useCityContext();
  const [cities, setCities] = useState([
    "Copenhagen",
    "Madrid",
    "Beirut",
    "Zahle",
    
  ]);

  function handleClick(city){
    onChangeCity(city)
  }
  const filteredCities = cities.filter((city) =>
    city.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className={`text-white z-50 p-3 hel`}>
      <div className={`mt-5 sm:mt-0 mt-10 sm:w-[66%]`}>
        <input
          placeholder="Search City"
          className={`w-full p-2 rounded-lg  ${
            isDarkMode ? "bg-gb" : "bg-lb"
          }`}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <div className="mt-4 flex flex-col ">
          {filteredCities.map((city) => (
            <Link to="/" onClick={()=>{handleClick(city)}} key={city} className={`mb-2 rounded-xl p-5 ${isDarkMode ? 'bg-gb' : 'bg-lb'}`}>
              {city}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
