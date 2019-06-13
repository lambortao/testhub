import React, { Component } from 'react';
import { Button } from 'antd';
import '../scss/question.scss'

class Questions extends Component {
  render () {
    return (
      <div className='questions-list'>
        <div className="single-choice">
          <header>
            <h2>单选题</h2>
            <Button icon="plus">新增</Button>
          </header>
          <div className="questions-box">
            <div className="question">
              <header>
                <h4 className="topic">1、这是一道测试题目</h4>
                <small className="commit">这是测试题目的注释</small>
              </header>
              <div className="answer-list">
                <ul>
                  <li className='correct' data-type='1'>这是第一个答案</li>
                  <li data-type='2'>这是第二个答案</li>
                  <li data-type='3'>这是第三个答案</li>
                  <li data-type='4'>这是第四个答案</li>
                </ul>
              </div>
            </div>
            <div className="question">
              <header>
                <h4 className="topic">2、这是一道测试题目</h4>
                <small className="commit">这是测试题目的注释</small>
              </header>
              <div className="answer-list">
                <ul>
                  <li className='correct' data-type='1'>这是第一个答案</li>
                  <li data-type='2'>这是第二个答案</li>
                  <li data-type='3'>这是第三个答案</li>
                  <li data-type='4'>这是第四个答案</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="multiple-choice">
          <header>
            <h2>多选题</h2>
            <Button icon="plus">新增</Button>
          </header>
          <div className="questions-box">
            <div className="question">
              <header>
                <h4 className="topic">1、这是一道测试题目</h4>
                <small className="commit">这是测试题目的注释</small>
              </header>
              <div className="answer-list">
                <ul>
                  <li className='correct' data-type='1'>这是第一个答案</li>
                  <li className='correct' data-type='2'>这是第二个答案</li>
                  <li className='correct' data-type='3'>这是第三个答案</li>
                  <li data-type='4'>这是第四个答案</li>
                </ul>
              </div>
            </div>
            <div className="question">
              <header>
                <h4 className="topic">2、这是一道测试题目</h4>
                <small className="commit">这是测试题目的注释</small>
              </header>
              <div className="answer-list">
                <ul>
                  <li className='correct' data-type='1'>这是第一个答案</li>
                  <li className='correct' data-type='2'>这是第二个答案</li>
                  <li data-type='3'>这是第三个答案</li>
                  <li data-type='4'>这是第四个答案</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="judge">
        <header>
            <h2>判断题</h2>
            <Button icon="plus">新增</Button>
          </header>
          <div className="questions-box">
            <div className="question">
              <header>
                <h4 className="topic">1、这是一道测试题目</h4>
              </header>
              <div className="answer-list">
                <ul>
                  <li data-type='1'>对</li>
                  <li className='correct' data-type='2'>错</li>
                </ul>
              </div>
            </div>
            <div className="question">
              <header>
                <h4 className="topic">2、这是一道测试题目</h4>
                <small className="commit">这是测试题目的注释</small>
              </header>
              <div className="answer-list">
                <ul>
                  <li className='correct' data-type='1'>对</li>
                  <li data-type='2'>错</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Questions