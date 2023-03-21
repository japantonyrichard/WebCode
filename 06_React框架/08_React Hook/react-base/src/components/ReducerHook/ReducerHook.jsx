

import React, { useReducer, useState } from 'react'

export default function ReducerHook() {
    const [num, setNum] = useState(10);

    const [count,dispatch]=useReducer(reducer,100)

    // 定义 reducer 分支判断 判断action.type 符合哪一个，就执行哪个操作
    function reducer(state,action){
        switch (action.type) {
            case 'add':
                return state+action.val;
            case 'sub':
                return state-action.val;
            default:
                return state;
        }
    }

    function countAdd(){
        // {type:'add',payload:10}   {type:'sub',payload:5}
        // dispatch 去触发指定的action
        dispatch({type:'add',val:100})
    }
    function countSub(){
        dispatch({type:'sub',val:100})
    }

    return (
        <div>
            <h2>ReducerHook</h2>
            <p>num:{num}</p>
            <p><button onClick={() => { setNum(num + 10) }}>num+10</button></p>
            <p><button onClick={() => { setNum(num - 10) }}>num-10</button></p>

            <hr />
            <p>count:{count}</p>
            <p><button onClick={countAdd}>count+100</button></p>
            <p><button onClick={countSub}>count-100</button></p>



        </div>
    )
}
