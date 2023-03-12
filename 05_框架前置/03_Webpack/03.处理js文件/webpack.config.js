const path = require('path');

module.exports = {
    //1.入口
    entry: './src/index.js',
    //2.出口
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
    },
    //3.模式
    mode: 'production',
    //4.loader
    module: {
        rules: [
            //只兼容ES6+的基础语法
            /* {
                test: /\.js$/,//编译以.js文件结尾
                exclude: /node_modules/,//排除打包的文件
                use: {
                    loader: 'babel-loader',//babel：把ES6+的语法转换为ES5语法，IE11以下不支持ES6+
                    options: {
                        presets: ['@babel/preset-env']//预设，指定babel转换的时候的兼容性，只能转换ES6+的简单语法，let、const、箭头函数等
                    }
                }
            } */

            //ES6高级语法按需加载
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    // 预设：指示babel做怎样的兼容性处理
                    presets: [
                        [
                            '@babel/preset-env',
                            {
                                // 按需加载
                                useBuiltIns: 'usage',
                                // 指定core-js版本
                                corejs: {
                                    version: 3,
                                },
                                // 指定兼容浏览器版本范围
                                targets: {
                                    chrome: '70', // 谷歌版本70及以上
                                    firefox: '60',
                                    ie: '8',
                                    safari: '10',
                                    edge: '17',
                                }
                            }
                        ]
                    ]
                }
            }
        ]
    }

    //5.插件
}