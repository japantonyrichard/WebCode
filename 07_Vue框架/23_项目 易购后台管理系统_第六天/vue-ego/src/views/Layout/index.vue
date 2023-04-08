

<template>
  <div class="layout">
    <!-- 左侧菜单 -->
    <MyMenu class="menu" :isCollapse="isCollapse" />
    <!-- 右侧内容区 -->
    <Content
      class="content"
      :isCollapse="isCollapse"
      @changeMenu="changeMenu"
      :class="{active:isCollapse}"
    />
  </div>
</template>

<script>
import MyMenu from "./MyMenu.vue";
import Content from "./Content.vue";
export default {
  components: {
    MyMenu,
    Content
  },
  data() {
    return {
      isCollapse: false //是否折叠  false 展开
    };
  },
  methods: {
    // 修改折叠状态
    changeMenu() {
      this.isCollapse = !this.isCollapse;
    }
  }
};
</script>

<style lang="less" scoped>
.layout {
  // display: flex;
  .menu {
    // 左侧不动，而且充满全屏
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    // width: 200px;
    // min-height: 500px;
    background-color: #4a73be;
  }
  .content {
    // flex: 1;
    margin-left: 200px;
    min-height: 1000px;
    transition: all 0.5s;
  }
  .active {
    margin-left: 64px;
  }
}
</style>