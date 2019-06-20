import React, { Component } from 'react';
import { Button, Input, Icon, message, Affix } from 'antd';
import __post from '../api'
import '../scss/question.scss'
const { TextArea } = Input;

// 根据数据生成dom结构
function CreateDom(props) {
  let lsQuestionDom = [];
  // 循环已经生成的dom结构
  for (let index = 0; index < props.data.length; index++) {
    // 首先生成答案
    let answerDom = props.data[index].answer.map((element, indexAnswer) => 
      <div className="answer-single" key={`${index}-${indexAnswer}`}>
        <Icon 
        type={props.data[index].answer[indexAnswer].selected ? 'check' : 'minus'}
        onClick={() => props.changeEvent(!props.data[index].answer[indexAnswer].selected, [index, indexAnswer, 'selected'])} />
        <Input 
        placeholder="答案"
        value={props.data[index].answer[indexAnswer].content}
        onChange={(e) => props.changeEvent(e.target.value, [index, indexAnswer, 'content'])} />
      </div>
    );
    // 再生成问题及注释
    let questionHeader = (
      <header>
        <Input 
        placeholder="问题" 
        value={props.data[index].header.name}
        onChange={(e) => props.changeEvent(e.target.value, [index, 'name'])} />
        <TextArea 
        placeholder='问题描述-可选'
        rows={4}
        value={props.data[index].header.commit}
        onChange={(e) => props.changeEvent(e.target.value, [index, 'commit'])} />
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
    lsQuestionDom.push(singleQuestionDom);
  }
  return lsQuestionDom;
}

class AddQuestion extends Component {
  constructor() {
    super();
    this.state = {
      question: []
    }
  }
  componentWillMount() {
    /**
     * 参数为：
     * 1 => 四个答案的选择题
     * 2 => 判断题
     * 其他 => 生成对应答案数量的选择题
     */
    const questionId = parseInt(this.props.match.params.type);
    // 生成对应的多少道题目
    const questionNumber = parseInt(this.props.match.params.number);
    this.createQuestion(questionId, questionNumber);
  }
  // 生成选项
  crateAnswer = (num) => {
    let answer = [];
    const judge = num === 2 ? ['对', '错'] : '';
    for (let index = 0; index < num; index++) {
      answer.push({
        content: num === 2 ? judge[index] : '',
        selected: false
      })
    }
    return answer;
  }
  // 生成题目的数据
  createQuestion = (id, number) => {
    id = id === 1 ? 4 : id;
    let newQuestion = this.state.question;
    for (let index = 0; index < number; index++) {
      newQuestion.push({
        header: {
          name: '',
          commit: ''
        },
        answer: this.crateAnswer(id)
      });
    }
    this.setState({
      question: newQuestion
    })
  }

  getData = (e, key) => {
    let question = this.state.question;
    if (key.length === 2) {
      question[key[0]].header[key[1]] = e;
    } else if (key.length === 3) {
      question[key[0]].answer[key[1]][key[2]] = e;
    }
    this.setState({ question });
  }

  sendQuestion = () => {
    console.log(JSON.stringify(this.state.question));
    const questionData = {
      data: JSON.stringify(this.state.question),
      subject: parseInt(this.props.match.params.question)
    }
    __post('question/addQuestion', questionData).then(res => {
      if (res.msg === 'true') {
        message.success('保存成功')
          .then(() => window.location.href = `#/home/questions/${parseInt(this.props.match.params.question)}`);
      }
    })
  }
  render () {
    return (
      <div className='addquestion-box'>
        <div className="addquestion-list">
          <div className="addquestions">
            <CreateDom
            data={this.state.question}
            changeEvent={this.getData} />
          </div>
          <div className="btn-box">
            <Button 
            type="primary"
            onClick={() => this.sendQuestion()}>保存</Button>
            <Button type="primary">保存并添加选择模板</Button>
            <Button type="primary">保存并添加判断模板</Button>
          </div>
        </div>
      </div>
    )
  }
}

export default AddQuestion