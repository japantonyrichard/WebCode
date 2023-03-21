import React, { Component } from 'react'

export default class Child3 extends Component {

    state={
        count:100,
    }

    /**
     *true  false   
     * this.props 上一刻的
     * nextProps  nextState下一刻的
     */
    shouldComponentUpdate(nextProps,nextState){
        // console.log('this.state:',this.state);
        // console.log('nextState:',nextState);
        // console.log(this.props);
        // console.log(nextProps);
        // {num: 15, msg: '固定的'}
        for (const key in nextProps) {
            if(nextProps[key]!==this.props[key]){
                return true; //允许去渲染
            }
        }
        for (const key in nextState) {
            if (nextState[key]!==this.state[key]) {
                return true; //允许去渲染
            }
        }
        return false;
    }
   
    render() {
        console.log('Child3 组件渲染了 render....');

        return (
            <div>
                <h2>Child3</h2>
                <p>
                    父组件传来的 ：{this.props.num}
                </p>
                <p>子组件自己的数据：{this.state.count}</p>
                <p>
                    <button onClick={()=>{this.setState({count:this.state.count+5})}}>修改自己的count</button>
                </p>
            </div>
        )
    }
}
