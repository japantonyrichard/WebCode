//导入path模块
const path = require('path');

//导出
//Node.js出
module.exports = {
    //1.入口
    entry:'./src/index.js',//入口文件，相对路径
    //2.出口
    output:{
        filename:'main.js',//打包成的文件名
        path:path.resolve(__dirname,'dist')
    },
    //3.模式 development：开发环境，production：生产环境，默认值
    // mode:'development',
    mode:'production',
    //4.loader:转换器，转换非js文件
    module:{
        rules:[
            {
                test:/\.css$/,  // 正则 \.转译.  加载并编译的文件  以.css结尾
                // 从右向左，从下往上读取
                // 先执行css loader,再执行style-loader
                use:['style-loader','css-loader']  // 定义转换时使用的loader
                // 先使用css-loader，把代码转换为css，再使用style-loader，把样式挂载到DOM元素上
            },
            {
                test:/\.less$/, // 编译的文件，以 .less结束的所有文件
                use:['style-loader','css-loader','less-loader'] // 使用的loader，浏览器不支持less,最终需要转换为css
            },
        ]
    }
}