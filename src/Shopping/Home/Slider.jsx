import React, { useState } from 'react'
import './slider.css'
import { Image } from './api'

const Slider = () => {

    const [Collect] = useState(Image);
    const [activeSlide, setActiveSlide] = useState(0);
    const prevSlide = () => {
        if (activeSlide === 0) {
            setActiveSlide(Collect.length - 1);
        } else {
            setActiveSlide(activeSlide - 1);
        }
    };
    const nextSlide = () => {
        if (activeSlide === Collect.length - 1) {
            setActiveSlide(0);
        } else {
            setActiveSlide(activeSlide + 1);
        }
    };


    return (
        <div>
            <div id='slider'>
                <div className='list-section' >
                    <ul className='uder-li'>
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

                        <div><p> <a href="/" className='sec-2'> See All Categories</a></p></div>
                    </ul>
                </div>


                {
                    // eslint-disable-next-line array-callback-return
                    Collect.map((val, i) => {

                        if (i === activeSlide) {
                            return (
                                <div key={i} className='Img-api'>
                                    <button onClick={prevSlide}><i class="ri-arrow-left-fill"></i></button>
                                    <img src={val.img} alt="" />

                                    <button onClick={nextSlide}><i class="ri-arrow-right-line"></i></button>

                                </div>
                            )

                        }
                    })
                }

                <div className='close'>
                    <img src="https://static3.industrybuying.com/homepage/1695624845RHS-Banner-499x19-Planned-Inventory%20(2).png" alt="" />
                    <section className='phone-num'>
                        <div className='text-part'>
                            <div className='img-text'>
                                <img src="https://www.industrybuying.com/static/images/mobile.png" alt="" />
                                <p style={{ fontSize: "12px" }}>Enter your phone number to
                                    <p style={{ margin: "2px 0" }}>Get Upto 5% Off</p></p>
                            </div>

                            <input type="text" placeholder='enter your num' />
                            <button style={{ background: "#000", color: "#fff" }}>Go</button>
                        </div>
                        <div>
                            <img src="https://static3.industrybuying.com/homepage/1551767207right-small-reseller2.gif" alt="" />
                        </div>
                    </section>

                </div>

            </div>
            <footer id='footer-sce'>
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
                
                    <div className='div-2-img'>
                        <img src="https://static3.industrybuying.com/homepage/1695644792image%20(10).png" alt="" />
                        </div>
                       
                
                <div >
                    <img src="https://static3.industrybuying.com/homepage/1695626687RHS_Banner_2.png" alt=""/>
                </div>

            </footer>
            <div className='Power'>
        <h1 style={{textAlign:"center"}}>IB Power Brands</h1>
      </div>
        </div>

    )
}

export default Slider
