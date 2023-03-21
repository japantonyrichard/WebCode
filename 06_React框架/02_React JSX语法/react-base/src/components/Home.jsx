import React from "react";
import Header from "./Header";
import Footer from "./Footer";

// 函数组建
function Home(){
    return(
        <div>
            <h1>我是首页</h1>
            {/* 使用子組件 : 调用子组件时通过属性形式传递 */}
            <Header title = {'首页头部'} msg = '123'/>
            <Footer name = '首页'/>
        </div>
    )
}

export default Home