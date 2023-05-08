import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        {/* Create links to LinkedIn and GitHub with blank targets so they open in a new tab */
        /* Also includes their respective icons */}
        <a href='https://www.linkedin.com/in/matthew-silva-115758173/' target='_blank'><BsLinkedin/></a>
        <a href='https://github.com/msilva2248?tab=repositories' target='_blank'><FaGithub/></a>
    </div>
  )
}

export default HeaderSocials