import React from 'react'

export default  function Hello(){
    // console.log(this);  //此处是undefined，严格模式 StrictMode
    return (
        <div>
            <h2>我是第一个函数组件</h2>
            <span>123</span>
        </div>
    )
}

// export default Hello