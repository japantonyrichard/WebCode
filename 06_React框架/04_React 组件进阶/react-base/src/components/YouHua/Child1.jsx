import React, { Component } from 'react'

export default class Child1 extends Component {

    /**
     * 父组件每次setState，都得重新渲染render函数，导致子组件跟着重新渲染
     * 我们希望，子组件在没有变化的时候，不要重新渲染
     * return false; 太暴力，
     * @returns 
     */
    shouldComponentUpdate(){
        return false;
    }
   
    render() {
        console.log('Child1 组件渲染了 render....');

        return (
            <div>
                <h2>Child1</h2>
                <p>
                    父组件传来的 ：{this.props.num}
                </p>
            </div>
        )
    }
}
