import React, { Component } from 'react'

export default class UnMount extends Component {
  state = {
    timerId: null
  }
  // 开启定时器
  componentDidMount() {

    this.state.timerId = setInterval(() => {
      console.log('倒计时....');
    }, 1000);

    // 添加滚动事件监听
    window.addEventListener('scroll',this.scrollFn)
  }
  // 组件卸载 --收尾工作
  componentWillUnmount() {
    // 清楚定时器
    clearInterval(this.state.timerId)
    console.log(this.state.timerId);
    this.setState({
      timerId:null
    })

    // 取消监听事件
    window.removeEventListener('scroll',this.scrollFn)

  }

  // 滚动事件
  scrollFn(){
    console.log('滚动高度：',document.documentElement.scrollTop);
  }



  render() {
    return (
      <div>
        <h2>UnMount</h2>
        <div style={{height:'1000px'}}></div>
      </div>
    )
  }
}
