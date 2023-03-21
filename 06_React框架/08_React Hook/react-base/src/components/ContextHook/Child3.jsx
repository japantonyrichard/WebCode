import React from 'react'
import Child4 from './Child4'
import MyContext from './MyContext'

export default function Child3() {
    return (
        <div>
            <h3>Child3</h3>
            {/* 标签方式 */}
            <MyContext.Consumer>
                {
                    value => (
                        <div>
                            <p>祖先组件传递过来的num:{value.data}</p>
                            <p>
                                <button onClick={()=>{value.set(100)}}>修改祖先组件的num</button>
                            </p>
                        </div>
                    )
                }
                
            </MyContext.Consumer>
            <hr />
            
            <Child4 />
        </div>
    )
}
