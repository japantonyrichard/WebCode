import React, { Component } from 'react'
// 引入 fetch-jsonp
import FetchJsonp from 'fetch-jsonp'

export default class Fetch extends Component {
    // 组件加载完成，发送网络请求
    componentDidMount() {
        // 发送网络请求
        let num = 10;
        // 1、fetch get请求
        fetch('http://iwenwiki.com/api/blueberrypai/getIndexBanner.php')
            .then(res => {
                return res.json()
            })
            .then(res => {
                console.log(res);
            })
        // // 简写：
        // fetch('http://iwenwiki.com/api/blueberrypai/getIndexBanner.php')
        //     .then(res => res.json())
        //     .then(res => {
        //         console.log(res);
        //     })
        // //2. post请求 
        fetch('http://iwenwiki.com/api/blueberrypai/login.php', {
            method: 'post',
            body: 'user_id=iwen@qq.com&password=iwen1&verification_code=crfvw',
            headers: {
                'content-type': 'application/x-www-form-urlencoded'
            }
        }).then(res => res.json())
            .then(res => {
                console.log('登录', res);
            })


        // fetch('https://www.baidu.com/sugrec?prod=pc&from=pc_web&wd=apple&cb=demo')
        //     .then(res => {
        //         return res.json()
        //     })
        //     .then(res => {
        //         console.log(res);
        //     })

        // // https://www.baidu.com/sugrec?prod=pc&from=pc_web&wd=apple&cb=jQuery1102028022487479667557_1649320814410&_=1649320814420
        FetchJsonp('https://www.baidu.com/sugrec?prod=pc&from=pc_web&wd=apple&cb=demo', {
            jsonpCallback: 'cb', //后台接受的函数名  默认值callback 可以省略
            // jsonpCallbackFunction:'demo33' //前端的方法名，可加可不加
            
        })
            .then(res => res.json())
            .then(res => {
                console.log(res);
            })


            /**
             * 1. 配置package.json字段
        ​      "proxy": "http://localhost:4000",//目标地址 
        ​      缺点：只能写一次
        http://iwenwiki.com:3002/api/banner
             */
            fetch('/foo/api/banner')
            .then(res=>res.json())
            .then(res=>{
                console.log('--------------',res);
            })


    }
    render() {
        return (
            <div>Fetch</div>
        )
    }
}
