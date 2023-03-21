import React, { Component } from 'react'

export default class CompClass extends Component {
    state = {
        num: 10
    }
    componentDidMount(){
        // console.log('渲染完成...只执行一次');
    }
    componentDidUpdate(){
        // console.log('数据更新完成');
    }
    componentWillUnmount(){
        // console.log('组件即将卸载');
    }
    render() {
        return (
            <div>
                <h2>类组件</h2>
                <p>num:{this.state.num}</p>
                <p>
                    <button onClick={()=>{this.setState({num:this.state.num+5})}}>修改num</button>
                </p>
            </div>
        )
    }
}
