import WeatherImage from "./weatherImage";

export default function WeekForecast(props) {
    return (
        <div className="flex justify-between py-3 items-center bg-gb ">
            <h3 className="text-g min-w-[40px]">{props.day}</h3>
            <div className="sm:block hidden">
                <WeatherImage imageName={props.weatherCodeMax} size={"s"}></WeatherImage>
            </div>
            <div className="sm:hidden block">
                <WeatherImage imageName={props.weatherCodeMax} size={"xs"}></WeatherImage>
            </div>
            <h3 className="text-g"><span className="text-white">{props.temperatureMax}</span>/{props.temperatureMin}</h3>
        </div>
    )
}