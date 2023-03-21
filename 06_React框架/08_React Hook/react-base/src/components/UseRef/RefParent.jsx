import React, { useRef } from 'react'
import Child from './Child';

export default function RefParent() {

    // 类创建ref : (1)获取Dom (2)获取子组件实例
    // 方法1：
    const myRef = React.createRef();
    // const myChildRef = React.createRef(); // react-dom.development.js:67 Warning: Function components cannot be given refs.
    // 方法2：
    const myUseRef= useRef();
    // const myChildRef= useRef(); // react-dom.development.js:67 Warning: Function components cannot be given refs.
    

    function getDom(){
        // 3)获取
        console.log(myRef.current);
        console.log(myUseRef.current);
        // console.log(myChildRef.current);

    }

    return (
        <div>
            <h1>RefParent</h1>
            <button onClick={getDom}>获取元素</button>
            {/* 绑定到DOM上 */}
            <p ref={myRef}>我是p</p>
            <div ref={myUseRef}>我是Div</div>

            <hr />
            {/* <Child ref={myChildRef}/> */}
            
        </div>
    )
}
