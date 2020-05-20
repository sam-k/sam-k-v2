import React from "react"
import { HashRouter, Route, Switch } from "react-router-dom"
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
      <HashRouter basename="/">
        <ScrollToTop />
        <div id='App'>
          <Navbar />
          <Switch>
            <Route path="/projects" component={ProjectsPage} />
            <Route path="/about" component={AboutPage} />
            <Route exact path="/" component={HomePage} />
          </Switch>
          <Footer />
        </div>
      </HashRouter >
    )
  }
}

export default App
