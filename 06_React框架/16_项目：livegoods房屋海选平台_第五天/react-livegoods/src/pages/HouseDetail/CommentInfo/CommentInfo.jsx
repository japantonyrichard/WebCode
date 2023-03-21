import React from 'react'
import style from './CommentInfo.module.less'
import { Rate } from 'antd';


export default function CommentInfo(props) {
    return (
        <div className={style['comment-list']}>
            {
                props.comment.map(item => {
                    return (
                        <div className={style['comment-item']} key={item.id}>
                            <div>电话：{item.tel}</div>
                            {/* <div>星星：--{item.star}--<Rate disabled defaultValue={item.star} /></div> */}<div>星星：--{item.star}--
                                {
                                    // 2 2>2
                                    [1, 2, 3, 4, 5].map((i, index) => {
                                        return (<i className='iconfont icon-star' style={{ color: item.star >= i ? 'yellow' : '' }} key={index}></i>)
                                    })
                                }

                            </div>
                            <div>评论内容：{item.content}</div>
                        </div>
                    )
                })
            }
        </div>

    )
}
