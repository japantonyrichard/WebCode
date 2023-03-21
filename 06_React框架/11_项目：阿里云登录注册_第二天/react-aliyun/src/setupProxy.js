const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        // http://localhost:7788/foo/api/register
        // http://localhost:7788/api/register
        '/foo',
        createProxyMiddleware({
            target: 'http://localhost:7788',
            changeOrigin: true,  //是否允许跨域
            pathRewrite: {
                "^/foo": '',//路径重写
            }
        })
    );
};