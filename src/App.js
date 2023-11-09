
import './App.css';
import Weather from './pages/Weather';
import SideBar from './components/sideBar';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cities from './pages/Cities';
function App() {
  
  return (
    <div className="flex sm:flex-row flex-col sm:justify-between p-5 bg-main h-screen ">
      <div className='sm:w-side sm:bg-gb sm:h-full w-full rounded-3xl'>
        <SideBar></SideBar>
      </div>
      <div className='sm:w-cont '>
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
