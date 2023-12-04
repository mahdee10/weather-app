import { useTemp } from "../context/tempContext";
import { useTheme } from "../context/themeContext";
import WeatherImage from "./weatherImage";

export default function WeekForecast(props) {
    const {celsius}=useTemp();
    const { isDarkMode } = useTheme();
    const dayOfWeek = new Date(props.time).toLocaleDateString('en-US', { weekday: 'short' });
    const temperatureMax = Math.floor(props.temperatureMax);
    const temperatureMin = Math.floor(props.temperatureMin);
    const displayTemperatureMax = celsius ? temperatureMax : Math.floor((temperatureMax * 9/5) + 32);
    const displayTemperatureMin = celsius ? temperatureMin : Math.floor((temperatureMin * 9/5) + 32);

    return (
        <div className={`flex justify-between py-3 items-center  ${isDarkMode ? 'bg-gb' : 'bg-lb'} `}>
            <h3 className={`${isDarkMode ? 'text-g' : 'text-dg'} w-[33.3%]`}>{dayOfWeek}</h3>
            <div className="sm:flex hidden w-[33.3%] justify-center">
                <WeatherImage imageName={props.weatherCodeMax} size={"s"}></WeatherImage>
            </div>
            <div className="sm:hidden  w-[33.3%] flex justify-center">
                <WeatherImage imageName={props.weatherCodeMax} size={"xs"}></WeatherImage>
            </div>
            <h3 className={`${isDarkMode ? 'text-g' : 'text-dg'} w-[33.3%] text-end`}><span className="text-white">{displayTemperatureMax}</span>/{displayTemperatureMin}</h3>
        </div>
    )
}