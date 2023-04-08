// 统一配置接口地址
const base={
    baseUrl:'http://localhost:7878',
    goodsList:'/foo/projectList', //商品列表
    search:'/foo/search',//搜索
    category:'/foo/backend/itemCategory/selectItemCategoryByParentId',//类目选择
    upload:'/foo/upload', //上传图片  http://localhost:7878/upload
    addGoods:'/foo/backend/item/insertTbItem',//添加商品
    delGoods:'/foo/backend/item/deleteItemById',//删除
    updateGoods:'/foo/backend/item/updateTbItem',//修改
    login:'/foo/login',//登陆
    params :'/foo/backend/itemParam/selectItemParamAll',//规格参数列表
    insertItemParam:'/foo/backend/itemParam/insertItemParam',//添加规格参数
    categoryData:'/foo/category/data',//规格参数类目结构数据获取 cid
}


export default  base;