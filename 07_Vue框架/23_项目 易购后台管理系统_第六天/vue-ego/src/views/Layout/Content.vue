

<template>
  <div class="content">
    <!-- 头部 -->
    <div class="header">
      <i class="iconfont icon-zhedie" v-if="!isCollapse" @click="changeCollapse"></i>
      <i class="iconfont icon-zhankai" v-else @click="changeCollapse"></i>

      <!-- 右侧 -->
      <div class="header-right">
        <!-- command	点击菜单项触发的事件回调	dropdown-item 的指令 -->
        <el-dropdown @command="changeLang">
          <span class="el-dropdown-link">
            多语言
            <i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="zh">中文</el-dropdown-item>
            <el-dropdown-item command="en">英文</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>

        <div class="user">
          <!-- 第一种方式 -->
          <!-- <span>欢迎，{{$store.state.userModule.userinfo.username}}</span> -->
          <!-- 第二种方式 -->
          <span>欢迎，{{userinfo.username}}</span>
          <i class="el-icon-switch-button" @click="exit"></i>
        </div>
      </div>
    </div>

    <!-- 二级路由出口  舞台 -->
    <router-view></router-view>
  </div>
</template>

<script>
import {mapState} from  'vuex'
export default {
  props: ["isCollapse"],
  computed: {
    ...mapState('userModule',['userinfo'])
  },
  methods: {
    changeCollapse() {
      // 自定义事件，让父组件修改是否折叠状态
      this.$emit("changeMenu");
    },
    // 点击切换
    changeLang(command) {
      // console.log(command);
      this.$i18n.locale = command;
    },
    // 退出登录
    exit(){
      // 清空vuex
      this.$store.commit('userModule/delUser')
      
      // 刷新当前页
      this.$router.go(0);
    }
  }
};
</script>

<style lang="less" scoped>
.content {
  .header {
    height: 50px;
    line-height: 50px;
    background-color: #1e78bf;
    .iconfont {
      font-size: 25px;
      color: #fff;
    }
    .header-right {
      float: right;
      color: #fff;
      .user {
        float: right;
        margin: 0 10px;
        font-size: 16px;
        i {
          margin-left: 10px;
        }
      }
    }
  }
  .el-dropdown-link {
    cursor: pointer;
    color: #fff;
  }
  .el-icon-arrow-down {
    font-size: 16px;
  }
}
</style>