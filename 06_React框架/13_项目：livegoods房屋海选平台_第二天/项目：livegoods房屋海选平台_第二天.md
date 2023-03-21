![logo](images\logo.png)

# 项目：livegoods房屋海选平台_第二天

**主要内容**

* 热门房源
* 后台接口
* 城市切换
* redux存储数据

**学习目标**

 知识点| 要求 
 -| :- 
 热门房源 | 掌握 
 后台接口 | 掌握 
 城市切换 | 掌握 
 redux存储数据 | 掌握 




## 一、热门房源

### 1.1 静态布局

​	![logo](images\hot.png)

```jsx
import React from 'react'
import styles from './style.module.less'
import banner1 from '../../../assets/images/banner1.png'
export default function HotHouse() {
    return (
        <div>
            <h3 className={styles.title}>热门房源</h3>
            <ul className={styles.list}>
                <li>
                    <img src={banner1} alt="" />
                    <div className={styles.info}>
                        <div className={styles.desc}>
                            <p>东城区 什么院3号楼</p>
                            <p>1室一厅-48m</p>
                        </div>
                        <div className={styles.type}>
                            <a href="##" className={styles.zu}>整租</a>
                            <p>3500/月</p>
                        </div>
                    </div>
                </li>

                <li>
                    <img src={banner1} alt="" />
                    <div className={styles.info}>
                        <div className={styles.desc}>
                            <p>东城区 什么院3号楼</p>
                            <p>1室一厅-48m</p>
                        </div>
                        <div className={styles.type}>
                            <a href="##" className={styles.zu}>整租</a>
                            <p>3500/月</p>
                        </div>
                    </div>
                </li>

            
            </ul>
        </div>
    )
}

```

### 1.2 动态数据

首页获取数据

```jsx
import React,{useState,useEffect} from 'react'
import HomeHeader from './HomeHeader/HomeHeader'
// import AntdSwiper from '../../components/AntdSwiper/AntdSwiper'
import MySwiper from '../../components/MySwiper/MySwiper'
import HotHouse from './HotHouse/HotHouse'
import styles from './index.module.less'
//导入接口
import { getBanner,getHotHouse } from '../../api/index'
export default function Home() {
    //定义轮播数据容器
    const [banner,setBanner] = useState([])
    const [house,setHouse] = useState([])
    useEffect(()=>{
        //1. 获取轮播图数据接口----------------------------
        getBanner()
        .then(res=>{
            console.log(res.data);
            //设置轮播数据
            setBanner(res.data.list)
        })

        //2. 热门房源信息--------------------------------
        getHotHouse()
        .then(res=>{
            console.log('房源信息',res.data);
            setHouse(res.data.list)
        })
    },[])
    return (
        <div>
            {/* 顶部区域组件 */}
            <HomeHeader/>

            {/* 轮播区域组件 */}
            {/* <AntdSwiper banner={list} /> */}
            {
                banner.length>0? <MySwiper banner={banner}/>:''
            }

            {/* 找舍友 */}
            <div className={styles.content}>
                <div className={styles.item}>找舍友</div>
                <div className={styles.item}>宜居社区</div>
            </div>

            {/* 热门房源 */}
            <HotHouse list={house}/>


        </div>
    )
}

```

房源组件HotHouse

```jsx
import React from 'react'
import styles from './style.module.less'
export default function HotHouse(props) {
    return (
        <div>
            <h3 className={styles.title}>热门房源</h3>
            <ul className={styles.list}>
               {
                   props.list.map(ele=>{
                       return  <li key={ele.id}>
                                <img src={ele.imgUrl} alt="" />
                                <div className={styles.info}>
                                    <div className={styles.desc}>
                                        <p>{ele.address}</p>
                                        <p>{ele.huxing}-{ele.area}m</p>
                                    </div>
                                    <div className={styles.type}>
                                        <a href="##" className={styles.zu}>{ele.chuzu}</a>
                                        <p>{ele.price}/月</p>
                                    </div>
                                </div>
                            </li>
                   })
               }
            
            </ul>
        </div>
    )
}
```

## 二、后台接口

### 2.1 热门房源接口

```js
//接口2：热门房源
router.get('/hotHouse', (req, res) => {
    let city = req.query.city || '北京'
    res.send(Mock.mock({
        status: 200,
        "list|6": [{
            "id|+1": 100,
            'chuzu|1': ['整租', '合租'], 
            'price|2000-8000': 1, //租金
            'huxing|1': ['一室一厅', '两室一厅', '三室两厅'], //户型
            'area|50-120.2': 1, //总面积
            address: city + ' - @cword(5,8)', //房源信息
            "imgUrl|+1": [
                'http://iwenwiki.com/api/livable/shop/z1.jpg',
                'http://iwenwiki.com/api/livable/details/2.jpg',
                'http://iwenwiki.com/api/livable/shop/z2.jpg',
                'http://iwenwiki.com/api/livable/details/4.jpg',
                'http://iwenwiki.com/api/livable/shop/z3.jpg',
                'http://iwenwiki.com/api/livable/details/6.jpg'
            ]
        }]
    }))
})

```



### 2.2 前端接口配置

```js
/**
 * 网络请求的方法
 */
import axios from 'axios'
import base from './base'
/**
 * 轮播接口
 */
export function getBanner(){
    return axios.get(base.banner)
}

/**
 * 热门房源
 */
export function getHotHouse(){
    return axios.get(base.hotHouse)
}
```



## 三、城市切换

### 3.1 效果图

效果：点击北京，跳转到新的路由组件 

步骤：

1、新建一个路由组件，注册路由

2、点击北京，跳转新页面

3、布局City组件， 提取CityHeader(返回功能处理)  、热门城市渲染





城市选择界面，返回首页功能：CityHeader.jsx 不是路由组件，不能直接路由跳转，处理方式两种：

第一种：withRouer  

```jsx
import {withRouter,useHistory} from 'react-router-dom'

// 返回上一页
  function back(){
    props.history.goBack();
  }

export default  withRouter(CityHeader)
```





第二种：useHistory

```jsx
import {withRouter,useHistory} from 'react-router-dom'

// 返回上一页
  function back(){
    // 第二种：useHistory
    history.goBack();
  }
```







​	![logo](images\home.png)

​	![logo](images\city.png)

### 3.2 代码实现

城市界面组件

```jsx
import React from 'react'
import CommonHeader from '../../components/CommonHeader/CommonHeader'
import styles from './style.module.less'
export default function Citys() {
    return (
        <div>
            {/* 公共的顶部--返回功能 */}
            <CommonHeader>城市选择</CommonHeader>

            {/* 当前城市 */}
            <div className={styles.box}>
                <div className={styles.title}>当前城市</div>
                <div className={styles.name}>北京</div>
            </div>
            {/* 热门城市 */}
            <div className={styles.box}>
                <div className={styles.title}>热门城市</div>
                <div className={styles.name}>上海</div>
                <div className={styles.name}>北京</div>
                <div className={styles.name}>天津</div>
            </div>

        </div>
    )
}
```

公共顶部组件

```jsx
import React from 'react'
import styles from './style.module.less'
//导入路由配置
import { withRouter,useHistory } from 'react-router-dom'

export default  function CommonHeader(props) {
    //使用路由的方法
    let history = useHistory()
    //定义函数
    function goBack(){
        console.log('props',props);
        // props.history.goBack();
        history.goBack();
    }
    return (
        <div className={styles.commonHeader}>
           
           <div className={styles.icon} onClick={goBack}>
               <i className='iconfont icon-fanhui'></i>
           </div>
           {/* 预留空间 */}
           <div className={styles.title}>
               { props.children }
           </div>
        </div>
    )
}

// export default withRouter(CommonHeader)
```

### 3.3 城市动态数据后台接口

```js
//首页-热门城市
router.get('/selectCity', (req, res) => {
    res.send({
        status: 200,
        citys: data
    })
})
```

### 3.4 热门城市获取

```jsx
import React,{useState,useEffect} from 'react'
import CommonHeader from '../../components/CommonHeader/CommonHeader'
import styles from './style.module.less'
import { getCitys } from '../../api/index'
export default function Citys() {
    //定义数据容器
    const [hotCity,setHotCity] = useState([]);

    //生命周期函数
    useEffect(()=>{
        getCitys()
        .then(res=>{
            console.log('城市列表',res.data.citys.indexCitys.hot);
            setHotCity(res.data.citys.indexCitys.hot)
        })

    },[])


    return (
        <div>
            {/* 公共的顶部--返回功能 */}
            <CommonHeader>城市选择</CommonHeader>

            {/* 当前城市 */}
            <div className={styles.box}>
                <div className={styles.title}>当前城市</div>
                <div className={styles.name}>北京</div>
            </div>
            {/* 热门城市 */}
            <div className={styles.box}>
                <div className={styles.title}>热门城市</div>
                {/* 遍历热门城市数据 */}
                {
                    hotCity.map(ele=>{
                        return  <div key={ele.id} className={styles.name}>
                            {ele.name}
                        </div>
                    })
                }
            </div>

        </div>
    )
}

```

## 四、redux存储数据

### 4.1 redux创建

index.js

```js
//创建store 
import { createStore,applyMiddleware } from 'redux'
import logger  from 'redux-logger'
import all from './reducers/index'

const store = createStore(all,applyMiddleware(logger))

export default store
```

citys.js

```js
//城市的actions操作和state数据
function citys(state='天津',action){//actions={type:'',payload:''}
    switch (action.type) {
        case 'setCity':
            state = action.payload;
            return state;

        default:
            return state;
    }
}

export default citys
```

reducers.js

```js
import  { combineReducers } from 'redux'
//导入其他reducres 
import citys from './citys'

const all = combineReducers({
    citys
})

export default all
```



### 4.2 首页获取

home.jsx

```jsx
import React,{useState,useEffect} from 'react'
import HomeHeader from './HomeHeader/HomeHeader'
// import AntdSwiper from '../../components/AntdSwiper/AntdSwiper'
import MySwiper from '../../components/MySwiper/MySwiper'
import HotHouse from './HotHouse/HotHouse'
import styles from './index.module.less'
//导入接口
import { getBanner,getHotHouse } from '../../api/index'
//获取redux数据
import { connect } from 'react-redux'
function Home(props) {
    //定义轮播数据容器
    const [banner,setBanner] = useState([])
    const [house,setHouse] = useState([])
    //生命周期函数
    useEffect(()=>{
        //1. 获取轮播图数据接口----------------------------
        getBanner()
        .then(res=>{
            console.log(res.data);
            //设置轮播数据
            setBanner(res.data.list)
        })

    },[])

    useEffect(()=>{
        //2. 热门房源信息--------------------------------
        getHotHouse({
            city:props.city
        })
        .then(res=>{
            console.log('房源信息',res.data);
            setHouse(res.data.list)
        })
    },[props.city])

    return (
        <div>
            {/* 顶部区域组件 */}
            <HomeHeader city={props.city}/>
        </div>
    )
}
//home界面获取redux里面存储的城市
export default connect(state=>{
    console.log('state',state);
    return {
        city:state.citys
    }
})(Home)
```

### 4.3 热门城市切换

​	![logo](images\house.png)

```jsx
import React,{useState,useEffect} from 'react'
import CommonHeader from '../../components/CommonHeader/CommonHeader'
import styles from './style.module.less'
import { getCitys } from '../../api/index'
import { connect } from 'react-redux'

function Citys(props) {
    //定义数据容器
    const [hotCity,setHotCity] = useState([]);
    //生命周期函数
    useEffect(()=>{
        getCitys()
        .then(res=>{
            console.log('城市列表',res.data.citys.indexCitys.hot);
            setHotCity(res.data.citys.indexCitys.hot)
        })

    },[])
    //定义函数
    function selectCity(e){
        console.log('点击城市名称',e.target.innerHTML);
        props.changeCity(e.target.innerHTML)
        //返回首页
        props.history.push('/')
        //数据持久化
        localStorage.setItem('cityname',e.target.innerHTML)

    }
    return (
        <div>
            <CommonHeader>城市选择</CommonHeader>
            <div className={styles.box}>
                <div className={styles.title}>当前城市</div>
                <div className={styles.name}>{props.city}</div>
            </div>
            {/* 热门城市 */}
            <div className={styles.box}>
                <div className={styles.title}>热门城市</div>
                {/* 遍历热门城市数据 */}
                {
                    hotCity.map(ele=>{
                        return  <div key={ele.id} className={styles.name} onClick={selectCity}>
                            {ele.name}
                        </div>
                    })
                }
            </div>

        </div>
    )
}
export default connect(state=>{
    return {
        city:state.citys
    }
},dispatch=>{
    return {
        changeCity:(val)=>dispatch({type:'setCity',payload:val})
    }
})(Citys)
```

