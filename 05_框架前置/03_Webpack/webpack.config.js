// webpack基本配置
/* 
1、入口 entry
2、出口 output
3、转换器 loader
4、插件 plugins
*/
//导入node.js模块
const path = require('path');

//导出配置项
module.exports = {
    //单入口
    /* 
    entry:string、array、object
    */
    // entry:'./src/index.js',//入口文件，被打包的文件
    // entry:['./src/index.js','./src/demo.js'],

    //多入口
    entry:{
        index:'./src/index.js',
        demo:'./src/demo.js'
    },

    //单出口
    output:{
        //单出口
        // filename:'build.js',//被打包成的文件名，默认为main.js

        //多出口
        filename:'[name]-[chunkhash:6].js',
        path:path.resolve(__dirname,'build')//被打包文件的路径,默认dist文件夹
    },
    //模式
    mode:'development',//开发环境
    // mode:'production',//生产环境，默认值
}