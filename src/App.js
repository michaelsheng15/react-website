import MainCard from './Components/Home'

import 'bootstrap/dist/css/bootstrap.min.css';

import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import ExperienceCard from './Views/Experience';
import Projects from './Views/Projects';
import Hackathons from './Views/Hackathons';



class App extends Component {
  render() {

    let routes = (
      <Switch>
        <Route exact path="/home" component={MainCard} />
        <Route exact path="/experience" component={ExperienceCard} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/hackathons" component={Hackathons} />


        <Route exact path="/" >
          <Redirect to="/home" />
        </Route>
      </Switch>
    )

    return (
      <BrowserRouter>
        <div>
          {routes}
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
