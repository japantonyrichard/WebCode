/* 
swiper使用：
1）引入对应的文件 swiper-bundle.min.css和swiper-bundle.min.js
2）定义swiper容器
3）初始化swiper

*/

//1.轮播图
var mySwiper = new Swiper('.swiper', {  //.swiper--选中容器
  loop: true, // 循环模式选项
  autoplay: true,//自动切换，默认3s

  // 如果需要分页器
  pagination: {
    el: '.swiper-pagination',
  },

})

//2.动态渲染页面数据
/* 
流程：
1）客户端给后端发送网络请求 -- Ajax
2）后台接收前端的请求，处理前端的请求，给前端响应数据
3）前端拿到数据渲染到页面

*/
//2.1页面一加载就发送网络请求
let num = 18;
renderPage(num);//页面一加载渲染一次页面
//封装网络请求
function renderPage(num) {
  $.ajax({
    type: 'get',
    // https://m.mafengwo.cn/?category=get_info_flow_list&page=0
    url: './php/index.php',//解决跨域，php相对于html文件的位置
    data: {
      num// num: num
    },
    success: function (res) {
      setList(res);
    },
    error: function (err) {
      console.log(err);
    }
  })
}


//2.2点击按钮，加载更多
$('.showMore').click(function () {
  num++;
  renderPage(num);
})

//2.3底线提示
//JSON.parse(res).show_more 等于false，表示没有更多数据，提示

//封装渲染页面的函数
function setList(res) {
  console.log(JSON.parse(res));
  //判断是否有数据，有数据，渲染到页面，没有数据，底线提示
  if (!JSON.parse(res).show_more) {//没有数据
    $('.showMore').html('没有更多数据了，我是有底线的...');
    return;//结束函数，没有数据不需要再渲染页面
  }

  //解析数据
  let arr = JSON.parse(res).data.list;
  // console.log(arr);
  //遍历数据
  let str = ''
  for (let i = 0; i < arr.length; i++) {
    str += `<div class="list">
     <h4>${arr[i].data.title}</h4>
     <div class="info">
         <img src="${arr[i].data.image}" alt="">
         <div class="msg">
             <p>${arr[i].data.content}</p>
             <p>
                 <span>${arr[i].data_source.pv}浏览</span>
                 <span class="author">
                     ${arr[i].data_source.user.name}
                     <img src="${arr[i].data.bottom.user.logo}" alt="">
                 </span>
             </p>
         </div>
     </div>
 </div>`;
  }
  $('.conteiner').append(str);//追加
}

//3.返回页面顶部
$(window).scroll(function () {
  //获取滚动条距上面的距离
  let top = $(window).scrollTop();
  //判断
  if (top >= 600) {
    $('.backTop').css('display', 'block');
  } else {
    $('.backTop').css('display', 'none');
  }
})
$('.backTop').click(function(){
  $(window).scrollTop(0);
})