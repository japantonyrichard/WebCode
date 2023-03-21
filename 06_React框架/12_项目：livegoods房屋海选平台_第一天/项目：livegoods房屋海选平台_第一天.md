![logo](images\logo.png)

# 项目：livegoods房屋海选平台_第一天

**主要内容**

* 项目搭建
* 路由配置
* 首页搜索区域
* 首页轮播区域

**学习目标**

 知识点| 要求 
 -| :- 
 项目搭建 | 掌握 
 路由配置 | 掌握 
 首页搜索区域 | 掌握 
 首页轮播区域 | 掌握 




## 一、项目搭建

### 1.1 项目介绍

​	这是一个租房项目一级包含了房屋家具家电的买卖的设置的一个移动端的项目。

react技术实现，这个项目是一个租房系统，进行房屋的出租和销售等信息。

React全家桶技术：React + React-router + Redux + fetch(jquery/axios) + 三方库（antd）

​	

### 1.2 项目安装

1. npx create-react-app react-good

   create-react-app react-good 

2. 降版本 

3. npm i react-router-dom@5.3   axios     -S 

4. npm i axios -S 

5. redux  react-redux redux-logger 

6. Antd库：  npm i antd -S 配置按需加载 

   1. 安装配置：babel-plugin-import (推荐) 

   ​     gitHub：https://github.com/ant-design/babel-plugin-import

   2. npm run eject 暴露webpack.config.js 

      3. npm install babel-plugin-import --save-dev

      4. 配置一个根目录文件  (注：暴露了webpack后需要删除package.json文件里面的babel配置)

   ​     .babelrc

   ```json
   {
         "presets": [
             "react-app"
         ],
             "plugins": [["import", {
                 "libraryName": "antd",
                 "style": "css"
             }]]
     }
   ```

   

   

5.安装redux: 

1. npm i redux -S

2. npm i react-redux -S

3. 安装插件:npm i redux-logger -S

6.安装其他的需要的三方库

### 1.3 项目初始化

1. 删除无用的组件 或者文件

2. css初始化，创建assets静态资源，base.css/reset.cs 

3. 导入iconfont图标 

   - 下载到本地项目：引入到项目中（缺点：图标更新了 必须重新下载一份导入项目中）

   - 引入在线iconfont的网址  

     ```html
     <link rel="stylesheet" href="//at.alicdn.com/t/font_3242499_nqm9rhl375m.css">
     ```

     

4. 移动端配置

   ```css
   html{
       /* 100/750*100 */
       font-size:13.333333vw;
   }
   @media(min-width:750px){
       html{
           font-size: 100px;
       }
   }
   /* 也得给body设置字体大小，否则导致字体特别大 */
   body{
       font-size:14px
   }
   
   /* 所有字体，都是 /100 转成rem*/
   ```

5. 支持less

   ```bash
   npm i less less-loader@7.x -S 
   ```

   



## 二、路由配置

### 2.1 路由配置

```js
//配置路由
import {HashRouter as Router,Route,Switch,Redirect} from 'react-router-dom'
//导入组件
import Layout from '../views/Layout/Layout'
import Home from '../views/Home/Home'
import Shop from '../views/Shop/Shop'
import Life from '../views/Life/Life'
import About from '../views/About/About'
import Login from '../views/Login/Login'

function App() {
  return (
    <Router>
      <Switch>
        {/* 登录界面 */}
        <Route path='/login' component={Login}/>
        {/* 布局界面 */}
          <Layout>
            <Switch>
              <Route exact path='/' component={Home}/>
              <Route path='/shop' component={Shop}/>
              <Route path='/life' component={Life}/>
              <Route path='/about' component={About}/>
            </Switch>
          </Layout>
      </Switch>
    </Router>
  );
}

export default App;

```

### 2.2 路由效果图

​	![logo](images\bottom.png)



### 2.3 组件代码

Layout组件

```jsx
import React from 'react'
import MyBottom from '../../components/MyBottom/MyBottom'
export default function Layout(props) {
    return (
        <div>
            {/* 路由出口 */}
           <div className='content'>
                {
                    props.children
                }
           </div>
            {/* 公共的底部 */}
            <MyBottom/>

       
        </div>
    )
}

```

MyBottom组件

```jsx
import React from 'react'
import { NavLink } from 'react-router-dom'
import './style.css'
export default function MyBottom() {
    return (
        <div className='footer'>
            <ul>
                <li>
                    <NavLink exact to='/'>
                        <i className='iconfont icon-iconindexnor1'></i>
                        首页
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/shop'>
                        <i className='iconfont icon-shangcheng2'></i>
                        商城
                    </NavLink>

                </li>
                <li>
                    <NavLink to='/life'>
                        <i className='iconfont icon-shenghuo-'></i>
                        生活服务
                    </NavLink>

                </li>
                <li>
                    <NavLink to='/about'>
                        <i className='iconfont icon-wode'></i>
                        我的
                    </NavLink>

                </li>
            </ul>
        </div>
    )
}

```



## 三、首页搜索区域

### 3.1 搜索效果展示

​	![logo](images\header.png)

### 3.2 代码演示

Home组件

```jsx
import React from 'react'
import HomeHeader from './HomeHeader/HomeHeader'
export default function Home() {
    return (
        <div>
            {/* 顶部区域组件 */}
            <HomeHeader/>

            {/* 轮播区域组件 */}
        </div>
    )
}

```

HomeHeader组件

```jsx
import React from 'react'
import styles from './style.module.less'
import MyInput from '../../../components/MyInput/MyInput'
export default function HomeHeader() {
    return (
        <div>
           <div className={styles.header}>
                <div className={styles.city}>北京<i className='iconfont icon-jiantou'></i> </div>
                <div className={styles.search}>
                   <MyInput/>
                </div>
                <div className={styles.shop}>
                    <i className='iconfont icon-gouwucheman'></i>
                </div>
           </div>
        </div>
    )
}

```

组件样式

```less
.header{
    height: 0.86rem;
    background: #ff5555;
    display: flex;
    align-items: center;
    .search{
        width: 6rem;
        background: #fff;
        height: 0.56rem;
        border-radius: 0.1rem;
    }
    .shop{
        flex: 2;
        text-align: center;
        color: #fff;
    }
    .city{
        flex: 3;
        text-align: center;
        color: #fff;
    }
}

```

input组件

```jsx
import React,{useState} from 'react'
import './style.less'
export default function MyInput() {
    const [val,setVal] = useState('')
    function getInput(e){
        // console.log('输入的内容',e);
        setVal(e.target.value)
    }
    return (
        <div>
            <input type='text' value={val} onChange={getInput} className='myInput' placeholder='请输入内容'/>
        </div>
    )
}

```



## 四、首页轮播区域

### 4.1 效果展示

​	![logo](images\swiper.png)



### 4.2 antd库轮播

轮播组件：

```jsx
import React from 'react'
import { Carousel } from 'antd';
export default function AntdSwiper(props) {
    return (
        <div>
            <Carousel autoplay>
                {
                    props.banner.map((ele,index)=>{
                        return <div key={index}>
                                    <img src={ele} width='100%' alt="" />
                                </div>
                    })
                }
            </Carousel>
        </div>
    )
}

```



### 4.3 React框架中swiper使用

官网：https://swiperjs.com/react

代码演示

轮播组件：

```jsx
import React from 'react'
import { Navigation, Pagination,Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
export default function MySwiper(props) {
    return (
        <Swiper
            modules={[Navigation, Pagination,Autoplay]}
            // navigation
            pagination={{ clickable: true }}  
            autoplay={{
                delay: 3000,
                stopOnLastSlide: false,
                disableOnInteraction: false,
            }}
            loop
        >
          {
              props.banner.map((ele,index)=>{
                  return  <SwiperSlide key={index}>
                            <img src={ele} width='100%' alt="" />
                        </SwiperSlide>
              })
          } 
          
        </Swiper>
    )
}
```



### 4.4 后台接口

```js

//首页轮播接口
router.get('/banner', (req, res) => {
    const data = Mock.mock({
        status: 200,
        "banner|3": [{
            "id|+1": 1,
            "imgUrl|+1": [
                'http://iwenwiki.com/api/livable/banner/banner1.png',
                'http://iwenwiki.com/api/livable/banner/banner2.png',
                'http://iwenwiki.com/api/livable/banner/banner3.png'
            ]
        }]
    })
    res.send(data)
})

```

### 4.5 动态轮播数据

```jsx
import React from 'react'
import { Navigation, Pagination,Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
export default function MySwiper(props) {
    return (
        <Swiper
            modules={[Navigation, Pagination,Autoplay]}
            // navigation
            pagination={{ clickable: true }}  
            autoplay={{
                delay: 3000,
                stopOnLastSlide: false,
                disableOnInteraction: false,
            }}
            loop
        >
          {
              props.banner.map((ele)=>{
                  return  <SwiperSlide key={ele.id}>
                            <img src={ele.imgUrl} width='100%' alt="" />
                        </SwiperSlide>
              })
          } 
          
        </Swiper>
    )
}

```





# 五、搭建服务端

技术：nodejs+Express+Mock.js

```bahs
npm i express mockjs -S
```











# mock.js

作用：模拟接口数据 (后台定义字段)

开发：

前端：先写静态页面，要接口 渲染  mock 数据   

后端：还没写完





#### 接口文档：

首页：

轮播图：  地址：http://78.112.mkkk/banner

请求参数：id:

返回值：







使用步骤：

1. 安装：

   ```bash
   npm i mockjs -S/-D
   ```

   

2. 引入

   ```js
   import Mock from 'mockjs'
   ```

   

3. 定义接口数据

   ```js
   var data = Mock.mock({
       // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
       'list|1-10': [{
           // 属性 id 是一个自增数，起始值为 1，每次增 1
           'id|+1': 1
       }]
   })
   ```

   







# axios二次包装 

api/ajax.js

```js
  
/* 
对axios进行二次包装
1. 配置通用的基础路径和超时
2. 显示请求进度条
  显示进度条: 请求拦截器回调
  结束进度条: 响应拦截器回调
3. 成功返回的数据不再是response, 而直接是响应体数据response.data
4. 统一处理请求错误, 具体请求也可以选择处理或不处理
5. 每个请求自动携带userTempId的请求头: 在请求拦截器中实现
6. 如果当前有token, 自动携带token的请求头
*/
// import NProgress from 'nprogress'
// import {Message} from 'element-ui'
import axios from 'axios'

// 1. 配置通用的基础路径和超时
// service 是一个能发任意ajax请求的函数，可以作为函数使用
const service = axios.create({
  baseURL: '/api',
  timeout: 20000
})


  // 指定请求拦截器
  service.interceptors.request.use(config => {
  // 显示进度条: 请求拦截器回调
  // NProgress.start()
  /* 每个请求自动携带userTempId的请求头: 在请求拦截器中实现 */
  config.headers.userTempId = 'userTempId'
  return config;
}) 

// 指定响应拦截器
service.interceptors.response.use(res=> {
    return res.data
  },err => {
    // throw err;
    return Promise.reject(err);
    console.log(err);
  }
)

// 向外暴露 service
export default service

```





#### 2、封装接口请求函数

```js
/*
包含项目中所有接口的请求函数: 接口请求函数
每个函数的返回值都是promise
*/
import ajax from './ajax'

// 获取所有图书
export const getBooks = () => ajax.get(`/books`);

// 根据id查询指定图书
export const getBookById = (id) => ajax.get(`/books/book/${id}`)

// 删除指定图书
export const delBooksById = (id) => ajax.delete(`/books/book/${id}`)

// 添加图书
export const addBook = (book) => ajax.post(`/books`, book)

// 修改图书
export const modifyBook = (book) => ajax.put('/books', book)

// 验证是否有
export const hasBook = (name) => ajax.get(`/books/book/${name}`)

```











