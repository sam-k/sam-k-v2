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
      <Intro />
      <Projects />
      <Experience />
      <Footer />
    </div>
  )
}

export default App