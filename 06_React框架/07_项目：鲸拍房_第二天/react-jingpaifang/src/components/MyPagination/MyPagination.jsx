

import React, { Component } from 'react'
import { Pagination } from 'antd';

export default class MyPagination extends Component {

    // 点击页码触发事件
    changePage = (page, pageSize) => {
        console.log(page, pageSize);
        // 触发父组件里的事件，并传递参数
        this.props.getPage(page)
    }
    render() {
        return (
            <div style={{textAlign:'center',background:'#fff',height:'50px'}}>
                {/* total	数据总数	number 父组件传过来
                  pageSize	每页条数	number
                  onChange	页码或 pageSize 改变的回调，参数是改变后的页码及每页条数	function(page, pageSize)

                showSizeChanger	是否展示 pageSize 切换器，当 total 大于 50 时默认为 true	boolean
                showQuickJumper	是否可以快速跳转至某页	boolean | { goButton: ReactNode }
            */}
                <Pagination
                    total={this.props.total}
                    pageSize={this.props.pageSize}
                    // showSizeChanger
                    pageSizeOptions={[20]}
                    hideOnSinglePage='true'
                    showQuickJumper
                    showTotal={total => `共 ${total} 条`}
                    onChange={this.changePage}
                />
            </div>
        )
    }
}


