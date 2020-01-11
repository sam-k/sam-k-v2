import React from 'react'
import './App.css'

import Navbar from './components/Navbar'
import Intro from './components/Intro'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Skills />
      <Projects />
      <Footer />
    </div>
  )
}

export default App