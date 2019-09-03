import React from 'react';
import { 
  HashRouter as Router, 
  Route } from 'react-router-dom'
import Login from './views/Login'
import Home from './views/Home';

function Admin () {
  return (
    <Router>
      <Route exact path='/' component={ Login }></Route>
      <Route path='/home' component={ Home }></Route>
    </Router>  
  )
}

export default Admin;