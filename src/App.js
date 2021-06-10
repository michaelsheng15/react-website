import MainCard from './Components/Home'

import 'bootstrap/dist/css/bootstrap.min.css';

import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import SubCard from './Components/Experience';


class App extends Component {
  render() {

    let routes = (
      <Switch>
        <Route exact path="/home" component={MainCard} />
        <Route exact path="/experience" component={SubCard} />

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
