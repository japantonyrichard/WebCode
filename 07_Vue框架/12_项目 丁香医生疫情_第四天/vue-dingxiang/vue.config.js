const {
  defineConfig
} = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      '/foo': {
        // https://interface.sina.cn/news/wap/fymap2020_data.d.json
        target: 'https://interface.sina.cn',
        ws: true,
        changeOrigin: true,
        // 路径重新
        pathRewrite: {
          '^/foo': ''
        }
      }
    }
  }
})