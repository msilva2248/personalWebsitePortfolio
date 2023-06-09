import React from 'react'
import './header.css'
import CTA from './CTA'
import Headshot from '../../assets/Headshot.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    /* HTML5 semantic tag */
    <header>
      {/* To wrap everything inside the general container class */
      /* Include another header class, specific to this header component */}
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Matthew Silva</h1>
        <h5>Fullstack Developer</h5>
        <CTA />
        <HeaderSocials />

        {/* Displays our headshot image */}
        <div className="me">
          <img src={Headshot} alt="Headshot" />
        </div>

        {/* Create a link for scrolling down to the contact section */}
        <a href='#contact' className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header