


import React, { useContext, useState } from 'react'
import { Input, Rate } from 'antd';

import MyContext from '../MyContext';

const { TextArea } = Input;

export default function Comment(props) {
    const [txt, setTxt] = useState('');
    const [score, setScore] = useState(0);

    // 获取评分
    function getVal(val) {
        setScore(val)
    }

    const value = useContext(MyContext);
    // console.log(value);
    // 评论
    function submit() {
        // 1、获取输入内容，打分  ==》发送后台 isCommit ==>true
        // console.log(txt, score);
        if (txt !== '' && score > 0) {
            // 2、请求后端
            // 3、添加评论成功了， （1）评论==》已评论  （2）并且隐藏评论区
            // 隐藏评论区，触发父组件里的修改 currentId 方法，让 currentId !=当前item.id 就隐藏
            props.changCurent(0);
            // （1）评论==》已评论,通知父组件去重新请求数据 props.index=>爷爷组件
            value.changeIsCommit(props.index)
        } else {
            alert('请输入评论内容，打分')
        }
    }



    return (
        <div style={{ padding: '0.2rem' }}>
            {/* 文本 */}
            <div>
                <TextArea rows={2} value={txt} onChange={(e) => { setTxt(e.target.value) }} />
            </div>
            {/* 评分 */}
            <div>
                评分 : <Rate value={score} onChange={getVal} />
            </div>
            {/* 按钮 */}
            <div>
                <button onClick={submit}>提交</button>
                <button>取消</button>

            </div>
        </div>
    )
}
