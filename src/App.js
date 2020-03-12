import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

import Navbar from "./components/Navbar"
import HomePage from "./HomePage"
import ProjectsPage from "./ProjectsPage"
import AboutPage from "./AboutPage"
import Footer from "./components/Footer"

class App extends React.Component {
  render() {
    return (
      <Router>
        <div id='App'>
          <Navbar />
          <Switch>
            <Route path="/projects">
              <ProjectsPage />
            </Route>
            <Route path="/about">
              <AboutPage />
            </Route>
            <Route path="/">
              <HomePage />
            </Route>
          </Switch>
          <Footer />
        </div>
      </Router>
    )
  }
}

export default App