import React, { useEffect, useState } from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

// library that communicates with the backend
// used to make requests to an API, return data from it, and then perform an action with the results
import axios from 'axios'

const Experience = () => {

  // Loads frontend skills and sets values to result
  const [frontend, setFrontend]=useState([])

  useEffect(()=>{
    loadFrontend();
  },[]);

  // once the await is reached, the program continues to run while the data is extracted from the url
  // it waits for the result before it can utilize the result
  // .get makes an HTTP request to the url used for getting the data in postman
  // the results are stored within an array
  // results are then used below to display on the frontend
  const loadFrontend=async()=>{
    const result=await axios.get("http://13.56.254.156:8080/frontend/skills");
    setFrontend(result.data);
  }

  // Loads backend skills and sets values to result
  const [backend, setBackend]=useState([])

  useEffect(()=>{
    loadBackend();
  },[]);


  // once the await is reached, the program continues to run while the data is extracted from the url
  // it waits for the result before it can utilize the result
  // .get makes an HTTP request to the url used for getting the data in postman
  // the results are stored within an array
  const loadBackend=async()=>{
    const result=await axios.get("http://13.56.254.156:8080/backend/skills");
    setBackend(result.data);
  }

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
                /* maps through all skills returned from api*/
                frontend.map((frontend, index)=>(
                  <tr>
                    {/*after results are stored in array, they are used below to display on the frontend*/
                    /* name and expLevel are data returned from api request */}
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