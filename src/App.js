import MainCard from "./Components/Home";

import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React, { Component } from "react";
import { BrowserRouter, Switch, Route, Redirect, HashRouter } from "react-router-dom";
import ExperienceCard from "./Views/Experience";
import Projects from "./Views/Projects";
import AboutMe from "./Views/AboutMe";

class App extends Component {


  render() {
    let routes = (
      <HashRouter basename={process.env.PUBLIC_URL}>
        <Route exact path="/home" component={MainCard}/>
        <Route exact path="/experience" component={ExperienceCard} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/about-me" component={AboutMe} />
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
      </HashRouter>
    );

    return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <div>{routes}</div>
      </BrowserRouter>
    );
  }
}

export default App;
