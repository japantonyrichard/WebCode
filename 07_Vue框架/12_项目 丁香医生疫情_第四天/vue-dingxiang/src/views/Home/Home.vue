<template>
  <div class="home">
    <!-- 1、图片 -->
    <div class="logo">
      <img src="@/assets/images/1.jpg" style="width:100%" alt />
    </div>
    <!-- 2、新闻 -->
    <CovNews :news="news" />
    <!-- 3、导航 -->
    <ul class="list">
      <li class="item">
        <router-link to="/area">
          <img src="@/assets/images/1.png" />
          <div>风险地区</div>
        </router-link>
      </li>
      <li class="item">
        <router-link to="/hesuan">
          <img src="@/assets/images/2.png" />
          <div>核酸检测</div>
        </router-link>
      </li>
      <li class="item">
        <router-link to="/prevention">
          <img src="@/assets/images/3.png" />
          <div>防疫物资</div>
        </router-link>
      </li>
      <li class="item">
        <router-link to="/travel">
          <img src="@/assets/images/4.png" />
          <div>出行政策</div>
        </router-link>
      </li>
    </ul>

    <!-- 4、全国数据统计 -->
    <CovNum :covData="covData" />

    <!-- 5、地图 -->
    <!-- <Echarts/> -->
    <ChinaMap />

    <WorldMap />

    <!-- 6、轮播图 -->
    <Swiper />
  </div>
</template>

<script>
import CovNews from "./CovNews";
import CovNum from "./CovNum";
import Echarts from "./Echarts/Echarts.vue";
import ChinaMap from "./Echarts/ChinaMap.vue";
import WorldMap from "./Echarts/WorldMap.vue";
import Swiper from '../../components/Swiper.vue'
import { getCovNews } from "@/api";
export default {
  data() {
    return {
      news: [], //新闻
      covData: {} //全国数据
    };
  },
  components: {
    CovNews,
    CovNum,
    Echarts,
    ChinaMap,
    WorldMap,
    Swiper
  },
  mounted() {
    getCovNews()
      .then(res => {
        console.log(res);
        // 新闻
        this.news = res.newslist[0].news;
        // 数据
        this.covData = res.newslist[0].desc;
      })
      .catch(err => {
        console.log(err);
      });
  }
};
</script>

<style lang="less" scoped>
.list {
  display: flex;
  padding-bottom: 0.2rem;
  .item {
    flex: 1;
    text-align: center;
    img {
      width: 0.8rem;
    }
  }
}
</style>