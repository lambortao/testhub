import React, { Component } from 'react';
import { 
  HashRouter as Router, 
  Route } from 'react-router-dom'
import './scss/index.scss'
import Home from './views/old/home'
import Login from './views/old/login'

class App extends Component {
  render() {
    return (
      <Router>
        <Route path="/login" component={Login}></Route>
        <Route path="/home" component={Home}></Route>
      </Router>
    )
  }
}

export default App;