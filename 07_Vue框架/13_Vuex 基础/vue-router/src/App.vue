<template>
  <div id="app">
    <nav>
      <!-- 路由导航 -->
      <!-- exact 严格匹配 只有一个/才能匹配高亮，多一个都不行！ -->
      <router-link exact to="/">Home</router-link> |
      <!-- 
        标签上添加高亮样式：activeClass="aa" exactActiveClass="bb" 
        缺点：每个都得添加  所以不推荐使用
      -->
      <router-link to="/about" activeClass="aa" exactActiveClass="bb">About</router-link> |
      <!-- <router-link to="/about" replace>About</router-link> | -->
      <!-- 动态路由传参 -->
      <router-link to="/user/123/zhangsan">User1</router-link> |
      <!-- 声明式导航 -->
      <router-link to="/user/456/lisi">User2</router-link> |
      <router-link :to="{name:'user',params:{id:111,name:'aaa'}}">命名路由-声明式</router-link> |
      <router-link to="/nest">Nest(巢)嵌套路由</router-link>
      <hr>
      <router-link exact to="/nest/nest1">Vuex基本使用</router-link> |
      <router-link exact to="/nest/nest2">模块管理</router-link> |
      <router-link to="/nest/nest2">严格模式--表单处理</router-link>
    </nav>
    <!-- 路由出口（舞台）（一级路由） -->
    <router-view/>
  </div>
</template>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    // & 父级引用 & 代表 a
    &.router-link-exact-active {
      color: #42b983;
    }

    &.router-link-active {
      color: #42b983;
    }
  }
}

// 不用默认命名
.aa{
  color: red;
}
.bb{
  color: red;
}
</style>
