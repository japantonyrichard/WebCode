import React from 'react'
import './MyTabs.less'

export default function MyTabs(props) {
  console.log(props);


  // 选项卡标题点击事件
  function changeKey(key){
    console.log(key);
    // 调用父组件的方法 ,告诉父组件,点击的是那个key
    props.onChange(key);
  }

  return (
    <div className='my-tabs'>
      {/* 标题 */}
      <div className="tab-nav">
        {
          props.children.map((item,index)=>{
            return (
              <div key={index} 
              className={props.defaultActiveKey==item.key?'active':'' }
              
              onClick={changeKey.bind(null,item.key)}
            >{item.props.tab} </div>
            )
          })
        }
      </div>

      {/* 内容 */}
      <div className="tab-content">
        {
          props.children.map((item,index)=>{
            return(
              <div key={index} className={props.defaultActiveKey==item.key?'show':''}>{item.props.children} </div>
            )
          })
        }
      </div>
      
    </div>
  )
}
