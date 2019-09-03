import React from 'react'
import { 
  HashRouter as Router, 
  Route, 
  Switch } from 'react-router-dom'
import Header from '../../components/Header'
import Subjects from '../Subjects'
import QuestionList from '../QuestionList'
import AddQuestion from '../AddQuestion'

function Home() {
  return (
    <Router>
      <Header />
      <div className="main-box">
        <Switch>
          <Route exact path='/home/' component={ Subjects }></Route>
          <Route path='/home/questionlist/:id' component={ QuestionList }></Route>
          <Route path='/home/addquestion/:id' component={ AddQuestion }></Route>
        </Switch>
      </div>
    </Router>
  )
}

export default Home