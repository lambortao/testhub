import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Nav extends Component {
  render () {
    return (
      <header className='main-header'>
        <figure>
          <h2>标题</h2>
        </figure>
        <nav>
          <Link to='/home/subjects'>科目</Link>
          <Link to='/home/subjects'>成绩</Link>
        </nav>
      </header>
    )
  }
}

export default Nav