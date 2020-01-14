import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './components/home';
import Login from './containers/login';

export default class App extends Component {
  render() {
    return <Router>
      <Switch>
        <Route path='/' exact component={Home}></Route>
        <Route path='/login' exact component={Login}></Route>
      </Switch>
    </Router>
  }
}