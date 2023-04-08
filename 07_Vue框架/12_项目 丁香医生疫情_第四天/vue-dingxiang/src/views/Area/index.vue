

<template>
  <div class="area">
    <div class="bg">
      <div class="content">
        <div class="th">全国风险地区汇总</div>

        <div class="title">
          <img src="@/assets/images/high.png" alt />
          高风险地区 {{high.length}} 个
        </div>
        <ul class="list" v-if="high.length>0">
          <li v-for="(item,index) in high" :key="index">{{item}}</li>
        </ul>

        <div class="title">
          <img src="@/assets/images/mid.png" alt />
          中风险地区 {{mid.length}} 个
        </div>
        <ul class="list" v-if="mid.length>0">
          <li v-for="(item,index) in mid" :key="index">{{item}}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { getCovNews } from "@/api";
export default {
  data() {
    return {
      high: [], //高风险
      mid: [] //中风险
    };
  },
  created() {
    this.getRiskArea();
  },
  methods: {
    // 获取风险地区
    async getRiskArea() {
      try {
        const res = await getCovNews();
        console.log(res.newslist[0].riskarea);
        this.high = res.newslist[0].riskarea.high;
        this.mid = res.newslist[0].riskarea.mid;
      } catch (error) {
        console.log(error);
      }
    }
  }
};
</script>

<style lang="less" scoped>
.area {
  background-color: #f5f5f5;
  .bg {
    background-image: url("@/assets/images/area.png");
    height: 3.6rem;
    background-size: cover;
    padding-top: 2.6rem;
    .content {
      background-color: #fff;
      margin: 0 0.2rem;
      border-radius: 0.2rem 0.2rem 0 0;
      .th {
        font-size: 0.36rem;
        padding: 0.2rem;
        // 父级引用
        &::before {
          content: "";
          display: inline-block;
          width: 0.1rem;
          height: 0.4rem;
          background-color: blue;
          vertical-align: middle;
        }
      }
      .title {
        margin: 0 0.3rem;
        img {
          width: 0.4rem;
          vertical-align: bottom;
        }
      }
      .list {
        padding: 0.2rem;
        li {
          background-color: #f5f5f5;
          margin-bottom: 0.2rem;
          padding: 0.07rem 0.2rem;
        }
      }
    }
  }
}
</style>