import React, { Component } from 'react';
import { 
  HashRouter as Router, 
  Route } from 'react-router-dom'
import Login from './views/login'
import Nav from './views/nav'
import Subjects from './views/subjects'
import Questions from './views/questions'

class App extends Component {
  render() {
    return (
      <Router>
        <Route path="/login" component={Login}></Route>
        <div className='main'>
          <Nav></Nav>
          <div className="main-box">
            <Route path="/subjects" component={Subjects}></Route>
            <Route path="/questions" component={Questions}></Route>
          </div>
        </div>
      </Router>
    )
  }
}

export default App;