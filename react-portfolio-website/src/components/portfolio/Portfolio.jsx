import React from 'react'
import './portfolio.css'
import VideoGame from '../../assets/VideoGame.jpg'
import RaiderRed from '../../assets/RaiderRed.jpg'
import Elevator from '../../assets/Elevator.jpg'
import Mirror from '../../assets/Mirror.png'
import Website from '../../assets/Website.png'

/* Array to dynamically generate portfolio items */
const data = [
  {
    id: 1,
    image: VideoGame,
    title: 'Video Game Rental Database',
    github: 'https://github.com/msilva2248/VideoGameRentalDatabase',
    demo: ''
  },

  {
    id: 2,
    image: RaiderRed,
    title: 'RaiderMeet Mobile App',
    github: 'https://github.com/msilva2248/RaiderMeetAppDevelopment',
    demo: ''
  },

  {
    id: 3,
    image: Elevator,
    title: 'P1 Processing Elevator',
    github: 'https://github.com/msilva2248/p1.Matthew.Silva',
    demo: ''
  },

  {
    id: 4,
    image: Mirror,
    title: 'P2 Processing Magic Mirror',
    github: 'https://github.com/msilva2248/p2.Matthew.Silva',
    demo: ''
  },

  {
    id: 5,
    image: Website,
    title: 'Personal Website Portfolio',
    github: 'https://github.com/msilva2248/personalWebsitePortfolio',
    demo: ''
  }
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      {/* Creates class specific to portfolio section */}
      <div className="container portfolio__container">
        {/* JavaScript to map through the data array */}
        {
          data.map(({id, image, title, github, demo}) => {
            return (
              /* Keeps all portfolio items within the same article, along with their images */
              <article key={id} className='portfolio__item'>
                <div className="portfolio__item-img">
                  <img src={image} alt={title} />
                </div>
                  <h3>{title}</h3>
                    <div className='portfolio__item-cta'>                
                      {/* a creates hyperlink, href contains the URL to github repo or live demo */
                      /* Also includes a blank target so each open in a new tab */}
                      <a href={github} className='btn' target='_blank'>GitHub</a>
                      {/* <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a> */}
                    </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio