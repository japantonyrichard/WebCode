<template>
  <ul class="header-nav">
    <li class="item">
      <router-link class="link" to="/">首页</router-link>
    </li>
    <li
      class="item"
      v-for="item in cateList"
      :key="item.id"
      @mouseenter="show(item)" 
      @mouseleave="hide(item)"
    >
      <router-link class="link" @click="hide(item)" :to="'/category/'+item.id">{{item.name}}</router-link>
      <!-- 弹出层 v-if="item&&item.subCateList&&item.subCateList.length>0"-->
      <div
        class="layer"
        :class="{active:item.open}"
        v-if="item&&item.subCateList&&item.subCateList.length>0"
      >
        <ul>
          <li v-for="ele in item.subCateList.slice(0,6)" :key="ele.id">
            <a href="##">
              <img :src="ele.bannerUrl" alt />
              <div>{{ele.name}}</div>
            </a>
          </li>
        </ul>
      </div>
    </li>
  </ul>
</template>

<script>
import { useStore } from "vuex";
import { computed } from "vue";
export default {
  setup(props) {
    const store = useStore();
    // 从仓库里读取分类数据
    const cateList = computed(() => {
      return store.state.categoryModule.cateList;
    });

    // 显示：1)鼠标划入，显示弹出层
    const show = item => {
      item.open = true;
    };
    // 隐藏：1）鼠标移走  2）鼠标点击二级菜单，下面的弹出层隐藏
    const hide = item => {
      item.open = false;
    };

    return { cateList, show, hide };
  }
};
</script>

<style lang="less" scoped>
.header-nav {
  position: relative;
  .item {
    float: left;
    height: 40px;
    line-height: 40px;
    padding: 0 10px;
    font-size: 15px;
    font-weight: bold;
    // 选中高亮设置
    .router-link-exact-active {
      padding-bottom: 5px;
      color: @primaryColor;
      border-bottom: 1px solid @primaryColor;
    }
    // 划过li   a 高亮
    &:hover {
      .link {
        padding-bottom: 5px;
        color: @primaryColor;
        border-bottom: 1px solid @primaryColor;
      }
      // 划过二级导航，让下面的弹出层显示
      .layer {
        // opacity: 0;
        height: 100px;
      }
      // 显示
      .active {
        opacity: 1;
      }
    }

    // 弹出层
    .layer {
      overflow: hidden;
      opacity: 0;
      // 高度0
      height: 0;
      // 过渡加在本身上
      transition: all 0.5s;
      position: absolute;
      top: 45px;
      left: 0;
      width: 1100px;

      box-shadow: 0 0 5px 5px #ccc;
      ul {
        display: flex;
        li {
          width: 100px;
          height: 100px;
          text-align: center;

          img {
            width: 50px;
            height: 50px;
          }
          &:hover {
            background-color: #f5f5f5;
          }
        }
      }
    }
  }
}
</style>