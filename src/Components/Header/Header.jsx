import React, { useState } from 'react'
import './Header.css'
import logo from '../../assets/logo.png'
import bars from '../../assets/bars.png'
import { Link } from 'react-scroll'

export default function Header() {

  const mobile= window.innerWidth<=768 ? true : false;
  const [menuOpened, setMenuOpened]= useState(false)
  return (

    <div className='header'>
        
      <img src={logo} className='logo'/>

      {(menuOpened===false && mobile===true) ? (
        <div style={{backgroundColor: 'var(--appColor)', padding: '0.5rem', borderRadius: '5px'}}
        onClick={ () => setMenuOpened(true)} >
        <img src={bars} style={{width: "1.5rem", height: "1.5rem"}}/>
        </div>) : (<ul className='header-menu'>
      <li onClick={ () => setMenuOpened(false)}><Link
       onClick={ () => setMenuOpened(false)}
       activeClass='active'
       to='home'
       span={true}
       smooth={true}>
      Home</Link></li>
      <li onClick={ () => setMenuOpened(false)}><Link
      onClick={ () => setMenuOpened(false)}
      to='programs'
      span={true}
      smooth={true}
      >Programes</Link></li>
      <li onClick={ () => setMenuOpened(false)}><Link
      onClick={ () => setMenuOpened(false)}
      to='reasons'
      span={true}
      smooth={true}
      >Why use</Link></li>
      <li onClick={ () => setMenuOpened(false)}><Link
      onClick={ () => setMenuOpened(false)}
      to='plans'
      span={true}
      smooth={true}
      >Plans</Link></li>
      <li > <Link
      onClick={ () => setMenuOpened(false)}
      to='testomonials'
      span={true}
      smooth={true}
      >
        Testomonials</Link>
        </li>
    </ul>
)}

      


    </div>
  )
}
