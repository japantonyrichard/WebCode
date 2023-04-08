const {
  defineConfig
} = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      //网易新闻--接口
      '/foo': {
        target: 'http://localhost:7878', //
        ws: true,
        changeOrigin: true,
        pathRewrite: { //重写路径
          '^/foo': ''
        }
      }
    }
  }
})