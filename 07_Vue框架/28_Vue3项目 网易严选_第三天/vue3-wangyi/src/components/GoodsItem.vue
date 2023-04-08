<template>
  <div class="goods-item">
    <router-link to="/">
      <img :src="good.picture" alt />
    </router-link>
    <div class="title">{{good.name}}</div>
    <div class="type">海鲜年货</div>
    <div class="price">￥{{good.price}}</div>
    <div class="extra">
      <router-link to="/">
        <div>找相似</div>
        <div>发现更多宝贝</div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
    props:['good']
};
</script>

<style lang="less" scoped>
.goods-item {
  position: relative;
  width: 200px;
  height: 300px;
  border: 1px solid #ddd;
  overflow: hidden;
  margin-bottom: 7px;
  img {
    display: block;
    margin: 0 auto;
    width: 160px;
    height: 160px;
  }
  .title {
    font-size: 16px;
  }
  .type {
    color: #ccc;
    margin: 10px 0;
  }
  .price {
    color: @priceColor;
  }
  .extra {
    position: absolute;
    left: 0;
    bottom: 0;
    right: 0;
    height: 70px;
    background-color: @primaryColor;
    // 初始状态位置
    transform: translate3d(0, 100%, 0);
    // 过渡加在元素本身上
    transition: all .5s;
    div {
      font-size: 16px;
      color: #fff;
      text-align: center;
      margin: 3px 0;
    }
    div:last-child {
      font-size: 14px;
    }
  }
  // 划过每个商品小单元,最终位置
  &:hover {
    border: 1px solid @primaryColor;
    .extra {
      transform: none;
    }
  }
}
</style>