import React, { Component } from 'react'

export default class About extends Component {

  nextPage=()=>{
    this.props.history.go(1)
    // goForward()
  }
  upPage=()=>{
    // this.props.history.go(-1)
    this.props.history.goBack();

  }
  reflesh=()=>{
    this.props.history.go(0)
  }
  goNews=()=>{
    this.props.history.push('/news')
  }
  goNewsReplace=()=>{
    this.props.history.replace('/news')
  }
  render() {
    return (
      <div>
          <h2>About</h2>
          <p>
            <button onClick={this.nextPage}>下一页</button>
          </p>
          <p>
            <button onClick={this.upPage}>上一页</button>
          </p>
          <p>
            <button onClick={this.reflesh}>刷新</button>
          </p>
          <p>
            <button onClick={this.goNews}>到新闻去</button>
          </p>
          <p>
            <button onClick={this.goNewsReplace}>到新闻去 replace</button>
          </p>
      </div>
    )
  }
}
