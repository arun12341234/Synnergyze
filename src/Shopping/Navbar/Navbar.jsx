import React, { useState } from 'react'
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
          <li>All Categories <i class="ri-add-line"></i></li>
          <li>Abrasives <i class="ri-add-line"></i></li>
          <li>LED & LIGHT <i class="ri-add-line"></i></li>
          <li>Lab Supply <i class="ri-add-line"></i></li>
          <li>buy-for-me <i class="ri-add-line"></i></li>
        </ul>
        <div className='select-i'>
          <select name="" id="section">
            <option value="">All Categories</option>
            <option value="">Abrasives</option>
            <option value="">LED & LIGHT</option>
            <option value="">Lab Supply</option>
          </select>

          {window.innerWidth="790" ? 
            <Link to="/"> <input type="Search" placeholder='Search Product' className='serach-' /></Link> 
           : <input type="Search" placeholder='Search Product' className='serach-' />
          }
          <Link to="/"> <i class="ri-search-2-line ico"></i></Link>

        </div>
        <div className='btn'>
          <i class="ri-contacts-line" onClick={button}></i>
        <Link to='./login'>  <button>Login</button> </Link>
        <Link to='./registration'> <button>Register</button></Link>
        </div>
        <ul className={`style-look ${but && 'trast'}`}>
          <li> <Link to="/registration">  <i class="ri-login-circle-fill"></i>Login/Register </Link> </li>
          <li><i class="ri-money-euro-circle-line"></i>Pay Later</li>
          <li><i class="ri-coins-line"></i>IB Coin</li>
          <li><i class="ri-map-pin-line"></i>Track Order</li>
        </ul>
        <div>
          <i class="ri-shopping-cart-2-line cart"></i>
        </div>
        <div className='last-icon' onClick={showT}>
          <i class="ri-menu-line"></i>
        </div>
      </nav>
      <div className={`list-nav ${show && 'showactive'} `}>
        <ul className='uderoda'>
          <li><i class="ri-hammer-fill"></i> Agriculture Garden & Landscaping
            <div className="meu-ar">
              <ul className='dropdown'>
                <li>rahulkumarmukarjart</li>
                <li> oppser</li>
                <li>rahul</li>
                <li>rahul</li>
                <li>rahul</li>
              </ul>
            </div>
          </li>
          <li>   <i class="ri-tools-fill"></i>Power Tools
            <div className="meu-ar">
              <ul className='dropdown'>
                <li>rahulkumarmukarjart</li>
                <li> hgvhuijhgvfhdj jhgehf uytahul</li>
                <li>rahul</li>
                <li>rahul</li>
                <li>rahul</li>
              </ul>
            </div>
          </li>
          <li> <i class="ri-brush-4-fill"></i> Material Handling and Packaging
            <div className="meu-ar">
              <ul className='dropdown'>
                <li>rahulkumarmukarjart</li>
                <li> uijhgvfhdj jhgehf uytrahul</li>
                <li>rahul</li>
                <li>rahul</li>
                <li>rahul</li>
              </ul>
            </div>
          </li>
          <li> <i class="ri-building-line"></i>Office Supplies
            <div className="meu-ar">
              <ul className='dropdown'>
                <li>rahulkumarmukarjart</li>
                <li> gvhuijhgvfhdj jhgehf uytahul</li>
                <li>rahul</li>
                <li>rahul</li>
                <li>rahul</li>
              </ul>
            </div>
          </li>
          <li><i class="ri-superscript"></i> Testing and Measuring Instruments
            <div className="meu-ar">
              <ul className='dropdown'>
                <li>rahulkumarmukarjart</li>
                <li> <a href="/">ajhgvhuijhgvfhdj jhgehf uyty</a>rahul</li>
                <li>rahul</li>
                <li>rahul</li>
                <li>rahul</li>
              </ul>
            </div>
          </li>
          <li><i class="ri-folder-chart-line"></i> Furniture, Hospitality and Food Service
            <div className="meu-ar">
              <ul className='dropdown'>
                <li>rahulkumarmukarjart</li>
                <li> hgvhuijhgvfhdj jhgehf uyahul</li>
                <li>rahul</li>
                <li>rahul</li>
                <li>rahul</li>
              </ul>
            </div>
          </li>
          <li><i class="ri-brush-fill"></i> Cleaning
            <div className="meu-ar">
              <ul className='dropdown'>
                <li>rahulkumarmukarjart</li>
                <li> hgvfhdj jhgehf uytyhul</li>
                <li>rahul</li>
                <li>rahul</li>
                <li>rahul</li>
              </ul>
            </div>
          </li>
          <li> Electrical
            <div className="meu-ar">
              <ul className='dropdown'>
                <li>rahulkumarmukarjart</li>
                <li> vhuijhgvfhdj jhgehf uyty</li>
                <li>rahul</li>
                <li>rahul</li>
                <li>rahul</li>
              </ul>
            </div>
          </li>
          <li> Hydraulics and Pneumatics
            <div className="meu-ar">
              <ul className='dropdown'>
                <li>rahulkumarmukarjart</li>
                <li> ajhgvhuijhgvfhdj jhgehf rahul</li>
                <li>rahul</li>
                <li>rahul</li>
                <li>rahul</li>
              </ul>
            </div>
          </li>
          <li>Pump
            <div className="meu-ar">
              <ul className='dropdown'>
                <li>rahulkumarmukarjart</li>
                <li> oppser</li>
                <li>rahul</li>
                <li>rahul</li>
                <li>rahul</li>
              </ul>
            </div>
          </li>
          <li>IT & Electrical
            <div className="meu-ar">
              <ul className='dropdown'>
                <li>rahulkumarmukarjart</li>
                <li> oppser</li>
                <li>rahul</li>
                <li>rahul</li>
                <li>rahul</li>
              </ul>
            </div>
          </li>
          <li>Safety
            <div className="meu-ar">
              <ul className='dropdown'>
                <li>rahulkumarmukarjart</li>
                <li> oppser</li>
                <li>rahul</li>
                <li>rahul</li>
                <li>rahul</li>
              </ul>
            </div>
          </li>
          <div><p> <a href="/" className='part2-last'> See All Categories</a></p></div>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
