import React, { Component } from 'react'

export default class Child2 extends Component {

    /**
     *true  false   
     * this.props 上一刻的
     * nextProps 下一刻的
     */
    shouldComponentUpdate(nextProps,nextState){
        // console.log(this.props);
        // console.log(nextProps);
        // {num: 15, msg: '固定的'}
        for (const key in nextProps) {
            if(nextProps[key]!==this.props[key]){
                return true; //允许去渲染
            }
        }
        return false;
    }
   
    render() {
        console.log('Child2 组件渲染了 render....');

        return (
            <div>
                <h2>Child2</h2>
                <p>
                    父组件传来的 ：{this.props.num}
                </p>
            </div>
        )
    }
}
