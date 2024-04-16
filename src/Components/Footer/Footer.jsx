import React from 'react'
import './Footer.css'
import gitHub from'../../assets/github.png'
import instigram from '../../assets/instagram.png'
import LinkedIn from '../../assets/linkedin.png'
import logo from '../../assets/logo.png'
export default function Footer() {
  return (
    <div className='footer-container'>
       <hr/>
       <div className='footer'>
          <div className='social-links'>
          <img src={gitHub} alt="" />
          <img src={instigram} alt="" />
          <img src={LinkedIn} alt="" />
          </div>

          <div className='logo-f'>
               <img src={logo} alt="" />
          </div>
       </div>
         <div className='blur blur-f-1'></div>
         <div className='blur blur-f-2'></div>

    </div>
  )
}
