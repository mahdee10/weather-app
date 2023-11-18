import { useCityContext } from "../context/cityContext";
import React, { useState } from 'react';
import React, { useEffect } from 'react';

import axios from 'axios';
import gear3 from "../assets/imgs/gear3.png"
import gear2 from "../assets/imgs/gear2.png"
import WeatherImage from "../components/weatherImage";
export default function Weather() {
    const todayForecast = [
        {
            time: "6:00 AM",
            weatherCode: "10000",
            temp: "25"
        },
        {
            time: "9:00 AM",
            weatherCode: "10000",
            temp: "28"
        },
        {
            time: "12:00 PM",
            weatherCode: "10000",
            temp: "30"
        },
        {
            time: "3:00 PM",
            weatherCode: "10000",
            temp: "33"
        },
        {
            time: "6:00 PM",
            weatherCode: "10000",
            temp: "34"
        },
        {
            time: "9:00 PM",
            weatherCode: "10000",
            temp: "30"
        },
        {
            time: "12:00 AM",
            weatherCode: "10000",
            temp: "34"
        },
        {
            time: "3:00 AM",
            weatherCode: "10000",
            temp: "34"
        },
        {
            time: "6:00 AM",
            weatherCode: "10000",
            temp: "34"
        },
        {
            time: "9:00 AM",
            weatherCode: "10000",
            temp: "34"
        },
    ]
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
                            <img style={rotatingStyle} className="rotateInverse" src={gear2} alt="gear1"></img>
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
                <div className="p-10 flex sm:flex-row flex-col sm:justify-between justify-center sm:items-stretch items-center sm:w-3/5">
                    <div className="flex flex-col justify-between">
                        <h1 className="text-white text-center text-3xl font-extrabold">
                            MADRID
                        </h1>
                        <div className="sm:hidden flex justify-center py-2">
                            <WeatherImage imageName={weatherData.data.values.weatherCode} isLarge={false}></WeatherImage>
                        </div>
                        <h2 className="text-white text-center text-5xl font-extrabold">
                        {weatherData.data.values.temperature}°
                        </h2>
                    </div>
                    <div className="sm:block hidden">
                        <WeatherImage imageName={"10010"} isLarge={true}></WeatherImage>
                    </div>
                </div>
            )}
            {/* <div className="p-10 flex sm:flex-row flex-col sm:justify-between justify-center sm:items-stretch items-center sm:w-3/5">
                <div className="flex flex-col justify-between">
                    <h1 className="text-white text-center text-3xl font-extrabold">
                        MADRID
                    </h1>
                    <div className="sm:hidden flex justify-center py-2">
                        <WeatherImage imageName={"10010"} isLarge={false}></WeatherImage>
                    </div>
                    <h2 className="text-white text-center text-5xl font-extrabold">
                        31°
                    </h2>
                </div>
                <div className="sm:block hidden">
                    <WeatherImage imageName={"10010"} isLarge={true}></WeatherImage>
                </div>
            </div> */}
        </div>

    )
}