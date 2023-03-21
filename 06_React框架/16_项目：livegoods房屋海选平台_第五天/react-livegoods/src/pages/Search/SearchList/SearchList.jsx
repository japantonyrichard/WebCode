import React from 'react'
import style from './SearchList.module.less'

export default function SearchList(props) {
    return (
        <div className={style.house}>
            <h3 className={style.title}>热门房源</h3>
            <ul className={style.list}>
                {
                    props.list.map(item => {
                        return (
                            <li className={style.item} key={item.id}>

                                <img src={item.img} alt="" height={200} width={'100%'} />

                                <div className={style.info}>
                                    <div className={style.desc}>
                                        <div>{item.title}</div>
                                        <div>楼层：{item.floor}-户型：{item.huxing}</div>
                                    </div>
                                    <div className={style.type}>
                                        <span className={style.zu}>{item.type}</span>
                                        <div className={style.price}>{item.price} 元</div>
                                    </div>
                                </div>
                            </li>
                        )
                    })
                }

            </ul>
        </div>
    )
}
