import { useTemp } from "../context/tempContext"
import { useTheme } from "../context/themeContext"

export default function Settings(){
    const {isDarkMode,toggleTheme}=useTheme()
    const{celsius,toggleTemp}=useTemp()
    return(
        <div className={`text-white  z-50 p-5`}>
            <p className="text-2xl sm:mt-0 mt-10">Settings</p>
            <div className={`p-5 rounded-xl mt-5 sm:w-[66%] ${isDarkMode ? 'bg-gb' : 'bg-lb'}`}>
                <h3 className={`${isDarkMode ? 'text-g' : 'text-dg'} mb-2`}>Theme</h3>
                <div className={`flex p-2 rounded-xl ${isDarkMode ? 'bg-mainDark' : 'bg-mainLight'}`}>
                    <div onClick={toggleTheme} className={`cursor-pointer ${isDarkMode ? 'text-g bg-gb' : 'text-dg'} rounded-xl w-1/2 text-center py-1`}>Dark</div>
                    <div onClick={toggleTheme} className={`cursor-pointer ${isDarkMode ? 'text-g' : 'text-dg bg-lb'} rounded-xl w-1/2 text-center py-1`}>Light</div>
                </div>

                <h3 className={`${isDarkMode ? 'text-g' : 'text-dg'} mt-2 mb-2`}>Temperature</h3>
                <div className={`flex p-2 rounded-xl ${isDarkMode ? 'bg-mainDark' : 'bg-mainLight'}`}>
                    <div onClick={toggleTemp} className={`cursor-pointer ${isDarkMode ? 'text-g ' : 'text-dg'} ${celsius ? (isDarkMode ? "bg-gb":"bg-lb"):""}  rounded-xl w-1/2 text-center py-1`}>Celsius</div>
                    <div onClick={toggleTemp} className={`cursor-pointer ${isDarkMode ? 'text-g' : 'text-dg'} ${!celsius ? (isDarkMode ? "bg-gb":"bg-lb"):""} rounded-xl w-1/2 text-center py-1`}>Fahrenheit</div>
                </div>
            </div>
        </div>
    )
}