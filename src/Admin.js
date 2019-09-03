import React, { useState, useEffect } from 'react';
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

function Example() {
  const [ count, setCount ] = useState(0);

  useEffect(() => {
    document.title = `这是第${count}次修改标题`
  })

  return (
    <div>
      <p>{ count }</p>
      <button onClick={ () => setCount(count + 1) }>加一</button>
    </div>
  )
}

export default Admin;