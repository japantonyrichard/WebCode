
import React, { Component } from 'react'

export default class Time1 extends Component {
    constructor() {
        super()
        this.state = {
            startTime: new Date().getTime(),// 获取当前时间
            lodingTime: 0
        }
    }
    // 页面加载完成
    componentDidMount() {
        let endTime = new Date().getTime();//结束时间
        this.setState({
            lodingTime: endTime - this.state.startTime
        })

    }

    render() {
        return (
            <div>
                <h2>Time1子组件 加载耗时----{this.state.lodingTime}</h2>
            </div>
        )
    }
}
