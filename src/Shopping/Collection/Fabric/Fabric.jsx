import { Button } from '@mui/material'
import React from 'react'

const Fabric = () => {
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
  
    </section>
    </div>
  )
}

export default Fabric
