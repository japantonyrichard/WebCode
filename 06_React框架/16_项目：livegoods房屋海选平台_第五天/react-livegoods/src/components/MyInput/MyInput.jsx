import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'

const inputStyle = {
  height: '0.6rem',
  width: '100%',
  borderRadius: '0.1rem',
  paddingLeft: '0.2rem',
  color: '#333'
}

export default function MyInput(props) {
  const [val, setVal] = useState('')
  const history = useHistory();
  // 获取文本框的输入
  /**
   * 
   * @param {*} e 
   * 手动收入：e 事件对象{e}
   * 进入搜索界面传值:123
   */
  function getInput(e) {
    if(e.target){
      setVal(e.target.value)
    }else{
      setVal(e); //此时，e 只是一个变量
    }
    
  }
  // 键盘抬起事件
  function getKeyUp(e) {
    if (e.keyCode === 13&&val) {
      // 按的回车，页面跳转，编程式导航
      history.push('/search/'+val)
    }
  }

  // 生命周期  =》给文本框赋值
  useEffect(() => {
    // if (props.val) {
    //   setVal(props.val)
    // }
    // 第二种处理 方式：进入搜索页面，给文本框赋值，React希望我们不是直接修改setVal，而是触发onChnage事件（走受控组件的特点来修改值）；上面直接setVal的方式，老版本报错！

    if(props.val){  //123
      getInput(props.val) 
    }

  },[props.val])


  return (
    <>
      {/* 受控组件：
            功能：输入信息，回车，跳转页面
          
          */}
      <input value={val} onChange={getInput} onKeyUp={getKeyUp} style={inputStyle} />
    </>
  )
}
