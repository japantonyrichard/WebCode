import React, { useState } from 'react'
import CompClass from './CompClass'
import CompFun from './CompFun'

export default function EffectParent() {
    const [isShow, setIsShow] = useState(true)
    const [isShow2, setIsShow2] = useState(true)
    return (
        <div style={{ height: '2000px' }}>
            <h1>Effect Hook</h1>
            <p>
                <button onClick={() => { setIsShow(!isShow) }}>显示隐藏 类组件</button>
            </p>
            <p>
                <button onClick={() => { setIsShow2(!isShow2) }}>显示隐藏 函数组件</button>
            </p>
            <hr />
            {
                isShow ? <CompClass /> : ''
            }
            <hr />
            {
                isShow2 ? <CompFun /> : ''
            }


        </div>
    )
}
