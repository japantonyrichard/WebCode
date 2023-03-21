// 高阶组件
// 功能：封装 计算组件加载时间
import React from 'react';

function showTime(Comp) {
    return class extends React.Component {
        constructor() {
            super()
            this.state = {
                startTime: new Date().getTime(), // 获取当前时间
                lodingTime: 0
            }
        }

        // 页面加载完成
        componentDidMount() {
            let endTime = new Date().getTime(); //结束时间
            this.setState({
                lodingTime: endTime - this.state.startTime
            })

        }
        render(){
            return(
                <Comp lodingTime={this.state.lodingTime}/>
            )
        }
    }
}

export default showTime