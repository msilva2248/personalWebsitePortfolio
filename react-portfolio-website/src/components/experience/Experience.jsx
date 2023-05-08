import React, { useEffect, useState } from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const Experience = () => {

  return (
    <section id='experience'>
      <h5>Skills</h5>
      <h2>My Experience</h2>

      {/* Create another class specific to the experience section */}
      <div className="container experience__container">

        {/* Creates a class for the frontend experience section */}
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
        </div>

        {/* END OF FRONTEND */}

        {/* Creates a class for the backend experience section */}
        <div className="experience__backend">
          <h3>Backend Development</h3>
        </div>
      </div>
    </section>
  )
}

export default Experience