import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { getSearch } from '../../api';
import CommonHeader from '../../components/CommonHeader/CommonHeader';
import LoadMore from '../../components/LoadMore/LoadMore';
import MyInput from '../../components/MyInput/MyInput';
import SearchList from './SearchList/SearchList';

import { unstable_batchedUpdates } from 'react-dom'

function Search(props) {
    // 定义状态
    const [search, setSearch] = useState([]);
    const [pageNum, setPageNum] = useState(0);//页码

    // 生命周期  
    useEffect(() => {
        getSearchList(0);
        //清空:：地址栏重新输入参数，从第一页开始加载
        setSearch([])
        setPageNum(0)
    }, [])

    /**
     * 根据页码去加载请求第几页数据
     *  * params: 当前城市、搜索关键字、请求页码
    * city：城市
    * val：搜索关键词
    * page:页码
     */
    async function getSearchList(num) {
        try {
            let res = await getSearch({
                city: props.city,
                val: props.match.params.val,
                page: num
            });
            console.log('----又请求数据了----', [...search, ...res.list]);
            // setList(res.list)
            setSearch([...search,...res.list]);//数据拼接 = 老数据 + 新数据 [...list,...res.list]
            //让你的page++ 累加+1
            setPageNum(pageNum+1)
        } catch (error) {
            console.log(error);
        }

    }


    return (
        <div>
            {/* 公共头部 */}
            <CommonHeader>
                <MyInput val={props.match.params.val} />
            </CommonHeader>
            <div>
                获取参数：{props.match.params.val}
            </div>
            {/* 搜索列表 */}
            <SearchList list={search} />


            {/* 加载更多 */}
            <LoadMore pageNum={pageNum} loadData={getSearchList} />
        </div>
    )
}


export default connect(state => ({
    city: state.city
}))(Search)