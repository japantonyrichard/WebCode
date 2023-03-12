let a = 100;
console.log(a);
let foo = () => {
    console.log('哈哈哈');
}

//入口文件index.js
//打包css、less、图片都需要导入到index.js中
//导入图片 --  {img}不行，没有按需导出就不能按需导入
import img from "./1.webp";
//设置到页面
document.getElementById('img').src = img;

//导入css
import './index.css';