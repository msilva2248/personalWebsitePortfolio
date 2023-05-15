import React, { useEffect, useState } from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'
import axios from 'axios'

const Experience = () => {

  // Loads frontend skills and sets values to result
  const [frontend, setFrontend]=useState([])

  useEffect(()=>{
    loadFrontend();
  },[]);

  const loadFrontend=async()=>{
    const result=await axios.get("http://13.56.254.156:8080/frontend/skills");
    setFrontend(result.data);
  }

  // Loads backend skills and sets values to result
  const [backend, setBackend]=useState([])

  useEffect(()=>{
    loadBackend();
  },[]);

  const loadBackend=async()=>{
    const result=await axios.get("http://13.56.254.156:8080/backend/skills");
    setBackend(result.data);
  }

  // Loads about me info and sets values to result
  // const [about, setAbout]=useState([])

  // useEffect(()=>{
  //   loadAbout();
  // },[]);

  // const loadAbout=async()=>{
  //   const result=await axios.get("http://localhost:8080/about/me");
  //   setAbout(result.data);
  // }

  return (
    <section id='experience'>
      <h5>Skills</h5>
      <h2>My Experience</h2>

      {/* Create another class specific to the experience section */}
      <div className="container experience__container">

        {/* Creates a class for the frontend experience section */}
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Skill Name</th>
                <th scope="col">Experience</th>
              </tr>
            </thead>
            <tbody>
              {
                frontend.map((frontend, index)=>(
                  <tr>
                    <td>{frontend.name}</td>
                    <td>{frontend.expLevel}</td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>

        {/* END OF FRONTEND */}

        {/* Creates a class for the backend experience section */}
        <div className="experience__backend">
          <h3>Backend Development</h3>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Skill Name</th>
                <th scope="col">Experience</th>
              </tr>
            </thead>
            <tbody>
              {
                backend.map((backend, index)=>(
                  <tr>
                    <td>{backend.name}</td>
                    <td>{backend.expLevel}</td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}

export default Experience