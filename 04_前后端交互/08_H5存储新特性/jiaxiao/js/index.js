//声明数组，存储已经作答的题号
// let zuoda = [];
// let right=0;
// let wrong=0;

//声明对象，存储所有数据
let objData = {
    id: 1,//题号
    right: 0,//正确的个数
    wrong: 0,//错误的个数
    percent: '0.00%',//正确率
    zuoda: [],//统计已经作答的所有题目
    rightArr: [],//存储所有正确的题号
    wrongArr: [],//存储所有错误的题号
}


//1.渲染数据--题号+题目+答案
/* 
实现：
数据接口：https://mnks.jxedt.com/get_question?r=0.2544343069870654&index=题号

ajax网络请求，拿到数据渲染到页面
1）原生的ajax -- 5步
2）jquery封装的ajax
*/
//1.1页面一加载就渲染数据
let num = 1;
// getData(num);
//渲染题号+题目+答案，多次使用，所以封装为函数
function getData(num) {
    $.ajax({
        type: 'get',
        url: './php/index.php',//php文件解决浏览器跨域问题，相对于HTML的路径
        data: {
            num
        },
        success(res) {
            // console.log(res);
            //1.2渲染数据
            //1.2.1转换为js对象
            res = JSON.parse(res);//给res重新赋值
            // console.log(res);
            //1.2.2渲染题号+题目
            $('.title1').html(`<p>${res.id}.${res.question}</p>`);
            //1.2.3渲染答案
            //1）判断题目类型-- res.Type -- 1:判断题  2：选择题
            if (res.Type === '2') {//选择题
                let str = `<label for="A">
                    <input type="radio" name="sel" value="1" id="A">
                    A: ${res.a}
                </label>
                <label for="B">
                    <input type="radio" name="sel" value="2" id="B">
                    B: ${res.b}
                </label>
                <label for="C">
                    <input type="radio" name="sel" value="3" id="C">
                    C: ${res.c}
                </label>
                <label for="D">
                    <input type="radio" name="sel" value="4" id="D">
                    D: ${res.d}
                </label>`;
                //添加到页面
                $('.sel').html(str);

            } else {//判断题
                let str = `<label for="ok">
                <input type="radio" name="sel" value="2" id="ok">
                正确
                </label>
                <label for="no">
                    <input type="radio" name="sel" value="3" id="no">
                    错误
                </label>`;
                //添加到页面
                $('.sel').html(str);

            }

            //题目渲染完毕，开始答题
            answerQuestion(res);
        }

    })
}

//2.实现下一题和上一题
//2.1下一题
/* 
实现：点击按钮，num+1，最多有100题
*/
$('.next').click(function () {
    // num=num+1
    // num += 1;
    //对于变量自身来说，前++和后++没有区别，都是+1
    //返回值,前++是先+1，再返回；后++是先返回再+1
    num++;
    // console.log(num);

    //方法1
    /* //范围校验
    if (num > 100) {
        num = 100;
        return;//结束函数
    }

    //让页面的数据跟着改变 -- 重新渲染页面
    getData(num); */

    //方法2
    if (num <= 100) {
        getData(num);
    }

    //清空答案
    $('.daan').html('');

    //本地存储
    //设置题号
    objData.id = num;
    localStorage.setItem('objData', JSON.stringify(objData));
})

//2.2上一题
/* 
实现：点击按钮，num-1，第一题为1
*/
$('.prev').click(function () {
    num--;
    //方法1
    //范围校验
    if (num < 1) {
        num = 1;
        return;
    }
    //重新渲染页面
    getData(num);

    $('.daan').html("");
    console.log(num);

})


// 3.渲染题号
/* 
实现：页面渲染100个div，div的内容是1-100
*/
let str = '';
for (let i = 1; i < 101; i++) {
    str += `<div class="item">${i}</div>`;
}
//添加到页面
$('.container').html(str);

//4.开始答题 -- 题目渲染完毕，才可以开始答题
/* 
实现功能：
1）判断此题是否已经作答
2）已经作答渲染已经作答的样式
3）没有作答，可以答题
4）如果作答正确，渲染正确的样式；如果作答错误，渲染错误的样式
5）答案选择后不可以修改
6）下面题号渲染--绿色和红色
7）已答、正确、错误、正确率渲染

*/

function answerQuestion(res) {//形参--局部变量--用来接收数据
    // console.log(res);
    //4.1开始答题--给按钮绑定点击事件
    $('.sel input').click(function () {
        //获取自己的答案
        let val = $(this).val();
        // console.log(val);
        //答案选择以后不可以修改 -- 所有的input禁用
        $('.sel input').attr('disabled', true);

        //4.2判断此题是否已经作答,已经作答的题目存储在zuoda的数组中
        //let zuoda=[1,2,3];
        //去zuoda的数组中查找题号
        if (objData.zuoda.indexOf(res.id) === -1) {//没有作答
            // console.log('没有作答');
            //和正确的答案进行比较
            if (val === res.ta) {//正确
                //渲染正确的样式
                $('.daan').html('<div class="right">恭喜你对了</div>')

                //渲染下面正确的题号
                //eq(index) -- 匹配下标为index的元素
                $('.container>.item').eq(res.id - 1).addClass('ok');

                //正确的个数+1
                objData.right++;
                //渲染到页面
                $('.rightNum').html(objData.right);
                //添加题号到正确的数组
                objData.rightArr.push(res.id)

            } else {//错误
                //渲染错误的样式
                $('.daan').html('<div class="wrong">很遗憾答错了</div>')

                //渲染下面错误的题号
                $('.container>.item').eq(res.id - 1).addClass('no');

                //错误的个数+1
                objData.wrong++;
                //渲染到页面
                $('.wrongNum').html(objData.wrong);
                //添加题号到正确的数组
                objData.wrongArr.push(res.id)
            }

            //添加作答的题号到zuoda数组中
            objData.zuoda.push(res.id);
            //渲染作答
            $('.total').html(objData.zuoda.length);
        } else {//作答
            // console.log('已经作答');
            //直接渲染页面
            $('.daan').html('<div class="wrong">这个题目之前已经作答过了</div>')
        }


        //渲染正确率
        objData.percent = (objData.right / objData.zuoda.length * 100).toFixed(2) + '%'
        //渲染到页面
        $('.lv').html(objData.percent);

        //本地存储数据
        localStorage.setItem('objData', JSON.stringify(objData));

    })

}

// 5.本地存储
/*
localStorage -- 本地永久存储

方法：
localStorage.setItem('key','value')
localStorage.getItem('key')
localStorage.removeItem('key')
localStorage.clear()

存储数据：
1）单个数据存储
localStorage.setItem('right','0')
localStorage.setItem('wrong','0')
localStorage.setItem('percent','0.00%')
localStorage.setItem('zuoda',JSON.stringify([1,2,3]))

2）一次性存储
localStorage.setItem('objData',JSON.stringify(objData))


数据：
objData = {
    id:1,//题号
    right:0,//正确的个数
    wrong:0,//错误的个数
    percent:'0.00%',//正确率
    zuoda:[],//所有已经作答的题号
    rightArr:[],//存储答对的题号
    wrongArr:[],//存储答错的题号
}

实现：
1）先判断是否有本地存储数据
2）没有--渲染第一题
3）有--弹窗，确定和取消
4）取消按钮，渲染第一题
5）确定按钮，渲染本地存储数据
6）如果是第一题，没有弹窗

本地存储的位置：答题和下一题

*/
//5.1获取本地存储数据
let data = localStorage.getItem('objData');
// console.log(data);//如果本地没有存储数据，返回null -- 隐式转换为false

//5.2判断是否有本地存储
if (data) {//有本地存储
    //5.3本地数据转换为js对象
    objData = JSON.parse(data);

    //5.4判断是否是第一题
    if (objData.id === 1) {
        num = 1;
        //渲染第一题
        getData(num);
    } else {
        //5.5弹窗
        //确定--true，取消--false
        let result = confirm(`之前你已经看到第${objData.id}题，是否继续?`);
        if (result) {//确定
            /* 
            下一题有本地存储，可以改变objData.id，上一题没有本地存储,不可以改变objData.id
            下一题和上一题都可以改变num
            */
            num = objData.id;//按照id渲染题目

            getData(num);
            setView();
        } else {//取消
            //渲染第一题
            num = 1;
            getData(num);
            //清空数据
            localStorage.removeItem('objData');
            //初始化数据
            objData = {
                id: 1,//题号
                right: 0,//正确的个数
                wrong: 0,//错误的个数
                percent: '0.00%',//正确率
                zuoda: [],//通过已经作答的所有题目
                rightArr: [],//存储所有正确的题号
                wrongArr: [],//存储所有错误的题号
            }
        }
    }


} else {//没有本地存储
    num = 1;
    getData(1);//渲染第一题
    console.log('没有数据');
}

//6.封装渲染页面的方法--正确、错误、正确率等、下面100个题号
function setView() {
    // 正确、错误、正确率等
    $('.total').html(objData.zuoda.length);
    $('.rightNum').html(objData.right);
    $('.wrongNum').html(objData.wrong);
    $('.lv').html(objData.percent);

    //下面100个题号的正确和错误
    //渲染正确题号的样式
    for (let i = 0; i < objData.rightArr.length; i++) {
        $('.container>.item').eq(objData.rightArr[i] - 1).addClass('ok')
    }
    //渲染错误题号的样式
    for (let i = 0; i < objData.wrongArr.length; i++) {
        $('.container>.item').eq(objData.wrongArr[i] - 1).addClass('no')
    }

}

//7.重新答题
/* 
点击按钮，清空所有样式，回到第一题
*/
$('.begin').click(function () {
    //重新渲染第一题
    num = 1;
    getData(num);

    //删除本地存储
    localStorage.removeItem('objData');

    //数据初始化
    objData = {
        id: 1,//题号
        right: 0,//正确的个数
        wrong: 0,//错误的个数
        percent: '0.00%',//正确率
        zuoda: [],//通过已经作答的所有题目
        rightArr: [],//存储所有正确的题号
        wrongArr: [],//存储所有错误的题号
    }

    //重新渲染
    setView();

    //删除所有题号的样式 -- 删除.ok 和 .no 的样式
    let item = $('.container>.item');
    for (let i = 0; i < item.length; i++) {
        //转换为js对象
        item[i].className = 'item';
    }
})






