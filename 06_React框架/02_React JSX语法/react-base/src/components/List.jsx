import React, { Component } from "react";
import Header from "./Header";

export default class List extends Component {
    render() {
        return (
            <div>
                <h1>我是列表</h1>
                <Header title = '列表头部'/>
            </div>
        )
    }
}