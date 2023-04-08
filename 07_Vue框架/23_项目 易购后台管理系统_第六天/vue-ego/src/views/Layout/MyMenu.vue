
<template>
  <div>
    <!-- 路由导航 -->
    <!-- <ul>
            <li>
                <router-link to="/">首页</router-link>
            </li>
            <li>
                <router-link to="/goods">商品管理</router-link>
            </li>
            <li>
                <router-link to="/params">参数与规格</router-link>
            </li>
    </ul>-->

    <!-- 
            active-text-color 选中颜色，高亮颜色
            router	是否使用 vue-router 的模式，启用该模式会在激活导航时以 index 作为 path 进行路由跳转	boolean
            collapse	是否水平折叠收起菜单（仅在 mode 为 vertical 时可用）	boolean	—	false
    -->
    <el-menu
      :default-active="$route.path"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="#4a73be"
      text-color="#fff"
      active-text-color="#ffd04b"
      router
      :collapse='isCollapse'
    >
      <el-menu-item>
        <span slot="title">易购管理系统</span>
      </el-menu-item>
      <el-menu-item index="/">
        <i class="el-icon-s-home"></i>
        <!-- <span slot="title">首页</span> -->
        <!-- {{ $t("message.hello") }} -->
        <span slot="title">{{$t("menu.home")}}</span>

      </el-menu-item>
      <!-- 带子项 el-submenu； -->
      <el-submenu index="/goods/goods-list">
        <template slot="title">
          <i class="el-icon-s-goods"></i>
          <!-- <span>商品管理</span> -->
           <span slot="title">{{$t("menu.goods")}}</span>
        </template>
        <el-menu-item index="/goods/goods-list">
          <template>
            <i class="el-icon-menu"></i>
            <!-- <span slot="title">商品列表</span> -->
             <span slot="title">{{$t("menu.goodsList")}}</span>
          </template>
        </el-menu-item>
        <el-menu-item index="/goods/goods-add">
          <template>
            <i class="el-icon-circle-plus"></i>
            <!-- <span slot="title">商品添加</span> -->
             <span slot="title">{{$t("menu.goodsAdd")}}</span>
          </template>
        </el-menu-item>
      </el-submenu>

      <el-menu-item index="/params">
        <i class="el-icon-document-copy"></i>
        <!-- 参数列表，包装管理 -->
        <!-- <span slot="title">规格管理</span> -->
         <span slot="title">{{$t("menu.params")}}</span>
      </el-menu-item>

      <el-menu-item index="/order">
        <i class="el-icon-s-order"></i>
        <span slot="title">订单管理</span>
      </el-menu-item>

      <el-menu-item index="/user">
        <i class="el-icon-user-solid"></i>
        <span slot="title">用户管理</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  props:['isCollapse'],
  data() {
    return {
      
    }
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>

<style lang="less" scoped>
.el-menu {
  border-right: 0;
}
// 不折叠，显示宽200px
.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
</style>