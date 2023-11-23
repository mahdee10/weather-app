import { useCityContext } from "../context/cityContext";
import React, { useState } from 'react';
import { useEffect } from 'react';

import axios from 'axios';
import gear3 from "../assets/imgs/gear3.png"
import gear2 from "../assets/imgs/gear2.png"
import WeatherImage from "../components/weatherImage";
import TodayForecast from "../components/TodayForecast";
export default function Weather() {
    // const todayForecast = [
    //     {
    //         0:{time: "2023-11-23T11:00:00Z",
    //         values:{weatherCode: "11000",
    //         temp: "25"}
    //         }
    //     },
    //     {
    //         0:{time: "2023-11-23T11:00:00Z",
    //         values:{weatherCode: "10000",
    //         temp: "25"}
    //         }
    //     },
    //     {
    //         2:{time: "2023-11-23T11:00:00Z",
    //         values:{weatherCode: "10000",
    //         temp: "25"}
    //         }
    //     },
    //     {
    //         3:{time: "2023-11-23T11:00:00Z",
    //         values:{weatherCode: "10000",
    //         temp: "25"}
    //         }
    //     },
    //     {
    //         4:{time: "2023-11-23T11:00:00Z",
    //         values:{weatherCode: "10000",
    //         temp: "25"}
    //         }
    //     },
    //     {
    //         5:{time: "2023-11-23T11:00:00Z",
    //         values:{weatherCode: "10000",
    //         temp: "25"}
    //         }
    //     },
    //     {
    //         6:{time: "2023-11-23T11:00:00Z",
    //         values:{weatherCode: "10000",
    //         temp: "25"}
    //         }
    //     },
    //     {
    //         7:{time: "2023-11-23T11:00:00Z",
    //         values:{weatherCode: "10000",
    //         temp: "25"}
    //         }
    //     },
    //     {
    //         8:{time: "2023-11-23T11:00:00Z",
    //         values:{weatherCode: "10000",
    //         temp: "25"}
    //         }
    //     },
    //     {
    //         9:{time: "2023-11-23T11:00:00Z",
    //         values:{weatherCode: "10000",
    //         temp: "25"}
    //         }
    //     },
    //     {
    //         10:{time: "2023-11-23T11:00:00Z",
    //         values:{weatherCode: "10000",
    //         temp: "25"}
    //         }
    //     },
    //     {
    //         11:{time: "2023-11-23T11:00:00Z",
    //         values:{weatherCode: "10000",
    //         temp: "25"}
    //         }
    //     }

    // ]
    const [weatherData, setWeatherData] = useState({});
    const [todayForecast, setForecastData] = useState({});
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
    }, [city, weatherData]);

    useEffect(() => {
        axios
            .get(`https://api.tomorrow.io/v4/weather/forecast?location=${city}&apikey=${apiKey}`)
            .then((response) => {
                setForecastData(response.data);
                console.log(response.data.timelines.hourly,"hello")
                console.log(todayForecast,"klb")
            })
            .catch((error) => {
                console.error('Error fetching forecast data:', error);
            });
    }, [city, todayForecast]);

    const rotatingStyle = {
        animation: 'rotate 2s linear infinite',
    };
    const rotatingStyle2 = {
        animation: 'rotateInverse 2s linear infinite',
    };
    return (
        <div className="">
            {Object.keys(weatherData).length === 0 || todayForecast.length === 0 ? (

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
                            {city}
                        </h1>
                        <div className="sm:hidden flex justify-center py-2">
                            <WeatherImage imageName={weatherData.data.values.weatherCode} isLarge={false}></WeatherImage>
                        </div>
                        <h2 className="text-white text-center sm:text-5xl text-2xl font-extrabold">
                            {weatherData.data.values.temperature}°
                        </h2>
                    </div>
                    <div className="sm:block hidden">
                        <WeatherImage imageName={"10010"} isLarge={true}></WeatherImage>
                    </div>
                    <section className="p-5 sm:w-full bg-gb rounded-xl">
                        <TodayForecast data={todayForecast.timelines.hourly} />
                    </section>
                </div>
            )}
            {/* <div className="sm:flex sm:h-full hel">
                <div className="sm:w-3/5 sm:flex sm:flex-col justify-between sm:full">
                    <div className="p-10 sm:flex sm:flex-row flex-col sm:justify-between justify-center sm:items-stretch items-center sm:w-full">
                        <div className="flex flex-col justify-between">
                            <h1 className="text-white text-center text-3xl font-extrabold">
                                MADRID
                            </h1>
                            <div className="sm:hidden flex justify-center py-2">
                                <WeatherImage imageName={"10010"} size={"l"}></WeatherImage>
                            </div>
                            <h2 className="text-white text-center text-5xl font-extrabold">
                                31°
                            </h2>
                        </div>
                        <div className="sm:block hidden">
                            <WeatherImage imageName={"10010"} size={"xl"}></WeatherImage>
                        </div>
                    </div>

                    <section className="p-5 sm:w-full bg-gb rounded-xl">
                        <TodayForecast data={todayForecast} />
                    </section>
                </div>
            </div> */}

        </div>

    )
}