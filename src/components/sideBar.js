import logo from "../assets/imgs/logo2.png";
import weather from "../assets/imgs/weather.png";
import cities from "../assets/imgs/list.png";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTheme } from "../context/themeContext";

export default function SideBar() {
  const location = useLocation();
  const [pathname, setPathname] = useState(location.pathname);
  const { isDarkMode } = useTheme()
  useEffect(() => {
    setPathname(location.pathname);
  }, [location.pathname]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {

    const handleResize = () => {
      setIsMenuOpen(window.innerWidth >= 768);
    };

    handleResize();


    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={`text-white  ${isDarkMode ? 'sm:bg-gb bg-mainDark' : 'sm:bg-lb bg-mainLight'} bg-mainDark sm:h-full flex flex-col w-full rounded-3xl pt-5`}>
      <div className="flex justify-around">
        <img src={logo} alt="logo" className="sm:w-fit sm:h-fit w-10" />
        <button
        type="button"
        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100"
        aria-controls="navbar-default"
        aria-expanded={isMenuOpen ? "true" : "false"}
        onClick={toggleMenu}
      >
        <span className="sr-only">Open main menu</span>
        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
        </svg>
      </button>
      </div>
      
      <div className={`${isMenuOpen ? "block" : "hidden"}  `}>
        <div className={`sm:static absolute flex flex-col w-full sm:bg-transparent ${isDarkMode ? 'bg-mainDark' : 'bg-mainLight'} sm:items-center sm:justify-between justify-center sm:pt-20 pb-5 nav`}>
        <Link
        onClick={toggleMenu}
          to="/"
          className={` flex flex-col items-center mt-5 ${isDarkMode ? 'text-g' : 'text-dg'} hover:text-white ${pathname === '/' ? 'active' : ''}`}
        >
          <img src={weather} alt="logo" className="w-5 h-fit" />
          <p>Weather</p>
          
        </Link>
        <Link
        onClick={toggleMenu}

          to="/cities"
          className={`flex flex-col items-center mt-5 ${isDarkMode ? 'text-g' : 'text-dg'} hover:text-white ${pathname === '/cities' ? 'active' : ''}`}
        >
          <img src={cities} alt="logo" className="w-5 h-fit" />
          <p>Cities</p>
        </Link>
        <Link
        onClick={toggleMenu}

          to="/settings"
          className={`flex flex-col items-center mt-5 ${isDarkMode ? 'text-g' : 'text-dg'} hover:text-white ${pathname === '/settings' ? 'active' : ''}`}
        >
          <img src={cities} alt="logo" className="w-5 h-fit" />
          <p>Settings</p>
        </Link>
        </div>
      </div>
    </div>
  );
}
