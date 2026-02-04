import { useState } from 'react'
import Navbar from './components/navbar.jsx'
import Herosection from './components/Herosection'
import About from './components/About.jsx'
import { i } from 'framer-motion/client'
import Projects from './components/Projects.jsx'
import Contact from './components/contact.jsx'



function App() {
  return (
    <div>
      <Navbar />
      <Herosection/>
      <About/>
      <Projects/>
      <Contact/>
    </div>
  )
}

export default App
