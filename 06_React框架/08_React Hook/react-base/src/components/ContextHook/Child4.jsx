import React, { useContext } from 'react'
import MyContext from './MyContext'

export default function Child4() {
    const value = useContext(MyContext)
    console.log(value);
    return (
        <div>
            <h4>Child4---函数组件读取祖先的数据和方法</h4>
            <p>
                {value.data}
            </p>
            <p>
                <button onClick={() => { value.set(200) }}>修改祖先组件的num</button>
            </p>
        </div>
    )
}
