import React, { useRef } from 'react'
import './Join.css'
import emailjs from '@emailjs/browser';

export default function Join() {
    const form =useRef()

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm('service_jzb9vi2', 'template_brc3sgq', form.current, {
            publicKey: 'jo72lEkxuzVo9YFLi',
          })
          .then(
            () => {
              console.log('SUCCESS!');
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
          );
      };
    console.log(form)
  return (
    
    <div className='join' id="join-us">
        <div className='left-J'>
            <hr/>
            <div>
                <span className='stroke-text'>READY TO</span>
                <span>LEVEL UP</span>
            </div>

            <div>
                <span>YOUR BODY</span>
                <span className='stroke-text'>WITH US?</span>
            </div> 
        </div>
        <div className='right-J'>
            <form className='email-container' ref={form} onSubmit={sendEmail}>
                <input type='email' name='user_email' placeholder='Enter your email address' />
                <button className='btn btn-J' style={{width:'8rem'}}> Join Now</button>
            </form>
        </div>
    </div>
  )
}
