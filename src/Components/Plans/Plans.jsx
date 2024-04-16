import React from 'react'
import './Plans.css'
import {plansData} from '../../data/plansData'
import whiteTike from '../../assets/whiteTick.png'
export default function Plans() {
  return (
    <div className='plans-container'>
        <div className='blur plan-bluer-1 '></div>
        <div className='blur plan-bluer-2 '></div>
        <div className='programs-header'>
               <span className='stroke-text'>READY TO START</span>
               <span>YOUR JOURNEY</span>
               <span className='stroke-text'>YOUR JOURNEY</span>
        </div>
        <div className='plans'>
          {plansData.map((plan, index)=>
            <div className='plan' key={index}>
                 {plan.icon}
                 <span>{plan.name}</span>
                 <span> $ {plan.price}</span>

                 <div className='features'>
              {plan.features.map((feature,index)=>
                 <div className='feature'>
                        <img src={whiteTike} alt="whiteTike" />
                        <span key={index}>{feature}</span>
                 </div>
              )}
          </div>
                <div>
                    <span> See more benefits -> </span>
                    <button className='btn'> Join Now </button>

                </div>
            </div>
          )}
        </div>
    </div>
  )
}
