// 统一管理接口
const base={
    host:'http://localhost:7788',
    banner:'/banner', //轮播图接口  /api/banner
    hothouse:'/hothouse',  //首页热门房源列表
    selectCity:'/selectCity',//城市选择  热门城市
    search:'/search',//搜索房源接口
    houseInfo:'/houseInfo',//房 屋详情--信息接口----【详情页需要展示的】
    comment:'/comment', // 房屋的评价信息
    cart:'/cart',// 购物车列表
}

export default base;