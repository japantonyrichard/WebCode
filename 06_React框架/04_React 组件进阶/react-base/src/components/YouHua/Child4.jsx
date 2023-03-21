import React, { Component } from 'react'

// 不再继承自于Component，而是React.PureComponent
export default class Child4 extends React.PureComponent {
    render() {
        console.log('Child4 render-----------------');
        return (
            <div>
                <h3>Child4</h3>
            </div>
        )
    }
}
