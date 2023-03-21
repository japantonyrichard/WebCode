import React, { Component } from 'react'
import Cent4 from './Cent4'
// 导入
import MyContext from './MyContext'

export default class Ceng3 extends Component {
    render() {
        return (
            <div>
                <h3>Ceng3</h3>
                {/* <p>爷爷组件传递过来的数据 num :{this.props.num}</p> */}

                {/* 3、使用数据 */}
                {/* <MyContext.Consumer>
                    {
                        value => (
                            <p>爷爷组件传递过来的数据 num :{value.num}</p>
                        )
                    }
                </MyContext.Consumer> */}


                <MyContext.Consumer>
                    {
                        value => (
                            <div>
                                <p>爷爷组件传递过来的数据 num :{value.data.num}</p>
                                <p>
                                    <button onClick={()=>{value.changeFn()}}>触发爷爷的方法</button>
                                </p>
                                <hr />
                                <Cent4/>
                            </div>
                        )
                    }
                </MyContext.Consumer>


            </div>
        )
    }
}
