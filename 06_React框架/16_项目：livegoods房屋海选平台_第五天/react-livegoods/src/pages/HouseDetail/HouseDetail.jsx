import React, { useEffect, useState } from 'react'
import CommonHeader from '../../components/CommonHeader/CommonHeader'
import MyCarousel from '../../components/MyCarousel/MyCarousel'
import { Tabs } from 'antd';

import './HouseDetail.less'
import { getDetail, getComment } from '../../api';
import { useParams } from 'react-router-dom';
import CommentInfo from './CommentInfo/CommentInfo';
import LoadMore from '../../components/LoadMore/LoadMore'
import { connect } from 'react-redux';

const { TabPane } = Tabs;

function HouseDetail(props) {
  // 第二种取参数方式：
  let params = useParams()
  // 定义变量
  const [list, setList] = useState([]);//轮播图
  const [info, setInfo] = useState({}); //房源信息
  const [comment, setComment] = useState([]);//评论列表
  const [page, setPage] = useState(0);
  const [isCollect, setCollect] = useState(false);


  // 第一种取参数方式：
  // console.log(props.match.params.id);
  // 生命周期
  useEffect(() => {
    async function getHouseInfo() {
      try {
        const res = await getDetail({ id: params.id });

        setList(res.banner);
        setInfo(res.info)
      } catch (error) {
        console.log(error);
      }
    }

    getHouseInfo();




  }, [])

  // function change(id) {
  //   if (id === '2') {
  //     getCommentByPage(0);
  //   }
  // }


  useEffect(() => {
    setList([]);
    setPage(0)
    getCommentByPage(0);
  }, [params.id])

  async function getCommentByPage(num) {
    try {
      const res = await getComment({ id: params.id, page: num });
      console.log('================', comment);

      setComment([...comment, ...res.list])
      // setComment(comment.concat(res.list))
      setPage(page + 1);
    } catch (error) {
      console.log(error);
    }
  }

  // 去收藏
  function toCollect() {
    // 用户名：
    // console.log(props.user);
    // 判断是否登录
    if (props.user.username) {
      // 已经登录了,再去发请求，带着用户名，房屋id，去验证该房源有没有被收藏

      setCollect(!isCollect)
    } else {
      // 没有登录，去登录吧
      props.history.push('/login');
    }
  }



  return (
    <div>
      {/* 公共头部组件 */}
      <CommonHeader>详情页</CommonHeader>
      {/* 轮播图 */}
      <MyCarousel list={list} />
      {/* 选项卡
      tabBarGutter	tabs 之间的间隙	number
      */}
      <Tabs defaultActiveKey="1" centered tabBarGutter={100} >
        <TabPane tab="房源信息" key="1">
          <div className="house-info">
            <div className="house-item">
              <p>{info.price}元/月</p>
              租金
            </div>
            <div className="house-item">
              <p>{info.huxing}</p>
              户型
            </div>
            <div className="house-item">
              <p>{info.area}</p>
              面积
            </div>
          </div>
          <p>
            标题：标题
          </p>
          <p>
            装修：标题
          </p>
          <p>
            楼层：标题
          </p>



        </TabPane>
        <TabPane tab="评论信息" key="2">
          {/* 评论信息 */}
          <CommentInfo comment={comment} />

          {/* 加载更多 */}
          <LoadMore loadData={getCommentByPage} pageNum={page} />

        </TabPane>
      </Tabs>


      {/* 底部 */}
      <div className="house-bottom">
        <div className="house-detail">
          <div onClick={toCollect}>
            {
              isCollect ? '已收藏' : '收藏'
            }

          </div>
          <div>
            购买
          </div>
        </div>
      </div>
    </div>
  )
}


// 取值
// state：仓库里面所有状态
export default connect(state => ({
  user: state.user
}))(HouseDetail)
