import React from 'react'
import { Link,useHistory } from 'react-router-dom'
import style from './House.module.less'


export default function House(props) {
    const  history=useHistory();
    // 去详情页
    function toDetail(id){
        // console.log(id);  第二种方式：编程式导航
        history.push('/detail/'+id);
    }
    return (
        <div className={style.house}>
            <h3 className={style.title}>热门房源</h3>
            <ul className={style.list}>
                {
                    props.list.map(item => {
                        return (
                            <li className={style.item} key={item.id} onClick={toDetail.bind(null,item.id)}>
                                {/* 方法一：标签式导航 */}
                                {/* <Link to={'/detail/'+item.id}> */}
                               

                                <img src={item.imgUrl} alt="" height={200} width={'100%'} />

                                <div className={style.info}>
                                    <div className={style.desc}>
                                        <div>{item.address}</div>
                                        <div>{item.huxing}</div>
                                    </div>
                                    <div className={style.type}>
                                        <span className={style.zu}>{item.type}</span>
                                        <div className={style.price}>{item.price} 元</div>
                                    </div>
                                </div>
                                {/* </Link> */}
                            </li>
                        )
                    })
                }

            </ul>
        </div>
    )
}
