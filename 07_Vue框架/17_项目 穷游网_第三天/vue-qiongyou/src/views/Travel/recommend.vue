<template>
  <div class="recommend">
    <h2 class="title">今日推荐</h2>
    <div class="wrap">
      <el-row>
        <!-- span	栅格占据的列数	number
        offset	栅格左侧的间隔格数	number
        -->
        <el-col :span="5" v-for="item in list" :key="item.data.id" :offset="1">
          <el-card :body-style="{ padding: '0px' }">
            <img height="185" :src="item.data.pic" class="image" />
            <div style="padding: 14px;">
              <span class="th">{{item.data.subject}}</span>
              <div class="bottom clearfix">
                <time class="time" v-if="item.data.username">{{ item.data.username }}</time>
                <el-button type="text" v-if="item.data.tag" class="button">{{item.data.tag}}</el-button>
                <el-button
                  type="text"
                  v-else-if="item.data.views"
                  class="button"
                >{{item.data.views}} 浏览过</el-button>

                <el-button
                  type="text"
                  v-else-if="item.data.price"
                  class="button"
                  v-html="item.data.price"
                ></el-button>
              </div>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import { getRecommend } from "@/api";
export default {
  data() {
    return {
      currentDate: new Date(),
      list: []
    };
  },
  created() {
    this.getRecommendList();
  },
  methods: {
    async getRecommendList() {
      try {
        const res = await getRecommend();
        console.log(res);
        this.list = res.data;
      } catch (error) {
        console.log(error);
      }
    }
  }
};
</script>

<style lang="less" scoped>
.recommend {
  width: 1180px;
  margin: 20px auto;
  .title {
    font-size: 30px;
    text-align: center;
    font-weight: normal;
    margin: 20px auto;
  }
  .wrap {
    .el-card {
      width: 275px;
      height: 300px;
      margin-bottom: 20px;
      .th {
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
      }
    }
  }
}
.time {
  font-size: 13px;
  color: #999;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
}

.button {
  padding: 0;
  color: #333;
  float: right;
}

.image {
  width: 100%;
  display: block;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both;
}
</style>