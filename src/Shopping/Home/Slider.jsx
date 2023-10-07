import React from 'react'
import './slider.css'
import Carousel from 'react-material-ui-carousel'


const Slider = () => {

    const Collect = [
        {
            img: "//static3.industrybuying.com/homepage/1695708456Desktop-Banner-524x334-OfficeSupplies (1).png"
        },
        { img: "//static3.industrybuying.com/homepage/1695708495Desktop-Banner-524x334-Cleaning (2).png" },
        { img: "//static3.industrybuying.com/homepage/1695711056Desktop-Banner-524x334-MHAP (2).png" },
        { img: "//static3.industrybuying.com/homepage/1695645160Safety Shoes_Desktop-Banner_524x334.png" },
        { img: "//static3.industrybuying.com/homepage/1695380084Desktop-Banner-524x334-Material-Handling2.png" }

    ]




    return (
        <div>
            <div id='slider'>
                <div className='list-section' >
                    <ul className='uder-li'>
                        <li> <img src="https://static3.industrybuying.com/navigation/1626345464161209agriculture-garden-landscaping.webp" alt="" /> Agriculture Garden & Landscaping           </li>
                        <li> <img src="https://static3.industrybuying.com/navigation/161209power-tools.png" alt="" /> Power Tools                 </li>
                        <li> <img src="https://static3.industrybuying.com/navigation/1626346599161209material-handling.webp" alt="" /> Material Handling and Packaging</li>
                        <li> <img src="https://static3.industrybuying.com/navigation/1626346697161209office-supplies.webp" alt="" /> Office Supplies</li>
                        <li> <img src="https://static3.industrybuying.com/navigation/1627045855testing-measuring.png" alt="" /> Testing and Measuring Instrument</li>
                        <li> <img src="https://static3.industrybuying.com/navigation/1626345844161209furniture-hospitality.webp" alt="" /> Furniture, Hospitality and Food Service</li>
                        <li> <img src="https://static3.industrybuying.com/navigation/1626345597161209cleaning.webp" alt="" /> Cleaning</li>
                        <li><img src="https://static3.industrybuying.com/navigation/1626345697161209electrical.webp" alt="" /> Electrical</li>
                        <li> <img src="https://static3.industrybuying.com/navigation/161209pneumatics.png" alt="" /> Hydraulics and Pneumatics </li>
                        <li> <img src="https://static3.industrybuying.com/navigation/1626346831161209pumps.webp" alt="" />  Pumps</li>
                        <li> <img src="https://static3.industrybuying.com/navigation/1626346305161209it-electronics.webp" alt="" />   IT & Electrical</li>
                        <li> <img src="https://static3.industrybuying.com/navigation/1627045810safety.png" alt="" />  Safety</li>
                        <div><p> <a href="/" className='sec-2'> See All Categories</a></p></div>
                    </ul>



                </div>
                <Carousel className='filter-img'>
                    {

                        Collect.map((val, i) =>

                            <div key={i} >
                                <img src={val.img} alt="" />
                            </div>
                        )
                    }
                </Carousel>

                <div className='close'>
                    <img src="https://static3.industrybuying.com/homepage/1695624845RHS-Banner-499x19-Planned-Inventory%20(2).png" alt="" />
                    <section className='phone-num'>
                        <div className='text-part'>
                            <div className='img-text'>
                                <img src="https://www.industrybuying.com/static/images/mobile.png" alt="" />
                                <p style={{ fontSize: "12px" }}>Enter your phone number to
                                    <p style={{ fontSize: "10px" }}>Get Upto 5% Off</p></p>
                            </div>
                            <div className='pocket'>
                                <input type="text" placeholder='enter your num' />
                                <button>Go</button>
                            </div>
                        </div>
                        <div>
                            <img src="https://static3.industrybuying.com/homepage/1551767207right-small-reseller2.gif" alt="" />
                        </div>
                    </section>

                </div>
               
            </div>
            <main id='second-tour'>
                    <div className='img-sect'>
                        <div className='img-2'>
                            <img src="https://static3.industrybuying.com/homepage/1650521467istockphoto-643063772-612x612%20(2).jpg" alt="" />
                            <p>special offer</p>
                        </div>
                        <div className='img-2'>
                            <img src="https://static3.industrybuying.com/homepage/160918seller-area.png" alt="" />
                            <p>Seller hub</p>
                        </div>
                        <div className='img-2'>
                            <img src="https://static3.industrybuying.com/homepage/1685441663megaphones.png" alt="" />
                            <p>Clear sale</p>
                        </div>
                    </div>
                    <div className='offer-letter'>
                        <img src="https://static3.industrybuying.com/homepage/1696482472Desktop-bnr-771x111-Consumable3.png" alt="" />
                    </div>
                    <div className='last-rupay'>
                        <img src="https://static3.industrybuying.com/homepage/1696482767RHS-Banner.png" alt="" />
                    </div>
                </main>
            <div className='Power'>
                <h3>IB Power Brands</h3>
            </div>
        </div>

    )
}

export default Slider
