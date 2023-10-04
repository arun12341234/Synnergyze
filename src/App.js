import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css';
import Offer from './Shopping/offer';
import Navbar from './Shopping/Navbar/Navbar';
import Slider from './Shopping/Home/Slider';
import Brand from './Shopping/Product/Brand';
import Best from './Shopping/Product-1/Best';
import Text from './Shopping/Description/Text';

import Footer from './Shopping/Footer-sec/Footer';
import Registaion from './Shopping/Registaion/Registaion';
import Search from './Shopping/Search/Search';
import Login from './Shopping/Login/Login';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={
          <div>
            <Offer />
            <Navbar />
            <Slider />
            <Brand />
            <Best />
            <Text />
            <Footer />
          </div>
        } />
        <Route path='/search' element={<Search />} />
        <Route path='/registration' element={<Registaion />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </Router>
  )
};

export default App;
