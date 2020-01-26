import React from "react"

import Navbar from "./components/Navbar"
import Intro from "./components/Intro"
import Experience from "./components/Experience"
import Projects from "./components/Projects"
import Footer from "./components/Footer"

function App() {
  return (
    <div id='App'>
      <Navbar />
      <div id='break-navbar' />
      <Intro />
      <div id='break-intro' />
      <Projects />
      <div id='break-projects' />
      <Experience />
      <Footer />
    </div>
  )
}

export default App