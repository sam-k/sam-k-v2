import React from "react";
import { HashRouter, Redirect, Route, Switch } from "react-router-dom";
import withTracker from './components/withTracker';

import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import ProjectsPage from "./pages/ProjectsPage";
import AboutPage from "./pages/AboutPage";
import WritingsPage from "./pages/WritingsPage";
import PostPage from "./pages/PostPage";
import NotFoundPage from "./pages/NotFoundPage";
import Footer from "./components/Footer";

// Each post needs its own page.
import writingsData from "./data/writingsListData.json";

import ReactGA from "react-ga";

class App extends React.Component {
  render() {
    ReactGA.initialize("UA-176007616-1");
    ReactGA.pageview(window.location.pathname + window.location.search);

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
    );

    return (
      <HashRouter basename="/">
        <div id='App'>
          <Navbar />

          <Switch>
            <Route path="/projects" component={withTracker(ProjectsPage)} />
            <Route path="/about" component={withTracker(AboutPage)} />
            <Route path="/posts" component={withTracker(WritingsPage)} />
            {postRoutes}
            <Route exact path="/" component={withTracker(HomePage)} />
            <Route path="/404" component={withTracker(NotFoundPage)} />
            <Redirect to="/404" />
          </Switch>

          <Footer />
        </div>
      </HashRouter>
    );
  }
}

export default App;
