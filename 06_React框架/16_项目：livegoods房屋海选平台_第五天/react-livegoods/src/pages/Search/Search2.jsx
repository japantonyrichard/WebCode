import React, { Component } from 'react'
import CommonHeader from '../../components/CommonHeader/CommonHeader';
import LoadMore from '../../components/LoadMore/LoadMore';
import MyInput from '../../components/MyInput/MyInput';
import SearchList from './SearchList/SearchList';

export default class Search2 extends Component {

    state={
        search:[],
        pageNum:0
    }
    componentDidMount(){
        
    }

    render() {
        return (
            <div>
                {/* 公共头部 */}
                <CommonHeader>
                    <MyInput val={this.props.match.params.val} />
                </CommonHeader>
                <div>
                    获取参数：{this.props.match.params.val}
                </div>
                {/* 搜索列表 */}
                <SearchList list={this.state.lists} />


                {/* 加载更多 */}
                <LoadMore pageNum={this.state.pageNum} loadData={this.getSearchList} />
            </div>
        )
    }
}
