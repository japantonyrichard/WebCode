const path = require('path');
//插件的使用 1）安装 2）导入 3）使用
//导入插件
const HWP = require('html-webpack-plugin');

module.exports={
    //1.入口
    entry:'./src/index.js',
    //2.出口
    output:{
        filename:'main.js',
        path:path.resolve(__dirname,'dist')
    },
    //3.模式
    mode:'development',
    //4.loader
    module:{
        rules:[
            {
                test:/\.css$/,
                use:['style-loader','css-loader']
            },
        ]
    },
    //5.插件
    plugins:[
        new HWP({
            filename:'home.html',//指定的HTML文件名，默认index.html
            template:'./public/index.html'//指定模板文件，复制一份
        }),
    ]
}