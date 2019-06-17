import React, { Component } from 'react';
import { Button, Input, Icon } from 'antd';
import '../scss/question.scss'
const { TextArea } = Input;

class AddQuestion extends Component {
  constructor() {
    super();
    this.state = {
      question: [],
      questionDom: []
    }
  }
  componentWillMount() {
    /**
     * 参数为：
     * 1 => 四个答案的选择题
     * 2 => 判断题
     * 其他 => 生成对应答案数量的选择题
     */
    const questionId = parseInt(this.props.match.params.id);
    // 生成对应的多少道题目
    const questionNumber = parseInt(this.props.match.params.number);
    this.createData(questionId, questionNumber);
  }
  // 生成选项
  crateAnswer = (num) => {
    let answer = [];
    for (let index = 0; index < num; index++) {
      answer.push({
        content: '',
        selected: false
      })
    }
    return answer;
  }
  // 生成数据
  createData = (id, number) => {
    let answerData = null;
    switch (id) {
      case 1: 
        // 选择题
        answerData = this.crateAnswer(4);
        break;
      case 2:
        // 判断题
        answerData = this.crateAnswer(2);
        break;
      default:
        // 选择题
        answerData = this.crateAnswer(id);
        // 默认选择题
        break;
    }
    const initialQuestion = {
      header: {
        name: '',
        commit: ''
      },
      answer: answerData
    }
    let newQuestion = this.state.question;
    for (let index = 0; index < number; index++) {
      newQuestion.push(initialQuestion);
    }
    
    this.setState({
      question: newQuestion
    }, () => {
      console.log(this.state.question);
      this.createDom();
    })
  }
  // 根据数据生成dom结构
  createDom = () => {
    // 循环已经生成的dom结构
    for (let index = 0; index < this.state.question.length; index++) {
      // 首先生成答案
      let answerDom = this.state.question[index].answer.map((element, indexAnswer) => 
        <div className="answer-single" key={indexAnswer}>
          <Icon 
          type={this.state.question[index].answer[indexAnswer].selected ? 'check' : 'minus'}
          onClick={() => this.getData(!this.state.question[index].answer[indexAnswer].selected, [index, indexAnswer, 'selected'])} />
          <Input 
          placeholder="答案"
          value={this.state.question[index].answer[indexAnswer].content}
          onChange={(e) => this.getData(e.target.value, [index, indexAnswer, 'content'])} />
        </div>
      );
      // 再生成问题及注释
      let questionHeader = (
        <header>
          <Input 
          placeholder="问题" 
          value={this.state.question[index].header.name}
          onChange={(e) => this.getData(e.target.value, [index, 'name'])} />
          <TextArea 
          placeholder='问题描述-可选'
          rows={4}
          value={this.state.question[index].header.commit}
          onChange={(e) => this.getData(e.target.value, [index, 'commit'])} />
        </header>
      );
      let singleQuestionDom = (
        <div className="addquestion-single" key={index}>
          {questionHeader}
          <div className="answer-list">
            {answerDom}
          </div>
        </div>
      )
      let lsQuestionDom = this.state.questionDom;
      lsQuestionDom.push(singleQuestionDom);
      this.setState({
        questionDom: lsQuestionDom
      });
    }
  }
  getData = (e, key) => {
    // console.log(e);
    let question = this.state.question;
    console.log(question);
    if (key.length === 2) {
      question[key[0]].header[key[1]] = e;
    } else if (key.length === 3) {
      question[key[0]].answer[key[1]][key[2]] = e;
    }
    let newQuestion = Object.assign({}, question);
    this.setState({
      question: newQuestion
    });
  }
  render () {
    return (
      <div className='addquestion-box'>
        <div className="addquestion-list">
          <div className="addquestions">{this.state.questionDom}</div>
          <div className="btn-box">
            <Button type="danger">保存</Button>
            <Button type="danger">新增选项</Button>
            <Button type="primary">保存并添加选择模板</Button>
            <Button type="primary">保存并添加判断模板</Button>
          </div>
        </div>
      </div>
    )
  }
}

export default AddQuestion