import WeatherImage from "./weatherImage";

export default function WeekForecast(props) {
    const dayOfWeek = new Date(props.time).toLocaleDateString('en-US', { weekday: 'short' });
    const temperatureMax = Math.floor(props.temperatureMax);
    const temperatureMin = Math.floor(props.temperatureMin);
    return (
        <div className="flex justify-between py-3 items-center bg-gb ">
            <h3 className="text-g w-[30%]">{dayOfWeek}</h3>
            <div className="sm:block hidden w-[30%]">
                <WeatherImage imageName={props.weatherCodeMax} size={"s"}></WeatherImage>
            </div>
            <div className="sm:hidden block w-[30%]">
                <WeatherImage imageName={props.weatherCodeMax} size={"xs"}></WeatherImage>
            </div>
            <h3 className="text-g w-[30%]"><span className="text-white">{temperatureMax}</span>/{temperatureMin}</h3>
        </div>
    )
}