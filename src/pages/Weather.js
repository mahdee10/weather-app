
import { useCityContext } from "../context/cityContext";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import gear3 from "../assets/imgs/gear3.png"
import gear2 from "../assets/imgs/gear2.png"
import WeatherImage from "../components/weatherImage";
import TodayForecast from "../components/TodayForecast";
import WeekForecast from "../components/weekForecast";
import AirCon from "../components/airConditions";
import { useTheme } from "../context/themeContext";

export default function Weather() {
    const [weatherData, setWeatherData] = useState({});
    const [todayForecast, setForecastData] = useState({});
    const apiKey = 'Lryk5QBR1xtWHKoymkxnzasaLjJSnNnt';
    const { isDarkMode } = useTheme();
    const { city } = useCityContext();

    //Pd6k0YnQLWeDVgkGKmoG43wyBXDZBtdj
    //Lryk5QBR1xtWHKoymkxnzasaLjJSnNnt
    //L1LSKBYs8Xfy0EUtQfXcEhx3xK8IqpG3

    // Fetch real-time weather data using the city context
    useEffect(() => {
        axios
            .get(`https://api.tomorrow.io/v4/weather/realtime?location=${city}&apikey=${apiKey}`)
            .then((response) => {
                setWeatherData(response.data);
            })
            .catch((error) => {
                console.error('Error fetching weather data:', error);
            });
    }, [city, weatherData]);

    // Fetch forecast data using the city context
    useEffect(() => {
        axios
            .get(`https://api.tomorrow.io/v4/weather/forecast?location=${city}&apikey=${apiKey}`)
            .then((response) => {
                setForecastData(response.data.timelines);
            })
            .catch((error) => {
                console.error('Error fetching forecast data:', error);
            });
    }, [city, todayForecast]);

    // Define rotating animation styles for gears
    const rotatingStyle = {
        animation: 'rotate 2s linear infinite',
    };
    const rotatingStyle2 = {
        animation: 'rotateInverse 2s linear infinite',
    };

    // Render the component based on the availability of weather and forecast data
    return (
        <div className="">
            {/* Display loading animation if weather data is not available */}
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
                <div className="sm:flex sm:h-full sm:justify-between hel sm:pb-0">
                    <div className="sm:w-3/5 sm:flex sm:flex-col justify-between  sm:full">
                        <div className="p-10 sm:flex sm:flex-row flex-col sm:justify-between justify-center sm:items-stretch items-center sm:w-full">
                            <div className="flex flex-col justify-between">
                                <h1 className="text-white text-center sm:text-5xl text-3xl font-extrabold">
                                    {city}
                                </h1>
                                <div className="sm:hidden flex justify-center py-2">
                                    <WeatherImage imageName={weatherData.data.values.weatherCode} size={"l"}></WeatherImage>
                                </div>
                                <h2 className="text-white text-center sm:text-5xl text-2xl font-extrabold">
                                    {weatherData.data.values.temperature}°
                                </h2>
                            </div>
                            <div className="sm:block hidden">
                                <WeatherImage imageName={weatherData.data.values.weatherCode} size={"xl"}></WeatherImage>
                            </div>
                        </div>
                        <section className={`p-5 sm:w-full  ${isDarkMode ? 'bg-gb' : 'bg-lb'} rounded-xl`}>
                            <h1 className={`${isDarkMode ? 'text-g' : 'text-dg'} sm:text-sm pb-3`}>Today's Forecast</h1>
                            <TodayForecast data={todayForecast.hourly} />
                        </section>

                        <section className={`p-5 sm:w-full  ${isDarkMode ? 'bg-gb' : 'bg-lb'} rounded-xl sm:mt-0 mt-5`}>
                            <h1 className={`text-g sm:text-sm pb-3`}>Air conditions</h1>
                            <AirCon 
                            visibility={weatherData.data.values.visibility}
                            humidity={weatherData.data.values.humidity}
                            windSpeed={weatherData.data.values.windSpeed}
                            uvIndex={weatherData.data.values.uvIndex}
                            ></AirCon>
                        </section>
                    </div>

                    <div className={`sm:w-today p-5  ${isDarkMode ? 'bg-gb' : 'bg-lb'} rounded-xl sm:hel sm:mt-0 mt-5 `}>
                        <h1 className={`${isDarkMode ? 'text-g' : 'text-dg'} sm:text-sm pb-3`}>7-Day Forecast</h1>
                        <div className="flex flex-col justify-between">
                            {todayForecast.daily && todayForecast.daily.length > 0 ? (
                                todayForecast.daily.map((day) => (
                                    <WeekForecast key={day.time} time={day.time} weatherCodeMax={day.values.weatherCodeMax} temperatureMax={day.values.temperatureMax} temperatureMin={day.values.temperatureMin} />
                                ))
                            ) : (
                                <div>wait</div>
                            )}
                        </div>
                    </div>
                    <div className="p-5 h-4 sm:hidden block"></div>

                </div>
            )}
        </div>
    )
}
//
//In this updated code, I have added comments to explain the purpose of each part of the code. The comments are concise and clear, and they should help you understand the code better.