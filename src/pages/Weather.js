import { useCityContext } from "../context/cityContext";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import gear3 from "../assets/imgs/gear3.png"
import gear2 from "../assets/imgs/gear2.png"
import gear1 from "../assets/imgs/gear1.png"
export default function Weather() {
    const [weatherData, setWeatherData] = useState({});
    const apiKey = 'Pd6k0YnQLWeDVgkGKmoG43wyBXDZBtdj';

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
    }, [city, weatherData]);
    const rotatingStyle = {
        animation: 'rotate 2s linear infinite',
      };
      const rotatingStyle2 = {
        animation: 'rotateInverse 2s linear infinite',
      };
    return (
        <div className="">
            {Object.keys(weatherData).length === 0 ? (
                <div className="absolute top-2/4 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
                    <div className="flex">
                        <img style={rotatingStyle2} src={gear3} alt="gear3"></img>
                        <div className="pt-5">
                            <img style={rotatingStyle}  className="rotateInverse" src={gear2} alt="gear1"></img>
                        </div>

                    </div>
                    <div className="flex justify-center ">
                        <img style={rotatingStyle} className="rotate" src={gear2} alt="gear1"></img>
                    </div>
                    <p className="text-center text-yell">
                        Loading...
                    </p>
                </div>
            ) : (
                <div className="text-white">
                    <h2>Weather for Location: {city}</h2>
                    <h2>{weatherData.data.values.temperature}</h2>
                </div>
            )}
        </div>
    )
}