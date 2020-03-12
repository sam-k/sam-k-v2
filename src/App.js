import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import ScrollToTop from "./ScrollToTop"
// import { createBrowserHistory } from "history"

import Navbar from "./components/Navbar"
import HomePage from "./HomePage"
import ProjectsPage from "./ProjectsPage"
import AboutPage from "./AboutPage"
import Footer from "./components/Footer"

class App extends React.Component {
  render() {
    return (
      <Router>
        <ScrollToTop />
        <div id='App'>
          <Navbar />
          <Switch>
            <Route path="/projects" component={ProjectsPage} />
            <Route path="/about" component={AboutPage} />
            <Route path="/" component={HomePage} />
          </Switch>
          <Footer />
        </div>
      </Router >
    )
  }
}

export default App