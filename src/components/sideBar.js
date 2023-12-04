import logo from "../assets/imgs/logo2.png"
import weather from "../assets/imgs/weather.png"
import cities from "../assets/imgs/list.png"
import { useEffect, useState } from "react"
import { Link, useLocation } from "react-router-dom";
import { useTheme } from "../context/themeContext";

export default function SideBar() {
    const { isDarkMode } = useTheme();
  const location = useLocation();
  const [pathname, setPathname] = useState(location.pathname);

  useEffect(() => {
    setPathname(location.pathname);
  }, [location.pathname]);

    return (
        // <div className='sm:w-side bg-gb h-full rounded-3xl'>
        <div className={`text-white  ${isDarkMode ? 'sm:bg-gb bg-mainDark' : 'sm:bg-lb bg-mainLight'}  sm:h-full  flex   flex-col w-full rounded-3xl pt-5`}>
            <div className="flex justify-center">
            <img src={logo} alt="logo" className="sm:w-fit sm:h-fit w-10"></img>

            </div>
            <div className="flex sm:flex-col flex-row sm:items-center justify-between  sm:pt-20 nav">
                <Link to="/" className={`flex flex-col items-center mt-5 ${isDarkMode ? 'text-g' : 'text-dg'} hover:text-white ${pathname === '/' ? 'active' : ''}`}>

                    <img src={weather} alt="logo" className="w-5 h-fit"></img>
                    <p>Weather</p>
                </Link>
                <Link to="/cities" className={`flex flex-col items-center mt-5 ${isDarkMode ? 'text-g' : 'text-dg'} hover:text-white ${pathname === '/cities' ? 'active' : ''}`}>
                    <img src={cities} alt="logo" className="w-5 h-fit"></img>
                    <p>Cities</p>
                </Link>
                
                <Link to={"/settings"} className={`flex flex-col items-center mt-5 ${isDarkMode ? 'text-g' : 'text-dg'} hover:text-white ${pathname === '/settings' ? 'active' : ''}`}>
                    <img src={cities} alt="logo" className="w-5 h-fit"></img>
                    <p>Settings</p>
                </Link>
            </div>
        </div>
        // </div>
    )

}