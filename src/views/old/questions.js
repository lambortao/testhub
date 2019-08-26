import React, { Component } from 'react';
import { Button } from 'antd';
import __post from '../../api'
import '../../scss/question.scss'

function QuestionDom(props) {
  console.log(props);
  let QuestionDom = props.data.map((element, index) => 
    <div className="question" key={index}>
      <header>
        <h4 className="topic">{`${index+1}、${element.question_text}`}</h4>
        <small className="commit">{element.commit}</small>
      </header>
      <div className="answer-list">
        <ul>
          {
            JSON.parse(element.answer).map((answerElement, answerIndex) => 
              <li 
              key={answerIndex} 
              data-type={answerIndex + 1}
              className={answerElement.selected ? 'correct': ''}
              >{answerElement.content}</li>
            )
          }
        </ul>
      </div>
    </div>
  )
  return QuestionDom;
}

class Questions extends Component {
  state = {
    question: {
      single: [],
      judge: [],
      multiple: []
    }
  }
  componentWillMount() {
    this.getQuestionList();
  }
  getQuestionList = () => {
    __post('question/getQuestionList', {
      id: parseInt(this.props.match.params.id)
    }).then(res => {
      this.setState({
        question: res.data
      });
    })
  }
  addQuestion() {
    const questionId = parseInt(this.props.match.params.id);
    window.location.href = `#/home/addquestion/${questionId}/1/1`
  }
  render () {
    return (
      <div className='questions-list'>
        <div className="questions-box single-choice">
          <header>
            <h2>单选题</h2>
          </header>
          <div className="questions-box">
            <QuestionDom
            data={this.state.question.single} />
          </div>
        </div>
        <div className="questions-box multiple-choice">
          <header>
            <h2>多选题</h2>
          </header>
          <div className="questions-box">
            <QuestionDom
            data={this.state.question.multiple} />
          </div>
        </div>
        <div className="questions-box judge">
          <header>
            <h2>判断题</h2>
          </header>
          <div className="questions-box">
            <QuestionDom
            data={this.state.question.judge} />
          </div>
        </div>
        <div className="add-subject">
          <Button 
          type="primary" 
          shape="circle" 
          icon="plus" 
          size='large' 
          onClick={this.addQuestion.bind(this, {})} />
        </div>
      </div>
    )
  }
}

export default Questions