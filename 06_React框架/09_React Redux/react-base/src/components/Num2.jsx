import React from 'react'
import { connect } from 'react-redux'
import { ADD } from '../redux/actions/action-type';


function Num(props) {

    function changeNum() {
        props.setCount(10)
    }
    return (
        <div>
            <h2>Num 操作</h2>
            <p>num :{props.count}</p>
            <p>
                <button onClick={changeNum}>修改Num</button>
            </p>
        </div>
    )
}
const mapStateToProps = state => ({
    count: state.num
})
// dispatch({type:'',payload})
const mapDispatchToProps = dispatch => ({
    setCount: (val) => {
        dispatch({ type: ADD, payload: val })
    }
})

// 1、 connect(参数)(UI组件)
// 2 、参数：两个回调函数 
// 第一个回调函数： 获取到仓库里的所有数据
// 第一个回调函数： dispatch()
// 3、回调函数必须要有返回值，返给子组件
export default connect(mapStateToProps, mapDispatchToProps)(Num)