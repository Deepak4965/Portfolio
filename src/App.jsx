import React from 'react'
import Navbar from './components/Navbar/Navbar'
import About from './components/About/About'
import Skills from './components/Skills/Skills'
import Home from './components/Home/Home'
import Contact from './components/Contact/Contact'
import Project from './components/Project/Project'




const App = () => {
  return (
    <div className='bg-[#171d32] h-auto wfull overflow-hidden  '>
     <Navbar />
     <Home />
   <About />
   <Skills />
  <Project />
  <Contact />
 

    </div>
  )
}

export default App
