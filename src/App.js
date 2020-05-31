import React from "react"
import { HashRouter, Redirect, Route, Switch } from "react-router-dom"

import Navbar from "./components/Navbar"
import HomePage from "./pages/HomePage"
import ProjectsPage from "./pages/ProjectsPage"
import AboutPage from "./pages/AboutPage"
import WritingsPage from "./pages/WritingsPage"
import PostPage from "./pages/PostPage"
import NotFoundPage from "./pages/NotFoundPage"
import Footer from "./components/Footer"

// Each post needs its own page.
import writingsData from "./data/writingsListData.json"

class App extends React.Component {
  render() {
    const postRoutes = writingsData.writings.map(
      item => <Route
        path={"/post/" + item.id}
        render={
          (props) => <PostPage {...props}
            id={item.id}
            title={item.title}
            subtitle={item.subtitle}
            date={item.date}
            purpose={item.purpose}
            description={item.description}
            img={item.img}
            text={item.text}
          />
        }
      />
    )

    return (
      <HashRouter basename="/">
        <div id='App'>
          <Navbar />
          <Switch>
            <Route path="/projects" component={ProjectsPage} />
            <Route path="/about" component={AboutPage} />
            <Route path="/posts" component={WritingsPage} />
            {postRoutes}
            <Route exact path="/" component={HomePage} />
            <Route path="/404" component={NotFoundPage} />
            <Redirect to="/404" />
          </Switch>
          <Footer />
        </div>
      </HashRouter >
    )
  }
}

export default App
