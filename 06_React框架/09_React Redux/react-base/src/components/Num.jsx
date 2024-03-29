import React from 'react'
import { connect } from 'react-redux'
import { ADD, SUB } from '../redux/actions/action-type';
import { addCountAction, subAsyncAction, subCountAction } from '../redux/actions/actions';


function Num(props) {

    function changeNum() {
        // 第一种：异步
        setTimeout(() => {
            props.AddCount(10)
        }, 1000);
    }
    return (
        <div>
            <h2>Num 操作</h2>
            <p>num :{props.count}</p>
            <p>
                <button onClick={changeNum}>+ Num</button>
            </p>
            <p>
                <button onClick={() => { props.SubCount(5) }}>- Num</button>
            </p>
        </div>
    )
}


// 1、 connect(参数)(UI组件)
// 2 、参数：两个回调函数 
// 第一个回调函数： 获取到仓库里的所有数据
// 第一个回调函数： dispatch()
// 3、回调函数必须要有返回值，返给子组件
export default connect(state => ({
    count: state.num,
}), dispatch => ({
    AddCount: val => dispatch(addCountAction(val)),
    SubCount: val => dispatch(subAsyncAction(val)),
    // getMsg:val => dispatch(getMsgAsyncAction(val)),
}))(Num)