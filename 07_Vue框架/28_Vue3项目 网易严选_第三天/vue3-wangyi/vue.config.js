const path = require('path')

const {
  defineConfig
} = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,

  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [
        path.join(__dirname, './src/assets/css/variables.less'),
        path.join(__dirname, './src/assets/css/mixins.less')
      ]
    }
  },
  //跨域请求
  devServer: {
    proxy: {
      '/api': {
        target: 'http://you.163.com', //网易接口
        ws: true,
        changeOrigin: true,
        pathRewrite: { //重写路径
          '^/api': ''
        }
      },
      '/foo': {
        target: 'http://localhost:3000', //本地接口
        ws: true,
        changeOrigin: true,
        pathRewrite: { //重写路径
          '^/foo': ''
        }
      },
    },
  }

})