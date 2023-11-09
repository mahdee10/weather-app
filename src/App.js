
import './App.css';
import Weather from './pages/Weather';
import SideBar from './components/sideBar';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cities from './pages/Cities';
import { useState } from 'react';
function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  function c(){
    setIsMenuOpen(!isMenuOpen);
  }
  return (
    <div className="flex sm:justify-between p-5 bg-main h-screen ">
      <div className={`sm:w-side sm:bg-gb sm:h-full  rounded-3xl ${isMenuOpen ? "bg-gb h-full w-full " : ""}`}>
        <SideBar c={c}></SideBar>
      </div>
      <div className={`sm:w-cont ${isMenuOpen ? "" : "sidebar-closed"}`}>
        <BrowserRouter>
          <Routes>
            <Route path="/" >
              <Route index element={<Weather />} />
              <Route path="cities" element={<Cities />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);
export default App;
