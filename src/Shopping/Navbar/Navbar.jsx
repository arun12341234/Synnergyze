import React, { useState } from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import './nav.css'
import { Link } from 'react-router-dom';
const Navbar = () => {
  const [click, setClick] = useState(false);
  const toggle = () => {
    setClick(!click)
  }

  const [show, setShow] = useState(false);
  const showT = () => {
    setShow(!show)
  }
  const [but, setbut] = useState(false);
  const button = () => {
    setbut(!but)
  }
  return (
    <div>
      <nav id='narv'>
        <div className='Logo'>
          <i class="ri-menu-line" onClick={toggle}></i>
          <h1>industy<span >buying</span></h1>
        </div>
        <ul className={`click-for  ${click && 'active'}`}>
          <li>Agriculture Garden & Landscaping<i class="ri-add-line"></i></li>
          <li>Power Tools <i class="ri-add-line"></i></li>
          <li>Material Handling and Packaging<i class="ri-add-line"></i></li>
          <li>Office Supplies <i class="ri-add-line"></i></li>
          <li>Testing and Measuring Instruments <i class="ri-add-line"></i></li>
          <li>Furniture, Hospitality and Food Service <i class="ri-add-line"></i></li>
          <li>Cleaning <i class="ri-add-line"></i></li>
          <li>Electrical <i class="ri-add-line"></i></li>
          <li>Hydraulics and Pneumatics<i class="ri-add-line"></i></li>
          <li>IT & Electrical<i class="ri-add-line"></i></li>
        </ul>
        <div className='select-i'>
          <select name="" id="section">
            <option value="">All Categories</option>
            <option value="">Abrasives</option>
            <option value="">LED & LIGHT</option>
            <option value="">Lab Supply</option>
          </select>

          {window.innerWidth = "790" ?
            <Link to="/"> <input type="Search" placeholder='Search Product' className='serach-' /></Link>
            : <input type="Search" placeholder='Search Product' className='serach-' />
          }
          <button className='ico'> <i class="ri-search-2-line "></i></button>

        </div>
        <div className='btn'>
      <div className='Account'>
          <AccountCircleIcon onClick={button} /></div>
         
          <Link to='./login'>  <button>Login/Register</button> </Link>
        </div>
        <div class="trackIcon">
          <i class="ri-map-pin-line"></i>
          <div className='tract'>
            <p className='child'>Track</p>
            <p>Order</p>
          </div>
        </div>

        <ul className={`style-look ${but && 'trast'}`}>
          <li> <Link to="/login">  <i class="ri-login-circle-fill"></i>Login/Register </Link> </li>
          <li><i class="ri-money-euro-circle-line"></i>Pay Later</li>
          <li><i class="ri-coins-line"></i>IB Coin</li>
          <li><i class="ri-map-pin-line"></i>Track Order</li>
        </ul>
        <div  className='transt-parent'>
         
          <img src="https://www.industrybuying.com/static/svg/cart-icon.svg" alt="" />
          
          <div className='transt-parent-2'>
            <span>0</span>
            <p>CART</p>
          </div>
        </div>
        <div className='droll-p'>
          <div className='icon-store'>
            <img src="https://www.industrybuying.com/static/images/android-paly.png" alt="" />
            <div style={{width:"2px",height:"14px",background:"#fff" ,margin:"10px 3px"}}></div>
            <img src="https://www.industrybuying.com/static/images/ios-play.png" alt="" />
          </div>
          <p style={{fontSize:"11px",marginTop:"2px"}}>Download the APP!
          </p>
        </div>
        <div className='last-icon' onClick={showT}>
        <MoreVertIcon/>
        </div>
      </nav>
      <div className={`list-nav ${show && 'showactive'} `}>
       <ul className="uderoda">
        <li><Link to="/">Clearance Sale</Link></li>
        <li><Link to="/">Franchise Program</Link></li>
        <li><Link to="/">Sell on industrybuying</Link></li>
        <li><Link to="/">Call to Order</Link></li>
        <li><Link to="/">Enterprise</Link></li>
       </ul>
      </div>
    </div>
  )
}

export default Navbar
