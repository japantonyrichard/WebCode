//封装网络请求
function myAjax(obj) {//形参--实质是一个对象
    //1.创建xhr对象
    let xhr = new XMLHttpRequest();

    //3.处理字符串
    //3.1遍历对象
    let str = '';
    for (const key in obj.data) {
        //3.2字符串拼接
        str += `${key}=${obj.data[key]}&`
    }
    //3.3处理&
    let params = str.slice(0, -1);//user=王一博&pwd=666

    //2.判断请求方式
    if (obj.type === 'get') {
        //2.1准备发送
        xhr.open('get', obj.url + '?' + params, true);
        //2.2 发送请求
        xhr.send();

    } else if (obj.type === 'post') {
        //2.1准备发送
        xhr.open('post', obj.url, true);
        //设置请求头
        xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded;charset=utf-8");
        //2.2发送请求
        xhr.send(params);
    }

    //4.监听
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            //5.响应数据
            obj.success(xhr.response);//调用成功的函数，传递成功响应的数据
        }
    }

}