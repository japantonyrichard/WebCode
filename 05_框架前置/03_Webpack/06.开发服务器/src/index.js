console.log('哈哈哈哈');
console.log('斤斤计较军');
console.log('66666');
//导入jq
import $ from 'jquery';

//跨域
$.ajax({
    type:'get',
    url:'/api',
    success:res=>{
        console.log(res);
    }
})