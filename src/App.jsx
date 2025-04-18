import { useState } from 'react'
import React from 'react'

import Navbar from './components/navbar/Navbar'
import About from './components/about/About'
import WorkExperience from './components/portfolio/WorkExperience'
import Education from './components/portfolio/Education'
import Projects from './components/portfolio/Projects'
import Skills from './components/portfolio/Skills'
import Footer from './components/footer/Footer'
import Contact from './components/contact/Contact'


function App() {
 
  return (
    <>              
   <Navbar/>
   <About/>
   <WorkExperience/>
   <Education/>
   <Projects/>
   <Skills/>
  <Contact/>
   <Footer/>
    </>
   
  )
}

export default App
