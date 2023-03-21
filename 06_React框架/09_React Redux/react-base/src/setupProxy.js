const {createProxyMiddleware}= require('http-proxy-middleware')

module.exports=function(app){
    app.use(
        '/foo',
        createProxyMiddleware({
            // http://iwenwiki.com:3002/api/banner.....
            target:'http://iwenwiki.com:3002',//真实地址，目标服务器
            changeOrigin:true,//允许跨域
            pathRewrite:{
                '/foo':'',//路径重写
            }
        })
    )
}