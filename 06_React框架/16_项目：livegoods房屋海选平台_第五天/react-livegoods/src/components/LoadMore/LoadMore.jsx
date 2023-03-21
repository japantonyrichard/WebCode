


import React, { useEffect, useRef } from 'react'

export default function LoadMore(props) {
    // 定义ref
    let myRef=useRef();
    // 定义开关
    let flag=true;

    // 生命周期
    useEffect(()=>{
        // 窗口高度
        let clientHeight=document.documentElement.clientHeight;
        // 滚动事件
        window.addEventListener('scroll',scrollFn);

        function scrollFn(){
            // 获取DOM元素距离浏览器顶部的距离==>即文档高度
            let divHeight=myRef.current.offsetTop;
            // 被卷去的距离
            let srcTop= document.documentElement.scrollTop;
            // console.log(clientHeight,divHeight,srcTop);
            // clinetHeight+scrollTop>=元素.offsetTop
            if(clientHeight+srcTop >= divHeight){
                console.log('----------该加载更多数据啦。。。。。');
                flag=false;
            
                // 请求下一页数据==》只负责告诉父组件，现在已经到页面底端了，由父组件去请求下一页数据，通知
                // console.log(props.pageNum);
                props.loadData(props.pageNum);


            }

            return ()=>{
                window.removeEventListener('scroll',scrollFn)
            }

        }


    },[])


    return (
        <div ref={myRef}>
            加载更多
        </div>
    )
}
