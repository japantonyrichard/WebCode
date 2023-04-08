<template>
  <div class="laimei">
    <h2>蓝莓酱</h2>
    <ul class="list">
      <li class="item" v-for="(item,index) in lanmei" :key="index">
        <img :src="item.img" alt />
        <span>{{item.title}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ["lanmei"]
};
</script>

<style lang="less" scoped>
.laimei {
  width: 1200px;
  margin: 20px auto;
  h2 {
    text-align: center;
    font-size: 30px;
    margin: 10px 0;
  }
  .list {
    display: flex;
    flex-wrap: wrap;
    // justify-content:space-between;
    .item {
      position: relative;
      width: 220px;
      height: 220px;
      margin: 10px;

      img{
        width: 100%;
      }
      span {
        position: absolute;
        bottom: 10px;
        right: 10px;
        background-color: #eee;
        padding: 4px;
        border-radius: 4px;
      }
    }
  }
}
</style>