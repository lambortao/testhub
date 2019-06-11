import React, { Component } from 'react';
import { 
  HashRouter as Router, 
  Route } from 'react-router-dom'
import Nav from '../views/nav'
import Subjects from '../views/subjects'
import Questions from '../views/questions'

class Home extends Component {
  render () {
    return (
      <Router>
        <div className='main'>
          <Nav></Nav>
          <div className="main-box">
            <Route path="/home/subjects" component={Subjects}></Route>
            <Route path="/home/questions" component={Questions}></Route>
          </div>
        </div>
      </Router>
    )
  }
}

export default Home