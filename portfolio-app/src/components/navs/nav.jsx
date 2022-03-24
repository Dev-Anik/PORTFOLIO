import React from 'react'
import {BiHome} from 'react-icons/bi'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBookAlt} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import {BiMailSend} from 'react-icons/bi'
import { useState } from 'react'
import './nav.css'
const Nav = () => {
    const [active, setActive] = useState('header')
  return (
    <>
    <div className="nav">
        <a href="#first" onClick={()=>setActive('header')} className={active==='header'? 'active':''}><BiHome /></a>
        <a href="#second" onClick={()=>setActive('navs')} className={active==='navs'? 'active':''}><AiOutlineUser/></a>
        <a href="#third" onClick={()=>setActive('skills')} className={active==='skills'? 'active':''}><BiBookAlt/></a>
        <a href="#"><RiServiceLine/></a>
        <a href="#"><BiMailSend/></a>
  
    </div>
    </>
  )
}

export default Nav