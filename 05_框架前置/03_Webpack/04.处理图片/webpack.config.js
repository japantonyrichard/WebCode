const path = require('path');
//导入插件
const hwp = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
    },
    mode: 'development',
    //4.loader
    module: {
        rules: [
            {
                test: /\.(jpg|png|gif|webp|jpeg)$/,
                use: ['file-loader']
            },
            {
                test:/\.css$/,
                use:['style-loader','css-loader']
            }
        ]
    },
    //5.插件
    plugins:[
        new hwp({
            filename:'index.html',
            template:'./public/index.html'
        })
    ]
}