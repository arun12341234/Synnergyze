import React, { useState } from 'react'
import './Best.css'
import { Button } from '@mui/material'
import { Link } from 'react-router-dom'
const Best = () => {
  const [mousehove, setMouse] = useState(false);
  const [mousehove1, setMouse1] = useState(false);
  const [mousehove2, setMouse2] = useState(false);
  const [mousehove3, setMouse3] = useState(false);
  const [mousehove4, setMouse4] = useState(false);
  const [mousehove5, setMouse5] = useState(false);
  const [mousehove6, setMouse6] = useState(false);
  const [mousehove7, setMouse7] = useState(false);
  const [mousehove8, setMouse8] = useState(false);
  const [mousehove9, setMouse9] = useState(false);
  const [mousehove10, setMouse10] = useState(false);
  const [mousehove11, setMouse11] = useState(false);
  return (
    <div id='Best-seller'>
      <img  className='img-sell' src="https://static3.industrybuying.com/homepage/1695713043Homepage-Strip-Banner-986x106-Bulk.png" alt="" />
   <section className='right-1'>
    <h3 className="best">BEST SELLERS</h3>
    <main id='brand-value'>
    <div className='brand-part'   onPointerOver={()=>setMouse(!mousehove)} onPointerOut={()=>setMouse(mousehove)} >
        {!mousehove &&         <img width={150} height={180} src="https://static1.industrybuying.com/products/material-handling-and-packaging/platform-trolley/MA.HA.PL.1626740_1667935674844.webp" alt="" />}
        {!mousehove && <p>SK Engineering 600 kg capacity 900/1000x600 mm SS Platform Trolley SK03</p>}
        {mousehove && <Link ><p>SK Engineering 600 kg capacity 900/1000x600 mm SS Platform Trolley SK03</p></Link>}
        <span>by SK ENGINEERING </span>
        <div className='brand-sec'>
          <div className={` ${mousehove && 'active-two'}`}>
            <div className='roll-caste'>
              <h3 className='h3-text'>12,999</h3>
              <h3 style={{ color: "#f54702" }}>RS.7,880 </h3>
            </div>
            <div className='p-sectio'>
              <p>29%off!</p>
              <p >you save Rs.922!</p>
            </div>
          </div>
          {mousehove && <div className='link-app'>
            <Button variant="contained"  ><i></i>ADD TO CART</Button>
            <Button variant="outlined" >Buy Now</Button>
          </div>
          }
        </div>
      </div>
      <div className='brand-part'   onPointerOver={()=>setMouse1(!mousehove1)} onPointerOut={()=>setMouse1(mousehove1)} >
        {!mousehove1 &&         <img width={150} height={180} src="https://static1.industrybuying.com/products/material-handling-and-packaging/platform-trolley/MA.HA.PL.1626740_1667935674844.webp" alt="" />}
        {!mousehove1 && <p>SK Engineering 600 kg capacity 900/1000x600 mm SS Platform Trolley SK03</p>}
        {mousehove1 && <Link ><p>SK Engineering 600 kg capacity 900/1000x600 mm SS Platform Trolley SK03</p></Link>}
        <span>by SK ENGINEERING </span>
        <div className='brand-sec'>
          <div className={` ${mousehove1 && 'active-two'}`}>
            <div className='roll-caste'>
              <h3 className='h3-text'>12,999</h3>
              <h3 style={{ color: "#f54702" }}>RS.7,880 </h3>
            </div>
            <div className='p-sectio'>
              <p>29%off!</p>
              <p >you save Rs.922!</p>
            </div>
          </div>
          {mousehove1 && <div className='link-app'>
            <Button variant="contained"  ><i></i>ADD TO CART</Button>
            <Button variant="outlined" >Buy Now</Button>
          </div>
          }
        </div>
      </div>
      <div className='brand-part'   onPointerOver={()=>setMouse2(!mousehove2)} onPointerOut={()=>setMouse2(mousehove2)} >
        {!mousehove2 &&         <img width={150} height={180} src="https://static1.industrybuying.com/products/material-handling-and-packaging/platform-trolley/MA.HA.PL.1626740_1667935674844.webp" alt="" />}
        {!mousehove2 && <p>SK Engineering 600 kg capacity 900/1000x600 mm SS Platform Trolley SK03</p>}
        {mousehove2 && <Link ><p>SK Engineering 600 kg capacity 900/1000x600 mm SS Platform Trolley SK03</p></Link>}
        <span>by SK ENGINEERING </span>
        <div className='brand-sec'>
          <div className={` ${mousehove2 && 'active-two'}`}>
            <div className='roll-caste'>
              <h3 className='h3-text'>12,999</h3>
              <h3 style={{ color: "#f54702" }}>RS.7,880 </h3>
            </div>
            <div className='p-sectio'>
              <p>29%off!</p>
              <p >you save Rs.922!</p>
            </div>
          </div>
          {mousehove2 && <div className='link-app'>
            <Button variant="contained"  ><i></i>ADD TO CART</Button>
            <Button variant="outlined" >Buy Now</Button>
          </div>
          }
        </div>
      </div>
      <div className='brand-part'   onPointerOver={()=>setMouse3(!mousehove3)} onPointerOut={()=>setMouse3(mousehove3)} >
        {!mousehove3 &&         <img width={150} height={180} src="https://static1.industrybuying.com/products/material-handling-and-packaging/platform-trolley/MA.HA.PL.1626740_1667935674844.webp" alt="" />}
        {!mousehove3 && <p>SK Engineering 600 kg capacity 900/1000x600 mm SS Platform Trolley SK03</p>}
        {mousehove3 && <Link ><p>SK Engineering 600 kg capacity 900/1000x600 mm SS Platform Trolley SK03</p></Link>}
        <span>by SK ENGINEERING </span>
        <div className='brand-sec'>
          <div className={` ${mousehove3 && 'active-two'}`}>
            <div className='roll-caste'>
              <h3 className='h3-text'>12,999</h3>
              <h3 style={{ color: "#f54702" }}>RS.7,880 </h3>
            </div>
            <div className='p-sectio'>
              <p>29%off!</p>
              <p >you save Rs.922!</p>
            </div>
          </div>
          {mousehove3 && <div className='link-app'>
            <Button variant="contained"  ><i></i>ADD TO CART</Button>
            <Button variant="outlined" >Buy Now</Button>
          </div>
          }
        </div>
      </div>
      <div className='brand-part'   onPointerOver={()=>setMouse4(!mousehove4)} onPointerOut={()=>setMouse4(mousehove4)} >
        {!mousehove4 &&         <img width={150} height={180} src="https://static1.industrybuying.com/products/material-handling-and-packaging/platform-trolley/MA.HA.PL.1626740_1667935674844.webp" alt="" />}
        {!mousehove4 && <p>SK Engineering 600 kg capacity 900/1000x600 mm SS Platform Trolley SK03</p>}
        {mousehove4 && <Link ><p>SK Engineering 600 kg capacity 900/1000x600 mm SS Platform Trolley SK03</p></Link>}
        <span>by SK ENGINEERING </span>
        <div className='brand-sec'>
          <div className={` ${mousehove4 && 'active-two'}`}>
            <div className='roll-caste'>
              <h3 className='h3-text'>12,999</h3>
              <h3 style={{ color: "#f54702" }}>RS.7,880 </h3>
            </div>
            <div className='p-sectio'>
              <p>29%off!</p>
              <p >you save Rs.922!</p>
            </div>
          </div>
          {mousehove4 && <div className='link-app'>
            <Button variant="contained"  ><i></i>ADD TO CART</Button>
            <Button variant="outlined" >Buy Now</Button>
          </div>
          }
        </div>
      </div>
      <div className='brand-part'   onPointerOver={()=>setMouse5(!mousehove5)} onPointerOut={()=>setMouse5(mousehove5)} >
        {!mousehove5 &&         <img width={150} height={180} src="https://static1.industrybuying.com/products/material-handling-and-packaging/platform-trolley/MA.HA.PL.1626740_1667935674844.webp" alt="" />}
        {!mousehove5 && <p>SK Engineering 600 kg capacity 900/1000x600 mm SS Platform Trolley SK03</p>}
        {mousehove5 && <Link ><p>SK Engineering 600 kg capacity 900/1000x600 mm SS Platform Trolley SK03</p></Link>}
        <span>by SK ENGINEERING </span>
        <div className='brand-sec'>
          <div className={` ${mousehove5 && 'active-two'}`}>
            <div className='roll-caste'>
              <h3 className='h3-text'>12,999</h3>
              <h3 style={{ color: "#f54702" }}>RS.7,880 </h3>
            </div>
            <div className='p-sectio'>
              <p>29%off!</p>
              <p >you save Rs.922!</p>
            </div>
          </div>
          {mousehove5 && <div className='link-app'>
            <Button variant="contained"  ><i></i>ADD TO CART</Button>
            <Button variant="outlined" >Buy Now</Button>
          </div>
          }
        </div>
      </div>
      <div className='brand-part'   onPointerOver={()=>setMouse6(!mousehove6)} onPointerOut={()=>setMouse6(mousehove6)} >
        {!mousehove6 &&         <img width={150} height={180} src="https://static1.industrybuying.com/products/material-handling-and-packaging/platform-trolley/MA.HA.PL.1626740_1667935674844.webp" alt="" />}
        {!mousehove6 && <p>SK Engineering 600 kg capacity 900/1000x600 mm SS Platform Trolley SK03</p>}
        {mousehove6 && <Link ><p>SK Engineering 600 kg capacity 900/1000x600 mm SS Platform Trolley SK03</p></Link>}
        <span>by SK ENGINEERING </span>
        <div className='brand-sec'>
          <div className={` ${mousehove6 && 'active-two'}`}>
            <div className='roll-caste'>
              <h3 className='h3-text'>12,999</h3>
              <h3 style={{ color: "#f54702" }}>RS.7,880 </h3>
            </div>
            <div className='p-sectio'>
              <p>29%off!</p>
              <p >you save Rs.922!</p>
            </div>
          </div>
          {mousehove6 && <div className='link-app'>
            <Button variant="contained"  ><i></i>ADD TO CART</Button>
            <Button variant="outlined" >Buy Now</Button>
          </div>
          }
        </div>
      </div>
      <div className='brand-part'   onPointerOver={()=>setMouse7(!mousehove7)} onPointerOut={()=>setMouse7(mousehove7)} >
        {!mousehove7 &&         <img width={150} height={180} src="https://static1.industrybuying.com/products/material-handling-and-packaging/platform-trolley/MA.HA.PL.1626740_1667935674844.webp" alt="" />}
        {!mousehove7 && <p>SK Engineering 600 kg capacity 900/1000x600 mm SS Platform Trolley SK03</p>}
        {mousehove7 && <Link ><p>SK Engineering 600 kg capacity 900/1000x600 mm SS Platform Trolley SK03</p></Link>}
        <span>by SK ENGINEERING </span>
        <div className='brand-sec'>
          <div className={` ${mousehove7 && 'active-two'}`}>
            <div className='roll-caste'>
              <h3 className='h3-text'>12,999</h3>
              <h3 style={{ color: "#f54702" }}>RS.7,880 </h3>
            </div>
            <div className='p-sectio'>
              <p>29%off!</p>
              <p >you save Rs.922!</p>
            </div>
          </div>
          {mousehove7 && <div className='link-app'>
            <Button variant="contained"  ><i></i>ADD TO CART</Button>
            <Button variant="outlined" >Buy Now</Button>
          </div>
          }
        </div>
      </div>
      <div className='brand-part'   onPointerOver={()=>setMouse8(!mousehove8)} onPointerOut={()=>setMouse8(mousehove8)} >
        {!mousehove8 &&         <img width={150} height={180} src="https://static1.industrybuying.com/products/material-handling-and-packaging/platform-trolley/MA.HA.PL.1626740_1667935674844.webp" alt="" />}
        {!mousehove8 && <p>SK Engineering 600 kg capacity 900/1000x600 mm SS Platform Trolley SK03</p>}
        {mousehove8 && <Link ><p>SK Engineering 600 kg capacity 900/1000x600 mm SS Platform Trolley SK03</p></Link>}
        <span>by SK ENGINEERING </span>
        <div className='brand-sec'>
          <div className={` ${mousehove8 && 'active-two'}`}>
            <div className='roll-caste'>
              <h3 className='h3-text'>12,999</h3>
              <h3 style={{ color: "#f54702" }}>RS.7,880 </h3>
            </div>
            <div className='p-sectio'>
              <p>29%off!</p>
              <p >you save Rs.922!</p>
            </div>
          </div>
          {mousehove8 && <div className='link-app'>
            <Button variant="contained"  ><i></i>ADD TO CART</Button>
            <Button variant="outlined" >Buy Now</Button>
          </div>
          }
        </div>
      </div>
      <div className='brand-part'   onPointerOver={()=>setMouse9(!mousehove9)} onPointerOut={()=>setMouse9(mousehove9)} >
        {!mousehove9 &&         <img width={150} height={180} src="https://static1.industrybuying.com/products/material-handling-and-packaging/platform-trolley/MA.HA.PL.1626740_1667935674844.webp" alt="" />}
        {!mousehove9 && <p>SK Engineering 600 kg capacity 900/1000x600 mm SS Platform Trolley SK03</p>}
        {mousehove9 && <Link ><p>SK Engineering 600 kg capacity 900/1000x600 mm SS Platform Trolley SK03</p></Link>}
        <span>by SK ENGINEERING </span>
        <div className='brand-sec'>
          <div className={` ${mousehove9 && 'active-two'}`}>
            <div className='roll-caste'>
              <h3 className='h3-text'>12,999</h3>
              <h3 style={{ color: "#f54702" }}>RS.7,880 </h3>
            </div>
            <div className='p-sectio'>
              <p>29%off!</p>
              <p >you save Rs.922!</p>
            </div>
          </div>
          {mousehove9 && <div className='link-app'>
            <Button variant="contained"  ><i></i>ADD TO CART</Button>
            <Button variant="outlined" >Buy Now</Button>
          </div>
          }
        </div>
      </div>
      <div className='brand-part'   onPointerOver={()=>setMouse10(!mousehove10)} onPointerOut={()=>setMouse10(mousehove10)} >
        {!mousehove10 &&         <img width={150} height={180} src="https://static1.industrybuying.com/products/material-handling-and-packaging/platform-trolley/MA.HA.PL.1626740_1667935674844.webp" alt="" />}
        {!mousehove10 && <p>SK Engineering 600 kg capacity 900/1000x600 mm SS Platform Trolley SK03</p>}
        {mousehove10 && <Link ><p>SK Engineering 600 kg capacity 900/1000x600 mm SS Platform Trolley SK03</p></Link>}
        <span>by SK ENGINEERING </span>
        <div className='brand-sec'>
          <div className={` ${mousehove10 && 'active-two'}`}>
            <div className='roll-caste'>
              <h3 className='h3-text'>12,999</h3>
              <h3 style={{ color: "#f54702" }}>RS.7,880 </h3>
            </div>
            <div className='p-sectio'>
              <p>29%off!</p>
              <p >you save Rs.922!</p>
            </div>
          </div>
          {mousehove10 && <div className='link-app'>
            <Button variant="contained"  ><i></i>ADD TO CART</Button>
            <Button variant="outlined" >Buy Now</Button>
          </div>
          }
        </div>
      </div>
     
      <div className='brand-part'   onPointerOver={()=>setMouse11(!mousehove11)} onPointerOut={()=>setMouse11(mousehove11)} >
        {!mousehove11 &&         <img width={150} height={180} src="https://static1.industrybuying.com/products/material-handling-and-packaging/platform-trolley/MA.HA.PL.1626740_1667935674844.webp" alt="" />}
        {!mousehove11 && <p>SK Engineering 600 kg capacity 900/1000x600 mm SS Platform Trolley SK03</p>}
        {mousehove11 && <Link ><p>SK Engineering 600 kg capacity 900/1000x600 mm SS Platform Trolley SK03</p></Link>}
        <span>by SK ENGINEERING </span>
        <div className='brand-sec'>
          <div className={` ${mousehove11 && 'active-two'}`}>
            <div className='roll-caste'>
              <h3 className='h3-text'>12,999</h3>
              <h3 style={{ color: "#f54702" }}>RS.7,880 </h3>
            </div>
            <div className='p-sectio'>
              <p>29%off!</p>
              <p >you save Rs.922!</p>
            </div>
          </div>
          {mousehove11 && <div className='link-app'>
            <Button variant="contained"  ><i></i>ADD TO CART</Button>
            <Button variant="outlined" >Buy Now</Button>
          </div>
          }
        </div>
      </div>
     
    </main>
   </section>
    </div>
  )
}

export default Best
