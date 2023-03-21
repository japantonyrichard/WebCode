import React, { useState } from 'react'
import Child2 from './Child2';
// 引入中间仓库
import MyContext from './MyContext'

export default function ContextParent() {

    const [num, setNum] = useState(10);

    function fn(val) {
        setNum(num + val)
    }

    return (
        <div>
            <h1>祖先组件</h1>
            <p>
                num:{num}
            </p>
            <p>
                <button onClick={() => { setNum(num + 10) }}>num+10</button>
            </p>
            <hr />
            {/* 

            写法1:提出方法
            { data: num, set: fn}
            写法2：简写
            { data: num, set: (val)=>{setNum(num+val)} 
                
            */}
            <MyContext.Provider value={{ data: num, set:setNum }}>
                <Child2 />

            </MyContext.Provider>

        </div>
    )
}
