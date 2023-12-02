import wind from "../assets/imgs/wind.png"
import uv from "../assets/imgs/uv.png"
import visibility from "../assets/imgs/visibility.png"
import humidity from "../assets/imgs/humidity.png"
export default function AirCon(props) {
    return (
        <div className="flex bg-gb justify-between  flex-wrap">
            <div className="flex items-start w-1/2">
                <img className="mr-2 " src={wind} alt="sd"></img>
                <div>
                    <p className="text-g">Wind</p>
                    <p className="text-white sm:text-2xl">{props.windSpeed} m/s</p>
                </div>
            </div>

            <div className="flex items-start w-1/2">
                <img className="mr-2 " src={humidity} alt="sd"></img>
                <div>
                    <p className="text-g">Humidity</p>
                    <p className="text-white sm:text-2xl">{props.humidity} %</p>
                </div>
            </div>

            <div className="flex items-start w-1/2   sm:pt-3 pt-2">
                <img className="mr-2 " src={visibility} alt="sd"></img>
                <div>
                    <p className="text-g">Visibility</p>
                    <p className="text-white sm:text-2xl">{props.visibility} km</p>
                </div>
            </div>

            <div className="flex items-start w-1/2 sm:pt-3 pt-2">
                <img className="mr-2 " src={uv} alt="sd"></img>
                <div>
                    <p className="text-g">UV Index</p>
                    <p className="text-white sm:text-2xl">{props.uvIndex}</p>
                </div>
            </div>
        </div>
    )
}