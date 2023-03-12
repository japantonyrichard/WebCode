const path = require('path')
const hwp = require('html-webpack-plugin');
module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
    },
    mode: 'development',
    //5.插件
    plugins:[
        new hwp({
            filename:'index.html',
            template:'./public/index.html'
        })
    ],
    //6.开发服务器
    devServer: {
        static: {
            directory: path.join(__dirname, 'build'),//项目打包后的文件路径，虚拟的路径（虚拟目录）
        },
        port: 3002,//服务器端口号
        open: true,//true 自动打开浏览器
        compress: true,//true 所有服务都开启gzip压缩

        //proxy反向代理解决跨域问题 -- 掌握
        proxy:{
            '/api':{//使用/api代理了http://localhost:3000
                target:'http://localhost:3000',//真实访问的后台的地址
                changeOrigin:true,//允许跨域
                pathRewrite:{//路径重写--用""替代/api
                    "^/api":''
                }
            },
            // 配置多个代理请求
            // "/foo": {
            //     target: "http://localhost:8080",
            //     changeOrigin:true, // 允许跨域
            //     pathRewrite: {  // 重写路径
            //         "^/foo": ""
            //     }
            // },
        }
    }
}

// 只要修改配置文件，就要重启服务器！！！