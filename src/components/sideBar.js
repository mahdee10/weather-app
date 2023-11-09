import logo from "../assets/imgs/logo.png"
import weather from "../assets/imgs/weather.png"
import cities from "../assets/imgs/list.png"
import { useEffect, useState } from "react"
export default function SideBar(props) {
    console.log(window.location.pathname)
    const [pathname, setPath] = useState(window.location.pathname)
    useEffect(() => {
        setPath(window.location.pathname);
    }, []);

    const [isMenuOpen, setIsMenuOpen] = useState(false);


    // Use useEffect to ensure window is only accessed on the client side
    useEffect(() => {
        // Check window width here and update isMenuOpen as needed
        const handleResize = () => {
            setIsMenuOpen(window.innerWidth >= 768); // Adjust the breakpoint as needed
        };

        // Initial check
        handleResize();

        // Listen for window resize events
        window.addEventListener("resize", handleResize);

        // Cleanup event listener on component unmount
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        props.c();
    };

    return (
        // <div className='sm:w-side bg-gb h-full rounded-3xl'>
        <div>
            <button
                type="button"
                className="inline-flex  items-center p-2 w-10 h-10 justify-center text-sm text-my-green rounded-lg md:hidden hover:text-white"
                aria-controls="navbar-default"
                aria-expanded={isMenuOpen ? "true" : "false"}
                onClick={toggleMenu}
            >
                <span className="sr-only">Open main menu</span>
                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                </svg>
            </button>
            <div className={`${isMenuOpen ? "block" : "hidden"}`}>
            <div className={`text-white bg-gb h-full  flex items-center  flex-col w-full rounded-3xl pt-5 ${isMenuOpen ? "block static" : "hidden absolute"}`}>
                <img src={logo} alt="logo" className="w-10 h-fit"></img>
                <div className="flex items-center justify-between flex-col pt-20 nav">
                    <a href="/" className={`flex flex-col items-center mt-5 text-g hover:text-white ${pathname === '/' ? 'active' : ''}`}>

                        <img src={weather} alt="logo" className="w-5 h-fit"></img>
                        <p>Weather</p>
                    </a>
                    <a href="/cities" className={`flex flex-col items-center mt-5 text-g hover:text-white ${pathname === '/cities' ? 'active' : ''}`}>
                        <img src={cities} alt="logo" className="w-5 h-fit"></img>
                        <p>Cities</p>
                    </a>
                </div>
            </div>
            </div>
        </div>
    )

}