<template>
  <div class="news">
    <div class="title">新 闻</div>
    <div class="wrapper">
      <div class="left"></div>
      <div class="center">
        <!-- 
          type	风格类型	string	card/border-card
          label	选项卡标题	string

        -->
        <el-tabs type="border-card">
          <el-tab-pane label="要文">
            <ul class="list">
              <li v-for="item in yaowen" :key="item.docid">
                <img :src="item.imgsrc" alt />
                <div class="info">
                  <div class="title">{{item.title}}</div>
                </div>
              </li>
            </ul>
            <!-- 分页器 -->
            <MyPagination :total='total' :pageSize='pageSize' @getPage='getYaowen'/>
          </el-tab-pane>
          <el-tab-pane label="国内">
            <ul class="list">
              <li v-for="item in guonei" :key="item.docid">
                <img :src="item.imgsrc" alt />
                <div class="info">
                  <div class="title">{{item.title}}</div>
                </div>
              </li>
            </ul>
            <!-- 分页器 -->
            <MyPagination :total='total' :pageSize='pageSize' @getPage='getGuonei'/>
          </el-tab-pane>
          <el-tab-pane label="国际">国际</el-tab-pane>
        </el-tabs>
      </div>
      <div class="right"></div>
    </div>
  </div>
</template>

<script>
import { getNews } from "@/api";
import { yaowen, guonei } from "@/api/newsType.js";
import MyPagination from "@/components/MyPagination.vue";
export default {
  components: {
    MyPagination
  },
  data() {
    return {
      yaowen: [], //要文
      guonei:[],//国内
      total:30,// 总条目数
      pageSize:1
    };
  },
  created() {
    this.getYaowen(1);
    this.getGuonei(1);
  },
  methods: {
    // getCurrentPage(num){
    //   // console.log(num);
    //   this.getYaowen(num)
    // },
    // 获取要文数据
    async getYaowen(pageNum) {
      try {
        const res = await getNews(yaowen, pageNum);
        console.log(res);
        this.yaowen = res;
      } catch (error) {
        console.log(error);
      }
    },
    // 获取国内数据
    async getGuonei(pageNum) {
      try {
        const res = await getNews(guonei, pageNum);
        console.log("25===", res);
        this.guonei=res;
      } catch (error) {
        console.log(error);
      }
    }
  }
};
</script>

<style lang="less" scoped>
.news {
  width: 1200px;
  margin: 0 auto;
  .title {
    font-size: 28px;
    font-weight: 900;
    margin: 20px 0;
    text-align: center;
  }
  .wrapper {
    display: flex;
    .left,
    .right {
      width: 200px;
      background-color: #fff;
      min-height: 600px;
    }
    .center {
      flex: 1;
      // background-color: pink;
      margin: 0 10px;
      .list {
        li {
          display: flex;
          margin: 7px 0;
          padding: 5px 0;
          border-bottom: 1px solid #eee;
          img {
            width: 140px;
            height: 88px;
            margin-right: 10px;
          }
          .title {
            font-size: 16px;
          }
        }
      }
    }
  }
}

.el-tabs--border-card {
  border-top: 2px solid red;
}
/deep/ .el-tabs__item {
  height: 50px;
  line-height: 50px;
  width: 65px;
}

// 深层穿透
/deep/ .el-tabs--border-card > .el-tabs__header .el-tabs__item.is-active {
  color: #fff;
  background-color: red;
}
</style>