import React, { useState } from 'react'

export default function CompFun() {
    console.log('this', this);
    //const [变量名,修改变量的方法]=useState(初始值)
    const [count, setCount] = useState(1);
    const [msg,setMsg]=useState('')

    function add() { 
        // 函数组件当中，（1）异步的，合并操作  （2）事件环当中,也是异步的
        setCount(count+10)     
        setCount(count+10)
        setCount(count+10)

        setTimeout(() => {
            setCount(count+5)
            setCount(count+6)
        }, 0);
    }
    return (
        <div>
            <h2>函数组件</h2>
            <p>
                {/* 使用 */}
                count:{count}---msg：{msg}
            </p>
            <p>
                {/* 修改状态 */}
                <button onClick={add}>count+10</button>
                <button onClick={()=>{setMsg('Hello')}}>修改msg</button>

            </p>
        </div>
    )
}
