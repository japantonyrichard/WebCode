<template>
  <div>
    <!-- 轮播图 -->
    <swiper ref="mySwiper" :options="swiperOptions">
      <swiper-slide v-for="(item,index) in banner" :key="index">
        <img :src="item.image" width="100%" alt />
      </swiper-slide>

      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>

    <!-- 点击切换轮播图的方块 -->
    <ul class="list">
      <li
        :class="{active:index==num}"
        @click="changeSwiper(index)"
        v-for="(item,index) in banner"
        :key="item"
      >{{item.title}}</li>
    </ul>
  </div>
</template>

<script>
import { getSwiper } from "@/api";
export default {
  data() {
    // 保存组件实例
    let that = this;
    return {
      banner: [], //轮播图数据
      num: 0, //控制方块高亮
      swiperOptions: {
        pagination: {
          el: ".swiper-pagination"
        },
        autoplay: true, //自动轮播
        loop: true, //无线循环
        on: {
          slideChangeTransitionEnd: function() {
            console.log(this.activeIndex); //切换结束时，告诉我现在是第几个slide 2,3,4,5,6
            console.log("num======", that.num); // 1.2.3.4.5
            if (this.activeIndex === 6) {
              that.num = 0;
            } else {
              that.num = this.activeIndex - 1;
            }
          }
        }
      }
    };
  },
  //计算属性
  computed: {
    // 获取Swiper 实例
    swiper() {
      return this.$refs.mySwiper.$swiper;
    }
  },
  mounted() {
    // console.log("Current Swiper instance object", this.swiper);
    // 切换到指定轮播图页面
    // this.swiper.slideTo(3, 1000, false);
    this.getBanner();
  },
  methods: {
    // 点击切换轮播图
    changeSwiper(index) {
      this.num = index;
      // 切换轮播图
      this.swiper.slideTo(index + 1, 1000, false);
    },
    /**
     * 获取轮播图
     */
    async getBanner() {
      try {
        const res = await getSwiper();
        console.log(res);
        if (res.status == 200) {
          this.banner = res.result;
        }
      } catch (error) {
        console.log(error);
      }
    }
  }
};
</script>

<style lang="less" scoped>
.list {
  display: flex;
  li {
    flex: 1;
    width: 1rem;
    height: 1rem;
    background-color: #ccc;
    margin: 0.1rem;
    // 1、先准备一个高亮的样式
    &.active {
      background-color: skyblue;
    }
  }
}
</style>