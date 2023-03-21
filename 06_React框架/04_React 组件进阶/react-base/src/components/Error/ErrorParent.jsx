import React, { Component } from 'react'
import Child1 from './Child1'
import Child2 from './Child2'
import ErrorComp from './ErrorComp'

export default class ErrorParent extends Component {
    render() {
        return (
            <div>
                <h1>错误边界</h1>
                <hr />

                <ErrorComp>
                    <Child1 />
                </ErrorComp>
                <hr />
                <ErrorComp>
                    <Child2 />
                </ErrorComp>
            </div>
        )
    }
}
