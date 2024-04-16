import React from 'react'
import './Hero.css'
import Header from '../Header/Header'
import hero_image from '../../assets/hero_image.png'
import hero_image_back from '../../assets/hero_image_back.png'
import heart from '../../assets/heart.png'
import calories from '../../assets/calories.png'
import { motion } from 'framer-motion'
import NumberCounter from 'number-counter'

export default function Hero() {
  const transition= {type: 'spring', duration: 3}
  const mobile= window.innerWidth<=768 ? true : false;
  return (

    <div className='hero' id='home'>
       <div className='blur hero-blur'></div>
      <div className='left-h'>
        <Header/>

        <div className='the-best-ad'>
          <motion.div initial= {{left: mobile ? '165px' : '238px'}} whileInView={{left: '8px'}} transition={{...transition, type: 'tween'}}></motion.div>
          <span>The best fitness club in the town</span>
        </div>

        <div className='hero-text'>
          <div>
            <span className='strock-text'>Shape</span>
            <span>You</span>
            </div>

            <div>
                <span>Ideal body</span>
            </div>

            <div>
                <span> In here we will help you to shape and build your ideal body and live up your life to fullest</span>
            </div>
        </div>


        <div className='figures'>
          <div >
            <div className='num'><NumberCounter end={140} start={100} delay='4' preFix='+'/></div>
            <div className='exp'>EXPERT COACHES</div>
        </div>

          <div >
          <div className='num'><NumberCounter end={978} start={800} delay='4' preFix='+'/></div>
            <div className='exp'>MEMBERS JOINED</div>
          </div>

          <div >
          <div className='num'><NumberCounter end={50} start={0} delay='4' preFix='+'/></div>
            <div className='exp'>FITNESS PROGRAMS</div>
          </div>
        </div>

        <div className='hero-buttons'>
          <buttons className='btn'>Get Started</buttons>
          <buttons className='btn'>Learn More</buttons>
        </div>

      </div>



      <div className='right-h'>
        <button className='btn'>Join Now</button>

        <motion.div 
        initial= {{right: '-1rem'}}
        whileInView={{right: '4rem'}}
        transition={transition}
        className='heart-rate'>
           <img src={heart}/>
           <div className='heart'>Heart Rate</div>
            <div className='pbm'>116 pbm</div>
        </motion.div>


         <img src={hero_image} className='hero_image'/>
         <motion.img 
         initial= {{right: '11rem'}}
         whileInView={{right: '20rem'}}
         transition={transition}
         src={hero_image_back} className='hero_image_back' />

         <motion.div 
         initial= {{right: '37rem'}}
         whileInView={{right: '28rem'}}
         transition={transition}
         className='calories'>
          <img src={calories}/>
          <div>
          <span className='cal'>CaloriesBurned</span>
          <span className='kc'>220 kcal</span>
          </div>
         </motion.div>

        </div>
    </div>
  )
}
