
<template>
  <div class="app-top-nav">
    <div class="w">
      <ul>
        <template v-if="userinfo.token">
          <li>
            <a href="javascript:;">{{userinfo.username}}</a>
          </li>
          <li>
            <a href="javascript:;">退出登录</a>
          </li>
        </template>
        <li v-else>
          <a href="javascript:;">注册/登录</a>
        </li>
        <li>
          <a href="javascript:;">我的订单</a>
        </li>
        <li>
          <a href="javascript:;">会员</a>
        </li>
        <li>
          <a href="javascript:;">甄选家</a>
        </li>
        <li>
          <a href="javascript:;">客户服务</a>
        </li>
        <li>
          <a href="javascript:;">
            <i class="iconfont icon-phone"></i>
            APP
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { computed } from "vue";
export default {
  setup(props) {
    const store = useStore();
    // console.log(store);
    const userinfo = computed(() => {
      return store.state.userModule.userinfo;
    });

    return { userinfo };
  }
};
</script>

<style lang="less" scoped>
.app-top-nav {
  background-color: #333;
  ul {
    height: 40px;
    line-height: 40px;
    display: flex;
    // 设置主轴上元素的排列
    justify-content: flex-end;
    li {
      a {
        font-size: 12px;
        color: #ccc;
        padding: 0 15px;
        border-left: 1px solid #ccc;
        // 父级引用
        &:hover {
          color: @primaryColor;
        }
      }
    }
    li:nth-child(1) {
      a {
        border-left: 0;
      }
    }
  }
}
</style>