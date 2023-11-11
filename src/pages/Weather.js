import { useCityContext } from "../context/cityContext";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
export default function Weather() {
    const [weatherData, setWeatherData] = useState({});
    const apiKey = 'Lryk5QBR1xtWHKoymkxnzasaLjJSnNnt';
                    
    const { city } = useCityContext();
    useEffect(() => {
        axios
            .get(`https://api.tomorrow.io/v4/weather/realtime?location=${city}&apikey=${apiKey}`)
            .then((response) => {
                setWeatherData(response.data);
                console.log(weatherData)
            })
            .catch((error) => {
                console.error('Error fetching weather data:', error);
            });
    }, [city,weatherData]);
    return (
        <div className="text-white bg-gb">
            <h2>Weather for Location: {city}</h2>
            {/* <h2>{weatherData.data.values.temperature}</h2> */}
        </div>
    )
}