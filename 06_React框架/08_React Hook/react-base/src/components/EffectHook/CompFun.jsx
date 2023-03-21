

import React, { useState, useEffect } from 'react'

export default function CompFun() {

    const [count, setCount] = useState(0);
    const [num, setNum] = useState(10)

    /**
     * 生命周期函数
     * 1、第二个参数不存在：useEffect 类似于 componentDidMount（发请求）、componentDidUpdate 
     *      缺点：如果里面有数据请求的话，只要数据修改，就发请求
     */
    useEffect(() => {
        console.log('组件加载完成。。componentDidMount &componentDidUpdate');
        //发请求
    })

    /**
     * 2、第二个参数存在：是空数组[] 代表的是componentDidMount（发请求） 
     * 特点：只执行一次，
     */
    useEffect(() => {
        console.log('组件加载完成。。。。');
    }, [])

    /**
     * 3、第二个参数存在：是[变量,....]  值变化了，useEffect执行
     * 生命周期走不走，取决于后面的依赖，变量变化
     * [msg,count] 写多个，只要有一个变化，就执行
     */
    useEffect(() => {
        console.log('count变化啦。。。。');
    }, [count])

    /**
     * 4、卸载组件  ==>componentWillUnmount
     */
    useEffect(() => {

        function fn(){
            console.log('滚动了.....');
        }

        window.addEventListener('scroll',fn)

        // 卸载组件  ==>componentWillUnmount
        return () => {
            // 收尾的工作，清楚定时器，取消事件
            window.removeEventListener('scroll',fn)
        }

    },[])

    return (
        <div style={{height:'1000px'}}>
            <h2>函数组件</h2>
            <p>
                count:{count}---num:{num}
            </p>
            <p>
                <button onClick={() => { setCount(count + 10) }}>count+10</button>
            </p>
            <p>
                <button onClick={() => { setNum(num + 5) }}>num+5</button>
            </p>
        </div>
    )
}
