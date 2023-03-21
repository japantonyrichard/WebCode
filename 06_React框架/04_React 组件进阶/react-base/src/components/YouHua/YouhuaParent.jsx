import React, { Component } from 'react'
import Child1 from './Child1'
import Child2 from './Child2';
import Child3 from './Child3';
import Child4 from './Child4';
import UnMount from './UnMount';

export default class YouhuaParent extends Component {
    state = {
        num: 10,
        isShow: true
    }
    render() {
        console.log('父组件渲染了....');
        return (
            <div>
                <h1>父组件</h1>
                <p>
                    num:{this.state.num}
                </p>
                <p>
                    <button onClick={() => { this.setState({ num: this.state.num + 5 }) }}>修改num</button>
                </p>
                <hr />
                <Child1 num={this.state.num} />
                <hr />
                <Child2 num={this.state.num} msg='固定的' />
                <hr />
                <Child3 num={this.state.num} msg='固定的' />
                <hr />
                <Child4 />
                <hr />
                <button onClick={() => { this.setState({ isShow: !this.state.isShow }) }}>显示隐藏</button>
                {
                    this.state.isShow ? <UnMount /> : ''
                }
                <div style={{height:'1000px'}}>

                </div>
            </div>
        )
    }
}
