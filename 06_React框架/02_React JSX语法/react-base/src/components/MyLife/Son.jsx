import React, { Component } from 'react'

export default class Son extends Component {
    state = {
        num: 10
    }

    componentWillMount() {
        console.log('组件将要被渲染，', this, this.state.num);
    }
    componentDidMount() {
        // 一般做：请求后台数据；操作DOM
        console.log('组件渲染完成(组件进入运行状态) ', this, this.state.num);
    }
    shouldComponentUpdate() {
        console.log('是否允许组件更新 ', this, this.state.num);
        return true
    }
    componentWillUpdate() {
        console.log('组件将要开始更新 ', this, this.state.num);
    }
    componentDidUpdate() {
        console.log('组件更新完成(重新进入运行状态) ', this, this.state.num);
    }
    componentWillReceiveProps() {
        console.log('组件接收props更新', this, this.state.num);
    }
    componentWillUnmount() {
        // 收尾工作：清除定时器；取消事件绑定
        console.log('组件将要卸载', this, this.state.num);

    }
    changeNum = () => {
        this.setState({
            num: this.state.num + 5
        })
    }
    render() {
        return (
            <div>
                <h2>Son子组件</h2>
                <p>num：{this.state.num}</p>
                <p>父组件向子组件传递的数据：{this.props.msg}</p>
                <p>
                    {/* <button onClick={this.changeNum}>修改num</button> */}
                    <button onClick={() => { this.setState({ num: this.state.num + 5 }) }}>修改num</button>
                </p>
            </div>
        )
    }
}
