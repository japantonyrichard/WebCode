const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  // https://cli.vuejs.org/zh/config/#devserver-proxy   官网直接复制如下
  devServer: {
    proxy: {
      // 'http://iwenwiki.com:3002/api/banner'
      // 'http://iwenwiki.com:3002/foo/api/banner'
      // '/api': {
      '/foo': {
        target: 'http://iwenwiki.com:3002',
        ws: true,
        changeOrigin: true,
        // 路径重写
        pathRewrite: {
          '^/foo': ''
        }
      },
      // '/foo': {
      //   target: '<other_url>'
      // }
    }
  }
})
