import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import {BiMessageSquareDetail} from 'react-icons/bi'
import {MdOutlineBusinessCenter} from 'react-icons/md'
import { useState } from 'react'

const Nav = () => {
  /* useState value is activeNav, update function is setActiveNav */
  /* Active state determined by "#" */
  const [activeNav, setActiveNav] = useState('#')
  return (
    /* HTML5 tag */
    <nav>
      {/* a tag to define hyperlink, href holds the URL */
      /* Includes their respective icons */}

      {/* If the activeNav is equal to #, give it the active class, and if not, give it nothing */
      /* The onclick ensures the active state is reset after returning to an element */}
      <a href='#' onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiOutlineHome/></a>
      
      {/* When one is clicked, it sets the state value to their respective value */
      /* If the state is about or experience, etc., give it the active class. If not, give it nothing */}
      <a href='#about' onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser/></a>
      <a href='#experience' onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><BiBook/></a>
      <a href='#portfolio' onClick={() => setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''}><RiServiceLine/></a>
      <a href='#contact' onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><BiMessageSquareDetail/></a>
      <a href='./services.html'><MdOutlineBusinessCenter/></a>
    </nav>
  )
}

export default Nav