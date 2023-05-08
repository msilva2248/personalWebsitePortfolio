import React from 'react'

import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experience from './components/experience/Experience.jsx'
/*import Services from './components/services/Services'*/
import Portfolio from './components/portfolio/Portfolio'
/*import Testimonials from './components/testimonials/Testimonials'*/
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <>
        {/* Import all of the components we created */}
        <Header />
        <Nav />
        <About />
        <Experience />
        {/*<Services />*/}
        <Portfolio />
        {/*<Testimonials />*/}
        <Contact />
        <Footer />
    </>
  )
}

export default App