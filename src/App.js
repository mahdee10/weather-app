
import './App.css';
import Weather from './pages/Weather';
import SideBar from './components/sideBar';
// import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cities from './pages/Cities';
import { CityProvider } from './context/cityContext';
import Settings from './pages/Settings';
import { useTheme,ThemeProvider } from './context/themeContext';
import { TempProvider } from './context/tempContext';
function App() {

  return (
    <CityProvider>
      <ThemeProvider>
        <TempProvider>
        <AppContent  />
        </TempProvider>
      </ThemeProvider>
    </CityProvider>
  );
}


function AppContent() {
  const { isDarkMode } = useTheme();

  return (
    <BrowserRouter>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Rubik:400,500,700&display=swap" />
      <div className={`flex sm:flex-row flex-col sm:justify-between p-5 ${isDarkMode ? 'bg-mainDark' : 'bg-mainLight'}  sm:h-screen `}>
        <div className='sm:w-side sm:bg-gb sm:h-full w-full rounded-3xl'>
          <SideBar />
        </div>
        <div className='sm:w-cont sm:h-full'>
          <Routes>
            <Route path='/' element={<Weather />} />
            <Route path="cities" element={<Cities />} />
            <Route path="settings" element={<Settings />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

