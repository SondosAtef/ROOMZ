import {BrowserRouter, Routes , Route} from "react-router-dom"
import Home from './pages/home/Home';
import HotelsList from './pages/hotelsList/HotelsList';
import HotelPage from './pages/hotelPage/HotelPage';

import './App.css';


function App() {
  return (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/hotels" element={<HotelsList/>}/>
      <Route path="/hotels/:id" element={<HotelPage/>}/>
    </Routes>
  </BrowserRouter>    
  );
}

export default App;
