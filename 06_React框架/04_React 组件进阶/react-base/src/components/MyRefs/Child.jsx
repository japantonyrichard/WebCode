import React, { Component } from 'react'

// export default class Child extends Component {
//   render() {
//     return (
//       <div>
//           <h2>子组件</h2>
//           <p ref={ref}>我是Child组件的p标签</p>
//       </div>
//     )
//   }
// }

const Child = React.forwardRef((props, ref) => {
    return (
        <div>
            <h2>子组件</h2>
            {/* 接受父组件传递过来的ref */}
            <p ref={ref}>我是Child组件的p标签</p>
        </div>
    )
})

export default Child