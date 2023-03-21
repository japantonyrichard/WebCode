



import React, { Component } from 'react'
import style from './Story.module.less'

export default class Story extends Component {
    render() {
        console.log('Story------------', this.props.story);
        return (
            <>
                <ul className={style.list}>
                    {
                        this.props.story.map(item => {
                            return (
                                <li className={style.item} key={item.informationId}>
                                    <h2 className={style.title}>
                                        {item.title}
                                    </h2>
                                    <div className={style.content}>
                                        <img src={item.picture} alt="" />
                                        <div className={style.right}>
                                            <div className={style.desc}>

                                                {item.subject}

                                            </div>
                                            <div className={style.time}>
                                                {item.publishTime}
                                            </div>
                                        </div>
                                    </div>

                                </li>
                            )
                        })
                    }


                </ul>
            </>
        )
    }
}
