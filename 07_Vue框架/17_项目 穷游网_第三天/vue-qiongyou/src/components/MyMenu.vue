<template>
  <div class="nav">
    <!-- <router-link to="/">首页</router-link>
    <router-link to="/news">新闻</router-link>
    <router-link to="/about">我的</router-link>
    <router-link to="/travel">旅游</router-link>-->
    <!-- 
        el-menu
            default-active	当前激活菜单的 index	string
            mode	模式	string	horizontal / vertical
            active-text-color	当前激活菜单的文字颜色（仅支持 hex 格式）	string
            router	是否使用 vue-router 的模式，启用该模式会在激活导航时以 index 作为 path 进行路由跳转	boolean	—	false

            事件：
                @select select	菜单激活回调	index: 选中菜单项的 index, indexPath: 选中菜单项的 index path
        el-menu-item
            index	唯一标志	string/null
    -->

    <el-menu
      :default-active="$route.path"
      class="el-menu"
      mode="horizontal"
      @select="handleSelect"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      router
    >
      <el-menu-item index="/">首页</el-menu-item>
      <el-menu-item index="/news">新闻</el-menu-item>
      <el-menu-item index="/about">我的</el-menu-item>
      <el-menu-item index="/travel">旅游</el-menu-item>
      <div class="nav-right">
        <!-- !$store.state.LoginModule.userinfo.token -->
        <el-button @click="login" v-if="!userinfo.token">登 陆</el-button>
        <template v-else>
          <span>欢迎，XXX</span>
          <i class="el-icon-switch-button" @click="exit"></i>
        </template>
      </div>
    </el-menu>
  </div>
</template>

<script>
import { mapState,mapMutations } from "vuex";

export default {
  data() {
    return {
      activeIndex2: "1"
    };
  },
  created() {
    console.log(this);
    //  第一种方式：取
    // let index = sessionStorage.getItem("index");
    // if (index) {
    //   this.activeIndex2 = index;
    // }
  },
  computed: {
    ...mapState("LoginModule", ["userinfo"])
  },
  methods: {
    ...mapMutations('LoginModule',['delUser']),
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
      //   第一种方式：存
      //   sessionStorage.setItem("index", key);
    },
    // 登陆
    login(){
      this.$router.push('/login')
    },
    // 退出
    exit() {
      // 1、清空vuex用户信息  第一种
      // this.$store.commit('LoginModule/delUser');
      // 第二种：
      this.delUser();
      // 2、清空本地存储
      localStorage.removeItem('user')
      // 3、页面跳转
      // this.$router.push('/') ;//跳转到首页
      // 刷新当前页
      console.log(this.$route.path);
      // this.$router.push(this.$route.path);// 自己跳转自己，不重新导航
      this.$router.go(0);  //刷新

    }
  }
};
</script>

<style lang="less" scoped>
.nav {
  background-color: #545c64;
  .el-menu {
    width: 1200px;
    margin: 0 auto;
  }
  .el-menu.el-menu--horizontal {
    border-bottom: 0;
  }
  .nav-right {
    float: right;
    line-height: 60px;
    color: #fff;
    font-size: 20px;
  }
}
</style>