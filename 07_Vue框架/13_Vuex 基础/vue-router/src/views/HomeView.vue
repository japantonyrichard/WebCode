<template>
  <div class="home">
    <h2>Home</h2>
    <button @click="toAbout">编程式导航，跳转到about页面，不带参数</button>
    <button @click="toUser">编程式导航，跳转到User页面，带参数</button>
    <!-- =============================================================================== -->
    <hr>
    <h2>Home</h2>
    <Add/>
    <hr>
    <Sub/>
  </div>
</template>

<script>
// @ is an alias to /src

import Add from '../components/Add'
import Sub from '../components/Sub'

export default {
  name: 'HomeView',
  components: {
    Add,
    Sub,
  },
  created(){
    // console.log(this);
    // ================================================================================
    console.log(this);
  },
  methods: {
    // 不带参数
    toAbout() {
      // 第一种：字符串 写法
      // this.$router.push('/about')
      this.$router.push('/about').catch(err=>{}) // 解决上一行报错
      // 第二种：对象 写法
      // this.$router.push({
      //   path:'/about'
      // })
      // // 第三种：命名路由 写法
      // this.$router.push({  // push    有历史记录，有缓存
      // // this.$router.replace({  // replace 没有历史记录，无缓存
      //   name:'about'
      // })
    },
    // 带参数
    toUser(){
      // 第一种方式：字符串拼接   /user/123/zhangsan
      // this.$router.push('/user/789/wangwu')
      // 第二种方式：name+params
      this.$router.push({
        name:'user',
        params:{
          id:'100',
          name:'damao'
        }
      })
    }
  },
}
</script>
