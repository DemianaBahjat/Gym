import React from 'react'
import './Reasons.css'
import image1 from '../../assets/image1.png'
import image2 from '../../assets/image2.png'
import image3 from '../../assets/image3.png'
import image4 from '../../assets/image4.png'
import np from '../../assets/nb.png'
import adidas from '../../assets/adidas.png'
import nike from '../../assets/nike.png'
import tike from '../../assets/tick.png'


export default function Reasons() {
  return (
    <div className='reasons' id="reasons">
          <div className='left-r'>
            <img src={image1} alt=""   />
            <img src={image2} alt=""   />
            <img src={image3} alt=""   />
            <img src={image4} alt=""   />
          </div>
          <div className='right-r'>
            <span>SOME REASONS</span>

            <div>
              <span className='stroke-text'>WHY</span>
              <span> CHOOSE US?</span>
            </div>
            <div className='details-r'>
            <div>
              <img src={tike} alt="tike" />
              <span>OVER 140+ EXPERT COACHS</span>
            </div>

            <div>
              <img src={tike} alt="tike" />
              <span>TRAIN SMARTER AND FASTER THAN BEFORE</span>
            </div>

            <div>
              <img src={tike} alt="tike" />
              <span>1 FREE PROGRAM FOR NEW MEMBER</span>
            </div>

            <div>
              <img src={tike} alt="tike" />
              <span>RELIABLE PARTNERS</span>
            </div>
            </div>
            <span style={{color:'var(--gray)  ',fontWeight:'normal'}}>OUR PARTNERS</span>
            <div className='Partners'>
               <img src={np} alt="np" />
               <img src={adidas} alt="adidas" />
               <img src={nike} alt="nike" />
            </div>
          </div>
    </div>
  )
}
