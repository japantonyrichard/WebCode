import React, { Component } from 'react'
export class Comp extends Component {
    render() {
        return (
            <div>
                <h2>子组件</h2>
                <p>
                    num:{this.props.num}
                </p>
            </div>
        )
    }
}
// 定义高阶组件 增强功能
// 功能：给原来组件添加一个数据  num=200
function fn(Comp) {
    return class extends Component {
        render() {
            return (
                <Comp num='200'/>
            )
        }
    }
}
const NewComp=fn(Comp); //调用高阶组件，增强原来组件
export default NewComp;//默认导出增强之后的新组件 