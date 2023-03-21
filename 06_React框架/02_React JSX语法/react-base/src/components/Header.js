import React from "react"
// const msg = '头部区域';

export default class Header extends React.Component{
    render(){
        console.log(this);
        // this.props.title='123'; // 报错  props是只读属性，不能重新赋值
        return(
            <div>
                {/* <h2 style={{color:'red'}}>{msg}</h2> */}
                <h2 style={{color:'red'}}>{this.props.title}--{this.props.msg}</h2>
                {/* <p>
                    {this.props.title}--{this.props.msg}
                </p> */}
            </div>
        )
    }
}

// 导出
// export default Header    或者写在前面↑