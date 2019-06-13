import React, { Component } from 'react';
import '../scss/subjects.scss'
class Subjects extends Component {
  goQuestion(num) {
    this.props.history.push(`/home/questions/${num}`);
  }
  render () {
    return (
      <div className='subjects-list'>
        <section className='subject' onClick={this.goQuestion.bind(this, 1)}>
          <header>
            <h3>测试标题</h3>
          </header>
          <footer>
            <p>单选 - 20</p>
            <p>多选 - 200</p>
            <p>判断 - 278</p>
          </footer>
        </section>
      </div>
    )
  }
}

export default Subjects