//对网址进行解析
//1.导入模块
const qs = require('querystring');
//2.使用模块的方法
//parse():将字符串转换为对象，stringify():将字符串转换为对象
let str = "username=易烊千玺&password=000&age=18";
console.log(qs.parse(str));
let obj = {
    name: 'admin',
    sex: '女'
}
console.log(qs.stringify(obj));