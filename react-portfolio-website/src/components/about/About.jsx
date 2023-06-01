import React, { useEffect, useState } from 'react'
import './about.css'
import Headshot from '../../assets/Headshot.png'
import {FaAward} from 'react-icons/fa'
import {VscFolderLibrary} from 'react-icons/vsc'
import axios from 'axios'

const About = () => {

  // Loads about me info and sets values to result
  const [about, setAbout]=useState([])

  useEffect(()=>{
    loadAbout();
  },[]);

  const loadAbout=async()=>{
    const result=await axios.get("http://13.56.254.156:8080/about/me");
    setAbout(result.data);
  }

  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

    {/* Create another about class specific to the about component */}
      <div className="container about__container">

        {/* This will contain and display the image */}
        <div className="about__me">
          <div className="about__me-image">
            <img src={Headshot} alt="About Image" />
          </div>
        </div>

        {/* This will contain the information about me */}
        <div className="about__content">
          <div className="about__cards">

            {/* These articles will contain the different contents like experience, 
            projects, etc. and their respective icons */}
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              {
                about.map((about, index)=>(
                  <small>{about.experience}</small>
                ))
              }
            </article>

            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              {
                about.map((about, index)=>(
                  <small>{about.projects}</small>
                ))
              }
            </article>
          </div>

            {/* This will display the paragraph section in the about me */}
          <p>
            {
              about.map((about, index)=>(
                <small>{about.intro}</small>
              ))
            }
          </p>

            {/* a tag creates a hyperlink, href contains the URL to the destination */
            /* This will be for the button in about me that takes you to the contact section */}
          <a href='#contact' className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About