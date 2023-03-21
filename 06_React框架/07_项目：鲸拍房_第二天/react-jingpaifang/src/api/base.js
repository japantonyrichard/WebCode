/**
 * 统一管理请求接口
 */
const base={
    host:'http://www.jingpaifang.cn',
    city:'/api/api/api/app/available/cities', //城市切换
    houseInfo:'/api/api/api/app/daily/summary', //当前城市的房源信息
    ignore:'/api/api/api/app/search/houses/ignore', //捡漏房源
    // http://www.jingpaifang.cn/api/api/api/app/homepage/publish/informations
    story:'/api/api/api/app/homepage/publish/informations',//成交故事


    // 下面的接口，自己去拿数据，渲染界面
    informations:'/api/api/api/app/homepage/publish/informations',//法拍资讯 POST请求，参数：{pageNo: 0, pageSize: 9, authorId: "129465", sortId: 1, city: 110100}
    houses:'/api/api/api/app/search/houses',//法拍房源  POST请求，参数：
    /**
     * {auctionStageId: []
        auctionStatusId: []
        auctionType: []
        businessCircleIds: []
        city: 110100
        houseTypeId: []
        keyword: ""
        limitBuy: []
        pageNo: 0
        pageSize: 21
        room: []
        sortId: 1
        subwayStationIds: []}
         
        */
    
    }
    

export default base;