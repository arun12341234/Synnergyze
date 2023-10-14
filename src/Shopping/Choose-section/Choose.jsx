import React, { useState } from 'react'
import './choose.css'
import { Link } from 'react-router-dom';
const Choose = () => {
    const [select, setSelect] = useState(true);
    const [node, setNode] = useState({
        backgroundColor: " #d3d3d6",
        color: " #6c757d"
    });
    const [mode, setMode] = useState({
        backgroundColor: " #274d03",
        color: " #c8f21d",
        boxShadow: " 2px 1px 6px 1px rgb(202, 202, 202)"
    });
    const changeMode = () => {
        if (mode.backgroundColor === " #274d03") {
            setNode({
                backgroundColor: " #274d03",
                color: " #c8f21d",
                boxShadow: " 2px 1px 6px 1px rgb(202, 202, 202)"
            })
            setSelect(false)
            setMode({
                backgroundColor: " #d3d3d6",
                color: " #6c757d"
            })
        }
        else {
            setMode({
                backgroundColor: " #274d03",
                color: " #c8f21d",
                boxShadow: " 2px 1px 6px 1px rgb(202, 202, 202)"
            })
            setNode({
                backgroundColor: " #d3d3d6",
                color: " #6c757d"
            })
            setSelect(true)
        }
      

    }

    return (
        <div className='outer'>
            <main id='both-side'>
                <div className='button left' >
                    <button style={mode} onClick={changeMode}>Buy</button>
                </div>
                <div className='button right' >
                    <button style={node} onClick={changeMode}>Sell</button>
                </div>
            </main>
            {select ?
             <section className='fiter-product'>

               <Link to={"/collection/yarns"}> <div className='add-text'>
                    <div className='circule-img'>
                        <img src="https://reshamandi.com/_next/image?url=https%3A%2F%2Fdh54ynjtfu9e2.cloudfront.net%2Frm_categories%2FYarn_Homepage-min.png&w=96&q=75" alt="Yarns" />                    </div>
                    <p>Yarns</p>
                </div></Link>
                <Link to={"/collection/apparel"}>
                <div className='add-text'>
                    <div className='circule-img'>
                        <img src="https://reshamandi.com/_next/image?url=https%3A%2F%2Fdh54ynjtfu9e2.cloudfront.net%2Frm_categories%2FApparel_Homepage-min.png&w=96&q=75" alt="Apparel" />                   </div>
                    <p>Apparel</p>
                </div></Link>
                <Link to={"/collection/fabric"}>
                <div className='add-text'>
                    <div className='circule-img'>
                        <img src="https://reshamandi.com/_next/image?url=https%3A%2F%2Fdh54ynjtfu9e2.cloudfront.net%2Frm_categories%2FFabric_Homepage-min.png&w=96&q=75" alt="Fabric" />
                    </div>
                    <p>Fabric</p>
                </div>
                </Link>
                <Link to={"/collection/home-furnishing"}>
                <div className='add-text'>
                    <div className='circule-img'>
                        <img src="https://reshamandi.com/_next/image?url=https%3A%2F%2Fdh54ynjtfu9e2.cloudfront.net%2Frm_categories%2FHome_Homepage-min.png&w=96&q=75" alt="Home Furnishing" />                </div>
                    <p>Home Furnishing</p>
                </div>
                </Link>
                <Link to={"/collection/accessory"}>
                <div className='add-text'>
                    <div className='circule-img'>
                        <img src="https://reshamandi.com/_next/image?url=https%3A%2F%2Fdh54ynjtfu9e2.cloudfront.net%2Frm_categories%2FAccessories_Homepage-min.png&w=96&q=75" alt="Accessory" />
                    </div>
                    <p>Accessory</p>
                </div>
                </Link>
                <Link to={"/collection/reshaMandi-exclusive"}>
                <div className='add-text'>
                    <div className='circule-img'>
                        <img src="https://reshamandi.com/_next/image?url=https%3A%2F%2Fdh54ynjtfu9e2.cloudfront.net%2Frm_categories%2FExclusive_Homepage-min.png&w=96&q=75" alt="" />
                    </div>
                    <p>ReshaMandi Exclusive</p>
                </div>
                </Link>
            </section> 
            :
            <section className='fiter-product'>

            <Link to={"/collection/yarns"}> <div className='add-text'>
                 <div className='circule-img'>
                     <img src="https://reshamandi.com/_next/image?url=https%3A%2F%2Fdh54ynjtfu9e2.cloudfront.net%2Frm_categories%2FYarn_Homepage-min.png&w=96&q=75" alt="Yarns" />                    </div>
                 <p>Yarns</p>
             </div></Link>
             <Link to={"/collection/apparel"}>
             <div className='add-text'>
                 <div className='circule-img'>
                     <img src="https://reshamandi.com/_next/image?url=https%3A%2F%2Fdh54ynjtfu9e2.cloudfront.net%2Frm_categories%2FApparel_Homepage-min.png&w=96&q=75" alt="Apparel" />                   </div>
                 <p>Apparel</p>
             </div></Link>
             <Link to={"/collection/fabric"}>
             <div className='add-text'>
                 <div className='circule-img'>
                     <img src="https://reshamandi.com/_next/image?url=https%3A%2F%2Fdh54ynjtfu9e2.cloudfront.net%2Frm_categories%2FFabric_Homepage-min.png&w=96&q=75" alt="Fabric" />
                 </div>
                 <p>Fabric</p>
             </div>
             </Link>
             <Link to={"/collection/home-furnishing"}>
             <div className='add-text'>
                 <div className='circule-img'>
                     <img src="https://reshamandi.com/_next/image?url=https%3A%2F%2Fdh54ynjtfu9e2.cloudfront.net%2Frm_categories%2FHome_Homepage-min.png&w=96&q=75" alt="Home Furnishing" />                </div>
                 <p>Home Furnishing</p>
             </div>
             </Link>
             <Link to={"/collection/accessory"}>
             <div className='add-text'>
                 <div className='circule-img'>
                     <img src="https://reshamandi.com/_next/image?url=https%3A%2F%2Fdh54ynjtfu9e2.cloudfront.net%2Frm_categories%2FAccessories_Homepage-min.png&w=96&q=75" alt="Accessory" />
                 </div>
                 <p>Accessory</p>
             </div>
             </Link>
            
         </section> 
            }
        </div>
    )
}

export default Choose
