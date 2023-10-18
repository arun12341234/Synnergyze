import { Button } from '@mui/material'
import React, { useState } from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import TornadoIcon from '@mui/icons-material/Tornado';
import { Link } from 'react-router-dom';
import Movepage from '../Footer-slider/Movepage';
const Fabric = () => {
  const[closebbtn,setClose] =useState(false)
 const opeClose= () => {
  setClose(!closebbtn)
 }
  return (
    <div  className='top-down-button'>
    <main  id='cocket-yarns'>
      <div className='h1p'>
        <h1>Fabric</h1>
        <p>Choose from our all-inclusive collection of dyeable fabrics ideal for all your apparel & furnishing </p>
      </div>
      <div className='rockp-start'>
        <div className='rocket'>
          <div className='rocket-img'>
            <img  src="https://reshamandi.com/_next/image?url=https%3A%2F%2Fdh54ynjtfu9e2.cloudfront.net%2Frm_categories%2Fcat_fabric_cotton.png&w=384&q=75" alt="Organic Cotton, Cotton & Blends" />
          </div>
          <p>Organic Cotton</p>
        </div>
        <div className='rocket'>
          <div className='rocket-img'>
            <img src="https://reshamandi.com/_next/image?url=https%3A%2F%2Fdh54ynjtfu9e2.cloudfront.net%2Frm_categories%2Fcat_fabric_linen.png&w=384&q=75" alt="Linen & Blends" />
          </div>
          <p>Linen & Blends</p>
        </div>
        <div className='rocket'>
          <div className='rocket-img'>
            <img src="https://reshamandi.com/_next/image?url=https%3A%2F%2Fdh54ynjtfu9e2.cloudfront.net%2Frm_categories%2Fcat_fabric_silk.png&w=384&q=75" alt="Silk & Blends" />
          </div>
          <p>Silk & Blends</p>
        </div>
        <div className='rocket'>
          <div className='rocket-img'>
            <img src="https://reshamandi.com/_next/image?url=https%3A%2F%2Fdh54ynjtfu9e2.cloudfront.net%2Frm_categories%2Fcat_fabric_rayon.png&w=384&q=75" alt="Rayon/viscose" />
          </div>
          <p>Rayon/viscose</p>
        </div>
        
      </div>
    </main>
    <section id='ropper-disk'>
      <div className='tudo-list'>
      <div className='item-list'>
        <h1>Cocoon Type</h1>
        <div className='finish-top'>
          <input type="checkbox" />
          <span>ARM WHITE(4)</span>
        </div>
        <div className='finish-top'>
          <input type="checkbox" />
          <span>BV WHITE(6)</span>
        </div>
        <div className='finish-top'>
          <input type="checkbox" />
          <span>CB GOLD(8)</span>
        </div>
        <div className='finish-top'>
          <input type="checkbox" />
          <span>CHINA(1)</span>
        </div>
        <div className='finish-top'>
          <input type="checkbox" />
          <span>VIETNAM(1)</span>
        </div>
      </div>
      <div className='item-list'>
        <h1>Twist Type</h1>
        <div className='finish-top'>
          <input type="checkbox" />
          <span>Warp - 2ply(5)</span>
        </div>
        <div className='finish-top'>
          <input type="checkbox" />
          <span>Weft - 2ply(5)</span>
        </div>
        <div className='finish-top'>
          <input type="checkbox" />
          <span>Weft - 3ply(1)</span>
        </div>
        
      </div>
      <div className='item-list'>
        <h1>Yarn Type</h1>
        <div className='finish-top'>
          <input type="checkbox" />
          <span>Cotton Gassed Mercerized Yarn(3)</span>
        </div>
        <div className='finish-top'>
          <input type="checkbox" />
          <span>Linen Yarn(7)</span>
        </div>
        <div className='finish-top'>
          <input type="checkbox" />
          <span>Open End(6)</span>
        </div>
        <div className='finish-top'>
          <input type="checkbox" />
          <span>Raw(9)</span>
        </div>
        <div className='finish-top'>
          <input type="checkbox" />
          <span>Ring Spun Carded(5)</span>
        </div>
        <div className='finish-top'>
          <input type="checkbox" />
          <span>Twisted(11)</span>
        </div>
        <div className='finish-top'>
          <input type="checkbox" />
          <span>Viscose Yarn(13)</span>
        </div>
        
      </div>
      <div className='item-list'>
        <h1>Colors</h1>
        <div className='finish-top'>
          <input type="checkbox" />
          <span>Rfd(58)</span>
        </div>
        
       
        
      </div>
      </div>
     <div className='tudu-img'>
      <div className='show-sort'>
        <h1>Showing 8 products</h1>
        <div className='show-icon'>
          <TornadoIcon/>
        <h1>Sort By</h1>
        <div>
        <ExpandMoreIcon className='ExpandMor' onClick={opeClose}/>
          <ul className={`full-form ${closebbtn && "addt"}`} style={{fontSize:"1.4rem",listStyle:"none",position:"absolute",right:"0",background:"#fffff",border:"1px solid gray"}}>
            <li><Link to={{}}>Product</Link></li>
            <li><Link to={{}}>Rate</Link></li>
            <li><Link to={{}}>Review</Link></li>
            <li><Link to={{}}>Price</Link></li>
          </ul>
          </div>
        </div>
      </div>
      <div className='btnn-img'>
      <div className="img-collection">
        <img src="https://reshamandi.com/_next/image?url=https%3A%2F%2Fdh54ynjtfu9e2.cloudfront.net%2Fimages%2FSTBV0003.png&w=640&q=75" alt="" />
      <Button variant="outlined" sx={{px:'3rem'}}>+Add </Button>
      </div>
      <div className="img-collection">
        <img src="https://reshamandi.com/_next/image?url=https%3A%2F%2Fdh54ynjtfu9e2.cloudfront.net%2Fimages%2FSTBV0003.png&w=640&q=75" alt="" />
        <Button variant="outlined" sx={{px:'3rem'}}>+Add </Button>
      </div>
      <div className="img-collection">
        <img src="https://reshamandi.com/_next/image?url=https%3A%2F%2Fdh54ynjtfu9e2.cloudfront.net%2Fimages%2FSTBV0003.png&w=640&q=75" alt="" />
        <Button variant="outlined" sx={{px:'3rem'}}>+Add </Button>
      </div>
      <div className="img-collection">
        <img src="https://reshamandi.com/_next/image?url=https%3A%2F%2Fdh54ynjtfu9e2.cloudfront.net%2Fimages%2FSTBV0003.png&w=640&q=75" alt="" />
        <Button variant="outlined" sx={{px:'3rem '}}>+Add </Button>
      </div>
      <div className="img-collection">
        <img src="https://reshamandi.com/_next/image?url=https%3A%2F%2Fdh54ynjtfu9e2.cloudfront.net%2Fimages%2FSTBV0003.png&w=640&q=75" alt="" />
      <Button variant="outlined" sx={{px:'3rem'}}>+Add </Button>
      </div>
      <div className="img-collection">
        <img src="https://reshamandi.com/_next/image?url=https%3A%2F%2Fdh54ynjtfu9e2.cloudfront.net%2Fimages%2FSTBV0003.png&w=640&q=75" alt="" />
      <Button variant="outlined" sx={{px:'3rem'}}>+Add </Button>
      </div>
      <div className="img-collection">
        <img src="https://reshamandi.com/_next/image?url=https%3A%2F%2Fdh54ynjtfu9e2.cloudfront.net%2Fimages%2FSTBV0003.png&w=640&q=75" alt="" />
      <Button variant="outlined" sx={{px:'3rem'}}>+Add </Button>
      </div>
      <div className="img-collection">
        <img src="https://reshamandi.com/_next/image?url=https%3A%2F%2Fdh54ynjtfu9e2.cloudfront.net%2Fimages%2FSTBV0003.png&w=640&q=75" alt="" />
      <Button variant="outlined" sx={{px:'3rem'}}>+Add </Button>
      </div>
      </div>
      <Movepage/>
     </div>
  
    </section>
    </div>
  )
}

export default Fabric
