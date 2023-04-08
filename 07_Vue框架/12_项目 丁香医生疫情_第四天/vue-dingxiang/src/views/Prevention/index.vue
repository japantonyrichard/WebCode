

<template>
  <div class="container">
    <img src="@/assets/images/wuzi.png" style="width:100%" alt />
    <div class="outer">
      <van-tabs v-model="active" animated>
        <van-tab v-for="item in arr" :title="item.title">
          <img :src="item.img" width="100%" alt />
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script>
import img1 from "@/assets/images/jiujing.png";
import img2 from "@/assets/images/kouzhao.png";

export default {
  data() {
    return {
      active: 0,
      arr: [
        {
          title: "酒精",
          img: img1
        },
        {
          title: "口罩",
          img: img2
        }
      ]
    };
  }
};
</script>

<style lang="less" scoped>
.container {
  background-color: #3343ff;
  .outer {
    padding: 0.2rem;
  }
}
</style>