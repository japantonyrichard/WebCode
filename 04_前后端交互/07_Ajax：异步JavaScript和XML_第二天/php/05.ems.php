<?php
//1.接收前端的参数
$num = $_GET['num'];


//2.处理前端的参数

$data='{
    "msg": "",
    "status": "0",
    "error_code": "0",
    "data": {
        "info": {
            "status": "1",
            "state": "3",
            "com": "yunda",
            "context": [
                {
                    "time": "1595411133",
                    "desc": "\u60a8\u7684\u5feb\u4ef6\u5df2\u9001\u8fbe  \u4e8e\u8f9b\u5e84\u6751\u59d4\u4f1a\u897f50\u7c73\u65b0\u534e\u8054\u8d85\u5e02(\u6c99\u6cb3\u9547\u4e8e\u8f9b\u5e84\u6751\u59d4\u4f1a\u897f50\u7c73\u65b0\u534e\u8054\u8d85\u5e02\u97f5\u8fbe\u5feb\u9012) \u4fdd\u7ba1\u3002\u5982\u6709\u95ee\u9898\u8bf7\u7535\u8054\u4e1a\u52a1\u5458\uff1a\u9648\u96ea\u5a07\u301017310188385\u3011\u3002\u76f8\u9022\u662f\u7f18,\u5982\u679c\u60a8\u5bf9\u6211\u7684\u670d\u52a1\u611f\u5230\u6ee1\u610f,\u7ed9\u4e2a\u4e94\u661f\u597d\u4e0d\u597d\uff1f\u3010\u8bf7\u5728\u8bc4\u4ef7\u5c0f\u4ef6\u5458\u5904\u7ed9\u4e88\u4e94\u661f\u597d\u8bc4\u3011"
                },
                {
                    "time": "1595408353",
                    "desc": "\u5317\u4eac\u660c\u5e73\u533a\u660c\u5e73\u516c\u53f8\u4e8e\u65b0\u5e84\u5206\u90e8 \u6d3e\u4ef6\u5458 \u9648\u96ea\u5a07 17310188385 \u6b63\u5728\u4e3a\u60a8\u6d3e\u4ef6"
                },
                {
                    "time": "1595402967",
                    "desc": "\u5df2\u79bb\u5f00 \u5317\u4eac\u660c\u5e73\u533a\u660c\u5e73\u516c\u53f8\uff1b\u53d1\u5f80 \u5317\u4eac\u660c\u5e73\u533a\u660c\u5e73\u516c\u53f8\u4e8e\u65b0\u5e84\u5206\u90e8"
                },
                {
                    "time": "1595379723",
                    "desc": "\u5df2\u79bb\u5f00 \u534e\u5317\u67a2\u7ebd\uff1b\u53d1\u5f80 \u5317\u4eac\u660c\u5e73\u533a\u660c\u5e73\u516c\u53f8"
                },
                {
                    "time": "1595378686",
                    "desc": "\u5df2\u5230\u8fbe \u534e\u5317\u67a2\u7ebd"
                },
                {
                    "time": "1595261870",
                    "desc": "\u3010\u6cc9\u5dde\u5e02\u3011\u5df2\u79bb\u5f00 \u798f\u5efa\u664b\u6c5f\u5206\u62e8\u4e2d\u5fc3\uff1b\u53d1\u5f80 \u534e\u5317\u67a2\u7ebd"
                },
                {
                    "time": "1595261282",
                    "desc": "\u3010\u6cc9\u5dde\u5e02\u3011\u5df2\u79bb\u5f00 \u798f\u5efa\u664b\u6c5f\u5206\u62e8\u4e2d\u5fc3\uff1b\u53d1\u5f80 \u4eac\u897f\u5730\u533a\u5305"
                },
                {
                    "time": "1595261044",
                    "desc": "\u3010\u6cc9\u5dde\u5e02\u3011\u5df2\u5230\u8fbe \u798f\u5efa\u664b\u6c5f\u5206\u62e8\u4e2d\u5fc3"
                },
                {
                    "time": "1595245204",
                    "desc": "\u3010\u6cc9\u5dde\u5e02\u3011\u798f\u5efa\u6cc9\u5dde\u516c\u53f8\u6cc9\u5dde\u670d\u52a1\u90e8 \u5df2\u63fd\u6536"
                }
            ],
            "send_time": "2020-07-20 19:40:04",
            "latest_progress": "\u60a8\u7684\u5feb\u4ef6\u5df2\u9001\u8fbe  \u4e8e\u8f9b\u5e84\u6751\u59d4\u4f1a\u897f50\u7c73\u65b0\u534e\u8054\u8d85\u5e02(\u6c99\u6cb3\u9547\u4e8e\u8f9b\u5e84\u6751\u59d4\u4f1a\u897f50\u7c73\u65b0\u534e\u8054\u8d85\u5e02\u97f5\u8fbe\u5feb\u9012) \u4fdd\u7ba1\u3002\u5982\u6709\u95ee\u9898\u8bf7\u7535\u8054\u4e1a\u52a1\u5458\uff1a\u9648\u96ea\u5a07\u301017310188385\u3011\u3002\u76f8\u9022\u662f\u7f18,\u5982\u679c\u60a8\u5bf9\u6211\u7684\u670d\u52a1\u611f\u5230\u6ee1\u610f,\u7ed9\u4e2a\u4e94\u661f\u597d\u4e0d\u597d\uff1f\u3010\u8bf7\u5728\u8bc4\u4ef7\u5c0f\u4ef6\u5458\u5904\u7ed9\u4e88\u4e94\u661f\u597d\u8bc4\u3011",
            "_source_com": "yunda",
            "_support_from": "partner",
            "isAbstract": "1",
            "current": "\u5df2\u7b7e\u6536",
            "currentStatus": "5",
            "latest_time": "\u8fdb\u5c55\u66f4\u65b0\u4e8e 2020-07-22 17:45:33"
        },
        "com": "yunda",
        "company": {
            "xcx_brief_introduction": "\u5fc3\u9009\u97f5\u8fbe\uff0c\u5feb\u901f\u97f5\u8fbe",
            "title_logo": "http:\/\/static.open.baidu.com\/media\/ch9\/png\/%E9%9F%B5%E8%BE%BE%E5%8F%8D%E7%99%BDlogo.png",
            "logo_color": "F7A20A",
            "is_official": "1",
            "is_xcx_partner": "1",
            "ispartner": "1",
            "url": "http:\/\/www.yundaex.com?from=openv",
            "fullname": "\u97f5\u8fbe\u901f\u9012",
            "shortname": "\u97f5\u8fbe",
            "tel": "95546",
            "icon": {
                "id": "27",
                "smallurl": "http:\/\/t10.baidu.com\/it\/u=3682653099,2524883494&fm=58",
                "smallpos": "0,400",
                "middleurl": "http:\/\/t12.baidu.com\/it\/u=1078213688,3146076104&fm=58",
                "middlepos": "0,576",
                "normal": "http:\/\/t10.baidu.com\/it\/u=996032835,1968172858&fm=58"
            },
            "website": {
                "title": "www.yundaex.com",
                "url": "http:\/\/www.yundaex.com"
            },
            "auxiliary": [
                {
                    "title": "\u7f51\u70b9\u67e5\u8be2",
                    "url": "http:\/\/www.yundaex.com\/cn\/fuwuwangdian.php"
                },
                {
                    "title": "\u8fd0\u4ef7\u67e5\u8be2",
                    "url": "http:\/\/www.yundaex.com\/cn\/product_yunfei.php"
                },
                {
                    "title": "\u6211\u8981\u5bc4\u4ef6",
                    "url": "http:\/\/membernew.yundasys.com:15116\/member.website\/hywz\/view\/shipping.html"
                },
                {
                    "title": "\u97f5\u8fbe\u6d77\u6dd8",
                    "url": "http:\/\/www.udamall.com\/shop\/index.php"
                }
            ],
            "timecost": {
                "btn_show": "1",
                "url": "http:\/\/www.yundaex.com\/cn\/product_yunfei.php"
            },
            "onlineorder": {
                "btn_show": "1",
                "url": "http:\/\/member.yundaex.com\/ydmb\/member\/order\/index.jsp"
            }
        },
        "source": {
            "logo": "http:\/\/t12.baidu.com\/it\/u=4025691644,3226950799&fm=58",
            "title": "\u6570\u636e\u6765\u81ea\u97f5\u8fbe\u901f\u9012",
            "url": "http:\/\/www.yundaex.com\/?from=baidu_ala",
            "name": "\u97f5\u8fbe\u901f\u9012",
            "showName": "\u6570\u636e\u6765\u6e90\uff1a\u97f5\u8fbe\u901f\u9012"
        },
        "kuaidiSource": {
            "logo": "http:\/\/static.open.baidu.com\/media\/ch9\/png\/%E5%BF%AB%E9%80%92100-55X16.png",
            "title": "\u6570\u636e\u6765\u81ea\u5feb\u9012100",
            "url": "http:\/\/www.kuaidi100.com\/?from=baidu_ala",
            "name": "\u5feb\u9012100",
            "showName": "\u5feb\u9012100"
        },
        "pcAsynInfo": {
            "title": "\u97f5\u8fbe\u901f\u9012-\u5feb\u9012\u5355\u53f7\u67e5\u8be2",
            "url": "http:\/\/www.yundaex.com?from=openv",
            "qr": "",
            "showurl": "www.yundaex.com"
        }
    }
}';

//判断是否有此数据
if ($num === '4307101743736') {//有数据
    echo $data;
} else {//没有数据
    echo "0";//给前端响应的数据
}
