import React, { Component } from 'react'

export default class Item extends Component {
    render() {
        return (
            // <React.Fragment>
            //     <td>语文</td>
            //     <td>数学</td>
            //     <td>英语</td>
            // </React.Fragment>
            // 简写
            <>
                <td>语文</td>
                <td>数学</td>
                <td>英语</td>
            </>
        )
    }
}
