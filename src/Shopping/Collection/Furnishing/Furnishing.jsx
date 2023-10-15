import { Button } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import TornadoIcon from '@mui/icons-material/Tornado';
import React from 'react'

const Furnishing = () => {
  return (
    <div  className='top-down-button'>
    <main  id='cocket-yarns'>
      <div className='h1p'>
        <h1>Home & Living</h1>
        <p>ReshaMandi home and living products are the perfect way to add a touch of elegance and ... </p>
      </div>
      <div className='rockp-start'>
        <div className='rocket'>
          <div className='rocket-img'>
            <img  src="https://reshamandi.com/_next/image?url=https%3A%2F%2Fdh54ynjtfu9e2.cloudfront.net%2Frm_categories%2Fcat_hl_curtains.png&w=384&q=75" alt="Curtains" />
          </div>
          <p>Curtains</p>
        </div>
        <div className='rocket'>
          <div className='rocket-img'>
            <img src="https://reshamandi.com/_next/image?url=https%3A%2F%2Fdh54ynjtfu9e2.cloudfront.net%2Frm_categories%2Fcat_hl_bedlinen.png&w=384&q=75" alt="Bed Linen" />
          </div>
          <p>Bed Linen</p>
        </div>
        <div className='rocket'>
          <div className='rocket-img'>
            <img src="https://reshamandi.com/_next/image?url=https%3A%2F%2Fdh54ynjtfu9e2.cloudfront.net%2Frm_categories%2Fcat_hl_tableware.png&w=384&q=75" alt="Table Ware" />
          </div>
          <p>Table Ware</p>
        </div>
        <div className='rocket'>
          <div className='rocket-img'>
            <img src="https://reshamandi.com/_next/image?url=https%3A%2F%2Fdh54ynjtfu9e2.cloudfront.net%2Frm_categories%2Fcat_hl_decor.png&w=384&q=75" alt="Decor" />
          </div>
          <p>Decor</p>
        </div>
        
      </div>
    </main>
    <section id='ropper-disk'>
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
      <div className='tudu-img'>
      <div className='show-sort'>
        <h1>Showing 58 products</h1>
        <div className='show-icon'>
          <TornadoIcon/>
        <h1>Sort By</h1>
        <ExpandMoreIcon/>
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
      </div>
     </div>
  
    </section>
    </div>
  )
}

export default Furnishing
