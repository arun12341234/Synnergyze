import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div>
       <nav id='filter'>
            <main className='regit'>
                <h1>*  Login Form  *</h1>
                {/* <div className='sec-to'>
                <i class="ri-user-fill"></i>
                    <input type="text" placeholder='Enter Your Name' id='name'  required/>
                </div> */}
                <div className='sec-to'>
                <i class="ri-mail-fill"></i>
                    <input type="email" placeholder='Enter Your Email Address' id='email' required/>
                </div>
                <div className='sec-to'>
                <i class="ri-lock-fill"></i>
                    <input type="password" placeholder='Enter Your Password' id='password' required/>
                </div>
                <button className='btnn-2'>Login</button>
                <div className='last-page'>
                    <p>Don't  Have  an account?<Link to="/registration">Registration here</Link></p>
                </div>
                
               
            </main>
        </nav>
    </div>
  )
}

export default Login
