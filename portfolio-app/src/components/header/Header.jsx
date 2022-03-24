import React from 'react'
import './header.css'
import CL from './cl.jsx'
import Social from './socials.jsx'
import MYSELF from '../../assets/myself.png'


const Header = () => {
  return (
    <>
    <div id="first">
    <div className="header">
        <h5>Hi! I am</h5>
        <h1>Tariqul Islam</h1>
        <h5>Fullstack Developer</h5>
        <CL />
  </div>

  <div className="myself">
        <img src={MYSELF} alt="myself" />
  </div>

   <Social />

 <div className="scroll-down">
        <a > Scroll Down </a>
   </div>
   </div>
    </>
  )
}

export default Header