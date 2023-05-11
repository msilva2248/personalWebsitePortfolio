import React, { useState } from 'react'
import './footer.css'
import {BsLinkedin} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
      {/* a creates hyperlink, href holds the link to go back to the top of the page */}
      <a href="#" className='footer__logo'>Matthew Silva</a>

      {/* ul tag creates an unordered list */}
      <ul className='permalinks'>
        {/* li tag is for a list item */}
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      {/* Creates LinkedIn footer social */}
      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/matthew-silva-115758173/" target='_blank'><BsLinkedin/></a>
      </div>

      {/* Creates the copyright tag at the bottom */}
      <div className="footer__copyright">
        <small>&copy; Matthew Silva. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer