<template>
  <div>
    <!-- 1、轮播图 -->
    <MyBanner :banner="banner" />
    <!-- 2、蓝莓酱 -->
    <Lamei :lanmei="lanmei" />
    <!-- 3、分页器 -->
    <MyPagination :total="total" :page-size="pageSize" @getPage='getLanmeiByPageNum' />
  </div>
</template>

<script>
import MyBanner from "@/components/MyBanner.vue";
import Lamei from "./Lamei.vue";
import MyPagination from "@/components/MyPagination.vue";
import { getBanner, getLanmei } from "@/api/index.js";
export default {
  components: {
    MyBanner,
    Lamei,
    MyPagination
  },
  created() {
    this.getBannerList(); //获取轮播图
    this.getLanmeiByPageNum(1); // 获取蓝莓酱列表
  },
  data() {
    return {
      banner: [], //轮播图
      lanmei: [], // 蓝莓酱列表
      total: 100, //总条目数===》一共有多少页  
      pageSize: 1 //一页显示1条
    };
  },
  methods: {
    getBannerList() {
      getBanner()
        .then(res => {
          console.log(res);
          if (res.success == true) {
            let banner = res.banner;
            banner.forEach(item => {
              // [].replace('旧值','新值')
              item.img = item.img.replace(
                "http://www.wwtliu.com/sxtstu",
                "http://iwenwiki.com/api"
              );
            });
            this.banner = banner;
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    // 根据页码获取蓝莓酱列表
    async getLanmeiByPageNum(pageNum) {
      try {
        const res = await getLanmei({ blueBerryjam_id: pageNum });
        if (res.success == true) {
          console.log(res);
          res.blueBerryJam.forEach(item => {
            item.img = item.img.replace(
              "http://iwen.wiki/sxtstu",
              "http://iwenwiki.com/api"
            );
          });

          this.lanmei = res.blueBerryJam;
          this.pageSize=1;
          this.total=res.maxPage;  //共8页
        }
      } catch (error) {
        console.log(error);
      }
    },
    // 接受子组件传递过来的页码
    // getPageNum(pageNum){
    //   this.getLanmeiList(pageNum)
    // }
  }
};
</script>

<style lang="less" scoped>
</style>