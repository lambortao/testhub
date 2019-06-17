import React, { Component } from 'react';
import { 
  HashRouter as Router, 
  Route } from 'react-router-dom'
import Nav from './nav'
import Subjects from './subjects'
import Questions from './questions'
import AddQuestion from './addquestion'

class Home extends Component {
  render () {
    return (
      <Router>
        <div className='main'>
          <Nav></Nav>
          <div className="main-box">
            <Route path="/home/subjects" component={Subjects}></Route>
            <Route path="/home/questions/:id" component={Questions}></Route>
            <Route path="/home/addquestion/:id/:number" component={AddQuestion}></Route>
          </div>
        </div>
      </Router>
    )
  }
}

export default Home