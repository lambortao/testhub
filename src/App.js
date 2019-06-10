import React, { Component } from 'react';
import { 
  HashRouter as Router, 
  Route } from 'react-router-dom'

import Home from './views/home'

class App extends Component {
  render() {
    return (
      <Router>
        <Route path="/" component={Home}></Route>
      </Router>
    )
  }
}

export default App;