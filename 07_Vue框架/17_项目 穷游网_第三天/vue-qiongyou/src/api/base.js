// 统一管理接口地址
const base={
    base:'http://iwenwiki.com',
    bannerUrl:'/api/blueberrypai/getIndexBanner.php', //轮播图
    host:'http://localhost:7788',
    login:'/login',// 登录接口
    lanmei:'/api/blueberrypai/getBlueBerryJamInfo.php',//蓝莓酱 blueBerryjam_id=1
    // https://3g.163.com /touch/reconstruct/article/list/BAI67OGGwangning/0-10.html
    news:'/foo/touch/reconstruct/article/list/',  //  BAI67OGGwangning/0-10.html
    // https://www.qyer.com/qcross/home/ajax?action=hotelsearch&keyword=%E4%BA%91&type=1
    serach:'/boo/qcross/home/ajax?action=hotelsearch&type=1',  // 搜索 keyword=%E4%BA%91
    // https://www.qyer.com/qcross/home/index.php?action=recommend&timer=1638347951752&ajaxID=59b0b70acebeb65c1882399e
    recommend:'/boo/qcross/home/index.php?action=recommend&timer=1638347951752&ajaxID=59b0b70acebeb65c1882399e'  //今日推荐
}

export default  base