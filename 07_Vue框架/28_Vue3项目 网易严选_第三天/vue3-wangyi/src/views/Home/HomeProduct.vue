

<template>
  <div class="home-product">
    <Panel :title="item.name" v-for="item in productArr" :key='item.id'>
      <!-- 使用右侧插槽 -->
      <template #right>
        <div class="sub">
          <router-link to="/" v-for='sub in item.children' :key='item.id'>{{sub.name}}</router-link>
        </div>
        <AppMore />
      </template>

      <!-- 列表 -->
      <div class="product">
        <!-- 左侧 -->
        <router-link class="left" to="/">
          <img :src="item.picture" alt />
        </router-link>
        <!-- 右侧 -->
        <div class="right">
          <GoodsItem v-for="good in item.goods" :key="good.id" :good='good'/>
        </div>
      </div>
    </Panel>
  </div>
</template>

<script>
import { ref } from "vue";
import Panel from "@/components/Panel.vue";
import GoodsItem from "@/components/GoodsItem.vue";
import { getProductList } from "@/api";
export default {
  components: {
    Panel,
    GoodsItem
  },
  setup(props) {
    // 定义变量
    let productArr = ref(null);
    // 请求加载商品区块
    const getProduct = async () => {
      try {
        const res = await getProductList();
        console.log(res);
        if (res.msg == "操作成功") {
          productArr.value = res.result;
        }
      } catch (error) {
        console.log(error);
      }
    };

    // 调用
    getProduct();

    return { productArr };
  }
};
</script>

<style lang="less" scoped>
.home-product {
  .sub {
    margin-right: 40px;
    a {
      font-size: 16px;
      padding: 3px 10px;
      margin: 0 5px;
      border-radius: 4px;
      &:hover {
        color: #fff;
        background-color: @primaryColor;
      }
    }
  }
  .product {
    display: flex;
    .left {
      width: 240px;
      height: 610px;
      margin-right: 10px;
      border: 1px solid #ccc;
      img {
        width: 240px;
        height: 100%;
      }
    }
    .right {
      flex: 1;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
    }
  }
}
</style>