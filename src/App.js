import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import './App.css';
import Offer from './Shopping/offer';
import Navbar from './Shopping/Navbar/Navbar';
import Slider from './Shopping/Home/Slider';
import Brand from './Shopping/Product/Brand';
import Best from './Shopping/Product-1/Best';
import Text from './Shopping/Description/Text';
import Footer from './Shopping/Footer-sec/Footer';
import Login from './Shopping/Login/Login';
import Choose from './Shopping/Choose-section/Choose';
import Yarns from './Shopping/Collection/Yarns/Yarns';
import Apparel from './Shopping/Collection/Apparel/Apparel';
import Fabric from './Shopping/Collection/Fabric/Fabric';
import Furnishing from './Shopping/Collection/Furnishing/Furnishing';
import Accessory from './Shopping/Collection/Accessory/Accessory';
import ReshaMandi from './Shopping/Collection/ReshaMandi/ReshaMandi';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={
          <div>
            <Offer />
            <Navbar />
            <Slider />
            <Choose />
            <Brand />
            <Best />
            <Text />
            <Footer />
          </div>
        } />

        <Route path='/login' element={<Login />} />
        <Route path='*' element={<div style={{textAlign:"center",fontSize:"1.2rem",margin:"2rem 0"}}> <h3> Sorry, this page isn't available.</h3>  <p>The link you followed may be broken, or the page may have been removed.<Link to={"/"}>Go to homepage</Link> </p>  </div>} />
        <Route path='/collection/yarns' element={<div><Offer />
          <Navbar /> <Yarns />
        </div>} />
        <Route path='/collection/apparel' element={<div><Offer />
          <Navbar /> <Apparel />
        </div>} />
        <Route path='/collection/fabric' element={<div><Offer />
          <Navbar /> <Fabric />
        </div>} />
        <Route path='/collection/home-furnishing' element={<div><Offer />
          <Navbar /> <Furnishing />
        </div>} />
         <Route path='/collection/accessory' element={<div><Offer />
          <Navbar /> <Accessory />
        </div>} />
        <Route path='/collection/reshaMandi-exclusive' element={<div><Offer />
          <Navbar /> <ReshaMandi />
        </div>} />

      </Routes>
      
    </Router>
  )
};

export default App;
