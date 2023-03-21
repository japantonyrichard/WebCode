

import React, { useState } from 'react'
import logo from '../../../assets/images/logo.jpg'
import Comment from '../Comment/Comment'
import './CartList.less'


export default function CartList(props) {

    // const [isShow,setShow]=useState(false)

    // 让评论框显示的标识
    const [currentId,setCurrentId]=useState(0);

    // 去评论，设置currentId的值  让currentId=当前item.id 
    function goComment(id){
        setCurrentId(id)
    }

    return (
        <div className='cart-list'>

            {
                props.list.map((item,index) => {
                    return (
                        <div className="outer" key={item.id}>
                            <div className="cart-item">
                                {/* 图片 */}
                                <img className='cart-img' src={item.img} alt="" />

                                {/* 房屋基本信息 */}
                                <div className="cart-info">
                                    <div>标题：{item.title}</div>
                                    <div>户型：{item.huxing}</div>
                                    <div>价格：{item.price}</div>

                                </div>

                                {/* 评论 */}
                                <div className="comment-btn">
                                    {
                                        item.iscommit?
                                        <div className='gray'>已评论</div>:
                                        <div onClick={goComment.bind(null,item.id)}>评论</div>
                                    }
                                </div>

                            </div>

                            <div>
                                currentId:{currentId}
                            </div>
                            <div>
                                item.id:{item.id}
                            </div>

                            {/* 评论框 */}
                            {
                                currentId===item.id?<Comment  changCurent={goComment} index={index} />:''
                            }

                            {/* {
                                isShow?<Comment />:''
                            } */}
                            


                        </div>
                    )
                })
            }

        </div>
    )
}
