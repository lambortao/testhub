import React, { Component } from 'react';
import { Button, Drawer, Input, message } from 'antd';
import __post from '../api'
import '../scss/subjects.scss'
const { TextArea } = Input;

function SubjectModule(props) {
  let subjectDom = props.data.map((element, index) => 
    <section key={index} className='subject' onClick={props.goQuestion.bind(this, element.id)}>
      <header>
        <h3>{element.name}</h3>
      </header>
      <footer>
        <p>单选 - {element.single}</p>
        <p>多选 - {element.multiple}</p>
        <p>判断 - {element.judge}</p>
      </footer>
    </section>
  )
  return subjectDom;
}

class Subjects extends Component {
  state = { 
    visible: false,
    name: '',
    commit: '',
    subjectsData: []
  }

  componentWillMount() {
    this.getQuestionList();
  }
  getQuestionList = () => {
    __post('subject/getSubjectList', {}).then(res => {
      console.log(res);
      this.setState({
        subjectsData: res
      });
    })
  }
  goQuestion(num) {
    window.location.href = `#/home/questions/${num}`;
  }
  inputName = (e) => {
    this.setState({
      name: e.target.value
    })
  }
  inputCommit = (e) => {
    this.setState({
      commit: e.target.value
    });
  }
  postSubject () {
    if (this.state.name === '') {
      message.error('科目名称不能为空');
      return;
    } else if (this.state.commit === '') {
      message.error('注释不能为空');
      return;
    }
    const subjectData = {
      name: this.state.name,
      commit: this.state.commit
    }
    __post('subject/addSubject', subjectData).then(res => {
      if (res.msg === 'true') {
        this.setState({
          visible: false
        }, () => {
          message.success('新增科目成功').then(() => this.getQuestionList());
        });
      }
    })
  }
  render () {
    return (
      <div className='subjects-list'>
        <SubjectModule
        data={this.state.subjectsData}
        goQuestion={this.goQuestion}
        />
        <div className="add-subject">
          <Button 
          type="primary" 
          shape="circle" 
          icon="plus" 
          size='large' 
          onClick={() => this.setState({visible: true})} />
        </div>
        <Drawer
          title="新增科目"
          placement="right"
          closable={false}
          width='340'
          onClose={() => this.setState({visible: false})}
          visible={this.state.visible}
        >
          <Input 
          placeholder="科目名称"
          onChange={this.inputName}
          value={this.state.name} />
          <br />
          <br />
          <TextArea
            placeholder="科目注释"
            autosize={{ minRows: 6, maxRows: 12 }}
            onChange={this.inputCommit}
            value={this.state.commit}
          />
          <br />
          <br />
          <Button 
          type="primary" 
          size='large'
          onClick={this.postSubject.bind(this, {})}>提交</Button>
        </Drawer>
      </div>
    )
  }
}

export default Subjects