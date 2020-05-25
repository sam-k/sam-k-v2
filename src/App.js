import React from "react"
import { HashRouter, Route, Switch } from "react-router-dom"

import Navbar from "./components/Navbar"
import HomePage from "./HomePage"
import ProjectsPage from "./ProjectsPage"
import AboutPage from "./AboutPage"
import WritingPage from "./WritingPage"
import Footer from "./components/Footer"

// Each entry needs its own page
import writingsData from "./data/writingsFeaturedData.json"

class App extends React.Component {
  render() {
    const writingsRoutes = writingsData.writings.map(
      item => <Route
        path={"/posts/" + item.id}
        render={(props) => <WritingPage {...props}
          id={item.id}
          title={item.title}
        />}
      />
    )

    return (
      <HashRouter basename="/">
        <div id='App'>
          <Navbar />
          <Switch>
            <Route path="/projects" component={ProjectsPage} />
            <Route path="/about" component={AboutPage} />

            {writingsRoutes}

            <Route exact path="/" component={HomePage} />
          </Switch>
          <Footer />
        </div>
      </HashRouter >
    )
  }
}

export default App
