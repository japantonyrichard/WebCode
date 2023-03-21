
import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { getCart } from '../../api'
import CommonHeader from '../../components/CommonHeader/CommonHeader'
import CartList from './CartList/CartList'

import MyContext from './MyContext'

function Cart(props) {
  // 定义状态
  const [list, setList] = useState([]);

  // 生命周期
  useEffect(() => {
    async function getCartList() {
      try {
        const res = await getCart({ user: props.username });
        setList(res.list)
        console.log(res.list);
      } catch (error) {
        console.log(error);
      }
    }

    getCartList()
  }, [])

  // 修改指定item 的评论状态 IsCommit  list:[{},{isCommit:true},{},{}]
  function changeIsCommit(index) {
    // console.log(index);
    list[index].iscommit = true; //手动改
    setList(list);//重新渲染界面
  }

  return (
    <div>
      {/* 公共头部 */}
      <CommonHeader>购物车</CommonHeader>

      <MyContext.Provider value={{changeIsCommit:changeIsCommit}}>
        {/* 列表渲染 */}
        <CartList list={list} />
      </MyContext.Provider>


    </div>
  )
}



export default connect(state => ({
  username: state.user.username
}))(Cart)