// rcc
import React, { Component } from 'react'

export default class MyEvent extends Component {
  constructor(){
    super()
    this.state={
      count:10
    }

    this.changePutong2=this.changePutong2.bind(this);
  }
  // 普通函数触发
  putong(){
    console.log('普通函数触发了，this：',this); // 普通函数触发了，this： undefined -- 普通函数没有this
  }

  // 箭头函数触发
  // 箭头函数当中一般不给它传参数，因为直接调用了
  // 总结：箭头函数获取的第一个参数就是事件对象
  jiantou=(a,b)=>{
    console.log('箭头函数触发了，this：',this);// 箭头函数触发了，this： MyEvent {props: {…}, context: {…}, refs: {…}, updater: {…}, jiantou: ƒ, …}
    console.log(a); // 事件对象               // 箭头函数中，this 指向当前实例
    console.log(b); // undefined
  }                                        


  // 让普通函数有this  第一种方式
  /** 总结：
   *    传参：直接在bind后面加参数列表就可以了
   *    事件对象：普通函数有参数传递的时候，最后一个变量的位置，就是事件对象
   */
  changePutong1(a,b,c){
    console.log('普通函数触发了，this：',this); // 指向当前实例
    console.log(a);// 2
    console.log(b);// 3
    console.log(c);// SyntheticBaseEvent {_reactName: 'onClick', _targetInst: null, type: 'click', nativeEvent: PointerEvent, target: button, …}
  }
  // 让普通函数有this  第二种方式
  changePutong2(){
    console.log('普通函数触发了，this：',this); // 指向当前实例
  }
  render() {
    return (
      <div>
        <h2>事件</h2>
        <p>count:{this.state.count}</p>
        <p>
          <button onClick={this.putong}>普通函数 没有this</button>
        </p>
        <p>
          <button onClick={this.jiantou}>箭头函数点击</button>
        </p>

        <p>
          {/* 让普通函数有this  第一种方式 */}
          <button onClick={this.changePutong1.bind(this,2,3)}>让普通函数有this 第一种方式</button>
        </p>
        <p>
          {/* 让普通函数有this  第二种方式 */}
          <button onClick={this.changePutong2}>让普通函数有this 第二种方式</button>
        </p>
      </div>
    )
  }
}


/**
 * call(obj,参数列表) 多个参数  , 逗号隔开    -立马执行-
 * apply(obi,[])  数组  -立马执行-
 * bind(obj,参数列表)   **返回函数**
 */
