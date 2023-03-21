import React, { useState } from 'react'
import Child from './Child';

export default function YouhuaParent() {
    const [num,setNum]=useState(10);
    console.log('父组件 render');
    return (
        <div>
            <h2>YouhuaParent</h2>
            <p>
                num:{num}
            </p>
            <p>
                <button onClick={()=>{setNum(num+10)}}> num+10</button>
            </p>
            <hr />
            <Child num={num}/>
        </div>
    )
}
