import React, { useState } from 'react';
import './Logi.css'
import { Link } from 'react-router-dom';
const Login = () => {
    const [optSyt, setSyt] = useState(true);
    const [otp, setOtp] = useState('');
    const [text, setText] = useState(false);
    const Continue = () => {
        if (otp === '') {
            setText(true);


        } else {
            setSyt(false)
            setText(false)


        }
    }
    return (
        <div className='row-shaw'>
            <main id='Login-Register'>
                <div className='up-img'>
                    <div className='topper'>
                        <img src="https://www.industrybuying.com/static/images/topbnr.jpg" alt="" />
                    </div>
                    <div className='img-coll'>
                    <div className="tower">
                        <img src="https://www.industrybuying.com/static/images/icon1.png" alt="" />
                        <p>Get Exclusive Deals & Offers </p>
                    </div>
                    <div className="tower">
                        <img src="https://www.industrybuying.com/static/images/icon2.png" alt="" />
                        <p> Unlock 11 Lac+ Products </p>
                    </div>
                    <div className="tower">
                        <img src="https://www.industrybuying.com/static/images/icon3.png" alt="" />
                        <p>Buy Now Pay Later Shop on Credit </p>
                    </div>
                    <div className="tower">
                        <img src="https://www.industrybuying.com/static/images/icon4.png" alt="" />
                        <p>Avail EMI Facility </p>
                    </div>
                    <div className="tower">
                        <img src="https://www.industrybuying.com/static/images/icon5.png" alt="" />
                        <p>Cancellation Refund within 24 Hours </p>
                    </div>
                    </div>
                </div>
                <div className='Register'>
                    <div className='drama'>
                        <h3>Login/Register</h3>
                        <div className='lower-drama'></div>
                    </div>
                    {optSyt ? <div className='before-login'>
                        <img src="https://www.industrybuying.com/static/images/security.svg" alt="" />
                        <input type="text" placeholder='Enter your Number or Email' value={otp} onChange={(e) => setOtp(e.target.value)} />
                         
                        {text && <p style={{ color: "red", fontSize: "13px" }}>Please  Enter your Number or Email </p>}
                        <button className='btn-2' onClick={Continue}>Continue</button>
                    </div>
                        :
                        <div className='before-login'>
                            <img src="https://www.industrybuying.com/static/images/reset-password.svg" alt="" />
                           <p>Enter OTP Code sent to <span> {otp}  </span></p>
                           <div className='iput-package'>
                            <input type="text" placeholder='Enter your OTP' />
                            <div className='child-hero'>
                            <Link onClick={()=>setSyt(!optSyt)}><p>Change Email/Phone </p></Link>
                            <Link><p>Resend OTP </p></Link>
                            </div>
                            </div>
                            <button className='btn-2'>Continue</button>
                        </div>
                    }
                    <div className='lower-power' >
                        <div className='lower-2'></div>
                        <p>OR Continue with</p>
                        <div className='lower-2'></div>
                    </div>
                    <div className='login-fg'>
                        <button> <img src="https://www.outsystems.com/forge/DownloadResource.aspx?FileName=&ImageBinaryId=43951" alt="" width="30px" height="25px" />Google</button>
                    </div>
                </div>

            </main>
            <div className='close-1'>
                <Link to="/">  <i class="ri-close-line"></i></Link>
            </div>
        </div>
    )
}

export default Login
